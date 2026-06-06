import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Calendar, Zap } from 'lucide-react'
import { AnimatedSection, StaggerChildren } from '../ui/AnimatedSection'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { personal, strengths } from '../../data'

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="text-4xl font-black text-gradient mb-1">{value}</div>
      <div className="text-xs text-slate-500 font-medium">{label}</div>
    </motion.div>
  )
}

export function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" className="section-padding relative">
      <div className="container-max">
        <SectionHeader
          eyebrow="About Me"
          title="The Engineer Behind the"
          highlight=" Code"
          subtitle="4+ years building systems that run in production — not just demos."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Bio + info */}
          <AnimatedSection direction="left">
            <GlassCard className="p-8" glow>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-2xl font-black text-white shadow-glow-sm flex-shrink-0">
                  AG
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{personal.name}</h3>
                  <p className="text-indigo-400 text-sm font-medium">{personal.role}</p>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-500">
                    <MapPin className="w-3 h-3" />
                    {personal.location}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8 text-sm sm:text-base">
                {personal.bio}
              </p>

              {/* Info grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Calendar className="w-4 h-4 text-indigo-400" />, label: 'Experience', value: '4+ Years' },
                  { icon: <MapPin className="w-4 h-4 text-violet-400" />, label: 'Location', value: 'Bengaluru, IN' },
                  { icon: <GraduationCap className="w-4 h-4 text-cyan-400" />, label: 'Education', value: 'B.E. — CGPA 8.3' },
                  { icon: <Zap className="w-4 h-4 text-emerald-400" />, label: 'Availability', value: 'Open to Work' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    {item.icon}
                    <div>
                      <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                      <div className="text-xs sm:text-sm text-white font-semibold">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="mt-8 pt-8 border-t border-white/[0.06] grid grid-cols-4 gap-4">
                {personal.stats.map((stat, i) => (
                  <AnimatedStat key={stat.label} value={stat.value} label={stat.label} delay={0.1 * i} />
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Right: Strengths */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-6">Core Strengths</h3>
              <StaggerChildren
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                staggerDelay={0.07}
              >
                {strengths.map(s => (
                  <GlassCard key={s.title} className="p-5" glow glowColor="rgba(99,102,241,0.2)">
                    <div className="text-2xl mb-3">{s.icon}</div>
                    <h4 className="text-sm font-bold text-white mb-2">{s.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{s.description}</p>
                  </GlassCard>
                ))}
              </StaggerChildren>
            </div>
          </AnimatedSection>
        </div>

        {/* Education highlight */}
        <AnimatedSection delay={0.2} className="mt-8">
          <GlassCard className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1">Education</div>
                  <div className="text-white font-bold">Bachelor of Engineering</div>
                  <div className="text-slate-400 text-sm">BGS Institute of Technology, Mandya, Karnataka</div>
                </div>
              </div>
              <div className="sm:ml-auto flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400 font-semibold">
                  CGPA: 8.3 / 10
                </div>
                <div className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-400 font-medium">
                  Graduated 2020
                </div>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  )
}
