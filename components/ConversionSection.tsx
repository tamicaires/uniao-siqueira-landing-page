"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import { generateWhatsAppLink } from "@/shared/utils/util";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { getInitials } from "@/utils/utils";

const testimonials = [
  {
    name: "Tamires Vieira",
    content:
      "Comprei telhas infibra da Uniaõ Siqueira e são ótimas, super resistentes e com qualidade",
  },
  {
    name: "João Santos",
    content:
      "O atendimento da União é excepcional. Eles realmente entendem as necessidades dos clientes.",
  },
  {
    name: "Ana Oliveira",
    content:
      "Os revestimentos da União são um diferencial em meus projetos. Qualidade e beleza incomparáveis.",
  },
];

export default function ConversionSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const message = `Olá, vim do site, gostaria de agendar uma consultoria`;
  const linkWithMessage = generateWhatsAppLink(message);
  return (
    <section className="py-20 bg-[#FFCF04] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0648a8] mb-6">
              Transforme Sua Casa em um Lar dos Sonhos
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              Descubra como a União pode ajudar você a criar espaços únicos que
              refletem sua personalidade e estilo de vida.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Produtos premium de alta qualidade",
                "Consultoria personalizada",
                "Instalação profissional",
                "Garantia exclusiva",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div>
              <a
                href={linkWithMessage}
                target="_blank"
                className="inline-flex items-center bg-[#0648a8] text-white px-6 py-3 rounded-full font-bold text-lg hover:shadow-lg transition-shadow duration-300"
              >
                Agende uma Consultoria Grátis
                <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <div className="mb-6">
                <>
                  <div>
                    <p className="text-gray-600 italic mb-4">
                      "{testimonials[activeTestimonial].content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {getInitials(testimonials[activeTestimonial].name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-[#0648a8]">
                          {testimonials[activeTestimonial].name}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              </div>
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeTestimonial
                        ? "bg-[#0648a8]"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute -z-10 -top-6 -left-6 w-72 h-72 bg-[#3b82f6] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-72 h-72 bg-[#0648a8] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
