import { cn } from "@/lib/utils"

interface HeroTitleProps {
  title: string
  className?: string
}

export function HeroTitle({ title, className }: HeroTitleProps) {
  return (
    <div className={cn("w-full bg-slate-100 py-12 dark:bg-slate-800", className)}>
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h1>
      </div>
    </div>
  )
}
