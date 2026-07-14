import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="text-center"
    >
      <p className="text-3xl md:text-4xl font-bold text-gradient-dark tracking-tight">{value}</p>
      <p className="mt-1 text-sm text-charcoal-500 font-medium">{label}</p>
    </motion.div>
  );
}
