import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "União - Pisos, Porcelanatos e Revestimentos em Imperatriz, MA",
  description:
    "Encontre os melhores pisos, porcelanatos e revestimentos em Imperatriz, Maranhão. Qualidade superior e atendimento personalizado para sua obra ou reforma.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

