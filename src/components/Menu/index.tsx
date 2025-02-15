"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const menuItems = {
  makanan: [
    {
      name: "Gado - Gado",
      image: "/GadoGado.jpg",
      description: "Hidangan tradisional berupa sayuran segar, tahu, tempe, dan telur yang disiram dengan bumbu kacang khas Kaliurang yang lezat"
    },
    {
      name: "Rujak Cingur",
      image: "/RujakCingur.jpg",
      description: "Paduan cingur sapi yang empuk dengan sayuran segar dan bumbu petis yang khas, menciptakan cita rasa yang unik"
    },
    {
      name: "Rujak Manis",
      image: "/RujakManis.jpg",
      description: "Kombinasi buah-buahan segar dengan siraman bumbu kacang manis pedas yang menyegarkan"
    },
  ],
  minuman: [
    {
      name: "Es Dawet",
      image: "/EsDawet.jpg",
      description: "Minuman tradisional dengan cendol hijau, santan segar, dan gula merah yang menyegarkan"
    },
    {
      name: "Es Campur",
      image: "/EsCampur.jpg",
      description: "Racikan es dengan berbagai macam bahan seperti kolang-kaling, cincau, dan buah-buahan dengan sirup manis"
    },
    {
      name: "Es Cao",
      image: "/EsCao.jpg",
      description: "Minuman segar dengan cincau hitam, susu, dan sirup yang menyegarkan di cuaca panas"
    },
  ]
}

export default function FeaturedMenu() {
  return (
    <section id="menu" className="relative py-16 md:py-20 px-3 md:px-6 bg-[#73a553] overflow-hidden">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 border-4 border-white/10 rounded-full"
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-20 h-20 border-4 border-white/10 transform rotate-45"
        initial={{ rotate: 0 }}
        whileInView={{ rotate: 45 }}
        viewport={{ once: true }}
      />
      
      <div className="container mx-auto relative">
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Menu Andalan Kami</h2>
          <div className="w-24 h-1 bg-white/30 mx-auto"/>
        </motion.div>

        {/* Makanan Section */}
        <div className="mb-16">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-white mb-4">Makanan</h3>
            <div className="w-16 h-1 bg-white/30 mx-auto"/>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.makanan.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-center justify-center">
                    <p className="text-white text-center text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-[#1e7a39] text-center">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Minuman Section */}
        <div>
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold text-white mb-4">Minuman</h3>
            <div className="w-16 h-1 bg-white/30 mx-auto"/>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.minuman.map((item, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex items-center justify-center">
                    <p className="text-white text-center text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-[#1e7a39] text-center">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}