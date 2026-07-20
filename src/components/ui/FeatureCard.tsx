import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  href?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card-hover group"
    >
      <div className="icon-circle-lg group-hover:scale-110 group-hover:bg-primary-100">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-charcoal-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{description}</p>
    </motion.article>
  );
}
