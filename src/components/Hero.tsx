'use client'

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame: number
    let time = 0
    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = []
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.002

      particles.forEach((p, i) => {
        p.x += p.speedX
        p.y += p.speedY
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3)
        gradient.addColorStop(0, `rgba(183, 110, 121, ${p.opacity})`)
        gradient.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const pulseSize = 300 + Math.sin(time) * 50

      const pulseGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize)
      pulseGradient.addColorStop(0, 'rgba(183, 110, 121, 0.08)')
      pulseGradient.addColorStop(0.5, 'rgba(212, 175, 55, 0.03)')
      pulseGradient.addColorStop(1, 'transparent')

      ctx.beginPath()
      ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2)
      ctx.fillStyle = pulseGradient
      ctx.fill()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-brand-dark">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/90" />
      
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="absolute inset-0 bg-gradient-to-l from-brand-rose/30 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-rose/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-brand-gold/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-rose/10 border border-brand-rose/20">
              <span className="w-2 h-2 rounded-full bg-brand-rose animate-pulse" />
              <span className="font-body text-sm tracking-wider text-brand-rose">
                Avaliação Gratuita
              </span>
            </div>
            
            <div className="space-y-2">
              <p className="font-body text-sm tracking-[0.4em] uppercase text-brand-gold/80">
                Clínica de Estética Premium
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9]">
                <span className="text-white">Maison</span>
                <br />
                <span className="bg-gradient-to-r from-brand-rose via-brand-gold to-brand-rose bg-clip-text text-transparent">
                  Fandim
                </span>
              </h1>
            </div>
            
            <p className="font-body text-lg text-white/60 max-w-lg leading-relaxed">
              Experiência única em estética e bem-estar. 
              Tratamentos personalizados que transformam, realçam e celebram a sua essência única.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#servicos"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-rose text-white font-body text-sm tracking-wider rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-brand-rose/40 hover:scale-105"
              >
                <span>Descobrir Tratamentos</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="#contato"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-body text-sm tracking-wider rounded-full hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Agendar Consulta
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="font-display text-4xl font-light text-brand-gold">10+</div>
                <div className="font-body text-xs text-white/40 uppercase tracking-wider mt-1">Anos</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="font-display text-4xl font-light text-brand-gold">500+</div>
                <div className="font-body text-xs text-white/40 uppercase tracking-wider mt-1">Clientes</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="font-display text-4xl font-light text-brand-gold">15+</div>
                <div className="font-body text-xs text-white/40 uppercase tracking-wider mt-1">Tratamentos</div>
              </div>
            </div>
          </div>

          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-rose/30 to-brand-gold/30 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-brand-rose/20 rounded-3xl transform -rotate-3" />
              <div className="relative bg-gradient-to-br from-brand-rose/40 via-brand-dark to-brand-gold/40 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="font-display text-2xl text-white/60 italic">Beleza & Elegância</p>
                  </div>
                </div>
                
                <div className="absolute top-6 right-6 px-4 py-2 bg-brand-gold/90 rounded-full backdrop-blur-sm">
                  <span className="font-body text-xs text-brand-dark font-medium tracking-wider">NEW</span>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-md rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-rose to-brand-gold border-2 border-brand-dark" />
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-body text-xs text-white/60 mt-1">+200 clientes satisfeitos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-brand-rose rounded-full animate-bounce" />
          </div>
        </div>
        <span className="font-body text-xs tracking-widest text-white/30 uppercase">Scroll</span>
      </div>

      <div className="absolute top-1/4 left-8 w-1 h-32 bg-gradient-to-b from-transparent via-brand-rose/30 to-transparent" />
      <div className="absolute bottom-1/3 right-12 w-1 h-24 bg-gradient-to-b from-transparent via-brand-gold/30 to-transparent" />
    </section>
  )
}
