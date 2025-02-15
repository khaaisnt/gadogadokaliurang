"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
import Logo from "../../../public/LogoKaliurang.png"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1e7a39] text-white px-3 md:px-6 py-8">
      <div className="container gap-y-3 md:gap-y-0 pb-5 mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        <motion.div
          className="mb-4 md:mb-0 flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src={Logo}
            alt="Gado-Gado Kaliurang Logo"
            width={80}
            height={80}
            className="hover:rotate-12 transition-transform duration-300"
          />
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">Gado - Gado Kaliurang</h3>
            <p>Cita rasa resep keluarga sejak 1990</p>
          </div>
        </motion.div>

        <motion.div
          className="mb-4 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold mb-2">Kontak Kami</h4>
          <a href="">Telpon: <span className="hover:text-[#faa41A] transition-colors">+62 233 3757 2700</span></a>
          <br />
          <a href="">Email: <span className="hover:text-[#faa41A] transition-colors">gadogadokaliurang@gmail.com</span></a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-xl font-semibold mb-2">Ikuti Kami</h4>
          <div className="flex space-x-4">
            {[FaInstagram, FaTiktok].map((Icon, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <Link href="#" className="text-2xl hover:text-[#faa41a] transition-colors">
                  <Icon />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <p>&copy; 2025 Gado - Gado Kaliurang. All rights reserved.</p>
      </motion.div>
    </footer>
  )
}

