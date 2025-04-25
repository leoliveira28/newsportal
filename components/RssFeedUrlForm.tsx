"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";

const urlSchema = z.string().url("URL inválida");

interface RssFeedUrlFormProps {
  onSubmit: (url: string) => Promise<void>;
}

export function RssFeedUrlForm({ onSubmit }: RssFeedUrlFormProps) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // Validar URL
      urlSchema.parse(url);
      
      setIsLoading(true);
      await onSubmit(url);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError("URL inválida. Por favor, insira uma URL completa (incluindo http:// ou https://)");
      } else {
        setError("Ocorreu um erro ao processar a solicitação");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="feed-url" className="text-sm font-medium">
          URL do Feed RSS
        </label>
        <Input
          id="feed-url"
          type="url"
          placeholder="https://exemplo.com/feed.xml"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isLoading}
          className="w-full"
          required
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      
      <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
        {isLoading ? "Buscando..." : "Buscar Feed"}
      </Button>
    </form>
  );
} 