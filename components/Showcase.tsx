"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const showcases = [
  {
    title: "Ambientes Residenciais",
    stats: "+1000",
    description: "Projetos residenciais realizados",
  },
  {
    title: "Projetos Comerciais",
    stats: "+500",
    description: "Espaços comerciais transformados",
  },
  {
    title: "Clientes Satisfeitos",
    stats: "+2000",
    description: "Sonhos realizados com sucesso",
  },
]

export default function Showcase() {
  return (
    <section className="py-20 bg-[#0648a8] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experiência que Transforma Sonhos em Realidade</h2>
            <p className="text-xl mb-8 text-white/90">
              Nossa trajetória é marcada por histórias de sucesso e transformações incríveis
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {showcases.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-[#ffcf04] mb-2">{item.stats}</p>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px]"
          >
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Showcase"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

