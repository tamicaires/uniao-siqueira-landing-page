"use client";

import { generateWhatsAppLink } from "@/shared/utils/util";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const message = `Olá, vim do site, gostaria de fazer um orçamento`;
  const linkWithMessage = generateWhatsAppLink(message);
  return (
    <section className="min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0648a8] via-[#053a7a] to-[#042d5e] ">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Telhas, Pisos, Porcelanatos e Revestimentos em Imperatriz
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Transforme sua casa ou comércio com as melhores soluções em
              acabamentos do Maranhão
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={linkWithMessage}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ffcf04] text-[#0648a8] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Fale com um Especialista
                </motion.button>
              </Link>
              <div className="flex items-center gap-2 text-white transition-all duration-300 hover:scale-105">
                <span className="text-4xl font-bold">4.9</span>
                <div>
                  <div className="flex text-[#ffcf04]">{"★".repeat(5)}</div>
                  <span className="text-sm">
                    Avaliação dos Clientes em Imperatriz
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[600px] w-full">
              <Image
                src="https://i.ibb.co/nsXrvD0R/D7-A4-E06-A-5868-403-C-8798-186-D2-FD91-E1-E.jpg"
                alt="Showroom União em Imperatriz, Maranhão"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold text-[#0648a8]">+2.000</p>
              <p className="text-gray-600">Projetos Realizados em Imperatriz</p>
            </div>
          </div>
        </div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#ffcf04] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#ffcf04] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
}
{
  /* <style jsx>{`
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
`}</style>; */
}
