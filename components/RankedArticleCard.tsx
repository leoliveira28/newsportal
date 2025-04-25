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

interface RankedArticleCardProps {
  article: Article
  rank: number
  reverse?: boolean
}

export function RankedArticleCard({ article, rank, reverse = false }: RankedArticleCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border transition-colors hover:bg-slate-50 dark:hover:bg-slate-900">
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
        <div className="relative h-48 w-full md:h-auto md:w-1/3">
          {/* Elemento de ranking */}
          <div className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-highlight text-sm font-bold text-white">
            {rank}
          </div>
          <Image src={article.imageUrl || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <h3 className="mb-2 text-xl font-bold">
              <Link href={`/artigo/${article.slug}`} className="hover:text-highlight">
                {article.title}
              </Link>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{article.summary}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {article.publishedAt ? formatDate(article.publishedAt) : "Não publicado"}
            </span>
            <Link href={`/artigo/${article.slug}`} className="text-sm font-medium text-highlight hover:underline">
              Ler mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
