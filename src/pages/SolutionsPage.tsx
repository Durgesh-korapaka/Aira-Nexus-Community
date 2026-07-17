import { motion } from 'framer-motion'
import { Building2, Home, Hotel, KeyRound, Layers, Users } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/ui/CTABanner'

const solutions = [
  {
    icon: Building2,
    title: 'Apartments',
    description: 'High-rise towers and multi-block apartment complexes with hundreds of units, multiple towers, and shared amenities.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Tower-wise billing', 'Shared amenity booking', 'Inter-tower visitor policies'],
  },
  {
    icon: KeyRound,
    title: 'Gated Communities',
    description: 'Walled communities with boom barriers, guard houses, and a mix of villas and low-rise apartments.',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Boom-barrier integration', 'Guard patrol logs', 'Per-resident guest lists'],
  },
  {
    icon: Home,
    title: 'Villa Communities',
    description: 'Independent villas with private gates, individual maintenance accounts, and shared common areas.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Per-villa accounts', 'Common-area upkeep', 'Vendor & maid registry'],
  },
  {
    icon: Layers,
    title: 'Residential Complexes',
    description: 'Mixed-use complexes combining residential towers with retail, office, and clubhouse spaces.',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Mixed-use billing', 'Shared facility access', 'Tenant & owner split'],
  },
  {
    icon: Hotel,
    title: 'Builders & Developers',
    description: 'Hand over ready-to-run communities to RWA committees with full data, dues, and vendor history intact.',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Handover-ready setup', 'Dues & asset transfer', 'White-labelled resident app'],
  },
  {
    icon: Users,
    title: 'Committee Members',
    description: 'Run transparent AGMs, publish minutes, manage budgets, and keep every resident informed and engaged.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['AGM & voting tools', 'Budget tracking', 'Notice & minute publishing'],
  },
]

const roles = [
  {
    title: 'For Residents',
    description: 'Pay dues in two taps, raise complaints with photos, pre-approve guests, book amenities, and vote — all from a single app.',
    features: ['One-tap UPI payments', 'Live complaint tracking', 'Digital guest passes', 'Amenity reservations'],
  },
  {
    title: 'For Community Managers',
    description: 'Replace five tools with one. Automate billing, monitor complaints, manage visitors, and publish notices from a single dashboard.',
    features: ['Unified control center', 'Automated billing runs', 'SLA-compliant complaint queue', 'Financial reporting suite'],
  },
]

export default function SolutionsPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  return (
    <>
      <SEO
        title="Solutions — Built for Every Community Type"
        description="Aira Nexus serves apartments, gated communities, villas, residential complexes, builders, and committee members with tailored workflows."
        path="/solutions"
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
            <span className="badge-cyan">
              <Building2 className="h-3.5 w-3.5" />
              Solutions
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Built for <span className="text-gradient">every community</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Whether you manage a 40-unit villa enclave or a 2,000-apartment township, Aira Nexus
              adapts to your structure, scale, and governance style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions with alternating layout */}
      <section className="section-padding">
        <div className="container-custom space-y-16 lg:space-y-24">
          {solutions.map((solution, i) => (
            <div key={solution.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={i % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="icon-circle-lg">
                  <solution.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-bold tracking-tight text-charcoal-900 sm:text-3xl">
                  {solution.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-charcoal-600 text-pretty">
                  {solution.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                        <span className="text-xs">✓</span>
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 24 : -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={i % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="overflow-hidden rounded-2xl shadow-elevated">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="500"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="By role"
            badgeVariant="lime"
            title={<>One platform, <span className="text-gradient">two experiences</span></>}
            description="Residents get a delightful app. Managers get a powerful dashboard. Both stay perfectly in sync."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover"
              >
                <h3 className="text-xl font-semibold text-charcoal-900">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{role.description}</p>
                <ul className="mt-5 grid grid-cols-2 gap-3">
                  {role.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-charcoal-700">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                        <span className="text-xs">✓</span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Find your community's perfect fit"
        description="Tell us about your community and we'll tailor a demo to your structure, scale, and governance needs."
        primaryLabel="Book a Demo"
        secondaryLabel="Explore Features"
      />
    </>
  )
}
