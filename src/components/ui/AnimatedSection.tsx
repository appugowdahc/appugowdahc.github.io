import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

export function AnimatedSection({ children, className = '', delay = 0, direction = 'up', once = true }: Props) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: once })

  const dirMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 50 },
    right: { y: 0, x: -50 },
    none: { y: 0, x: 0 },
  }

  const initial = { opacity: 0, ...dirMap[direction] }
  const animate = inView ? { opacity: 1, y: 0, x: 0 } : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
  staggerDelay?: number
  baseDelay?: number
}

export function StaggerChildren({ children, className = '', itemClassName = '', staggerDelay = 0.08, baseDelay = 0 }: StaggerProps) {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: baseDelay + i * staggerDelay, ease: [0.22, 1, 0.36, 1] }}
          className={itemClassName}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
