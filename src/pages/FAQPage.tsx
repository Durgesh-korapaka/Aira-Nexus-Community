import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LifeBuoy, CreditCard, Cpu, Headphones } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTABanner from '../components/ui/CTABanner';

const categories = [
  { key: 'General', icon: LifeBuoy },
  { key: 'Billing', icon: CreditCard },
  { key: 'Technical', icon: Cpu },
  { key: 'Support', icon: Headphones },
];

const allFaqs: Record<string, { question: string; answer: string }[]> = {
  General: [
    { question: 'What is AiraNexus?', answer: 'AiraNexus is an all-in-one society and apartment management platform built for Indian residential communities. It handles billing, visitor management, helpdesk, amenities, accounting, and communications in one place.' },
    { question: 'Who is AiraNexus for?', answer: 'AiraNexus is designed for RWAs, managing committees, facility managers, security teams, and residents of gated communities, apartment complexes, and cooperative housing societies across India.' },
    { question: 'How long does it take to get started?', answer: 'Most communities are live within 2–3 days. Our guided onboarding wizard helps you import residents, flats, and dues in minutes.' },
    { question: 'Do you offer a free trial?', answer: 'Yes, every plan starts with a 14-day free trial. No credit card required.' },
    { question: 'Can residents use it on their phones?', answer: 'Yes, residents get a native iOS and Android app to pay maintenance, book amenities, raise complaints, and receive community updates.' },
  ],
  Billing: [
    { question: 'What payment methods are supported?', answer: 'We support UPI, credit and debit cards, net banking, and bank transfers. Residents can pay maintenance and one-time charges directly from the app.' },
    { question: 'How are invoices generated?', answer: 'Invoices are generated automatically based on your billing rules — per flat, per sqft, or custom. You can schedule recurring invoices and one-time charges.' },
    { question: 'Can I track defaulters and arrears?', answer: 'Yes, the dashboard shows real-time collection rates, pending dues, and a defaulter list with automated reminder history.' },
    { question: 'Do you support GST invoicing?', answer: 'Yes, AiraNexus generates GST-compliant invoices for societies registered under GST.' },
    { question: 'Can I export financial reports?', answer: 'You can export collection reports, ledgers, and balance sheets as PDF or Excel, and export to Tally with one click.' },
  ],
  Technical: [
    { question: 'Is my data secure?', answer: 'Yes. We use bank-grade AES-256 encryption at rest and in transit, role-based access control, and regular security audits. Data is backed up daily.' },
    { question: 'Do I need to install any software?', answer: 'No. AiraNexus is fully cloud-based. Admins use a web dashboard and residents use the mobile app — no installation or IT setup required.' },
    { question: 'What is your uptime guarantee?', answer: 'We offer a 99.9% uptime SLA on Enterprise plans. Our infrastructure is hosted on Tier-1 cloud providers with automatic failover.' },
    { question: 'Can I integrate with other tools?', answer: 'Yes, we integrate with Tally, WhatsApp, and popular accounting tools. Enterprise plans support custom integrations via API.' },
    { question: 'What devices are supported?', answer: 'The admin dashboard works on any modern browser. The resident app supports iOS 13+ and Android 8+.' },
  ],
  Support: [
    { question: 'How do I get support?', answer: 'Starter plans get email support. Growth plans get priority email and chat. Enterprise plans get a dedicated account manager and phone support.' },
    { question: 'What are your support hours?', answer: 'Email and chat support is available Monday to Saturday, 9 AM to 7 PM IST. Enterprise plans get 24/7 critical issue support.' },
    { question: 'Do you offer on-site training?', answer: 'Yes, Enterprise plans include on-site training for committees and staff. We also offer free live webinars every week.' },
    { question: 'How do I report a bug?', answer: 'You can report bugs from the in-app help menu or by emailing support@airanexus.com. Critical bugs are prioritized within 4 hours.' },
    { question: 'Is there a knowledge base?', answer: 'Yes, our knowledge base has step-by-step guides, video tutorials, and best-practice articles available 24/7.' },
  ],
};

export default function FAQPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  const [active, setActive] = useState('General');
  const faqs = allFaqs[active];

  return (
    <>
      <SEO
        title="FAQ — Frequently asked questions | AiraNexus"
        description="Find answers to common questions about AiraNexus — pricing, billing, security, integrations, and support."
        canonical="https://airanexus.com/faq"
      />

      <section className="bg-hero-gradient pb-16 pt-32 sm:pt-36">
        <div className="container-custom">
          <SectionHeading
            badge="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about AiraNexus. Can't find an answer? Reach out to our team."
          />
        </div>
      </section>

      {/* Category tabs */}
      <section className="border-b border-charcoal-100 bg-white">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-2" role="tablist">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                role="tab"
                aria-selected={active === c.key}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === c.key
                    ? 'bg-primary-500 text-white'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
              >
                <c.icon className="h-4 w-4" aria-hidden="true" />
                {c.key}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FAQAccordion items={faqs} />
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-charcoal-100 bg-charcoal-50 p-8 text-center">
            <h3 className="font-display text-lg font-bold text-charcoal-900">Still have questions?</h3>
            <p className="mt-2 text-sm text-charcoal-600">Our team is happy to help with anything you need.</p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary">Contact support</Link>
              <Link to="/request-demo" className="btn-ghost">Book a demo</Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
