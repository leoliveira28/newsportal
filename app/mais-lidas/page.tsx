import { HeroTitle } from "@/components/HeroTitle"
import { RankedArticleCard } from "@/components/RankedArticleCard"
import { NewsletterForm } from "@/components/NewsletterForm"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface SearchParams {
  page?: string
  pageSize?: string
}

export default async function MostReadPage({ searchParams }: { searchParams: SearchParams }) {
  // Obter parâmetros de paginação
  const page = Number.parseInt(searchParams.page || "1", 10)
  const pageSize = Number.parseInt(searchParams.pageSize || "6", 10)

  // Buscar artigos mais lidos da API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/articles/most-read?page=${page}&pageSize=${pageSize}`,
    { cache: "no-store" },
  )

  if (!response.ok) {
    throw new Error("Falha ao carregar artigos")
  }

  const data = await response.json()
  const { articles, totalArticles, totalPages } = data

  // Função para gerar links de paginação
  const generatePaginationLinks = () => {
    const links = []
    const maxVisiblePages = 5
    const halfVisiblePages = Math.floor(maxVisiblePages / 2)

    let startPage = Math.max(1, page - halfVisiblePages)
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Adicionar primeira página
    if (startPage > 1) {
      links.push(
        <PaginationItem key="1">
          <PaginationLink href={`/mais-lidas?page=1&pageSize=${pageSize}`} isActive={page === 1}>
            1
          </PaginationLink>
        </PaginationItem>,
      )

      // Adicionar elipse se necessário
      if (startPage > 2) {
        links.push(
          <PaginationItem key="start-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>,
        )
      }
    }

    // Adicionar páginas visíveis
    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <PaginationItem key={i}>
          <PaginationLink href={`/mais-lidas?page=${i}&pageSize=${pageSize}`} isActive={page === i}>
            {i}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    // Adicionar última página
    if (endPage < totalPages) {
      // Adicionar elipse se necessário
      if (endPage < totalPages - 1) {
        links.push(
          <PaginationItem key="end-ellipsis">
            <PaginationEllipsis />
          </PaginationItem>,
        )
      }

      links.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href={`/mais-lidas?page=${totalPages}&pageSize=${pageSize}`} isActive={page === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      )
    }

    return links
  }

  return (
    <>
      <HeroTitle title="Mais Lidas" />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 space-y-6">
          {articles.map((article: any, index: number) => (
            <RankedArticleCard
              key={article.id}
              article={{
                ...article,
                publishedAt: article.publishedAt ? new Date(article.publishedAt) : undefined,
              }}
              rank={index + 1 + (page - 1) * pageSize}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination className="my-8">
            <PaginationContent>
              {page > 1 && (
                <PaginationItem>
                  <PaginationPrevious href={`/mais-lidas?page=${page - 1}&pageSize=${pageSize}`} />
                </PaginationItem>
              )}

              {generatePaginationLinks()}

              {page < totalPages && (
                <PaginationItem>
                  <PaginationNext href={`/mais-lidas?page=${page + 1}&pageSize=${pageSize}`} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}

        <div className="my-12 rounded-lg bg-slate-100 p-8 dark:bg-slate-800">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Fique por dentro</h2>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              Receba as principais notícias diretamente no seu email.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </>
  )
}
