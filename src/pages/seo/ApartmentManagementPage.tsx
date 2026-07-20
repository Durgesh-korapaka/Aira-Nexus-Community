import { motion } from 'framer-motion';
import {
  Building2,
  Receipt,
  Users,
  CalendarDays,
  Wrench,
  BarChart3,
  Megaphone,
  CheckCircle2,
  Star,
} from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FeatureCard from '../../components/ui/FeatureCard';
import FAQAccordion from '../../components/ui/FAQAccordion';
import CTABanner from '../../components/ui/CTABanner';

const features = [
  { icon: Receipt, title: 'Maintenance Billing', description: 'Automated invoices and online payments via UPI, cards, and net banking with instant reconciliation.' },
  { icon: Users, title: 'Visitor Management', description: 'Digital gate pass with QR check-in and real-time visitor tracking for every tower and gate.' },
  { icon: CalendarDays, title: 'Amenity Booking', description: 'Reserve clubhouses, pools, and sports courts with conflict-free scheduling.' },
  { icon: Wrench, title: 'Helpdesk & Complaints', description: 'Track resident complaints, assign vendors, and resolve issues with SLA timers.' },
  { icon: BarChart3, title: 'Analytics', description: 'Real-time dashboards for collections, arrears, and resident satisfaction.' },
  { icon: Megaphone, title: 'Communications', description: 'Broadcast notices, polls, and emergency alerts via SMS, email, and push.' },
];

const benefits = [
  'Cut collection time from 45 days to under 10',
  'Replace paper gate registers with digital QR check-ins',
  'Give residents a single app to pay, book, and complain',
  'Generate AGM-ready financial reports in one click',
  'Track vendor performance and SLA compliance',
  'Reduce committee workload by 60%',
];

const faqs = [
  { question: 'Is AiraNexus suitable for large apartment complexes?', answer: 'Yes. AiraNexus scales from 50-flat societies to 1,000+ flat complexes with multiple towers, gates, and amenities.' },
  { question: 'Can residents pay maintenance online?', answer: 'Yes, residents can pay via UPI, cards, and net banking directly from the mobile app with instant receipts.' },
  { question: 'How long does onboarding take?', answer: 'Most apartments are fully onboarded within 2–3 days with our guided setup wizard.' },
  { question: 'Do you support multi-tower complexes?', answer: 'Yes, you can manage multiple towers, gates, and amenity blocks from a single dashboard.' },
  { question: 'Is there a resident mobile app?', answer: 'Yes, native iOS and Android apps are included on every plan at no extra cost.' },
];

export default function ApartmentManagementPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  return (
    <>
      <SEO
        title="Apartment Management Software — AiraNexus"
        description="AiraNexus is the leading apartment management software in India. Automate billing, visitor management, helpdesk, amenities, and communications for your apartment complex."
        canonical="https://airanexus.com/apartment-management-software"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'AiraNexus Apartment Management Software',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          offers: { '@type': 'Offer', price: '2999', priceCurrency: 'INR' },
        }}
      />

      {/* Hero */}
      <section className="bg-hero-gradient pb-20 pt-32 sm:pt-36">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">
              <Building2 className="h-3 w-3" aria-hidden="true" />
              Apartment Management Software
            </span>
            <h1 className="mt-6 text-display-lg font-display font-extrabold tracking-tight text-charcoal-900 text-balance">
              The complete platform for <span className="text-gradient">apartment management</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Run your apartment complex on autopilot. AiraNexus brings billing, visitor management,
              helpdesk, amenities, and communications into one beautiful platform.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Features"
            title="Everything your apartment needs"
            description="Six powerful modules that replace fragmented tools and paper registers."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="badge-lime">Benefits</span>
              <h2 className="mt-4 text-display-sm font-display font-bold tracking-tight text-charcoal-900 text-balance">
                Why apartments choose AiraNexus
              </h2>
              <ul className="mt-6 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-charcoal-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-4xl border border-charcoal-100 shadow-card-hover"
            >
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Apartment management with AiraNexus"
                loading="lazy"
                decoding="async"
                width={800}
                height={533}
                className="h-full w-full object-cover"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl rounded-4xl border border-charcoal-100 bg-white p-8 shadow-card sm:p-10"
          >
            <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 text-lg font-medium leading-relaxed text-charcoal-800 text-pretty">
              &ldquo;AiraNexus transformed how our 350-flat complex operates. We went from chasing dues on
              WhatsApp to a 95% on-time collection rate in three months.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2"
                alt="Priya Sharma"
                loading="lazy"
                decoding="async"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-sm font-semibold text-charcoal-900">Priya Sharma</p>
                <p className="text-2xs text-charcoal-500">Secretary, Greenfield Residency</p>
              </div>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading badge="FAQ" title="Frequently asked questions" />
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
