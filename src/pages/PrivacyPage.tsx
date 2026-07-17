import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import SEO from '../components/SEO'
import CTABanner from '../components/ui/CTABanner'

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Information' },
  { id: 'data-sharing', title: '4. Data Sharing & Disclosure' },
  { id: 'data-security', title: '5. Data Security' },
  { id: 'data-retention', title: '6. Data Retention' },
  { id: 'your-rights', title: '7. Your Rights' },
  { id: 'contact', title: '8. Contact Us' },
]

const content: Record<string, { heading: string; body: string[] }> = {
  introduction: {
    heading: '1. Introduction',
    body: [
      'Aira Nexus Technologies Pvt. Ltd. ("Aira Nexus", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our community management platform.',
      'This policy applies to all users of Aira Nexus, including residents, committee members, community managers, and vendors. By using our services, you agree to the practices described in this policy.',
    ],
  },
  'information-we-collect': {
    heading: '2. Information We Collect',
    body: [
      'Account information: Name, email address, phone number, and role within your community (resident, owner, tenant, committee member, or manager).',
      'Community data: Apartment/unit number, building and tower details, vehicle information, and family member details you choose to add.',
      'Transaction data: Payment history, billing records, invoice details, and receipt information related to maintenance dues and other community charges.',
      'Usage data: Device information, IP address, browser type, app interactions, and logs that help us maintain and improve service quality.',
      'Communication data: Messages, complaints, notices, and support requests you submit through the platform.',
    ],
  },
  'how-we-use': {
    heading: '3. How We Use Your Information',
    body: [
      'Service delivery: To provide core features like billing, complaint tracking, visitor management, and communication tools.',
      'Notifications: To send payment reminders, complaint updates, community notices, and important service announcements.',
      'Support: To respond to your support requests, troubleshoot issues, and provide technical assistance.',
      'Improvement: To analyze usage patterns, identify areas for improvement, and develop new features that serve our communities better.',
      'Compliance: To meet legal obligations, prevent fraud, and maintain accurate records as required by applicable laws.',
    ],
  },
  'data-sharing': {
    heading: '4. Data Sharing & Disclosure',
    body: [
      'Within your community: Certain information (such as your name, unit number, and contact details) is visible to authorized community managers and committee members to facilitate community operations.',
      'Service providers: We share data with trusted third-party processors (such as payment gateways, SMS/email providers, and cloud infrastructure) strictly to operate our services. These providers are bound by confidentiality and data protection agreements.',
      'Legal compliance: We may disclose information when required by law, court order, or government authority, or to protect the rights, property, or safety of Aira Nexus, our users, or others.',
      'Business transfers: In the event of a merger, acquisition, or asset sale, user data may be transferred as part of the transaction, subject to the protections in this policy.',
    ],
  },
  'data-security': {
    heading: '5. Data Security',
    body: [
      'We implement industry-standard security measures to protect your data, including TLS 1.3 encryption in transit, AES-256 encryption at rest, and SOC2-aligned access controls.',
      'Access to personal data is restricted to authorized personnel who require it to perform their duties. All access is logged and regularly audited.',
      'We conduct periodic security assessments and penetration testing to identify and address vulnerabilities.',
      'While we strive to protect your data, no method of transmission or storage is 100% secure. We cannot guarantee absolute security but commit to taking all reasonable measures.',
    ],
  },
  'data-retention': {
    heading: '6. Data Retention',
    body: [
      'We retain your data for as long as your account is active and for a reasonable period thereafter to comply with legal obligations, resolve disputes, and enforce our agreements.',
      'Financial records are retained for the period required by Indian tax and corporate law (typically 7 years).',
      'You may request deletion of your account and personal data at any time, subject to our legal retention obligations. Upon request, we will anonymize or delete your data within 30 days.',
    ],
  },
  'your-rights': {
    heading: '7. Your Rights',
    body: [
      'Access: You can request a copy of the personal data we hold about you at any time.',
      'Correction: You can update your information directly in the app or request corrections to inaccurate data.',
      'Deletion: You can request deletion of your account and associated personal data, subject to legal retention requirements.',
      'Portability: You can request an export of your data in a machine-readable format.',
      'Withdrawal: You can withdraw consent for non-essential data processing at any time, though this may affect certain features.',
    ],
  },
  contact: {
    heading: '8. Contact Us',
    body: [
      'If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:',
      'Email: privacy@airanexus.com',
      'Phone: +91 80 0000 0000',
      'Address: Prestige Tech Park, Kadubeesanahalli, Bengaluru, Karnataka 560103, India',
      'We aim to respond to all privacy-related requests within 30 days of receipt.',
    ],
  },
}

export default function PrivacyPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
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
        title="Privacy Policy"
        description="Learn how Aira Nexus collects, uses, and protects your personal data. Our commitment to your privacy and data security."
        path="/privacy"
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
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-charcoal-600">
              Last updated: January 1, 2025. Your privacy matters to us. Here's exactly how we handle your data.
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
        title="Questions about your data?"
        description="Our team is here to help with any privacy or data-related questions you may have."
        primaryLabel="Contact Us"
        primaryTo="/contact"
        secondaryLabel="View Terms"
        secondaryTo="/terms"
      />
    </>
  )
}
