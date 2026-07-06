import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CreditCard,
  MessageSquare,
  Bell,
  Users,
  Shield,
  BarChart3,
  Smartphone,
  Zap,
  Lock,
  ArrowRight,
  Check,
} from 'lucide-react';
import SEO from '../components/SEO';

interface FeaturesPageProps {
  darkMode: boolean;
}

export default function FeaturesPage({ darkMode: _darkMode }: FeaturesPageProps) {
  const features = [
    {
      icon: CreditCard,
      title: 'Maintenance Billing',
      desc: 'Automate your entire billing cycle — from invoice generation to payment collection to reminders.',
      benefits: ['Automated invoice generation', 'Online payment gateway', 'Auto-reminder system', 'Late fee calculation', 'Payment tracking', 'GST compliance'],
      highlights: ['Reduce unpaid dues by 80%', 'Save 20+ hours/month on billing'],
    },
    {
      icon: MessageSquare,
      title: 'Complaint Management',
      desc: 'A structured ticketing system that ensures every complaint is tracked, assigned, and resolved.',
      benefits: ['Ticket-based tracking', 'Photo & video attachments', 'SLA monitoring', 'Auto-assignment', 'Resident feedback', 'Resolution analytics'],
      highlights: ['Average resolution time: 24 hours', '98% resident satisfaction'],
    },
    {
      icon: Bell,
      title: 'Notice Board',
      desc: 'Broadcast announcements, events, and important updates to all residents instantly.',
      benefits: ['Instant broadcast', 'Scheduled posts', 'Category tagging', 'Event calendar', 'RSVP tracking', 'Pin important notices'],
      highlights: ['Reach 100% of residents', 'Zero missed communications'],
    },
    {
      icon: Users,
      title: 'Resident Directory',
      desc: 'A secure, searchable directory of all residents with contact info and vehicle details.',
      benefits: ['Secure access control', 'Search & filter', 'Vehicle management', 'Family member records', 'Emergency contacts', 'Export to Excel'],
      highlights: ['Bank-grade encryption', 'GDPR compliant'],
    },
    {
      icon: Shield,
      title: 'Visitor Management',
      desc: 'Digital gate pass system with pre-approvals, QR codes, and real-time visitor tracking.',
      benefits: ['Digital gate passes', 'Pre-approval system', 'QR code check-in', 'Real-time alerts', 'Visitor history', 'Delivery management'],
      highlights: ['Cut gate wait time by 60%', '100% digital, zero paper'],
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      desc: 'AI-powered dashboards that give you deep insights into your community operations.',
      benefits: ['Real-time dashboards', 'Collection reports', 'Complaint analytics', 'Expense tracking', 'Trend analysis', 'Custom reports'],
      highlights: ['AI-powered insights', 'Export to PDF & Excel'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Application',
      desc: 'Native iOS and Android apps for residents and management committee members.',
      benefits: ['iOS & Android native', 'Push notifications', 'Offline access', 'Biometric login', 'Dark mode', 'Multi-language support'],
      highlights: ['4.8 star app rating', '50K+ downloads'],
    },
    {
      icon: Zap,
      title: 'WhatsApp Notifications',
      desc: 'Automated WhatsApp messages for dues, events, complaints, and urgent alerts.',
      benefits: ['Automated reminders', 'Event notifications', 'Complaint updates', 'Urgent alerts', 'Payment confirmations', 'Custom templates'],
      highlights: ['90% open rate', 'Instant delivery'],
    },
    {
      icon: Lock,
      title: 'Role-Based Access Control',
      desc: 'Granular permissions for committee members, security staff, and residents.',
      benefits: ['Custom roles', 'Permission levels', 'Audit logs', 'Multi-committee support', 'Temporary access', 'Activity tracking'],
      highlights: ['Enterprise-grade security', 'Full audit trail'],
    },
  ];

  return (
    <div className="overflow-hidden">
      <SEO title="Features — AiraNexus Community Management" description="Explore AiraNexus features: maintenance billing, complaint management, visitor tracking, notice board, resident directory, analytics, and WhatsApp integration." path="/features" />
      {/* Hero */}
      <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 right-0 animate-float" />
        <div className="blob w-[300px] h-[300px] bg-lime-500 top-40 -left-20 animate-float-slow" />
        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-primary-500 uppercase tracking-wider"
          >
            Features
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-4xl lg:text-5xl font-bold text-charcoal-900 tracking-tight"
          >
            Powerful features for <span className="text-gradient">modern communities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-neutral-500"
          >
            Every tool you need to manage billing, complaints, visitors, communication, and analytics — unified in one AI-powered platform.
          </motion.p>
        </div>
      </section>

      {/* Feature sections */}
      {features.map((feature, index) => (
        <section
          key={feature.title}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-primary-50/30'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? 'lg:col-start-2' : ''}
              >
                <div className="icon-circle-lg mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal-900 mb-4">{feature.title}</h2>
                <p className="text-neutral-500 text-lg mb-6">{feature.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {feature.benefits.map((b) => (
                    <div key={b} className="flex items-start space-x-2.5">
                      <Check className="w-5 h-5 text-lime-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-neutral-600">{b}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {feature.highlights.map((h) => (
                    <span key={h} className="px-4 py-2 rounded-xl bg-primary-50 text-primary-700 text-sm font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}
              >
                <div className="card-glass p-8 lg:p-12 rounded-4xl">
                  <div className="icon-circle-lg mx-auto mb-6 w-20 h-20">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="space-y-4">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-lime-100 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-lg bg-brand-gradient" />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="h-3 rounded-lg bg-neutral-200" style={{ width: `${80 - n * 10}%` }} />
                          <div className="h-2 rounded-lg bg-neutral-100" style={{ width: `${60 - n * 5}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="relative rounded-4xl overflow-hidden p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-brand-gradient" />
            <div className="absolute inset-0 blob w-[300px] h-[300px] bg-white/20 -top-10 -right-10 animate-float" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">See all features in action</h2>
              <p className="mt-4 text-white/90 text-lg">Book a personalized demo and explore how AiraNexus fits your community.</p>
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
