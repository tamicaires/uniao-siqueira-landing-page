"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  ArrowLeft,
  ExternalLink,
  Calculator,
  MessageSquareDiff,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionLink = motion.a;

export default function ProfilePage() {
  const socialLinks = [
    {
      title: "Website",
      icon: Globe,
      url: "https://bgomes.com.br",
      color: "from-[#1A524F] to-[#236c68]",
    },
    {
      title: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/bgomes",
      color: "from-[#833AB4] to-[#C13584]",
    },
    {
      title: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/bgomes",
      color: "from-[#1877F2] to-[#3b5998]",
    },
    {
      title: "Youtube",
      icon: Youtube,
      url: "https://youtube.com/bgomes",
      color: "from-[#FF0000] to-[#c4302b]",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: "(99) 98134-8896",
      url: "tel:+5500000000000",
    },
    {
      icon: Mail,
      text: "contato@lojauniaosiqueira.com.br",
      url: "mailto:contato@bgomes.com.br",
    },
    {
      icon: MapPin,
      text: "Imperatriz, Ma",
      url: "https://maps.google.com",
    },
  ];

  const quickLinks = [
    {
      title: "Solicitar Consultoria",
      description: "Fale com nossos especialistas e renove seu lar",
      icon: Calculator,
    },
    {
      title: "Fale Conosco",
      description: "Entre em contato com nossa equipe",
      icon: MessageSquareDiff,
    },
    {
      title: "Localização",
      description: "Saiba onde nos encontrar",
      icon: UserRound,
    },
  ];

  return (
    <div className="min-h-screen bg-white w-full">
      {/* Header section */}
      <div className="bg-[#0648a8] w-full px-4 py-8">
        <div className="container max-w-2xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 mb-6 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Voltar para o site
          </Link>

          <div className="flex justify-center items-center gap-3 w-full mb-2 pt-8">
            <Image
              src="https://i.ibb.co/KsDMpTH/LOGO-REFEITA-com-tra-ado.png"
              alt="União Siqueira Logo"
              width={35}
              height={35}
              className="w-auto h-10"
            />
            <span className={`text-2xl font-semibold text-white`}>
              União Siqueira
            </span>
          </div>

          <p className="text-white/80 px-10 sm:px-30 mb-4 text-center ">
            Há mais de 10 anos transformando sonhos em realidade através
            acabamentos de qualidade.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-2xl mx-auto px-4 -mt-4">
        <Card className="bg-white shadow-xl border-0 rounded-2xl">
          <CardContent className="p-6">
            {/* Quick Links */}
            <div className="grid gap-4 mb-8">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  className="w-full  border border-[#ffcf04] rounded-xl p-4 text-left transition-all hover:border-[#1A524F]/20 hover:bg-[#1A524F]/5 group"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-[#ffcf04]/10 p-2 rounded-md">
                      <link.icon className="w-7 h-7 text-[#ffcf04]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#0c2c2b] mb-1">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#1A524F] transition-colors" />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              {socialLinks.map((link, index) => (
                <MotionLink
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 p-4 rounded-xl bg-[#0648a8] text-white border border-custom-color transition-all hover:shadow-lg group`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <link.icon className="w-5 h-5 text-white" />
                  <span className="font-medium sr-only">{link.title}</span>
                </MotionLink>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4 border-t border-gray-100 pt-6 flex flex-wrap  sm:flex-col items-center justify-center">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.url}
                  className="flex items-center gap-3 p-2 -mx-2 rounded-lg text-gray-600 hover:text-[#1A524F] hover:bg-[#1A524F]/5 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <info.icon className="w-5 h-5 text-[#ffcf04]" />
                  <span className="font-medium">{info.text}</span>
                </motion.a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="text-center py-8">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} União Siqueira. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}
