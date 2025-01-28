"use client"

import Image from "next/image"

const projects = [
  { name: "Projeto 1", image: "/placeholder.svg?height=300&width=400" },
  { name: "Projeto 2", image: "/placeholder.svg?height=300&width=400" },
  { name: "Projeto 3", image: "/placeholder.svg?height=300&width=400" },
  { name: "Projeto 4", image: "/placeholder.svg?height=300&width=400" },
  { name: "Projeto 5", image: "/placeholder.svg?height=300&width=400" },
  { name: "Projeto 6", image: "/placeholder.svg?height=300&width=400" },
]

export default function Gallery() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#0648a8]">Galeria de Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-semibold">{project.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

