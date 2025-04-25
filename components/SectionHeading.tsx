import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-6 flex items-center", className)}>
      <div className="mr-3 h-6 w-1.5 rounded-sm bg-highlight" />
      <h2 className="text-2xl font-bold">{children}</h2>
    </div>
  )
}
