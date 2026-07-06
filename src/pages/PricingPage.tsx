import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

interface PricingPageProps {
  darkMode: boolean;
}

export default function PricingPage({ darkMode: _darkMode }: PricingPageProps) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      monthly: 2999,
      annual: 2499,
      desc: 'For small communities up to 100 flats',
      features: [
        { text: 'Core management tools', included: true },
        { text: 'Up to 100 units', included: true },
        { text: 'Email support', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Notice board', included: true },
        { text: 'Resident directory', included: true },
        { text: 'WhatsApp notifications', included: false },
        { text: 'Visitor management', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'Custom integrations', included: false },
        { text: 'Dedicated manager', included: false },
      ],
      popular: false,
    },
    {
      name: 'Growth',
      monthly: 5999,
      annual: 4999,
      desc: 'For growing communities up to 500 flats',
      features: [
        { text: 'Everything in Starter', included: true },
        { text: 'Up to 500 units', included: true },
        { text: 'Priority support', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'WhatsApp automation', included: true },
        { text: 'Visitor management', included: true },
        { text: 'Notice board', included: true },
        { text: 'Resident directory', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Custom integrations', included: false },
        { text: 'Dedicated manager', included: false },
        { text: 'White-label option', included: false },
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      monthly: 0,
      annual: 0,
      desc: 'For large communities and portfolios',
      features: [
        { text: 'Everything in Growth', included: true },
        { text: 'Unlimited units', included: true },
        { text: 'Dedicated manager', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'SLA guarantee', included: true },
        { text: 'White-label option', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'WhatsApp automation', included: true },
        { text: 'Visitor management', included: true },
        { text: 'Priority support', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Custom onboarding', included: true },
      ],
      popular: false,
    },
  ];

  const faqs = [
    { q: 'Is there a free trial?', a: 'Yes! All plans come with a 14-day free trial. No credit card required.' },
    { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time from your dashboard.' },
    { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, UPI, net banking, and bank transfers.' },
    { q: 'Is there a setup fee?', a: 'No setup fees for Starter and Growth plans. Enterprise onboarding may include a one-time fee for custom integrations.' },
    { q: 'Do you offer discounts for multiple communities?', a: 'Yes, we offer portfolio pricing for management companies handling multiple communities. Contact us for details.' },
    { q: 'What about data security?', a: 'We use bank-grade encryption, regular security audits, and are fully GDPR compliant. Your data is never shared with third parties.' },
  ];

  return (
    <div className="overflow-hidden">
      <SEO title="Pricing — AiraNexus Community Management" description="Transparent pricing for AiraNexus community management platform. Plans for small communities to large enterprises. Start with a free demo." path="/pricing" />
      {/* Hero */}
      <section className="relative bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[300px] h-[300px] bg-lime-500 top-40 -left-20 animate-float-slow" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-primary-500 uppercase tracking-wider"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight"
          >
            Pricing that scales with <span className="text-gradient">your community</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-neutral-500"
          >
            No hidden fees. No long-term contracts. Cancel anytime.
          </motion.p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-neutral-100">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${billing === 'monthly' ? 'bg-white text-charcoal-900 shadow-sm' : 'text-neutral-500'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${billing === 'annual' ? 'bg-white text-charcoal-900 shadow-sm' : 'text-neutral-500'}`}
            >
              Annual
              <span className="ml-2 px-2 py-0.5 rounded-full bg-lime-100 text-lime-700 text-xs font-semibold">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-white pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 bg-white transition-all duration-300 ${
                  plan.popular
                    ? 'shadow-teal-lg ring-2 ring-primary-500'
                    : 'shadow-card border border-neutral-100 hover:shadow-card-hover hover:-translate-y-1'
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white bg-brand-gradient whitespace-nowrap">
                      Most Popular
                    </div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary-50/50 to-transparent pointer-events-none" />
                  </>
                )}
                <div className="relative">
                  <h3 className="text-xl font-bold text-charcoal-900">{plan.name}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{plan.desc}</p>
                  <div className="mt-6 flex items-baseline">
                    {plan.name === 'Enterprise' ? (
                      <span className="text-4xl font-bold text-charcoal-900">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold text-charcoal-900">
                          ₹{(billing === 'annual' ? plan.annual : plan.monthly).toLocaleString('en-IN')}
                        </span>
                        <span className="text-neutral-400 ml-1">/month</span>
                      </>
                    )}
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start space-x-3 text-sm">
                        {f.included ? (
                          <Check className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={f.included ? 'text-neutral-600' : 'text-neutral-400'}>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/request-demo"
                    className={`mt-8 w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'} justify-center`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold text-charcoal-900">Pricing questions, answered</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="icon-circle flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-2">{faq.q}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="relative rounded-4xl overflow-hidden p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-brand-gradient" />
            <div className="absolute inset-0 blob w-[300px] h-[300px] bg-white/20 -top-10 -left-10 animate-float" />
            <div className="relative z-10">
              <Sparkles className="w-10 h-10 text-white mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Start your 14-day free trial</h2>
              <p className="mt-4 text-white/90 text-lg">No credit card required. Full access to all features.</p>
              <Link to="/request-demo" className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-primary-600 bg-white hover:scale-105 transition-transform shadow-lg">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
