"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <Image
        src="/gado-gado-hero.jpg"
        alt="Gado-gado dish"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <motion.div
        className="relative z-20 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        >
          Gado - Gado Kaliurang
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Cita rasa resep keluarga sejak 1990
        </motion.p>
        <motion.button
          className="bg-[#f17531] text-white px-8 py-3 rounded-full text-xl hover:bg-[#faa41a] transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cobain Sekarang!
        </motion.button>
      </motion.div>
    </section>
  )
}

