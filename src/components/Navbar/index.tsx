"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import Logo from "../../../public/LogoKaliurang.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    })
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1e7a39]/95 backdrop-blur-sm shadow-lg" : "bg-[#1e7a39]"
      }`}
    >
      <div className="container mx-auto px-3 md:px-6 flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="Gado-Gado Kaliurang Logo"
            width={50}
            height={50}
            className="hover:rotate-12 transition-transform duration-300"
          />
          <span className="text-2xl font-bold text-white hidden md:block">
            Gado - Gado Kaliurang
          </span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {["Menu", "Lokasi", "Kontak"].map((item, index) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#faa41a] transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu */}
        <motion.div
          className={`absolute top-full left-0 right-0 bg-[#1e7a39] md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="px-4 py-2">
            {["Menu", "Lokasi", "Kontak"].map((item, index) => (
              <motion.li
                key={item}
                className="py-2"
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-[#faa41a] transition-colors duration-300 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  )
}