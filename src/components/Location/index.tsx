"use client"

import { motion } from "framer-motion"

export default function Location() {
  return (
    <section id="location" className="relative py-16 px-3 md:px-28 bg-white overflow-hidden">
      {/* Decorative Shapes */}
      <motion.div 
        className="absolute top-10 left-10 w-24 h-24 bg-[#73a553]/20 rounded-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-32 h-32 bg-[#f17531]/10 rounded-full"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute top-1/2 left-0 w-16 h-16 bg-[#faa41a]/20 transform rotate-45"
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/3 w-20 h-20 border-4 border-[#1e7a39]/20 rounded-full"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1e7a39] mb-4">Lokasi Kami</h2>
          <div className="w-20 h-1 bg-[#f17531] mx-auto"/>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div 
            className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            
            <h3 className="text-2xl font-semibold mb-6 text-[#1e7a39]">Gado - Gado Kaliurang</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#f17531] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-lg">Jalan Melati No. 44</p>
                  <p className="text-lg">Lowokwaru, Malang</p>
                  <p className="text-lg">Jawa Timur, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-[#f17531]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p className="text-lg">Jam Buka: 08:00 AM - 3:00 PM</p>
              </div>
            </div>
            
            <motion.a
              href="https://maps.google.com/maps?q=Jalan%20Melati%20No.%2044,%20Malang,%20Lowokwaru,%20Jawa%20Timur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f17531] text-white px-8 py-3 rounded-full hover:bg-[#faa41a] transition duration-300 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yuk Mampir!
            </motion.a>
          </motion.div>

          <motion.div 
            className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Jalan%20Melati%20No.%2044,%20Malang,%20Lowokwaru,%20Jawa%20Timur+(Gado%20-%20Gado%20Kaliurang)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="w-full h-[400px] md:h-[500px]"
            >
              <a href="https://www.gps.ie/">gps drone</a>
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}