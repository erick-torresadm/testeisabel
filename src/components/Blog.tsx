'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Post {
  id: string
  titulo: string
  slug: string
  resumo: string
  categoria: string
  imagem: string
  data_publicacao: string
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts?limit=3')
        if (res.ok) {
          const data = await res.json()
          setPosts(data.posts || [])
        }
      } catch (error) {
        console.error('Erro ao carregar posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const postsMock = posts.length > 0 ? posts : [
    {
      id: '1',
      titulo: '5 Tendências em Estética para 2026',
      slug: 'tendencias-estetica-2026',
      resumo: 'Descubra os tratamentos mais procurados do ano e como podem transformar sua rotina de cuidados com a pele.',
      categoria: 'Tendências',
      imagem: '',
      data_publicacao: '2026-03-15',
    },
    {
      id: '2',
      titulo: 'Botox x Preenchimento: Qual Escolher?',
      slug: 'botox-vs-preenchimento',
      resumo: 'Entenda as diferenças entre os procedimentos e descubra qual é o mais indicado para o seu caso.',
      categoria: 'Dicas',
      imagem: '',
      data_publicacao: '2026-03-10',
    },
    {
      id: '3',
      titulo: 'Cuidados com a Pele no Verão',
      slug: 'cuidados-pele-verao',
      resumo: 'Protetor solar, hidratação e muito mais. Confira o guia completo para manter sua pele radiante.',
      categoria: 'Cuidados',
      imagem: '',
      data_publicacao: '2026-03-05',
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <section id="blog" className="relative py-32 bg-brand-light overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-brand-rose/5 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-brand-rose mb-4">
              Blog & Conteúdo
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-brand-dark">
              Insights & <span className="italic text-brand-rose">Dicas</span>
            </h2>
          </div>
          <Link 
            href="/blog"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-brand-dark hover:text-brand-rose transition-colors font-body text-sm tracking-wider"
          >
            Ver Todos os Artigos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-8 animate-pulse">
                <div className="bg-brand-light h-48 rounded-xl mb-6" />
                <div className="h-4 bg-brand-light rounded w-1/4 mb-4" />
                <div className="h-6 bg-brand-light rounded w-3/4 mb-4" />
                <div className="h-4 bg-brand-light rounded w-full mb-2" />
                <div className="h-4 bg-brand-light rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {postsMock.map((post, index) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-brand-dark/5 hover:shadow-2xl hover:shadow-brand-dark/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-brand-rose/20 to-brand-gold/20 relative overflow-hidden">
                  {post.imagem ? (
                    <img 
                      src={post.imagem} 
                      alt={post.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl text-brand-rose/20">{index + 1}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="font-body text-xs tracking-wider text-brand-dark">
                      {post.categoria}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <time className="font-body text-xs text-brand-dark/50 tracking-wider">
                    {formatDate(post.data_publicacao)}
                  </time>
                  
                  <h3 className="font-display text-xl font-medium text-brand-dark mt-3 mb-4 group-hover:text-brand-rose transition-colors duration-300">
                    {post.titulo}
                  </h3>
                  
                  <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                    {post.resumo}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-6 text-brand-rose font-body text-sm group-hover:gap-4 transition-all duration-300">
                    Ler Artigo
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
