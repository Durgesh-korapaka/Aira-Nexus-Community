import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  CreditCard,
  LayoutDashboard,
  MessageSquare,
  Smartphone,
  Star,
  Users,
  Wallet,
} from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
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
]

const steps = [
  { number: '01', title: 'Onboard your community', description: 'Import residents, units, and dues in minutes with our guided setup wizard.' },
  { number: '02', title: 'Configure billing & access', description: 'Set maintenance slabs, payment gateways, and visitor entry rules.' },
  { number: '03', title: 'Invite residents & staff', description: 'Send branded invites. Residents download the app and verify in seconds.' },
  { number: '04', title: 'Go live & automate', description: 'Billing, complaints, and visitor logs run on autopilot while you track everything.' },
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Secretary, Prestige Lakeside',
    quote: 'We cut billing follow-ups by 70%. Residents pay on time and the dashboard tells us everything at a glance.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
  {
    name: 'Priya Sharma',
    role: 'Facility Manager, Sobha Dream Acres',
    quote: 'Complaint resolution used to take days. Now residents track everything on the app and we close tickets 3x faster.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
  {
    name: 'Amit Patel',
    role: 'Treasurer, Brigade Gateway',
    quote: 'The financial reports are a dream. Our AGM prep that took two weeks now takes an afternoon.',
    avatar: 'https://images.pexels.com/photos/7640/pexels-photo-7640.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
]

export default function HomePage() {
  return (
    <>
      <SEO
        title="Aira Nexus — AI-Powered Community Management Platform"
        description="Aira Nexus is the all-in-one platform for apartment and society management: automated billing, complaints, visitor tracking, and financial reporting — powered by AI."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative pb-20 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="badge-primary">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary-500" />
              AI-Powered Platform
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl text-balance">
              Community management, <span className="text-gradient">reimagined.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Automate billing, complaints, visitors, and finances for your apartment or society —
              all in one beautifully simple platform that residents and managers actually love.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/request-demo" className="btn-primary">
                Book a Free Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/features" className="btn-secondary">
                Explore Features
              </Link>
            </div>
          </motion.div>

          {/* Product mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-14 max-w-5xl"
          >
            <div className="overflow-hidden rounded-2xl border border-charcoal-200 bg-white shadow-elevated">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-charcoal-100 bg-charcoal-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs text-charcoal-400">
                  <span className="h-2 w-2 rounded-full bg-primary-400" />
                  app.airanexus.com
                </div>
              </div>
              {/* Dashboard */}
              <div className="flex min-h-[380px]">
                {/* Sidebar */}
                <div className="hidden w-48 shrink-0 border-r border-charcoal-100 bg-charcoal-50/50 p-4 sm:block">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient text-white">
                      <LayoutDashboard className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-charcoal-900">Aira Nexus</span>
                  </div>
                  <div className="mt-6 space-y-1">
                    {['Dashboard', 'Billing', 'Complaints', 'Visitors', 'Residents', 'Reports'].map((item, i) => (
                      <div
                        key={item}
                        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium ${
                          i === 0 ? 'bg-primary-50 text-primary-700' : 'text-charcoal-500'
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Main */}
                <div className="flex-1 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-charcoal-400">Welcome back, Priya</p>
                      <p className="text-base font-semibold text-charcoal-900">Community Overview</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4 text-charcoal-400" />
                      <div className="h-8 w-8 rounded-full bg-brand-gradient" />
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {[
                      { label: 'Collected', value: '₹4.8L', icon: Wallet, color: 'text-greenish-600' },
                      { label: 'Pending', value: '₹62K', icon: CreditCard, color: 'text-amber-600' },
                      { label: 'Open Tickets', value: '12', icon: MessageSquare, color: 'text-primary-600' },
                      { label: 'Visitors', value: '48', icon: Users, color: 'text-cyan-600' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-xl border border-charcoal-100 bg-white p-3">
                        <stat.icon className={`h-4 w-4 ${stat.color}`} />
                        <p className="mt-2 text-lg font-bold text-charcoal-900">{stat.value}</p>
                        <p className="text-xs text-charcoal-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2">
                    {[
                      { name: 'Tower A · 302', status: 'Paid', amount: '₹3,200', tone: 'text-greenish-600 bg-greenish-50' },
                      { name: 'Tower B · 104', status: 'Pending', amount: '₹3,200', tone: 'text-amber-600 bg-amber-50' },
                      { name: 'Tower C · 505', status: 'Paid', amount: '₹3,200', tone: 'text-greenish-600 bg-greenish-50' },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className="flex items-center justify-between rounded-lg border border-charcoal-100 px-3 py-2.5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-lg bg-charcoal-100" />
                          <div>
                            <p className="text-xs font-semibold text-charcoal-900">{row.name}</p>
                            <p className="text-xs text-charcoal-400">Maintenance · Jan</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${row.tone}`}>
                            {row.status}
                          </span>
                          <span className="text-xs font-semibold text-charcoal-700">{row.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-charcoal-100 bg-white">
        <div className="container-custom grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          <StatCard value="500+" label="Communities" delay={0} />
          <StatCard value="50K+" label="Residents" delay={0.1} />
          <StatCard value="40%" label="Better Collections" delay={0.2} />
          <StatCard value="99.9%" label="Uptime" delay={0.3} />
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title={<>Everything your community needs, <span className="text-gradient">in one place</span></>}
            description="From billing to visitor logs, Aira Nexus replaces 5+ disconnected tools with a single, integrated platform."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="How it works"
            badgeVariant="cyan"
            title={<>Up and running in <span className="text-gradient">four steps</span></>}
            description="No lengthy implementations. No IT team required. Your community goes live in days, not months."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="card-hover">
                  <span className="text-3xl font-bold text-primary-200">{step.number}</span>
                  <h3 className="mt-3 text-lg font-semibold text-charcoal-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            badgeVariant="lime"
            title={<>Loved by committees and <span className="text-gradient">residents alike</span></>}
            description="Real communities. Real results. Here's what managers say after switching to Aira Nexus."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-700">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="40"
                    height="40"
                  />
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">{t.name}</p>
                    <p className="text-xs text-charcoal-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
