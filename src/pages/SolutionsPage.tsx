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
} from 'lucide-react';
import SEO from '../components/SEO';

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
      <SEO title="Solutions — AiraNexus Community Management" description="AiraNexus solutions for apartments, gated communities, villa townships, and RWAs. Tailored community management for every scale." path="/solutions" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[350px] h-[350px] bg-lime-500 -bottom-20 -left-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="container-custom text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6"
          >
            Industry Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6"
          >
            Tailored for <span className="text-gradient">every community</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Whether you're managing an apartment complex, gated community, or villa township, Aira Nexus adapts to your needs.
          </motion.p>
        </div>
      </section>

      {/* Solutions Detail */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                id={solution.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? '' : ''}`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-teal-lg">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-80 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="320"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <solution.icon className="w-12 h-12 text-white mb-2" />
                      <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="icon-circle-lg mb-4">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-charcoal-900">
                    {solution.title}
                  </h2>
                  <p className="text-lg mb-6 text-neutral-500">
                    {solution.subtitle}
                  </p>
                  <p className="mb-6 text-neutral-600">
                    {solution.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-charcoal-900">
                        Challenges We Solve
                      </h4>
                      <ul className="space-y-2">
                        {solution.challenges.map((challenge) => (
                          <li key={challenge} className="flex items-start text-sm text-neutral-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-charcoal-900">
                        Our Solution
                      </h4>
                      <ul className="space-y-2">
                        {solution.solutions.map((sol) => (
                          <li key={sol} className="flex items-start text-sm text-neutral-500">
                            <CheckCircle className="w-4 h-4 text-lime-500 mt-0.5 mr-2 flex-shrink-0" />
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {solution.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="px-3 py-1 rounded-full text-sm bg-primary-50 text-primary-600"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-based Solutions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-lime-50 text-lime-600 text-sm font-medium mb-4">
              Who It's For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-charcoal-900">
              Designed for <span className="text-gradient">everyone</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card p-8"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="icon-circle-lg">
                    <role.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900">
                      {role.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {role.description}
                    </p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-3 mt-6">
                  {role.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-neutral-600">
                      <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-gradient relative overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-white/10 -top-20 -left-20 animate-float" />
        <div className="container-custom text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Find the Right Solution for Your Community
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Let our team understand your needs and show you how Aira Nexus can help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/request-demo" className="btn-outline-white text-base px-8 py-4">
              Get Custom Solution
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/pricing" className="btn-secondary text-base px-8 py-4">
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
