import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building,
  CreditCard,
  MessageSquare,
  Users,
  Shield,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import SEO from '../../components/SEO';

interface ApartmentManagementPageProps {
  darkMode: boolean;
}

export default function ApartmentManagementPage({ darkMode: _darkMode }: ApartmentManagementPageProps) {
  return (
    <div>
      <SEO title="Apartment Management Software — AiraNexus" description="Complete apartment management software with billing, complaints, visitor tracking, and resident communication." path="/apartment-management-software" />
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
              #1 Apartment Management Software
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              Apartment Management <span className="text-gradient">Software</span>
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              The complete solution for managing apartments, from maintenance billing to resident communication. Trusted by 100+ communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-demo" className="btn-primary">
                Get Free Demo <ArrowRight className="w-5 h-5 ml-2" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: CreditCard, title: 'Maintenance Billing', desc: 'Automate billing, send reminders, collect payments online' },
              { icon: MessageSquare, title: 'Complaint Management', desc: 'Track, prioritize, and resolve issues efficiently' },
              { icon: Users, title: 'Resident Directory', desc: 'Complete database with family details and contacts' },
              { icon: Shield, title: 'Visitor Management', desc: 'Gate pass system with pre-approval workflow' },
              { icon: Smartphone, title: 'Mobile App', desc: 'iOS and Android apps for residents and staff' },
              { icon: Building, title: 'Reports & Analytics', desc: 'Financial dashboards and performance metrics' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6"
              >
                <div className="icon-circle-lg mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-charcoal-900">{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-charcoal-900">
                Why Choose Aira Nexus for Apartment Management?
              </h2>
              <div className="space-y-4">
                {[
                  '40% improvement in maintenance collections',
                  '60% faster complaint resolution time',
                  'Paperless operations - no more registers',
                  'Real-time financial transparency for committee members',
                  'WhatsApp integration for instant communication',
                  'Dedicated support for onboarding and training',
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                    <span className="text-neutral-500">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/request-demo" className="btn-primary mt-8">
                Schedule Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-8"
            >
              <div className="flex items-center mb-6">
                <div className="flex -space-x-3">
                  {[220453, 415829, 7640, 1043471].map((id, i) => (
                    <img
                      key={i}
                      src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2`}
                      alt=""
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      loading="lazy"
                      decoding="async"
                      width="40"
                      height="40"
                    />
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-sm text-neutral-500">From 100+ reviews</p>
                </div>
              </div>
              <p className="mb-4 text-neutral-500">
                "We switched from Excel sheets to Aira Nexus. Collections improved by 45% in the first quarter. The WhatsApp reminders are a game-changer."
              </p>
              <p className="font-semibold text-charcoal-900">
                - Rajesh K., President, Green Valley Apartments
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-charcoal-900"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'How quickly can we implement Aira Nexus?', a: 'Most apartments go live within 24-48 hours. We handle data migration, staff training, and resident onboarding.' },
              { q: 'Can residents pay maintenance online?', a: 'Yes! Residents can pay via UPI, cards, net banking, or auto-debit. We integrate with all major payment gateways.' },
              { q: 'Is there a mobile app for residents?', a: 'Yes, we have native iOS and Android apps. Residents can pay, raise complaints, and receive updates from their phones.' },
              { q: 'Do you support WhatsApp notifications?', a: 'Yes! Growth and Enterprise plans include WhatsApp integration for automated reminders and alerts.' },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6"
              >
                <h3 className="font-semibold mb-2 text-charcoal-900">{faq.q}</h3>
                <p className="text-neutral-500">{faq.a}</p>
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
              Ready to Transform Your Society Management?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Join 100+ apartments using Aira Nexus for hassle-free management.
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
