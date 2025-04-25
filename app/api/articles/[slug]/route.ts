import { NextResponse } from "next/server"
import { getArticleBySlug, getRelatedArticles, getCommentsByArticleId, getReactionsByArticleId } from "@/lib/db-service"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug

  // Buscar o artigo pelo slug
  const article = await getArticleBySlug(slug)

  if (!article) {
    return NextResponse.json({ error: "Artigo não encontrado" }, { status: 404 })
  }

  // Buscar artigos relacionados (da mesma categoria, excluindo o artigo atual)
  const relatedArticles = await getRelatedArticles(article.categoryId, article.id, 3)

  return NextResponse.json({
    article,
    author: article.author,
    category: article.category,
    comments: article.comments,
    reactions: article.reactions,
    relatedArticles,
  })
}
