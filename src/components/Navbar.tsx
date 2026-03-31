'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <span className="font-display text-3xl font-light tracking-wider text-brand-dark group-hover:text-brand-rose transition-colors duration-300">
              Maison <span className="font-semibold">Fandim</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold group-hover:w-full transition-all duration-500" />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {['Início', 'Sobre', 'Serviços', 'Blog', 'Contato'].map((item, i) => (
            <Link
              key={item}
              href={item === 'Início' ? '/' : `#${item.toLowerCase()}`}
              className="relative font-body text-sm tracking-wide text-brand-dark/70 hover:text-brand-rose transition-colors duration-300 group"
            >
              {item}
              <span className={`absolute -bottom-1 left-0 h-px bg-brand-rose transition-all duration-300 ${
                i === 0 ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        <Link
          href="#contato"
          className="hidden md:flex items-center gap-2 px-6 py-3 bg-brand-rose text-white text-sm tracking-wider rounded-full hover:bg-brand-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand-rose/30"
        >
          Agendar
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-brand-dark"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-brand-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-500 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="px-6 py-8 flex flex-col gap-6">
          {['Início', 'Sobre', 'Serviços', 'Blog', 'Contato'].map((item) => (
            <Link
              key={item}
              href={item === 'Início' ? '/' : `#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl text-brand-dark hover:text-brand-rose transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
