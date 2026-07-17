import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Tag } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'

const plans = [
  {
    name: 'Starter',
    monthly: 2999,
    annual: 2999 * 10,
    description: 'For small communities up to 100 units getting started with digital management.',
    features: [
      'Up to 100 units',
      'Automated billing & receipts',
      'Complaint tracking',
      'Resident directory',
      'Mobile app (iOS & Android)',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    monthly: 5999,
    annual: 5999 * 10,
    description: 'For growing communities that need visitor management and financial reporting.',
    features: [
      'Up to 500 units',
      'Everything in Starter',
      'Visitor management with QR passes',
      'Financial reports & dashboards',
      'Amenity booking',
      'WhatsApp integration',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    monthly: null,
    annual: null,
    description: 'For townships and multi-property operators with advanced governance needs.',
    features: [
      'Unlimited units',
      'Everything in Growth',
      'Multi-property dashboard',
      'Custom roles & permissions',
      'API access & integrations',
      'Dedicated account manager',
      'SLA-backed support',
    ],
    popular: false,
  },
]

const comparison = [
  { feature: 'Units supported', starter: 'Up to 100', growth: 'Up to 500', enterprise: 'Unlimited' },
  { feature: 'Automated billing', starter: true, growth: true, enterprise: true },
  { feature: 'Complaint tracking', starter: true, growth: true, enterprise: true },
  { feature: 'Resident directory', starter: true, growth: true, enterprise: true },
  { feature: 'Mobile app', starter: true, growth: true, enterprise: true },
  { feature: 'Visitor management', starter: false, growth: true, enterprise: true },
  { feature: 'Financial reports', starter: false, growth: true, enterprise: true },
  { feature: 'Amenity booking', starter: false, growth: true, enterprise: true },
  { feature: 'WhatsApp integration', starter: false, growth: true, enterprise: true },
  { feature: 'Polls & voting', starter: false, growth: true, enterprise: true },
  { feature: 'Multi-property dashboard', starter: false, growth: false, enterprise: true },
  { feature: 'API access', starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated account manager', starter: false, growth: false, enterprise: true },
]

const faqs = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes — every plan starts with a 14-day free trial. No credit card required. You can explore all Growth features with your real community data before committing.',
  },
  {
    question: 'How does billing work?',
    answer: 'Plans are billed monthly or annually. Annual billing gives you two months free. You can switch between monthly and annual at any time, and we prorate the difference.',
  },
  {
    question: 'Can I upgrade or downgrade later?',
    answer: 'Absolutely. You can change plans anytime from your dashboard. Upgrades take effect immediately; downgrades take effect at the end of the current billing cycle.',
  },
  {
    question: 'Do you charge per unit?',
    answer: 'No. Our pricing is flat per community, regardless of how many units you have within your plan limit. This keeps costs predictable for committees.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI, all major credit and debit cards, netbanking, and NEFT/IMPS for annual plans. GST invoices are provided for every payment.',
  },
]

function renderCell(value: string | boolean) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700">
        <Check className="h-3 w-3" />
      </span>
    ) : (
      <span className="text-charcoal-300">—</span>
    )
  }
  return <span className="text-sm text-charcoal-700">{value}</span>
}

export default function PricingPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  const [annual, setAnnual] = useState(false)

  return (
    <>
      <SEO
        title="Pricing — Simple, Transparent, Per Community"
        description="Aira Nexus pricing starts at ₹2,999/month. Flat per-community pricing with no per-unit charges. 14-day free trial, no credit card required."
        path="/pricing"
      />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom pb-16 text-center lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <span className="badge-primary">
              <Tag className="h-3.5 w-3.5" />
              Pricing
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Simple pricing. <span className="text-gradient">No per-unit surprises.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              One flat price per community. Switch plans anytime. 14-day free trial with no credit card.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-charcoal-200 bg-white p-1 shadow-soft">
              <button
                onClick={() => setAnnual(false)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  !annual ? 'bg-primary-500 text-white shadow-teal' : 'text-charcoal-600'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  annual ? 'bg-primary-500 text-white shadow-teal' : 'text-charcoal-600'
                }`}
              >
                Annual
                <span className="ml-1.5 rounded-full bg-lime-100 px-1.5 py-0.5 text-2xs font-bold text-lime-800">
                  2 months free
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border p-6 shadow-card ${
                  plan.popular
                    ? 'border-transparent bg-brand-gradient text-white shadow-elevated'
                    : 'border-charcoal-100 bg-white'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary-700 shadow-soft">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-lg font-semibold ${plan.popular ? 'text-white' : 'text-charcoal-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.popular ? 'text-white/80' : 'text-charcoal-600'}`}>
                  {plan.description}
                </p>
                <div className="mt-5">
                  {plan.monthly !== null ? (
                    <>
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-charcoal-900'}`}>
                        ₹{(annual ? plan.annual : plan.monthly).toLocaleString('en-IN')}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-white/70' : 'text-charcoal-500'}`}>
                        /{annual ? 'year' : 'month'}
                      </span>
                    </>
                  ) : (
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-charcoal-900'}`}>
                      Custom
                    </span>
                  )}
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/90' : 'text-charcoal-700'}`}
                    >
                      <span
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                          plan.popular ? 'bg-white/20' : 'bg-primary-100 text-primary-700'
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.name === 'Enterprise' ? '/contact' : '/request-demo'}
                  className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-white text-primary-700 hover:bg-charcoal-50'
                      : 'bg-primary-500 text-white shadow-teal hover:bg-primary-600'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Compare plans"
            title={<>Everything, <span className="text-gradient">side by side</span></>}
            description="A detailed breakdown of what's included in each plan."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-charcoal-200">
                  <th className="py-4 text-left text-sm font-semibold text-charcoal-900">Feature</th>
                  <th className="py-4 text-center text-sm font-semibold text-charcoal-900">Starter</th>
                  <th className="py-4 text-center text-sm font-semibold text-primary-600">Growth</th>
                  <th className="py-4 text-center text-sm font-semibold text-charcoal-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 1 ? 'bg-white/50' : ''}>
                    <td className="py-3.5 text-sm text-charcoal-700">{row.feature}</td>
                    <td className="py-3.5 text-center">{renderCell(row.starter)}</td>
                    <td className="py-3.5 text-center">{renderCell(row.growth)}</td>
                    <td className="py-3.5 text-center">{renderCell(row.enterprise)}</td>
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
          <SectionHeading
            badge="Pricing FAQ"
            badgeVariant="cyan"
            title={<>Questions about <span className="text-gradient">pricing?</span></>}
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Start your 14-day free trial"
        description="No credit card required. Full access to Growth features. Cancel anytime."
        primaryLabel="Start Free Trial"
        secondaryLabel="Talk to Sales"
        secondaryTo="/contact"
      />
    </>
  )
}
