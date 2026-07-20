import { motion } from 'framer-motion';
import {
  Receipt,
  Users,
  ShieldCheck,
  CalendarDays,
  Wrench,
  Megaphone,
  CreditCard,
  BarChart3,
  FileText,
  Building2,
  Smartphone,
  Zap,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import FeatureCard from '../components/ui/FeatureCard';
import StatCard from '../components/ui/StatCard';
import CTABanner from '../components/ui/CTABanner';

const bentoFeatures = [
  { icon: Receipt, title: 'Maintenance Billing', description: 'Automated invoices, reminders, and online payments with UPI, cards, and net banking.' },
  { icon: Users, title: 'Visitor Management', description: 'Digital gate pass with QR check-in, staff verification, and real-time tracking.' },
  { icon: ShieldCheck, title: 'Security & Access', description: 'Role-based access, audit logs, and bank-grade encryption for every community.' },
  { icon: CalendarDays, title: 'Amenity Booking', description: 'Conflict-free scheduling for clubhouses, pools, courts, and community halls.' },
  { icon: Wrench, title: 'Helpdesk & Complaints', description: 'Track tickets, assign vendors, and resolve issues with SLA timers and ratings.' },
  { icon: Megaphone, title: 'Communications', description: 'Broadcast notices, polls, and emergency alerts via SMS, email, and push.' },
  { icon: CreditCard, title: 'Online Payments', description: 'Accept maintenance, dues, and one-time charges with instant reconciliation.' },
  { icon: BarChart3, title: 'Analytics & Reports', description: 'Real-time dashboards for collections, arrears, vendor performance, and more.' },
  { icon: FileText, title: 'Accounting', description: 'Double-entry ledger, balance sheets, and audit-ready financial statements.' },
  { icon: Building2, title: 'Asset Management', description: 'Track assets, warranties, AMC contracts, and maintenance schedules.' },
  { icon: Smartphone, title: 'Resident App', description: 'Native iOS and Android apps for residents to pay, book, and raise tickets.' },
  { icon: Zap, title: 'Integrations', description: 'Connect with Tally, WhatsApp, and popular accounting and communication tools.' },
];

const deepDives = [
  {
    title: 'Maintenance billing that actually gets paid',
    description:
      'Generate invoices automatically based on flat size, category, or custom rules. Send reminders via SMS, email, and WhatsApp. Accept payments through UPI, cards, and net banking with instant reconciliation. Track arrears and defaulters at a glance.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Automated invoice generation', 'Multi-channel reminders', 'Instant payment reconciliation'],
  },
  {
    title: 'Visitor management your security team will love',
    description:
      'Replace paper gate registers with a digital system. Guards verify visitors via QR codes, residents pre-approve guests, and every entry is logged with timestamps. Staff attendance and verification built right in.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['QR-based check-in', 'Pre-approval workflow', 'Staff attendance tracking'],
    reverse: true,
  },
  {
    title: 'Analytics that turn data into decisions',
    description:
      'See collection rates, defaulters, vendor performance, and resident satisfaction in real time. Export reports for AGMs, audits, and committee meetings. Set alerts for anomalies and thresholds.',
    image: 'https://images.pexels.com/photos/7651935/pexels-photo-7651935.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Real-time dashboards', 'AGM-ready reports', 'Anomaly alerts'],
  },
];

const stats = [
  { value: '12+', label: 'Core modules' },
  { value: '50K+', label: 'Active residents' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '4.8/5', label: 'User rating' },
];

export default function FeaturesPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  return (
    <>
      <SEO
        title="Features — AiraNexus Society Management Software"
        description="Explore every AiraNexus feature: maintenance billing, visitor management, helpdesk, amenity booking, accounting, analytics, and more."
        canonical="https://airanexus.com/features"
      />

      {/* Hero */}
      <section className="bg-hero-gradient pb-20 pt-32 sm:pt-36">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title="One platform. Every workflow."
            description="AiraNexus replaces fragmented spreadsheets, WhatsApp groups, and paper registers with a unified system designed for Indian residential communities."
          />
        </div>
      </section>

      {/* Bento grid */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bentoFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={(i % 3) * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep dives */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom space-y-20 lg:space-y-28">
          {deepDives.map((d) => (
            <div
              key={d.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                d.reverse ? 'lg:[&>figure]:order-2' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge-primary">Deep dive</span>
                <h2 className="mt-4 text-display-sm font-display font-bold tracking-tight text-charcoal-900 text-balance">
                  {d.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal-600 text-pretty">
                  {d.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {d.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-charcoal-800">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                        <ShieldCheck className="h-3 w-3" aria-hidden="true" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.figure
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="overflow-hidden rounded-4xl border border-charcoal-100 shadow-card-hover"
              >
                <img
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={533}
                  className="h-full w-full object-cover"
                />
              </motion.figure>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-white">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="See AiraNexus in action"
        description="Book a personalized demo and explore every feature tailored to your community."
      />
    </>
  );
}
