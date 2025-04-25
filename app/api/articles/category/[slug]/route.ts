import { getCategoryBySlug, getArticlesByCategory } from "@/lib/db-service";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    // Extrair parâmetros de paginação da URL
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");

    // Validar parâmetros
    if (isNaN(page) || page < 1) {
      return NextResponse.json(
        { error: "Número de página inválido" },
        { status: 400 }
      );
    }

    if (isNaN(pageSize) || pageSize < 1 || pageSize > 50) {
      return NextResponse.json(
        { error: "Tamanho de página inválido" },
        { status: 400 }
      );
    }

    // Verificar se a categoria existe
    const category = await getCategoryBySlug(params.slug);

    if (!category) {
      return NextResponse.json(
        { error: "Categoria não encontrada" },
        { status: 404 }
      );
    }

    // Buscar artigos paginados diretamente do banco de dados
    const articles = await prisma.article.findMany({
      where: {
        categoryId: category.id,
        publishedAt: { not: null }
      },
      orderBy: { publishedAt: 'desc' },
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        author: true,
        category: true
      }
    });

    // Contar o total de artigos para esta categoria
    const totalArticles = await prisma.article.count({
      where: {
        categoryId: category.id,
        publishedAt: { not: null }
      }
    });

    // Retornar os artigos paginados e o total de artigos
    return NextResponse.json({
      articles,
      totalArticles,
    });
  } catch (error) {
    console.error("Erro ao buscar artigos por categoria:", error);
    return NextResponse.json(
      { error: "Erro ao processar a requisição" },
      { status: 500 }
    );
  }
} 