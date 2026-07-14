import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description: string;
  primaryAction?: { label: string; to: string };
  secondaryAction?: { label: string; to: string };
  children?: ReactNode;
}

export default function CTABanner({
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
}: CTABannerProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-brand-gradient px-6 py-16 sm:px-12 sm:py-20 text-center shadow-elevated"
        >
          <div className="blob w-[400px] h-[400px] bg-white/10 -top-20 -left-20 animate-float" />
          <div className="blob w-[300px] h-[300px] bg-lime-400/20 -bottom-20 -right-20 animate-float-slow" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              {title}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryAction && (
                <Link
                  to={primaryAction.to}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-600 font-semibold text-sm shadow-lg transition-all duration-200 ease-smooth hover:bg-primary-50 hover:shadow-xl active:scale-[0.98]"
                >
                  {primaryAction.label}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              )}
              {secondaryAction && (
                <Link
                  to={secondaryAction.to}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold text-sm border border-white/30 transition-all duration-200 ease-smooth hover:bg-white/20 hover:border-white/50 active:scale-[0.98]"
                >
                  {secondaryAction.label}
                </Link>
              )}
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
