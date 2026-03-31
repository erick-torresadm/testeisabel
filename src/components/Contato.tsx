'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection, { AnimatedTitle } from './AnimatedSection'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSuccess(true)
        setFormData({ nome: '', email: '', telefone: '', servico: '', mensagem: '' })
      } else {
        setError('Erro ao enviar. Tente novamente.')
      }
    } catch {
      setError('Erro ao enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Localização',
      value: 'Brasília, DF - Asa Sul',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Telefone',
      value: '(61) 99999-9999',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Horário',
      value: 'Seg - Sáb: 9h às 19h',
    },
  ]

  return (
    <AnimatedSection id="contato" className="py-32 md:py-40 bg-[#0a0f1e] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#6366F1]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A855F7]/10 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366F1]/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - Info */}
          <div className="space-y-12">
            <AnimatedTitle subtitle="Contato">
              Agende sua{' '}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#A855F7] bg-clip-text text-transparent">
                Avaliação
              </span>
            </AnimatedTitle>

            <motion.p
              className="text-lg text-white/60 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Estamos prontas para cuidar de você. Entre em contato e agende 
              uma avaliação personalizada sem compromisso.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="group flex items-center gap-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#A855F7] flex items-center justify-center text-white flex-shrink-0 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-shadow duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-white/50">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {['instagram', 'facebook', 'whatsapp'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#6366F1] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-hover
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'instagram' && (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                    )}
                    {social === 'facebook' && (
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    )}
                    {social === 'whatsapp' && (
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    )}
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Glow */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-[#6366F1] to-[#A855F7] rounded-[2rem] blur-xl opacity-30"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Form Card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm text-white/50 mb-2">Nome</label>
                    <motion.input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      onFocus={() => setFocusedField('nome')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none transition-all duration-300"
                      placeholder="Seu nome"
                      animate={{
                        borderColor: focusedField === 'nome' ? 'rgba(99, 102, 241, 1)' : 'rgba(255,255,255,0.1)',
                        boxShadow: focusedField === 'nome' ? '0 0 20px rgba(99, 102, 241, 0.3)' : 'none',
                      }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block text-sm text-white/50 mb-2">Telefone</label>
                    <motion.input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      onFocus={() => setFocusedField('telefone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none transition-all duration-300"
                      placeholder="(00) 00000-0000"
                      animate={{
                        borderColor: focusedField === 'telefone' ? 'rgba(99, 102, 241, 1)' : 'rgba(255,255,255,0.1)',
                        boxShadow: focusedField === 'telefone' ? '0 0 20px rgba(99, 102, 241, 0.3)' : 'none',
                      }}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-sm text-white/50 mb-2">E-mail</label>
                  <motion.input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none transition-all duration-300"
                    placeholder="seu@email.com"
                    animate={{
                      borderColor: focusedField === 'email' ? 'rgba(99, 102, 241, 1)' : 'rgba(255,255,255,0.1)',
                      boxShadow: focusedField === 'email' ? '0 0 20px rgba(99, 102, 241, 0.3)' : 'none',
                    }}
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-sm text-white/50 mb-2">Serviço</label>
                  <motion.select
                    value={formData.servico}
                    onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white/70 focus:outline-none transition-all duration-300 cursor-pointer appearance-none"
                    whileFocus={{ borderColor: 'rgba(99, 102, 241, 1)' }}
                  >
                    <option value="" className="bg-[#0a0f1e]">Selecione</option>
                    <option value="botox" className="bg-[#0a0f1e]">Toxina Botulínica</option>
                    <option value="preenchimento" className="bg-[#0a0f1e]">Preenchimento</option>
                    <option value="bioestimulador" className="bg-[#0a0f1e]">Bioestimulador</option>
                    <option value="hydrafacial" className="bg-[#0a0f1e]">HydraFacial</option>
                    <option value="corporal" className="bg-[#0a0f1e]">Tratamento Corporal</option>
                  </motion.select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm text-white/50 mb-2">Mensagem</label>
                  <motion.textarea
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    onFocus={() => setFocusedField('mensagem')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Conte-nos mais..."
                    animate={{
                      borderColor: focusedField === 'mensagem' ? 'rgba(99, 102, 241, 1)' : 'rgba(255,255,255,0.1)',
                      boxShadow: focusedField === 'mensagem' ? '0 0 20px rgba(99, 102, 241, 0.3)' : 'none',
                    }}
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm"
                  >
                    {error}
                  </motion.p>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-sm"
                  >
                    Mensagem enviada! Entraremos em contato em breve.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="relative w-full py-5 bg-gradient-to-r from-[#6366F1] to-[#A855F7] text-white font-semibold rounded-xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-cursor-hover
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#22D3EE]"
                    initial={{ x: '100%' }}
                    animate={loading ? { x: 0 } : { x: '100%' }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10">
                    {loading ? 'Enviando...' : 'Agendar Avaliação Gratuita'}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
