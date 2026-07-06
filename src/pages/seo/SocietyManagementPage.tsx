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

interface SocietyManagementPageProps {
  darkMode: boolean;
}

export default function SocietyManagementPage({ darkMode: _darkMode }: SocietyManagementPageProps) {
  return (
    <div>
      <SEO title="Society Management Software — AiraNexus" description="Modern society management software for RWAs and housing societies. Automate billing, maintenance, and communication." path="/society-management-software" />
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[300px] h-[300px] bg-cyan-500 -bottom-20 -left-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
              Society Management Solution
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Society Management <span className="text-gradient">Software</span>
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              Comprehensive software for managing housing societies, RWAs, and resident welfare associations. From accounting to communication.
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
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-charcoal-900">
                Everything Your Society Needs
              </h2>
              <p className="mb-8 text-neutral-500">
                Society management shouldn't be complicated. Aira Nexus simplifies every aspect - from collecting maintenance to managing the committee.
              </p>
              <div className="space-y-4">
                {[
                  { icon: CreditCard, title: 'Automated Billing', desc: 'Generate invoices, send reminders, collect online' },
                  { icon: Users, title: 'Member Management', desc: 'Complete resident database with ownership details' },
                  { icon: BarChart3, title: 'Financial Reports', desc: 'Balance sheets, income statements, audit ready' },
                  { icon: Building2, title: 'Asset Management', desc: 'Track society assets, equipment, and contracts' },
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
              className="card p-8"
            >
              <div className="space-y-6">
                {[
                  { label: 'Maintenance Collection', value: '+45%', color: 'lime' },
                  { label: 'Complaint Resolution', value: '-2 days', color: 'primary' },
                  { label: 'Admin Time Saved', value: '20 hrs/mo', color: 'cyan' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-neutral-500">{stat.label}</span>
                    <span className={`text-xl font-bold ${stat.color === 'lime' ? 'text-lime-500' : stat.color === 'cyan' ? 'text-cyan-500' : 'text-primary-500'}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-charcoal-900"
          >
            Features Designed for Societies
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Maintenance billing & collection',
              'Complaint tracking system',
              'Digital notice board',
              'Visitor management',
              'Financial accounting',
              'Amenity booking',
              'Polls & voting',
              'Document storage',
            ].map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card p-4 flex items-center"
              >
                <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-neutral-500">{feature}</span>
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
              Ready to Simplify Society Management?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Get a personalized demo for your society.
            </p>
            <Link to="/request-demo" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-charcoal-900 font-semibold hover:bg-neutral-50 transition-colors">
              Get Free Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
