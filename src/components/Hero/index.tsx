"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroImg from "../../../public/HeroImage.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={HeroImg}
          alt="Gado-gado dish"
          layout="fill"
          objectFit="cover"
          className="filter brightness-75"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4">
        <motion.div
          className="text-center text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Element */}
          <motion.div
            className="w-20 h-1 bg-yellow-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          {/* Main Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <span className="block text-yellow-400">Gado - Gado</span>
            <span className="block">Kaliurang</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-3xl mb-8 text-gray-200 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Cita rasa resep keluarga sejak 1990
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Nikmati kelezatan gado-gado autentik dengan bumbu kacang spesial
            yang telah menjadi warisan keluarga selama lebih dari 30 tahun.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("location")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Cobain Sekarang
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Lihat Menu
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1 h-16 rounded-full bg-gradient-to-b from-yellow-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
