import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import SEO from '../components/SEO'
import CTABanner from '../components/ui/CTABanner'

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'accounts', title: '3. Accounts & Registration' },
  { id: 'license', title: '4. License to Use' },
  { id: 'acceptable-use', title: '5. Acceptable Use' },
  { id: 'billing-terms', title: '6. Billing & Payments' },
  { id: 'subscriptions', title: '7. Subscriptions & Cancellation' },
  { id: 'refunds', title: '8. Refund Policy' },
  { id: 'intellectual-property', title: '9. Intellectual Property' },
  { id: 'user-content', title: '10. User Content' },
  { id: 'disclaimer', title: '11. Disclaimer' },
  { id: 'liability', title: '12. Limitation of Liability' },
  { id: 'governing-law', title: '13. Governing Law' },
]

const content: Record<string, { heading: string; body: string[] }> = {
  acceptance: {
    heading: '1. Acceptance of Terms',
    body: [
      'These Terms of Service ("Terms") govern your use of the Aira Nexus platform, website, and mobile applications (collectively, the "Service"). The Service is operated by Aira Nexus Technologies Pvt. Ltd. ("Aira Nexus", "we", "us", or "our").',
      'By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree, you may not access or use the Service. If you are using the Service on behalf of a community or organization, you represent that you have authority to bind that entity.',
    ],
  },
  definitions: {
    heading: '2. Definitions',
    body: [
      '"Community" refers to the apartment complex, gated community, or residential society that uses the Service.',
      '"Community Manager" refers to the individual(s) authorized by the Community to administer the Service on its behalf.',
      '"Resident" refers to an owner, tenant, or family member residing in a unit within the Community.',
      '"User" refers to any individual who accesses the Service, including Residents, Community Managers, committee members, and vendors.',
    ],
  },
  accounts: {
    heading: '3. Accounts & Registration',
    body: [
      'To use most features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update it as needed.',
      'You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use.',
      'We reserve the right to suspend or terminate accounts that provide false information, violate these Terms, or engage in fraudulent activity.',
    ],
  },
  license: {
    heading: '4. License to Use',
    body: [
      'Subject to your compliance with these Terms and active subscription, we grant you a limited, non-exclusive, non-transferable license to access and use the Service for the purpose of managing your community.',
      'This license does not include any right to resell, sublicense, modify, distribute, or create derivative works based on the Service. All rights not expressly granted are reserved by Aira Nexus.',
    ],
  },
  'acceptable-use': {
    heading: '5. Acceptable Use',
    body: [
      'You agree not to: (a) use the Service for any unlawful purpose; (b) harass, abuse, or harm other users; (c) upload content that is illegal, defamatory, or infringes on others\' rights; (d) attempt to gain unauthorized access to any part of the Service; (e) interfere with the proper functioning of the Service; or (f) reverse engineer, decompile, or disassemble any part of the Service.',
      'Violations may result in immediate account suspension or termination, and we may report illegal activities to law enforcement authorities.',
    ],
  },
  'billing-terms': {
    heading: '6. Billing & Payments',
    body: [
      'Subscription fees are billed in advance on a monthly or annual basis, depending on your selected plan. All fees are exclusive of applicable taxes, which are added at checkout.',
      'Payment is due at the start of each billing cycle. Failed payments may result in temporary suspension of Service until payment is received.',
      'We may change our fees upon reasonable notice. Any fee changes will take effect at the start of your next billing cycle following the notice.',
    ],
  },
  subscriptions: {
    heading: '7. Subscriptions & Cancellation',
    body: [
      'You can cancel your subscription at any time from your dashboard or by contacting support. Cancellation takes effect at the end of the current billing cycle.',
      'Annual subscriptions cancelled mid-term will remain active until the end of the annual period. No prorated refunds are provided for partial annual periods unless required by law.',
      'Downgrades between plans take effect at the start of the next billing cycle. Upgrades take effect immediately with a prorated charge for the remainder of the current cycle.',
    ],
  },
  refunds: {
    heading: '8. Refund Policy',
    body: [
      'We offer a 14-day free trial with no charge. If you are not satisfied with the Service after becoming a paying subscriber, you may request a full refund within 14 days of your first paid billing cycle.',
      'Refund requests must be submitted to billing@airanexus.com. Approved refunds are processed within 7–10 business days to the original payment method.',
      'Refunds are not available for partial billing cycles beyond the initial 14-day window, except where required by applicable law.',
    ],
  },
  'intellectual-property': {
    heading: '9. Intellectual Property',
    body: [
      'The Service, including its software, design, branding, and content, is owned by Aira Nexus and protected by Indian and international intellectual property laws.',
      'These Terms do not grant you any rights to our trademarks, logos, or other brand elements. All feedback, suggestions, or ideas you provide may be used by us without any obligation or compensation.',
    ],
  },
  'user-content': {
    heading: '10. User Content',
    body: [
      'You retain ownership of content you upload to the Service (such as notices, complaints, and documents). You grant us a license to host, store, and display that content as needed to operate the Service.',
      'You are solely responsible for your content and represent that you have all necessary rights to upload it. We reserve the right to remove content that violates these Terms or applicable law.',
    ],
  },
  disclaimer: {
    heading: '11. Disclaimer',
    body: [
      'The Service is provided "as is" and "as available" without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.',
      'We do not warrant that the Service will be uninterrupted, error-free, or secure, or that any defects will be corrected. You use the Service at your own risk.',
    ],
  },
  liability: {
    heading: '12. Limitation of Liability',
    body: [
      'To the maximum extent permitted by law, Aira Nexus shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from your use of the Service.',
      'Our total aggregate liability for any claim arising from the Service shall not exceed the amount you paid us in the 12 months preceding the claim.',
    ],
  },
  'governing-law': {
    heading: '13. Governing Law',
    body: [
      'These Terms are governed by the laws of India. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.',
      'If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.',
      'We may update these Terms from time to time. We will notify users of material changes via email or in-app notification at least 30 days before they take effect.',
    ],
  },
}

export default function TermsPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  const [activeId, setActiveId] = useState(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SEO
        title="Terms of Service"
        description="The terms and conditions governing your use of the Aira Nexus platform and services."
        path="/terms"
      />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom pb-12 text-center lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-charcoal-600">
              Last updated: January 1, 2025. The rules of the road for using Aira Nexus.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24" aria-label="Table of contents">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                  Contents
                </h2>
                <ul className="mt-4 space-y-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          activeId === s.id
                            ? 'bg-primary-50 font-semibold text-primary-700'
                            : 'text-charcoal-600 hover:bg-charcoal-50'
                        }`}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Content */}
            <div className="card max-w-3xl space-y-10">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-xl font-bold text-charcoal-900">{content[s.id].heading}</h2>
                  <div className="mt-4 space-y-3">
                    {content[s.id].body.map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed text-charcoal-600">{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have questions about our terms?"
        description="Our team is happy to clarify any part of these terms. Don't hesitate to reach out."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="View Privacy"
        secondaryTo="/privacy"
      />
    </>
  )
}
