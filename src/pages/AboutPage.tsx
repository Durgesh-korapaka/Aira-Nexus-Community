import { motion } from 'framer-motion'
import { Heart, Lightbulb, ShieldCheck, Target, Users, Zap, Eye } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import StatCard from '../components/ui/StatCard'
import CTABanner from '../components/ui/CTABanner'

const VALUES = [
  { icon: Heart, title: 'Community first', description: 'Every decision starts with what’s best for the communities we serve.' },
  { icon: Zap, title: 'Bias for action', description: 'We ship fast, learn fast, and fix fast. Momentum is a feature.' },
  { icon: ShieldCheck, title: 'Trust by design', description: 'Security, privacy, and transparency are non-negotiable defaults.' },
  { icon: Lightbulb, title: 'Curiosity driven', description: 'We ask why, challenge assumptions, and stay close to real users.' },
  { icon: Users, title: 'Inclusive by default', description: 'Our products work for every resident, regardless of tech fluency.' },
  { icon: Target, title: 'Outcomes over output', description: 'We measure success by community outcomes, not feature counts.' },
]

const STATS = [
  { value: '2021', label: 'Founded in Bangalore' },
  { value: '500+', label: 'Communities served' },
  { value: '50K+', label: 'Residents onboarded' },
  { value: '40+', label: 'Team members' },
]

const TEAM = [
  { name: 'Arjun Rao', role: 'Co-founder & CEO', id: 220453 },
  { name: 'Meera Iyer', role: 'Co-founder & CTO', id: 415829 },
  { name: 'Karthik Reddy', role: 'Head of Product', id: 7640 },
  { name: 'Sneha Patel', role: 'Head of Customer Success', id: 1043471 },
]

export default function AboutPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  return (
    <>
      <SEO
        title="About — The team behind AiraNexus"
        description="AiraNexus is on a mission to make community management effortless. Meet the team building the platform trusted by 500+ communities across India."
        path="/about"
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
            <span className="badge-primary">About us</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              We make community management <span className="text-gradient">effortless</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              AiraNexus started in 2021 when two apartment owners got tired of chasing maintenance
              dues over WhatsApp. Today we serve 500+ communities across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="badge-neutral">Our story</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
                From a WhatsApp group to a national platform
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal-600 text-pretty">
                <p>
                  In 2021, Arjun and Meera — both apartment owners in Bangalore — were volunteering on
                  their respective committees. They spent weekends reconciling spreadsheets, chasing
                  dues, and answering the same questions on five different WhatsApp groups.
                </p>
                <p>
                  Convinced there had to be a better way, they built a prototype that automated billing
                  and complaints for their own communities. Word spread. Within a year, 50 communities
                  had asked to use it. AiraNexus was born.
                </p>
                <p>
                  Today we’re a team of 40+ engineers, designers, and community specialists obsessed
                  with making life easier for the people who run where we live.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="The AiraNexus team collaborating"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom grid gap-6 lg:grid-cols-2">
          {[
            { icon: Target, title: 'Our mission', body: 'To give every community — from a 40-villa layout to a 1,200-flat township — the tools to run beautifully, transparently, and effortlessly.' },
            { icon: Eye, title: 'Our vision', body: 'A world where living in a managed community feels as smooth as living in a five-star hotel, with technology that stays out of the way until you need it.' },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              className="card-hover"
            >
              <div className="icon-circle-lg">
                <c.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-charcoal-900">{c.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-charcoal-600 text-pretty">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Our values"
            badgeVariant="lime"
            title="What we believe"
            description="The principles that shape how we build, hire, and serve."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: 'easeOut' }}
                className="card-hover group"
              >
                <div className="icon-circle-lg transition-transform duration-300 group-hover:scale-110">
                  <v.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600 text-pretty">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-charcoal-50 py-12">
        <div className="container-custom grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.05} />
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Leadership"
            badgeVariant="cyan"
            title="Meet the team"
            description="The people building AiraNexus."
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <motion.figure
                key={m.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                className="text-center"
              >
                <div className="mx-auto overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
                  <img
                    src={`https://images.pexels.com/photos/${m.id}/pexels-photo-${m.id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2`}
                    alt={m.name}
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={400}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-base font-semibold text-charcoal-900">{m.name}</p>
                  <p className="text-sm text-charcoal-500">{m.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
