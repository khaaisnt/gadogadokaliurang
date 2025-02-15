import type React from "react"
import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata = {
  title: "Gado - Gado Kaliurang | Authentic Indonesian Flavors Since 1990",
  description: "Experience the best Gado-Gado, Rujak Cingur, Rujak Manis, and Es Dawet in Malang, Indonesia.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}

