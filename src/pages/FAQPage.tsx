import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion, { type FAQItem } from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'

const CATEGORIES = ['General', 'Billing', 'Technical', 'Support'] as const
type Category = (typeof CATEGORIES)[number]

const FAQS: Record<Category, FAQItem[]> = {
  General: [
    { question: 'What is AiraNexus?', answer: 'AiraNexus is an AI-powered community management platform that brings billing, complaints, visitors, communications, and reporting into one place for apartments, gated communities, and residential complexes.' },
    { question: 'Who is AiraNexus for?', answer: 'Committee members, community managers, and residents of any residential community — from 40-unit villa layouts to 1,200-flat townships. Builders and developers also use it to hand over a ready-to-run platform on possession.' },
    { question: 'How long does onboarding take?', answer: 'Most communities go live within a week. We handle the import of residents, units, and dues, and train your committee and security staff.' },
    { question: 'Do you offer a free trial?', answer: 'Yes. Every plan starts with a 14-day free trial with no credit card required. You can explore the full Growth plan during your trial.' },
  ],
  Billing: [
    { question: 'How are maintenance dues collected?', answer: 'AiraNexus generates invoices on your schedule, sends WhatsApp and email reminders, and lets residents pay via UPI, cards, netbanking, or wallets. Payments are auto-reconciled with your bank feed.' },
    { question: 'Can I charge different amounts per wing or flat type?', answer: 'Yes. You can configure per-square-foot or flat-rate billing, wing-wise schedules, and one-time charges for repairs or events.' },
    { question: 'What happens with defaulters?', answer: 'Automated reminders escalate on your schedule. You can apply late fees, generate a defaulters list, and export arrears for the AGM.' },
    { question: 'Are GST invoices provided?', answer: 'Yes. We generate GST-compliant invoices for all business payments, and residents receive payment receipts automatically.' },
  ],
  Technical: [
    { question: 'Is there a mobile app?', answer: 'Yes — native iOS and Android apps for residents, managers, and security staff, plus a responsive web dashboard for committees.' },
    { question: 'Does AiraNexus integrate with WhatsApp?', answer: 'Yes. We use the WhatsApp Business API for notices, reminders, and approval workflows so residents get messages where they already are.' },
    { question: 'How secure is resident data?', answer: 'Data is encrypted in transit and at rest, access is role-based, and we are SOC 2-aligned. We never sell resident data to third parties.' },
    { question: 'Can I export my data?', answer: 'Absolutely. You can export residents, transactions, and reports to PDF, Excel, or Tally at any time. Your data is yours.' },
  ],
  Support: [
    { question: 'How do I reach support?', answer: 'Email hello@airanexus.com, call +91 80 4567 8900, or use the WhatsApp widget on any page. Growth and Enterprise plans include priority and dedicated support respectively.' },
    { question: 'Do you train our committee and staff?', answer: 'Yes. Onboarding includes live training sessions for committee members, managers, and security staff, plus a self-serve knowledge base.' },
    { question: 'What are your support hours?', answer: 'Email and chat support is available Monday to Saturday, 9am–8pm IST. Enterprise plans include extended hours and SLAs.' },
    { question: 'Can I request a feature?', answer: 'Please do. We ship every two weeks and prioritize based on community feedback. Email us or use the in-app feedback form.' },
  ],
}

export default function FAQPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  const [active, setActive] = useState<Category>('General')

  return (
    <>
      <SEO
        title="FAQ — Answers to common questions"
        description="Frequently asked questions about AiraNexus — pricing, billing, onboarding, security, support, and more."
        path="/faq"
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
            <span className="badge-primary">FAQ</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              Questions? <span className="text-gradient">We’ve got answers.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Everything you need to know about AiraNexus. Can’t find your answer? Reach out — we’re
              happy to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="border-b border-charcoal-100 bg-white">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center justify-center gap-2" role="tablist">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  active === c
                    ? 'bg-primary-500 text-white'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            badge={active}
            badgeVariant="cyan"
            title={`${active} questions`}
            align="left"
          />
          <div className="mt-10">
            <FAQAccordion items={FAQS[active]} />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-3xl border border-charcoal-100 bg-charcoal-50 p-8 text-center shadow-soft sm:p-12">
            <span className="icon-circle-lg mx-auto"><MessageCircle className="h-6 w-6" aria-hidden="true" /></span>
            <h2 className="mt-5 text-2xl font-bold text-charcoal-900 sm:text-3xl">Still have questions?</h2>
            <p className="mt-3 text-base text-charcoal-600 text-pretty">
              Our team is one message away. We typically respond within one business day.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Contact us <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/request-demo" className="btn-ghost">
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
