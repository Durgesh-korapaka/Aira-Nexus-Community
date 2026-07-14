import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEO from '../components/SEO';

interface PrivacyPageProps {
  darkMode: boolean;
}

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'data-collection', title: '2. Data We Collect' },
  { id: 'data-use', title: '3. How We Use Your Data' },
  { id: 'data-security', title: '4. Data Security' },
  { id: 'data-retention', title: '5. Data Retention' },
  { id: 'legal-rights', title: '6. Your Legal Rights' },
  { id: 'contact', title: '7. Contact Us' },
  { id: 'changes', title: '8. Changes to This Policy' },
];

export default function PrivacyPage({ darkMode: _darkMode }: PrivacyPageProps) {
  return (
    <div>
      <SEO
        title="Privacy Policy — AiraNexus"
        description="Read the AiraNexus privacy policy. We respect your privacy and are committed to protecting your personal data."
        path="/privacy"
      />

      <section className="relative pt-32 pb-16 bg-greenish-50 overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-400 -top-20 -right-20 animate-float" />
        <div className="blob w-[350px] h-[350px] bg-lime-400 -bottom-20 -left-20 animate-float-slow" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="icon-circle-lg mx-auto mb-6"
          >
            <Shield className="w-8 h-8 text-white" aria-hidden="true" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-charcoal-900"
          >
            Privacy Policy
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
                    Welcome to Aira Nexus. We respect your privacy and are committed to protecting
                    your personal data. This privacy policy will inform you about how we look after
                    your personal data when you visit our website or use our services, and tell you
                    about your privacy rights and how the law protects you.
                  </p>
                </section>

                <section id="data-collection">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">2. Data We Collect</h2>
                  <p className="text-charcoal-500 leading-relaxed mb-4">
                    We may collect, use, store and transfer different kinds of personal data about
                    you which we have grouped together as follows:
                  </p>
                  <ul className="space-y-2.5 text-charcoal-500">
                    <li><strong className="text-charcoal-900">Identity Data:</strong> includes first name, last name, username or similar identifier</li>
                    <li><strong className="text-charcoal-900">Contact Data:</strong> includes email address, telephone numbers, physical address</li>
                    <li><strong className="text-charcoal-900">Financial Data:</strong> includes payment card details, bank account information for payment processing</li>
                    <li><strong className="text-charcoal-900">Community Data:</strong> includes apartment/unit details, resident information, visitor logs</li>
                    <li><strong className="text-charcoal-900">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, device information</li>
                    <li><strong className="text-charcoal-900">Usage Data:</strong> includes information about how you use our website and services</li>
                  </ul>
                </section>

                <section id="data-use">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">3. How We Use Your Data</h2>
                  <p className="text-charcoal-500 leading-relaxed mb-4">
                    We will only use your personal data when the law allows us to. Most commonly, we
                    will use your personal data in the following circumstances:
                  </p>
                  <ul className="space-y-2 text-charcoal-500 list-disc list-insight">
                    <li>To provide our community management services to you</li>
                    <li>To process your payments and maintain your account</li>
                    <li>To send you communications about our services, updates, and notices</li>
                    <li>To improve our services through analytics and user feedback</li>
                    <li>To comply with legal obligations and protect our legal rights</li>
                  </ul>
                </section>

                <section id="data-security">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">4. Data Security</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    We have put in place appropriate security measures to prevent your personal data
                    from being accidentally lost, used or accessed in an unauthorized way, altered or
                    disclosed. In addition, we limit access to your personal data to those employees,
                    agents, contractors and other third parties who have a business need to know.
                  </p>
                </section>

                <section id="data-retention">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">5. Data Retention</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    We will only retain your personal data for as long as reasonably necessary to
                    fulfill the purposes we collected it for. For account data, we typically retain
                    information for 90 days after account closure before deletion. Financial records
                    are retained for 7 years as required by law.
                  </p>
                </section>

                <section id="legal-rights">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">6. Your Legal Rights</h2>
                  <p className="text-charcoal-500 leading-relaxed mb-4">
                    Under certain circumstances, you have rights under data protection laws in
                    relation to your personal data, including the right to:
                  </p>
                  <ul className="space-y-2 text-charcoal-500 list-disc list-insight">
                    <li>Request access to your personal data</li>
                    <li>Request correction of your personal data</li>
                    <li>Request erasure of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing your personal data</li>
                    <li>Request transfer of your personal data</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                </section>

                <section id="contact">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">7. Contact Us</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    If you have any questions about this privacy policy or our privacy practices,
                    please contact us at:
                  </p>
                  <p className="text-charcoal-500 leading-relaxed mt-3">
                    <strong className="text-charcoal-900">Email:</strong> privacy@airanexus.com<br />
                    <strong className="text-charcoal-900">Address:</strong> Bangalore, Karnataka, India
                  </p>
                </section>

                <section id="changes">
                  <h2 className="text-xl font-bold mb-3 text-charcoal-900">8. Changes to This Policy</h2>
                  <p className="text-charcoal-500 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any
                    changes by posting the new privacy policy on this page and updating the "Last
                    updated" date. You are advised to review this privacy policy periodically for any
                    changes.
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
