import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Quote,
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

const STATS = [
  { value: '500+', label: 'Communities' },
  { value: '50K+', label: 'Residents' },
  { value: '40%', label: 'Better Collections' },
  { value: '99.9%', label: 'Uptime' },
]

const FEATURES = [
  { icon: CreditCard, title: 'Automated Billing', description: 'Generate invoices, send reminders, and collect maintenance dues online with auto-reconciliation.' },
  { icon: ClipboardList, title: 'Complaint Tracking', description: 'Log, assign, and resolve resident complaints with full audit trails and SLA tracking.' },
  { icon: Users, title: 'Visitor Management', description: 'Pre-approve guests, generate QR passes, and watch gate activity in real time.' },
  { icon: Building2, title: 'Resident Directory', description: 'A secure, searchable directory of residents, owners, tenants, and staff.' },
  { icon: BarChart3, title: 'Financial Reports', description: 'Real-time dashboards for collections, expenses, and balances across all wings.' },
  { icon: Smartphone, title: 'Mobile App', description: 'Native iOS and Android apps for residents, managers, and security staff.' },
]

const STEPS = [
  { icon: MessageSquare, title: 'Talk to us', description: 'Book a demo and share your community’s needs with our product team.' },
  { icon: FileText, title: 'Get set up', description: 'We import your residents, units, and dues — most communities go live in a week.' },
  { icon: LayoutDashboard, title: 'Go live', description: 'Residents download the app, committees get dashboards, security gets a gate console.' },
  { icon: CheckCircle2, title: 'Grow with us', description: 'Add modules, polls, vendors, and amenities as your community evolves.' },
]

const TESTIMONIALS = [
  {
    quote: 'AiraNexus cut our maintenance collection time from weeks to days. The WhatsApp reminders alone paid for the platform.',
    name: 'Priya Sharma',
    role: 'Treasurer, Lakeview Residency',
  },
  {
    quote: 'Our residents finally have one app for everything — visitors, complaints, dues, and notices. Support is genuinely responsive.',
    name: 'Rahul Mehta',
    role: 'Secretary, Palm Grove Apartments',
  },
  {
    quote: 'The financial dashboards are the best I’ve seen in any society tool. Committee meetings are 30 minutes shorter.',
    name: 'Anjali Nair',
    role: 'Manager, Greenfield Estates',
  },
]

export default function HomePage() {
  return (
    <>
      <SEO
        title="AiraNexus — Society & Apartment Management Software"
        description="AI-powered community management platform for apartments, gated communities, and residential complexes. Automate billing, complaints, visitors, and communications."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="blob -right-20 top-10 h-72 w-72 bg-primary-200/30" aria-hidden="true" />
        <div className="blob -left-20 top-32 h-80 w-80 bg-cyan-200/20" aria-hidden="true" />

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="badge-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
              AI-Powered Platform
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              Community management, <span className="text-gradient">reimagined.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              AiraNexus brings billing, complaints, visitors, and resident communication into one
              beautiful platform — so your committee can spend less time on spreadsheets and more
              time on the community.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/request-demo" className="btn-primary px-6 py-3.5 text-base">
                Book a Demo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/features" className="btn-ghost px-5 py-3.5 text-base">
                Explore Features
              </Link>
            </div>
          </motion.div>

          {/* Product mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="relative mx-auto mt-16 max-w-5xl"
          >
            <div className="overflow-hidden rounded-2xl border border-charcoal-100 bg-white shadow-elevated">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-charcoal-100 bg-charcoal-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-green-400" aria-hidden="true" />
                </div>
                <div className="mx-auto hidden w-full max-w-xs rounded-md bg-white px-3 py-1 text-center text-xs text-charcoal-400 sm:block">
                  app.airanexus.com/dashboard
                </div>
              </div>

              {/* Dashboard body */}
              <div className="grid grid-cols-12">
                {/* Sidebar */}
                <aside className="col-span-3 hidden border-r border-charcoal-100 bg-charcoal-50/60 p-4 md:block">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-lg bg-brand-gradient" aria-hidden="true" />
                    <span className="text-sm font-semibold text-charcoal-900">AiraNexus</span>
                  </div>
                  <ul className="mt-5 space-y-1 text-xs text-charcoal-500">
                    {['Dashboard', 'Billing', 'Complaints', 'Visitors', 'Residents', 'Reports'].map((item, i) => (
                      <li
                        key={item}
                        className={`rounded-md px-2.5 py-2 ${i === 0 ? 'bg-primary-50 font-medium text-primary-700' : ''}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </aside>

                {/* Main */}
                <div className="col-span-12 p-5 md:col-span-9 md:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-charcoal-400">Welcome back, Priya</p>
                      <h3 className="text-lg font-semibold text-charcoal-900">Community Overview</h3>
                    </div>
                    <div className="hidden gap-2 sm:flex">
                      <span className="badge-primary">Live</span>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {[
                      { label: 'Collected', value: '₹4.2L', icon: Wallet, tone: 'text-green-600' },
                      { label: 'Pending', value: '₹86K', icon: CreditCard, tone: 'text-amber-600' },
                      { label: 'Open tickets', value: '12', icon: ClipboardList, tone: 'text-primary-600' },
                      { label: 'Visitors today', value: '38', icon: Users, tone: 'text-cyan-600' },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-charcoal-100 bg-white p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-2xs font-medium uppercase tracking-wide text-charcoal-400">{s.label}</span>
                          <s.icon className={`h-4 w-4 ${s.tone}`} aria-hidden="true" />
                        </div>
                        <p className="mt-1 text-xl font-bold text-charcoal-900">{s.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      { t: 'Maintenance — Tower A', s: 'Paid', tone: 'text-green-600' },
                      { t: 'Visitor pass — Amazon delivery', s: 'Approved', tone: 'text-primary-600' },
                      { t: 'Complaint — Lift 2 service', s: 'In progress', tone: 'text-amber-600' },
                    ].map((row) => (
                      <div
                        key={row.t}
                        className="flex items-center justify-between rounded-lg border border-charcoal-100 bg-white px-3 py-2.5 text-xs"
                      >
                        <span className="text-charcoal-700">{row.t}</span>
                        <span className={`font-medium ${row.tone}`}>{row.s}</span>
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
      <section className="border-y border-charcoal-100 bg-white py-12">
        <div className="container-custom grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            badgeVariant="primary"
            title={<>Everything your community needs, <span className="text-gradient">in one place</span></>}
            description="From billing to visitor passes, AiraNexus replaces the patchwork of spreadsheets, WhatsApp groups, and legacy software."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={i * 0.06} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/features" className="btn-link text-base">
              See all features
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            badge="How it works"
            badgeVariant="cyan"
            title="Live in a week, not a quarter"
            description="Most communities are fully onboarded within seven days. Here's how."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="relative"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-600 shadow-card">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="mt-4 block text-2xs font-semibold uppercase tracking-wider text-primary-600">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-charcoal-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 text-pretty">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Loved by communities"
            badgeVariant="lime"
            title="Trusted by committees across India"
            description="Real results from real communities using AiraNexus today."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="card-hover flex flex-col"
              >
                <Quote className="h-7 w-7 text-primary-300" aria-hidden="true" />
                <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-700 text-pretty">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 border-t border-charcoal-100 pt-4">
                  <p className="text-sm font-semibold text-charcoal-900">{t.name}</p>
                  <p className="text-xs text-charcoal-500">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
