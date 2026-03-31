'use client'

import { useState } from 'react'

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
        setError('Erro ao enviar mensagem. Tente novamente.')
      }
    } catch {
      setError('Erro ao enviar mensagem. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="relative py-32 bg-brand-dark overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-rose/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="text-white">
            <p className="font-body text-sm tracking-[0.3em] uppercase text-brand-rose mb-4">
              Entre em Contato
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8">
              Agende sua <br />
              <span className="italic text-brand-gold">Avaliação</span>
            </h2>
            <p className="font-body text-white/60 leading-relaxed mb-12 max-w-md">
              Estamos prontas para cuidar de você. Entre em contato e agende 
              uma avaliação personalizada sem compromisso.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-rose/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg text-white mb-1">Localização</h4>
                  <p className="font-body text-white/60 text-sm">Brasília, DF - Asa Sul</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-rose/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg text-white mb-1">Telefone</h4>
                  <p className="font-body text-white/60 text-sm">(61) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-rose/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg text-white mb-1">Horário</h4>
                  <p className="font-body text-white/60 text-sm">Seg - Sáb: 9h às 19h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-rose/20 to-brand-gold/20 rounded-3xl blur-xl opacity-50" />
            
            <form onSubmit={handleSubmit} className="relative bg-brand-dark/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-brand-rose focus:bg-white/10 transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm text-white/60 mb-2">Telefone</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-brand-rose focus:bg-white/10 transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-sm text-white/60 mb-2">E-mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-brand-rose focus:bg-white/10 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block font-body text-sm text-white/60 mb-2">Serviço de Interesse</label>
                <select
                  value={formData.servico}
                  onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/70 focus:outline-none focus:border-brand-rose focus:bg-white/10 transition-all"
                >
                  <option value="" className="bg-brand-dark">Selecione um serviço</option>
                  <option value="botox" className="bg-brand-dark">Toxina Botulínica</option>
                  <option value="preenchimento" className="bg-brand-dark">Preenchimento</option>
                  <option value="bioestimulador" className="bg-brand-dark">Bioestimulador</option>
                  <option value="hydrafacial" className="bg-brand-dark">HydraFacial</option>
                  <option value="corporal" className="bg-brand-dark">Tratamento Corporal</option>
                  <option value="outro" className="bg-brand-dark">Outro</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-sm text-white/60 mb-2">Mensagem (opcional)</label>
                <textarea
                  rows={4}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-brand-rose focus:bg-white/10 transition-all resize-none"
                  placeholder="Conte-nos mais sobre suas necessidades..."
                />
              </div>

              {error && (
                <p className="text-red-400 font-body text-sm">{error}</p>
              )}

              {success && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 font-body text-sm">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-brand-rose to-brand-gold text-white font-body text-sm tracking-wider rounded-xl hover:shadow-xl hover:shadow-brand-rose/30 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Enviando...' : 'Agendar Avaliação Gratuita'}
              </button>

              <p className="text-center font-body text-xs text-white/40">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
