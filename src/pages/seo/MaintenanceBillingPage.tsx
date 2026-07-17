import { motion } from 'framer-motion'
import { BarChart3, Bell, CreditCard, FileText, Wallet, Zap } from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FeatureCard from '../../components/ui/FeatureCard'
import StatCard from '../../components/ui/StatCard'
import FAQAccordion, { type FAQItem } from '../../components/ui/FAQAccordion'
import CTABanner from '../../components/ui/CTABanner'

const features = [
  { icon: CreditCard, title: 'Automated Invoicing', description: 'Generate invoices for every unit automatically based on configurable billing slabs.' },
  { icon: Bell, title: 'Smart Reminders', description: 'Escalating reminders via email, SMS, and WhatsApp before and after due dates.' },
  { icon: Wallet, title: 'UPI & Card Payments', description: 'Residents pay via any UPI app, credit/debit card, or netbanking with instant settlement.' },
  { icon: FileText, title: 'Auto-Receipts', description: 'GST-compliant receipts generated instantly and emailed to residents.' },
  { icon: BarChart3, title: 'Arrears Dashboard', description: 'Live view of collected, pending, and overdue amounts with unit-level drill-down.' },
  { icon: Zap, title: 'Late Fee Automation', description: 'Configurable late fees applied automatically to overdue accounts.' },
]

const benefits = [
  { title: '40% faster collections', description: 'Automated reminders and one-tap payments dramatically reduce time-to-collect.' },
  { title: "70% less follow-up", description: "The platform chases defaulters so your committee doesn't have to." },
  { title: 'Zero manual invoices', description: 'Every invoice is generated, sent, and tracked automatically.' },
]

const faqs: FAQItem[] = [
  { question: 'How does automated billing work?', answer: 'You configure billing slabs once (e.g., ₹3,200 per 3BHK). Aira Nexus then generates invoices on your schedule, sends reminders, and tracks payments — all automatically.' },
  { question: 'Can residents pay via UPI?', answer: 'Yes. Residents can pay via any UPI app (GPay, PhonePe, Paytm), credit/debit cards, and netbanking. Payments settle instantly with auto-generated receipts.' },
  { question: 'How are arrears tracked?', answer: 'The arrears dashboard shows collected, pending, and overdue amounts in real time. You can drill down to individual units and send reminders with one click.' },
  { question: 'Can I set different amounts per unit type?', answer: 'Yes. Billing slabs can vary by tower, floor, unit size, or any custom grouping. Surcharges and waivers are also supported.' },
]

export default function MaintenanceBillingPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  return (
    <>
      <SEO
        title="Maintenance Billing Software — Collect Dues on Autopilot"
        description="Aira Nexus maintenance billing software automates invoicing, UPI payments, reminders, and arrears tracking for apartments and societies."
        path="/maintenance-billing-software"
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
              <Wallet className="h-3.5 w-3.5" />
              Maintenance Billing Software
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Collect maintenance dues <span className="text-gradient">on autopilot</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Stop chasing residents for dues. Aira Nexus automates invoicing, payments, reminders,
              and arrears tracking so your committee can focus on the community, not collections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title={<>Everything billing, <span className="text-gradient">automated</span></>}
            description="Six modules that take maintenance billing from painful to effortless."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={(i % 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Benefits"
            badgeVariant="lime"
            title={<>What changes when you <span className="text-gradient">automate billing</span></>}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover"
              >
                <h3 className="text-lg font-semibold text-charcoal-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-white">
        <div className="container-custom grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          <StatCard value="40%" label="Faster collections" />
          <StatCard value="70%" label="Less follow-up" />
          <StatCard value="₹40Cr+" label="Dues processed" />
          <StatCard value="91%" label="On-time rate" />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="FAQ" badgeVariant="cyan" title={<>Billing questions, <span className="text-gradient">answered</span></>} />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Stop chasing dues. Start collecting."
        description="See how Aira Nexus automates your maintenance billing end-to-end. Book a free demo today."
        primaryLabel="Book a Demo"
        secondaryLabel="View Pricing"
      />
    </>
  )
}
