import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Search,
  HelpCircle,
  CreditCard,
  Shield,
  Smartphone,
  MessageCircle,
  Settings,
  ArrowRight,
} from 'lucide-react';
import SEO from '../components/SEO';

interface FAQPageProps {
  darkMode: boolean;
}

const faqCategories = [
  { id: 'general', name: 'General', icon: HelpCircle },
  { id: 'pricing', name: 'Pricing & Billing', icon: CreditCard },
  { id: 'security', name: 'Security', icon: Shield },
  { id: 'mobile', name: 'Mobile App', icon: Smartphone },
  { id: 'support', name: 'Support', icon: MessageCircle },
  { id: 'features', name: 'Features', icon: Settings },
];

const faqs: Record<string, { question: string; answer: string }[]> = {
  general: [
    { question: 'What is Aira Nexus?', answer: 'Aira Nexus is a comprehensive community management platform designed for apartments, gated communities, villa townships, and resident welfare associations. It handles maintenance billing, complaint management, visitor tracking, resident communication, and more from a single platform.' },
    { question: 'How quickly can we get started?', answer: 'Most communities go live within 24-48 hours. Our onboarding team handles data migration, staff training, and resident onboarding assistance. For larger communities (200+ units), the process may take up to a week.' },
    { question: 'Is there a free trial available?', answer: 'Yes! We offer a 14-day free trial with full access to Growth plan features. No credit card required. You can explore all features before making a commitment.' },
    { question: 'Can I cancel my subscription anytime?', answer: 'Yes, you can cancel your subscription at any time. For monthly plans, cancellation takes effect at the end of the current billing period. Annual plans can be cancelled with a prorated refund.' },
  ],
  pricing: [
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit/debit cards, UPI, net banking, and automatic bank transfers for annual plans. Enterprise customers can pay via invoice with NET 30 terms.' },
    { question: 'Is there a setup fee?', answer: 'No, there are no setup fees for Starter and Growth plans. Enterprise implementations may have a one-time setup fee depending on customization requirements and data migration complexity.' },
    { question: 'Do you offer discounts for annual billing?', answer: 'Yes! Annual billing saves you approximately 2 months compared to monthly payments. You also get priority onboarding and a dedicated account manager for annual subscriptions.' },
    { question: 'What happens if I exceed my plan limits?', answer: 'If your community grows beyond your plan limits, we\'ll notify you and help you upgrade to the appropriate plan. There are no penalties - just a smooth transition to a plan that fits.' },
  ],
  security: [
    { question: 'How secure is my data?', answer: 'We take security seriously. All data is encrypted at rest and in transit using AES-256 encryption. We\'re SOC 2 Type II compliant and undergo regular security audits.' },
    { question: 'Where is my data stored?', answer: 'For Indian customers, data is stored in AWS Mumbai region. For international customers, we use AWS Singapore region. All comply with local data protection regulations.' },
    { question: 'Who has access to my community\'s data?', answer: 'Only your designated admins and committee members have access. Aira Nexus staff can only access data for support purposes with your explicit permission. We never sell or share your data.' },
    { question: 'What happens to my data if I cancel?', answer: 'You can export all your data before cancellation. We retain data for 90 days after cancellation in case you return. After 90 days, all data is permanently deleted.' },
  ],
  mobile: [
    { question: 'Is there a mobile app for residents?', answer: 'Yes! We have native apps for both iOS and Android. Residents can pay bills, raise complaints, book amenities, and receive notifications directly on their phones.' },
    { question: 'What features are available in the mobile app?', answer: 'The resident app includes maintenance payments, complaint registration, notice board, amenity booking, visitor approval, helpdesk, and community directory access.' },
    { question: 'Can committee members use the mobile app?', answer: 'Yes, committee members get a special Admin app with dashboards, approvals, reports, and management features on the go.' },
    { question: 'Does the app work offline?', answer: 'Some features like viewing notices and resident directory are available offline. Core functions like payments and complaints require internet connectivity.' },
  ],
  support: [
    { question: 'What kind of support do you offer?', answer: 'Starter plans include email support (24-hour response). Growth plans get priority support with 4-hour response time. Enterprise customers have 24/7 phone support and a dedicated account manager.' },
    { question: 'Do you provide training?', answer: 'Yes! We provide free online training for all plans. Growth and Enterprise customers get live training sessions. Enterprise customers receive on-site training at their location.' },
    { question: 'How do I report a bug or issue?', answer: 'You can report issues through the admin dashboard, email us at support@airanexus.com, or call our support line. Critical issues are escalated immediately to our engineering team.' },
    { question: 'What are your support hours?', answer: 'Email support is available 24/7. Phone support for Growth plans is available Mon-Sat 9AM-6PM IST. Enterprise customers have 24/7 phone support.' },
  ],
  features: [
    { question: 'Can I integrate with my existing payment gateway?', answer: 'We support integration with major payment gateways including Razorpay, PayU, HDFC, ICICI, and more. Custom integrations are available for Enterprise plans.' },
    { question: 'Does Aira Nexus support WhatsApp notifications?', answer: 'Yes! WhatsApp integration is included in Growth and Enterprise plans. You can send payment reminders, complaint updates, notices, and visitor notifications via WhatsApp.' },
    { question: 'Can I customize the platform for my community?', answer: 'Growth plans include custom fields and basic branding. Enterprise plans allow full customization including white-label options, custom workflows, and API access.' },
    { question: 'Is there an API available?', answer: 'Yes, API access is available on Growth and Enterprise plans. Our REST API enables integration with accounting software, CRM systems, and custom applications.' },
  ],
};

export default function FAQPage({ darkMode: _darkMode }: FAQPageProps) {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = searchQuery
    ? Object.values(faqs).flat().filter(
        faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
               faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs[activeCategory];

  const faqJsonLd = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.values(faqs).flat().map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }), []);

  return (
    <div>
      <SEO
        title="FAQ — AiraNexus Community Management"
        description="Find answers to common questions about AiraNexus community management platform — pricing, features, security, WhatsApp integration, and more."
        path="/faq"
        jsonLd={faqJsonLd}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-greenish-50 overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[350px] h-[350px] bg-cyan-500 -bottom-20 -left-20 animate-float-delayed" />
        <div className="container-custom text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            Help Center
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8"
          >
            Find answers to common questions about Aira Nexus and community management.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-charcoal-900 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {!searchQuery && (
        <section className="py-8 bg-white border-b border-neutral-200">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setOpenIndex(null); }}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center ${
                    activeCategory === cat.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  <cat.icon className="w-4 h-4 mr-2" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card p-0 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between"
                >
                  <span className="font-semibold pr-4 text-charcoal-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-neutral-500">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="icon-circle-lg mx-auto mb-6"
            >
              <MessageCircle className="w-8 h-8 text-primary-600" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4 text-charcoal-900"
            >
              Still have questions?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-neutral-500"
            >
              Can't find the answer you're looking for? Our support team is here to help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-primary">
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="https://wa.me/911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
