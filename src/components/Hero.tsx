'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrame: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.005

      for (let i = 0; i < 3; i++) {
        const x = canvas.width / 2 + Math.cos(time + i) * (100 + i * 50)
        const y = canvas.height / 2 + Math.sin(time * 0.8 + i) * (80 + i * 40)
        const radius = 200 + Math.sin(time) * 30

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        gradient.addColorStop(0, `rgba(183, 110, 121, ${0.03 - i * 0.005})`)
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${0.02 - i * 0.005})`)
        gradient.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-cream">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-brand-cream via-transparent to-brand-cream/80" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="overflow-hidden mb-6">
          <p 
            className="font-body text-sm tracking-[0.3em] uppercase text-brand-rose opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Clínica de Estética Premium
          </p>
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-brand-dark mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          Maison <span className="font-semibold italic gradient-text">Fandim</span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          Onde a ciência encontra a arte da beleza. 
          Tratamentos exclusivos que transformam, realçam e celebram a sua essência única.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#servicos"
            className="group relative px-10 py-4 bg-brand-dark text-white font-body text-sm tracking-wider overflow-hidden rounded-full transition-all duration-300 hover:bg-brand-rose hover:shadow-xl hover:shadow-brand-rose/30"
          >
            <span className="relative z-10">Descobrir Tratamentos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-rose to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a 
            href="#contato"
            className="group flex items-center gap-3 px-10 py-4 border border-brand-dark/20 text-brand-dark font-body text-sm tracking-wider rounded-full hover:border-brand-rose hover:text-brand-rose transition-all duration-300"
          >
            Agendar Consulta
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '1.2s' }}>
        <span className="font-body text-xs tracking-widest text-brand-dark/50 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-rose to-transparent" />
      </div>

      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-brand-rose/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-brand-gold/5 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
    </section>
  )
}
