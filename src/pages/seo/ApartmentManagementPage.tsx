import { motion } from 'framer-motion'
import {
  BarChart3,
  Building2,
  CreditCard,
  MessageSquare,
  Smartphone,
  Star,
  Users,
} from 'lucide-react'
import SEO from '../../components/SEO'
import SectionHeading from '../../components/ui/SectionHeading'
import FeatureCard from '../../components/ui/FeatureCard'
import FAQAccordion, { type FAQItem } from '../../components/ui/FAQAccordion'
import CTABanner from '../../components/ui/CTABanner'

const features = [
  { icon: CreditCard, title: 'Maintenance Billing', description: 'Automated invoicing, UPI payments, and real-time arrears tracking for every unit.' },
  { icon: MessageSquare, title: 'Complaint Management', description: 'Raise, assign, and resolve complaints with SLA timers and photo evidence.' },
  { icon: Users, title: 'Visitor Tracking', description: 'QR-based guest passes and a digital visitor log for complete security.' },
  { icon: Building2, title: 'Resident Directory', description: 'Verified directory of owners and tenants with contact and vehicle details.' },
  { icon: BarChart3, title: 'Financial Reports', description: 'Income, expense, and arrears dashboards ready for your next AGM.' },
  { icon: Smartphone, title: 'Mobile App', description: 'Native apps for residents and managers with push notifications.' },
]

const benefits = [
  { title: 'Cut collection time by 60%', description: 'Automated reminders and one-tap UPI payments get residents paying on time.' },
  { title: 'Resolve complaints 3x faster', description: 'Every complaint has an owner, an SLA, and a visible status — no more lost tickets.' },
  { title: 'Transparent AGMs', description: 'Publish minutes, run polls, and share financial reports that every resident can verify.' },
]

const faqs: FAQItem[] = [
  { question: 'Is Aira Nexus suitable for small apartment complexes?', answer: 'Yes. Our Starter plan supports communities up to 100 units and scales seamlessly as you grow. Whether you have 20 units or 2,000, the platform adapts.' },
  { question: 'How long does onboarding take?', answer: 'Most communities are fully onboarded within 3–5 days. Our guided setup wizard helps you import residents and dues in minutes, and we provide free onboarding support.' },
  { question: 'Can residents pay maintenance via UPI?', answer: 'Yes. Residents can pay via any UPI app, credit/debit cards, and netbanking. Payments settle instantly with auto-generated receipts.' },
  { question: 'Do you support multi-tower apartments?', answer: 'Absolutely. Aira Nexus supports tower-wise billing, shared amenity booking, and inter-tower visitor policies out of the box.' },
]

export default function ApartmentManagementPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  return (
    <>
      <SEO
        title="Apartment Management Software — Run Your Complex on Autopilot"
        description="Aira Nexus is the all-in-one apartment management software for billing, complaints, visitors, and finances. Trusted by 500+ communities across India."
        path="/apartment-management-software"
      />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom pb-16 text-center lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <span className="badge-primary">
              <Building2 className="h-3.5 w-3.5" />
              Apartment Management Software
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Run your apartment complex <span className="text-gradient">on autopilot</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              From maintenance billing to visitor logs, Aira Nexus replaces 5+ tools with one
              beautifully simple platform built for Indian apartments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title={<>Everything your apartment <span className="text-gradient">needs in one place</span></>}
            description="Six core modules that cover the full lifecycle of community management."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={(i % 3) * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Benefits"
            badgeVariant="lime"
            title={<>What you gain by <span className="text-gradient">switching to Aira Nexus</span></>}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover"
              >
                <h3 className="text-lg font-semibold text-charcoal-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl card-hover"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="mt-4 text-lg leading-relaxed text-charcoal-700">
              "We switched from spreadsheets and WhatsApp groups to Aira Nexus last year. On-time
              collections jumped from 62% to 91%. Complaints that used to take days now resolve in
              hours. It's transformed how our committee operates."
            </p>
            <div className="mt-5 flex items-center gap-3">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2"
                alt="Rajesh Kumar"
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
                decoding="async"
                width="48"
                height="48"
              />
              <div>
                <p className="text-sm font-semibold text-charcoal-900">Rajesh Kumar</p>
                <p className="text-xs text-charcoal-500">Secretary, Prestige Lakeside (180 units)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading badge="FAQ" badgeVariant="cyan" title={<>Common questions</>} />
          <div className="mx-auto mt-12 max-w-3xl">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to modernize your apartment?"
        description="Book a free demo and see how Aira Nexus fits your complex — no commitment, no credit card."
        primaryLabel="Book a Demo"
        secondaryLabel="View Pricing"
      />
    </>
  )
}
