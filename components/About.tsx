"use client"

export default function About() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#0648a8]">Sobre a União</h2>
          <p className="text-xl text-gray-700 mb-8">
            Há mais de duas décadas, a União tem sido sinônimo de excelência em revestimentos e acabamentos. Nossa
            missão é transformar espaços em ambientes únicos, combinando qualidade superior, design inovador e um
            compromisso inabalável com a satisfação do cliente.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4 text-[#0648a8]">Por que escolher a União?</h3>
            <ul className="text-left text-gray-700">
              <li className="mb-2">✓ Produtos de alta qualidade e durabilidade</li>
              <li className="mb-2">✓ Variedade de estilos para todos os gostos</li>
              <li className="mb-2">✓ Equipe especializada em atendimento personalizado</li>
              <li>✓ Compromisso com a inovação e sustentabilidade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

