import { VoteSection } from "@/components/VoteSection"
import { ReactionSection } from "@/components/ReactionSection"

interface Reaction {
  id: string
  articleId: string
  type: string
  count: number
}

interface ArticleInteractiveSectionProps {
  articleId: string
  reactions: Reaction[]
}

export function ArticleInteractiveSection({ articleId, reactions }: ArticleInteractiveSectionProps) {
  return (
    <div className="my-8 rounded-lg border bg-slate-50 p-4 dark:bg-slate-900">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <VoteSection articleId={articleId} />
        <ReactionSection reactions={reactions} />
      </div>
    </div>
  )
}
