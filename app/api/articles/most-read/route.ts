import { NextResponse } from "next/server"
import { getMostReadArticles } from "@/lib/db-service"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  // Obter parâmetros de paginação da URL
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1", 10)
  const pageSize = Number.parseInt(searchParams.get("pageSize") || "10", 10)

  // Validar parâmetros
  const validPage = page > 0 ? page : 1
  const validPageSize = pageSize > 0 && pageSize <= 50 ? pageSize : 10

  // Calcular o offset para paginação
  const skip = (validPage - 1) * validPageSize

  // Buscar artigos mais lidos do banco de dados
  // Em uma implementação real, isso pode ser baseado em contadores de visualizações
  // Por enquanto, usamos as reações como métrica de popularidade
  const articles = await prisma.article.findMany({
    where: { publishedAt: { not: null } },
    orderBy: [
      { 
        reactions: {
          _count: 'desc'
        }
      },
      { publishedAt: 'desc' }
    ],
    skip,
    take: validPageSize,
    include: {
      author: true,
      category: true,
      reactions: true
    }
  })

  // Contar o total de artigos
  const totalArticles = await prisma.article.count({
    where: { publishedAt: { not: null } }
  })

  // Retornar resultado paginado
  return NextResponse.json({
    articles,
    totalArticles,
    page: validPage,
    pageSize: validPageSize,
    totalPages: Math.ceil(totalArticles / validPageSize),
  })
}
