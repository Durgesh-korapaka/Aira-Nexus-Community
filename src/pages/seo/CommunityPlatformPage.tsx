import { motion } from 'framer-motion'
import { Building2, KeyRound, Users } from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FeatureCard from '../../components/ui/FeatureCard'
import StatCard from '../../components/ui/StatCard'
import CTABanner from '../../components/ui/CTABanner'

const audiences = [
  { icon: Users, title: 'For Residents', description: 'Pay dues, raise complaints, pre-approve guests, and book amenities — all from a single app.' },
  { icon: Building2, title: 'For Managers', description: 'Replace five tools with one. Automate billing, monitor complaints, and publish notices from one dashboard.' },
  { icon: KeyRound, title: 'For Security', description: 'Validate visitors in seconds with QR passes and keep a complete, auditable entry log.' },
]

const communityTypes = [
  'Apartment Complexes',
  'Gated Communities',
  'Villa Communities',
  'Residential Townships',
  'Cooperative Housing Societies',
  'Mixed-Use Complexes',
]

export default function CommunityPlatformPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  return (
    <>
      <SEO
        title="Community Management Platform — One Platform for Every Community"
        description="Aira Nexus is a unified community management platform for apartments, gated communities, and residential complexes. Billing, complaints, visitors, and finances — all in one place."
        path="/community-management-platform"
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
              <Building2 className="h-3.5 w-3.5" />
              Community Management Platform
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              One platform for <span className="text-gradient">every community</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Aira Nexus unifies billing, complaints, visitors, and finances into a single
              platform that adapts to any community type — from 20-unit villas to 2,000-apartment townships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Audience features */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Built for everyone"
            title={<>Three experiences, <span className="text-gradient">one platform</span></>}
            description="Residents, managers, and security each get an experience tailored to their role."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {audiences.map((audience, i) => (
              <FeatureCard key={audience.title} {...audience} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-white">
        <div className="container-custom grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          <StatCard value="500+" label="Communities" />
          <StatCard value="50K+" label="Residents" />
          <StatCard value="12" label="Integrated modules" />
          <StatCard value="99.9%" label="Uptime" />
        </div>
      </section>

      {/* Community types */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Community types"
            badgeVariant="cyan"
            title={<>Works for <span className="text-gradient">every structure</span></>}
            description="No matter how your community is organized, Aira Nexus adapts."
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communityTypes.map((type, i) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="flex items-center gap-3 rounded-xl border border-charcoal-100 bg-white px-5 py-4 shadow-soft"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <span className="text-sm">✓</span>
                </span>
                <span className="text-sm font-medium text-charcoal-700">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Find your community's perfect fit"
        description="Tell us about your community and we'll tailor a demo to your structure and scale."
        primaryLabel="Book a Demo"
        secondaryLabel="View Solutions"
        secondaryTo="/solutions"
      />
    </>
  )
}
