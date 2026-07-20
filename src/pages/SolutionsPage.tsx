import { motion } from 'framer-motion';
import {
  Building2,
  ShieldCheck,
  CreditCard,
  Users,
  BarChart3,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';

const solutions = [
  {
    badge: 'For RWA Committees',
    title: 'Empower your committee with data',
    description:
      'Give your managing committee real-time visibility into collections, arrears, vendor performance, and resident satisfaction. Make data-driven decisions at every AGM.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Real-time dashboards', 'AGM-ready reports', 'Audit-ready accounting'],
    icon: BarChart3,
  },
  {
    badge: 'For Facility Managers',
    title: 'Streamline operations end to end',
    description:
      'Manage vendors, staff attendance, complaints, and preventive maintenance from a single dashboard. Assign work orders, track SLAs, and measure performance.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Vendor & staff management', 'SLA-tracked helpdesk', 'Preventive maintenance'],
    icon: Wrench,
    reverse: true,
  },
  {
    badge: 'For Security Teams',
    title: 'Modernize your gate operations',
    description:
      'Replace paper registers with a digital gate pass system. Verify visitors via QR codes, track staff entry and exit, and keep residents informed in real time.',
    image: 'https://images.pexels.com/photos/3196338/pexels-photo-3196338.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['QR visitor check-in', 'Staff verification', 'Real-time gate logs'],
    icon: ShieldCheck,
  },
  {
    badge: 'For Residents',
    title: 'One app for everything',
    description:
      'Residents pay maintenance, book amenities, raise complaints, and stay updated with community announcements — all from a beautiful mobile app.',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Pay maintenance online', 'Book amenities', 'Raise & track complaints'],
    icon: Users,
    reverse: true,
  },
  {
    badge: 'For Treasurers',
    title: 'Accounting without the headache',
    description:
      'Automate invoice generation, track payments, reconcile dues, and generate balance sheets. Export to Tally or your preferred accounting tool in one click.',
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Automated invoicing', 'Instant reconciliation', 'Tally export'],
    icon: CreditCard,
  },
  {
    badge: 'For Property Managers',
    title: 'Manage multiple properties at scale',
    description:
      'Oversee multiple communities from a unified console. Compare performance across properties, standardize processes, and onboard new societies in days.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    points: ['Multi-property console', 'Standardized workflows', 'Cross-property benchmarks'],
    icon: Building2,
    reverse: true,
  },
];

const roles = [
  { icon: BarChart3, label: 'RWA Committees' },
  { icon: Wrench, label: 'Facility Managers' },
  { icon: ShieldCheck, label: 'Security Teams' },
  { icon: Users, label: 'Residents' },
  { icon: CreditCard, label: 'Treasurers' },
  { icon: Building2, label: 'Property Managers' },
];

export default function SolutionsPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  return (
    <>
      <SEO
        title="Solutions — AiraNexus for Every Role"
        description="AiraNexus serves RWA committees, facility managers, security teams, residents, treasurers, and property managers with tailored workflows."
        canonical="https://airanexus.com/solutions"
      />

      <section className="bg-hero-gradient pb-20 pt-32 sm:pt-36">
        <div className="container-custom">
          <SectionHeading
            badge="Solutions"
            title="Built for every role in your community"
            description="From committee members to residents, AiraNexus gives every stakeholder the tools they need to keep the community running smoothly."
          />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {roles.map((r) => (
              <span key={r.label} className="badge-neutral">
                <r.icon className="h-3 w-3" aria-hidden="true" />
                {r.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom space-y-20 lg:space-y-28">
          {solutions.map((s) => (
            <div
              key={s.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                s.reverse ? 'lg:[&>figure]:order-2' : ''
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge-primary">
                  <s.icon className="h-3 w-3" aria-hidden="true" />
                  {s.badge}
                </span>
                <h2 className="mt-4 text-display-sm font-display font-bold tracking-tight text-charcoal-900 text-balance">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal-600 text-pretty">
                  {s.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-charcoal-800">
                      <CheckCircle2 className="h-5 w-5 text-primary-500" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.figure
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="overflow-hidden rounded-4xl border border-charcoal-100 shadow-card-hover"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={533}
                  className="h-full w-full object-cover"
                />
              </motion.figure>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Find your community's solution"
        description="Tell us about your community and we'll tailor a demo to your exact needs."
      />
    </>
  );
}
