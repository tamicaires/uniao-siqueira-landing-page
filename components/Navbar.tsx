"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { generateWhatsAppLink } from "@/shared/utils/util";

const menuItems = [
  { title: "Início", href: "/" },
  { title: "Produtos", href: "/#products" },
  { title: "Catálogo", href: "/catalogo" },
  { title: "Blog", href: "/blog" },
  { title: "Contato", href: "/#contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const message = `Olá, vim do site, gostaria de sabe mais sobre os produtos`;
  const linkWithMessage = generateWhatsAppLink(message);
  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? "bg-[#0648a8]  shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://i.ibb.co/KsDMpTH/LOGO-REFEITA-com-tra-ado.png"
                alt="União Logo"
                width={40}
                height={40}
                className="w-auto h-10"
              />
              <span
                className={`text-2xl font-semibold ${
                  isScrolled || !isHomePage ? "text-white" : "text-white"
                }`}
              >
                União Siqueira
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled || !isHomePage
                      ? "text-white hover:text-[#ffcf04]"
                      : "text-white hover:text-[#ffcf04]"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href={linkWithMessage}
                target="_blank"
                className="bg-[#ffcf04] text-[#0648a8] px-4 py-2 rounded-full font-medium text-sm hover:shadow-lg transition-shadow duration-300"
              >
                Fale Conosco
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-[#0648a8]"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-300"
          style={{ opacity: isMobileMenuOpen ? 1 : 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed right-0 top-0 bottom-0 w-64 bg-white p-6 transition-transform duration-300"
            style={{
              transform: isMobileMenuOpen
                ? "translateX(0)"
                : "translateX(100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} className="text-[#0648a8]" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 hover:text-[#0648a8] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="https://wa.me/seunumerodowhatsapp"
                className="bg-[#ffcf04] text-[#0648a8] px-4 py-2 rounded-full font-medium text-sm text-center hover:shadow-lg transition-shadow duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
