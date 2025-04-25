import { SectionHeading } from "@/components/SectionHeading"
import { ArticleCardVertical } from "@/components/ArticleCardVertical"

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

interface RelatedArticlesSectionProps {
  articles: Article[]
}

export function RelatedArticlesSection({ articles }: RelatedArticlesSectionProps) {
  if (articles.length === 0) return null

  return (
    <div className="my-12">
      <SectionHeading>Notícias Similares</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCardVertical key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}
