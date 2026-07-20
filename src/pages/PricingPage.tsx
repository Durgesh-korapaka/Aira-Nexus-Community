import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import FAQAccordion from '../components/ui/FAQAccordion';
import CTABanner from '../components/ui/CTABanner';

type Billing = 'monthly' | 'yearly';

const plans = [
  {
    name: 'Starter',
    monthly: 2999,
    yearly: 29990,
    description: 'For small societies up to 100 flats getting started with digital management.',
    features: [
      'Up to 100 flats',
      'Maintenance billing & payments',
      'Visitor management',
      'Helpdesk & complaints',
      'Resident mobile app',
      'Email support',
    ],
    popular: false,
    cta: 'Start free trial',
    to: '/request-demo',
  },
  {
    name: 'Growth',
    monthly: 5999,
    yearly: 59990,
    description: 'For growing communities up to 500 flats that need automation and analytics.',
    features: [
      'Up to 500 flats',
      'Everything in Starter',
      'Amenity booking',
      'Accounting & ledger',
      'Analytics dashboards',
      'WhatsApp & SMS reminders',
      'Priority support',
    ],
    popular: true,
    cta: 'Start free trial',
    to: '/request-demo',
  },
  {
    name: 'Enterprise',
    monthly: null,
    yearly: null,
    description: 'For large communities and property managers running multiple societies.',
    features: [
      'Unlimited flats',
      'Everything in Growth',
      'Multi-property console',
      'Custom integrations',
      'Dedicated account manager',
      'On-site training',
      '99.9% uptime SLA',
    ],
    popular: false,
    cta: 'Contact sales',
    to: '/contact',
  },
];

const comparison = [
  { feature: 'Flats supported', starter: '100', growth: '500', enterprise: 'Unlimited' },
  { feature: 'Maintenance billing', starter: true, growth: true, enterprise: true },
  { feature: 'Online payments', starter: true, growth: true, enterprise: true },
  { feature: 'Visitor management', starter: true, growth: true, enterprise: true },
  { feature: 'Helpdesk & complaints', starter: true, growth: true, enterprise: true },
  { feature: 'Resident mobile app', starter: true, growth: true, enterprise: true },
  { feature: 'Amenity booking', starter: false, growth: true, enterprise: true },
  { feature: 'Accounting & ledger', starter: false, growth: true, enterprise: true },
  { feature: 'Analytics dashboards', starter: false, growth: true, enterprise: true },
  { feature: 'WhatsApp & SMS reminders', starter: false, growth: true, enterprise: true },
  { feature: 'Multi-property console', starter: false, growth: false, enterprise: true },
  { feature: 'Custom integrations', starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated account manager', starter: false, growth: false, enterprise: true },
];

const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes, every plan starts with a 14-day free trial. No credit card required. You can explore all features before committing.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely. You can upgrade or downgrade at any time from your dashboard. Changes are prorated automatically.',
  },
  {
    question: 'Are there any setup fees?',
    answer: 'No setup fees on Starter and Growth plans. Enterprise onboarding may include a one-time implementation fee for custom integrations and on-site training.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI, credit and debit cards, net banking, and bank transfers. Annual plans can be invoiced.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes, annual billing saves you roughly two months compared to monthly billing.',
  },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-primary-600" aria-label="Included" />
    ) : (
      <span className="mx-auto text-charcoal-300" aria-label="Not included">
        —
      </span>
    );
  }
  return <span className="text-sm font-medium text-charcoal-800">{value}</span>;
}

export default function PricingPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  const [billing, setBilling] = useState<Billing>('monthly');

  return (
    <>
      <SEO
        title="Pricing — Simple, transparent plans | AiraNexus"
        description="Choose the AiraNexus plan that fits your community. Starter ₹2,999/mo, Growth ₹5,999/mo, and Enterprise with custom pricing."
        canonical="https://airanexus.com/pricing"
      />

      <section className="bg-hero-gradient pb-16 pt-32 sm:pt-36">
        <div className="container-custom">
          <SectionHeading
            badge="Pricing"
            title="Simple, transparent pricing"
            description="Pick a plan that scales with your community. No hidden fees, no surprises. Cancel anytime."
          />
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-charcoal-200 bg-white p-1 shadow-soft">
              <button
                onClick={() => setBilling('monthly')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  billing === 'monthly' ? 'bg-primary-500 text-white' : 'text-charcoal-700'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  billing === 'yearly' ? 'bg-primary-500 text-white' : 'text-charcoal-700'
                }`}
              >
                Yearly
                <span className="ml-1.5 text-2xs font-semibold text-greenish-600">Save 2 months</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-4xl border p-6 sm:p-8 ${
                  plan.popular
                    ? 'border-primary-300 bg-white shadow-teal-lg lg:-mt-4 lg:mb-4'
                    : 'border-charcoal-100 bg-white shadow-card'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-primary bg-primary-500 !text-white">
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-charcoal-900">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{plan.description}</p>
                <div className="mt-6 flex items-end gap-1">
                  {plan.monthly === null ? (
                    <span className="font-display text-display-sm font-extrabold text-charcoal-900">
                      Custom
                    </span>
                  ) : (
                    <>
                      <span className="font-display text-display-md font-extrabold text-charcoal-900">
                        ₹{(billing === 'monthly' ? plan.monthly : Math.round(plan.yearly! / 12)).toLocaleString('en-IN')}
                      </span>
                      <span className="mb-1.5 text-sm text-charcoal-500">/mo</span>
                    </>
                  )}
                </div>
                {plan.monthly !== null && billing === 'yearly' && (
                  <p className="mt-1 text-2xs text-charcoal-500">
                    Billed ₹{plan.yearly!.toLocaleString('en-IN')} annually
                  </p>
                )}
                <Link
                  to={plan.to}
                  className={`mt-6 ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-charcoal-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            badge="Compare"
            badgeVariant="cyan"
            title="Compare every feature"
            description="A detailed breakdown of what's included in each plan."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
              <thead>
                <tr className="border-b border-charcoal-100 bg-charcoal-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-charcoal-900">Starter</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-700">Growth</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-charcoal-900">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-100">
                {comparison.map((row) => (
                  <tr key={row.feature} className="hover:bg-charcoal-50/50">
                    <td className="px-6 py-4 text-left text-sm text-charcoal-800">{row.feature}</td>
                    <td className="px-6 py-4 text-center"><Cell value={row.starter} /></td>
                    <td className="px-6 py-4 text-center"><Cell value={row.growth} /></td>
                    <td className="px-6 py-4 text-center"><Cell value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading badge="Pricing FAQ" title="Questions about pricing" />
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Still not sure which plan fits?"
        description="Talk to our team and we'll help you choose the right plan for your community."
        primaryLabel="Talk to sales"
        primaryTo="/contact"
        secondaryLabel="Book a demo"
        secondaryTo="/request-demo"
      />
    </>
  );
}
