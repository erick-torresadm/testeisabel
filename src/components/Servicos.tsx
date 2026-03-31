'use client'

import { useState } from 'react'

const servicos = [
  {
    id: 1,
    categoria: 'Facial',
    titulo: 'Bioestimuladores',
    descricao: 'Tratamento avançado que estimula a produção natural de colágeno.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    destaque: true,
  },
  {
    id: 2,
    categoria: 'Facial',
    titulo: 'Preenchimento Labial',
    descricao: 'Harmonização com técnicas modernas para volume sutil.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    destaque: false,
  },
  {
    id: 3,
    categoria: 'Facial',
    titulo: 'Toxina Botulínica',
    descricao: 'Suaviza rugas mantendo a naturalidade do rosto.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    destaque: false,
  },
  {
    id: 4,
    categoria: 'Corporal',
    titulo: 'Criolipólise',
    descricao: 'Eliminação de gordura localizada sem cirurgia.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    destaque: true,
  },
  {
    id: 5,
    categoria: 'Corporal',
    titulo: 'Radiofrequência',
    descricao: 'Melhora celulite, flacidez e textura da pele.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    destaque: false,
  },
  {
    id: 6,
    categoria: 'Skin',
    titulo: 'HydraFacial',
    descricao: 'Limpeza profunda e hidratação intensiva.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    destaque: false,
  },
]

export default function Servicos() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="servicos" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 mb-4">
            Tratamentos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tratamentos personalizados com tecnologia de última geração para realçar sua beleza natural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredId(servico.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`relative p-8 rounded-3xl transition-all duration-300 ${
                hoveredId === servico.id 
                  ? 'bg-slate-900 text-white shadow-2xl -translate-y-1' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}>
                {servico.destaque && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-xs font-semibold rounded-full">Popular</span>
                  </div>
                )}
                
                <div className={`mb-6 transition-colors duration-300 ${
                  hoveredId === servico.id ? 'text-indigo-400' : 'text-indigo-600'
                }`}>
                  {servico.icon}
                </div>

                <p className={`text-xs font-semibold tracking-wider uppercase mb-2 transition-colors duration-300 ${
                  hoveredId === servico.id ? 'text-indigo-400' : 'text-slate-500'
                }`}>
                  {servico.categoria}
                </p>

                <h3 className="font-display text-xl font-semibold mb-3 transition-colors duration-300">
                  {servico.titulo}
                </h3>

                <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                  hoveredId === servico.id ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {servico.descricao}
                </p>

                <div className={`flex items-center gap-2 mt-6 text-sm font-medium transition-all duration-300 ${
                  hoveredId === servico.id ? 'text-indigo-400 translate-x-2' : 'text-slate-400 opacity-0'
                }`}>
                  Saiba mais
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contato" className="btn-primary rounded-xl inline-flex items-center gap-2">
            Agendar Avaliação Gratuita
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
