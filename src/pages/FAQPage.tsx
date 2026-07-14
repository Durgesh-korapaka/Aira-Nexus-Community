import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  CreditCard,
  Shield,
  MessageCircle,
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
} from 'lucide-react';
import SEO from '../components/SEO';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTABanner from '../components/ui/CTABanner';

interface FAQPageProps {
  darkMode: boolean;
}

type CategoryId = 'general' | 'billing' | 'technical' | 'support';

interface Category {
  id: CategoryId;
  name: string;
  icon: typeof HelpCircle;
  description: string;
}

const categories: Category[] = [
  { id: 'general', name: 'General', icon: HelpCircle, description: 'Platform overview & getting started' },
  { id: 'billing', name: 'Billing', icon: CreditCard, description: 'Payments, invoices & fees' },
  { id: 'technical', name: 'Technical', icon: Shield, description: 'Security, API & data' },
  { id: 'support', name: 'Support', icon: MessageCircle, description: 'Help, training & feedback' },
];

const faqs: Record<CategoryId, { q: string; a: string }[]> = {
  general: [
    {
      q: 'What is AiraNexus?',
      a: 'AiraNexus is a comprehensive community management platform designed for apartments, gated communities, villa townships, and resident welfare associations. It handles maintenance billing, complaint management, visitor tracking, resident communication, and more from a single platform.',
    },
    {
      q: 'How quickly can we implement AiraNexus?',
      a: 'Most communities go live within 24-48 hours. Our onboarding team handles data migration, staff training, and resident onboarding assistance. For larger communities (200+ units), the process may take up to a week.',
    },
    {
      q: 'Is there a mobile app?',
      a: 'Yes! We have native apps for both iOS and Android. Residents can pay bills, raise complaints, book amenities, and receive notifications directly on their phones. Committee members get a special Admin app with dashboards, approvals, and reports on the go.',
    },
    {
      q: 'Do you support WhatsApp notifications?',
      a: 'Yes! WhatsApp integration is included in Growth and Enterprise plans. You can send payment reminders, complaint updates, notices, and visitor notifications via WhatsApp — a game-changer for resident engagement.',
    },
  ],
  billing: [
    {
      q: 'Can residents pay online?',
      a: 'Absolutely. Residents can pay maintenance dues online via UPI, credit/debit cards, or net banking directly through the resident app or web portal. Payments are processed securely and reconciled automatically in your dashboard.',
    },
    {
      q: 'What payment methods are supported?',
      a: 'We support all major credit/debit cards, UPI, net banking, and automatic bank transfers. We integrate with leading gateways including Razorpay, PayU, HDFC, and ICICI. Enterprise customers can also pay via invoice with NET 30 terms.',
    },
    {
      q: 'Can we customize late fees?',
      a: 'Yes. Committee members can configure custom late-fee rules — flat amounts or percentage-based, with grace periods — directly from the billing settings. Rules can vary by tower, block, or unit type as needed.',
    },
    {
      q: 'Are invoices GST-compliant?',
      a: 'Yes. All invoices generated through AiraNexus are GST-compliant with your registered GSTIN, tax breakdowns, and sequential invoice numbering. You can download GST-compliant invoices and export summary reports for filing.',
    },
  ],
  technical: [
    {
      q: 'Is my data secure?',
      a: 'We take security seriously. All data is encrypted at rest and in transit using AES-256 encryption. We are SOC 2 Type II compliant and undergo regular security audits. For Indian customers, data is stored in the AWS Mumbai region; international customers use AWS Singapore.',
    },
    {
      q: 'Do you offer API access?',
      a: 'Yes, API access is available on Growth and Enterprise plans. Our REST API enables integration with accounting software, CRM systems, and custom applications. Enterprise plans also support custom integrations and webhooks.',
    },
    {
      q: 'What about data backup?',
      a: 'Your data is backed up continuously with point-in-time recovery. We maintain encrypted daily backups with multi-region replication and a 99.9% uptime SLA. Recovery point objective (RPO) is under 15 minutes.',
    },
    {
      q: 'Can we export our data?',
      a: 'Yes. You can export residents, transactions, invoices, complaints, and reports anytime as CSV or Excel. If you cancel, we retain your data for 90 days — after which all data is permanently deleted at your request.',
    },
  ],
  support: [
    {
      q: 'What support do you offer?',
      a: 'Starter plans include email support (24-hour response). Growth plans get priority support with a 4-hour response time. Enterprise customers have 24/7 phone support and a dedicated account manager.',
    },
    {
      q: 'Is training included?',
      a: 'Yes! We provide free online training for all plans. Growth and Enterprise customers get live training sessions, and Enterprise customers receive on-site training at their location.',
    },
    {
      q: 'How do we report issues?',
      a: 'You can report issues through the admin dashboard, email us at support@airanexus.com, or call our support line. Critical issues are escalated immediately to our engineering team.',
    },
    {
      q: 'Can we request new features?',
      a: 'Absolutely. We love customer feedback. Submit feature requests from the dashboard, and our product team reviews every submission. Enterprise customers get a prioritized roadmap review each quarter.',
    },
  ],
};

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Reach our team within 24 hours',
    action: 'support@airanexus.com',
    href: 'mailto:support@airanexus.com',
  },
  {
    icon: Phone,
    title: 'Call Sales',
    description: 'Mon–Sat, 9AM–6PM IST',
    action: '+91 80 4567 8900',
    href: 'tel:+918045678900',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Us',
    description: 'Quick answers, right on your phone',
    action: 'Chat now',
    href: 'https://wa.me/911234567890',
  },
];

export default function FAQPage({ darkMode: _darkMode }: FAQPageProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('general');

  const activeFaqs = useMemo(() => faqs[activeCategory], [activeCategory]);

  const faqJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: Object.values(faqs)
        .flat()
        .map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
    }),
    [],
  );

  return (
    <div>
      <SEO
        title="FAQ — AiraNexus Community Management"
        description="Find answers to common questions about AiraNexus — pricing, billing, security, API access, WhatsApp integration, training, and support."
        path="/faq"
      />

      {/* Hero */}
      <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-24 overflow-hidden bg-hero-gradient">
        <div className="blob w-[500px] h-[500px] bg-primary-400 -top-32 -right-32 animate-float" />
        <div className="blob w-[400px] h-[400px] bg-lime-400 -bottom-32 -left-32 animate-float-slow" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="badge badge-primary mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Help Center
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Frequently Asked{' '}
              <span className="text-gradient">Questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              Everything you need to know about AiraNexus — from billing and security to
              integrations and support. Can&apos;t find an answer? We&apos;re a message away.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category tabs + FAQ accordion */}
      <section className="section-tight bg-greenish-50">
        <div className="container-custom">
          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat, i) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={isActive}
                  className={`group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ease-smooth active:scale-[0.98] ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-teal'
                      : 'bg-white text-charcoal-600 border border-charcoal-200 shadow-soft hover:border-primary-300 hover:text-primary-600'
                  }`}
                >
                  <cat.icon className="w-4 h-4" aria-hidden="true" />
                  {cat.name}
                </motion.button>
              );
            })}
          </div>

          {/* Active category heading */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal-900">
                {categories.find((c) => c.id === activeCategory)?.name} questions
              </h2>
              <p className="mt-2 text-charcoal-500">
                {categories.find((c) => c.id === activeCategory)?.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Accordion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <FAQAccordion items={activeFaqs} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card p-8 sm:p-12"
            >
              <div className="blob w-[300px] h-[300px] bg-primary-200 -top-20 -right-20" />
              <div className="blob w-[250px] h-[250px] bg-lime-200 -bottom-20 -left-20" />

              <div className="relative z-10 text-center mb-10">
                <div className="icon-circle-lg mx-auto mb-6">
                  <Sparkles className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-charcoal-900 text-balance">
                  Still have questions?
                </h2>
                <p className="mt-3 text-charcoal-500 max-w-xl mx-auto text-pretty">
                  Our team is here to help. Reach out and we&apos;ll get you the answers you need —
                  usually within a few hours.
                </p>
              </div>

              <div className="relative z-10 grid sm:grid-cols-3 gap-4">
                {contactOptions.map((option, i) => (
                  <motion.a
                    key={option.title}
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="card card-hover p-6 flex flex-col items-center text-center group"
                  >
                    <div className="icon-circle mb-4 group-hover:scale-110">
                      <option.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-charcoal-900 mb-1">{option.title}</h3>
                    <p className="text-sm text-charcoal-500 mb-3">{option.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition-colors">
                      {option.action}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="relative z-10 mt-10 text-center">
                <Link to="/contact" className="btn-primary">
                  Contact Support
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <CTABanner
        title="Ready to see AiraNexus in action?"
        description="Join 500+ communities already managing smarter with AiraNexus. Book a personalized demo and we'll tailor it to your community."
        primaryAction={{ label: 'Book a Free Demo', to: '/request-demo' }}
        secondaryAction={{ label: 'View Pricing', to: '/pricing' }}
      />

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
}
