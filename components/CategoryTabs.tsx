"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Category {
  id: string
  name: string
  slug: string
}

interface CategoryTabsProps {
  categories: Category[]
}

export function CategoryTabs({ categories }: CategoryTabsProps) {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("all")

  const handleTabChange = (value: string) => {
    setActiveCategory(value)
    
    // Navegar para a página correspondente
    if (value === "all") {
      router.push("/")
    } else {
      router.push(`/${value}`)
    }
  }

  return (
    <div className="mb-8">
      <Tabs defaultValue="all" className="w-full" onValueChange={handleTabChange}>
        <TabsList className="mb-4 flex w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          <TabsTrigger
            value="all"
            className="rounded-full border bg-background px-4 py-2 data-[state=active]:bg-highlight data-[state=active]:text-white"
          >
            Todas
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.slug}
              className="rounded-full border bg-background px-4 py-2 data-[state=active]:bg-highlight data-[state=active]:text-white"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="mt-2 text-right">
        <Link
          href={activeCategory === "all" ? "/" : `/${activeCategory}`}
          className="text-sm font-medium text-highlight hover:underline"
        >
          Ver todas as notícias{" "}
          {activeCategory !== "all" ? `em ${categories.find((c) => c.slug === activeCategory)?.name}` : ""}
        </Link>
      </div>
    </div>
  )
}
