import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ArticleDetailHeader } from "@/components/ArticleDetailHeader"
import { ArticleBodyRenderer } from "@/components/ArticleBodyRenderer"
import { ArticleInteractiveSection } from "@/components/ArticleInteractiveSection"
import { CommentsSection } from "@/components/CommentsSection"
import { CommentForm } from "@/components/CommentForm"
import { RelatedArticlesSection } from "@/components/RelatedArticlesSection"
import { NewsletterForm } from "@/components/NewsletterForm"
import { SectionHeading } from "@/components/SectionHeading"
import { ArticleCardHorizontal } from "@/components/ArticleCardHorizontal"
import { getPopularArticles } from "@/lib/db-service"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = params

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/articles/${slug}`)

    if (!response.ok) {
      return {
        title: "Artigo não encontrado",
        description: "O artigo que você está procurando não foi encontrado.",
      }
    }

    const data = await response.json()

    return {
      title: data.article.title,
      description: data.article.summary,
    }
  } catch (error) {
    return {
      title: "Erro ao carregar artigo",
      description: "Ocorreu um erro ao carregar o artigo.",
    }
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = params

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/articles/${slug}`)

    if (!response.ok) {
      notFound()
    }

    const data = await response.json()
    const { article, author, category, comments, reactions, relatedArticles } = data

    // Obter artigos em alta do banco de dados (excluindo o atual)
    const trendingArticles = await getPopularArticles(4);
    
    // Filtrar para remover o artigo atual e adaptar o formato para o componente
    const filteredTrendingArticles = trendingArticles
      .filter(a => a.id !== article.id)
      .map(article => ({
        ...article,
        publishedAt: article.publishedAt ? new Date(article.publishedAt) : undefined
      }));

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <ArticleDetailHeader
            title={article.title}
            publishedAt={article.publishedAt ? new Date(article.publishedAt) : undefined}
            author={author}
            category={category}
            imageUrl={article.imageUrl}
          />

          <ArticleBodyRenderer content={article.content} />

          <ArticleInteractiveSection articleId={article.id} reactions={reactions} />

          <CommentsSection
            comments={comments.map((c: any) => ({
              ...c,
              createdAt: new Date(c.createdAt),
            }))}
          />

          <CommentForm articleId={article.id} />
        </div>

        <div className="mx-auto max-w-4xl">
          <RelatedArticlesSection articles={relatedArticles} />
        </div>

        <div className="my-12 rounded-lg bg-slate-100 p-8 dark:bg-slate-800">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Fique por dentro</h2>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              Receba as principais notícias diretamente no seu email.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="my-12">
          <SectionHeading>Em Alta</SectionHeading>
          <div className="grid gap-8 md:grid-cols-2">
            {filteredTrendingArticles.map((article) => (
              <ArticleCardHorizontal key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto flex min-h-[50vh] items-center justify-center px-4 py-8">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Erro ao carregar o artigo</h1>
          <p className="text-slate-600 dark:text-slate-300">
            Ocorreu um erro ao carregar o artigo. Por favor, tente novamente mais tarde.
          </p>
        </div>
      </div>
    )
  }
}
