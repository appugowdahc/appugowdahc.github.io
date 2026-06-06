import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Calendar, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GlassCard } from '../ui/GlassCard'
import { Badge } from '../ui/Badge'
import { SectionHeader } from '../ui/SectionHeader'
import { experiences } from '../../data'

export function Experience() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Agentic AI Platform')

  const exp = experiences[0]

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-800/30 to-transparent pointer-events-none" />

      <div className="container-max">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Made an"
          highlight=" Impact"
          subtitle="4+ years shipping production systems at Criterion Networks."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, expIdx) => (
              <AnimatedSection key={exp.id} delay={expIdx * 0.1}>
                <div className="md:pl-16 relative">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
                    className="absolute left-0 top-6 w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center shadow-glow-sm hidden md:flex"
                    style={{ left: '-1px' }}
                  >
                    <Building2 className="w-5 h-5 text-white" />
                  </motion.div>

                  <GlassCard className="p-6 sm:p-8" glow glowColor={`${exp.color}20`}>
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            {exp.type}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                          <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                            <Building2 className="w-4 h-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                          <div className="text-xl font-black text-gradient">4+</div>
                          <div className="text-xs text-slate-500">Years</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-8 pb-6 border-b border-white/[0.05]">
                      {exp.summary}
                    </p>

                    {/* Expandable categories */}
                    <div className="space-y-3">
                      {exp.highlights.map((cat, catIdx) => {
                        const isOpen = expandedCategory === cat.category
                        return (
                          <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIdx * 0.08 }}
                          >
                            <button
                              onClick={() => setExpandedCategory(isOpen ? null : cat.category)}
                              className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.05] hover:border-indigo-500/25 transition-all duration-200"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-gradient-brand" />
                                <span className="text-sm font-semibold text-white">{cat.category}</span>
                                <span className="text-xs text-slate-500 font-mono">{cat.items.length} highlights</span>
                              </div>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronDown className="w-4 h-4 text-slate-400" />
                              </motion.div>
                            </button>

                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                  className="overflow-hidden"
                                >
                                  <div className="pt-3 pb-1 pl-4 space-y-2.5">
                                    {cat.items.map((item, itemIdx) => (
                                      <motion.div
                                        key={itemIdx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: itemIdx * 0.06 }}
                                        className="flex items-start gap-3"
                                      >
                                        <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                                      </motion.div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Tech stack */}
                    <div className="mt-8 pt-6 border-t border-white/[0.05]">
                      <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-3">Tech Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map(t => (
                          <Badge key={t} label={t} size="sm" />
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
