"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ThumbsUp, Award, PartyPopper, Info } from "lucide-react"

interface Reaction {
  id: string
  articleId: string
  type: string
  count: number
}

interface ReactionSectionProps {
  reactions: Reaction[]
}

export function ReactionSection({ reactions }: ReactionSectionProps) {
  const [userReactions, setUserReactions] = useState<Record<string, boolean>>({})

  const getReactionIcon = (type: string) => {
    switch (type) {
      case "like":
        return <ThumbsUp className="h-4 w-4" />
      case "love":
        return <Heart className="h-4 w-4" />
      case "celebrate":
        return <PartyPopper className="h-4 w-4" />
      case "informative":
        return <Info className="h-4 w-4" />
      default:
        return <Award className="h-4 w-4" />
    }
  }

  const getReactionLabel = (type: string) => {
    switch (type) {
      case "like":
        return "Curtir"
      case "love":
        return "Amei"
      case "celebrate":
        return "Celebrar"
      case "informative":
        return "Informativo"
      case "sad":
        return "Triste"
      default:
        return type
    }
  }

  const handleReaction = (type: string) => {
    setUserReactions((prev) => ({
      ...prev,
      [type]: !prev[type],
    }))
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {reactions.map((reaction) => (
        <Button
          key={reaction.id}
          variant={userReactions[reaction.type] ? "default" : "outline"}
          size="sm"
          className="flex items-center gap-1"
          onClick={() => handleReaction(reaction.type)}
        >
          {getReactionIcon(reaction.type)}
          <span>{getReactionLabel(reaction.type)}</span>
          <span className="ml-1 text-xs">({reaction.count + (userReactions[reaction.type] ? 1 : 0)})</span>
        </Button>
      ))}
    </div>
  )
}
