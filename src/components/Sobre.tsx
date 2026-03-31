'use client'

import { motion } from 'framer-motion'
import AnimatedSection, { AnimatedTitle, AnimatedCard } from './AnimatedSection'

const stats = [
  { value: '500+', label: 'Clientes', icon: '👥' },
  { value: '15+', label: 'Tratamentos', icon: '✨' },
  { value: '98%', label: 'Satisfação', icon: '💎' },
]

export default function Sobre() {
  return (
    <AnimatedSection id="sobre" className="py-32 md:py-40 bg-[#030711] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#A855F7]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              {/* Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-[2rem] blur-xl opacity-30"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6366F1]/30 to-transparent rounded-full blur-2xl" />
                
                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A855F7] flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </motion.div>

                  {/* Text */}
                  <div className="text-center">
                    <motion.div
                      className="font-display text-7xl font-bold bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', delay: 0.3 }}
                    >
                      10+
                    </motion.div>
                    <p className="text-white/60 text-lg">Anos de excelência</p>
                  </div>

                  {/* Floating Elements */}
                  {['⭐', '💫', '✨'].map((emoji, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl"
                      style={{
                        top: `${20 + i * 25}%`,
                        left: i % 2 === 0 ? '10%' : '85%',
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      {emoji}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Stats Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 px-6 py-4 bg-[#0a0f1e] border border-white/10 rounded-2xl backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Certificado</p>
                    <p className="text-white/50 text-sm">Anvisa Aprovado</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-8">
            <AnimatedTitle subtitle="Sobre Nós">
              Excelência em cada{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
                detalhe
              </span>
            </AnimatedTitle>

            <motion.div
              className="space-y-6 text-lg text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p>
                A <strong className="text-white">Maison Fandim</strong> nasceu do sonho de criar um espaço onde 
                tecnologia de ponta encontra um atendimento verdadeiramente humanizado.
              </p>
              <p>
                Nossa equipe de profissionais altamente qualificados trabalha com os melhores equipamentos 
                e técnicas mais avançadas do mercado, sempre priorizando resultados naturais.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="relative p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center group overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="font-display text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
