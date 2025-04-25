import { ArticleCardFeatured } from "@/components/ArticleCardFeatured"
import { ArticleCardHorizontal } from "@/components/ArticleCardHorizontal"
import { ArticleCardVertical } from "@/components/ArticleCardVertical"
import { CategoryTabs } from "@/components/CategoryTabs"
import { LoadMoreButton } from "@/components/LoadMoreButton"
import { NewsletterForm } from "@/components/NewsletterForm"
import { SectionHeading } from "@/components/SectionHeading"
import { getFeaturedArticles, getLatestArticles, getPopularArticles, getAllCategories } from "@/lib/db-service"

export default async function Home() {
  // Obter artigos em destaque
  const featuredArticlesRaw = await getFeaturedArticles(3)
  const featuredArticles = featuredArticlesRaw.map(article => ({
    ...article,
    publishedAt: article.publishedAt || undefined
  }))

  // Obter artigos mais recentes
  const latestArticlesRaw = await getLatestArticles(4)
  const latestArticles = latestArticlesRaw.map(article => ({
    ...article,
    publishedAt: article.publishedAt || undefined
  }))

  // Obter artigos populares
  const popularArticlesRaw = await getPopularArticles(4)
  const popularArticles = popularArticlesRaw.map(article => ({
    ...article,
    publishedAt: article.publishedAt || undefined
  }))
  
  // Obter categorias
  const categories = await getAllCategories()
  console.log(featuredArticles)
  console.log(latestArticles)
  console.log(popularArticles)
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Seção de Destaque */}
      <section className="mb-12">
        <SectionHeading>Em Destaque</SectionHeading>
        <ArticleCardFeatured articles={featuredArticles} />
      </section>

      {/* Navegação por Categorias */}
      <section className="mb-12">
        <CategoryTabs categories={categories} />
      </section>

      {/* Últimas Notícias */}
      <section className="mb-12">
        <SectionHeading>Últimas Notícias</SectionHeading>
        <div className="grid gap-8 md:grid-cols-2">
          {latestArticles.map((article) => (
            <ArticleCardHorizontal key={article.id} article={article} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <LoadMoreButton />
        </div>
      </section>

      {/* Mais Populares */}
      <section className="mb-12">
        <SectionHeading>Mais Populares</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularArticles.map((article) => (
            <ArticleCardVertical key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-12 rounded-lg bg-slate-100 p-8 dark:bg-slate-800">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Fique por dentro</h2>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            Receba as principais notícias diretamente no seu email.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
