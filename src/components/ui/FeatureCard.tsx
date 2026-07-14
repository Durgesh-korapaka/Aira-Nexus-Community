import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  className = '',
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`card card-hover p-6 group ${className}`}
    >
      <div className="icon-circle-lg mb-5 group-hover:scale-110 group-hover:rotate-3">
        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-charcoal-900">{title}</h3>
      <p className="text-sm text-charcoal-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
