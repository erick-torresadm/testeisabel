'use client'

import { useState } from 'react'

const servicos = [
  {
    id: 1,
    categoria: 'Facial',
    titulo: 'Bioestimuladores de Colágeno',
    descricao: 'Tratamento avançado que estimula a produção natural de colágeno, restaurando volume e firmeza com resultados progressivos e duradouros.',
    icon: '✧',
    destaque: true,
  },
  {
    id: 2,
    categoria: 'Facial',
    titulo: 'Preenchimento Labial',
    descricao: 'Harmonização labial com técnicas modernas para um contorno definido, volume sutil e hidratação profunda.',
    icon: '◇',
    destaque: false,
  },
  {
    id: 3,
    categoria: 'Facial',
    titulo: 'Toxina Botulínica',
    descricao: 'Aplicação precisa para suavizar rugas e linhas de expressão, mantendo a naturalidade e expressividade do rosto.',
    icon: '○',
    destaque: false,
  },
  {
    id: 4,
    categoria: 'Corporal',
    titulo: 'Criolipólise',
    descricao: 'Eliminação de gordura localizada através do resfriamento controlado, sem cirurgia e com resultados visíveis em semanas.',
    icon: '❋',
    destaque: true,
  },
  {
    id: 5,
    categoria: 'Corporal',
    titulo: 'Radiofrequência',
    descricao: 'Tratamento que combina aquecimento profundo e sucção para melhorar celulite, flacidez e textura da pele.',
    icon: '◈',
    destaque: false,
  },
  {
    id: 6,
    categoria: 'Skin',
    titulo: 'HydraFacial',
    descricao: 'Limpeza profunda, hidratação intensiva e proteção antioxidante em um único tratamento revolucionário.',
    icon: '✦',
    destaque: false,
  },
]

export default function Servicos() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="servicos" className="relative py-32 bg-brand-cream overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-rose/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-brand-rose mb-4">
            Tratamentos
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-brand-dark">
            Nossos <span className="italic text-brand-rose">Serviços</span>
          </h2>
          <p className="font-body text-brand-dark/60 max-w-2xl mx-auto mt-6">
            Cada tratamento é personalizado para atender às suas necessidades específicas, 
            utilizando produtos de alta qualidade e tecnologia de última geração.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className={`relative group cursor-pointer ${
                servico.destaque ? 'lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredId(servico.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`relative p-8 rounded-2xl transition-all duration-500 ${
                hoveredId === servico.id 
                  ? 'bg-brand-dark text-white shadow-2xl shadow-brand-dark/20 -translate-y-2' 
                  : 'bg-white shadow-lg shadow-brand-dark/5'
              }`}>
                <div className={`text-4xl mb-6 transition-colors duration-300 ${
                  hoveredId === servico.id ? 'text-brand-gold' : 'text-brand-rose'
                }`}>
                  {servico.icon}
                </div>
                
                <p className={`font-body text-xs tracking-[0.2em] uppercase mb-3 transition-colors duration-300 ${
                  hoveredId === servico.id ? 'text-brand-rose' : 'text-brand-dark/50'
                }`}>
                  {servico.categoria}
                </p>
                
                <h3 className="font-display text-2xl font-medium mb-4 transition-colors duration-300">
                  {servico.titulo}
                </h3>
                
                <p className={`font-body text-sm leading-relaxed transition-colors duration-300 ${
                  hoveredId === servico.id ? 'text-white/70' : 'text-brand-dark/60'
                }`}>
                  {servico.descricao}
                </p>
                
                <div className={`absolute bottom-8 right-8 transition-all duration-300 ${
                  hoveredId === servico.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <div className="flex items-center gap-2 text-brand-gold">
                    <span className="font-body text-sm">Saiba mais</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {servico.destaque && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-brand-gold/10 rounded-full">
                    <span className="font-body text-xs tracking-wider text-brand-gold">Destaque</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contato"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-rose text-white font-body text-sm tracking-wider rounded-full hover:bg-brand-dark transition-all duration-300 hover:shadow-xl"
          >
            Agendar Avaliação Gratuita
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
