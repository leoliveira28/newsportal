'use client'

import { useState } from 'react'
import { ArticleForm } from './ArticleForm'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'

interface Author {
  id: string
  name: string
}

interface Category {
  id: string
  name: string
}

interface ArticleFormWrapperProps {
  authors: Author[]
  categories: Category[]
}

export function ArticleFormWrapper({ authors, categories }: ArticleFormWrapperProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/admin/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Erro ao criar artigo')
      }

      toast({
        title: "Sucesso!",
        description: "Artigo criado com sucesso.",
      })
    } catch (error) {
      console.error('Erro ao criar artigo:', error)
      toast({
        title: "Erro",
        description: "Erro ao criar o artigo. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <ArticleForm
        authors={authors}
        categories={categories}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />
      <Toaster />
    </>
  )
} 