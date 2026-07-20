import { Building2, Users, ShieldCheck, Home } from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FeatureCard from '../../components/ui/FeatureCard';
import StatCard from '../../components/ui/StatCard';
import CTABanner from '../../components/ui/CTABanner';

const audiences = [
  { icon: Building2, title: 'For Apartments', description: 'Manage multi-tower complexes with billing, visitor management, amenities, and helpdesk in one place.' },
  { icon: Users, title: 'For RWAs', description: 'Give committees transparent financial dashboards, paperless AGMs, and digital communication tools.' },
  { icon: Home, title: 'For Cooperative Societies', description: 'Handle member management, share certificates, and cooperative accounting with full audit trails.' },
];

const stats = [
  { value: '500+', label: 'Communities' },
  { value: '50K+', label: 'Residents' },
  { value: '40+', label: 'Cities' },
  { value: '99.9%', label: 'Uptime' },
];

const communityTypes = [
  'Gated apartment complexes',
  'Cooperative housing societies',
  'Villa communities',
  'Row house townships',
  'Mixed-use developments',
  'Builder&apos;s projects',
];

export default function CommunityPlatformPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  return (
    <>
      <SEO
        title="Community Management Platform — AiraNexus"
        description="AiraNexus is the unified community management platform for Indian residential communities — apartments, RWAs, and cooperative societies."
        canonical="https://airanexus.com/community-management-platform"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'AiraNexus Community Management Platform',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
        }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient pb-20 pt-32 sm:pt-36">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">
              <Users className="h-3 w-3" aria-hidden="true" />
              Community Management Platform
            </span>
            <h1 className="mt-6 text-display-lg font-display font-extrabold tracking-tight text-charcoal-900 text-balance">
              One platform for every <span className="text-gradient">community</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              AiraNexus is the unified platform that serves apartments, RWAs, and cooperative
              societies — bringing every stakeholder together in one connected ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Audience features */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="For every community"
            title="Built for every type of community"
            description="Whether you manage an apartment, an RWA, or a cooperative society, AiraNexus adapts to your needs."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {audiences.map((a, i) => (
              <FeatureCard key={a.title} {...a} delay={i * 0.08} />
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

      {/* Community types */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            badge="Community types"
            badgeVariant="cyan"
            title="We serve every kind of community"
            description="From gated apartments to cooperative societies, AiraNexus scales to fit."
          />
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-charcoal-100 bg-white p-8 shadow-card">
            <ul className="grid gap-4 sm:grid-cols-2">
              {communityTypes.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm text-charcoal-800">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
                  <span dangerouslySetInnerHTML={{ __html: c }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title="Bring your community together"
        description="See how AiraNexus unifies every stakeholder in your residential community."
      />
    </>
  );
}
