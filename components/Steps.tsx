"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Consultoria Personalizada",
    description: "Nossa equipe especializada entende seus sonhos e necessidades",
  },
  {
    number: "02",
    title: "Projeto Detalhado",
    description: "Desenvolvemos um projeto que combina com seu estilo",
  },
  {
    number: "03",
    title: "Seleção de Materiais",
    description: "Escolha entre nossa ampla variedade de produtos premium",
  },
  {
    number: "04",
    title: "Realização do Sonho",
    description: "Acompanhamento completo até a conclusão do seu projeto",
  },
]

export default function Steps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0648a8] mb-4">Como Realizamos seu Sonho</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simplificado e transparente para transformar sua visão em realidade
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-6 rounded-xl bg-gray-50 group hover:bg-[#0648a8] transition-colors duration-300"
            >
              <span className="text-6xl font-bold text-[#ffcf04]/20 group-hover:text-white/20 transition-colors duration-300">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-[#0648a8] mb-2 group-hover:text-white transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

