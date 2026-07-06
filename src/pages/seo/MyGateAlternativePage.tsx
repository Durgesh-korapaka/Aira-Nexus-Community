import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CheckCircle,
  ArrowRight,
  Zap,
  DollarSign,
  Headphones,
} from 'lucide-react';
import SEO from '../../components/SEO';

interface MyGateAlternativePageProps {
  darkMode: boolean;
}

export default function MyGateAlternativePage({ darkMode: _darkMode }: MyGateAlternativePageProps) {
  return (
    <div>
      <SEO title="MyGate Alternative — AiraNexus" description="Looking for a MyGate alternative? AiraNexus offers AI-powered community management with better features and pricing." path="/mygate-alternative" />
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-cyan-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[300px] h-[300px] bg-lime-500 -bottom-20 -left-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 text-sm font-medium mb-6">
              Looking for MyGate Alternative?
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6">
              <span className="text-gradient">Aira Nexus</span> - Better than MyGate
            </h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
              A more powerful, more affordable, and more customizable community management solution. See why communities are switching.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-demo" className="btn-primary">
                See Why They Switch <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/pricing" className="btn-secondary">
                Compare Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-charcoal-900"
          >
            Why Switch to Aira Nexus?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'More Features', desc: 'WhatsApp integration, polls, surveys, and more built-in' },
              { icon: DollarSign, title: 'Better Pricing', desc: 'Up to 40% lower cost for the same features' },
              { icon: Headphones, title: 'Better Support', desc: 'Dedicated account manager for all plans' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8 text-center"
              >
                <div className="icon-circle-lg mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-charcoal-900">{item.title}</h3>
                <p className="text-neutral-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-charcoal-900"
          >
            Feature Comparison
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-0 overflow-hidden"
          >
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="text-left py-4 px-6 text-charcoal-900">Feature</th>
                  <th className="text-center py-4 px-6 text-charcoal-900">Aira Nexus</th>
                  <th className="text-center py-4 px-6 text-neutral-500">MyGate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Visitor Management', us: true, them: true },
                  { feature: 'Maintenance Billing', us: true, them: true },
                  { feature: 'Complaint Management', us: true, them: true },
                  { feature: 'WhatsApp Notifications', us: true, them: false },
                  { feature: 'Polls & Surveys', us: true, them: false },
                  { feature: 'Amenity Booking', us: true, them: true },
                  { feature: 'Reports & Analytics', us: true, them: 'Limited' },
                  { feature: 'GST Invoicing', us: true, them: 'Add-on' },
                  { feature: 'Starting Price', us: '₹2,999', them: '₹5,000+' },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-neutral-200">
                    <td className="py-4 px-6 text-neutral-500">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.us === 'boolean' ? (
                        <CheckCircle className="w-6 h-6 text-primary-500 mx-auto" />
                      ) : (
                        <span className="text-primary-500 font-bold">{row.us}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center text-neutral-400">
                      {typeof row.them === 'boolean' ? (
                        <CheckCircle className={`w-6 h-6 mx-auto ${row.them ? 'text-neutral-400' : 'text-neutral-300'}`} />
                      ) : (
                        <span>{row.them}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12 text-charcoal-900"
          >
            What Customers Say
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { quote: 'Switched from MyGate for WhatsApp integration. Best decision. Payments are smoother and residents love the instant notifications.', name: 'Amit S.', role: 'Treasurer, Palm Heights' },
              { quote: 'Paying the same price for more features. Support team helped us migrate everything in 2 days.', name: 'Sunita M.', role: 'Secretary, Lakeview Enclave' },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8"
              >
                <p className="mb-6 text-neutral-500">"{t.quote}"</p>
                <p className="font-bold text-charcoal-900">{t.name}</p>
                <p className="text-sm text-neutral-500">{t.role}</p>
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
              Ready to Switch to Aira Nexus?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Free migration support. Join 50+ communities that switched from MyGate to Aira Nexus.
            </p>
            <Link to="/request-demo" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-charcoal-900 font-semibold hover:bg-neutral-50 transition-colors">
              Request Demo <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
