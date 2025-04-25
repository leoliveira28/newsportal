"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown } from "lucide-react"

interface VoteSectionProps {
  articleId: string
}

export function VoteSection({ articleId }: VoteSectionProps) {
  const [vote, setVote] = useState<"up" | "down" | null>(null)
  const [upVotes, setUpVotes] = useState(0)
  const [downVotes, setDownVotes] = useState(0)

  const handleVote = (type: "up" | "down") => {
    if (vote === type) {
      // Remover voto
      setVote(null)
      if (type === "up") {
        setUpVotes((prev) => prev - 1)
      } else {
        setDownVotes((prev) => prev - 1)
      }
    } else {
      // Se já votou no outro botão, remover o voto anterior
      if (vote === "up" && type === "down") {
        setUpVotes((prev) => prev - 1)
        setDownVotes((prev) => prev + 1)
      } else if (vote === "down" && type === "up") {
        setDownVotes((prev) => prev - 1)
        setUpVotes((prev) => prev + 1)
      } else {
        // Novo voto
        if (type === "up") {
          setUpVotes((prev) => prev + 1)
        } else {
          setDownVotes((prev) => prev + 1)
        }
      }
      setVote(type)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm font-medium">Este artigo foi útil?</div>
      <div className="flex items-center gap-2">
        <Button
          variant={vote === "up" ? "default" : "outline"}
          size="sm"
          className="flex items-center gap-1"
          onClick={() => handleVote("up")}
        >
          <ThumbsUp className="h-4 w-4" />
          <span>{upVotes}</span>
        </Button>
        <Button
          variant={vote === "down" ? "default" : "outline"}
          size="sm"
          className="flex items-center gap-1"
          onClick={() => handleVote("down")}
        >
          <ThumbsDown className="h-4 w-4" />
          <span>{downVotes}</span>
        </Button>
      </div>
    </div>
  )
}
