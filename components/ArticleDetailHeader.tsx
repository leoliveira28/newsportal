import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Author {
  id: string
  name: string
  bio?: string
  imageUrl?: string
}

interface Category {
  id: string
  name: string
  slug: string
}

interface ArticleDetailHeaderProps {
  title: string
  publishedAt?: Date
  author: Author
  category: Category
  imageUrl: string
}

export function ArticleDetailHeader({ title, publishedAt, author, category, imageUrl }: ArticleDetailHeaderProps) {
  return (
    <div className="mb-8">
      <div className="mb-4">
        <Link
          href={`/categoria/${category.slug}`}
          className="inline-block text-sm font-medium text-highlight hover:underline"
        >
          {category.name}
        </Link>
      </div>

      <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{title}</h1>

      <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
        {author.imageUrl && (
          <Image
            src={author.imageUrl || "/placeholder.svg"}
            alt={author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div>
          <Link href={`/autor/${author.id}`} className="font-medium hover:text-highlight">
            {author.name}
          </Link>
          {publishedAt && <div className="text-xs">Publicado em {formatDate(publishedAt)}</div>}
        </div>
      </div>

      <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] lg:h-[500px]">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>

      <div className="mb-8 flex items-center justify-between border-b border-t py-4">
        <div className="text-sm font-medium">Compartilhar:</div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Compartilhar no Facebook</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Compartilhar no Twitter</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">Compartilhar no LinkedIn</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Compartilhar via link</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
