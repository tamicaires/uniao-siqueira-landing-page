import { generateWhatsAppLink } from "@/shared/utils/util";
import Link from "next/link";

export default function Footer() {
  const message = `Olá, vim do site, gostaria de sabe mais sobre os produtos`;
  const linkWithMessage = generateWhatsAppLink(message);
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#0648a8] mb-4">União</h3>
            <p className="text-gray-600">
              Transformando sonhos em realidade através de soluções únicas para
              seus espaços.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[#0648a8] mb-4">Produtos</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Porcelanatos</li>
              <li>Revestimentos</li>
              <li>Telhas</li>
              <li>Acabamentos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#0648a8] mb-4">Empresa</h4>
            <ul className="space-y-2 flex flex-col text-gray-600">
              <Link href="#products">Produtos</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/catalogo">Catálogo</Link>
              <Link href={linkWithMessage}>Fale Conosco</Link>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#0648a8] mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-600">
              <li>contato@uniaosiqueira.com.br</li>
              <li>(99) 98134-8896</li>
              <li>Endereço da Loja</li>
              <li>Av. Colina Park, Imperatriz -MA</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} União Siqueira. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "HomeGoodsStore",
          "name": "União",
          "image": "https://www.uniao.com/logo.png",
          "description": "Loja especializada em pisos, porcelanatos, telhas e revestimentos em Imperatriz, Maranhão.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Exemplo, 123",
            "addressLocality": "Imperatriz",
            "addressRegion": "MA",
            "postalCode": "65900-000",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -5.5196,
            "longitude": -47.4926
          },
          "telephone": "+559812345678",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/uniaoimperatriz",
            "https://www.instagram.com/uniaoimperatriz"
          ]
        }
      `,
        }}
      />
    </footer>
  );
}
