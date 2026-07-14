import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  Bell,
  Smartphone,
  Clock,
  CheckCircle,
  BarChart3,
  ArrowRight,
} from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FeatureCard from '../../components/ui/FeatureCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import CTABanner from '../../components/ui/CTABanner';
import StatCard from '../../components/ui/StatCard';

interface MaintenanceBillingPageProps {
  darkMode: boolean;
}

const features = [
  { icon: CreditCard, title: 'Auto Invoicing', description: 'Generate monthly invoices automatically with accurate calculations — no manual data entry required.' },
  { icon: Bell, title: 'Payment Reminders', description: 'Automated SMS and WhatsApp reminders before due dates to ensure timely payments.' },
  { icon: Smartphone, title: 'Online Payments', description: 'UPI, cards, net banking, and auto-debit options — residents pay however they prefer.' },
  { icon: Clock, title: 'Late Fee Automation', description: 'Automatic late fee calculation and application based on your custom rules.' },
  { icon: CheckCircle, title: 'Receipt Generation', description: 'Instant digital receipts via email and SMS. GST-compliant with automatic tax details.' },
  { icon: BarChart3, title: 'Collection Reports', description: 'Real-time tracking of payments, defaults, and collection rates with visual dashboards.' },
];

const benefits = [
  '95% collection rate within 30 days',
  'Zero manual invoice generation',
  'Automatic reconciliation with bank statements',
  'GST-compliant invoices with HSN codes',
  'Multiple payment gateway support',
];

const stats = [
  { value: '+40%', label: 'Collection' },
  { value: '20hrs', label: 'Saved' },
  { value: '99%', label: 'Accuracy' },
  { value: '0', label: 'Manual Errors' },
];

const faqs = [
  { q: 'What payment gateways do you support?', a: 'We support Razorpay, PayU, HDFC, ICICI, and all major payment gateways. Residents can pay via UPI, cards, net banking, or auto-debit.' },
  { q: 'Can we customize late fees?', a: 'Yes! You can set custom late fee rules — flat amount, percentage, or tiered based on days overdue. Rules apply automatically.' },
  { q: 'Can residents setup auto-debit?', a: 'Absolutely! Residents can enable NACH/eNACH for automatic monthly debits from their bank accounts — no manual intervention needed.' },
];

export default function MaintenanceBillingPage({ darkMode: _darkMode }: MaintenanceBillingPageProps) {
  return (
    <div>
      <SEO
        title="Maintenance Billing Software — AiraNexus"
        description="Automated maintenance billing software for apartments and societies. Online payments, reminders, and collection tracking."
        path="/maintenance-billing-software"
      />

      {/* Hero */}
      <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-hero-gradient">
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
              #1 Maintenance Billing Software
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Maintenance billing,{' '}
              <span className="text-gradient">automated</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              Automated maintenance billing and collection for apartments and societies. Say
              goodbye to manual invoices, late payments, and chasing dues.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link to="/request-demo" className="btn-primary text-base px-8 py-4">
                Start Free Trial
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link to="/pricing" className="btn-secondary text-base px-8 py-4">
                View Pricing
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex items-center justify-center gap-6 text-sm text-charcoal-400"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                14-day free trial
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 lg:py-16 bg-white border-y border-charcoal-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title={<>Automate your <span className="text-gradient">maintenance billing</span></>}
            description="From invoice generation to payment collection — every step is automated, tracked, and optimized."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge badge-lime mb-4">Why AiraNexus</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal-900 mb-6 text-balance">
                Stop chasing payments.
              </h2>
              <p className="text-lg text-charcoal-500 mb-8 text-pretty">
                On average, AiraNexus helps communities improve collections by 40%. Automated
                reminders, multiple payment options, and transparent tracking mean fewer
                defaults and more on-time payments.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-charcoal-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/request-demo" className="btn-primary mt-8">
                Start Free Trial
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8"
            >
              <div className="text-center mb-8 pb-8 border-b border-charcoal-100">
                <p className="text-sm text-charcoal-500 mb-2">Average Collection Improvement</p>
                <p className="text-5xl font-bold text-gradient tracking-tight">+40%</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-charcoal-900">20hrs</p>
                  <p className="text-xs text-charcoal-500 mt-1">Saved Monthly</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal-900">99%</p>
                  <p className="text-xs text-charcoal-500 mt-1">Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal-900">0</p>
                  <p className="text-xs text-charcoal-500 mt-1">Manual Errors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="FAQ"
            badgeColor="cyan"
            title={<>Frequently asked <span className="text-gradient">questions</span></>}
            description="Everything you need to know about maintenance billing with AiraNexus."
          />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to automate your maintenance billing?"
        description="Start your 14-day free trial today. No credit card required. Join 100+ communities already using AiraNexus."
        primaryAction={{ label: 'Start Free Trial', to: '/request-demo' }}
        secondaryAction={{ label: 'View Pricing', to: '/pricing' }}
      />
    </div>
  );
}
