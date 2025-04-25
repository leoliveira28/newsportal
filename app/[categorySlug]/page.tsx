import { notFound } from "next/navigation";
import Link from "next/link";
import { HeroTitle } from "@/components/HeroTitle";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ArticleCardHorizontal } from "@/components/ArticleCardHorizontal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getCategoryBySlug } from "@/lib/db-service";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  imageUrl: string;
  publishedAt?: Date;
  authorId: string;
  categoryId: string;
}

interface CategoryPageProps {
  params: {
    categorySlug: string;
  };
  searchParams: {
    page?: string;
    pageSize?: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  // Encontre a categoria pelo slug
  const category = await getCategoryBySlug(params.categorySlug);

  if (!category) {
    return {
      title: "Categoria não encontrada",
      description: "A categoria solicitada não foi encontrada.",
    };
  }

  return {
    title: `${category.name} | Portal de Notícias`,
    description: `Últimas notícias sobre ${category.name}`,
  };
}

async function getCategoryArticles(
  categorySlug: string,
  page: number,
  pageSize: number
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/articles/category/${categorySlug}?page=${page}&pageSize=${pageSize}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Falha ao carregar artigos da categoria");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar artigos:", error);
    return { articles: [], totalArticles: 0 };
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { categorySlug } = params;
  const page = parseInt(searchParams.page || "1");
  const pageSize = parseInt(searchParams.pageSize || "10");

  // Verificar se a categoria existe
  const category = await getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  // Obter artigos da categoria com paginação
  const { articles, totalArticles } = await getCategoryArticles(
    categorySlug,
    page,
    pageSize
  );

  // Calcular o número total de páginas
  const totalPages = Math.ceil(totalArticles / pageSize);

  // Gerar um array para as páginas de paginação (simplificado para 5 páginas visíveis)
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Se temos menos páginas que o máximo visível, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Lógica para mostrar páginas ao redor da atual
      const leftBound = Math.max(1, page - 2);
      const rightBound = Math.min(totalPages, leftBound + maxVisiblePages - 1);
      
      // Ajustar leftBound se rightBound atingiu o limite
      const adjustedLeftBound = Math.max(1, rightBound - maxVisiblePages + 1);
      
      for (let i = adjustedLeftBound; i <= rightBound; i++) {
        pageNumbers.push(i);
      }
    }
    
    return pageNumbers;
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <HeroTitle title={category.name} />

        {articles.length > 0 ? (
          <div className="mt-8 space-y-8">
            {articles.map((article: Article) => (
              <ArticleCardHorizontal
                key={article.id}
                article={article}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 text-center py-12">
            <h2 className="text-2xl font-semibold mb-2">
              Nenhum artigo encontrado
            </h2>
            <p className="text-muted-foreground">
              Não há artigos disponíveis nesta categoria no momento.
            </p>
          </div>
        )}

        {/* Paginação */}
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href={`/${categorySlug}?page=${page - 1}&pageSize=${pageSize}`}
                  />
                </PaginationItem>
              )}

              {getPageNumbers().map((pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    href={`/${categorySlug}?page=${pageNumber}&pageSize=${pageSize}`}
                    isActive={pageNumber === page}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {page < totalPages && (
                <PaginationItem>
                  <PaginationNext
                    href={`/${categorySlug}?page=${page + 1}&pageSize=${pageSize}`}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}

        {/* Newsletter */}
        <div className="mt-16">
          <NewsletterForm />
        </div>
      </main>
    </>
  );
} 