import Image from "next/image";
import Link from "next/link";

export default function LocalSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0648a8] mb-4">
            Sua Melhor Opção em Imperatriz, Maranhão
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos a maior variedade de pisos, porcelanatos, telhas e
            revestimentos da região, com qualidade superior e preços
            competitivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#0648a8] mb-4">
              Produtos de Qualidade para Imperatriz e Região
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>✓ Pisos resistentes para o clima quente de Imperatriz</li>
              <li>
                ✓ Porcelanatos com design exclusivo para sua casa ou comércio
              </li>
              <li>✓ Telhas que suportam as chuvas intensas do Maranhão</li>
              <li>✓ Revestimentos que valorizam a arquitetura local</li>
              <li>
                ✓ Soluções personalizadas para projetos residenciais e
                comerciais
              </li>
            </ul>
          </div>
          <div className="relative h-[500px]">
            <Image
              src="https://i.ibb.co/bMBZbDHn/85-A89-CFC-41-CB-4-A02-9-DC7-BFDAE1-EA6-F62.jpg"
              alt="Loja União em Imperatriz, Maranhão"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Atendemos Imperatriz e cidades vizinhas como Açailândia, João
            Lisboa, e toda a região tocantina.
          </p>
          <Link
            href="https://maps.app.goo.gl/5SXREGLMJcpUCpw4A"
            target="_blank"
            className="inline-block bg-[#0648a8] text-white px-6 py-3 rounded-full font-bold hover:bg-[#053a7a] transition-colors duration-300"
          >
            Como Chegar
          </Link>
        </div>
      </div>
    </section>
  );
}
