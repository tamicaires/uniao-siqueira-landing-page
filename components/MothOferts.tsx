"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Tipo para os produtos em oferta
type OfertaProduto = {
  id: string;
  nome: string;
  precoOriginal?: number;
  precoPromocional: number;
  desconto?: number;
  tamanho?: string;
  imagem: string;
  categoria: string;
  tempoRestante?: string;
};

export default function MonthOferts() {
  // Estado para os produtos em oferta
  const [ofertas, setOfertas] = useState<OfertaProduto[]>([
    {
      id: "1",
      nome: "Piso Lume Lux Bianco Retificado",
      precoPromocional: 33.9,
      tamanho: "60x60cm",
      imagem:
        "https://revesteonline.vteximg.com.br/arquivos/ids/203609-460-460/Piso-Ceramico-Lume-Lux-Bianco-Brilhante-60x60.jpg?v=638167476525930000",
      categoria: "Pisos",
      tempoRestante: "Enquanto durar o estoque",
    },
    {
      id: "2",
      nome: "Piso Karina Vogue",
      precoPromocional: 33.9,
      tamanho: "60x60cm",
      imagem:
        "https://armazemjenipapo.agilecdn.com.br/966011_1.jpg?v=284-1422215469",
      categoria: "Pisos",
      tempoRestante: "Enquanto durar o estoque",
    },
    {
      id: "3",
      nome: "Piso Lume Delux Mármore Retificado",
      precoPromocional: 42.9,
      tamanho: "75x75cm",
      imagem:
        "https://debaitashop.com.br/pub/media/catalog/product/cache/61c13cb32553fc8433b5b23e545e563b/0/_/0_27416_1.jpeg",
      categoria: "Pisos",
      tempoRestante: "Enquanto durar o estoque",
    },
    {
      id: "4",
      nome: "Piso Lume São Tomé",
      precoPromocional: 36.9,
      tamanho: "75x75cm",
      imagem:
        "https://lumeceramica.com.br/wp-content/uploads/2023/10/SAO-TOME-F3-1.jpg",
      categoria: "Pisos",
      tempoRestante: "Enquanto durar o estoque",
    },
  ]);

  // Formata o preço para o formato brasileiro
  const formatarPreco = (preco: number) => {
    return preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  // Função para abrir WhatsApp
  const abrirWhatsApp = (produto: string) => {
    const mensagem = `Olá! Vi o produto "${produto}" nas ofertas do mês e gostaria de mais informações.`;
    const numeroWhatsApp = "551199999999"; // Substitua pelo número correto
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <section className="w-full py-12 bg-zinc-100 relative overflow-hidden">
      {/* Elementos decorativos de encarte */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-uniao-secondary rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-uniao-primary rounded-full translate-x-1/3 translate-y-1/3 opacity-10"></div>
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-uniao-secondary rounded-full opacity-20"></div>

      <div className="container px-4 mx-auto relative">
        {/* Cabeçalho da seção estilo encarte */}
        <div className="flex flex-col items-center mb-10 text-center ">
          <div className="w-full max-w-4xl bg- text-white py-4 px-6 rounded-lg shadow-lg transform -rotate-1 mb-8 bg-uniao-primary">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-2">
              OFERTAS IMPERDÍVEIS DO MÊS
            </h2>
            <div className="flex items-center justify-center gap-2 text-uniao-secondary font-bold  text-xs sm:text-xl">
              <span>ECONOMIZE MUITO</span>
              <span>•</span>
              <span>PREÇOS IMBATÍVEIS</span>
              <span>•</span>
              <span>TEMPO LIMITADO</span>
            </div>
          </div>

          <div className="bg-uniao-secondary text-uniao-primary py-2 px-8 rounded-full transform rotate-2 font-bold text-lg mb-10 shadow-md">
            APROVEITE ENQUANTO DURAR O ESTOQUE!
          </div>
        </div>

        {/* Grid de produtos estilo encarte */}
        <div className="flex flex-wrap justify-center gap-4">
          {ofertas.map((produto) => (
            <div
              key={produto.id}
              className="transform transition-all duration-300 hover:scale-105 hover:-rotate-1"
            >
              <Card className="h-full overflow-hidden border-2 border-gray-200 bg-white relative">
                {/* Selo de desconto
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-uniao-secondary rotate-45 z-10">
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-uniao-primary font-bold text-lg">
                    {produto.desconto}%
                  </div>
                </div> */}

                <CardContent className="p-3">
                  {/* Categoria */}
                  <div className="bg-uniao-light text-uniao-primary text-xs font-semibold px-2 py-1 rounded mb-2 inline-block">
                    {produto.categoria}
                  </div>

                  {/* Imagem do produto */}
                  <div className="relative  w-full overflow-hidden bg-gray-50 mb-3 flex items-center justify-center">
                    <Image
                      src={produto.imagem || "/placeholder.svg"}
                      alt={produto.nome}
                      width={300}
                      height={300}
                      className="object-contain"
                    />
                  </div>

                  {/* Nome do produto */}
                  <h3 className="font-bold text-sm text-gray-800 line-clamp-2">
                    {produto.nome}
                  </h3>
                  <p className="text-sm text-gray-800 line-clamp-2">
                    {produto.tamanho && `Tamanho ${produto.tamanho}`}
                  </p>

                  {/* Preços */}
                  <div className="flex flex-col mb-3">
                    {produto.precoOriginal && produto.desconto && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500 line-through">
                          {formatarPreco(produto.precoOriginal)}
                        </span>
                        <Badge className="bg-uniao-secondary text-uniao-primary">
                          -{produto.desconto}%
                        </Badge>
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-gray-700">POR</span>
                      <span className="text-2xl font-extrabold text-uniao-primary">
                        {formatarPreco(produto.precoPromocional)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600">
                      À vista no PIX ou dinheiro
                    </span>
                  </div>

                  {/* Tempo restante */}
                  <div className="flex items-center gap-1 text-xs text-uniao-primary font-medium mb-3">
                    <Clock className="h-3 w-3" />
                    <span>Oferta válida por {produto.tempoRestante}</span>
                  </div>

                  {/* Botão de WhatsApp */}
                  <Button
                    onClick={() => abrirWhatsApp(produto.nome)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Consultar via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <div className="mt-12 text-center">
          <div className="bg-uniao-primary text-white py-4 px-6 rounded-lg inline-flex items-center gap-3 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <span className="text-xl font-bold">VER TODAS AS OFERTAS</span>
            <ArrowRight className="h-5 w-5" />
          </div>

          <div className="mt-8 p-4 border-2 border-dashed border-uniao-primary/30 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-gray-700">
              *Ofertas válidas enquanto durarem os estoques. Imagens meramente
              ilustrativas. Consulte condições especiais para grandes
              quantidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
