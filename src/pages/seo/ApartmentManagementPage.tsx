import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  MessageSquare,
  Users,
  Shield,
  Smartphone,
  Building,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FeatureCard from '../../components/ui/FeatureCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import CTABanner from '../../components/ui/CTABanner';

interface ApartmentManagementPageProps {
  darkMode: boolean;
}

const features = [
  { icon: CreditCard, title: 'Maintenance Billing', description: 'Automate invoices, send reminders, and collect payments online — all on autopilot with real-time tracking.' },
  { icon: MessageSquare, title: 'Complaint Management', description: 'Route, prioritize, and resolve resident complaints with full transparency and status tracking.' },
  { icon: Users, title: 'Resident Directory', description: 'Complete database with family details, vehicles, and contact information — always up to date.' },
  { icon: Shield, title: 'Visitor Management', description: 'Pre-approved gate passes with QR codes. Secure, fast, and completely paperless.' },
  { icon: Smartphone, title: 'Mobile App', description: 'Native iOS and Android apps for residents, staff, and committee members on the go.' },
  { icon: Building, title: 'Reports & Analytics', description: 'Financial dashboards and performance metrics for audit-ready, data-driven decisions.' },
];

const benefits = [
  '40% improvement in maintenance collections',
  '60% faster complaint resolution time',
  'Paperless operations — no more registers',
  'Real-time financial transparency for committee members',
  'WhatsApp integration for instant communication',
  'Dedicated support for onboarding and training',
];

const faqs = [
  { q: 'How quickly can we implement AiraNexus?', a: 'Most apartments go live within 24–48 hours. We handle data migration, staff training, and resident onboarding end-to-end.' },
  { q: 'Can residents pay maintenance online?', a: 'Yes! Residents can pay via UPI, cards, net banking, or auto-debit. We integrate with all major payment gateways including Razorpay, PayU, and HDFC.' },
  { q: 'Is there a mobile app for residents?', a: 'Yes, we have native iOS and Android apps. Residents can pay bills, raise complaints, and receive updates directly from their phones.' },
  { q: 'Do you support WhatsApp notifications?', a: 'Yes! Growth and Enterprise plans include WhatsApp integration for automated reminders, alerts, and resident communication.' },
];

const avatarIds = [220453, 415829, 7640, 1043471];

export default function ApartmentManagementPage({ darkMode: _darkMode }: ApartmentManagementPageProps) {
  return (
    <div>
      <SEO
        title="Apartment Management Software — AiraNexus"
        description="Complete apartment management software with billing, complaints, visitor tracking, and resident communication."
        path="/apartment-management-software"
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
              #1 Apartment Management Software
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Apartment management,{' '}
              <span className="text-gradient">reimagined</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              The complete solution for managing apartments — from maintenance billing to
              resident communication. Trusted by 100+ communities across India.
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

      {/* Features */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title={<>Everything your apartment needs, <span className="text-gradient">in one place</span></>}
            description="From billing to complaints to visitor management — AiraNexus handles it all so your committee can focus on what matters."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge badge-lime mb-4">Why AiraNexus</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal-900 mb-6 text-balance">
                Why choose AiraNexus for apartment management?
              </h2>
              <p className="text-lg text-charcoal-500 mb-8 text-pretty">
                Stop juggling spreadsheets, WhatsApp groups, and paper registers. AiraNexus
                brings every aspect of apartment management into one elegant platform.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-charcoal-600">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/request-demo" className="btn-primary mt-8">
                Schedule Demo
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
                  {avatarIds.map((id, i) => (
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
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-sm text-charcoal-500">From 100+ reviews</p>
                </div>
              </div>
              <blockquote className="text-charcoal-600 leading-relaxed mb-6">
                &ldquo;We switched from Excel sheets to AiraNexus. Collections improved by 45%
                in the first quarter. The WhatsApp reminders are a game-changer.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-charcoal-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                  R
                </div>
                <div>
                  <p className="font-semibold text-sm text-charcoal-900">Rajesh K.</p>
                  <p className="text-xs text-charcoal-500">President, Green Valley Apartments</p>
                </div>
              </div>
            </motion.div>
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
            description="Everything you need to know about apartment management with AiraNexus."
          />
          <div className="mt-14">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to transform your apartment management?"
        description="Join 100+ apartments already using AiraNexus for hassle-free operations. Get a personalized demo today."
        primaryAction={{ label: 'Book a Free Demo', to: '/request-demo' }}
        secondaryAction={{ label: 'View Pricing', to: '/pricing' }}
      />
    </div>
  );
}
