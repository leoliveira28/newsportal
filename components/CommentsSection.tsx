import { formatDate } from "@/lib/utils"

interface Comment {
  id: string
  articleId: string
  authorName: string
  content: string
  createdAt: Date
}

interface CommentsSectionProps {
  comments: Comment[]
}

export function CommentsSection({ comments }: CommentsSectionProps) {
  return (
    <div className="my-8">
      <h3 className="mb-4 text-xl font-bold">Comentários ({comments.length})</h3>

      {comments.length === 0 ? (
        <p className="text-slate-600 dark:text-slate-300">Seja o primeiro a comentar!</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded-lg border p-4">
              <div className="mb-2 flex items-center justify-between">
                <div className="font-medium">{comment.authorName}</div>
                <div className="text-xs text-slate-500">{formatDate(comment.createdAt)}</div>
              </div>
              <p className="text-slate-700 dark:text-slate-300">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
