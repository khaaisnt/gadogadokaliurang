"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Logo from "../../../public/LogoKaliurang.png"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Improved scroll handler with useEffect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#1e7a39]/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-gradient-to-b from-black/50 to-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Image
                src={Logo}
                alt="Gado-Gado Kaliurang Logo"
                width={50}
                height={50}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
              {/* Logo shine effect */}
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>
          <motion.span 
            className="text-2xl font-bold text-white hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Gado - Gado Kaliurang
          </motion.span>
        </Link>

        {/* Hamburger Button with improved animation */}
        <motion.button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-6 relative">
            <motion.span
              className="absolute w-6 h-0.5 bg-white transform transition-transform duration-300"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-white top-2 transition-opacity duration-300"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className="absolute w-6 h-0.5 bg-white top-4 transform transition-transform duration-300"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
            />
          </div>
        </motion.button>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden md:flex space-x-8 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {["Menu", "Lokasi", "Kontak"].map((item, index) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative text-white hover:text-[#faa41a] transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
              >
                <span>{item}</span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#faa41a] transform origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu with improved animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-[#1e7a39] md:hidden border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul 
                className="container mx-auto px-4 py-4 space-y-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {["Menu", "Lokasi", "Kontak"].map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: -20, opacity: 0 }
                    }}
                  >
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-white hover:text-[#faa41a] transition-all duration-300 block py-2 px-4 rounded-lg hover:bg-white/10"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}