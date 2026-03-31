import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Servicos from '@/components/Servicos'
import Blog from '@/components/Blog'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Blog />
      <Contato />
      <Footer />
    </main>
  )
}
