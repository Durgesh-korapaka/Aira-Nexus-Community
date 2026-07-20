import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionHeadingProps {
  badge?: string
  badgeVariant?: 'primary' | 'lime' | 'cyan' | 'neutral'
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
  className?: string
}

const BADGE_CLASSES: Record<NonNullable<SectionHeadingProps['badgeVariant']>, string> = {
  primary: 'badge-primary',
  lime: 'badge-lime',
  cyan: 'badge-cyan',
  neutral: 'badge-neutral',
}

export default function SectionHeading({
  badge,
  badgeVariant = 'primary',
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'} ${className}`}
    >
      {badge && <span className={BADGE_CLASSES[badgeVariant]}>{badge}</span>}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl md:text-[2.5rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-charcoal-600 sm:text-lg text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  )
}
