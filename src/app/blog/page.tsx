import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogContent from '@/components/BlogContent'

export const metadata: Metadata = {
  title: 'Blog | Maison Fandim - Dicas e Tendências em Estética',
  description: 'Leia nossos artigos sobre tendências em estética, cuidados com a pele, tratamentos faciais e corporais. Conteúdo exclusivo da Maison Fandim.',
  keywords: 'blog estética, dicas beleza, tratamentos faciais, skincare, clínica Brasília',
  openGraph: {
    title: 'Blog | Maison Fandim',
    description: 'Dicas e tendências em estética de luxo',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      <Navbar />
      <BlogContent />
      <Footer />
    </main>
  )
}
