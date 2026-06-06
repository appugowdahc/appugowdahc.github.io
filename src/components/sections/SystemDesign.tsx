import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, CheckCircle2, Zap, Database, GitBranch } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { systemDesignCases, type SystemDesignCase } from '../../data'

function CaseStudyCard({ study, index }: { study: SystemDesignCase; index: number }) {
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <GlassCard className="overflow-hidden" glow glowColor={`${study.color}18`}>
        {/* Header */}
        <button
          onClick={() => setExpanded(e => !e)}
          className="w-full p-6 sm:p-8 flex items-start justify-between gap-4 text-left"
        >
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${study.color}22`, border: `1px solid ${study.color}44` }}
            >
              <GitBranch className="w-5 h-5" style={{ color: study.color }} />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider mb-1.5" style={{ color: study.color }}>
                Case Study {index + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{study.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{study.subtitle}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="flex-shrink-0 mt-1"
          >
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-8 border-t border-white/[0.05]">
                {/* Challenge */}
                <div className="mt-6 mb-8">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                    <Zap className="w-3.5 h-3.5" />
                    The Challenge
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{study.challenge}</p>
                </div>

                {/* Architecture diagram */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                    <Database className="w-3.5 h-3.5" />
                    Architecture
                  </div>
                  <div
                    className="rounded-xl p-4 font-mono text-xs leading-relaxed overflow-x-auto"
                    style={{ background: 'rgba(0,0,0,0.4)', border: `1px solid ${study.color}25` }}
                  >
                    <pre className="text-slate-300 whitespace-pre">{study.diagram}</pre>
                  </div>
                </div>

                {/* Architecture layers */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {study.architecture.map((layer, i) => (
                    <motion.div
                      key={layer.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07 }}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                    >
                      <div
                        className="text-xs font-semibold mb-3 font-mono"
                        style={{ color: study.color }}
                      >
                        {layer.title}
                      </div>
                      <ul className="space-y-1.5">
                        {layer.components.map(c => (
                          <li key={c} className="flex items-start gap-2 text-xs text-slate-400">
                            <div
                              className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                              style={{ backgroundColor: study.color }}
                            />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* Key decisions */}
                <div className="mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
                    Key Design Decisions
                  </div>
                  <div className="space-y-3">
                    {study.keyDecisions.map((d, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                      >
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: study.color }} />
                        <div>
                          <div className="text-sm font-semibold text-white mb-1">{d.decision}</div>
                          <div className="text-xs text-slate-400 leading-relaxed">{d.rationale}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Scale metrics */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
                    Scale & Outcomes
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.scale.map(s => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-xl text-xs font-medium"
                        style={{ background: `${study.color}15`, color: study.color, border: `1px solid ${study.color}30` }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </motion.div>
  )
}

export function SystemDesign() {
  return (
    <section id="system-design" className="section-padding relative">
      <div className="absolute inset-0 hero-mesh opacity-20 pointer-events-none" />

      <div className="container-max">
        <SectionHeader
          eyebrow="System Design"
          title="Architecture"
          highlight=" Case Studies"
          subtitle="Deep-dives into distributed systems decisions, scaling strategies, and trade-off analysis."
        />

        <div className="space-y-6">
          {systemDesignCases.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
