import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeaturedMenu from "@/components/Menu"
import Location from "@/components/Location"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <FeaturedMenu />
      <Location />
      <Footer />
    </main>
  )
}

