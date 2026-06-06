import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  glowColor?: string
  onClick?: () => void
  as?: 'div' | 'article' | 'section'
}

export function GlassCard({ children, className = '', hover = true, glow = false, glowColor = 'rgba(99,102,241,0.25)', onClick }: Props) {
  const baseClass = `glass-card rounded-2xl overflow-hidden ${className}`

  if (!hover) {
    return <div className={baseClass}>{children}</div>
  }

  return (
    <motion.div
      className={baseClass}
      onClick={onClick}
      style={onClick ? { cursor: 'pointer' } : undefined}
      whileHover={{
        y: -4,
        borderColor: 'rgba(99,102,241,0.25)',
        boxShadow: glow
          ? `0 0 30px ${glowColor}, 0 8px 40px rgba(0,0,0,0.5)`
          : '0 8px 40px rgba(0,0,0,0.5)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
