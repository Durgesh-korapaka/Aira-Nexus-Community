import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, ShieldCheck, UserCog, Users } from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FeatureCard from '../../components/ui/FeatureCard'
import StatCard from '../../components/ui/StatCard'
import CTABanner from '../../components/ui/CTABanner'

const AUDIENCES = [
  { icon: Users, title: 'For residents', description: 'Pay dues, raise complaints, book amenities, approve visitors, and vote — all from one app.' },
  { icon: UserCog, title: 'For managers', description: 'Run the entire community from a single dashboard with automations, reports, and audit trails.' },
  { icon: ShieldCheck, title: 'For committees', description: 'Transparent governance with one-click reports, approval workflows, and tamper-proof polls.' },
]

const STATS = [
  { value: '500+', label: 'Communities' },
  { value: '50K+', label: 'Residents' },
  { value: '12', label: 'Integrated modules' },
  { value: '99.9%', label: 'Uptime' },
]

const COMMUNITY_TYPES = [
  'Apartments', 'Gated communities', 'Villa layouts', 'Residential complexes', 'Townships', 'Co-operative societies',
]

export default function CommunityPlatformPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  return (
    <>
      <SEO
        title="Community Management Platform"
        description="AiraNexus is the AI-powered community management platform for apartments, gated communities, and residential complexes — billing, visitors, complaints, and more."
        path="/community-management-platform"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">Community Management Platform</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              One platform for <span className="text-gradient">every community</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              AiraNexus brings billing, complaints, visitors, and communication together — for any
              residential community, of any size.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/request-demo" className="btn-primary px-6 py-3.5 text-base">Book a Demo <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              <Link to="/features" className="btn-ghost px-5 py-3.5 text-base">Explore Features</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audiences */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Built for everyone" badgeVariant="cyan" title={<>Made for <span className="text-gradient">every role</span></>} description="AiraNexus meets residents, managers, and committees where they are." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {AUDIENCES.map((a, i) => (
              <FeatureCard key={a.title} icon={a.icon} title={a.title} description={a.description} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-charcoal-50 py-12">
        <div className="container-custom grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.05} />)}
        </div>
      </section>

      {/* Community types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading badge="Works for" badgeVariant="lime" title="Every kind of community" description="From a 40-villa layout to a 1,200-flat township." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_TYPES.map((t, i) => (
              <motion.div key={t} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4, delay: (i % 3) * 0.05, ease: 'easeOut' }} className="flex items-center gap-3 rounded-2xl border border-charcoal-100 bg-white p-5 shadow-soft">
                <span className="icon-circle"><Building2 className="h-5 w-5" aria-hidden="true" /></span>
                <span className="text-sm font-medium text-charcoal-900">{t}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/solutions" className="btn-link text-base">See all solutions <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
