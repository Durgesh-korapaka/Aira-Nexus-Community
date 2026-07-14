import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SEO from '../components/SEO';

interface TermsPageProps {
  darkMode: boolean;
}

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'account', title: '3. Account Registration' },
  { id: 'services', title: '4. Service Description' },
  { id: 'payment', title: '5. Payment Terms' },
  { id: 'responsibilities', title: '6. User Responsibilities' },
  { id: 'ip', title: '7. Intellectual Property' },
  { id: 'privacy', title: '8. Data & Privacy' },
  { id: 'liability', title: '9. Limitation of Liability' },
  { id: 'termination', title: '10. Termination' },
  { id: 'governing-law', title: '11. Governing Law' },
  { id: 'changes', title: '12. Changes to Terms' },
  { id: 'contact', title: '13. Contact' },
];

export default function TermsPage({ darkMode: _darkMode }: TermsPageProps) {
  return (
    <div>
      <SEO
        title="Terms of Service — AiraNexus"
        description="Read the AiraNexus terms of service for using our community management platform."
        path="/terms"
      />

      <section className="relative pt-32 pb-16 bg-greenish-50 overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-400 -top-20 -right-20 animate-float" />
        <div className="blob w-[350px] h-[350px] bg-cyan-400 -bottom-20 -left-20 animate-float-slow" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="icon-circle-lg mx-auto mb-6"
          >
            <FileText className="w-8 h-8 text-white" aria-hidden="true" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal-900"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-charcoal-500"
          >
            Last updated: June 1, 2024
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 mb-4">
                  Contents
                </h2>
                <nav>
                  <ul className="space-y-2">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="block text-sm text-charcoal-500 hover:text-primary-600 transition-colors"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 max-w-3xl"
            >
              <div className="card p-8 md:p-12 space-y-8">
                <section id="introduction">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">1. Introduction</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    These terms and conditions govern your use of the Aira Nexus platform and
                    services. By accessing or using the platform, you agree to be bound by these
                    terms. If you disagree with any part of these terms, you may not access the
                    platform.
                  </p>
                </section>

                <section id="definitions">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">2. Definitions</h2>
                  <p className="text-charcoal-500 leading-relaxed mb-4">
                    In these Terms, the following words have the following meanings:
                  </p>
                  <ul className="space-y-2.5 text-charcoal-500">
                    <li><strong className="text-charcoal-900">"Platform"</strong> means the Aira Nexus web application, mobile applications, and associated services</li>
                    <li><strong className="text-charcoal-900">"Community"</strong> means an apartment complex, gated community, or residential association using our services</li>
                    <li><strong className="text-charcoal-900">"Admin"</strong> means a designated committee member or manager with administrative access</li>
                    <li><strong className="text-charcoal-900">"Resident"</strong> means an individual residing in a unit within a community</li>
                    <li><strong className="text-charcoal-900">"Service"</strong> means any service provided by Aira Nexus under these Terms</li>
                  </ul>
                </section>

                <section id="account">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">3. Account Registration</h2>
                  <p className="text-charcoal-500 leading-relaxed mb-4">
                    To use our services, your community must register for an account. You agree to:
                  </p>
                  <ul className="space-y-2 text-charcoal-500 list-disc list-insight">
                    <li>Provide accurate and complete information during registration</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Promptly update your account information if it changes</li>
                    <li>Accept responsibility for all activities under your account</li>
                  </ul>
                </section>

                <section id="services">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">4. Service Description</h2>
                  <p className="text-charcoal-500 leading-relaxed mb-4">
                    Aira Nexus provides community management software including but not limited to:
                  </p>
                  <ul className="space-y-2 text-charcoal-500 list-disc list-insight">
                    <li>Maintenance billing and payment processing</li>
                    <li>Complaint management and tracking</li>
                    <li>Resident directory management</li>
                    <li>Visitor management and gate pass system</li>
                    <li>Notice board and communication tools</li>
                    <li>Reports and analytics</li>
                  </ul>
                </section>

                <section id="payment">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">5. Payment Terms</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    Subscription fees are payable in advance. All payments are non-refundable except
                    as expressly stated in these terms. Payment processing for resident maintenance
                    is facilitated through integrated payment gateways. Aira Nexus is not responsible
                    for delays or errors caused by payment service providers.
                  </p>
                </section>

                <section id="responsibilities">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">6. User Responsibilities</h2>
                  <p className="text-charcoal-500 leading-relaxed mb-4">
                    You agree to use our platform only for lawful purposes and in accordance with
                    these Terms. You agree not to:
                  </p>
                  <ul className="space-y-2 text-charcoal-500 list-disc list-insight">
                    <li>Use the platform in any way that violates applicable laws</li>
                    <li>Attempt to gain unauthorized access to the platform or its systems</li>
                    <li>Upload malicious code or harmful content</li>
                    <li>Use the platform to harass, abuse, or harm other users</li>
                    <li>Sell, lease, or transfer your account without our consent</li>
                  </ul>
                </section>

                <section id="ip">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">7. Intellectual Property</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    The platform and its original content, features, and functionality are owned by
                    Aira Nexus and are protected by applicable intellectual property laws. Our
                    trademarks and trade dress may not be used without our prior written consent.
                  </p>
                </section>

                <section id="privacy">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">8. Data & Privacy</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    Your use of the platform is also governed by our Privacy Policy. By using the
                    platform, you consent to the collection and use of your data as described in the
                    Privacy Policy.
                  </p>
                </section>

                <section id="liability">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">9. Limitation of Liability</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    To the maximum extent permitted by law, Aira Nexus shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages resulting from
                    your use or inability to use the platform. Our total liability shall not exceed
                    the amount paid by you in the twelve months preceding the claim.
                  </p>
                </section>

                <section id="termination">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">10. Termination</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    We may terminate or suspend your access to the platform immediately, without
                    prior notice, if you breach these Terms. Upon termination, your right to use the
                    platform will immediately cease. Provisions that by their nature should survive
                    termination shall continue in effect.
                  </p>
                </section>

                <section id="governing-law">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">11. Governing Law</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of
                    India. Any disputes arising from these Terms shall be subject to the exclusive
                    jurisdiction of courts in Bangalore, Karnataka.
                  </p>
                </section>

                <section id="changes">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">12. Changes to Terms</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    We reserve the right to modify these terms at any time. We will provide notice of
                    significant changes through the platform or via email. Your continued use of the
                    platform after such modifications constitutes your acceptance of the new terms.
                  </p>
                </section>

                <section id="contact">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">13. Contact</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    For any questions about these Terms, please contact us at:
                  </p>
                  <p className="text-charcoal-500 leading-relaxed mt-3">
                    <strong className="text-charcoal-900">Email:</strong> legal@airanexus.com<br />
                    <strong className="text-charcoal-900">Address:</strong> Bangalore, Karnataka, India
                  </p>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
