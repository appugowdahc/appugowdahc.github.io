import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { personal } from '../../data'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [state, setState] = useState<FormState>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('https://formspree.io/f/xjgdgzdr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: '#6366f1',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: '#8b5cf6',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: personal.location,
      href: undefined,
      color: '#06b6d4',
    },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: personal.github, color: '#f1f5f9' },
    { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: personal.linkedin, color: '#0ea5e9' },
  ]

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-surface-800/40 to-transparent pointer-events-none" />

      <div className="container-max">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build"
          highlight=" Together"
          subtitle="Open to SDE-2, Senior Engineer, and tech lead roles. Let's talk."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Info */}
          <AnimatedSection direction="left">
            <div className="space-y-6">
              {/* Availability */}
              <GlassCard className="p-6" glow glowColor="rgba(16,185,129,0.2)">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400 absolute inset-0 animate-ping opacity-75" />
                  </div>
                  <span className="text-emerald-400 font-semibold text-sm">Currently Available</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Open to New Opportunities</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Looking for SDE-2 or Senior Software Engineer roles in product companies, scale-ups, or enterprises building AI-powered infrastructure. Remote-friendly and open to relocation.
                </p>
              </GlassCard>

              {/* Contact details */}
              <div className="space-y-3">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-4 p-4 rounded-2xl glass hover:border-indigo-500/25 transition-all ${item.href ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${item.color}20`, color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                        <div className="text-sm font-semibold text-white">{item.value}</div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Find me on</div>
                <div className="flex gap-3">
                  {socialLinks.map(link => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2.5 px-5 py-3 rounded-xl glass-bright text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      {link.icon}
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right" delay={0.1}>
            <GlassCard className="p-6 sm:p-8" glow>
              <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

              {state === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-slate-400 text-sm mb-6">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setState('idle')}
                    className="px-5 py-2.5 rounded-xl glass-bright text-sm font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500/50 focus:bg-white/[0.06] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500/50 focus:bg-white/[0.06] outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      placeholder="SDE-2 Opportunity at Acme Corp"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500/50 focus:bg-white/[0.06] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Hi Appu, we're building..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 bg-white/[0.04] border border-white/[0.08] focus:border-indigo-500/50 focus:bg-white/[0.06] outline-none transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={state === 'submitting'}
                    whileHover={{ scale: state === 'submitting' ? 1 : 1.02, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-brand disabled:opacity-70 transition-all"
                  >
                    {state === 'submitting' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {state === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Something went wrong. Please try emailing directly.
                    </div>
                  )}
                </form>
              )}
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
