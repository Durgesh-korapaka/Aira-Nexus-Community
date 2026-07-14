import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  CreditCard,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FeatureCard from '../../components/ui/FeatureCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import CTABanner from '../../components/ui/CTABanner';
import StatCard from '../../components/ui/StatCard';

interface SocietyManagementPageProps {
  darkMode: boolean;
}

const features = [
  { icon: CreditCard, title: 'Automated Billing', description: 'Generate invoices, send reminders, and collect payments online — all on autopilot with zero manual effort.' },
  { icon: Users, title: 'Member Management', description: 'Complete resident database with ownership details, family members, and vehicle information.' },
  { icon: BarChart3, title: 'Financial Reports', description: 'Balance sheets, income statements, and audit-ready reports — all generated automatically.' },
  { icon: Building2, title: 'Asset Management', description: 'Track society assets, equipment, contracts, and maintenance schedules in one place.' },
];

const stats = [
  { value: '+45%', label: 'Collection' },
  { value: '-2 days', label: 'Resolution' },
  { value: '20 hrs/mo', label: 'Saved' },
];

const featureGrid = [
  'Maintenance billing',
  'Complaint tracking',
  'Digital notice board',
  'Visitor management',
  'Financial accounting',
  'Amenity booking',
  'Polls & voting',
  'Document storage',
];

const faqs = [
  { q: 'Is AiraNexus suitable for small societies?', a: 'Yes! AiraNexus works for societies of all sizes — from 20 units to 500+ units. Our pricing scales with your community.' },
  { q: 'Can we manage multiple societies from one account?', a: 'Yes, our Enterprise plan supports multi-society management with centralized reporting and role-based access control.' },
  { q: 'Does AiraNexus handle GST-compliant invoicing?', a: 'Yes, all invoices are GST-compliant with automatic tax calculations, HSN codes, and GSTIN details on every receipt.' },
  { q: 'How long does onboarding take?', a: 'Typically 24–48 hours. We handle data migration, staff training, and resident onboarding end-to-end at no extra cost.' },
];

export default function SocietyManagementPage({ darkMode: _darkMode }: SocietyManagementPageProps) {
  return (
    <div>
      <SEO
        title="Society Management Software — AiraNexus"
        description="Modern society management software for RWAs and housing societies. Automate billing, maintenance, and communication."
        path="/society-management-software"
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
              Society Management Solution
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Society management,{' '}
              <span className="text-gradient">simplified</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              Modern software for managing housing societies, RWAs, and resident welfare
              associations. From accounting to communication — all in one platform.
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
          <SectionHeading
            badge="Features"
            title={<>Everything your society needs, <span className="text-gradient">in one place</span></>}
            description="Society management shouldn't be complicated. AiraNexus simplifies every aspect — from collecting maintenance to managing the committee."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Capabilities"
            badgeColor="lime"
            title={<>Features designed for <span className="text-gradient">societies</span></>}
            description="Eight powerful modules that cover every aspect of running a modern housing society."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureGrid.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card card-hover p-5 flex items-center gap-3"
              >
                <div className="icon-circle-sm flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-primary-600" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-charcoal-700">{feature}</span>
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
            description="Everything you need to know about society management with AiraNexus."
          />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to simplify society management?"
        description="Join 100+ societies already using AiraNexus for hassle-free operations. Get a personalized demo today."
        primaryAction={{ label: 'Book a Free Demo', to: '/request-demo' }}
        secondaryAction={{ label: 'View Pricing', to: '/pricing' }}
      />
    </div>
  );
}
