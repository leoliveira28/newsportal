"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

interface CommentFormProps {
  articleId: string
}

export function CommentForm({ articleId }: CommentFormProps) {
  const [authorName, setAuthorName] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!authorName.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, informe seu nome.",
        variant: "destructive",
      })
      return
    }

    if (!content.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, escreva um comentário.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false)
      setAuthorName("")
      setContent("")
      toast({
        title: "Sucesso!",
        description: "Seu comentário foi enviado e está aguardando aprovação.",
      })
    }, 1500)
  }

  return (
    <div className="my-8">
      <h3 className="mb-4 text-xl font-bold">Deixe seu comentário</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Seu nome"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full"
          />
        </div>

        <div>
          <Textarea
            placeholder="Escreva seu comentário aqui..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full"
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar comentário"}
        </Button>
      </form>
    </div>
  )
}
