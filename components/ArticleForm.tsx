'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Loader2 } from 'lucide-react'
import { RichTextEditor } from './RichTextEditor'
import { useEffect } from 'react'
import { slugify } from '@/lib/utils'

const articleSchema = z.object({
  title: z.string().min(3, 'O título deve ter pelo menos 3 caracteres'),
  slug: z.string().min(3, 'O slug deve ter pelo menos 3 caracteres')
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'O slug deve conter apenas letras minúsculas, números e hífens'),
  summary: z.string().min(10, 'O resumo deve ter pelo menos 10 caracteres'),
  content: z.string().min(50, 'O conteúdo deve ter pelo menos 50 caracteres'),
  imageUrl: z.string().url('URL inválida').optional(),
  authorId: z.string().min(1, 'Selecione um autor'),
  categoryId: z.string().min(1, 'Selecione uma categoria'),
  sourceUrl: z.string().url('URL inválida').optional(),
})

type ArticleFormData = z.infer<typeof articleSchema>

interface Author {
  id: string
  name: string
}

interface Category {
  id: string
  name: string
}

export interface FeedArticle {
  title: string;
  sourceUrl: string;
  pubDate: string;
  content: string;
  summary: string;
  imageUrl: string;
  guid: string;
}

interface ArticleFormProps {
  authors: Author[]
  categories: Category[]
  onSubmit: (data: ArticleFormData) => Promise<void>
  isSubmitting?: boolean
  initialData?: FeedArticle
}

export function ArticleForm({ 
  authors, 
  categories, 
  onSubmit, 
  isSubmitting = false,
  initialData
}: ArticleFormProps) {
  const form = useForm<ArticleFormData>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: '',
      slug: '',
      summary: '',
      content: '',
      imageUrl: '',
      sourceUrl: '',
    },
  })

  // Preencher formulário quando dados iniciais estiverem disponíveis
  useEffect(() => {
    if (initialData) {
      form.reset({
        title: initialData.title || '',
        slug: slugify(initialData.title) || '',
        summary: initialData.summary || '',
        content: initialData.content || '',
        imageUrl: initialData.imageUrl || '',
        sourceUrl: initialData.sourceUrl || '',
        // Mantenha authorId e categoryId com valores padrão vazios
        authorId: form.getValues().authorId || '',
        categoryId: form.getValues().categoryId || '',
      });
    }
  }, [initialData, form]);

  const handleSubmit = async (data: ArticleFormData) => {
    try {
      // Se houver dados iniciais, inclui a sourceUrl
      if (initialData && initialData.sourceUrl) {
        data.sourceUrl = initialData.sourceUrl;
      }
      
      await onSubmit(data)
      // Não resetar o formulário após importação para evitar perda de contexto
      if (!initialData) {
        form.reset()
      }
    } catch (error) {
      console.error('Erro ao salvar artigo:', error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Digite o título do artigo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="titulo-do-artigo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resumo</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite um breve resumo do artigo"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Conteúdo</FormLabel>
              <FormControl>
                <RichTextEditor
                  content={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL da Imagem</FormLabel>
              <FormControl>
                <Input placeholder="https://exemplo.com/imagem.jpg" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {initialData?.sourceUrl && (
          <FormField
            control={form.control}
            name="sourceUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>URL Original</FormLabel>
                <FormControl>
                  <Input readOnly {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="authorId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Autor</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um autor" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {authors?.map((author) => (
                    <SelectItem key={author.id} value={author.id}>
                      {author.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {initialData ? 'Importando...' : 'Salvando...'}
            </>
          ) : (
            initialData ? 'Importar Artigo' : 'Salvar Artigo'
          )}
        </Button>
      </form>
    </Form>
  )
} 