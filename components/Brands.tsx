"use client"

import { useEffect, useState } from "react"

const brands = ["Marca 1", "Marca 2", "Marca 3", "Marca 4", "Marca 5", "Marca 6", "Marca 7", "Marca 8"]

export default function Brands() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#0648a8]">Marcas Parceiras</h2>
        <div className="relative overflow-hidden h-20">
          <div
            style={{
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            className="flex items-center absolute"
          >
            {brands.map((brand, index) => (
              <div key={index} className="w-1/4 flex-shrink-0 px-4">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <span className="text-xl font-semibold text-[#0648a8]">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

