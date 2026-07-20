import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Receipt,
  Users,
  ShieldCheck,
  CalendarDays,
  Wrench,
  Megaphone,
  CreditCard,
  Bell,
  BarChart3,
  CheckCircle2,
  Star,
  LayoutDashboard,
  TrendingUp,
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import FeatureCard from '../components/ui/FeatureCard';
import StatCard from '../components/ui/StatCard';
import CTABanner from '../components/ui/CTABanner';

const stats = [
  { value: '500+', label: 'Communities' },
  { value: '50K+', label: 'Residents' },
  { value: '40%', label: 'Better Collections' },
  { value: '99.9%', label: 'Uptime' },
];

const features = [
  { icon: Receipt, title: 'Maintenance Billing', description: 'Automated invoice generation, reminders, and online payments via UPI, cards, and net banking.' },
  { icon: Users, title: 'Visitor Management', description: 'Digital gate pass, staff verification, and real-time visitor tracking with QR check-ins.' },
  { icon: ShieldCheck, title: 'Security & Access', description: 'Role-based access control, audit logs, and secure data encryption for every community.' },
  { icon: CalendarDays, title: 'Amenity Booking', description: 'Reserve clubhouses, pools, and sports courts with conflict-free scheduling.' },
  { icon: Wrench, title: 'Helpdesk & Complaints', description: 'Track resident complaints, assign vendors, and resolve issues with SLA timers.' },
  { icon: Megaphone, title: 'Communications', description: 'Broadcast notices, polls, and emergency alerts via SMS, email, and in-app push.' },
];

const steps = [
  { icon: CreditCard, title: 'Onboard your community', description: 'Import residents, flats, and dues in minutes with our guided setup wizard.' },
  { icon: Bell, title: 'Automate billing & notices', description: 'Schedule recurring maintenance invoices, reminders, and community announcements.' },
  { icon: BarChart3, title: 'Engage residents', description: 'Residents pay, book amenities, and raise tickets from the mobile app.' },
  { icon: TrendingUp, title: 'Track & optimize', description: 'Monitor collections, vendor performance, and resident satisfaction in real time.' },
];

const testimonials = [
  {
    quote: 'AiraNexus cut our collection time from 45 days to under 10. The automated reminders alone paid for the platform.',
    name: 'Priya Sharma',
    role: 'Secretary, Greenfield Residency',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
  {
    quote: 'Visitor management is night and day compared to our old paper register. Security guards love the QR check-in.',
    name: 'Rajesh Kumar',
    role: 'Facility Manager, Palm Grove Apartments',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
  {
    quote: 'The dashboard gives our committee complete visibility. We finally make data-driven decisions for the society.',
    name: 'Anita Desai',
    role: 'Treasurer, Lakeview Heights',
    avatar: 'https://images.pexels.com/photos/7640/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="AiraNexus — Society & Apartment Management Software"
        description="The all-in-one platform for Indian residential communities. Manage billing, maintenance, visitors, amenities, and residents with ease."
        canonical="https://airanexus.com/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="badge-primary"
            >
              <Star className="h-3 w-3" aria-hidden="true" />
              Trusted by 500+ communities
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-6 text-display-lg font-display font-extrabold tracking-tight text-charcoal-900 text-balance"
            >
              Run your society on{' '}
              <span className="text-gradient">autopilot</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty"
            >
              AiraNexus brings billing, maintenance, visitors, amenities, and resident
              communication into one beautiful platform built for Indian residential communities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Link to="/request-demo" className="btn-primary group">
                Book a Free Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link to="/features" className="btn-ghost">
                Explore Features
              </Link>
            </motion.div>
          </div>

          {/* Product mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-16 max-w-5xl"
          >
            <div className="overflow-hidden rounded-4xl border border-charcoal-200/60 bg-white shadow-elevated">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-charcoal-100 bg-charcoal-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-greenish-400" />
                </div>
                <div className="mx-auto flex-1 max-w-xs">
                  <div className="mx-auto flex items-center justify-center gap-1.5 rounded-full bg-white px-3 py-1 text-2xs text-charcoal-400 shadow-soft">
                    <ShieldCheck className="h-3 w-3 text-greenish-500" aria-hidden="true" />
                    app.airanexus.com
                  </div>
                </div>
              </div>
              {/* Dashboard */}
              <div className="grid gap-4 bg-gradient-to-br from-primary-50/50 to-white p-4 sm:grid-cols-3 sm:p-6">
                <div className="sm:col-span-2">
                  <div className="rounded-2xl border border-charcoal-100 bg-white p-5 shadow-soft">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="icon-circle-sm">
                          <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <span className="font-display text-sm font-semibold text-charcoal-900">
                          Collection Overview
                        </span>
                      </div>
                      <span className="badge-lime">+40%</span>
                    </div>
                    <div className="mt-4 flex items-end gap-2">
                      {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-primary-500 to-primary-300"
                          style={{ height: `${h}px` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-charcoal-100 bg-white p-4 shadow-soft">
                      <p className="text-2xs text-charcoal-500">Collected this month</p>
                      <p className="mt-1 font-display text-xl font-bold text-charcoal-900">₹18.4L</p>
                    </div>
                    <div className="rounded-2xl border border-charcoal-100 bg-white p-4 shadow-soft">
                      <p className="text-2xs text-charcoal-500">Pending dues</p>
                      <p className="mt-1 font-display text-xl font-bold text-charcoal-900">₹2.1L</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-charcoal-100 bg-white p-4 shadow-soft">
                    <p className="text-2xs font-semibold text-charcoal-500">Recent activity</p>
                    <ul className="mt-3 space-y-2.5">
                      {['Priya paid ₹4,500', 'New visitor at Gate 2', 'Complaint #482 resolved'].map((t) => (
                        <li key={t} className="flex items-center gap-2 text-2xs text-charcoal-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-greenish-500" aria-hidden="true" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-charcoal-100 bg-white p-4 shadow-soft">
                    <p className="text-2xs font-semibold text-charcoal-500">Amenity bookings</p>
                    <div className="mt-3 space-y-2">
                      {['Clubhouse', 'Swimming Pool', 'Tennis Court'].map((a) => (
                        <div key={a} className="flex items-center justify-between text-2xs">
                          <span className="text-charcoal-700">{a}</span>
                          <span className="badge-primary">Booked</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-charcoal-100 bg-white">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <StatCard key={s.label} value={s.value} label={s.label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title="Everything your community needs"
            description="AiraNexus replaces five different tools with one unified platform your committee and residents will actually love using."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-charcoal-50 section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="How it works"
            badgeVariant="cyan"
            title="Up and running in four steps"
            description="No lengthy implementations. No expensive consultants. Just a guided setup that gets your community live in days, not months."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-3xl border border-charcoal-100 bg-white p-6 shadow-card"
              >
                <span className="absolute right-5 top-5 font-display text-3xl font-extrabold text-primary-100">
                  {i + 1}
                </span>
                <div className="icon-circle-lg">
                  <step.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-charcoal-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            badgeVariant="lime"
            title="Loved by committees and residents"
            description="Hear from the management committees who switched to AiraNexus and never looked back."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover flex flex-col"
              >
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display text-sm font-semibold text-charcoal-900">{t.name}</p>
                    <p className="text-2xs text-charcoal-500">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
