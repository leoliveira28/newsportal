"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Erro",
        description: "Por favor, insira seu email.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulação de envio
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      toast({
        title: "Sucesso!",
        description: "Você foi inscrito na nossa newsletter.",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 mx-auto sm:flex-row">
      <Input
        type="email"
        placeholder="Seu melhor email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1"
        required
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Inscrevendo..." : "Inscrever"}
      </Button>
    </form>
  )
}
