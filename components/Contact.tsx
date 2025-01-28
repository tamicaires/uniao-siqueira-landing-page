"use client"

import Link from "next/link"

export default function Contact() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#0648a8]">Entre em Contato</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0648a8] focus:ring-[#0648a8]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0648a8] focus:ring-[#0648a8]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#0648a8] focus:ring-[#0648a8]"
                ></textarea>
              </div>
              <button className="w-full bg-[#0648a8] text-white font-bold py-2 px-4 rounded-md hover:bg-[#053a7a] transition duration-300 hover:scale-105">
                Enviar Mensagem
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-[#0648a8]">Fale conosco agora mesmo!</h3>
            <p className="text-gray-700 mb-6">
              Estamos prontos para atender você e tirar todas as suas dúvidas. Clique no botão abaixo para iniciar uma
              conversa no WhatsApp.
            </p>
            <Link href="https://wa.me/seunumerodowhatsapp" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#ffcf04] text-[#0648a8] font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300 hover:scale-105">
                Fale Conosco no WhatsApp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

