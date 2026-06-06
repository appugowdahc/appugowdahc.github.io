import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, MessageSquare, ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../../data'

function TypewriterRoles({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing')

  useEffect(() => {
    const role = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1800)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 400)
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 30)
      } else {
        setRoleIndex(i => (i + 1) % roles.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, phase, roleIndex, roles])

  return (
    <span>
      <span className="text-gradient">{displayed}</span>
      <span className="cursor-blink text-indigo-400 font-light ml-0.5">|</span>
    </span>
  )
}

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-950">
        <div className="absolute inset-0 hero-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-60" />
        {/* Orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="orb w-[600px] h-[600px] bg-indigo-600/20 top-[-200px] left-[-200px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="orb w-[500px] h-[500px] bg-violet-600/20 bottom-[-100px] right-[-100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="orb w-[400px] h-[400px] bg-cyan-600/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-bright border border-emerald-500/20 text-sm text-emerald-400 font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to SDE-2 & Senior Engineer roles
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
        >
          <span className="text-white">Appu </span>
          <span className="text-gradient">Gowda</span>
          <span className="text-white"> H C</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-300 mb-8 min-h-[1.5em]"
        >
          <TypewriterRoles roles={personal.roles} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12"
        >
          {personal.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-gradient">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href={personal.resumeUrl}
            download
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-white bg-gradient-brand text-sm sm:text-base shadow-glow-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-white glass-bright hover:border-indigo-500/40 text-sm sm:text-base transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {[
            { icon: <Github className="w-5 h-5" />, href: personal.github, label: 'GitHub' },
            { icon: <Linkedin className="w-5 h-5" />, href: personal.linkedin, label: 'LinkedIn' },
            { icon: <Mail className="w-5 h-5" />, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(link => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={link.label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-11 h-11 rounded-2xl glass-bright flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {['Python', 'React', 'FastAPI', 'AWS', 'Docker', 'LangChain', 'Terraform', 'PostgreSQL'].map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.06 }}
              className="px-3 py-1 rounded-full text-xs font-mono text-slate-500 border border-white/[0.06] bg-white/[0.02]"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}
