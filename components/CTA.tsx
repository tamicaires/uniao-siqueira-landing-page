"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-[#0648a8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Pronto para Realizar seu Sonho?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-8 text-white/90"
          >
            Entre em contato agora mesmo e transforme seus espaços em ambientes extraordinários
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="https://wa.me/seunumerodowhatsapp">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ffcf04] text-[#0648a8] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Fale com um Especialista
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

