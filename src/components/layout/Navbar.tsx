import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { personal } from '../../data'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'System Design', href: '#system-design' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { threshold: 0.3 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-900/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center text-sm font-bold text-white shadow-glow-sm">
                AG
              </div>
              <span className="font-semibold text-white text-sm hidden sm:block">
                Appu Gowda
                <span className="text-indigo-400 ml-1">H C</span>
              </span>
            </motion.button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg bg-white/[0.08]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                )
              })}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a
                href={personal.resumeUrl}
                download
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-brand hover:opacity-90 transition-opacity shadow-glow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>
              <button
                onClick={() => setMobileOpen(v => !v)}
                className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-surface-800/95 backdrop-blur-xl border-b border-white/[0.06] lg:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href={personal.resumeUrl}
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-brand"
                onClick={() => setMobileOpen(false)}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
