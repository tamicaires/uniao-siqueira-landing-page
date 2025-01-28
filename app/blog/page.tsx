"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0648a8] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Blog União - Inspiração & Conhecimento</h1>
          <p className="text-xl text-center max-w-2xl mx-auto text-gray-100">
            Dicas, tendências e informações sobre pisos, porcelanatos, telhas e revestimentos em Imperatriz
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative h-48 sm:h-64">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="inline-block bg-[#ffcf04]/10 text-[#0648a8] text-sm px-3 py-1 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#0648a8] transition-colors text-center">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-[#ffcf04] rounded-full flex items-center justify-center">
                        <span className="text-[#0648a8] font-bold">{post.author[0]}</span>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-sm text-gray-500">{post.role}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-[#0648a8] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Receba Nossas Novidades</h2>
            <p className="text-gray-100 mb-8">Inscreva-se para receber dicas, tendências e ofertas exclusivas.</p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="px-6 py-3 rounded-full flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-[#ffcf04]"
              />
              <button className="bg-[#ffcf04] text-[#0648a8] px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow duration-300">
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

