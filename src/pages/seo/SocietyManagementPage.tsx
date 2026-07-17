import { motion } from 'framer-motion'
import { Building2, KeyRound, Users, Wallet } from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FeatureCard from '../../components/ui/FeatureCard'
import StatCard from '../../components/ui/StatCard'
import CTABanner from '../../components/ui/CTABanner'

const features = [
  { icon: Wallet, title: 'Society Billing', description: 'Automated maintenance collection with UPI, cards, and netbanking plus real-time arrears tracking.' },
  { icon: Users, title: 'Member Management', description: 'Verified directory of all society members with roles, units, and family details.' },
  { icon: KeyRound, title: 'Gate Security', description: 'Digital visitor passes, guard-side validation, and a complete entry/exit log.' },
  { icon: Building2, title: 'Facility Booking', description: 'Reserve clubhouses, pools, and sports courts with conflict-free slot management.' },
]

export default function SocietyManagementPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  return (
    <>
      <SEO
        title="Society Management Software — Streamline Your RWA Operations"
        description="Aira Nexus society management software automates billing, member management, gate security, and facility booking for RWAs and cooperative societies."
        path="/society-management-software"
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
              Society Management Software
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Streamline your <span className="text-gradient">society operations</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              The complete platform for RWAs and cooperative societies — automate billing, secure
              your gate, and keep every member informed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-white">
        <div className="container-custom grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          <StatCard value="500+" label="Societies" />
          <StatCard value="50K+" label="Members" />
          <StatCard value="₹40Cr+" label="Dues collected" />
          <StatCard value="99.9%" label="Uptime" />
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Core modules"
            title={<>Four pillars of <span className="text-gradient">society management</span></>}
            description="Everything an RWA needs to run a modern, transparent society."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={(i % 2) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Why societies choose us"
            badgeVariant="lime"
            title={<>Built for <span className="text-gradient">Indian societies</span></>}
            description="From cooperative housing societies to large RWAs, Aira Nexus adapts to your governance model."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'RWA elections', description: 'Run transparent, tamper-proof committee elections with digital voting.' },
              { title: 'AGM management', description: 'Publish notices, minutes, and financial reports that members can verify.' },
              { title: 'Vendor & AMC tracking', description: 'Maintain a central register of vendors, contracts, and renewal dates.' },
              { title: 'Notice board', description: 'Publish circulars with read-receipts and mandatory acknowledgements.' },
              { title: 'Polls & surveys', description: 'Gather member opinions on decisions that affect the community.' },
              { title: 'Document vault', description: 'Permissioned storage for bylaws, invoices, and compliance records.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card-hover"
              >
                <h3 className="text-base font-semibold text-charcoal-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to upgrade your society?"
        description="See how Aira Nexus can transform your RWA operations. Book a free, personalized demo today."
        primaryLabel="Book a Demo"
        secondaryLabel="Explore Features"
        secondaryTo="/features"
      />
    </>
  )
}
