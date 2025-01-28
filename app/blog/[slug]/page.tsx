"use client"

import { useEffect } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { ArrowLeft } from "lucide-react"
import { marked } from "marked"

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.categories.some((cat) => post.categories.includes(cat)))
    .slice(0, 3)

  // Configurar o renderizador do marked para lidar com imagens
  const renderer = new marked.Renderer()
  renderer.image = (href, title, text) => {
    return `<div class="my-8">
              <img src="${href}" alt="${text}" title="${title || ""}" class="rounded-lg shadow-md w-full" />
              ${title ? `<p class="text-center text-sm text-gray-500 mt-2">${title}</p>` : ""}
            </div>`
  }

  // Parse markdown content
  const htmlContent = marked(post.content, { renderer })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#0648a8] text-white py-10">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex justify-start items-center text-gray-100 hover:text-[#ffcf04] mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Blog
          </Link>
          <div className="flex flex-col justify-center items-center"> 
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl text-center">{post.title}</h1>
          <div className="flex items-center gap-6 flex-wrap sm:pl-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#ffcf04] rounded-full flex items-center justify-center">
                <span className="text-[#0648a8] font-bold text-lg">{post.author[0]}</span>
              </div>
              <div className="ml-3">
                <p className="font-medium text-white">{post.author}</p>
                <p className="text-gray-200">{post.role}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {post.categories.map((category) => (
                <span key={category} className="inline-block bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                  {category}
                </span>
              ))}
            </div>
            <span className="text-gray-200">{post.date}</span>
          </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
          <article
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:mb-4 prose-strong:text-gray-900 prose-strong:font-bold prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-li:text-gray-700 prose-img:rounded-lg prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-8">Posts Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                  <article className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold mb-2 group-hover:text-[#0648a8] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-500">{relatedPost.date}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="bg-[#0648a8] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Gostou do Conteúdo?</h2>
            <p className="text-gray-100 mb-8">Inscreva-se para receber mais dicas e novidades sobre acabamentos.</p>
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

