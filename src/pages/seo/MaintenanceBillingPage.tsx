import { motion } from 'framer-motion';
import { Receipt, CreditCard, Bell, BarChart3, FileText, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FeatureCard from '../../components/ui/FeatureCard';
import StatCard from '../../components/ui/StatCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import CTABanner from '../../components/ui/CTABanner';

const features = [
  { icon: Receipt, title: 'Automated Invoicing', description: 'Generate invoices automatically based on flat size, category, or custom rules — monthly or one-time.' },
  { icon: CreditCard, title: 'Online Payments', description: 'Accept maintenance via UPI, cards, and net banking with instant reconciliation and receipts.' },
  { icon: Bell, title: 'Smart Reminders', description: 'Automated SMS, email, and WhatsApp reminders reduce defaulters and improve on-time collections.' },
  { icon: BarChart3, title: 'Collections Dashboard', description: 'Real-time visibility into collection rates, pending dues, and defaulter lists with trend analysis.' },
  { icon: FileText, title: 'Accounting & Ledger', description: 'Double-entry ledger, balance sheets, and audit-ready financial statements with Tally export.' },
  { icon: CheckCircle2, title: 'GST Compliance', description: 'Generate GST-compliant invoices for societies registered under GST with automatic tax calculation.' },
];

const benefits = [
  'Cut collection time from 45 days to under 10',
  'Improve on-time collection rates to 95%+',
  'Eliminate manual invoice generation',
  'Reduce defaulter chasing with automated reminders',
  'Generate AGM-ready financial reports in one click',
  'Export to Tally or your preferred accounting tool',
];

const stats = [
  { value: '40%', label: 'Better collections' },
  { value: '95%', label: 'On-time rate' },
  { value: '₹50Cr+', label: 'Processed monthly' },
  { value: '500+', label: 'Societies' },
];

const faqs = [
  { question: 'What payment methods does AiraNexus support?', answer: 'We support UPI, credit and debit cards, net banking, and bank transfers. Residents can pay directly from the mobile app.' },
  { question: 'Can I customize maintenance billing rules?', answer: 'Yes, you can bill per flat, per sqft, or with custom categories. One-time charges and penalties are fully supported.' },
  { question: 'How do reminders work?', answer: 'Automated reminders are sent via SMS, email, and WhatsApp at configurable intervals before and after the due date.' },
  { question: 'Can I track defaulters?', answer: 'Yes, the dashboard shows a real-time defaulter list with outstanding amounts and reminder history.' },
  { question: 'Do you support GST invoicing?', answer: 'Yes, AiraNexus generates GST-compliant invoices for registered societies with automatic tax calculation.' },
  { question: 'Can I export to Tally?', answer: 'Yes, one-click Tally export is available on Growth and Enterprise plans.' },
];

export default function MaintenanceBillingPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  return (
    <>
      <SEO
        title="Maintenance Billing Software — AiraNexus"
        description="AiraNexus maintenance billing software automates invoicing, online payments, reminders, and accounting for Indian residential societies. Cut collection time by 60%."
        canonical="https://airanexus.com/maintenance-billing-software"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'AiraNexus Maintenance Billing Software',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          offers: { '@type': 'Offer', price: '2999', priceCurrency: 'INR' },
        }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient pb-20 pt-32 sm:pt-36">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">
              <Receipt className="h-3 w-3" aria-hidden="true" />
              Maintenance Billing Software
            </span>
            <h1 className="mt-6 text-display-lg font-display font-extrabold tracking-tight text-charcoal-900 text-balance">
              Maintenance billing that <span className="text-gradient">gets paid</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Automate invoicing, accept online payments, and chase defaulters on autopilot.
              AiraNexus cuts collection time by 60% for Indian residential societies.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title="Every billing workflow, automated"
            description="Six powerful modules that replace spreadsheets and WhatsApp reminders."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge-lime">Benefits</span>
              <h2 className="mt-4 text-display-sm font-display font-bold tracking-tight text-charcoal-900 text-balance">
                Why societies love our billing
              </h2>
              <ul className="mt-6 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-charcoal-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-4xl border border-charcoal-100 shadow-card-hover"
            >
              <img
                src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maintenance billing with AiraNexus"
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
                className="h-full w-full object-cover"
              />
            </motion.figure>
          </div>
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

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="FAQ" title="Billing questions, answered" />
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to get paid faster?"
        description="See how AiraNexus can cut your collection time by 60%."
      />
    </>
  );
}
