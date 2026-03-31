'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection, { AnimatedTitle } from './AnimatedSection'

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
      resumo: 'Descubra os tratamentos mais procurados do ano e como podem transformar sua rotina.',
      categoria: 'Tendências',
      imagem: '',
      data_publicacao: '2026-03-15',
    },
    {
      id: '2',
      titulo: 'Botox x Preenchimento: Qual Escolher?',
      slug: 'botox-vs-preenchimento',
      resumo: 'Entenda as diferenças entre os procedimentos e descubra o ideal para você.',
      categoria: 'Dicas',
      imagem: '',
      data_publicacao: '2026-03-10',
    },
    {
      id: '3',
      titulo: 'Cuidados com a Pele no Verão',
      slug: 'cuidados-pele-verao',
      resumo: 'Protetor solar, hidratação e muito mais. Guia completo para sua pele.',
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
    <AnimatedSection id="blog" className="py-32 md:py-40 bg-[#030711] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#6366F1]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <AnimatedTitle subtitle="Blog">
            Insights &{' '}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
              Dicas
            </span>
          </AnimatedTitle>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/blog" 
              className="group mt-6 md:mt-0 inline-flex items-center gap-2 text-white/60 hover:text-white font-medium transition-colors"
              data-cursor-hover
            >
              Ver todos
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 rounded-3xl p-8 animate-pulse">
                <div className="bg-white/10 h-48 rounded-2xl mb-6" />
                <div className="bg-white/10 h-4 rounded w-1/4 mb-4" />
                <div className="bg-white/10 h-6 rounded w-3/4 mb-4" />
                <div className="bg-white/10 h-4 rounded w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {postsMock.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <motion.div
                    className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden group-hover:border-[#6366F1]/50 transition-all duration-500"
                    whileHover={{ y: -8 }}
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        index === 0 ? 'from-[#6366F1]/30 to-[#A855F7]/30' :
                        index === 1 ? 'from-[#EC4899]/30 to-[#F472B6]/30' :
                        'from-[#22D3EE]/30 to-[#06B6D4]/30'
                      }`}>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[#030711] to-transparent opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-display text-8xl text-white/10 group-hover:scale-110 transition-transform duration-500">
                            {index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <motion.div
                        className="absolute top-4 left-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                      >
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-xs font-semibold text-white border border-white/20">
                          {post.categoria}
                        </span>
                      </motion.div>

                      {/* Hover Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-[#6366F1]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 relative">
                      <time className="text-xs text-white/40 font-medium">
                        {formatDate(post.data_publicacao)}
                      </time>
                      
                      <motion.h3 
                        className="font-display text-xl font-bold text-white mt-3 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                        style={{
                          backgroundImage: `linear-gradient(to right, #6366F1, ${index === 0 ? '#A855F7' : index === 1 ? '#EC4899' : '#22D3EE'})`,
                        }}
                      >
                        {post.titulo}
                      </motion.h3>
                      
                      <p className="text-sm text-white/50 leading-relaxed">
                        {post.resumo}
                      </p>

                      {/* Read More */}
                      <motion.div
                        className="flex items-center gap-2 mt-6 text-white/0 group-hover:text-white transition-all duration-300"
                      >
                        <span className="text-sm font-medium">Ler artigo</span>
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </motion.div>
                    </div>

                    {/* Decorative */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366F1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  )
}
