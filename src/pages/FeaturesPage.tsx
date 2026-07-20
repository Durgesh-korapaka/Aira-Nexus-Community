import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Bell,
  CalendarClock,
  ClipboardList,
  CreditCard,
  FileText,
  FolderLock,
  MessageSquare,
  Smartphone,
  Users,
  Vote,
  Building2,
} from 'lucide-react'
import SEO from '../components/SEO'
import FeatureCard from '../components/ui/FeatureCard'
import StatCard from '../components/ui/StatCard'
import CTABanner from '../components/ui/CTABanner'

const FEATURES = [
  { icon: CreditCard, title: 'Automated Billing', description: 'Generate invoices, send reminders via WhatsApp and email, and reconcile payments automatically.' },
  { icon: ClipboardList, title: 'Complaint Tracking', description: 'Log, assign, and resolve resident complaints with full audit trails and SLA timers.' },
  { icon: Users, title: 'Visitor Management', description: 'Pre-approve guests, generate QR passes, and watch gate activity in real time.' },
  { icon: Building2, title: 'Resident Directory', description: 'A secure, searchable directory of residents, owners, tenants, and staff.' },
  { icon: BarChart3, title: 'Financial Reports', description: 'Real-time dashboards for collections, expenses, and balances across all wings.' },
  { icon: Smartphone, title: 'Mobile App', description: 'Native iOS and Android apps for residents, managers, and security staff.' },
  { icon: MessageSquare, title: 'WhatsApp Integration', description: 'Send notices, reminders, and approvals directly through WhatsApp Business API.' },
  { icon: Bell, title: 'Notice Board', description: 'Publish community notices with read receipts, pinning, and category filters.' },
  { icon: CalendarClock, title: 'Amenity Booking', description: 'Residents book gym, pool, and clubhouse slots with conflict-free calendars.' },
  { icon: Vote, title: 'Polls & Voting', description: 'Run committee elections and quick polls with tamper-proof results.' },
  { icon: FolderLock, title: 'Document Storage', description: 'Central, permission-controlled storage for bylaws, invoices, and audit files.' },
  { icon: FileText, title: 'Vendor Management', description: 'Track contracts, ratings, and payments for housekeeping, security, and vendors.' },
]

const DEEP_DIVES = [
  {
    title: 'Billing that runs itself',
    description: 'Set up your maintenance schedule once and AiraNexus handles invoice generation, reminders, late fees, and reconciliation. Residents pay via UPI, cards, or netbanking — and you see the money in your account, categorized, in real time.',
    points: ['Auto-invoices on your schedule', 'WhatsApp + email reminders', 'UPI, cards, netbanking, wallets', 'Auto-reconciliation with bank feeds'],
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: CreditCard,
  },
  {
    title: 'A gate that never sleeps',
    description: 'Security staff get a purpose-built console for visitor check-ins, delivery approvals, and staff attendance. Residents pre-approve guests from the app and get instant alerts when someone arrives — no phone calls required.',
    points: ['QR-based visitor passes', 'Real-time gate dashboard', 'Delivery & cab approval flow', 'Staff attendance and payroll'],
    image: 'https://images.pexels.com/photos/8018847/pexels-photo-8018847.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Users,
  },
  {
    title: 'Reports your auditor will love',
    description: 'Every rupee in and out is categorized, timestamped, and exportable. Generate balance sheets, expense breakdowns, and arrears reports in one click — ready for the AGM or your auditor.',
    points: ['One-click AGM reports', 'Wing-wise expense breakdown', 'Arrears & defaulters list', 'Export to PDF, Excel, or Tally'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: BarChart3,
  },
]

const STATS = [
  { value: '12', label: 'Integrated modules' },
  { value: '7 days', label: 'Average onboarding' },
  { value: '4.8/5', label: 'Average app rating' },
  { value: '99.9%', label: 'Platform uptime' },
]

export default function FeaturesPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  return (
    <>
      <SEO
        title="Features — Community Management Tools"
        description="Explore AiraNexus features: automated billing, complaint tracking, visitor management, resident directory, financial reports, mobile app, and more."
        path="/features"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="badge-primary">Features</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              One platform, <span className="text-gradient">every workflow</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Twelve integrated modules that replace the patchwork of spreadsheets, WhatsApp groups,
              and legacy software your community runs on today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={(i % 3) * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep dives */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom space-y-20 lg:space-y-28">
          {DEEP_DIVES.map((d, i) => {
            const reversed = i % 2 === 1
            return (
              <div key={d.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={reversed ? 'lg:order-2' : ''}
                >
                  <div className="icon-circle-lg">
                    <d.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">{d.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-charcoal-600 text-pretty">{d.description}</p>
                  <ul className="mt-6 space-y-3">
                    {d.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-charcoal-700">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={reversed ? 'lg:order-1' : ''}
                >
                  <div className="overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
                    <img
                      src={d.image}
                      alt={d.title}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-white py-12">
        <div className="container-custom grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.05} />
          ))}
        </div>
      </section>

      <CTABanner
        title="See AiraNexus in action"
        description="Book a 30-minute demo and we'll tailor it to your community's exact needs."
      />
    </>
  )
}
