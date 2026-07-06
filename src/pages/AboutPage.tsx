import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Shield,
  Users,
  Zap,
  ArrowRight,
  Building2,
} from 'lucide-react';
import SEO from '../components/SEO';

interface AboutPageProps {
  darkMode: boolean;
}

export default function AboutPage({ darkMode: _darkMode }: AboutPageProps) {
  const stats = [
    { value: '100+', label: 'Communities' },
    { value: '50K+', label: 'Residents' },
    { value: '50+', label: 'Team Members' },
    { value: '4.8/5', label: 'Average Rating' },
  ];

  const values = [
    { icon: Heart, title: 'Resident First', desc: 'Every decision we make starts with what is best for the residents we serve.' },
    { icon: Shield, title: 'Trust & Transparency', desc: 'We build trust through open communication, honest pricing, and full transparency.' },
    { icon: Zap, title: 'Innovation', desc: 'We constantly push the boundaries of what community management software can do.' },
    { icon: Users, title: 'Collaboration', desc: 'We work hand-in-hand with communities to build features that solve real problems.' },
  ];

  const timeline = [
    { year: '2020', title: 'Founded', desc: 'AiraNexus was born from a simple idea: community management should be effortless.' },
    { year: '2021', title: 'First 10 Communities', desc: 'Rapid adoption proved the need for a modern, AI-powered platform.' },
    { year: '2022', title: 'Mobile App Launch', desc: 'Native iOS and Android apps brought the platform to every residents pocket.' },
    { year: '2023', title: '100+ Communities', desc: 'Crossed the milestone of 100 communities and 50,000+ active residents.' },
    { year: '2024', title: 'Series A Funding', desc: 'Raised $10M to expand our AI capabilities and enter new markets.' },
  ];

  const team = [
    { name: 'Arjun Rao', role: 'CEO & Co-Founder', initials: 'AR' },
    { name: 'Priya Nair', role: 'CTO & Co-Founder', initials: 'PN' },
    { name: 'Vikram Sharma', role: 'Head of Product', initials: 'VS' },
    { name: 'Sneha Patel', role: 'Head of Customer Success', initials: 'SP' },
  ];

  return (
    <div className="overflow-hidden">
      <SEO title="About Us — AiraNexus" description="AiraNexus was founded in 2020 to transform how residential communities operate using AI, automation, and beautiful design." path="/about" />
      {/* Hero */}
      <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[300px] h-[300px] bg-lime-500 top-40 -left-20 animate-float-slow" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-primary-500 uppercase tracking-wider"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight"
          >
            We are building the <span className="text-gradient">future of communities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-neutral-500"
          >
            AiraNexus was founded in 2020 with a mission to transform how residential communities operate — using AI, automation, and beautiful design.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-greenish-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-neutral-500 mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              <div className="icon-circle-lg mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal-900 mb-3">Our Mission</h2>
              <p className="text-neutral-500 leading-relaxed">
                To empower every residential community with AI-driven tools that make management effortless, communication seamless, and living better.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-8"
            >
              <div className="icon-circle-lg mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal-900 mb-3">Our Vision</h2>
              <p className="text-neutral-500 leading-relaxed">
                To become the definitive platform that every community in the world relies on to connect, manage, and thrive together.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-greenish-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Our Values</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-charcoal-900">What drives us forward</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6"
              >
                <div className="icon-circle-lg mb-5">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">{value.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Our Journey</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-charcoal-900">Milestones along the way</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-lime-500" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 w-16 h-16 rounded-2xl bg-brand-gradient flex items-center justify-center text-white font-bold text-sm shadow-teal">
                    {item.year}
                  </div>
                  <div className="card p-6">
                    <h3 className="text-lg font-bold text-charcoal-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-500">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-greenish-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Our Team</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-charcoal-900">The people behind AiraNexus</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-brand-gradient flex items-center justify-center text-white text-xl font-bold shadow-teal">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-charcoal-900">{member.name}</h3>
                <p className="text-sm text-primary-500 font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="relative rounded-4xl overflow-hidden p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-brand-gradient" />
            <div className="absolute inset-0 blob w-[300px] h-[300px] bg-white/20 -top-10 -right-10 animate-float" />
            <div className="relative z-10">
              <Building2 className="w-10 h-10 text-white mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Join the AiraNexus family</h2>
              <p className="mt-4 text-white/90 text-lg">See why 100+ communities trust us to manage their operations.</p>
              <Link to="/request-demo" className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-primary-600 bg-white hover:scale-105 transition-transform shadow-lg">
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
