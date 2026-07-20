import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  className?: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`card-hover group ${className}`}
    >
      <div className="icon-circle-lg transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-charcoal-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-600 text-pretty">{description}</p>
    </motion.article>
  )
}
