"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer id="kontak" className="bg-gradient-to-br from-green-700 to-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/LogoKaliurang.png"
                  alt="Gado-Gado Kaliurang Logo"
                  width={90}
                  height={90}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Gado - Gado Kaliurang
                </h3>
                <p className="text-green-100 italic">
                  Cita rasa resep keluarga sejak 1990
                </p>
              </div>
            </div>
            <p className="text-green-100 max-w-md">
              Menyajikan hidangan gado-gado autentik dengan bumbu kacang spesial 
              yang telah menjadi warisan keluarga selama lebih dari 30 tahun.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white border-b border-green-600 pb-2">
              Kontak Kami
            </h4>
            <div className="space-y-4">
              <a href="tel:+622333757270" className="flex items-center gap-3 group">
                <FaPhone className="text-green-300 group-hover:text-yellow-400 transition-colors" />
                <span className="group-hover:text-yellow-400 transition-colors">
                  +62 233 3757 2700
                </span>
              </a>
              <a href="mailto:gadogadokaliurang@gmail.com" className="flex items-center gap-3 group">
                <FaEnvelope className="text-green-300 group-hover:text-yellow-400 transition-colors" />
                <span className="group-hover:text-yellow-400 transition-colors">
                  gadogadokaliurang@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-300" />
                <span>Jl. Melati No. 44, Malang, Lowokwaru, Jawa Timur</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white border-b border-green-600 pb-2">
              Ikuti Kami
            </h4>
            <div className="flex gap-6">
              {[
                { Icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/gadogadokaliurang/" },
                { Icon: FaTiktok, label: "TikTok", href: "https://www.tiktok.com/@gadogadokaliurang?is_from_webapp=1&sender_device=pc" }
              ].map((platform) => (
                <motion.a
                  key={platform.label}
                  href={platform.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-600 p-3 rounded-full hover:bg-yellow-500 transition-colors"
                >
                  <platform.Icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
            <p className="text-green-100">
              Ikuti kami di media sosial untuk mendapatkan update terbaru!
            </p>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-6 border-t border-green-600 text-center"
        >
          <p className="text-green-100">
            &copy; 2025 Gado - Gado Kaliurang. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer