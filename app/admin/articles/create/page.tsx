import { prisma } from '@/lib/prisma'
import { ArticleFormClient } from '@/components/ArticleFormClient'

export default async function CreateArticlePage() {
  const [authors, categories] = await Promise.all([
    prisma.author.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    }),
    prisma.category.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    }),
  ])

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Cadastrar Novo Artigo</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <ArticleFormClient authors={authors} categories={categories} />
      </div>
    </div>
  )
} 