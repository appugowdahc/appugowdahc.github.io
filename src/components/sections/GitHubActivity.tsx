import { motion } from 'framer-motion'
import { Github, GitCommit, GitPullRequest, Star, GitFork, Code2 } from 'lucide-react'
import { AnimatedSection } from '../ui/AnimatedSection'
import { GlassCard } from '../ui/GlassCard'
import { SectionHeader } from '../ui/SectionHeader'

function generateContributions(): number[][] {
  const weeks = 52
  const days = 7
  const grid: number[][] = []
  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < days; d++) {
      const r = Math.random()
      if (r < 0.3) week.push(0)
      else if (r < 0.55) week.push(1)
      else if (r < 0.75) week.push(2)
      else if (r < 0.9) week.push(3)
      else week.push(4)
    }
    grid.push(week)
  }
  return grid
}

const contributions = generateContributions()

const levelColors = [
  'rgba(255,255,255,0.05)',
  'rgba(99,102,241,0.3)',
  'rgba(99,102,241,0.55)',
  'rgba(139,92,246,0.75)',
  'rgba(168,85,247,1)',
]

const stats = [
  { icon: <GitCommit className="w-5 h-5" />, label: 'Total Commits', value: '1,200+', color: '#6366f1' },
  { icon: <GitPullRequest className="w-5 h-5" />, label: 'Pull Requests', value: '200+', color: '#8b5cf6' },
  { icon: <Code2 className="w-5 h-5" />, label: 'Repositories', value: '30+', color: '#a855f7' },
  { icon: <Star className="w-5 h-5" />, label: 'Current Streak', value: '90 days', color: '#06b6d4' },
]

const topLanguages = [
  { name: 'Python', pct: 42, color: '#3b82f6' },
  { name: 'TypeScript', pct: 25, color: '#06b6d4' },
  { name: 'JavaScript', pct: 18, color: '#f59e0b' },
  { name: 'HCL / Terraform', pct: 9, color: '#8b5cf6' },
  { name: 'Other', pct: 6, color: '#475569' },
]

export function GitHubActivity() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const totalContribs = contributions.flat().filter(v => v > 0).length

  return (
    <section id="github" className="section-padding relative">
      <div className="absolute inset-0 hero-mesh opacity-20 pointer-events-none" />

      <div className="container-max">
        <SectionHeader
          eyebrow="GitHub Activity"
          title="Code"
          highlight=" Contributions"
          subtitle="A year of consistent commits, pull requests, and production deployments."
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contribution graph */}
          <AnimatedSection className="lg:col-span-2">
            <GlassCard className="p-6 sm:p-8" glow>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-white">Contribution Activity</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{totalContribs * 8}+ contributions in the last year</p>
                </div>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass-bright text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  View Profile
                </a>
              </div>

              {/* Month labels */}
              <div className="flex mb-2 pl-0 overflow-x-auto">
                <div className="flex gap-0 min-w-full">
                  {months.map((m, i) => (
                    <div
                      key={m}
                      className="text-xs text-slate-600 font-mono"
                      style={{ width: `${(52 / 12) * 12 + 2}px`, minWidth: `${(52 / 12) * 12 + 2}px` }}
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid */}
              <div className="overflow-x-auto">
                <div className="flex gap-[3px] min-w-max">
                  {contributions.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px]">
                      {week.map((level, dIdx) => (
                        <motion.div
                          key={dIdx}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (wIdx * 7 + dIdx) * 0.0008, duration: 0.2 }}
                          whileHover={{ scale: 1.5 }}
                          className="w-[10px] h-[10px] rounded-sm cursor-default"
                          style={{ backgroundColor: levelColors[level] }}
                          title={`${level * 3} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-2 mt-4 justify-end">
                <span className="text-xs text-slate-600">Less</span>
                {levelColors.map((c, i) => (
                  <div
                    key={i}
                    className="w-[10px] h-[10px] rounded-sm"
                    style={{ backgroundColor: c }}
                  />
                ))}
                <span className="text-xs text-slate-600">More</span>
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Stats sidebar */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-4">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="glass-card rounded-2xl p-4 text-center"
                  >
                    <div
                      className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                      style={{ background: `${stat.color}20`, color: stat.color }}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <GlassCard className="p-5">
                <h4 className="text-sm font-bold text-white mb-4">Top Languages</h4>
                <div className="space-y-3">
                  {topLanguages.map((lang, i) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-300 font-medium">{lang.name}</span>
                        <span className="text-slate-500 font-mono">{lang.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
