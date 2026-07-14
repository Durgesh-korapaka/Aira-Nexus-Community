import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles, Star } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';
import FAQAccordion from '../components/ui/FAQAccordion';

interface PricingPageProps {
  darkMode: boolean;
}

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  unitCap: string;
  cta: string;
  ctaTo: string;
  popular: boolean;
  features: PlanFeature[];
}

const plans: Plan[] = [
  {
    name: 'Starter',
    tagline: 'For small communities getting started',
    monthly: 2999,
    annual: 2499,
    unitCap: 'Up to 50 units',
    cta: 'Start free trial',
    ctaTo: '/request-demo',
    popular: false,
    features: [
      { text: 'Core management tools', included: true },
      { text: 'Up to 50 units', included: true },
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
  },
  {
    name: 'Growth',
    tagline: 'For growing communities that need more power',
    monthly: 5999,
    annual: 4999,
    unitCap: 'Up to 200 units',
    cta: 'Start free trial',
    ctaTo: '/request-demo',
    popular: true,
    features: [
      { text: 'Everything in Starter', included: true },
      { text: 'Up to 200 units', included: true },
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
  },
  {
    name: 'Enterprise',
    tagline: 'For large communities and portfolios',
    monthly: 0,
    annual: 0,
    unitCap: '500+ units',
    cta: 'Contact Sales',
    ctaTo: '/request-demo',
    popular: false,
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
  },
];

const comparisonRows: {
  category: string;
  features: { label: string; values: (boolean | string)[] }[];
}[] = [
  {
    category: 'Core',
    features: [
      { label: 'Unit capacity', values: ['50 units', '200 units', '500+ units'] },
      { label: 'Mobile app access', values: [true, true, true] },
      { label: 'Resident directory', values: [true, true, true] },
      { label: 'Notice board', values: [true, true, true] },
    ],
  },
  {
    category: 'Billing & Finance',
    features: [
      { label: 'Automated billing', values: [true, true, true] },
      { label: 'Basic analytics', values: [true, true, true] },
      { label: 'Advanced analytics', values: [false, true, true] },
      { label: 'Custom integrations', values: [false, false, true] },
    ],
  },
  {
    category: 'Communication',
    features: [
      { label: 'Email support', values: [true, true, true] },
      { label: 'Priority support', values: [false, true, true] },
      { label: 'WhatsApp notifications', values: [false, true, true] },
      { label: 'Dedicated manager', values: [false, false, true] },
    ],
  },
  {
    category: 'Security & Scale',
    features: [
      { label: 'Visitor management', values: [false, true, true] },
      { label: 'SLA guarantee', values: [false, false, true] },
      { label: 'White-label option', values: [false, false, true] },
      { label: 'Custom onboarding', values: [false, false, true] },
    ],
  },
];

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes! All plans come with a 14-day free trial. No credit card required. You get full access to every feature in your chosen plan so you can experience AiraNexus before committing.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately and we prorate the difference — no penalties, no lock-in.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, UPI, net banking, and bank transfers. Enterprise customers can also opt for annual invoicing with NET-30 terms.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No setup fees for Starter and Growth plans. Enterprise onboarding may include a one-time fee for custom integrations and data migration, which we quote upfront before you commit.',
  },
  {
    q: 'Do you offer discounts for multiple communities?',
    a: 'Yes, we offer portfolio pricing for management companies handling multiple communities. Contact our sales team for a tailored quote based on the number of communities and units.',
  },
];

const formatINR = (amount: number) => `₹${amount.toLocaleString('en-IN')}`;

export default function PricingPage({ darkMode: _darkMode }: PricingPageProps) {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="overflow-hidden">
      <SEO
        title="Pricing — AiraNexus Community Management"
        description="Transparent pricing for AiraNexus community management platform. Plans from ₹2,999/month for small communities to custom enterprise pricing. Start with a 14-day free trial."
        path="/pricing"
      />

      {/* Hero */}
      <section className="relative bg-hero-gradient pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden">
        <div className="blob w-[480px] h-[480px] bg-primary-400 -top-32 -right-32 animate-float" />
        <div className="blob w-[360px] h-[360px] bg-lime-400 top-40 -left-24 animate-float-slow" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="badge badge-primary mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Pricing
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Pricing that scales with{' '}
              <span className="text-gradient">your community</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 text-pretty"
            >
              No hidden fees. No long-term contracts. Cancel anytime. Pick a plan
              that fits your community today — change it whenever you grow.
            </motion.p>

            {/* Billing toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-10 flex justify-center"
            >
              <div
                role="radiogroup"
                aria-label="Billing period"
                className="inline-flex items-center p-1.5 rounded-2xl bg-charcoal-100/80 backdrop-blur-sm"
              >
                <button
                  role="radio"
                  aria-checked={billing === 'monthly'}
                  onClick={() => setBilling('monthly')}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-100 ${
                    billing === 'monthly'
                      ? 'bg-white text-charcoal-900 shadow-soft'
                      : 'text-charcoal-500 hover:text-charcoal-700'
                  }`}
                >
                  Monthly
                </button>
                <button
                  role="radio"
                  aria-checked={billing === 'annual'}
                  onClick={() => setBilling('annual')}
                  className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-100 ${
                    billing === 'annual'
                      ? 'bg-white text-charcoal-900 shadow-soft'
                      : 'text-charcoal-500 hover:text-charcoal-700'
                  }`}
                >
                  Annual
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full bg-lime-100 text-lime-700 text-xs font-bold">
                    Save 17%
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative bg-white pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            {plans.map((plan, i) => {
              const isPopular = plan.popular;
              const isEnterprise = plan.name === 'Enterprise';
              const price = billing === 'annual' ? plan.annual : plan.monthly;

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ease-smooth ${
                    isPopular
                      ? 'bg-brand-gradient text-white shadow-teal-lg md:-translate-y-4 md:scale-[1.03]'
                      : 'card card-hover'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-primary-700 bg-white shadow-card whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 fill-lime-400 text-lime-500" aria-hidden="true" />
                      Most Popular
                    </div>
                  )}

                  <div className="flex flex-col flex-1">
                    {/* Header */}
                    <div>
                      <h3
                        className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-charcoal-900'}`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`mt-1.5 text-sm ${isPopular ? 'text-white/80' : 'text-charcoal-500'}`}
                      >
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Unit cap badge */}
                    <div className="mt-4">
                      <span
                        className={`badge ${
                          isPopular
                            ? 'bg-white/15 text-white'
                            : 'badge-primary'
                        }`}
                      >
                        {plan.unitCap}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-6 flex items-baseline gap-1">
                      {isEnterprise ? (
                        <span
                          className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-charcoal-900'}`}
                        >
                          Custom
                        </span>
                      ) : (
                        <motion.span
                          key={price}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className={`text-4xl font-bold ${isPopular ? 'text-white' : 'text-charcoal-900'}`}
                        >
                          {formatINR(price)}
                        </motion.span>
                      )}
                      {!isEnterprise && (
                        <span
                          className={`text-sm font-medium ${isPopular ? 'text-white/70' : 'text-charcoal-400'}`}
                        >
                          /month
                        </span>
                      )}
                    </div>
                    {!isEnterprise && billing === 'annual' && (
                      <p
                        className={`mt-1.5 text-xs ${isPopular ? 'text-white/70' : 'text-charcoal-400'}`}
                      >
                        Billed annually
                      </p>
                    )}
                    {!isEnterprise && billing === 'monthly' && (
                      <p
                        className={`mt-1.5 text-xs ${isPopular ? 'text-white/70' : 'text-charcoal-400'}`}
                      >
                        Billed monthly
                      </p>
                    )}

                    {/* CTA */}
                    <Link
                      to={plan.ctaTo}
                      className={`mt-6 w-full justify-center ${
                        isPopular
                          ? 'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-600 font-semibold text-sm shadow-lg transition-all duration-200 ease-smooth hover:bg-primary-50 hover:shadow-xl active:scale-[0.98]'
                          : 'btn-primary'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>

                    {/* Divider */}
                    <div
                      className={`my-6 h-px w-full ${isPopular ? 'bg-white/20' : 'bg-charcoal-100'}`}
                      aria-hidden="true"
                    />

                    {/* Features */}
                    <ul className="space-y-3 flex-1" role="list">
                      {plan.features.map((f) => (
                        <li
                          key={f.text}
                          className="flex items-start gap-3 text-sm"
                        >
                          {f.included ? (
                            <span
                              className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                                isPopular ? 'bg-white/20' : 'bg-lime-100'
                              }`}
                            >
                              <Check
                                className={`w-3.5 h-3.5 ${isPopular ? 'text-white' : 'text-lime-600'}`}
                                aria-hidden="true"
                              />
                            </span>
                          ) : (
                            <span
                              className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                                isPopular ? 'bg-white/10' : 'bg-charcoal-100'
                              }`}
                            >
                              <X
                                className={`w-3.5 h-3.5 ${isPopular ? 'text-white/40' : 'text-charcoal-300'}`}
                                aria-hidden="true"
                              />
                            </span>
                          )}
                          <span
                            className={
                              f.included
                                ? isPopular
                                  ? 'text-white/90'
                                  : 'text-charcoal-600'
                                : isPopular
                                  ? 'text-white/40'
                                  : 'text-charcoal-400'
                            }
                          >
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 text-center text-sm text-charcoal-400"
          >
            All plans include a 14-day free trial · No credit card required ·
            Cancel anytime
          </motion.p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="Compare plans"
            badgeColor="lime"
            title={<>Find the right fit <span className="text-gradient">for your community</span></>}
            description="A detailed breakdown of what's included in each plan so you can choose with confidence."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 max-w-4xl mx-auto"
          >
            <div className="overflow-x-auto scrollbar-hide rounded-2xl border border-charcoal-100 shadow-card bg-white">
              <table className="w-full text-left">
                <caption className="sr-only">
                  Feature comparison across Starter, Growth, and Enterprise plans
                </caption>
                <thead>
                  <tr className="border-b border-charcoal-100">
                    <th
                      scope="col"
                      className="px-5 py-5 text-sm font-semibold text-charcoal-900"
                    >
                      Features
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan.name}
                        scope="col"
                        className={`px-5 py-5 text-sm font-bold text-center whitespace-nowrap ${
                          plan.popular ? 'text-primary-600' : 'text-charcoal-900'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-1">
                          <span>{plan.name}</span>
                          {plan.popular && (
                            <span className="badge badge-primary text-2xs">
                              Popular
                            </span>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((group) => [
                    <tr key={group.category} className="bg-charcoal-50/60">
                      <th
                        scope="col"
                        colSpan={4}
                        className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-charcoal-500"
                      >
                        {group.category}
                      </th>
                    </tr>,
                    ...group.features.map((row) => (
                      <tr
                        key={`${group.category}-${row.label}`}
                        className="border-b border-charcoal-100 last:border-0 transition-colors hover:bg-primary-50/40"
                      >
                        <th
                          scope="row"
                          className="px-5 py-3.5 text-sm font-medium text-charcoal-700"
                        >
                          {row.label}
                        </th>
                        {row.values.map((value, vi) => (
                          <td
                            key={vi}
                            className="px-5 py-3.5 text-sm text-center"
                          >
                            {typeof value === 'boolean' ? (
                              value ? (
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-lime-100">
                                  <Check
                                    className="w-4 h-4 text-lime-600"
                                    aria-label="Included"
                                  />
                                </span>
                              ) : (
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-charcoal-100">
                                  <X
                                    className="w-4 h-4 text-charcoal-300"
                                    aria-label="Not included"
                                  />
                                </span>
                              )
                            ) : (
                              <span className="font-semibold text-charcoal-700">
                                {value}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    )),
                  ])}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="FAQ"
            badgeColor="cyan"
            title={<>Pricing questions, <span className="text-gradient">answered</span></>}
            description="Everything you need to know about plans, billing, and what's included."
          />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to transform your community?"
        description="Join 500+ communities already using AiraNexus for hassle-free management. Start your 14-day free trial today — no credit card required."
        primaryAction={{ label: 'Start free trial', to: '/request-demo' }}
        secondaryAction={{ label: 'Talk to sales', to: '/request-demo' }}
      />
    </div>
  );
}
