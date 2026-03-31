'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Post {
  id: string
  titulo: string
  slug: string
  resumo: string
  categoria: string
  imagem_capa: string
  data_publicacao: string
  autor: string
}

const categorias = ['Todos', 'Tendências', 'Dicas', 'Cuidados', 'Tratamentos']

export default function BlogContent() {
  const [posts, setPosts] = useState<Post[]>([])
  const [categoria, setCategoria] = useState('Todos')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/posts?limit=50')
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

  const postsMock: Post[] = [
    {
      id: '1',
      titulo: '5 Tendências em Estética para 2026',
      slug: 'tendencias-estetica-2026',
      resumo: 'Descubra os tratamentos mais procurados do ano e como podem transformar sua rotina de cuidados com a pele.',
      categoria: 'Tendências',
      imagem_capa: '',
      data_publicacao: '2026-03-15',
      autor: 'Dra. Ana Fandim',
    },
    {
      id: '2',
      titulo: 'Botox x Preenchimento: Qual Escolher?',
      slug: 'botox-vs-preenchimento',
      resumo: 'Entenda as diferenças entre os procedimentos e descubra qual é o mais indicado para o seu caso.',
      categoria: 'Dicas',
      imagem_capa: '',
      data_publicacao: '2026-03-10',
      autor: 'Dra. Ana Fandim',
    },
    {
      id: '3',
      titulo: 'Cuidados com a Pele no Verão',
      slug: 'cuidados-pele-verao',
      resumo: 'Protetor solar, hidratação e muito mais. Confira o guia completo para manter sua pele radiante.',
      categoria: 'Cuidados',
      imagem_capa: '',
      data_publicacao: '2026-03-05',
      autor: 'Dra. Ana Fandim',
    },
    {
      id: '4',
      titulo: 'Tudo sobre Bioestimuladores de Colágeno',
      slug: 'bioestimuladores-colageno',
      resumo: 'Como funcionam, resultados esperados e para quem é indicado este tratamento revolucionário.',
      categoria: 'Tratamentos',
      imagem_capa: '',
      data_publicacao: '2026-02-28',
      autor: 'Dra. Ana Fandim',
    },
    {
      id: '5',
      titulo: 'Harmonização Orofacial: Mitos e Verdades',
      slug: 'harmonizacao-mitos-verdades',
      resumo: 'Separamos os principais mitos e verdades sobre este procedimento que ganha cada vez mais adeptos.',
      categoria: 'Tendências',
      imagem_capa: '',
      data_publicacao: '2026-02-20',
      autor: 'Dra. Ana Fandim',
    },
    {
      id: '6',
      titulo: 'Rotina de Skincare: 7 Passos Essenciais',
      slug: 'rotina-skincare-7-passos',
      resumo: 'Aprenda a montar uma rotina completa de cuidados com a pele para cada tipo de pele.',
      categoria: 'Cuidados',
      imagem_capa: '',
      data_publicacao: '2026-02-15',
      autor: 'Dra. Ana Fandim',
    },
  ]

  const allPosts = posts.length > 0 ? posts : postsMock

  const filteredPosts = categoria === 'Todos' 
    ? allPosts 
    : allPosts.filter(p => p.categoria === categoria)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  const featuredPost = filteredPosts[0]
  const remainingPosts = filteredPosts.slice(1)

  return (
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-brand-rose mb-4">
            Blog & Conteúdo
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-brand-dark">
            Insights & <span className="italic text-brand-rose">Dicas</span>
          </h1>
          <p className="font-body text-brand-dark/60 max-w-2xl mx-auto mt-6">
            Conteúdo exclusivo sobre estética, beleza e bem-estar para você se manter 
            informada sobre as melhores práticas e tendências.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              className={`px-6 py-2 rounded-full font-body text-sm tracking-wider transition-all duration-300 ${
                categoria === cat
                  ? 'bg-brand-rose text-white'
                  : 'bg-white text-brand-dark hover:bg-brand-rose/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                <div className="bg-brand-light h-48" />
                <div className="p-6">
                  <div className="h-4 bg-brand-light rounded w-1/4 mb-4" />
                  <div className="h-6 bg-brand-light rounded w-3/4 mb-4" />
                  <div className="h-4 bg-brand-light rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {featuredPost && (
              <Link 
                href={`/blog/${featuredPost.slug}`}
                className="block mb-16 group"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-brand-rose/20 to-brand-gold/20">
                    {featuredPost.imagem_capa && (
                      <img 
                        src={featuredPost.imagem_capa}
                        alt={featuredPost.titulo}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-4 py-1 bg-brand-rose/10 rounded-full">
                        <span className="font-body text-xs tracking-wider text-brand-rose">
                          {featuredPost.categoria}
                        </span>
                      </span>
                      <time className="font-body text-sm text-brand-dark/50">
                        {formatDate(featuredPost.data_publicacao)}
                      </time>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-brand-dark mb-4 group-hover:text-brand-rose transition-colors">
                      {featuredPost.titulo}
                    </h2>
                    <p className="font-body text-brand-dark/60 leading-relaxed mb-6">
                      {featuredPost.resumo}
                    </p>
                    <div className="flex items-center gap-3 text-brand-rose font-body text-sm">
                      Ler Artigo Completo
                      <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {remainingPosts.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((post) => (
                  <Link 
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="aspect-[16/10] bg-gradient-to-br from-brand-rose/10 to-brand-gold/10 relative">
                      {post.imagem_capa && (
                        <img 
                          src={post.imagem_capa}
                          alt={post.titulo}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                        <span className="font-body text-xs tracking-wider text-brand-dark">
                          {post.categoria}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <time className="font-body text-xs text-brand-dark/50">
                        {formatDate(post.data_publicacao)}
                      </time>
                      <h3 className="font-display text-xl font-medium text-brand-dark mt-2 mb-3 group-hover:text-brand-rose transition-colors">
                        {post.titulo}
                      </h3>
                      <p className="font-body text-sm text-brand-dark/60 leading-relaxed">
                        {post.resumo}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-brand-rose font-body text-sm">
                        Ler mais
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-display text-2xl text-brand-dark/50">
                  Nenhum artigo encontrado nesta categoria.
                </p>
              </div>
            )}
          </>
        )}

        <div className="mt-20 p-12 bg-brand-dark rounded-3xl text-center">
          <h3 className="font-display text-3xl text-white mb-4">
            Quer receber conteúdo exclusivo?
          </h3>
          <p className="font-body text-white/60 mb-8 max-w-md mx-auto">
            Assine nossa newsletter e receba dicas de beleza e novidades diretamente no seu e-mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-brand-rose"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-brand-rose text-white font-body text-sm tracking-wider rounded-full hover:bg-brand-gold transition-all"
            >
              Inscrever
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
