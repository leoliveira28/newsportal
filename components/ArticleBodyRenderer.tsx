interface ArticleBodyRendererProps {
  content: string
}

export function ArticleBodyRenderer({ content }: ArticleBodyRendererProps) {
  // Função para converter o conteúdo HTML em React elements
  // Para um projeto real, seria recomendável usar uma biblioteca como react-html-parser
  // ou sanitize-html para lidar com a segurança do HTML

  return (
    <article className="prose prose-lg mx-auto my-8 max-w-none dark:prose-invert prose-a:text-highlight prose-headings:text-foreground dark:prose-headings:text-slate-100 prose-blockquote:border-l-4 prose-blockquote:border-muted prose-blockquote:text-muted-foreground prose-img:rounded-lg">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}
