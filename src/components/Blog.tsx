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
      resumo: 'Descubra os tratamentos mais procurados do ano.',
      categoria: 'Tendências',
      imagem: '',
      data_publicacao: '2026-03-15',
    },
    {
      id: '2',
      titulo: 'Botox x Preenchimento: Qual Escolher?',
      slug: 'botox-vs-preenchimento',
      resumo: 'Entenda as diferenças e descubra o ideal para você.',
      categoria: 'Dicas',
      imagem: '',
      data_publicacao: '2026-03-10',
    },
    {
      id: '3',
      titulo: 'Cuidados com a Pele no Verão',
      slug: 'cuidados-pele-verao',
      resumo: 'Guia completo para manter sua pele radiante.',
      categoria: 'Cuidados',
      imagem: '',
      data_publicacao: '2026-03-05',
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
    })
  }

  return (
    <section id="blog" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 mb-4">
              Blog
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900">
              Insights & <span className="gradient-text">Dicas</span>
            </h2>
          </div>
          <Link href="/blog" className="mt-6 md:mt-0 inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors">
            Ver todos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 animate-pulse">
                <div className="bg-slate-200 h-48 rounded-2xl mb-6" />
                <div className="h-4 bg-slate-200 rounded w-1/4 mb-4" />
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-4" />
                <div className="h-4 bg-slate-200 rounded w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {postsMock.map((post, index) => (
              <Link 
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-slate-50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-pink-100 relative overflow-hidden">
                    {post.imagem && (
                      <img 
                        src={post.imagem} 
                        alt={post.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl text-indigo-200">{index + 1}</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700">
                        {post.categoria}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <time className="text-xs text-slate-400 font-medium">
                      {formatDate(post.data_publicacao)}
                    </time>
                    
                    <h3 className="font-display text-lg font-semibold text-slate-900 mt-2 mb-3 group-hover:text-indigo-600 transition-colors">
                      {post.titulo}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {post.resumo}
                    </p>
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
