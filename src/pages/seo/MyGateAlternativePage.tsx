import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Zap,
  DollarSign,
  Headphones,
  CheckCircle,
  XCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FAQAccordion from '../../components/ui/FAQAccordion';
import CTABanner from '../../components/ui/CTABanner';

interface MyGateAlternativePageProps {
  darkMode: boolean;
}

const reasons = [
  { icon: Zap, title: 'More Features', desc: 'WhatsApp integration, polls, surveys, GST invoicing, and more — all built-in, no add-ons required.' },
  { icon: DollarSign, title: 'Better Pricing', desc: 'Up to 40% lower cost for the same features. Transparent pricing with no hidden fees.' },
  { icon: Headphones, title: 'Better Support', desc: 'Dedicated account manager for all plans. Free migration support and onboarding assistance.' },
];

const comparison = [
  { feature: 'Visitor Management', us: true, them: true },
  { feature: 'Maintenance Billing', us: true, them: true },
  { feature: 'Complaint Management', us: true, them: true },
  { feature: 'WhatsApp Notifications', us: true, them: false },
  { feature: 'Polls & Surveys', us: true, them: false },
  { feature: 'Amenity Booking', us: true, them: true },
  { feature: 'Reports & Analytics', us: true, them: 'Limited' },
  { feature: 'GST Invoicing', us: true, them: 'Add-on' },
  { feature: 'Starting Price', us: '₹2,999', them: '₹5,000+' },
];

const testimonials = [
  {
    quote: 'Switched from MyGate for WhatsApp integration. Best decision. Payments are smoother and residents love the instant notifications.',
    name: 'Amit S.',
    role: 'Treasurer, Palm Heights',
    initial: 'A',
  },
  {
    quote: 'Paying the same price for more features. Support team helped us migrate everything in 2 days. Couldn\u2019t be happier.',
    name: 'Sunita M.',
    role: 'Secretary, Lakeview Enclave',
    initial: 'S',
  },
];

const faqs = [
  { q: 'How easy is it to migrate from MyGate to AiraNexus?', a: 'Very easy! We handle the entire migration for you — data, residents, payment history — all at no extra cost. Most communities switch in under 48 hours.' },
  { q: 'Is AiraNexus really cheaper than MyGate?', a: 'Yes. Our plans start at ₹2,999/month compared to MyGate\u2019s ₹5,000+. Plus, features like WhatsApp notifications, polls, and GST invoicing are included — not expensive add-ons.' },
  { q: 'Do you offer WhatsApp integration?', a: 'Yes! WhatsApp notifications, reminders, and alerts are built-in on Growth and Enterprise plans. No third-party integrations needed.' },
  { q: 'What about support after switching?', a: 'Every plan includes a dedicated account manager. We also provide free onboarding, staff training, and ongoing support via WhatsApp, email, and phone.' },
];

export default function MyGateAlternativePage({ darkMode: _darkMode }: MyGateAlternativePageProps) {
  return (
    <div>
      <SEO
        title="MyGate Alternative — AiraNexus"
        description="Looking for a MyGate alternative? AiraNexus offers AI-powered community management with better features and pricing."
        path="/mygate-alternative"
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
              Looking for a MyGate Alternative?
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Better than MyGate.{' '}
              <span className="text-gradient">Half the price.</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              A more powerful, more affordable, and more customizable community management
              solution. See why communities are switching from MyGate to AiraNexus.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link to="/request-demo" className="btn-primary text-base px-8 py-4">
                See Why They Switch
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link to="/pricing" className="btn-secondary text-base px-8 py-4">
                Compare Pricing
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
                Free migration support
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                14-day free trial
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Switch */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="Why Switch"
            badgeColor="lime"
            title={<>Why switch to <span className="text-gradient">AiraNexus</span>?</>}
            description="More features, better pricing, and superior support. Here\u2019s why communities are making the switch."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card card-hover p-8 text-center group"
              >
                <div className="icon-circle-lg mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-charcoal-900">{item.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="Comparison"
            badgeColor="cyan"
            title={<>Feature <span className="text-gradient">comparison</span></>}
            description="See how AiraNexus stacks up against MyGate — feature by feature."
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 max-w-3xl mx-auto card p-0 overflow-hidden"
          >
            <div className="overflow-x-auto scrollbar-hide">
              <table className="w-full">
                <thead className="bg-charcoal-50">
                  <tr>
                    <th scope="col" className="text-left py-4 px-6 text-charcoal-900 font-bold text-sm">Feature</th>
                    <th scope="col" className="text-center py-4 px-6 text-primary-600 font-bold text-sm">
                      AiraNexus
                    </th>
                    <th scope="col" className="text-center py-4 px-6 text-charcoal-400 font-bold text-sm">
                      MyGate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature} className="border-t border-charcoal-100">
                      <td className="py-4 px-6 text-charcoal-600 font-medium text-sm">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.us === 'boolean' ? (
                          <CheckCircle className="w-6 h-6 text-primary-500 mx-auto" aria-hidden="true" />
                        ) : (
                          <span className="text-primary-600 font-bold text-sm">{row.us}</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {typeof row.them === 'boolean' ? (
                          row.them ? (
                            <CheckCircle className="w-6 h-6 text-charcoal-400 mx-auto" aria-hidden="true" />
                          ) : (
                            <XCircle className="w-6 h-6 text-charcoal-300 mx-auto" aria-hidden="true" />
                          )
                        ) : (
                          <span className="text-charcoal-400 text-sm">{row.them}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            badgeColor="lime"
            title={<>Communities that <span className="text-gradient">switched</span></>}
            description="Hear from community managers who made the switch from MyGate to AiraNexus."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card card-hover p-6 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-charcoal-600 leading-relaxed flex-1 mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-charcoal-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-charcoal-900">{t.name}</p>
                    <p className="text-xs text-charcoal-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="FAQ"
            badgeColor="cyan"
            title={<>Frequently asked <span className="text-gradient">questions</span></>}
            description="Everything you need to know about switching from MyGate to AiraNexus."
          />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to switch from MyGate?"
        description="Free migration support. Join 50+ communities that switched from MyGate to AiraNexus. Get a personalized demo today."
        primaryAction={{ label: 'Book a Free Demo', to: '/request-demo' }}
        secondaryAction={{ label: 'Compare Pricing', to: '/pricing' }}
      />
    </div>
  );
}
