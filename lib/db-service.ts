import { prisma } from './prisma';

// Funções para categorias
export async function getAllCategories() {
  return await prisma.category.findMany({
    where: { active: true },
    orderBy: { name: 'asc' }
  });
}

export async function getCategoryBySlug(slug: string) {
  return await prisma.category.findUnique({
    where: { slug }
  });
}

// Funções para autores
export async function getAllAuthors() {
  return await prisma.author.findMany({
    where: { active: true }
  });
}

export async function getAuthorById(id: string) {
  return await prisma.author.findUnique({
    where: { id }
  });
}

// Funções para artigos
export async function getAllArticles() {
  return await prisma.article.findMany({
    where: { publishedAt: { not: null } },
    orderBy: { publishedAt: 'desc' },
    include: {
      author: true,
      category: true
    }
  });
}

export async function getFeaturedArticles(limit = 3) {
  return await prisma.article.findMany({
    where: { publishedAt: { not: null } },
    orderBy: { publishedAt: 'desc' },
    take: limit,
    include: {
      author: true,
      category: true
    }
  });
}

export async function getLatestArticles(limit = 4, skip = 0) {
  return await prisma.article.findMany({
    where: { publishedAt: { not: null } },
    orderBy: { publishedAt: 'desc' },
    skip,
    take: limit,
    include: {
      author: true,
      category: true
    }
  });
}

export async function getPopularArticles(limit = 4) {
  // Na implementação real, pode-se ordenar por contagem de reações, visualizações, etc.
  return await prisma.article.findMany({
    where: { publishedAt: { not: null } },
    orderBy: [
      { 
        reactions: {
          _count: 'desc'
        }
      },
      { publishedAt: 'desc' }
    ],
    take: limit,
    include: {
      author: true,
      category: true,
      reactions: true
    }
  });
}

export async function getArticlesByCategory(categorySlug: string, limit = 10) {
  return await prisma.article.findMany({
    where: {
      category: { slug: categorySlug },
      publishedAt: { not: null }
    },
    orderBy: { publishedAt: 'desc' },
    take: limit,
    include: {
      author: true,
      category: true
    }
  });
}

export async function getArticleBySlug(slug: string) {
  return await prisma.article.findUnique({
    where: { slug },
    include: {
      author: true,
      category: true,
      comments: true,
      reactions: true
    }
  });
}

export async function getRelatedArticles(categoryId: string, currentArticleId: string, limit = 3) {
  return await prisma.article.findMany({
    where: {
      categoryId,
      id: { not: currentArticleId },
      publishedAt: { not: null }
    },
    orderBy: { publishedAt: 'desc' },
    take: limit,
    include: {
      author: true,
      category: true
    }
  });
}

export async function getMostReadArticles(limit = 5) {
  // Em uma implementação real, poderíamos ter um campo de visualizações
  // Por enquanto, vamos usar as reações como métrica
  return await prisma.article.findMany({
    where: { publishedAt: { not: null } },
    orderBy: [
      { 
        reactions: {
          _count: 'desc'
        }
      },
      { publishedAt: 'desc' }
    ],
    take: limit,
    include: {
      author: true,
      category: true,
      reactions: true
    }
  });
}

// Funções para comentários
export async function getCommentsByArticleId(articleId: string) {
  return await prisma.comment.findMany({
    where: { articleId },
    orderBy: { createdAt: 'desc' }
  });
}

// Funções para reações
export async function getReactionsByArticleId(articleId: string) {
  return await prisma.reaction.findMany({
    where: { articleId }
  });
} 