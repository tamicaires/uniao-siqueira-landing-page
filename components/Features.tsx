"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Porcelanatos Premium",
    description: "Elegância e resistência para os lares",
    image: "https://i.ibb.co/8Kdx4HD/2e9ac58f-77d1-4857-bd21-3106be36ad86.jpg",
  },
  {
    title: "Telhas Exclusivas",
    description: "Proteção contra o clima do Maranhão",
    image: "https://i.ibb.co/GQhFTSN/16fd9fb3-f4cb-4ff5-9d12-1ff0c3fed72d.jpg",
  },
  {
    title: "Revestimentos Únicos",
    description: "Designs que valorizam a arquitetura local",
    image: "https://i.ibb.co/JxmXLHs/f585ad5b-4a1c-4264-8d02-1de373a06e6f.jpg",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0648a8] mb-4">
            Soluções em Acabamentos para Imperatriz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Produtos selecionados para atender às necessidades específicas dos
            projetos em Imperatriz e região
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
