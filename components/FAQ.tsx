"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Quais tipos de produtos vocês oferecem?",
    answer:
      "Oferecemos uma ampla gama de produtos premium, incluindo porcelanatos, revestimentos, telhas e muito mais. Cada produto é cuidadosamente selecionado para garantir a mais alta qualidade e satisfação dos nossos clientes.",
  },
  {
    question: "Como funciona o processo de consultoria?",
    answer:
      "Nossa consultoria é personalizada e gratuita. Um especialista irá entender suas necessidades, avaliar o espaço e apresentar as melhores soluções para seu projeto.",
  },
  {
    question: "Vocês oferecem garantia dos produtos?",
    answer:
      "Sim, todos os nossos produtos possuem garantia de fábrica e garantia adicional União de satisfação. Trabalhamos apenas com as melhores marcas do mercado.",
  },
  {
    question: "Realizam entrega e instalação?",
    answer:
      "Sim, contamos com equipe própria de entrega e instalação, garantindo o mais alto padrão de qualidade em todo o processo.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0648a8] mb-4">Dúvidas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encontre respostas para as principais dúvidas sobre nossos produtos e serviços
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-[#0648a8]">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#0648a8] transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

