import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Building2, CheckCircle2, CreditCard, FileText, Smartphone, Star, Users } from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQAccordion from '../../components/ui/FAQAccordion'
import CTABanner from '../../components/ui/CTABanner'

const FEATURES = [
  { icon: CreditCard, title: 'Automated maintenance billing', description: 'Generate invoices on schedule, send WhatsApp reminders, and reconcile payments automatically.' },
  { icon: Users, title: 'Visitor & delivery management', description: 'Pre-approve guests, generate QR passes, and track every visitor at the gate in real time.' },
  { icon: Building2, title: 'Resident & unit directory', description: 'A secure, searchable directory of owners, tenants, and staff across all wings and towers.' },
  { icon: BarChart3, title: 'Wing-wise financial reports', description: 'Real-time dashboards for collections, expenses, and balances — broken down by wing.' },
  { icon: Smartphone, title: 'Resident mobile app', description: 'Native iOS and Android apps so residents pay dues, raise complaints, and book amenities.' },
  { icon: FileText, title: 'AGM-ready reports', description: 'One-click annual reports, balance sheets, and arrears lists ready for your AGM or auditor.' },
]

const BENEFITS = [
  'Cut collection time from weeks to days',
  'Reduce defaulters by up to 40%',
  'Eliminate spreadsheets and manual reconciliation',
  'Give residents one app for everything',
]

const FAQS = [
  { question: 'How long does it take to onboard an apartment complex?', answer: 'Most apartment communities go live within a week. We import your residents, units, and dues, then train your committee and security staff.' },
  { question: 'Can AiraNexus handle multi-tower complexes?', answer: 'Yes. AiraNexus supports unlimited wings and towers with wing-wise billing, reporting, and access control out of the box.' },
  { question: 'Do residents need to download an app?', answer: 'Yes — our native iOS and Android apps give residents the best experience, though WhatsApp integration covers notices and approvals too.' },
  { question: 'What payment methods are supported?', answer: 'Residents can pay via UPI, credit and debit cards, netbanking, and popular wallets. All payments are auto-reconciled.' },
]

export default function ApartmentManagementPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  return (
    <>
      <SEO
        title="Apartment Management Software"
        description="AiraNexus apartment management software automates billing, visitors, complaints, and reporting for apartment complexes of any size."
        path="/apartment-management-software"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">Apartment Management Software</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              Apartment management, <span className="text-gradient">done right</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              The complete platform for apartment complexes — billing, visitors, complaints, and
              reporting in one place.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/request-demo" className="btn-primary px-6 py-3.5 text-base">Book a Demo <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link to="/pricing" className="btn-ghost px-5 py-3.5 text-base">See Pricing</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Features" title={<>Everything an apartment needs, <span className="text-gradient">in one platform</span></>} description="Replace spreadsheets, WhatsApp groups, and legacy software with a single, beautiful system." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={(i % 3) * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span className="badge-lime">Benefits</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">Why committees choose AiraNexus</h2>
            <ul className="mt-6 space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-charcoal-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
              <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Apartment complex" loading="lazy" decoding="async" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <motion.figure initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: 'easeOut' }} className="card-hover text-center">
            <div className="flex justify-center gap-0.5" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />)}
            </div>
            <blockquote className="mt-4 text-lg leading-relaxed text-charcoal-700 text-pretty">
              "AiraNexus transformed how our 240-flat complex runs. Billing that used to take weeks now takes days, and residents finally have one app for everything."
            </blockquote>
            <figcaption className="mt-5 flex items-center justify-center gap-3">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2" alt="" loading="lazy" decoding="async" width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
              <div className="text-left">
                <p className="text-sm font-semibold text-charcoal-900">Arjun Rao</p>
                <p className="text-xs text-charcoal-500">Secretary, Skyline Apartments</p>
              </div>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom max-w-3xl">
          <SectionHeading badge="FAQ" badgeVariant="cyan" title="Apartment management FAQ" align="left" />
          <div className="mt-10"><FAQAccordion items={FAQS} /></div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
