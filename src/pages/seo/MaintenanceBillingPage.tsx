import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Bell, CheckCircle2, CreditCard, FileText, Receipt, Wallet } from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FeatureCard from '../../components/ui/FeatureCard'
import StatCard from '../../components/ui/StatCard'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CTABanner from '../../components/ui/CTABanner'

const FEATURES = [
  { icon: CreditCard, title: 'Automated invoicing', description: 'Generate maintenance invoices on your schedule — per flat, per wing, or per square foot.' },
  { icon: Bell, title: 'WhatsApp & email reminders', description: 'Automated reminders escalate on your timeline so residents pay before due dates.' },
  { icon: Wallet, title: 'Multiple payment methods', description: 'Accept UPI, cards, netbanking, and wallets. Payments are auto-reconciled with your bank.' },
  { icon: BarChart3, title: 'Real-time collections dashboard', description: 'See collected, pending, and arrears across all wings in real time — no more spreadsheets.' },
  { icon: Receipt, title: 'Late fees & defaulters', description: 'Apply configurable late fees and generate a defaulters list ready for the AGM.' },
  { icon: FileText, title: 'AGM-ready reports', description: 'One-click annual reports, balance sheets, and arrears exports for your auditor.' },
]

const BENEFITS = [
  'Cut collection time from weeks to days',
  'Reduce defaulters by up to 40%',
  'Eliminate manual reconciliation',
  'GST-compliant invoices and receipts',
]

const STATS = [
  { value: '40%', label: 'Fewer defaulters' },
  { value: '7 days', label: 'Avg. collection time' },
  { value: '₹50Cr+', label: 'Processed monthly' },
  { value: '99.9%', label: 'Reconciliation accuracy' },
]

const FAQS = [
  { question: 'How does automated billing work?', answer: 'Configure your schedule and rates once. AiraNexus generates invoices, sends reminders, accepts payments, and reconciles them with your bank feed automatically.' },
  { question: 'Can I charge different amounts per flat type?', answer: 'Yes. Support per-square-foot, flat-rate, wing-wise, and one-time charges for repairs or events — all configurable.' },
  { question: 'What happens with defaulters?', answer: 'Reminders escalate on your schedule. You can apply late fees, generate a defaulters list, and export arrears for the AGM.' },
  { question: 'Are GST invoices provided?', answer: 'Yes. We generate GST-compliant invoices for all business payments, and residents receive payment receipts automatically.' },
]

export default function MaintenanceBillingPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  return (
    <>
      <SEO
        title="Maintenance Billing Software"
        description="AiraNexus maintenance billing software automates invoicing, reminders, payments, and reconciliation for residential communities."
        path="/maintenance-billing-software"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">Maintenance Billing Software</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              Maintenance billing, <span className="text-gradient">on autopilot</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Generate invoices, send reminders, collect payments, and reconcile — all automated, all
              in one place.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/request-demo" className="btn-primary px-6 py-3.5 text-base">Book a Demo <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link to="/pricing" className="btn-ghost px-5 py-3.5 text-base">See Pricing</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Features" title={<>Billing that <span className="text-gradient">runs itself</span></>} description="From invoicing to reconciliation, AiraNexus handles the entire billing lifecycle." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={(i % 3) * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span className="badge-lime">Benefits</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">Why treasurers love AiraNexus</h2>
            <ul className="mt-6 space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-charcoal-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
              <img src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Maintenance billing" loading="lazy" decoding="async" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-white py-12">
        <div className="container-custom grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.05} />)}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="FAQ" badgeVariant="cyan" title="Billing FAQ" align="left" />
          <div className="mt-10"><FAQAccordion items={FAQS} /></div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
