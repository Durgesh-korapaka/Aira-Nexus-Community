import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'primary' | 'lime' | 'cyan' | 'neutral';
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

const badgeClasses: Record<NonNullable<SectionHeadingProps['badgeVariant']>, string> = {
  primary: 'badge-primary',
  lime: 'badge-lime',
  cyan: 'badge-cyan',
  neutral: 'badge-neutral',
};

export default function SectionHeading({
  badge,
  badgeVariant = 'primary',
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={badgeClasses[badgeVariant]}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 text-display-sm font-display font-bold tracking-tight text-charcoal-900 text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-base leading-relaxed text-charcoal-600 text-pretty"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
