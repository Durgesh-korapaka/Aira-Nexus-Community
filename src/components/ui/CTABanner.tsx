import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CTABannerProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export default function CTABanner({
  title = 'Ready to transform your community?',
  description = 'Join 500+ communities already running on Aira Nexus. Book a personalized demo and see the platform in action.',
  primaryLabel = 'Book a Demo',
  primaryTo = '/request-demo',
  secondaryLabel = 'View Pricing',
  secondaryTo = '/pricing',
}: CTABannerProps) {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-14 text-center shadow-elevated sm:px-12 lg:py-20"
        >
          <div className="blob -left-10 -top-10 h-40 w-40 bg-white/20" />
          <div className="blob -bottom-12 -right-8 h-48 w-48 bg-cyan-300/30" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 text-pretty">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to={primaryTo}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-primary-700 shadow-lg transition-all hover:bg-charcoal-50 hover:shadow-xl active:scale-[0.98]"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={secondaryTo}
                className="btn-outline-white"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
