import { motion } from 'framer-motion';
import { Users, ShieldCheck, BarChart3, Megaphone, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FeatureCard from '../../components/ui/FeatureCard';
import StatCard from '../../components/ui/StatCard';
import CTABanner from '../../components/ui/CTABanner';

const features = [
  { icon: Users, title: 'RWA Management', description: 'Manage committee roles, meetings, minutes, and elections digitally with full transparency.' },
  { icon: ShieldCheck, title: 'Security & Access', description: 'Role-based access control and audit logs keep society data secure and compliant.' },
  { icon: BarChart3, title: 'Financial Transparency', description: 'Real-time dashboards for collections, expenses, and arrears visible to every committee member.' },
  { icon: Megaphone, title: 'Resident Communication', description: 'Broadcast notices, polls, and emergency alerts via SMS, email, and in-app push.' },
];

const stats = [
  { value: '500+', label: 'Societies managed' },
  { value: '50K+', label: 'Residents served' },
  { value: '95%', label: 'On-time collections' },
  { value: '4.8/5', label: 'Committee rating' },
];

const grid = [
  { title: 'Committee workflows', description: 'Assign roles, track tasks, and conduct paperless AGMs with digital voting.' },
  { title: 'Vendor management', description: 'Track contracts, AMCs, and performance ratings for every service provider.' },
  { title: 'Resident directory', description: 'A secure, verified directory of owners and tenants with contact details.' },
  { title: 'Notice board', description: 'A digital notice board that reaches every resident instantly via the app.' },
];

export default function SocietyManagementPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  return (
    <>
      <SEO
        title="Society Management Software — AiraNexus"
        description="AiraNexus is the all-in-one society management software for Indian RWAs and cooperative housing societies. Manage billing, security, communications, and accounting."
        canonical="https://airanexus.com/society-management-software"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'AiraNexus Society Management Software',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          offers: { '@type': 'Offer', price: '2999', priceCurrency: 'INR' },
        }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient pb-20 pt-32 sm:pt-36">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">
              <Users className="h-3 w-3" aria-hidden="true" />
              Society Management Software
            </span>
            <h1 className="mt-6 text-display-lg font-display font-extrabold tracking-tight text-charcoal-900 text-balance">
              Run your society with <span className="text-gradient">confidence</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              AiraNexus gives RWAs and cooperative housing societies a single platform to manage
              billing, security, communications, and accounting — with total transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title="Built for RWAs and committees"
            description="Four core modules that give your society committee the tools to govern effectively."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.06} />
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

      {/* Feature grid */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            badge="Everything included"
            badgeVariant="lime"
            title="More than just billing"
            description="AiraNexus covers every workflow your society committee needs to run smoothly."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {grid.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card-hover"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-charcoal-900">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{g.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to modernize your society?"
        description="Join 500+ societies across India running smarter on AiraNexus."
      />
    </>
  );
}
