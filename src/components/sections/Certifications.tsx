import { motion } from 'framer-motion'
import { Award, Clock, Target, CheckCircle } from 'lucide-react'
import { AnimatedSection, StaggerChildren } from '../ui/AnimatedSection'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { certifications } from '../../data'

const statusConfig = {
  earned: { label: 'Earned', color: '#10b981', icon: <CheckCircle className="w-3.5 h-3.5" />, bg: 'rgba(16,185,129,0.12)' },
  'in-progress': { label: 'In Progress', color: '#f59e0b', icon: <Clock className="w-3.5 h-3.5" />, bg: 'rgba(245,158,11,0.12)' },
  planned: { label: 'Planned', color: '#6366f1', icon: <Target className="w-3.5 h-3.5" />, bg: 'rgba(99,102,241,0.12)' },
}

const learningPath = [
  { category: 'Cloud Architecture', items: ['AWS SAA (in progress)', 'AWS Developer Associate'], color: '#f59e0b' },
  { category: 'Infrastructure as Code', items: ['HashiCorp Terraform Associate'], color: '#8b5cf6' },
  { category: 'Container Orchestration', items: ['CKAD — Kubernetes App Developer'], color: '#06b6d4' },
  { category: 'AI & ML', items: ['LangChain Agent Certification (planned)', 'AWS ML Specialty (planned)'], color: '#a855f7' },
]

export function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          eyebrow="Certifications"
          title="Credentials &"
          highlight=" Learning Path"
          subtitle="Continuously investing in formal validation of the skills I use in production."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certs grid */}
          <AnimatedSection direction="left">
            <h3 className="text-sm font-semibold text-slate-400 mb-5 font-mono uppercase tracking-wider">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => {
                const status = statusConfig[cert.status]
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card rounded-2xl p-5 relative overflow-hidden"
                    style={{ borderColor: cert.status === 'in-progress' ? `${cert.color}33` : undefined }}
                  >
                    {/* Glow for in-progress */}
                    {cert.status === 'in-progress' && (
                      <div
                        className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-full blur-xl"
                        style={{ background: cert.color }}
                      />
                    )}

                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}35` }}
                      >
                        {cert.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium mb-2"
                          style={{ background: status.bg, color: status.color }}
                        >
                          {status.icon}
                          {status.label}
                        </div>
                        <h4 className="text-xs font-bold text-white leading-snug">{cert.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>

                    {cert.year && (
                      <div className="text-xs text-slate-500 font-mono">Earned: {cert.year}</div>
                    )}

                    {cert.status === 'in-progress' && (
                      <div className="mt-3">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-500">Progress</span>
                          <span style={{ color: cert.color }}>~60%</span>
                        </div>
                        <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '60%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${cert.color}, ${cert.color}88)` }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </AnimatedSection>

          {/* Learning path */}
          <AnimatedSection direction="right" delay={0.1}>
            <h3 className="text-sm font-semibold text-slate-400 mb-5 font-mono uppercase tracking-wider">Learning Roadmap</h3>
            <GlassCard className="p-6">
              <div className="space-y-6">
                {learningPath.map((path, i) => (
                  <motion.div
                    key={path.category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: path.color }} />
                      <span className="text-sm font-semibold text-white">{path.category}</span>
                    </div>
                    <div className="pl-4 space-y-1.5 border-l-2" style={{ borderColor: `${path.color}30` }}>
                      {path.items.map(item => (
                        <div key={item} className="flex items-center gap-2 text-sm text-slate-400">
                          <div className="w-1 h-1 rounded-full bg-slate-600" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>

            {/* Commitment statement */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 p-5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20"
            >
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white mb-1">Continuous Learning Commitment</div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Formal certifications validate the production skills I've been building for 4+ years. AWS SAA is my immediate priority, followed by Terraform and CKAD.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
