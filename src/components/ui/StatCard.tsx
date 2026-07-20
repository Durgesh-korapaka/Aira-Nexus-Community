import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-display-md font-display font-extrabold tracking-tight text-gradient">
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-charcoal-600">{label}</div>
    </motion.div>
  );
}
