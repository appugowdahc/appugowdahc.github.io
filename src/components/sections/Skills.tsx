import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'
import { skillCategories, type Skill } from '../../data'

function SkillBar({ skill, visible }: { skill: Skill; visible: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm">{skill.icon}</span>
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
        </div>
        <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: visible ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #6366f1, #a855f7)',
            boxShadow: visible ? '0 0 8px rgba(99,102,241,0.6)' : 'none',
          }}
        />
      </div>
    </div>
  )
}

function SkillDot({ skill, visible }: { skill: Skill; visible: boolean }) {
  const filled = Math.round(skill.level / 20)
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors group">
      <div className="flex items-center gap-2.5">
        <span className="text-base">{skill.icon}</span>
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={visible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: i < filled ? '#6366f1' : 'rgba(255,255,255,0.1)' }}
          />
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const active = skillCategories.find(c => c.id === activeTab) || skillCategories[0]

  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 hero-mesh opacity-30" />
      <div className="container-max relative">
        <SectionHeader
          eyebrow="Technical Skills"
          title="What I Build"
          highlight=" With"
          subtitle="A curated stack refined through 4+ years of production engineering."
        />

        {/* Category tabs */}
        <AnimatedSection className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {skillCategories.map(cat => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === cat.id
                    ? 'text-white shadow-glow-sm'
                    : 'glass text-slate-400 hover:text-white'
                }`}
                style={activeTab === cat.id ? {
                  background: `linear-gradient(135deg, ${cat.color}33, ${cat.color}22)`,
                  border: `1px solid ${cat.color}55`,
                  boxShadow: `0 0 20px ${cat.color}25`,
                } : {}}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            ref={ref}
          >
            <GlassCard className="p-6 sm:p-8" glow glowColor={`${active.color}25`}>
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                  style={{ background: `linear-gradient(135deg, ${active.color}33, ${active.color}22)`, border: `1px solid ${active.color}44` }}
                >
                  {active.skills[0]?.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{active.label}</h3>
                  <p className="text-xs text-slate-500">{active.skills.length} technologies</p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-2xl font-black" style={{ color: active.color }}>
                    {Math.round(active.skills.reduce((a, s) => a + s.level, 0) / active.skills.length)}%
                  </div>
                  <div className="text-xs text-slate-500">avg proficiency</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                {active.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} visible={inView} />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* All skills overview */}
        <AnimatedSection delay={0.2} className="mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skillCategories.map((cat, i) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                whileHover={{ y: -4, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className={`glass-card rounded-2xl p-4 text-center transition-all duration-200 ${
                  activeTab === cat.id ? 'border-opacity-50' : ''
                }`}
                style={{ borderColor: activeTab === cat.id ? `${cat.color}44` : undefined }}
              >
                <div
                  className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center text-lg"
                  style={{ background: `linear-gradient(135deg, ${cat.color}25, ${cat.color}15)` }}
                >
                  {cat.skills[0]?.icon}
                </div>
                <div className="text-xs font-semibold text-white mb-1">{cat.label}</div>
                <div className="text-xs text-slate-500">{cat.skills.length} skills</div>
                <div
                  className="mt-2 text-xs font-bold font-mono"
                  style={{ color: cat.color }}
                >
                  {Math.round(cat.skills.reduce((a, s) => a + s.level, 0) / cat.skills.length)}%
                </div>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
