import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Lightbulb,
  TrendingUp,
  HandHeart,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import CTABanner from '../components/ui/CTABanner';

const values = [
  { icon: Users, title: 'Community first', description: 'Every decision starts with what is best for the communities we serve.' },
  { icon: ShieldCheck, title: 'Trust & security', description: 'We protect resident data with bank-grade encryption and transparent policies.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We constantly push the boundaries of what community software can do.' },
  { icon: Heart, title: 'Empathy', description: 'We listen to committees, residents, and staff to build what they truly need.' },
  { icon: TrendingUp, title: 'Excellence', description: 'We hold ourselves to the highest standard in product and service.' },
  { icon: HandHeart, title: 'Inclusivity', description: 'We build for every kind of community, big or small, urban or tier-3.' },
];

const stats = [
  { value: '500+', label: 'Communities' },
  { value: '50K+', label: 'Residents' },
  { value: '40+', label: 'Cities' },
  { value: '99.9%', label: 'Uptime' },
];

const team = [
  { name: 'Arjun Mehta', role: 'Co-founder & CEO', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Sneha Iyer', role: 'Co-founder & CTO', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Vikram Rao', role: 'Head of Product', avatar: 'https://images.pexels.com/photos/7640/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Kavya Nair', role: 'Head of Customer Success', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function AboutPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  return (
    <>
      <SEO
        title="About Us — The team behind AiraNexus"
        description="AiraNexus was founded to give Indian residential communities a modern, unified platform. Learn about our story, mission, and team."
        canonical="https://airanexus.com/about"
      />

      {/* Story */}
      <section className="bg-hero-gradient pb-20 pt-32 sm:pt-36">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">Our story</span>
            <h1 className="mt-6 text-display-lg font-display font-extrabold tracking-tight text-charcoal-900 text-balance">
              We&apos;re building the operating system for Indian communities
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              AiraNexus started in 2021 when our co-founders, living in a 200-flat society in
              Bengaluru, got tired of chasing maintenance dues on WhatsApp and managing visitors in
              a tattered paper register. We built the platform we wished existed — and it turned out
              hundreds of other communities wanted the same thing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="icon-circle-lg">
                <Target className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-charcoal-900">Our mission</h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                To make every Indian residential community self-sufficient, transparent, and
                delightful to manage — regardless of size, location, or budget.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="card"
            >
              <div className="icon-circle-lg">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-charcoal-900">Our vision</h2>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                A future where every community in India runs on a single, secure platform —
                empowering committees, staff, and residents to live better together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            badge="Our values"
            badgeVariant="lime"
            title="What we believe in"
            description="Six principles that guide every product decision, customer interaction, and hire we make."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-hover"
              >
                <div className="icon-circle-lg group-hover:scale-110">
                  <v.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-charcoal-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-charcoal-100 bg-white">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Our team"
            badgeVariant="cyan"
            title="The people behind AiraNexus"
            description="A passionate team of engineers, designers, and community experts building the future of community management."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <motion.figure
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover overflow-hidden p-0"
              >
                <img
                  src={m.avatar}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="p-5">
                  <p className="font-display text-base font-semibold text-charcoal-900">{m.name}</p>
                  <p className="text-2xs text-charcoal-500">{m.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join us on our mission"
        description="Whether you're a community looking to modernize or a talent looking to build something meaningful, we'd love to talk."
        primaryLabel="Get in touch"
        primaryTo="/contact"
        secondaryLabel="See careers"
        secondaryTo="/blog"
      />
    </>
  );
}
