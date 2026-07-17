import { motion } from 'framer-motion'
import { ArrowRight, Check, Star, X } from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FAQAccordion, { type FAQItem } from '../../components/ui/FAQAccordion'
import CTABanner from '../../components/ui/CTABanner'

const reasons = [
  {
    title: 'Modern, resident-loved UX',
    description: 'MyGate works, but residents often find it clunky. Aira Nexus is built like a modern consumer app — residents actually want to use it.',
  },
  {
    title: 'Transparent, flat pricing',
    description: 'No per-unit surprises or opaque enterprise quotes. Flat per-community pricing that committees can budget with confidence.',
  },
  {
    title: 'Faster onboarding',
    description: 'Most communities go live in 3–5 days, not weeks. Our guided setup wizard and free onboarding support get you there fast.',
  },
]

const comparison = [
  { feature: 'Resident app experience', aira: 'Modern, consumer-grade', mygate: 'Functional but dated' },
  { feature: 'Pricing model', aira: 'Flat per community', mygate: 'Per-unit / opaque' },
  { feature: 'Onboarding time', aira: '3–5 days', mygate: '2–4 weeks' },
  { feature: 'Automated billing', aira: true, mygate: true },
  { feature: 'Visitor management', aira: true, mygate: true },
  { feature: 'Complaint tracking', aira: true, mygate: true },
  { feature: 'Financial reports', aira: true, mygate: 'Limited' },
  { feature: 'WhatsApp integration', aira: true, mygate: false },
  { feature: 'Polls & voting', aira: true, mygate: false },
  { feature: 'Free trial', aira: '14 days, no card', mygate: 'On request' },
]

const testimonials = [
  {
    name: 'Amit Patel',
    role: 'Treasurer, Brigade Gateway',
    quote: 'We moved from MyGate to Aira Nexus last year. The app is night and day — residents actually use it now. Billing is simpler and the reports are far better.',
    avatar: 'https://images.pexels.com/photos/7640/pexels-photo-7640.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
  {
    name: 'Sneha Reddy',
    role: 'Manager, Sobha Dream Acres',
    quote: 'Onboarding took 4 days instead of 3 weeks. The team actually listened to what we needed. The WhatsApp integration alone saved us hours every week.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
]

const faqs: FAQItem[] = [
  { question: 'Is it easy to switch from MyGate to Aira Nexus?', answer: 'Yes. We handle the migration for you — importing residents, units, dues, and vendor data. Most communities switch over in under a week with zero downtime.' },
  { question: 'Will residents need to learn a new app?', answer: 'Aira Nexus is designed to be intuitive. Most residents complete their first payment or complaint in under two minutes. We also provide in-app onboarding guides.' },
  { question: 'How does pricing compare to MyGate?', answer: 'Aira Nexus uses flat per-community pricing starting at ₹2,999/month, regardless of how many units you have within your plan limit. This is typically more transparent and often cheaper than per-unit models.' },
  { question: 'Do you support all MyGate features?', answer: 'Yes — billing, visitor management, complaints, and resident directory are all included. We also add WhatsApp integration, polls & voting, and advanced financial reporting that MyGate does not offer.' },
]

function renderCell(value: string | boolean, highlight: boolean) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className={`flex h-5 w-5 items-center justify-center rounded-full ${highlight ? 'bg-primary-100 text-primary-700' : 'bg-greenish-100 text-greenish-600'}`}>
        <Check className="h-3 w-3" />
      </span>
    ) : (
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500">
        <X className="h-3 w-3" />
      </span>
    )
  }
  return <span className={`text-sm ${highlight ? 'font-semibold text-primary-700' : 'text-charcoal-600'}`}>{value}</span>
}

export default function MyGateAlternativePage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  return (
    <>
      <SEO
        title="MyGate Alternative — Why Communities Switch to Aira Nexus"
        description="Looking for a MyGate alternative? Aira Nexus offers a modern, resident-loved app, transparent flat pricing, and faster onboarding. See the comparison."
        path="/mygate-alternative"
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
            <span className="badge-lime">
              <ArrowRight className="h-3.5 w-3.5" />
              MyGate Alternative
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              The modern <span className="text-gradient">MyGate alternative</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Communities across India are switching to Aira Nexus for a better resident
              experience, transparent pricing, and faster onboarding. Here's why.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Why switch"
            title={<>Three reasons communities <span className="text-gradient">choose Aira Nexus</span></>}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700 font-bold">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-charcoal-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Comparison"
            badgeVariant="cyan"
            title={<>Aira Nexus vs. <span className="text-gradient">MyGate</span></>}
            description="An honest, feature-by-feature comparison."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-charcoal-200">
                  <th className="py-4 text-left text-sm font-semibold text-charcoal-900">Feature</th>
                  <th className="py-4 text-center text-sm font-semibold text-primary-600">Aira Nexus</th>
                  <th className="py-4 text-center text-sm font-semibold text-charcoal-500">MyGate</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 1 ? 'bg-white/50' : ''}>
                    <td className="py-3.5 text-sm text-charcoal-700">{row.feature}</td>
                    <td className="py-3.5 text-center">{renderCell(row.aira, true)}</td>
                    <td className="py-3.5 text-center">{renderCell(row.mygate, false)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            badgeVariant="lime"
            title={<>Communities that <span className="text-gradient">made the switch</span></>}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-700">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="40"
                    height="40"
                  />
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">{t.name}</p>
                    <p className="text-xs text-charcoal-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading badge="FAQ" title={<>Switching questions</>} />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to switch from MyGate?"
        description="We'll handle the migration for you. Book a free demo and see how easy switching to Aira Nexus can be."
        primaryLabel="Book a Demo"
        secondaryLabel="Compare Features"
        secondaryTo="/features"
      />
    </>
  )
}
