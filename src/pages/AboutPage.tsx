import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  HandHeart,
  Lock,
  ArrowRight,
  Quote,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import CTABanner from '../components/ui/CTABanner';

interface AboutPageProps {
  darkMode: boolean;
}

const stats = [
  { value: '500+', label: 'Communities' },
  { value: '50K+', label: 'Residents' },
  { value: '40%', label: 'Avg Collection Improvement' },
  { value: '99.9%', label: 'Uptime' },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We constantly push the boundaries of what community management software can do.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparency',
    desc: 'Open communication, honest pricing, and full visibility into every transaction.',
  },
  {
    icon: Sparkles,
    title: 'Simplicity',
    desc: 'Powerful tools that feel effortless. If it is not intuitive, we redesign it.',
  },
  {
    icon: HandHeart,
    title: 'Reliability',
    desc: '99.9% uptime and a team that treats your community like our own home.',
  },
  {
    icon: HandHeart,
    title: 'Customer-First',
    desc: 'Every decision starts with what is best for the residents and committees we serve.',
  },
  {
    icon: Lock,
    title: 'Security',
    desc: 'Bank-grade encryption and strict data privacy — because trust is everything.',
  },
];

const team = [
  {
    name: 'Priya Sharma',
    role: 'CEO & Co-founder',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Rajesh Kumar',
    role: 'CTO & Co-founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Anand Patel',
    role: 'Head of Product',
    image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Sneha Reddy',
    role: 'Head of Customer Success',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function AboutPage({ darkMode: _darkMode }: AboutPageProps) {
  return (
    <div className="overflow-hidden">
      <SEO
        title="About Us — AiraNexus"
        description="AiraNexus was founded in 2020 to transform how residential communities operate using AI, automation, and beautiful design. Meet the team and mission behind the platform."
        path="/about"
      />

      {/* Hero */}
      <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden bg-hero-gradient">
        <div className="blob w-[500px] h-[500px] bg-primary-400 -top-32 -right-32 animate-float" />
        <div className="blob w-[400px] h-[400px] bg-lime-400 -bottom-32 -left-32 animate-float-slow" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="badge badge-primary mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              About AiraNexus
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              We are building the{' '}
              <span className="text-gradient">future of communities</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              AiraNexus was founded in 2020 with a mission to transform how residential
              communities operate — using AI, automation, and beautiful design.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story — two-column */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge badge-lime mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal-900 text-balance">
                From a single society to{' '}
                <span className="text-gradient">500+ communities</span>
              </h2>
              <div className="mt-6 space-y-4 text-charcoal-500 leading-relaxed text-pretty">
                <p>
                  AiraNexus began in 2020 when our founders, frustrated by spreadsheets and
                  WhatsApp groups, set out to build the platform they wished existed. What
                  started as a tool for one society quickly became the platform of choice for
                  communities across the country.
                </p>
                <p>
                  Today, AiraNexus powers over 500 communities and 50,000+ residents —
                  automating billing, complaints, visitor management, and communication so
                  committees can focus on building thriving neighborhoods instead of chasing
                  paperwork.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Link
                  to="/request-demo"
                  className="btn-primary"
                >
                  See it in action
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-200/40 to-lime-200/40 rounded-3xl blur-2xl" />
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AiraNexus team collaborating in a modern office"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
                className="relative rounded-3xl shadow-elevated border border-charcoal-100 object-cover w-full h-auto"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 hidden sm:block"
              >
                <div className="card-glass p-5 max-w-[220px]">
                  <Quote className="w-6 h-6 text-primary-500 mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium text-charcoal-700 leading-snug">
                    "Communities deserve software as thoughtful as the people who live in them."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="Mission & Vision"
            badgeColor="cyan"
            title={<>Where we are <span className="text-gradient">headed</span></>}
            description="The principles that guide every line of code and every conversation with a customer."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card card-hover p-8"
            >
              <div className="icon-circle-lg mb-6">
                <Target className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-3">Our Mission</h3>
              <p className="text-charcoal-500 leading-relaxed text-pretty">
                To empower every residential community with AI-driven tools that make
                management effortless, communication seamless, and living better.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card card-hover p-8"
            >
              <div className="icon-circle-lg mb-6">
                <Eye className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal-900 mb-3">Our Vision</h3>
              <p className="text-charcoal-500 leading-relaxed text-pretty">
                To become the definitive platform that every community in the world relies on
                to connect, manage, and thrive together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Our Values"
            badgeColor="lime"
            title={<>What <span className="text-gradient">drives us</span> forward</>}
            description="Six principles that shape our product, our culture, and the way we treat every community."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card card-hover p-6"
              >
                <div className="icon-circle-lg mb-5">
                  <value.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">{value.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed text-pretty">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-14 lg:py-16 bg-greenish-50 border-y border-charcoal-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Our Team"
            title={<>The people behind <span className="text-gradient">AiraNexus</span></>}
            description="A passionate team of builders, designers, and community advocates on a mission to make community management effortless."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card card-hover p-6 text-center group"
              >
                <div className="relative mx-auto mb-5 w-28 h-28 rounded-3xl overflow-hidden border border-charcoal-100 shadow-soft">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    loading="lazy"
                    decoding="async"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover transition-transform duration-300 ease-smooth group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900">{member.name}</h3>
                <p className="text-sm text-primary-600 font-medium mt-1">{member.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Join the AiraNexus family"
        description="See why 500+ communities trust us to manage their operations. Get a personalized demo today."
        primaryAction={{ label: 'Book a Free Demo', to: '/request-demo' }}
        secondaryAction={{ label: 'View Pricing', to: '/pricing' }}
      />
    </div>
  );
}
