import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  MessageSquare,
  Shield,
  Users,
  BarChart3,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Bell,
  Calendar,
} from 'lucide-react';
import SEO from '../components/SEO';
import FeatureCard from '../components/ui/FeatureCard';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import CTABanner from '../components/ui/CTABanner';

const features = [
  { icon: CreditCard, title: 'Automated Billing', description: 'Generate invoices, send reminders, and collect payments online — all on autopilot.' },
  { icon: MessageSquare, title: 'Complaint Tracking', description: 'Route, prioritize, and resolve resident complaints with full transparency.' },
  { icon: Shield, title: 'Visitor Management', description: 'Pre-approved gate passes with QR codes. Secure, fast, paperless.' },
  { icon: Users, title: 'Resident Directory', description: 'Complete database with family details, vehicles, and contact information.' },
  { icon: BarChart3, title: 'Financial Reports', description: 'Real-time dashboards for collections, expenses, and audit-ready statements.' },
  { icon: Smartphone, title: 'Mobile App', description: 'Native iOS and Android apps for residents, staff, and committee members.' },
];

const stats = [
  { value: '500+', label: 'Communities' },
  { value: '50K+', label: 'Residents' },
  { value: '40%', label: 'Better Collections' },
  { value: '99.9%', label: 'Uptime' },
];

const testimonials = [
  {
    quote: 'We switched from Excel sheets to AiraNexus. Collections improved by 45% in the first quarter. The WhatsApp reminders are a game-changer.',
    name: 'Rajesh K.',
    role: 'President, Green Valley Apartments',
    rating: 5,
  },
  {
    quote: 'The best decision we made for our society. Complaints that took days now resolve in hours. Residents are happier, committee is relaxed.',
    name: 'Priya S.',
    role: 'Secretary, Lakeview Enclave',
    rating: 5,
  },
  {
    quote: 'Onboarding was seamless. Their team migrated everything in 2 days. Now we have full financial transparency at our fingertips.',
    name: 'Amit M.',
    role: 'Treasurer, Palm Heights',
    rating: 5,
  },
];

const steps = [
  { icon: Zap, title: 'Sign Up', description: 'Create your community account in 2 minutes' },
  { icon: Bell, title: 'Onboard Residents', description: 'Invite residents via WhatsApp or email' },
  { icon: CheckCircle, title: 'Go Live', description: 'Start collecting payments and managing complaints' },
  { icon: Calendar, title: 'Track & Improve', description: 'Monitor analytics and optimize operations' },
];

export default function HomePage() {
  return (
    <div>
      <SEO
        title="AiraNexus — AI-Powered Community Management Platform"
        description="AiraNexus is an AI-powered community management platform for apartments, gated communities, and RWAs. Automate maintenance billing, complaints, visitor tracking, and resident communication."
        path="/"
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
              AI-Powered Platform
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Community management,{' '}
              <span className="text-gradient">reimagined</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              Automate maintenance billing, track complaints, manage visitors, and keep your
              community connected — all from one elegant platform.
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

          {/* Product mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl bg-white border border-charcoal-100 shadow-elevated overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-charcoal-100 bg-charcoal-50">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-charcoal-400 font-medium">app.airanexus.com</span>
              </div>
              <div className="grid grid-cols-12 min-h-[280px] sm:min-h-[360px]">
                {/* Sidebar */}
                <div className="hidden sm:flex col-span-3 lg:col-span-2 flex-col gap-1 p-4 border-r border-charcoal-100 bg-charcoal-50/50">
                  {['Dashboard', 'Billing', 'Complaints', 'Visitors', 'Residents', 'Reports'].map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-xs font-medium ${i === 0 ? 'bg-primary-50 text-primary-600' : 'text-charcoal-500'}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main content */}
                <div className="col-span-12 sm:col-span-9 lg:col-span-10 p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="h-3 w-32 bg-charcoal-200 rounded animate-pulse mb-2" />
                      <div className="h-2 w-24 bg-charcoal-100 rounded animate-pulse" />
                    </div>
                    <div className="h-8 w-20 bg-primary-100 rounded-lg animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {[
                      { label: 'Collected', value: '₹4.2L', color: 'bg-primary-50 text-primary-600' },
                      { label: 'Pending', value: '₹38K', color: 'bg-yellow-50 text-yellow-600' },
                      { label: 'Complaints', value: '12', color: 'bg-cyan-50 text-cyan-600' },
                      { label: 'Visitors', value: '84', color: 'bg-lime-50 text-lime-600' },
                    ].map((stat) => (
                      <div key={stat.label} className={`rounded-xl p-3 ${stat.color}`}>
                        <p className="text-xs opacity-70 mb-1">{stat.label}</p>
                        <p className="text-lg font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-charcoal-100">
                        <div className="w-8 h-8 rounded-lg bg-charcoal-100 animate-pulse" />
                        <div className="flex-1">
                          <div className="h-2 w-32 bg-charcoal-100 rounded animate-pulse mb-1.5" />
                          <div className="h-2 w-20 bg-charcoal-50 rounded animate-pulse" />
                        </div>
                        <div className="w-12 h-6 bg-primary-100 rounded-full animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 lg:py-16 bg-white border-y border-charcoal-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title={<>Everything your community needs, <span className="text-gradient">in one place</span></>}
            description="From billing to complaints to visitor management — AiraNexus handles it all so your committee can focus on what matters."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="How it works"
            badgeColor="lime"
            title={<>Live in <span className="text-gradient">4 simple steps</span></>}
            description="No complex setup. No lengthy training. Just sign up and go."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-500 text-white flex items-center justify-center font-bold text-sm shadow-teal">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px bg-gradient-to-r from-primary-200 to-transparent" />
                  )}
                </div>
                <div className="icon-circle-sm mb-3">
                  <step.icon className="w-4 h-4 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-charcoal-900 mb-1">{step.title}</h3>
                <p className="text-sm text-charcoal-500">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            badgeColor="cyan"
            title={<>Trusted by <span className="text-gradient">500+ communities</span></>}
            description="See what community managers and committee members say about AiraNexus."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card card-hover p-6 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-sm text-charcoal-600 leading-relaxed flex-1 mb-5">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-charcoal-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
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

      {/* CTA */}
      <CTABanner
        title="Ready to transform your community?"
        description="Join 500+ communities already using AiraNexus for hassle-free management. Get a personalized demo today."
        primaryAction={{ label: 'Book a Free Demo', to: '/request-demo' }}
        secondaryAction={{ label: 'View Pricing', to: '/pricing' }}
      />
    </div>
  );
}
