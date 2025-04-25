import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import Parser from "rss-parser"
import { slugify } from "@/lib/utils"

// Definindo um tipo para o parser
type CustomItem = {
  title: string
  link: string
  pubDate?: string
  creator?: string
  content?: string
  contentSnippet?: string
  description?: string
  guid?: string
  categories?: string[]
  enclosure?: {
    url?: string
  }
  "media:content"?: {
    $: {
      url?: string
    }
  }
}

const parser = new Parser<{}, CustomItem>({
  customFields: {
    item: [
      "media:content",
      "content",
      "contentSnippet",
      "description",
      "guid",
      "categories",
      "enclosure",
    ],
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { feedUrl, categoryId, authorId } = body

    // Validação dos campos obrigatórios
    if (!feedUrl || !categoryId || !authorId) {
      return NextResponse.json(
        { message: "URL do feed, categoria e autor são obrigatórios" },
        { status: 400 }
      )
    }

    // Verifica se a categoria existe
    const categoryExists = await prisma.category.findUnique({
      where: { id: categoryId },
    })

    if (!categoryExists) {
      return NextResponse.json(
        { message: "Categoria não encontrada" },
        { status: 404 }
      )
    }

    // Verifica se o autor existe
    const authorExists = await prisma.author.findUnique({
      where: { id: authorId },
    })

    if (!authorExists) {
      return NextResponse.json(
        { message: "Autor não encontrado" },
        { status: 404 }
      )
    }

    // Faz o parsing do feed RSS
    const feed = await parser.parseURL(feedUrl)
    
    // Contadores para o resumo da importação
    let importedCount = 0
    let skippedCount = 0

    // Itera sobre os itens do feed
    for (const item of feed.items) {
      // Verifica se o item tem link (usado como sourceUrl)
      if (!item.link) {
        console.log("Item sem link, pulando")
        skippedCount++
        continue
      }

      // Verifica se já existe um artigo com este sourceUrl
      const existingArticle = await prisma.article.findUnique({
        where: { sourceUrl: item.link },
      })

      if (existingArticle) {
        console.log(`Artigo já existe com sourceUrl: ${item.link}`)
        skippedCount++
        continue
      }

      // Extraindo dados para o novo artigo
      const title = item.title || "Sem título"
      const slug = slugify(title)
      
      // Verifica se já existe um artigo com este slug
      const existingSlug = await prisma.article.findUnique({
        where: { slug },
      })

      // Se o slug já existir, adicione um sufixo único
      const finalSlug = existingSlug 
        ? `${slug}-${Date.now().toString().slice(-5)}`
        : slug

      // Tenta extrair uma imagem do item
      let imageUrl = ""
      if (item.enclosure?.url) {
        imageUrl = item.enclosure.url
      } else if (item["media:content"]?.$?.url) {
        imageUrl = item["media:content"].$.url
      } else {
        // Imagem padrão se não encontrar
        imageUrl = "https://via.placeholder.com/1200x630"
      }

      // Construindo o artigo
      const newArticle = {
        title,
        slug: finalSlug,
        summary: item.description || item.contentSnippet || "Sem resumo disponível",
        content: item.content || item.description || "Conteúdo não disponível no feed",
        imageUrl,
        sourceUrl: item.link,
        publishedAt: item.pubDate ? new Date(item.pubDate) : new Date(),
        authorId,
        categoryId,
      }

      // Tenta criar o artigo
      try {
        await prisma.article.create({
          data: newArticle,
        })
        importedCount++
      } catch (err) {
        console.error("Erro ao criar artigo:", err)
        // Continue com o próximo item caso falhe
        continue
      }
    }

    // Retorna o resultado da importação
    return NextResponse.json({ importedCount, skippedCount })
  } catch (error) {
    console.error("Erro ao importar feed RSS:", error)
    return NextResponse.json(
      { message: "Erro ao processar o feed RSS" },
      { status: 500 }
    )
  }
} 