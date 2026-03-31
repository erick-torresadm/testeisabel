'use client'

export default function Sobre() {
  return (
    <section id="sobre" className="relative py-32 bg-brand-dark overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-rose blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-gold blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/20 to-brand-gold/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/20">
                  <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                  <span className="font-display text-2xl">Imagem da Clínica</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-rose/10 rounded-2xl backdrop-blur-sm p-6 text-white">
              <div className="font-display text-5xl font-light text-brand-gold">10+</div>
              <div className="font-body text-sm tracking-wider mt-2 opacity-80">Anos de Experiência</div>
            </div>
          </div>

          <div className="text-white">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-brand-rose mb-4">
              Nossa História
            </p>
            
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8">
              Elegância que <br />
              <span className="italic text-brand-gold">Transforma</span>
            </h2>
            
            <div className="space-y-6 text-white/70 font-body leading-relaxed">
              <p>
                A <strong className="text-white">Maison Fandim</strong> nasceu do sonho de criar um espaço onde 
                tecnologia de ponta encontra um atendimento verdadeiramente humanizado. Cada tratamento é 
                pensado como uma experiência única.
              </p>
              
              <p>
                Nossa equipe de profissionais altamente qualificados trabalha com os melhores equipamentos 
                e técnicas mais avançadas do mercado, sempre priorizando resultados naturais e a satisfação 
                de cada cliente.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div>
                <div className="font-display text-4xl font-light text-brand-rose">500+</div>
                <div className="font-body text-sm text-white/60 mt-2">Clientes Satisfeitos</div>
              </div>
              <div>
                <div className="font-display text-4xl font-light text-brand-rose">15+</div>
                <div className="font-body text-sm text-white/60 mt-2">Tratamentos Exclusivos</div>
              </div>
              <div>
                <div className="font-display text-4xl font-light text-brand-rose">98%</div>
                <div className="font-body text-sm text-white/60 mt-2">Taxa de Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
