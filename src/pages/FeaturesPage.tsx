import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  MessageSquare,
  Shield,
  Users,
  BarChart3,
  Smartphone,
  ArrowRight,
  Check,
  Zap,
  Bell,
  CalendarDays,
  Vote,
  FolderLock,
  Wrench,
  TrendingUp,
  Clock,
  Star,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import CTABanner from '../components/ui/CTABanner';

interface FeaturesPageProps {
  darkMode: boolean;
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

// Bento grid features — varied card sizes/colspans
type BentoFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Tailwind grid classes for lg breakpoint (col span / row span) */
  className: string;
  accent?: 'primary' | 'lime' | 'cyan';
};

const bentoFeatures: BentoFeature[] = [
  {
    icon: CreditCard,
    title: 'Automated Billing',
    description:
      'Generate invoices, send reminders, and collect payments online — all on autopilot. Late fees, GST compliance, and reconciliation handled for you.',
    className: 'lg:col-span-3 lg:row-span-2',
    accent: 'primary',
  },
  {
    icon: MessageSquare,
    title: 'Complaint Tracking',
    description: 'Route, prioritize, and resolve resident complaints with full transparency.',
    className: 'lg:col-span-3',
    accent: 'cyan',
  },
  {
    icon: Shield,
    title: 'Visitor Management',
    description: 'Pre-approved gate passes with QR codes. Secure, fast, paperless.',
    className: 'lg:col-span-2',
  },
  {
    icon: Users,
    title: 'Resident Directory',
    description: 'Complete database with family details, vehicles, and contact info.',
    className: 'lg:col-span-2',
  },
  {
    icon: BarChart3,
    title: 'Financial Reports',
    description: 'Real-time dashboards for collections, expenses, and audit-ready statements.',
    className: 'lg:col-span-2',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Native iOS and Android apps for residents, staff, and committee members.',
    className: 'lg:col-span-3',
    accent: 'lime',
  },
  {
    icon: Zap,
    title: 'WhatsApp Integration',
    description: 'Automated WhatsApp messages for dues, events, complaints, and urgent alerts — with 90% open rates.',
    className: 'lg:col-span-3',
    accent: 'primary',
  },
  {
    icon: Bell,
    title: 'Notice Board',
    description: 'Broadcast announcements and events to all residents instantly.',
    className: 'lg:col-span-2',
  },
  {
    icon: CalendarDays,
    title: 'Amenity Booking',
    description: 'Reserve clubhouses, courts, and equipment with conflict-free scheduling.',
    className: 'lg:col-span-2',
  },
  {
    icon: Vote,
    title: 'Polls & Voting',
    description: 'Run committee elections and resident polls with tamper-proof results.',
    className: 'lg:col-span-2',
  },
  {
    icon: FolderLock,
    title: 'Document Storage',
    description: 'Centralized, encrypted vault for bylaws, minutes, and audit records.',
    className: 'lg:col-span-3',
  },
  {
    icon: Wrench,
    title: 'Vendor Management',
    description: 'Track vendors, contracts, and service levels in one place.',
    className: 'lg:col-span-3',
  },
];

// Deep-dive features — alternating image/text layout
type DeepDive = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  stats: { value: string; label: string }[];
};

const deepDives: DeepDive[] = [
  {
    icon: CreditCard,
    eyebrow: 'Billing & Payments',
    title: 'Maintenance billing that runs itself',
    description:
      'Set up your maintenance schedule once and let AiraNexus handle invoice generation, payment gateway collection, reminders, and late-fee calculation. Residents pay via UPI, cards, or net-banking — you watch collections climb.',
    bullets: [
      'Automated invoice generation on a recurring schedule',
      'UPI, cards, and net-banking with instant reconciliation',
      'Tiered late-fee rules and GST-compliant receipts',
      'WhatsApp + email reminders that cut defaults by 80%',
    ],
    image:
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Person using a laptop to review billing and payment dashboards',
    stats: [
      { value: '80%', label: 'Fewer unpaid dues' },
      { value: '20h', label: 'Saved per month' },
    ],
  },
  {
    icon: Shield,
    eyebrow: 'Security & Gate Operations',
    title: 'Visitor management without the paperwork',
    description:
      'Residents pre-approve guests from their phone. Security guards scan a QR code at the gate. Delivery partners get one-time passes. Every entry is logged, time-stamped, and searchable — no registers, no friction.',
    bullets: [
      'Pre-approval flow via resident mobile app',
      'QR-code check-in at the gate in under 5 seconds',
      'Real-time entry alerts sent to the host resident',
      'Full visitor history exportable for audits',
    ],
    image:
      'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Security guard scanning a QR code at a residential gate',
    stats: [
      { value: '60%', label: 'Less gate wait time' },
      { value: '100%', label: 'Paperless check-ins' },
    ],
  },
  {
    icon: BarChart3,
    eyebrow: 'Insights & Reporting',
    title: 'Financial reports your auditor will love',
    description:
      'AI-powered dashboards turn raw transaction data into clear, audit-ready statements. Track collections, expenses, and arrears at a glance — then drill down to the invoice level whenever you need to.',
    bullets: [
      'Real-time collection and expense dashboards',
      'One-click export to PDF and Excel for audits',
      'AI insights that flag unusual spending patterns',
      'Custom report builder for committee presentations',
    ],
    image:
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Analytics dashboard showing financial charts and graphs',
    stats: [
      { value: '99.9%', label: 'Report accuracy' },
      { value: '1-click', label: 'Audit-ready export' },
    ],
  },
];

const stats = [
  { value: '500+', label: 'Communities onboarded' },
  { value: '50K+', label: 'Active residents' },
  { value: '40%', label: 'Better collections' },
  { value: '99.9%', label: 'Platform uptime' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function FeaturesPage({ darkMode: _darkMode }: FeaturesPageProps) {
  return (
    <div className="overflow-hidden">
      <SEO
        title="Features — AiraNexus Community Management"
        description="Explore every AiraNexus feature: automated billing, complaint tracking, visitor management, resident directory, financial reports, mobile app, WhatsApp integration, notice board, amenity booking, polls, document storage, and vendor management."
        path="/features"
      />

      {/* ============================ HERO ============================ */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-hero-gradient"
        aria-labelledby="features-hero-heading"
      >
        <div className="blob w-[500px] h-[500px] bg-primary-400 -top-32 -right-32 animate-float" />
        <div className="blob w-[400px] h-[400px] bg-lime-400 -bottom-40 -left-32 animate-float-slow" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="badge badge-primary mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Platform Features
            </motion.span>

            <motion.h1
              id="features-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Every tool your community needs,{' '}
              <span className="text-gradient">beautifully unified</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              Twelve purpose-built modules — from billing and complaints to visitor
              tracking and vendor management — designed to work together seamlessly.
              No spreadsheets, no sticky notes, no chaos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link to="/request-demo" className="btn-primary text-base px-8 py-4">
                Book a Free Demo
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link to="/pricing" className="btn-secondary text-base px-8 py-4">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================ BENTO GRID ============================ */}
      <section
        className="section-padding bg-white"
        aria-labelledby="bento-heading"
      >
        <div className="container-custom">
          <SectionHeading
            badge="Feature Catalog"
            badgeColor="primary"
            title={
              <>
                Twelve modules,{' '}
                <span className="text-gradient">one platform</span>
              </>
            }
            description="Each module is powerful on its own — and even better together. Explore the full catalog below."
          />

          <div
            className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6 auto-rows-[minmax(180px,auto)]"
            role="list"
          >
            {bentoFeatures.map((feature, i) => {
              const isLarge = feature.className.includes('row-span-2');
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
                  className={`card card-hover p-6 lg:p-7 flex flex-col justify-between group ${feature.className}`}
                  role="listitem"
                >
                  <div>
                    <div
                      className={`icon-circle-lg mb-5 group-hover:scale-110 group-hover:rotate-3 ${
                        feature.accent === 'lime'
                          ? 'bg-gradient-to-br from-lime-400 to-lime-600'
                          : feature.accent === 'cyan'
                            ? 'bg-gradient-to-br from-cyan-400 to-cyan-600'
                            : ''
                      }`}
                    >
                      <feature.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3
                      className={`font-bold text-charcoal-900 mb-2 ${
                        isLarge ? 'text-xl lg:text-2xl' : 'text-lg'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-charcoal-500 leading-relaxed ${
                        isLarge ? 'text-base' : 'text-sm'
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {isLarge && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="badge badge-primary">UPI Payments</span>
                      <span className="badge badge-lime">Auto-Reminders</span>
                      <span className="badge badge-cyan">GST Ready</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ DEEP DIVES ============================ */}
      <section
        className="section-padding bg-greenish-50"
        aria-labelledby="deep-dive-heading"
      >
        <div className="container-custom">
          <SectionHeading
            badge="Deep Dive"
            badgeColor="cyan"
            title={
              <>
                A closer look at the{' '}
                <span className="text-gradient">modules that matter most</span>
              </>
            }
            description="Three pillars of AiraNexus, examined in detail — with the numbers to back them up."
          />

          <div className="mt-16 space-y-20 lg:space-y-28">
            {deepDives.map((dive, index) => {
              const reversed = index % 2 !== 0;
              return (
                <div
                  key={dive.title}
                  id={`deep-dive-${index + 1}`}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  {/* Text column */}
                  <motion.div
                    initial={{ opacity: 0, x: reversed ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className={reversed ? 'lg:order-2' : 'lg:order-1'}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="icon-circle-lg">
                        <dive.icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                      <span className="badge badge-neutral">{dive.eyebrow}</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-charcoal-900 mb-4 tracking-tight">
                      {dive.title}
                    </h3>
                    <p className="text-lg text-charcoal-500 mb-6 text-pretty leading-relaxed">
                      {dive.description}
                    </p>

                    <ul className="space-y-3 mb-8" role="list">
                      {dive.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3" role="listitem">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-lime-100 flex items-center justify-center mt-0.5">
                            <Check className="w-3.5 h-3.5 text-lime-600" aria-hidden="true" />
                          </span>
                          <span className="text-sm text-charcoal-600 leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Inline stats */}
                    <div className="flex flex-wrap gap-8 pt-6 border-t border-charcoal-100">
                      {dive.stats.map((s) => (
                        <div key={s.label}>
                          <p className="text-2xl font-bold text-gradient-dark tracking-tight">
                            {s.value}
                          </p>
                          <p className="text-xs text-charcoal-500 font-medium mt-0.5">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Image column */}
                  <motion.div
                    initial={{ opacity: 0, x: reversed ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    className={reversed ? 'lg:order-1' : 'lg:order-2'}
                  >
                    <div className="relative">
                      {/* Decorative gradient frame */}
                      <div className="absolute -inset-3 bg-gradient-to-br from-primary-200 via-lime-100 to-cyan-200 rounded-3xl blur-2xl opacity-40" />
                      <div className="relative card overflow-hidden p-0 rounded-3xl shadow-elevated">
                        <img
                          src={dive.image}
                          alt={dive.imageAlt}
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={533}
                          className="w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover"
                        />
                        {/* Floating badge on image */}
                        <div className="absolute top-4 right-4 card-glass px-4 py-2.5 rounded-2xl flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary-600" aria-hidden="true" />
                          <span className="text-sm font-semibold text-charcoal-900">
                            {dive.stats[0].value} {dive.stats[0].label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================ STATS BAR ============================ */}
      <section
        className="py-14 lg:py-20 bg-white border-y border-charcoal-100"
        aria-label="Platform statistics"
      >
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================ TRUST STRIP ============================ */}
      <section
        className="section-tight bg-greenish-50"
        aria-label="Why communities choose AiraNexus"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Live in 48 hours',
                desc: 'Our team migrates your data and onboards residents in two days flat.',
              },
              {
                icon: Star,
                title: '4.8★ app rating',
                desc: 'Rated by 50,000+ residents across iOS and Android stores.',
              },
              {
                icon: Shield,
                title: 'Bank-grade security',
                desc: '256-bit encryption, GDPR compliant, and full audit trails.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card card-hover p-6 flex items-start gap-4"
              >
                <div className="icon-circle flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-charcoal-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <CTABanner
        title="See every feature in action"
        description="Book a personalized demo and our team will walk you through how AiraNexus fits your community — from billing to gate security."
        primaryAction={{ label: 'Book a Free Demo', to: '/request-demo' }}
        secondaryAction={{ label: 'View Pricing', to: '/pricing' }}
      />
    </div>
  );
}
