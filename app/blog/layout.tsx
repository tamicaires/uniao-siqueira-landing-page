import type { Metadata } from "next"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Blog da União - Pisos, Porcelanatos e Revestimentos em Imperatriz, MA",
  description:
    "Dicas, tendências e informações sobre pisos, porcelanatos, telhas e revestimentos em Imperatriz, Maranhão. Conteúdo especializado para sua obra ou reforma.",
  keywords: "blog, pisos, porcelanatos, telhas, revestimentos, Imperatriz, Maranhão, dicas de decoração, tendências",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="pt-20">{children}</main>
      <footer className="bg-gray-200 py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} União - Pisos, Porcelanatos e Revestimentos em Imperatriz, MA
        </div>
      </footer>
    </div>
  )
}

