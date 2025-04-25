import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import * as z from 'zod'

const articleSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  summary: z.string().min(10),
  content: z.string().min(50),
  imageUrl: z.string().url().optional(),
  authorId: z.string().min(1),
  categoryId: z.string().min(1),
  sourceUrl: z.string().url().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = articleSchema.parse(body)

    // Verificar se já existe um artigo com o mesmo sourceUrl (se fornecido)
    if (validatedData.sourceUrl) {
      const existingArticle = await prisma.article.findUnique({
        where: { sourceUrl: validatedData.sourceUrl },
        select: { id: true, title: true }
      });

      if (existingArticle) {
        return NextResponse.json(
          { 
            error: 'Artigo já importado', 
            details: `O artigo "${existingArticle.title}" já foi importado anteriormente com este URL.` 
          },
          { status: 409 } // Conflict
        );
      }
    }

    const article = await prisma.article.create({
      data: {
        ...validatedData,
        imageUrl: validatedData.imageUrl || '',
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
        category: {
          select: {
            name: true,
          },
        },
      },
    })

    return NextResponse.json(article, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Erro ao criar artigo:', error)
    return NextResponse.json(
      { error: 'Erro ao criar artigo' },
      { status: 500 }
    )
  }
} 