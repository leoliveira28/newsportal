"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FeedItem {
  title: string;
  sourceUrl: string;
  pubDate: string;
  content: string;
  summary: string;
  imageUrl: string;
  guid: string;
}

interface RssFeedItemListProps {
  items: FeedItem[];
  onSelectArticle: (article: FeedItem) => void;
}

export function RssFeedItemList({ items, onSelectArticle }: RssFeedItemListProps) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center p-8 border border-dashed rounded-md">
        <p className="text-muted-foreground">Nenhum item encontrado no feed</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Artigos encontrados ({items.length})</h2>
      <p className="text-sm text-muted-foreground">
        Selecione um artigo para editar e importar
      </p>
      
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.guid} className="overflow-hidden hover:shadow-md transition-shadow">
            {item.imageUrl && (
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            )}
            
            <CardHeader className="p-4">
              <CardTitle className="text-md line-clamp-2">{item.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="p-4 pt-0 space-y-3">
              <p className="text-xs text-muted-foreground">
                {item.pubDate 
                  ? format(new Date(item.pubDate), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })
                  : "Data não disponível"}
              </p>
              
              <p className="text-sm line-clamp-3">
                {item.summary || "Sem descrição disponível"}
              </p>
              
              <div className="flex justify-between pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(item.sourceUrl, "_blank")}
                >
                  Ver original
                </Button>
                
                <Button 
                  size="sm"
                  onClick={() => onSelectArticle(item)}
                >
                  Selecionar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 