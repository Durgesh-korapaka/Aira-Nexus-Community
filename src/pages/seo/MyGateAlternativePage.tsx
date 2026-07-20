import { motion } from 'framer-motion';
import { Check, X, Star, ShieldCheck, Zap, Users } from 'lucide-react';
import SEO from '../../components/SEO';
import SectionHeading from '../../components/ui/SectionHeading';
import FAQAccordion from '../../components/ui/FAQAccordion';
import CTABanner from '../../components/ui/CTABanner';

const reasons = [
  { icon: Zap, title: 'Faster onboarding', description: 'Get live in days, not months. Our guided setup imports residents and flats in minutes.' },
  { icon: ShieldCheck, title: 'Better security', description: 'Bank-grade encryption, role-based access, and audit logs keep your data safe.' },
  { icon: Users, title: 'Loved by residents', description: 'A beautiful mobile app residents actually enjoy using to pay, book, and complain.' },
];

const comparison = [
  { feature: 'Setup time', airanexus: '2–3 days', mygate: '2–4 weeks' },
  { feature: 'Resident app', airanexus: true, mygate: true },
  { feature: 'Transparent pricing', airanexus: true, mygate: false },
  { feature: 'No long-term lock-in', airanexus: true, mygate: false },
  { feature: 'Custom integrations', airanexus: true, mygate: false },
  { feature: 'Analytics dashboards', airanexus: true, mygate: 'Limited' },
  { feature: 'Tally export', airanexus: true, mygate: false },
  { feature: 'Dedicated account manager', airanexus: 'Enterprise', mygate: 'Add-on' },
];

const testimonials = [
  {
    quote: 'We switched from MyGate to AiraNexus and never looked back. Onboarding took 3 days instead of 3 weeks, and our residents love the new app.',
    name: 'Rajesh Kumar',
    role: 'Facility Manager, Palm Grove Apartments',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
  {
    quote: 'The transparent pricing was a breath of fresh air. No hidden fees, no long lock-in. And the analytics dashboards are far superior.',
    name: 'Anita Desai',
    role: 'Treasurer, Lakeview Heights',
    avatar: 'https://images.pexels.com/photos/7640/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2',
  },
];

const faqs = [
  { question: 'How is AiraNexus different from MyGate?', answer: 'AiraNexus offers faster onboarding (days, not weeks), transparent pricing with no lock-in, superior analytics dashboards, Tally export, and a resident app that residents actually love using.' },
  { question: 'Can I migrate from MyGate to AiraNexus?', answer: 'Yes. Our team handles the entire migration — importing residents, flats, dues, and historical data — at no cost on Growth and Enterprise plans.' },
  { question: 'Is AiraNexus cheaper than MyGate?', answer: 'Pricing is transparent and starts at ₹2,999/month. There are no hidden fees or long-term lock-ins. Contact us for a like-for-like quote.' },
  { question: 'How long does migration take?', answer: 'Most migrations complete within 2–3 days. Our team works with your committee to ensure a smooth transition with zero downtime.' },
  { question: 'Do you offer a free trial?', answer: 'Yes, every plan starts with a 14-day free trial. No credit card required.' },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-primary-600" aria-label="Yes" />
    ) : (
      <X className="mx-auto h-5 w-5 text-red-400" aria-label="No" />
    );
  }
  return <span className="text-sm font-medium text-charcoal-800">{value}</span>;
}

export default function MyGateAlternativePage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  return (
    <>
      <SEO
        title="MyGate Alternative — Why societies switch to AiraNexus"
        description="Looking for a MyGate alternative? AiraNexus offers faster onboarding, transparent pricing, better analytics, and a resident app people love. Migrate in days."
        canonical="https://airanexus.com/mygate-alternative"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'AiraNexus — MyGate Alternative',
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
              <ShieldCheck className="h-3 w-3" aria-hidden="true" />
              MyGate Alternative
            </span>
            <h1 className="mt-6 text-display-lg font-display font-extrabold tracking-tight text-charcoal-900 text-balance">
              The better <span className="text-gradient">MyGate alternative</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Faster onboarding, transparent pricing, and a resident app people actually love.
              See why societies across India are switching from MyGate to AiraNexus.
            </p>
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Why switch"
            title="Three reasons to switch"
            description="The differences that matter to your committee and your residents."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover"
              >
                <div className="icon-circle-lg group-hover:scale-110">
                  <r.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-charcoal-900">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            badge="Compare"
            badgeVariant="cyan"
            title="AiraNexus vs MyGate"
            description="A feature-by-feature comparison showing why societies switch."
          />
          <div className="mt-12 overflow-x-auto">
            <table className="mx-auto min-w-[640px] max-w-3xl overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
              <thead>
                <tr className="border-b border-charcoal-100 bg-charcoal-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-charcoal-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary-700">AiraNexus</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-charcoal-500">MyGate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-100">
                {comparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 text-left text-sm text-charcoal-800">{row.feature}</td>
                    <td className="px-6 py-4 text-center"><Cell value={row.airanexus} /></td>
                    <td className="px-6 py-4 text-center"><Cell value={row.mygate} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            badge="Testimonials"
            badgeVariant="lime"
            title="Societies that switched"
            description="Hear from committees who migrated from MyGate to AiraNexus."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
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

      {/* FAQ */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading badge="FAQ" title="Migration questions" />
          <div className="mt-12">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to switch from MyGate?"
        description="Migrate to AiraNexus in days with our white-glove migration service."
        primaryLabel="Book a demo"
        primaryTo="/request-demo"
        secondaryLabel="Compare pricing"
        secondaryTo="/pricing"
      />
    </>
  );
}
