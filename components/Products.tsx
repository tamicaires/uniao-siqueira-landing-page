"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { generateWhatsAppLink } from "@/shared/utils/util";

const products = [
  {
    title: "Coleção Elegance",
    description: "Porcelanatos que unem beleza e resistência",
    image: "https://i.ibb.co/dp6mzBG/d3b69f23-7e5e-4f86-87eb-d835369af1db.jpg",
  },
  {
    title: "Linha Gigantes",
    description: "Porcelanatos 120x120 o gigante dos porcelanatos",
    image: "https://i.ibb.co/thRY07X/c97452e5-ff05-42ea-804e-a06453cd1ded.jpg",
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50" id="products">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0648a8] mb-4">
            Coleções Exclusivas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossas coleções especialmente desenvolvidas para tornar
            seus ambientes únicos
          </p>
        </motion.div>
        <div className="text-center mb-16"></div>
        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div key={index} className="relative group">
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-200 text-lg mb-4">
                    {product.description}
                  </p>
                  <a
                    href={generateWhatsAppLink(
                      `Olá, quero saber mais sobre ${product.title}`
                    )}
                    target="_blank"
                    className="bg-[#ffcf04] text-[#0648a8] px-6 py-3 rounded-full font-bold hover:shadow-lg transition-shadow duration-300"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
