"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface LoadMoreButtonProps {
  onClick?: () => Promise<void>
  label?: string
  loadingLabel?: string
}

export function LoadMoreButton({
  onClick,
  label = "Carregar mais",
  loadingLabel = "Carregando...",
}: LoadMoreButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (onClick) {
      setIsLoading(true)
      await onClick()
      setIsLoading(false)
    } else {
      // Simulação de carregamento
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }

  return (
    <Button variant="outline" size="lg" onClick={handleClick} disabled={isLoading} className="min-w-[150px]">
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingLabel}
        </>
      ) : (
        label
      )}
    </Button>
  )
}
