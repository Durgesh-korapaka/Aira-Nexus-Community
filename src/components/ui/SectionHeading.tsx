import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'primary' | 'lime' | 'cyan' | 'neutral';
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeColor = 'primary',
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const badgeClass = {
    primary: 'badge-primary',
    lime: 'badge-lime',
    cyan: 'badge-cyan',
    neutral: 'badge-neutral',
  }[badgeColor];

  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-2xl ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`badge ${badgeClass} mb-4`}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-charcoal-500 text-pretty"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
