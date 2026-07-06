import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  BarChart3,
  Users,
  Bell,
  Smartphone,
  CreditCard,
  MessageSquare,
  Check,
  ArrowRight,
  Star,
  Network,
  Cpu,
  Sparkles,
} from 'lucide-react';
import SEO from '../components/SEO';

interface HomePageProps {
  darkMode: boolean;
}

export default function HomePage({ darkMode: _darkMode }: HomePageProps) {
  const stats = [
    { value: '100+', label: 'Communities' },
    { value: '50K+', label: 'Residents' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];

  const features = [
    { icon: CreditCard, title: 'Maintenance Billing', desc: 'Automated invoicing, online payments, and reminders — all in one dashboard.' },
    { icon: MessageSquare, title: 'Complaint Management', desc: 'Track, assign, and resolve resident complaints with full transparency.' },
    { icon: Bell, title: 'Notice Board', desc: 'Broadcast announcements and events to residents instantly.' },
    { icon: Users, title: 'Resident Directory', desc: 'A secure, searchable directory for your entire community.' },
    { icon: Shield, title: 'Visitor Management', desc: 'Digital gate pass system with pre-approvals and real-time alerts.' },
    { icon: BarChart3, title: 'Reports & Analytics', desc: 'AI-powered insights into collections, complaints, and community health.' },
    { icon: Smartphone, title: 'Mobile App', desc: 'Native iOS and Android apps for residents and management alike.' },
    { icon: Zap, title: 'WhatsApp Notifications', desc: 'Automated WhatsApp messages for dues, events, and urgent alerts.' },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹2,999',
      period: '/month',
      desc: 'For small communities up to 100 flats',
      features: ['Core management tools', 'Up to 100 units', 'Email support', 'Mobile app access', 'Basic analytics'],
      popular: false,
    },
    {
      name: 'Growth',
      price: '₹5,999',
      period: '/month',
      desc: 'For growing communities up to 500 flats',
      features: ['Everything in Starter', 'Up to 500 units', 'Priority support', 'Advanced analytics', 'WhatsApp automation', 'Visitor management'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large communities and portfolios',
      features: ['Everything in Growth', 'Unlimited units', 'Dedicated manager', 'Custom integrations', 'SLA guarantee', 'White-label option'],
      popular: false,
    },
  ];

  const testimonials = [
    { name: 'Arjun Rao', role: 'Secretary, Prestige Lakes', text: 'AiraNexus transformed how we manage our 1,200-unit community. Billing is automated, complaints are tracked, and residents are happier than ever.', rating: 5 },
    { name: 'Priya Nair', role: 'Treasurer, Brigade Gateway', text: 'The analytics dashboard gives us real-time visibility into collections and expenses. We have cut our admin time by 70%.', rating: 5 },
    { name: 'Vikram Sharma', role: 'President, Sobha Dream Acres', text: 'The WhatsApp integration is a game-changer. Residents get instant notifications and we no longer deal with missed communications.', rating: 5 },
  ];

  return (
    <div className="overflow-hidden">
      <SEO title="AiraNexus — AI-Powered Community Management Platform" description="AiraNexus brings AI-driven automation, seamless billing, and real-time communication to residential communities — all in one elegant platform." path="/" />
      {/* ── Hero ── */}
      <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Floating blobs */}
        <div className="blob w-[500px] h-[500px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[400px] h-[400px] bg-lime-500 top-40 -left-20 animate-float-slow" />
        <div className="blob w-[300px] h-[300px] bg-cyan-500 bottom-0 right-1/3 animate-float" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-700">AI-Powered Community Management</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-900 leading-tight tracking-tight"
            >
              The future of <span className="text-gradient">community</span> management is here
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto"
            >
              AiraNexus brings AI-driven automation, seamless billing, and real-time communication to residential communities — all in one elegant platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/request-demo" className="btn-primary text-base px-8 py-4">
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/features" className="btn-secondary text-base px-8 py-4">
                Explore Features
              </Link>
            </motion.div>
          </div>

          {/* AI Network Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 max-w-5xl mx-auto"
          >
            <div className="relative card-glass p-8 lg:p-12 rounded-4xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Network, label: 'Connected Communities', value: '100+' },
                  { icon: Cpu, label: 'AI Automations', value: '24/7' },
                  { icon: Users, label: 'Active Residents', value: '50K+' },
                  { icon: Shield, label: 'Data Security', value: '99.9%' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="icon-circle-lg mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-charcoal-900">{item.value}</div>
                    <div className="text-sm text-neutral-500 mt-1">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-neutral-500 mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Features</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-charcoal-900">Everything your community needs</h2>
            <p className="mt-4 text-neutral-500">A complete suite of tools designed to simplify community management from end to end.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="card p-6"
              >
                <div className="icon-circle-lg mb-5">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-charcoal-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Preview ── */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Pricing</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-charcoal-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-neutral-500">Choose the plan that fits your community. No hidden fees, cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`card p-8 relative ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white bg-brand-gradient">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-charcoal-900">{plan.name}</h3>
                <p className="text-sm text-neutral-500 mt-1">{plan.desc}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-charcoal-900">{plan.price}</span>
                  <span className="text-neutral-400 ml-1">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start space-x-3 text-sm text-neutral-600">
                      <Check className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/request-demo"
                  className={`mt-8 w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'} justify-center`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-primary-500 uppercase tracking-wider">Testimonials</span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-charcoal-900">Loved by communities across India</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8"
              >
                <div className="flex space-x-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-lime-500 fill-lime-500" />
                  ))}
                </div>
                <p className="text-neutral-600 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <div className="font-semibold text-charcoal-900">{t.name}</div>
                  <div className="text-sm text-neutral-500">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="relative rounded-4xl overflow-hidden p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-brand-gradient" />
            <div className="absolute inset-0 blob w-[300px] h-[300px] bg-white/20 -top-10 -left-10 animate-float" />
            <div className="absolute inset-0 blob w-[250px] h-[250px] bg-cyan-500/20 bottom-0 right-0 animate-float-slow" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to transform your community?</h2>
              <p className="mt-4 text-white/90 text-lg max-w-xl mx-auto">Join 100+ communities already using AiraNexus to save time, reduce costs, and delight residents.</p>
              <Link to="/request-demo" className="mt-8 inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-primary-600 bg-white hover:scale-105 transition-transform shadow-lg">
                Request Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
