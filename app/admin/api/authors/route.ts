import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const authors = await prisma.author.findMany({
      where: { active: true },
      select: {
        id: true,
        name: true,
      },
      orderBy: { name: 'asc' }
    })
    
    return NextResponse.json(authors)
  } catch (error) {
    console.error('Erro ao buscar autores:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar autores' },
      { status: 500 }
    )
  }
} 