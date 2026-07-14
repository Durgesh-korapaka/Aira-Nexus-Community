import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building,
  Home,
  Warehouse,
  Building2,
  UserCheck,
  Users,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Shield,
  Sparkles,
  AlertCircle,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';

interface SolutionsPageProps {
  darkMode: boolean;
}

const solutions = [
  {
    id: 'apartments',
    icon: Building,
    title: 'Apartments',
    subtitle: 'Complete management for multi-story apartment complexes',
    description: 'Manage hundreds of units, handle high-volume visitor traffic, and streamline maintenance billing for large apartment communities.',
    challenges: [
      'Managing maintenance collections for 100+ units',
      'Tracking visitor entries at multiple gates',
      'Handling complaints across multiple towers',
      'Coordinating with multiple vendors',
    ],
    solutions: [
      'Automated billing with multiple payment options',
      'Gate pass system with QR codes',
      'Complaint routing to tower-specific staff',
      'Vendor management and payment tracking',
    ],
    benefits: [
      '40% improvement in collection rates',
      '60% faster complaint resolution',
      'Paperless operations',
      'Complete financial transparency',
    ],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'gated-communities',
    icon: Home,
    title: 'Gated Communities',
    subtitle: 'Secure and efficient management for gated residential areas',
    description: 'Keep your gated community secure while providing residents with modern amenities and seamless communication.',
    challenges: [
      'Managing security at entry/exit points',
      'Handling amenity bookings',
      'Communicating with residents effectively',
      'Managing shared facilities',
    ],
    solutions: [
      'Pre-approved visitor management',
      'Amenity booking calendar',
      'WhatsApp broadcast groups',
      'Facility maintenance scheduling',
    ],
    benefits: [
      'Enhanced security protocols',
      '100% amenity utilization tracking',
      'Instant community updates',
      'Reduced manual bookings',
    ],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'villa-communities',
    icon: Warehouse,
    title: 'Villa Communities',
    subtitle: 'Tailored solution for villa townships and layouts',
    description: 'Handle the unique requirements of villa communities including private gardens, individual gates, and common area maintenance.',
    challenges: [
      'Individual property maintenance schedules',
      'Common area upkeep and accounting',
      'Independent gates and access control',
      'Varied maintenance fee structures',
    ],
    solutions: [
      'Property-specific maintenance tracking',
      'Common fund accounting',
      'Multi-gate visitor management',
      'Flexible billing configurations',
    ],
    benefits: [
      'Personalized service tracking',
      'Transparent common fund usage',
      'Unified access control',
      'Accurate billing per property size',
    ],
    image: 'https://images.pexels.com/photos/1060519/pexels-photo-1060519.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'complexes',
    icon: Building2,
    title: 'Residential Complexes',
    subtitle: 'Comprehensive solution for mixed developments',
    description: 'Handle mixed-use developments with apartments, retail spaces, and amenities in a unified platform.',
    challenges: [
      'Multiple property types in one complex',
      'Shared services billing',
      'Complex parking management',
      'Diverse stakeholder needs',
    ],
    solutions: [
      'Multi-property type support',
      'Proportional cost allocation',
      'Smart parking allocation',
      'Role-based dashboards',
    ],
    benefits: [
      'Unified management interface',
      'Fair cost distribution',
      'Optimized parking usage',
      'Custom stakeholder views',
    ],
    image: 'https://images.pexels.com/photos/15414841/pexels-photo-15414841.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'builders',
    icon: Briefcase,
    title: 'Builders & Developers',
    subtitle: 'Handover-ready solutions for new projects',
    description: 'Enable smooth handovers to associations with pre-configured management systems that impress your customers.',
    challenges: [
      'Setting up management systems for new projects',
      'Training committee members',
      'Ensuring smooth handover process',
      'Post-handover support',
    ],
    solutions: [
      'White-label ready platform',
      'Comprehensive onboarding',
      'Resident onboarding assistance',
      'Dedicated support period',
    ],
    benefits: [
      'Premium handover experience',
      'Reduced post-handover issues',
      'Happy customers for life',
      'Brand differentiation',
    ],
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'committee',
    icon: UserCheck,
    title: 'Committee Members',
    subtitle: 'Empower your management committee',
    description: 'Give your committee members the tools they need to manage efficiently while maintaining transparency with residents.',
    challenges: [
      'Manual record keeping',
      'Limited financial visibility',
      'Communication overhead',
      'Meeting coordination',
    ],
    solutions: [
      'Digital document storage',
      'Real-time financial dashboards',
      'Automated notifications',
      'Meeting scheduler with minutes',
    ],
    benefits: [
      '50% less time on admin work',
      '100% financial transparency',
      'Automated communications',
      'Efficient meeting management',
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const roles = [
  {
    id: 'residents',
    icon: Users,
    title: 'Residents',
    description: 'Easy access to pay bills, track complaints, and stay connected with your community.',
    features: ['Pay maintenance online', 'Track complaints in real-time', 'Book amenities', 'Receive instant updates'],
  },
  {
    id: 'managers',
    icon: Shield,
    title: 'Community Managers',
    description: 'Complete toolkit to manage daily operations efficiently.',
    features: ['Centralized dashboard', 'Vendor management', 'Financial reports', 'Staff coordination'],
  },
];

export default function SolutionsPage({ darkMode: _darkMode }: SolutionsPageProps) {
  return (
    <div>
      <SEO
        title="Solutions — AiraNexus Community Management"
        description="AiraNexus solutions for apartments, gated communities, villa townships, and RWAs. Tailored community management for every scale."
        path="/solutions"
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
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Industry Solutions
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Tailored for{' '}
              <span className="text-gradient">every community</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              Whether you're managing an apartment complex, gated community, or villa township,
              AiraNexus adapts to your needs with purpose-built tools for every scale.
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
          </div>
        </div>
      </section>

      {/* Solutions — alternating image/text layout */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-24 lg:space-y-32">
            {solutions.map((solution, index) => {
              const isReversed = index % 2 === 1;
              const Icon = solution.icon;

              return (
                <motion.article
                  key={solution.id}
                  id={solution.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                >
                  {/* Image */}
                  <div className={isReversed ? 'lg:order-2' : ''}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="relative rounded-3xl overflow-hidden shadow-elevated group"
                    >
                      <img
                        src={solution.image}
                        alt={`${solution.title} — ${solution.subtitle}`}
                        className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={384}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/20 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                              {solution.title}
                            </h3>
                            <p className="text-sm text-white/70 mt-0.5">
                              {solution.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="icon-circle-lg">
                        <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>
                      <span className="badge badge-neutral">
                        Solution {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-charcoal-900 text-balance">
                      {solution.title}
                    </h2>
                    <p className="text-base text-charcoal-500 mb-5 text-pretty">
                      {solution.description}
                    </p>

                    {/* Challenges & Solutions */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="flex items-center gap-2 font-semibold mb-3 text-charcoal-900">
                          <AlertCircle className="w-4 h-4 text-red-500" aria-hidden="true" />
                          Challenges We Solve
                        </h4>
                        <ul className="space-y-2.5">
                          {solution.challenges.map((challenge) => (
                            <li
                              key={challenge}
                              className="flex items-start text-sm text-charcoal-600 leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 mr-2.5 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="flex items-center gap-2 font-semibold mb-3 text-charcoal-900">
                          <Lightbulb className="w-4 h-4 text-primary-500" aria-hidden="true" />
                          Our Solution
                        </h4>
                        <ul className="space-y-2.5">
                          {solution.solutions.map((sol) => (
                            <li
                              key={sol}
                              className="flex items-start text-sm text-charcoal-600 leading-relaxed"
                            >
                              <CheckCircle className="w-4 h-4 text-lime-500 mt-0.5 mr-2.5 flex-shrink-0 flex-shrink-0" aria-hidden="true" />
                              {sol}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Benefits pills */}
                    <div>
                      <h4 className="flex items-center gap-2 font-semibold mb-3 text-charcoal-900">
                        <TrendingUp className="w-4 h-4 text-lime-500" aria-hidden="true" />
                        Key Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.benefits.map((benefit) => (
                          <span
                            key={benefit}
                            className="badge badge-primary"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role-based solutions */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="Who it's for"
            badgeColor="lime"
            title={<>Designed for <span className="text-gradient">everyone</span></>}
            description="From residents to community managers, AiraNexus delivers a tailored experience for every role in your community."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {roles.map((role, i) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card card-hover p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="icon-circle-lg">
                      <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal-900">
                        {role.title}
                      </h3>
                      <p className="text-sm text-charcoal-500 mt-1">
                        {role.description}
                      </p>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {role.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-charcoal-600"
                      >
                        <CheckCircle className="w-4 h-4 text-lime-500 mr-2.5 flex-shrink-0" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Find the right solution for your community"
        description="Let our team understand your needs and show you how AiraNexus can help. Get a personalized walkthrough tailored to your community type."
        primaryAction={{ label: 'Get Custom Solution', to: '/request-demo' }}
        secondaryAction={{ label: 'View Pricing', to: '/pricing' }}
      />
    </div>
  );
}
