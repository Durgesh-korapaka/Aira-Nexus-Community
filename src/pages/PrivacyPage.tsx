import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import SEO from '../components/SEO';

interface PrivacyPageProps {
  darkMode: boolean;
}

export default function PrivacyPage({ darkMode: _darkMode }: PrivacyPageProps) {
  return (
    <div>
      <SEO title="Privacy Policy — AiraNexus" description="Read the AiraNexus privacy policy. We respect your privacy and are committed to protecting your personal data." path="/privacy" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-greenish-50 overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[350px] h-[350px] bg-lime-500 -bottom-20 -left-20 animate-float-delayed" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="icon-circle-lg mx-auto mb-6"
          >
            <Shield className="w-8 h-8 text-primary-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Last updated: June 1, 2024
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto card p-8 md:p-12"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">1. Introduction</h2>
                <p className="text-neutral-500 leading-relaxed">
                  Welcome to Aira Nexus. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website or use our services, and tell you about your privacy rights and how the law protects you.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">2. Data We Collect</h2>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="space-y-2 text-neutral-500">
                  <li><strong className="text-charcoal-900">Identity Data:</strong> includes first name, last name, username or similar identifier</li>
                  <li><strong className="text-charcoal-900">Contact Data:</strong> includes email address, telephone numbers, physical address</li>
                  <li><strong className="text-charcoal-900">Financial Data:</strong> includes payment card details, bank account information for payment processing</li>
                  <li><strong className="text-charcoal-900">Community Data:</strong> includes apartment/unit details, resident information, visitor logs</li>
                  <li><strong className="text-charcoal-900">Technical Data:</strong> includes internet protocol (IP) address, browser type and version, device information</li>
                  <li><strong className="text-charcoal-900">Usage Data:</strong> includes information about how you use our website and services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">3. How We Use Your Data</h2>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="space-y-2 text-neutral-500 list-disc list-inside">
                  <li>To provide our community management services to you</li>
                  <li>To process your payments and maintain your account</li>
                  <li>To send you communications about our services, updates, and notices</li>
                  <li>To improve our services through analytics and user feedback</li>
                  <li>To comply with legal obligations and protect our legal rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">4. Data Security</h2>
                <p className="text-neutral-500 leading-relaxed">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">5. Data Retention</h2>
                <p className="text-neutral-500 leading-relaxed">
                  We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for. For account data, we typically retain information for 90 days after account closure before deletion. Financial records are retained for 7 years as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">6. Your Legal Rights</h2>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="space-y-2 text-neutral-500 list-disc list-inside">
                  <li>Request access to your personal data</li>
                  <li>Request correction of your personal data</li>
                  <li>Request erasure of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing your personal data</li>
                  <li>Request transfer of your personal data</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">7. Contact Us</h2>
                <p className="text-neutral-500 leading-relaxed">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p className="text-neutral-500 leading-relaxed mt-2">
                  <strong className="text-charcoal-900">Email:</strong> privacy@airanexus.com<br />
                  <strong className="text-charcoal-900">Address:</strong> Bangalore, Karnataka, India
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">8. Changes to This Policy</h2>
                <p className="text-neutral-500 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy policy periodically for any changes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
