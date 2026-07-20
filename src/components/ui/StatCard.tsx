import { motion } from 'framer-motion'

interface StatCardProps {
  value: string
  label: string
  delay?: number
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="text-center"
    >
      <p className="text-3xl font-bold tracking-tight text-gradient-dark sm:text-4xl">{value}</p>
      <p className="mt-1.5 text-sm font-medium text-charcoal-600">{label}</p>
    </motion.div>
  )
}
