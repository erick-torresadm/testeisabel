'use client'

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative bg-gradient-to-br from-indigo-100 to-pink-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/50 flex items-center justify-center">
                  <svg className="w-16 h-16 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 px-6 py-4 bg-white rounded-2xl shadow-xl border border-slate-100">
              <div className="font-display text-4xl font-bold text-indigo-600">10+</div>
              <div className="text-sm text-slate-500">Anos de experiência</div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-indigo-600 mb-4">
                Sobre Nós
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Excelência em cada <span className="gradient-text">detalhe</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                A <strong className="text-slate-900">Maison Fandim</strong> nasceu do sonho de criar um espaço onde 
                tecnologia de ponta encontra um atendimento verdadeiramente humanizado.
              </p>
              <p>
                Nossa equipe de profissionais altamente qualificados trabalha com os melhores equipamentos 
                e técnicas mais avançadas do mercado, sempre priorizando resultados naturais.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-slate-50 rounded-2xl">
                <div className="font-display text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-500 mt-1">Clientes</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-2xl">
                <div className="font-display text-3xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-500 mt-1">Tratamentos</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-2xl">
                <div className="font-display text-3xl font-bold text-slate-900">98%</div>
                <div className="text-sm text-slate-500 mt-1">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
