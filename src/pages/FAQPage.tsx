import { useState } from 'react'
import { motion } from 'framer-motion'
import { HelpCircle, Mail, MessageSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import FAQAccordion, { type FAQItem } from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'

const categories = ['General', 'Billing', 'Technical', 'Support'] as const
type Category = (typeof categories)[number]

const faqsByCategory: Record<Category, FAQItem[]> = {
  General: [
    {
      question: 'What is Aira Nexus?',
      answer: 'Aira Nexus is an AI-powered community management platform that helps apartments, gated communities, and residential complexes manage billing, complaints, visitors, finances, and communication — all in one place.',
    },
    {
      question: 'How long does it take to set up Aira Nexus?',
      answer: 'Most communities are fully onboarded within 3–5 days. Our guided setup wizard helps you import residents, units, and dues in minutes, and we offer free onboarding support on every plan.',
    },
    {
      question: "Can residents who aren't tech-savvy use the app?",
      answer: 'Absolutely. The resident app is designed to be as simple as a messaging app. Most residents complete their first payment or complaint in under two minutes. We also support WhatsApp-based interactions for those who prefer it.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes — every plan starts with a 14-day free trial with full access to Growth features. No credit card is required to start.',
    },
  ],
  Billing: [
    {
      question: 'What payment methods are supported?',
      answer: 'Residents can pay via UPI (all major apps), credit/debit cards, netbanking, and NEFT/IMPS. Payments settle instantly and receipts are auto-generated.',
    },
    {
      question: 'Can I set different maintenance amounts per tower or unit type?',
      answer: 'Yes. Aira Nexus supports flexible billing slabs — you can set different amounts per tower, floor, unit size, or any custom grouping. Surcharges and waivers are also supported.',
    },
    {
      question: 'How are arrears and late payments handled?',
      answer: 'The platform automatically tracks arrears, sends escalating reminders via email, SMS, and WhatsApp, and flags chronic defaulters on the manager dashboard. You can also apply configurable late fees.',
    },
    {
      question: 'Can residents download past invoices and receipts?',
      answer: 'Yes. Every transaction generates a GST-compliant receipt that residents can download anytime from the app or their email. Managers can export all invoices in bulk.',
    },
  ],
  Technical: [
    {
      question: "Is my community's data secure?",
      answer: 'Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We are SOC2-aligned, undergo regular security audits, and never sell or share your data with third parties.',
    },
    {
      question: 'Do I need to install any hardware?',
      answer: 'No. Aira Nexus is a cloud-based platform accessible from any browser or our mobile apps. For visitor management, our guard app works on any Android smartphone — no special hardware required.',
    },
    {
      question: 'Does Aira Nexus integrate with boom barriers or access control systems?',
      answer: "Yes. We have integrations with major boom barrier and access control brands. If you have an existing system, contact us and we'll confirm compatibility.",
    },
    {
      question: 'Is there an API for custom integrations?',
      answer: 'API access is available on the Enterprise plan. You can pull billing data, push notices, and sync resident records with your existing systems via our REST API.',
    },
  ],
  Support: [
    {
      question: 'What support channels are available?',
      answer: 'All plans include email support. Growth plans add priority email and chat. Enterprise plans include a dedicated account manager, phone support, and SLA-backed response times.',
    },
    {
      question: 'What are your support hours?',
      answer: 'Support is available Monday–Saturday, 9:00 AM – 8:00 PM IST. Enterprise customers get 24/7 emergency support for critical issues.',
    },
    {
      question: 'How do I report a bug or request a feature?',
      answer: 'You can report bugs or request features directly from the in-app feedback widget, or by emailing support@airanexus.com. We ship updates weekly and actively incorporate community feedback into our roadmap.',
    },
    {
      question: 'Do you offer training for new committee members?',
      answer: 'Yes. We provide free onboarding training for every new community, plus recorded video tutorials accessible anytime. Enterprise plans include quarterly training sessions for new committee members.',
    },
  ],
}

export default function FAQPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<Category>('General')

  return (
    <>
      <SEO
        title="FAQ — Answers to Common Questions"
        description="Find answers to frequently asked questions about Aira Nexus — billing, setup, security, integrations, and support."
        path="/faq"
      />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom pb-12 text-center lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <span className="badge-primary">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Questions? <span className="text-gradient">We've got answers.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Everything you need to know about Aira Nexus. Can't find what you're looking for? Reach out to our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="border-b border-charcoal-100 bg-white">
        <div className="container-custom flex flex-wrap items-center justify-center gap-2 py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-primary-500 text-white shadow-teal'
                  : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={faqsByCategory[activeCategory]} key={activeCategory} />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl rounded-2xl border border-charcoal-100 bg-charcoal-50/60 p-8 text-center lg:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
              <MessageSquare className="h-7 w-7" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-charcoal-900">Still have questions?</h2>
            <p className="mt-3 text-base text-charcoal-600 text-pretty">
              Our team is happy to help. Reach out and we'll get back within one business day.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                <Mail className="h-4 w-4" />
                Contact Support
              </Link>
              <Link to="/request-demo" className="btn-secondary">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to see Aira Nexus for yourself?"
        description="Book a personalized demo and we'll walk you through the platform tailored to your community."
        primaryLabel="Book a Demo"
        secondaryLabel="View Pricing"
      />
    </>
  )
}
