'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import AnimatedSection, { AnimatedTitle } from './AnimatedSection'

const servicos = [
  {
    id: 1,
    categoria: 'Facial',
    titulo: 'Bioestimuladores',
    descricao: 'Tratamento avançado que estimula a produção natural de colágeno para resultados duradouros.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gradient: 'from-[#6366F1] to-[#8B5CF6]',
    delay: 0,
  },
  {
    id: 2,
    categoria: 'Facial',
    titulo: 'Preenchimento Labial',
    descricao: 'Harmonização com técnicas modernas para contorno perfeito e volume natural.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-[#EC4899] to-[#F472B6]',
    delay: 0.1,
  },
  {
    id: 3,
    categoria: 'Facial',
    titulo: 'Toxina Botulínica',
    descricao: 'Suaviza rugas e linhas de expressão mantendo a naturalidade do rosto.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: 'from-[#22D3EE] to-[#06B6D4]',
    delay: 0.2,
  },
  {
    id: 4,
    categoria: 'Corporal',
    titulo: 'Criolipólise',
    descricao: 'Eliminação de gordura localizada através do resfriamento controlado.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    gradient: 'from-[#A855F7] to-[#C084FC]',
    delay: 0.3,
  },
  {
    id: 5,
    categoria: 'Corporal',
    titulo: 'Radiofrequência',
    descricao: 'Combate celulite, flacidez e melhora a textura da pele.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: 'from-[#F59E0B] to-[#FBBF24]',
    delay: 0.4,
  },
  {
    id: 6,
    categoria: 'Skin',
    titulo: 'HydraFacial',
    descricao: 'Limpeza profunda, hidratação intensiva e proteção antioxidante.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    gradient: 'from-[#10B981] to-[#34D399]',
    delay: 0.5,
  },
]

export default function Servicos() {
  return (
    <AnimatedSection id="servicos" className="py-32 md:py-40 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6366F1]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedTitle subtitle="Tratamentos">
          Nossos{' '}
          <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
            Serviços
          </span>
        </AnimatedTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico, index) => (
            <motion.div
              key={servico.id}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: servico.delay }}
              whileHover={{ y: -8 }}
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${servico.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden group-hover:border-white/20 transition-all duration-500">
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${servico.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${servico.gradient} flex items-center justify-center text-white mb-6`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {servico.icon}
                  </motion.div>

                  {/* Category */}
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-2">
                    {servico.categoria}
                  </p>

                  {/* Title */}
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                    {servico.titulo}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    {servico.descricao}
                  </p>

                  {/* CTA */}
                  <motion.div
                    className="flex items-center gap-2 text-white/0 group-hover:text-white transition-all duration-300"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: servico.delay + 0.3 }}
                  >
                    <span className="text-sm font-medium">Saiba mais</span>
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

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${servico.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#contato"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white font-semibold rounded-full overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            data-cursor-hover
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#22D3EE]"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Agendar Avaliação Gratuita
              <motion.svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
