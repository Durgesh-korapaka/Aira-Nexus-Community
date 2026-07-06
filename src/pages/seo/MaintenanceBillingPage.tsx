import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  Clock,
  CheckCircle,
  ArrowRight,
  Smartphone,
  Bell,
  BarChart3,
} from 'lucide-react';
import SEO from '../../components/SEO';

interface MaintenanceBillingPageProps {
  darkMode: boolean;
}

export default function MaintenanceBillingPage({ darkMode: _darkMode }: MaintenanceBillingPageProps) {
  return (
    <div>
      <SEO title="Maintenance Billing Software — AiraNexus" description="Automated maintenance billing software for apartments and societies. Online payments, reminders, and collection tracking." path="/maintenance-billing-software" />
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-lime-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[300px] h-[300px] bg-primary-500 -bottom-20 -left-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime-50 text-lime-600 text-sm font-medium mb-6">
              #1 Maintenance Billing Software
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Maintenance Billing <span className="text-gradient">Software</span>
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              Automated maintenance billing and collection. Say goodbye to manual invoices, late payments, and chasing dues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-demo" className="btn-primary">
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-charcoal-900"
          >
            Automate Your Maintenance Billing
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: 'Auto Invoicing', desc: 'Generate monthly invoices automatically with accurate calculations' },
              { icon: Bell, title: 'Payment Reminders', desc: 'Automated SMS/WhatsApp reminders before due dates' },
              { icon: Smartphone, title: 'Online Payments', desc: 'UPI, cards, net banking, auto-debit options' },
              { icon: Clock, title: 'Late Fee Automation', desc: 'Automatic late fee calculation and application' },
              { icon: CheckCircle, title: 'Receipt Generation', desc: 'Instant digital receipts via email/SMS' },
              { icon: BarChart3, title: 'Collection Reports', desc: 'Real-time tracking of payments and defaults' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="icon-circle-lg mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-charcoal-900">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-charcoal-900">
                Stop Chasing Payments
              </h2>
              <p className="mb-8 text-neutral-500">
                On average, Aira Nexus helps communities improve collections by 40%. Automated reminders, multiple payment options, and transparent tracking mean fewer defaults and more on-time payments.
              </p>
              <div className="space-y-4">
                {[
                  '95% collection rate within 30 days',
                  'Zero manual invoice generation',
                  'Automatic reconciliation',
                  'GST-compliant invoices',
                  'Multiple payment gateway support',
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-500">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <div className="text-center mb-6">
                <p className="text-neutral-500 text-sm">Average Collection Improvement</p>
                <p className="text-5xl font-bold text-gradient">+40%</p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-charcoal-900">20hrs</p>
                  <p className="text-xs text-neutral-500">Saved Monthly</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal-900">99%</p>
                  <p className="text-xs text-neutral-500">Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-charcoal-900">0</p>
                  <p className="text-xs text-neutral-500">Manual Errors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-charcoal-900"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'What payment gateways do you support?', a: 'We support Razorpay, PayU, HDFC, ICICI, and all major payment gateways. Residents can pay via UPI, cards, net banking, or auto-debit.' },
              { q: 'Can we customize late fees?', a: 'Yes! You can set custom late fee rules - flat amount, percentage, or tiered based on days overdue.' },
              { q: 'Can residents setup auto-debit?', a: 'Absolutely! Residents can enable NACH/eNACH for automatic monthly debits from their bank accounts.' },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6"
              >
                <h3 className="font-semibold mb-2 text-charcoal-900">{faq.q}</h3>
                <p className="text-neutral-500">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Automate Your Maintenance Billing?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Start your 14-day free trial. No credit card required.
            </p>
            <Link to="/request-demo" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-charcoal-900 font-semibold hover:bg-neutral-50 transition-colors">
              Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
