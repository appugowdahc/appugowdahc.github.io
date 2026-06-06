import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ArrowRight, X } from 'lucide-react'
import { AnimatedSection, StaggerChildren } from '../ui/AnimatedSection'
import { GlassCard } from '../ui/GlassCard'
import { Badge } from '../ui/Badge'
import { SectionHeader } from '../ui/SectionHeader'
import { projects, type Project } from '../../data'

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-2xl glass-card rounded-2xl overflow-hidden"
        style={{ border: `1px solid ${project.color}33` }}
      >
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold"
                  style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}40` }}
                >
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-slate-400 text-sm">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/[0.06] text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">{project.description}</p>

          <div className="mb-6">
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Key Impact</h4>
            <div className="space-y-2">
              {project.impact.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: project.color }} />
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => <Badge key={t} label={t} size="sm" />)}
            </div>
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white glass-bright hover:border-white/20 transition-all"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)` }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08, duration: 0.5 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ y: -6 }}
        className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
        style={{ border: hovered ? `1px solid ${project.color}33` : '1px solid rgba(255,255,255,0.07)' }}
        onClick={() => setModalOpen(true)}
      >
        {/* Top accent */}
        <div
          className="h-1"
          style={{ background: `linear-gradient(90deg, ${project.color}, ${project.color}44)` }}
        />

        <div className="p-6">
          {/* Category badge */}
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold"
              style={{ background: `${project.color}18`, color: project.color, border: `1px solid ${project.color}35` }}
            >
              {project.category}
            </span>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="p-1.5 rounded-lg hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="p-1.5 rounded-lg hover:bg-white/[0.08] text-slate-400 hover:text-white transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-base font-bold text-white mb-1 group-hover:text-gradient transition-all">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 mb-3">{project.subtitle}</p>
          <p className="text-sm text-slate-400 leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Impact preview */}
          <div className="mb-5 space-y-1.5">
            {project.impact.slice(0, 2).map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: project.color }} />
                <span className="text-xs text-slate-400 line-clamp-1">{item}</span>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.slice(0, 5).map(t => (
              <Badge key={t} label={t} size="sm" />
            ))}
            {project.tech.length > 5 && (
              <span className="text-xs text-slate-500 px-2 py-0.5">+{project.tech.length - 5} more</span>
            )}
          </div>

          <div
            className="flex items-center gap-2 text-xs font-semibold transition-all"
            style={{ color: hovered ? project.color : '#64748b' }}
          >
            View Details
            <motion.span animate={{ x: hovered ? 4 : 0 }}>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && <ProjectModal project={project} onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-800/20 to-transparent pointer-events-none" />

      <div className="container-max">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Systems I've"
          highlight=" Built"
          subtitle="Click any project card for architecture details, impact metrics, and tech decisions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass-bright text-sm font-semibold text-slate-300 hover:text-white hover:border-indigo-500/30 transition-all"
          >
            <Github className="w-4 h-4" />
            View More on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
