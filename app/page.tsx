import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Steps from "@/components/Steps";
import Showcase from "@/components/Showcase";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ConversionSection from "@/components/ConversionSection";
import LocalSection from "@/components/LocalSection";
import MonthOferts from "@/components/MothOferts";

export const metadata: Metadata = {
  title:
    "União Siqueira - Pisos, Porcelanatos, Telhas e Revestimentos em Imperatriz, MA",
  description:
    "Encontre os melhores pisos, porcelanatos, telhas e revestimentos em Imperatriz, Maranhão. Qualidade superior e atendimento personalizado para sua obra ou reforma.",
  keywords:
    "pisos, porcelanatos, telhas, revestimentos, Imperatriz, Maranhão, construção, reforma, acabamentos",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ConversionSection />
      <Products />
      <MonthOferts />
      <LocalSection />
      <Steps />
      <Showcase />
      <FAQ />
      <CTA />
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Confira Nosso Blog</h2>
          <p className="text-xl mb-6">
            Dicas, tendências e informações sobre pisos, porcelanatos e
            revestimentos em Imperatriz
          </p>
          <Link
            href="/blog"
            className="bg-[#0648a8] text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Visitar o Blog
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
