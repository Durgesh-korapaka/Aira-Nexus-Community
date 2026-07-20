import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTABanner({
  title = 'Ready to transform your community?',
  description = 'Join 500+ communities across India running smarter on AiraNexus. Book a free demo today.',
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
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4xl bg-brand-gradient px-6 py-14 sm:px-12 sm:py-16 lg:px-16"
        >
          <div className="blob -left-16 -top-16 h-64 w-64 bg-primary-300/30" aria-hidden="true" />
          <div className="blob -right-12 -bottom-12 h-72 w-72 bg-lime-400/20" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-display-md font-display font-bold tracking-tight text-white text-balance">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 text-pretty">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={primaryTo} className="btn-outline-white group">
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link to={secondaryTo} className="btn-outline-white">
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
