import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import CTABanner from '../components/ui/CTABanner';

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'accounts', title: '3. Account Registration' },
  { id: 'license', title: '4. License to Use' },
  { id: 'acceptable-use', title: '5. Acceptable Use' },
  { id: 'payments', title: '6. Payments & Billing' },
  { id: 'fees', title: '7. Fees & Taxes' },
  { id: 'refunds', title: '8. Refund Policy' },
  { id: 'ip', title: '9. Intellectual Property' },
  { id: 'disclaimer', title: '10. Disclaimer of Warranties' },
  { id: 'liability', title: '11. Limitation of Liability' },
  { id: 'termination', title: '12. Termination' },
  { id: 'governing-law', title: '13. Governing Law' },
];

export default function TermsPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  const [activeId, setActiveId] = useState('acceptance');

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
        title="Terms of Service — AiraNexus"
        description="The terms and conditions that govern your use of the AiraNexus platform."
        canonical="https://airanexus.com/terms"
      />

      <section className="bg-hero-gradient pb-16 pt-32 sm:pt-36">
        <div className="container-custom text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-primary-50 text-primary-600">
            <FileText className="h-8 w-8" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-display-md font-display font-extrabold tracking-tight text-charcoal-900">
            Terms of Service
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-charcoal-600">
            Last updated: January 2025. These terms govern your use of the AiraNexus platform.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-24">
                <p className="text-2xs font-semibold uppercase tracking-wide text-charcoal-500">On this page</p>
                <nav className="mt-3 max-h-[60vh] space-y-1 overflow-y-auto" aria-label="Table of contents">
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

            <div className="lg:col-span-9">
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <section id="acceptance" className="scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">1. Acceptance of Terms</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    By accessing or using the AiraNexus platform, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, you may not use our services.
                  </p>
                </section>

                <section id="definitions" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">2. Definitions</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-charcoal-700">
                    <li><strong>&ldquo;Platform&rdquo;</strong> refers to the AiraNexus web and mobile applications.</li>
                    <li><strong>&ldquo;User&rdquo;</strong> refers to any individual or entity using the Platform.</li>
                    <li><strong>&ldquo;Community&rdquo;</strong> refers to a residential society or apartment complex registered on the Platform.</li>
                  </ul>
                </section>

                <section id="accounts" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">3. Account Registration</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    You must provide accurate information when creating an account. You are responsible for safeguarding your password and for all activity under your account.
                  </p>
                </section>

                <section id="license" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">4. License to Use</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    We grant you a limited, non-exclusive, non-transferable license to use the Platform for the duration of your subscription, subject to these Terms.
                  </p>
                </section>

                <section id="acceptable-use" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">5. Acceptable Use</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">You agree not to:</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-charcoal-700">
                    <li>Use the Platform for any unlawful purpose.</li>
                    <li>Upload content that infringes on third-party rights.</li>
                    <li>Attempt to disrupt or compromise the Platform&apos;s security.</li>
                    <li>Resell or sublicense access without our written consent.</li>
                  </ul>
                </section>

                <section id="payments" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">6. Payments & Billing</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    Subscription fees are billed in advance on a monthly or annual basis. Payments are processed through third-party payment gateways. You authorize us to charge your chosen payment method for all fees.
                  </p>
                </section>

                <section id="fees" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">7. Fees & Taxes</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    All fees are exclusive of applicable taxes (including GST), which will be added to your invoice. We may change fees with at least 30 days&apos; notice.
                  </p>
                </section>

                <section id="refunds" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">8. Refund Policy</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    Annual plans are eligible for a pro-rated refund within the first 30 days. Monthly plans are non-refundable. Refund requests can be sent to billing@airanexus.com.
                  </p>
                </section>

                <section id="ip" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">9. Intellectual Property</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    The Platform, including its design, code, and branding, is the intellectual property of AiraNexus Technologies Pvt. Ltd. and is protected by Indian and international laws.
                  </p>
                </section>

                <section id="disclaimer" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">10. Disclaimer of Warranties</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    The Platform is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee uninterrupted or error-free service.
                  </p>
                </section>

                <section id="liability" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">11. Limitation of Liability</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    To the maximum extent permitted by law, AiraNexus shall not be liable for indirect, incidental, or consequential damages, or for any loss of data or profits arising from your use of the Platform.
                  </p>
                </section>

                <section id="termination" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">12. Termination</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    Either party may terminate this agreement at any time. Upon termination, your access to the Platform will cease, and your data will be retained per our Privacy Policy.
                  </p>
                </section>

                <section id="governing-law" className="mt-10 scroll-mt-24">
                  <h2 className="font-display text-xl font-bold text-charcoal-900">13. Governing Law</h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                    These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
                  </p>
                </section>

                <div className="mt-12">
                  <Link to="/privacy" className="btn-link">
                    Read our Privacy Policy
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
