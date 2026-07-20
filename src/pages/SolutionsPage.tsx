import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Building2,
  Castle,
  Home,
  HardHat,
  ShieldCheck,
  Trees,
  UserCog,
  Users,
} from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import CTABanner from '../components/ui/CTABanner'

const SOLUTIONS = [
  {
    icon: Building2,
    title: 'Apartments',
    description: 'Multi-tower apartment complexes with hundreds of units, mixed owner-tenant populations, and complex maintenance schedules.',
    points: ['Wing-wise billing & reports', 'Visitor & delivery management', 'Resident app for owners and tenants'],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Trees,
    title: 'Gated Communities',
    description: 'Sprawling gated communities with villas, amenities, and shared infrastructure that need coordinated management.',
    points: ['Amenity booking & calendars', 'Perimeter & gate security', 'Community-wide notices & polls'],
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Home,
    title: 'Villa Communities',
    description: 'Villa layouts with independent homes, private gates, and shared common areas that need light-touch coordination.',
    points: ['Independent unit billing', 'Shared vendor management', 'Light-touch notice board'],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Castle,
    title: 'Residential Complexes',
    description: 'Mixed-use residential complexes with retail, offices, and residences sharing facilities and security.',
    points: ['Multi-entity billing', 'Shared facility scheduling', 'Role-based access control'],
    image: 'https://images.pexels.com/photos/1439742/pexels-photo-1439742.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: HardHat,
    title: 'Builders & Developers',
    description: 'Hand over a ready-to-use platform to your buyers’ associations on possession day — no migration headaches.',
    points: ['Pre-handover setup', 'Unit & owner import', 'White-label resident app'],
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: ShieldCheck,
    title: 'Committee Members',
    description: 'Empower your committee with dashboards, reports, and approval workflows that make governance effortless.',
    points: ['One-click AGM reports', 'Approval workflows', 'Transparent audit trails'],
    image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

const ROLES = [
  {
    icon: Users,
    title: 'For Residents',
    description: 'Pay dues, raise complaints, book amenities, approve visitors, and vote in polls — all from one beautiful app.',
    points: ['Pay maintenance in 2 taps', 'Track complaints end-to-end', 'Book the gym, pool, or clubhouse', 'Pre-approve guests instantly'],
  },
  {
    icon: UserCog,
    title: 'For Community Managers',
    description: 'Run the entire community from a single dashboard with automations, reports, and audit trails built in.',
    points: ['Automated billing & reminders', 'Real-time financial dashboards', 'Vendor & staff management', 'One-click AGM-ready reports'],
  },
]

export default function SolutionsPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  return (
    <>
      <SEO
        title="Solutions — Built for every community type"
        description="AiraNexus solutions for apartments, gated communities, villas, residential complexes, builders, and committee members."
        path="/solutions"
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
            <span className="badge-primary">Solutions</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              Built for <span className="text-gradient">every community</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Whether you manage a 40-unit villa layout or a 1,200-flat township, AiraNexus adapts to
              your structure, governance, and workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions alternating */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-20 lg:space-y-28">
          {SOLUTIONS.map((s, i) => {
            const reversed = i % 2 === 1
            return (
              <div key={s.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, x: reversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={reversed ? 'lg:order-2' : ''}
                >
                  <div className="icon-circle-lg">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-charcoal-600 text-pretty">{s.description}</p>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-charcoal-700">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={reversed ? 'lg:order-1' : ''}
                >
                  <div className="overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Roles */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            badge="By role"
            badgeVariant="cyan"
            title="Made for everyone in your community"
            description="AiraNexus meets residents, managers, and committee members where they are — with the right tools for each."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {ROLES.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="card-hover"
              >
                <div className="icon-circle-lg">
                  <r.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-charcoal-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 text-pretty">{r.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/request-demo" className="btn-primary">
              See it for your community
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
