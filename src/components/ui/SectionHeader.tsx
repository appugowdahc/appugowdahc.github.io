import { AnimatedSection } from './AnimatedSection'

interface Props {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, highlight, subtitle, align = 'center' }: Props) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  const renderTitle = () => {
    if (!highlight) return title
    const parts = title.split(highlight)
    return (
      <>
        {parts[0]}
        <span className="text-gradient">{highlight}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <AnimatedSection className={`flex flex-col ${alignClass} mb-16`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-indigo-400 mb-4">
          <span className="w-8 h-px bg-gradient-to-r from-indigo-500 to-violet-500 hidden sm:block" />
          {eyebrow}
          <span className="w-8 h-px bg-gradient-to-l from-indigo-500 to-violet-500 hidden sm:block" />
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
