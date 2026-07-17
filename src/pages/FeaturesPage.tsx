import { motion } from 'framer-motion'
import {
  BarChart3,
  Bell,
  Building2,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Smartphone,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react'
import SEO from '../components/SEO'
import FeatureCard from '../components/ui/FeatureCard'
import StatCard from '../components/ui/StatCard'
import CTABanner from '../components/ui/CTABanner'

const features = [
  { icon: CreditCard, title: 'Automated Billing', description: 'Collect maintenance dues via UPI, cards, and netbanking with automatic reminders and receipts.' },
  { icon: MessageSquare, title: 'Complaint Tracking', description: 'Log, assign, and resolve resident complaints with full status tracking and SLA timers.' },
  { icon: Users, title: 'Visitor Management', description: 'Pre-approve guests, generate QR passes, and log every entry with guard-side validation.' },
  { icon: Building2, title: 'Resident Directory', description: 'A verified, searchable directory of owners and tenants with contact and vehicle details.' },
  { icon: BarChart3, title: 'Financial Reports', description: 'Real-time income, expense, and arrears dashboards exportable to PDF and Excel.' },
  { icon: Smartphone, title: 'Mobile App', description: 'Native iOS and Android apps for residents and managers with push notifications.' },
  { icon: MessageSquare, title: 'WhatsApp Integration', description: 'Send billing reminders and notices directly through WhatsApp where residents already are.' },
  { icon: Bell, title: 'Notice Board', description: 'Publish circulars, meeting minutes, and announcements with read-receipts and acknowledgements.' },
  { icon: Calendar, title: 'Amenity Booking', description: 'Book clubhouses, pools, and sports courts with conflict-free slot management.' },
  { icon: Wallet, title: 'Polls & Voting', description: 'Run transparent committee elections and resident polls with tamper-proof results.' },
  { icon: FileText, title: 'Document Storage', description: 'Central, permissioned storage for bylaws, invoices, and compliance records with version history.' },
  { icon: Wrench, title: 'Vendor Management', description: 'Track vendors, contracts, AMC schedules, and work orders in a single register.' },
]

const deepDives = [
  {
    title: 'Automated billing that actually collects',
    description: 'Set up maintenance slabs once and let Aira Nexus handle the rest. Residents get reminders via email, SMS, and WhatsApp. Payments settle instantly with auto-generated receipts and a live arrears dashboard.',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['UPI, cards & netbanking', 'Auto reminders & receipts', 'Live arrears tracking'],
    stats: [
      { value: '40%', label: 'Faster collections' },
      { value: '70%', label: 'Less follow-up' },
    ],
  },
  {
    title: 'Complaints resolved, not just logged',
    description: 'Every complaint gets a ticket, an owner, and an SLA. Residents track progress on the app; managers get a unified queue with priorities, categories, and auto-escalation when deadlines slip.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['SLA timers & escalation', 'Photo & video attachments', 'Resident-visible status'],
    stats: [
      { value: '3x', label: 'Faster resolution' },
      { value: '92%', label: 'First-touch fix' },
    ],
  },
  {
    title: 'Visitor management without the queue',
    description: 'Pre-approve guests with a QR pass. Guards validate entries in seconds. Every visit is logged with a timestamp and photo, so you always know who is in the building.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['QR-based guest passes', 'Guard-side validation app', 'Live visitor log'],
    stats: [
      { value: '<5s', label: 'Entry validation' },
      { value: '100%', label: 'Audit trail' },
    ],
  },
]

export default function FeaturesPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  return (
    <>
      <SEO
        title="Features — Everything You Need to Run a Community"
        description="Explore Aira Nexus features: automated billing, complaint tracking, visitor management, resident directory, financial reports, mobile app, and more."
        path="/features"
      />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom pb-16 text-center lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <span className="badge-primary">
              <LayoutDashboard className="h-3.5 w-3.5" />
              Platform Features
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              One platform. <span className="text-gradient">Every workflow.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Twelve powerful modules that replace the patchwork of spreadsheets, WhatsApp groups,
              and paper notices your community relies on today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={(i % 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Deep dives */}
      {deepDives.map((dive, i) => (
        <section key={dive.title} className={`section-padding ${i % 2 === 1 ? 'bg-charcoal-50/40' : ''}`}>
          <div className="container-custom">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl text-balance">
                  {dive.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal-600 text-pretty">
                  {dive.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {dive.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                        <span className="text-xs">✓</span>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  {dive.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                      <p className="text-sm text-charcoal-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={i % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="overflow-hidden rounded-2xl shadow-elevated">
                  <img
                    src={dive.image}
                    alt={dive.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="500"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-white">
        <div className="container-custom grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          <StatCard value="12" label="Integrated modules" />
          <StatCard value="5+" label="Tools replaced" />
          <StatCard value="2x" label="Faster onboarding" />
          <StatCard value="99.9%" label="Platform uptime" />
        </div>
      </section>

      <CTABanner
        title="See these features in action"
        description="Book a walkthrough tailored to your community's size and needs. We'll show you exactly how Aira Nexus fits."
        primaryLabel="Book a Demo"
        secondaryLabel="Compare Pricing"
      />
    </>
  )
}
