import { motion } from 'framer-motion'
import { Heart, Lightbulb, Shield, Target, Users, Zap } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'
import StatCard from '../components/ui/StatCard'
import CTABanner from '../components/ui/CTABanner'

const values = [
  { icon: Heart, title: 'Resident-first', description: 'Every decision starts with what makes life better for residents and the people serving them.' },
  { icon: Shield, title: 'Trust & security', description: 'We treat community data with the same care as our own. SOC2-aligned, encrypted, audited.' },
  { icon: Zap, title: 'Simplicity wins', description: 'Powerful software is useless if no one uses it. We obsess over intuitive, delightful UX.' },
  { icon: Target, title: 'Outcomes over features', description: 'We measure success by faster collections and resolved complaints — not feature counts.' },
  { icon: Users, title: 'Community-driven', description: 'Our roadmap is shaped by the committees and managers who use Aira Nexus every day.' },
  { icon: Lightbulb, title: 'Always improving', description: 'We ship every week. Feedback loops are short, and good ideas come from everyone.' },
]

const team = [
  { name: 'Arjun Mehta', role: 'Co-founder & CEO', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2' },
  { name: 'Sneha Reddy', role: 'Co-founder & CTO', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2' },
  { name: 'Vikram Singh', role: 'Head of Product', avatar: 'https://images.pexels.com/photos/7640/pexels-photo-7640.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2' },
  { name: 'Ananya Iyer', role: 'Head of Customer Success', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2' },
]

export default function AboutPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  return (
    <>
      <SEO
        title="About — The Team Behind Aira Nexus"
        description="Aira Nexus is on a mission to make community management effortless. Learn about our story, mission, values, and the team building the platform."
        path="/about"
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
              <Heart className="h-3.5 w-3.5" />
              Our Story
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              We're making community management <span className="text-gradient">effortless.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Aira Nexus was born from a simple frustration: running a community shouldn't require
              five tools, three spreadsheets, and a dozen WhatsApp groups.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl text-balance">
                From a frustrated secretary to 500+ communities
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal-600 text-pretty">
                <p>
                  In 2021, our co-founder Arjun became secretary of his 180-unit apartment complex. Within
                  a month he was juggling an Excel sheet for dues, a WhatsApp group for complaints, a
                  paper register for visitors, and a Google Drive for notices.
                </p>
                <p>
                  He assumed there'd be software for this. There was — but it was either built for
                  enterprises, stuck on desktop, or so clunky that residents refused to use it.
                </p>
                <p>
                  So he and Sneha built their own. Within three months, on-time collections at their
                  community jumped from 62% to 91%. Word spread. Today, Aira Nexus powers 500+
                  communities across India.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="The Aira Nexus team at work"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To give every community — regardless of size or budget — the tools to run itself with transparency, efficiency, and delight. No community should be held back by paperwork.',
              },
              {
                icon: Lightbulb,
                title: 'Our Vision',
                description: 'A world where managing a community is as seamless as ordering groceries online — where residents feel informed, managers feel empowered, and committees feel in control.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover"
              >
                <div className="icon-circle-lg">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-charcoal-900">{card.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal-600 text-pretty">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            badgeVariant="lime"
            title={<>The principles that <span className="text-gradient">guide us</span></>}
            description="Six values that shape every product decision, hire, and customer conversation."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="card-hover group"
              >
                <div className="icon-circle-lg group-hover:scale-110 group-hover:bg-primary-100">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal-900">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-white">
        <div className="container-custom grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          <StatCard value="500+" label="Communities served" />
          <StatCard value="50K+" label="Residents managed" />
          <StatCard value="40+" label="Cities across India" />
          <StatCard value="2021" label="Founded in Bengaluru" />
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Our Team"
            badgeVariant="cyan"
            title={<>The people <span className="text-gradient">behind Aira Nexus</span></>}
            description="A small, senior team obsessed with building software communities actually love."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="96"
                  height="96"
                />
                <h3 className="mt-4 text-base font-semibold text-charcoal-900">{member.name}</h3>
                <p className="text-sm text-primary-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to join our mission?"
        description="We're hiring across engineering, product, and customer success. Come build the future of community management with us."
        primaryLabel="See Open Roles"
        primaryTo="/contact"
        secondaryLabel="Learn More"
        secondaryTo="/features"
      />
    </>
  )
}
