"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { RssFeedUrlForm } from "@/components/RssFeedUrlForm";
import { RssFeedItemList } from "@/components/RssFeedItemList";
import { ArticleForm, FeedArticle } from "@/components/ArticleForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Author {
  id: string;
  name: string;
}

interface Category {
  id: string;
  name: string;
}

export default function ImportRssPage() {
  const { toast } = useToast();
  const [feedUrl, setFeedUrl] = useState<string>("");
  const [feedItems, setFeedItems] = useState<FeedArticle[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<FeedArticle | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Buscar categorias e autores na montagem do componente
  useEffect(() => {
    async function fetchData() {
      try {
        // Buscar categorias
        const categoriesResponse = await fetch("/admin/api/categories");
        if (!categoriesResponse.ok) {
          throw new Error("Falha ao buscar categorias");
        }
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        // Buscar autores
        const authorsResponse = await fetch("/admin/api/authors");
        if (!authorsResponse.ok) {
          throw new Error("Falha ao buscar autores");
        }
        const authorsData = await authorsResponse.json();
        setAuthors(authorsData);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        setError("Falha ao carregar categorias ou autores");
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível carregar os dados necessários",
        });
      }
    }

    fetchData();
  }, [toast]);

  // Função para buscar feed RSS
  const handleFetchFeed = async (url: string) => {
    setError(null);
    setLoading(true);
    setFeedUrl(url);
    setSelectedArticle(null);

    try {
      const response = await fetch("/admin/api/fetch-rss", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ feedUrl: url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha ao buscar feed RSS");
      }

      const items = await response.json();
      
      if (items.length === 0) {
        toast({
          title: "Feed vazio",
          description: "Nenhum item encontrado no feed RSS",
        });
      }
      
      setFeedItems(items);
    } catch (error) {
      console.error("Erro ao buscar feed:", error);
      setError(error instanceof Error ? error.message : "Erro desconhecido");
      toast({
        variant: "destructive",
        title: "Erro ao buscar feed",
        description: error instanceof Error ? error.message : "Ocorreu um erro desconhecido",
      });
    } finally {
      setLoading(false);
    }
  };

  // Função para selecionar um artigo do feed
  const handleSelectArticle = (article: FeedArticle) => {
    setSelectedArticle(article);
  };

  // Função para voltar à lista de artigos
  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  // Função para limpar tudo e voltar ao início
  const handleReset = () => {
    setFeedItems([]);
    setSelectedArticle(null);
    setFeedUrl("");
  };

  // Função para publicar artigo
  const handlePublishArticle = async (articleData: any) => {
    setLoading(true);
    
    try {
      const response = await fetch("/admin/api/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Erro específico para artigos duplicados (409 Conflict)
        if (response.status === 409) {
          toast({
            variant: "destructive",
            title: "Artigo já importado",
            description: data.details || "Este artigo já foi importado anteriormente.",
          });
        } else {
          throw new Error(data.error || "Falha ao publicar artigo");
        }
      } else {
        toast({
          title: "Artigo importado com sucesso",
          description: `O artigo "${data.title}" foi importado.`,
        });
        
        // Remover o artigo importado da lista
        setFeedItems(feedItems.filter(item => item.sourceUrl !== selectedArticle?.sourceUrl));
        setSelectedArticle(null);
      }
    } catch (error) {
      console.error("Erro ao publicar artigo:", error);
      toast({
        variant: "destructive",
        title: "Erro ao publicar",
        description: error instanceof Error ? error.message : "Ocorreu um erro desconhecido",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold mb-2">Importar Artigos via RSS</h1>
        <p className="text-muted-foreground">
          Importe artigos de feeds RSS para o portal de notícias. Os artigos serão atribuídos à categoria e autor selecionados.
        </p>
      </div>

      <div className="p-6 bg-white rounded-lg shadow dark:bg-gray-800">
        {/* Etapa 1: Formulário de URL */}
        {!feedItems.length && !selectedArticle && (
          <RssFeedUrlForm onSubmit={handleFetchFeed} />
        )}

        {/* Etapa 2: Lista de artigos do feed */}
        {feedItems.length > 0 && !selectedArticle && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Feed: <strong>{feedUrl}</strong>
              </p>
              <Button variant="outline" size="sm" onClick={handleReset}>
                Buscar outro feed
              </Button>
            </div>
            
            <RssFeedItemList items={feedItems} onSelectArticle={handleSelectArticle} />
          </div>
        )}

        {/* Etapa 3: Formulário de edição de artigo */}
        {selectedArticle && (
          <div className="space-y-4">
            <Button variant="outline" size="sm" onClick={handleBackToList} className="flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" />
              Voltar para a lista
            </Button>
            
            <div className="pt-4">
              <ArticleForm
                authors={authors}
                categories={categories}
                onSubmit={handlePublishArticle}
                isSubmitting={loading}
                initialData={selectedArticle}
              />
            </div>
          </div>
        )}

        {loading && (
          <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 flex items-center justify-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 p-4 mt-4 rounded-md text-red-500 dark:text-red-300">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
} 