import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { personal } from '../../data'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/[0.06] bg-surface-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-sm font-bold text-white">
                AG
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{personal.name}</p>
                <p className="text-xs text-slate-500">{personal.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3 h-3" />
              {personal.location}
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: <Github className="w-4 h-4" />, href: personal.github, label: 'GitHub' },
              { icon: <Linkedin className="w-4 h-4" />, href: personal.linkedin, label: 'LinkedIn' },
              { icon: <Mail className="w-4 h-4" />, href: `mailto:${personal.email}`, label: 'Email' },
              { icon: <Phone className="w-4 h-4" />, href: `tel:${personal.phone}`, label: 'Phone' },
            ].map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={link.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to top
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© 2024 Appu Gowda H C. Built with React + TypeScript + Tailwind.</p>
          <p>Open to SDE-2 & Senior Engineer opportunities.</p>
        </div>
      </div>
    </footer>
  )
}
