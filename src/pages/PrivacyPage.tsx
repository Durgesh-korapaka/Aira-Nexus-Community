import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/ui/CTABanner';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Information' },
  { id: 'data-sharing', title: '4. Data Sharing & Disclosure' },
  { id: 'data-security', title: '5. Data Security' },
  { id: 'data-retention', title: '6. Data Retention' },
  { id: 'your-rights', title: '7. Your Rights' },
  { id: 'contact-us', title: '8. Contact Us' },
];

export default function PrivacyPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  const [activeId, setActiveId] = useState('introduction');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Privacy Policy — AiraNexus"
        description="Learn how AiraNexus collects, uses, and protects your personal and community data."
        canonical="https://airanexus.com/privacy"
      />

      {/* Hero */}
      <section className="bg-hero-gradient pb-16 pt-32 sm:pt-36">
        <div className="container-custom text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-50 text-primary-600">
            <Shield className="h-8 w-8" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-display-md font-display font-extrabold tracking-tight text-charcoal-900">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-charcoal-600">
            Last updated: January 2025. Your privacy matters to us. This policy explains how we
            collect, use, and protect your data.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* TOC */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <p className="text-2xs font-semibold uppercase tracking-wide text-charcoal-500">On this page</p>
                <nav className="mt-3 space-y-1" aria-label="Table of contents">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors ${
                        activeId === s.id
                          ? 'bg-primary-50 font-medium text-primary-700'
                          : 'text-charcoal-600 hover:bg-charcoal-50'
                      }`}
                    >
                      <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-9">
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="prose prose-charcoal max-w-none"
              >
                <section id="introduction" className="scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">1. Introduction</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    AiraNexus Technologies Pvt. Ltd. (&ldquo;AiraNexus,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the AiraNexus platform, a society and apartment management software. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you use our website and services.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    By accessing or using our services, you consent to the practices described in this policy.
                  </p>
                </section>

                <section id="information-we-collect" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">2. Information We Collect</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">We collect the following types of information:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-charcoal-700">
                    <li><strong>Account information:</strong> Name, email, phone number, and society details provided during signup.</li>
                    <li><strong>Resident data:</strong> Flat numbers, ownership status, and contact details uploaded by committee members.</li>
                    <li><strong>Transaction data:</strong> Maintenance payments, invoices, and billing history.</li>
                    <li><strong>Usage data:</strong> IP address, device type, and interaction logs for security and analytics.</li>
                  </ul>
                </section>

                <section id="how-we-use" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">3. How We Use Your Information</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-charcoal-700">
                    <li>To provide and maintain the AiraNexus platform.</li>
                    <li>To process maintenance payments and generate invoices.</li>
                    <li>To send billing reminders, community notices, and support communications.</li>
                    <li>To improve our services through analytics and feedback.</li>
                    <li>To comply with legal obligations and prevent fraud.</li>
                  </ul>
                </section>

                <section id="data-sharing" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">4. Data Sharing & Disclosure</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    We do not sell your personal data. We may share information with:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-charcoal-700">
                    <li>Payment processors (e.g., Razorpay) to facilitate transactions.</li>
                    <li>Cloud infrastructure providers to host and secure data.</li>
                    <li>Government authorities when legally required.</li>
                  </ul>
                </section>

                <section id="data-security" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">5. Data Security</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    We implement bank-grade AES-256 encryption, role-based access control, regular security audits, and daily backups. Access to personal data is restricted to authorized personnel only.
                  </p>
                </section>

                <section id="data-retention" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">6. Data Retention</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    We retain your data for as long as your account is active or as needed to provide services. After account closure, we retain financial records for 7 years as required by Indian tax law, then permanently delete personal data.
                  </p>
                </section>

                <section id="your-rights" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">7. Your Rights</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">Under applicable data protection laws, you have the right to:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-charcoal-700">
                    <li>Access and receive a copy of your personal data.</li>
                    <li>Correct inaccurate or incomplete data.</li>
                    <li>Request deletion of your data (subject to legal obligations).</li>
                    <li>Withdraw consent for data processing at any time.</li>
                  </ul>
                </section>

                <section id="contact-us" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">8. Contact Us</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    If you have questions about this Privacy Policy, contact us at{' '}
                    <a href="mailto:privacy@airanexus.com" className="text-primary-600 hover:text-primary-700">privacy@airanexus.com</a>{' '}
                    or write to AiraNexus Technologies Pvt. Ltd., Indiranagar, Bengaluru, Karnataka 560038.
                  </p>
                </section>

                <div className="mt-12">
                  <Link to="/terms" className="btn-link">
                    Read our Terms of Service
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
