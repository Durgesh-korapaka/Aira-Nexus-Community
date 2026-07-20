import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Star, TrendingUp, Users, Zap, X } from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CTABanner from '../../components/ui/CTABanner'

const REASONS = [
  { icon: Zap, title: 'Faster onboarding', description: 'Most communities go live in a week, not a quarter. No lengthy implementations, no consultants.' },
  { icon: TrendingUp, title: 'Better value', description: 'Transparent, all-inclusive pricing with no hidden setup fees or per-visitor charges.' },
  { icon: Users, title: 'Loved by residents', description: 'A 4.8-star app rating and a genuinely modern resident experience — not a clunky legacy UI.' },
]

const COMPARISON = [
  { feature: 'Transparent pricing', airanexus: true, mygate: false },
  { feature: 'No per-visitor fees', airanexus: true, mygate: false },
  { feature: 'WhatsApp-native notices', airanexus: true, mygate: false },
  { feature: 'Automated billing & reconciliation', airanexus: true, mygate: 'Partial' },
  { feature: 'Modern resident app', airanexus: true, mygate: 'Legacy' },
  { feature: 'AGM-ready financial reports', airanexus: true, mygate: false },
  { feature: 'Polls & voting', airanexus: true, mygate: false },
  { feature: 'Amenity booking', airanexus: true, mygate: true },
  { feature: '7-day onboarding', airanexus: true, mygate: false },
]

const TESTIMONIALS = [
  { quote: 'We switched from MyGate to AiraNexus and our residents noticed immediately. The app is faster, billing is automated, and support actually responds.', name: 'Rahul Mehta', role: 'Secretary, Palm Grove Apartments', id: 415829 },
  { quote: 'AiraNexus gave us everything MyGate did, plus proper financial reports and WhatsApp notices — at a better price.', name: 'Sneha Patel', role: 'Treasurer, Greenfield Estates', id: 1043471 },
]

const FAQS = [
  { question: 'Why switch from MyGate to AiraNexus?', answer: 'AiraNexus offers a faster, more modern app, transparent all-inclusive pricing with no per-visitor fees, WhatsApp-native notices, automated billing with reconciliation, and AGM-ready financial reports — all in one platform.' },
  { question: 'How long does migration take?', answer: 'Most communities migrate within a week. We import your residents, units, and dues, retrain your security staff, and support you through go-live.' },
  { question: 'Will my residents notice a difference?', answer: 'Yes — in a good way. The AiraNexus app is faster, cleaner, and easier to use, with WhatsApp-native notices and a 4.8-star app store rating.' },
  { question: 'Is there a trial?', answer: 'Yes. Every plan starts with a 14-day free trial, no credit card required. You can run AiraNexus alongside MyGate during the trial.' },
]

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? <Check className="mx-auto h-4 w-4 text-primary-600" aria-label="Yes" /> : <X className="mx-auto h-4 w-4 text-charcoal-300" aria-label="No" />
  }
  return <span className="text-sm text-charcoal-700">{value}</span>
}

export default function MyGateAlternativePage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  return (
    <>
      <SEO
        title="MyGate Alternative — Why communities switch to AiraNexus"
        description="Looking for a MyGate alternative? AiraNexus offers transparent pricing, a modern app, automated billing, WhatsApp notices, and AGM-ready reports."
        path="/mygate-alternative"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">MyGate Alternative</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              The modern <span className="text-gradient">MyGate alternative</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Transparent pricing, a faster app, automated billing, and reports your auditor will
              love. Here’s why communities switch from MyGate to AiraNexus.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/request-demo" className="btn-primary px-6 py-3.5 text-base">Book a Demo <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link to="/pricing" className="btn-ghost px-5 py-3.5 text-base">Compare Pricing</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Why switch" badgeVariant="lime" title={<>Three reasons to <span className="text-gradient">make the switch</span></>} description="What you get with AiraNexus that you don’t with MyGate." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }} className="card-hover group">
                <div className="icon-circle-lg transition-transform duration-300 group-hover:scale-110"><r.icon className="h-6 w-6" aria-hidden="true" /></div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 text-pretty">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading badge="Head-to-head" badgeVariant="cyan" title="AiraNexus vs MyGate" description="A feature-by-feature comparison." />
          <div className="mt-12 overflow-x-auto">
            <table className="mx-auto w-full min-w-[640px] max-w-3xl border-collapse text-left">
              <thead>
                <tr className="border-b border-charcoal-100">
                  <th className="py-4 pr-4 text-sm font-semibold text-charcoal-900">Feature</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-primary-700">AiraNexus</th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-charcoal-500">MyGate</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-b border-charcoal-50">
                    <td className="py-3.5 pr-4 text-sm font-medium text-charcoal-700">{row.feature}</td>
                    <td className="px-4 py-3.5 text-center"><Cell value={row.airanexus} /></td>
                    <td className="px-4 py-3.5 text-center"><Cell value={row.mygate} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Switched from MyGate" title="Communities that made the switch" description="Real stories from committees who moved from MyGate to AiraNexus." />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <motion.figure key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }} className="card-hover flex flex-col">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-700 text-pretty">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-charcoal-100 pt-4">
                  <img src={`https://images.pexels.com/photos/${t.id}/pexels-photo-${t.id}.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2`} alt="" loading="lazy" decoding="async" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">{t.name}</p>
                    <p className="text-xs text-charcoal-500">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="FAQ" badgeVariant="cyan" title="Switching from MyGate" align="left" />
          <div className="mt-10"><FAQAccordion items={FAQS} /></div>
        </div>
      </section>

      <CTABanner title="Ready to switch from MyGate?" description="Book a demo and we'll handle the migration for you — most communities switch in a week." />
    </>
  )
}
