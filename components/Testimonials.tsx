"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Arquiteta",
    text: "A União sempre entrega produtos de altíssima qualidade. Confio neles para todos os meus projetos.",
  },
  {
    name: "João Santos",
    role: "Construtor",
    text: "O atendimento da União é excepcional. Eles realmente entendem as necessidades dos clientes.",
  },
  {
    name: "Ana Oliveira",
    role: "Designer de Interiores",
    text: "Os revestimentos da União são um diferencial em meus projetos. Qualidade e beleza incomparáveis.",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#0648a8]">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#ffcf04] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#0648a8] font-bold text-xl">{testimonial.name[0]}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0648a8]">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

