"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const featuredItems = [
  { name: "Gado - Gado", image: "/gado-gado.jpg" },
  { name: "Rujak Cingur", image: "/rujak-cingur.jpg" },
  { name: "Rujak Manis", image: "/rujak-manis.jpg" },
  { name: "Es Dawet", image: "/es-dawet.jpg" },
]

export default function FeaturedMenu() {
  return (
    <section id="menu" className="py-16 md:py-20 px-3 md:px-6 bg-[#73a553]">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Menu Andalan Kami
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#1e7a39]">{item.name}</h3>
                <motion.button
                  className="mt-4 bg-[#f17531] text-white px-4 py-2 rounded hover:bg-[#faa41a] transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

