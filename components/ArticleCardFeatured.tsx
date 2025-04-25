import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

interface Article {
  id: string
  title: string
  slug: string
  summary: string
  imageUrl: string
  publishedAt?: Date
  authorId: string
  categoryId: string
}

interface ArticleCardFeaturedProps {
  articles: Article[]
}

export function ArticleCardFeatured({ articles }: ArticleCardFeaturedProps) {
  if (articles.length === 0) return null

  const mainArticle = articles[0]
  const secondaryArticles = articles.slice(1, 3)

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Artigo principal */}
      <div className="group relative col-span-2 h-[400px] overflow-hidden rounded-lg md:h-[500px]">
        <Image
          src={mainArticle.imageUrl || "/placeholder.svg"}
          alt={mainArticle.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <Link href={`/artigo/${mainArticle.slug}`}>
            <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">{mainArticle.title}</h2>
          </Link>
          <p className="mb-4 text-sm text-white/80 line-clamp-2 md:text-base">{mainArticle.summary}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/70">
              {mainArticle.publishedAt ? formatDate(mainArticle.publishedAt) : "Não publicado"}
            </span>
            <Link
              href={`/artigo/${mainArticle.slug}`}
              className="rounded-full bg-highlight px-4 py-2 text-sm font-medium text-white hover:bg-highlight/90"
            >
              Ler mais
            </Link>
          </div>
        </div>
      </div>

      {/* Artigos secundários */}
      {secondaryArticles.map((article) => (
        <div key={article.id} className="group relative h-[250px] overflow-hidden rounded-lg">
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <Link href={`/artigo/${article.slug}`}>
              <h3 className="mb-2 text-lg font-bold text-white">{article.title}</h3>
            </Link>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/70">
                {article.publishedAt ? formatDate(article.publishedAt) : "Não publicado"}
              </span>
              <Link href={`/artigo/${article.slug}`} className="text-sm font-medium text-white hover:underline">
                Ler mais
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
