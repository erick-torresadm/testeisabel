'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#030711]/80 backdrop-blur-xl border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#A855F7] flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-500">
                <span className="text-white font-display font-bold text-xl">M</span>
              </div>
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#A855F7] blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                animate={{ scale: [1, 1.2, 1], opacity: [0, 0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="font-display text-xl font-semibold text-white">
              Maison <span className="gradient-text">Fandim</span>
            </span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className="relative px-5 py-2.5 font-medium text-sm text-white/70 hover:text-white transition-colors duration-300 group overflow-hidden"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
                data-cursor-hover
              >
                <motion.span
                  className="relative z-10"
                  animate={{ y: hoveredItem === item.name ? -2 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.span>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/20 to-[#A855F7]/20 rounded-lg"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: hoveredItem === item.name ? 1 : 0, 
                    opacity: hoveredItem === item.name ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#A855F7]"
                  initial={{ width: 0, x: '-50%' }}
                  animate={{ width: hoveredItem === item.name ? '80%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#contato" 
            className="hidden md:flex relative px-6 py-3 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white text-sm font-semibold rounded-full overflow-hidden group"
            data-cursor-hover
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#22D3EE]"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Agendar
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
            </span>
          </a>
        </motion.div>

        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-white relative w-10 h-10"
          whileTap={{ scale: 0.9 }}
          data-cursor-hover
        >
          <motion.span
            className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-white rounded-full origin-center"
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 0 : -4,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-white rounded-full origin-center"
            animate={{
              opacity: menuOpen ? 0 : 1,
              x: menuOpen ? 10 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute left-1/2 top-1/2 w-6 h-0.5 bg-white rounded-full origin-center"
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? 0 : 4,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#030711]/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-display text-2xl text-white/70 hover:text-white py-2"
                    data-cursor-hover
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="#contato"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-center py-4 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white font-semibold rounded-full"
                data-cursor-hover
              >
                Agendar
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
