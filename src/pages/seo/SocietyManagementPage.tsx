import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarClock, MessageSquare, ShieldCheck, Trees, Users, Vote } from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FeatureCard from '../../components/ui/FeatureCard'
import StatCard from '../../components/ui/StatCard'
import CTABanner from '../../components/ui/CTABanner'

const FEATURES = [
  { icon: Users, title: 'Visitor & gate management', description: 'Pre-approve guests, generate QR passes, and watch gate activity in real time across all entrances.' },
  { icon: CalendarClock, title: 'Amenity booking', description: 'Residents book the gym, pool, and clubhouse with conflict-free calendars and fair-use policies.' },
  { icon: MessageSquare, title: 'WhatsApp-native notices', description: 'Publish notices with read receipts, pinning, and category filters — sent straight to WhatsApp.' },
  { icon: Vote, title: 'Polls & voting', description: 'Run committee elections and quick polls with tamper-proof, transparent results.' },
]

const STATS = [
  { value: '500+', label: 'Gated communities' },
  { value: '50K+', label: 'Residents served' },
  { value: '4.8/5', label: 'Average app rating' },
  { value: '99.9%', label: 'Platform uptime' },
]

export default function SocietyManagementPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  return (
    <>
      <SEO
        title="Society Management Software"
        description="AiraNexus society management software for gated communities — visitor management, amenity booking, notices, polls, and billing in one platform."
        path="/society-management-software"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mx-auto max-w-3xl text-center">
            <span className="badge-primary"><Trees className="h-3.5 w-3.5" aria-hidden="true" /> Society Management Software</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              Run your society <span className="text-gradient">like clockwork</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              The all-in-one platform for gated communities — visitors, amenities, notices, polls,
              and billing, beautifully integrated.
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
          <SectionHeading badge="Features" title={<>Built for <span className="text-gradient">gated communities</span></>} description="Everything your managing committee and residents need, in one place." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={(i % 2) * 0.08} />
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

      {/* Feature grid with image */}
      <section className="section-padding bg-white">
        <div className="container-custom grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span className="badge-lime"><ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Security</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">A gate that never sleeps</h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-600 text-pretty">
              Security staff get a purpose-built console for visitor check-ins, delivery approvals,
              and staff attendance. Residents pre-approve guests from the app and get instant alerts
              when someone arrives.
            </p>
            <Link to="/features" className="btn-link mt-6 text-base">Explore all features <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
              <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Gated community" loading="lazy" decoding="async" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
