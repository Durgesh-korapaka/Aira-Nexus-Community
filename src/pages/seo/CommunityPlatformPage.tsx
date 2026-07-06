import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Building2,
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
} from 'lucide-react';
import SEO from '../../components/SEO';

interface CommunityPlatformPageProps {
  darkMode: boolean;
}

export default function CommunityPlatformPage({ darkMode: _darkMode }: CommunityPlatformPageProps) {
  return (
    <div>
      <SEO title="Community Management Platform — AiraNexus" description="All-in-one community management platform for apartments, gated communities, and RWAs. Billing, complaints, visitors, and more." path="/community-management-platform" />
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[300px] h-[300px] bg-lime-500 -bottom-20 -left-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
              Complete Community Solution
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Community Management <span className="text-gradient">Platform</span>
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              The all-in-one platform for managing apartments, gated communities, villas, and residential complexes. One platform. Complete control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-demo" className="btn-primary">
                Request Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-charcoal-900">
                One Platform. Everything Connected.
              </h2>
              <p className="mb-8 text-neutral-500">
                No more scattered spreadsheets, WhatsApp groups, and paper registers. Aira Nexus brings everything together - billing, complaints, visitors, communication, and analytics - in one unified platform.
              </p>
              <div className="space-y-6">
                {[
                  { icon: Users, title: 'For Residents', desc: 'Pay bills, raise complaints, receive updates - all from mobile app' },
                  { icon: Shield, title: 'For Committee', desc: 'Complete visibility and control over all community operations' },
                  { icon: Globe, title: 'For Staff', desc: 'Simple tools to manage daily tasks efficiently' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="icon-circle flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-charcoal-900">{item.title}</h3>
                      <p className="text-sm text-neutral-500">{item.desc}</p>
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
              className="card p-6"
            >
              <div className="grid grid-cols-3 gap-4 text-center mb-8">
                {[
                  { value: '100+', label: 'Communities' },
                  { value: '50K+', label: 'Residents' },
                  { value: '99.9%', label: 'Uptime' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-charcoal-900">{stat.value}</p>
                    <p className="text-sm text-neutral-500">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {['Maintenance billing & payments', 'Complaint tracking & resolution', 'Visitor management & gate passes', 'Notice board & communication', 'Resident directory & profiles'].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-500">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-charcoal-900"
          >
            Works for Every Community
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: 'Apartments', desc: 'Multi-story complexes' },
              { icon: Users, title: 'Gated Communities', desc: 'Secured residential areas' },
              { icon: Building2, title: 'Villa Townships', desc: 'Individual plots & villas' },
              { icon: Shield, title: 'RWAs', desc: 'Resident associations' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="icon-circle-lg mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-charcoal-900">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Managing Better Today
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Join the future of community management. 14-day free trial.
            </p>
            <Link to="/request-demo" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-charcoal-900 font-semibold hover:bg-neutral-50 transition-colors">
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
