import Image from "next/image"
import Link from "next/link"
import { formatDate, truncateText } from "@/lib/utils"

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

interface ArticleCardVerticalProps {
  article: Article
}

export function ArticleCardVertical({ article }: ArticleCardVerticalProps) {
  return (
    <div className="group overflow-hidden rounded-lg border transition-colors hover:bg-slate-50 dark:hover:bg-slate-900">
      <div className="relative h-48 w-full">
        <Image src={article.imageUrl || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold line-clamp-2">
          <Link href={`/artigo/${article.slug}`} className="hover:text-highlight">
            {article.title}
          </Link>
        </h3>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
          {truncateText(article.summary, 100)}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-500">
            {article.publishedAt ? formatDate(article.publishedAt) : "Não publicado"}
          </span>
          <Link href={`/artigo/${article.slug}`} className="text-sm font-medium text-highlight hover:underline">
            Ler mais
          </Link>
        </div>
      </div>
    </div>
  )
}
