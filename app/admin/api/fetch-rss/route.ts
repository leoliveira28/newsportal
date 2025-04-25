import { NextResponse } from "next/server";
import Parser from "rss-parser";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { feedUrl } = body;

    // Validar URL
    if (!feedUrl || typeof feedUrl !== "string") {
      return NextResponse.json(
        { error: "URL do feed é obrigatória" },
        { status: 400 }
      );
    }

    try {
      new URL(feedUrl);
    } catch (error) {
      return NextResponse.json(
        { error: "URL inválida fornecida" },
        { status: 400 }
      );
    }

    // Buscar e analisar o feed
    const parser = new Parser();
    
    try {
      const feed = await parser.parseURL(feedUrl);
      
      // Mapear itens para um formato consistente
      const mappedItems = feed.items.map((item) => {
        // Buscar imagem de várias possíveis fontes
        let imageUrl = null;
        
        // Verificar enclosure (comum em feeds RSS)
        if (item.enclosure && item.enclosure.url && 
            (item.enclosure.type?.startsWith("image/") || 
             item.enclosure.url.match(/\.(jpg|jpeg|png|gif|webp)$/i))) {
          imageUrl = item.enclosure.url;
        }
        
        // Verificar media:content ou content:encoded para imagens
        if (!imageUrl && item["media:content"] && item["media:content"].$.url) {
          imageUrl = item["media:content"].$.url;
        }
        
        // Tentar extrair primeira imagem do conteúdo HTML
        if (!imageUrl && item.content) {
          const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/i);
          if (imgMatch && imgMatch[1]) {
            imageUrl = imgMatch[1];
          }
        }
        
        // Usar data de publicação ou atual
        const pubDate = item.pubDate ? new Date(item.pubDate) : new Date();
        
        return {
          title: item.title || "Sem título",
          sourceUrl: item.link || "",
          pubDate: pubDate.toISOString(),
          content: item.content || item["content:encoded"] || "",
          summary: item.contentSnippet || item.description || "",
          imageUrl: imageUrl || "",
          guid: item.guid || item.id || item.link || "",
        };
      });

      return NextResponse.json(mappedItems, { status: 200 });
      
    } catch (error) {
      console.error("Erro ao buscar ou analisar feed:", error);
      return NextResponse.json(
        { error: "Falha ao buscar ou processar o feed RSS" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
} 