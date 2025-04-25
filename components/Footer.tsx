import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-highlight">Portal</span>
              <span className="text-2xl font-bold">Notícias</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Seu portal de notícias com as informações mais relevantes do Brasil e do mundo.
            </p>
            <div className="mt-4 flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Youtube">
                  <Youtube className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/noticias" className="hover:text-highlight">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="/esportes" className="hover:text-highlight">
                  Esportes
                </Link>
              </li>
              <li>
                <Link href="/entretenimento" className="hover:text-highlight">
                  Entretenimento
                </Link>
              </li>
              <li>
                <Link href="/tecnologia" className="hover:text-highlight">
                  Tecnologia
                </Link>
              </li>
              <li>
                <Link href="/economia" className="hover:text-highlight">
                  Economia
                </Link>
              </li>
              <li>
                <Link href="/politica" className="hover:text-highlight">
                  Política
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-highlight">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-highlight">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="hover:text-highlight">
                  Carreiras
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-highlight">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-highlight">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Newsletter</h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
              Inscreva-se para receber as últimas notícias.
            </p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Seu email" className="h-9" />
              <Button>Inscrever</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-slate-600 dark:text-slate-300">
          <p>&copy; {new Date().getFullYear()} Portal Notícias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
