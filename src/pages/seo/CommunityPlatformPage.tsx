import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Shield,
  Globe,
  Building2,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FAQAccordion from '../../components/ui/FAQAccordion';
import CTABanner from '../../components/ui/CTABanner';
import StatCard from '../../components/ui/StatCard';

interface CommunityPlatformPageProps {
  darkMode: boolean;
}

const features = [
  { icon: Users, title: 'For Residents', description: 'Pay bills, raise complaints, receive updates — all from a native mobile app. Simple, fast, and always connected.' },
  { icon: Shield, title: 'For Committee', description: 'Complete visibility and control over all community operations. Financial transparency at your fingertips.' },
  { icon: Globe, title: 'For Staff', description: 'Simple tools to manage daily tasks efficiently — gate entry, maintenance, complaints, and more.' },
];

const stats = [
  { value: '100+', label: 'Communities' },
  { value: '50K+', label: 'Residents' },
  { value: '99.9%', label: 'Uptime' },
];

const communityTypes = [
  { icon: Building2, title: 'Apartments', desc: 'Multi-story complexes & high-rise towers' },
  { icon: Users, title: 'Gated Communities', desc: 'Secured residential neighborhoods' },
  { icon: Building2, title: 'Villa Townships', desc: 'Individual plots & villa communities' },
  { icon: Shield, title: 'RWAs', desc: 'Resident welfare associations' },
];

const checklist = [
  'Maintenance billing & payments',
  'Complaint tracking & resolution',
  'Visitor management & gate passes',
  'Notice board & communication',
  'Resident directory & profiles',
];

const faqs = [
  { q: 'What types of communities does AiraNexus support?', a: 'AiraNexus works for apartments, gated communities, villa townships, and RWAs. Our platform is flexible enough to adapt to any residential community structure.' },
  { q: 'How long does it take to onboard a community?', a: 'Most communities go live within 24–48 hours. We handle data migration, staff training, and resident onboarding end-to-end at no extra cost.' },
  { q: 'Is AiraNexus available on mobile?', a: 'Yes! We have native iOS and Android apps for residents, staff, and committee members. The web dashboard is also fully responsive.' },
  { q: 'Do you offer a free trial?', a: 'Yes, we offer a 14-day free trial with no credit card required. You can explore all features and onboard your community before committing.' },
];

export default function CommunityPlatformPage({ darkMode: _darkMode }: CommunityPlatformPageProps) {
  return (
    <div>
      <SEO
        title="Community Management Platform — AiraNexus"
        description="All-in-one community management platform for apartments, gated communities, and RWAs. Billing, complaints, visitors, and more."
        path="/community-management-platform"
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
              Complete Community Solution
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Community management,{' '}
              <span className="text-gradient">unified</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              The all-in-one platform for managing apartments, gated communities, villas, and
              residential complexes. One platform. Complete control.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link to="/request-demo" className="btn-primary text-base px-8 py-4">
                Book a Free Demo
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link to="/pricing" className="btn-secondary text-base px-8 py-4">
                View Pricing
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex items-center justify-center gap-6 text-sm text-charcoal-400"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                14-day free trial
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 lg:py-16 bg-white border-y border-charcoal-100">
        <div className="container-custom">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge badge-lime mb-4">One Platform</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal-900 mb-6 text-balance">
                One platform. Everything connected.
              </h2>
              <p className="text-lg text-charcoal-500 mb-8 text-pretty">
                No more scattered spreadsheets, WhatsApp groups, and paper registers. AiraNexus
                brings everything together — billing, complaints, visitors, communication, and
                analytics — in one unified platform.
              </p>
              <div className="space-y-6">
                {features.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="icon-circle flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-charcoal-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-charcoal-500">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8"
            >
              <div className="grid grid-cols-3 gap-4 text-center mb-8 pb-8 border-b border-charcoal-100">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-gradient-dark tracking-tight">{stat.value}</p>
                    <p className="text-sm text-charcoal-500 font-medium mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {checklist.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-charcoal-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Community Types"
            badgeColor="lime"
            title={<>Works for <span className="text-gradient">every community</span></>}
            description="Whether you manage a single apartment tower or a sprawling township, AiraNexus adapts to your needs."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityTypes.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card card-hover p-6 text-center group"
              >
                <div className="icon-circle-lg mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-charcoal-900 mb-1">{item.title}</h3>
                <p className="text-sm text-charcoal-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="FAQ"
            badgeColor="cyan"
            title={<>Frequently asked <span className="text-gradient">questions</span></>}
            description="Everything you need to know about the AiraNexus community management platform."
          />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to unify your community management?"
        description="Join 100+ communities already using AiraNexus. Start your 14-day free trial today — no credit card required."
        primaryAction={{ label: 'Book a Free Demo', to: '/request-demo' }}
        secondaryAction={{ label: 'View Pricing', to: '/pricing' }}
      />
    </div>
  );
}
