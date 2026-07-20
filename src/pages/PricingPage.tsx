import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles, X } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import FAQAccordion from '../components/ui/FAQAccordion'
import CTABanner from '../components/ui/CTABanner'

const PLANS = [
  {
    name: 'Starter',
    tagline: 'For small communities getting started',
    monthly: 2999,
    annual: 2499,
    features: [
      'Up to 100 units',
      'Automated billing & reminders',
      'Resident mobile app',
      'Notice board',
      'Email support',
    ],
    cta: 'Start with Starter',
    href: '/request-demo',
    highlighted: false,
  },
  {
    name: 'Growth',
    tagline: 'For growing communities that need more',
    monthly: 5999,
    annual: 4999,
    features: [
      'Up to 500 units',
      'Everything in Starter',
      'Visitor management',
      'Complaint tracking',
      'Financial reports & exports',
      'WhatsApp integration',
      'Priority support',
    ],
    cta: 'Choose Growth',
    href: '/request-demo',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For townships and large complexes',
    monthly: null,
    annual: null,
    features: [
      'Unlimited units',
      'Everything in Growth',
      'Vendor & staff management',
      'Polls & voting',
      'Document storage',
      'White-label app',
      'Dedicated account manager',
      'Custom SLAs',
    ],
    cta: 'Talk to Sales',
    href: '/contact',
    highlighted: false,
  },
]

const COMPARISON = [
  { feature: 'Units supported', starter: '100', growth: '500', enterprise: 'Unlimited' },
  { feature: 'Automated billing', starter: true, growth: true, enterprise: true },
  { feature: 'Resident mobile app', starter: true, growth: true, enterprise: true },
  { feature: 'Visitor management', starter: false, growth: true, enterprise: true },
  { feature: 'Complaint tracking', starter: false, growth: true, enterprise: true },
  { feature: 'Financial reports', starter: false, growth: true, enterprise: true },
  { feature: 'WhatsApp integration', starter: false, growth: true, enterprise: true },
  { feature: 'Vendor management', starter: false, growth: false, enterprise: true },
  { feature: 'Polls & voting', starter: false, growth: false, enterprise: true },
  { feature: 'White-label app', starter: false, growth: false, enterprise: true },
  { feature: 'Dedicated account manager', starter: false, growth: false, enterprise: true },
]

const FAQS = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes — every plan starts with a 14-day free trial. No credit card required. You can explore the full Growth plan during your trial and pick the right tier when you’re ready.',
  },
  {
    question: 'How does billing work?',
    answer: 'Plans are billed monthly or annually. Annual billing saves you roughly two months compared to monthly. You can upgrade, downgrade, or cancel anytime from your dashboard.',
  },
  {
    question: 'Are there setup fees?',
    answer: 'No setup fees on Starter and Growth. For Enterprise, onboarding is included and we handle resident, unit, and dues import at no extra cost.',
  },
  {
    question: 'Can I switch plans later?',
    answer: 'Absolutely. You can upgrade or downgrade at any time. Changes take effect immediately and we prorate the difference on your next invoice.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI, all major credit and debit cards, netbanking, and bank transfers for annual plans. GST invoices are provided for all business payments.',
  },
]

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-primary-600" aria-label="Yes" />
    ) : (
      <X className="mx-auto h-4 w-4 text-charcoal-300" aria-label="No" />
    )
  }
  return <span className="text-sm text-charcoal-700">{value}</span>
}

export default function PricingPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  const [annual, setAnnual] = useState(true)

  return (
    <>
      <SEO
        title="Pricing — Simple, transparent plans"
        description="AiraNexus pricing plans for every community size. Starter from ₹2,999/mo, Growth from ₹5,999/mo, and custom Enterprise. 14-day free trial."
        path="/pricing"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="badge-primary">Pricing</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              Pricing that scales with <span className="text-gradient">your community</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Simple, transparent plans. No setup fees, no hidden costs. Cancel anytime.
            </p>

            {/* Billing toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-charcoal-200 bg-white p-1 shadow-soft">
              <button
                onClick={() => setAnnual(false)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  !annual ? 'bg-primary-500 text-white' : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
                aria-pressed={!annual}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  annual ? 'bg-primary-500 text-white' : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
                aria-pressed={annual}
              >
                Annual
                <span className="ml-1.5 text-xs text-lime-600">Save 17%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-hero-gradient pb-4">
        <div className="container-custom pb-20 lg:pb-28">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-stretch">
            {PLANS.map((plan, i) => {
              const price = annual ? plan.annual : plan.monthly
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                  className={`relative flex flex-col rounded-3xl border p-7 ${
                    plan.highlighted
                      ? 'border-transparent bg-brand-gradient text-white shadow-teal-xl lg:-mt-4 lg:mb-0'
                      : 'border-charcoal-100 bg-white shadow-card'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary-700 shadow-soft">
                      <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                      Most Popular
                    </span>
                  )}
                  <h3 className={`text-lg font-semibold ${plan.highlighted ? 'text-white' : 'text-charcoal-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-1 text-sm ${plan.highlighted ? 'text-white/85' : 'text-charcoal-500'}`}>
                    {plan.tagline}
                  </p>
                  <div className="mt-6">
                    {price === null ? (
                      <p className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-charcoal-900'}`}>Custom</p>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-charcoal-900'}`}>
                          ₹{price.toLocaleString('en-IN')}
                        </span>
                        <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-charcoal-500'}`}>/mo</span>
                      </div>
                    )}
                    {price !== null && (
                      <p className={`mt-1 text-xs ${plan.highlighted ? 'text-white/75' : 'text-charcoal-500'}`}>
                        billed {annual ? 'annually' : 'monthly'}
                      </p>
                    )}
                  </div>
                  <Link
                    to={plan.href}
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all active:scale-[0.98] ${
                      plan.highlighted
                        ? 'bg-white text-primary-700 hover:bg-primary-50'
                        : 'btn-primary'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <ul className="mt-7 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? 'text-white' : 'text-primary-600'}`} aria-hidden="true" />
                        <span className={plan.highlighted ? 'text-white/90' : 'text-charcoal-700'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Compare plans"
            badgeVariant="neutral"
            title="A side-by-side look"
            description="Everything you get at each tier, in one view."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-charcoal-100">
                  <th className="py-4 pr-4 text-sm font-semibold text-charcoal-900">Feature</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-charcoal-900">Starter</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-primary-700">Growth</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-charcoal-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-charcoal-50">
                    <td className="py-3.5 pr-4 text-sm font-medium text-charcoal-700">{row.feature}</td>
                    <td className="px-4 py-3.5 text-center"><Cell value={row.starter} /></td>
                    <td className="px-4 py-3.5 text-center"><Cell value={row.growth} /></td>
                    <td className="px-4 py-3.5 text-center"><Cell value={row.enterprise} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            badge="Pricing FAQ"
            badgeVariant="cyan"
            title="Questions about pricing"
            description="Everything you need to know about plans, billing, and trials."
          />
          <div className="mt-10">
            <FAQAccordion items={FAQS} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
