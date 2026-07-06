import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SEO from '../components/SEO';

interface TermsPageProps {
  darkMode: boolean;
}

export default function TermsPage({ darkMode: _darkMode }: TermsPageProps) {
  return (
    <div>
      <SEO title="Terms of Service — AiraNexus" description="Read the AiraNexus terms of service for using our community management platform." path="/terms" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-neutral-50 overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[350px] h-[350px] bg-cyan-500 -bottom-20 -left-20 animate-float-delayed" />
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="icon-circle-lg mx-auto mb-6"
          >
            <FileText className="w-8 h-8 text-primary-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6"
          >
            Terms & Conditions
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
                  These terms and conditions govern your use of the Aira Nexus platform and services. By accessing or using the platform, you agree to be bound by these terms. If you disagree with any part of these terms, you may not access the platform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">2. Definitions</h2>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  In these Terms, the following words have the following meanings:
                </p>
                <ul className="space-y-2 text-neutral-500">
                  <li><strong className="text-charcoal-900">"Platform"</strong> means the Aira Nexus web application, mobile applications, and associated services</li>
                  <li><strong className="text-charcoal-900">"Community"</strong> means an apartment complex, gated community, or residential association using our services</li>
                  <li><strong className="text-charcoal-900">"Admin"</strong> means a designated committee member or manager with administrative access</li>
                  <li><strong className="text-charcoal-900">"Resident"</strong> means an individual residing in a unit within a community</li>
                  <li><strong className="text-charcoal-900">"Service"</strong> means any service provided by Aira Nexus under these Terms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">3. Account Registration</h2>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  To use our services, your community must register for an account. You agree to:
                </p>
                <ul className="space-y-2 text-neutral-500 list-disc list-inside">
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Promptly update your account information if it changes</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">4. Service Description</h2>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  Aira Nexus provides community management software including but not limited to:
                </p>
                <ul className="space-y-2 text-neutral-500 list-disc list-inside">
                  <li>Maintenance billing and payment processing</li>
                  <li>Complaint management and tracking</li>
                  <li>Resident directory management</li>
                  <li>Visitor management and gate pass system</li>
                  <li>Notice board and communication tools</li>
                  <li>Reports and analytics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">5. Payment Terms</h2>
                <p className="text-neutral-500 leading-relaxed">
                  Subscription fees are payable in advance. All payments are non-refundable except as expressly stated in these terms. Payment processing for resident maintenance is facilitated through integrated payment gateways. Aira Nexus is not responsible for delays or errors caused by payment service providers.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">6. User Responsibilities</h2>
                <p className="text-neutral-500 leading-relaxed mb-3">
                  You agree to use our platform only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="space-y-2 text-neutral-500 list-disc list-inside">
                  <li>Use the platform in any way that violates applicable laws</li>
                  <li>Attempt to gain unauthorized access to the platform or its systems</li>
                  <li>Upload malicious code or harmful content</li>
                  <li>Use the platform to harass, abuse, or harm other users</li>
                  <li>Sell, lease, or transfer your account without our consent</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">7. Intellectual Property</h2>
                <p className="text-neutral-500 leading-relaxed">
                  The platform and its original content, features, and functionality are owned by Aira Nexus and are protected by applicable intellectual property laws. Our trademarks and trade dress may not be used without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">8. Data & Privacy</h2>
                <p className="text-neutral-500 leading-relaxed">
                  Your use of the platform is also governed by our Privacy Policy. By using the platform, you consent to the collection and use of your data as described in the Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">9. Limitation of Liability</h2>
                <p className="text-neutral-500 leading-relaxed">
                  To the maximum extent permitted by law, Aira Nexus shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the platform. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">10. Termination</h2>
                <p className="text-neutral-500 leading-relaxed">
                  We may terminate or suspend your access to the platform immediately, without prior notice, if you breach these Terms. Upon termination, your right to use the platform will immediately cease. Provisions that by their nature should survive termination shall continue in effect.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">11. Governing Law</h2>
                <p className="text-neutral-500 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">12. Changes to Terms</h2>
                <p className="text-neutral-500 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will provide notice of significant changes through the platform or via email. Your continued use of the platform after such modifications constitutes your acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-charcoal-900 mb-3">13. Contact</h2>
                <p className="text-neutral-500 leading-relaxed">
                  For any questions about these Terms, please contact us at:
                </p>
                <p className="text-neutral-500 leading-relaxed mt-2">
                  <strong className="text-charcoal-900">Email:</strong> legal@airanexus.com<br />
                  <strong className="text-charcoal-900">Address:</strong> Bangalore, Karnataka, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
