import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import SEO from '../components/SEO'

const SECTIONS = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'information-we-collect', title: '2. Information We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Information' },
  { id: 'sharing', title: '4. Information Sharing' },
  { id: 'data-security', title: '5. Data Security' },
  { id: 'data-retention', title: '6. Data Retention' },
  { id: 'your-rights', title: '7. Your Rights' },
  { id: 'contact', title: '8. Contact Us' },
]

export default function PrivacyPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  const [active, setActive] = useState(SECTIONS[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How AiraNexus collects, uses, and protects your personal information."
        path="/privacy"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="icon-circle-lg mx-auto"><Shield className="h-6 w-6" aria-hidden="true" /></span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Privacy Policy
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-charcoal-600 text-pretty">
              Last updated: March 1, 2025. We take your privacy seriously. Here’s exactly what we
              collect and how we use it.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-28" aria-label="Table of contents">
              <p className="text-sm font-semibold text-charcoal-900">On this page</p>
              <ul className="mt-4 space-y-1">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        active === s.id
                          ? 'bg-primary-50 font-medium text-primary-700'
                          : 'text-charcoal-600 hover:text-charcoal-900'
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
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="card max-w-none"
          >
            <div className="prose-custom space-y-8">
              <section id="introduction">
                <h2 className="text-2xl font-bold text-charcoal-900">1. Introduction</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  AiraNexus Technologies Pvt. Ltd. ("AiraNexus", "we", "us") operates the AiraNexus
                  platform and related mobile applications. This Privacy Policy explains how we
                  collect, use, and protect personal information when you use our services.
                </p>
              </section>

              <section id="information-we-collect">
                <h2 className="text-2xl font-bold text-charcoal-900">2. Information We Collect</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  We collect information you provide directly — such as name, email, phone number,
                  and community details when you register or request a demo. We also collect usage
                  data (device, browser, pages visited) and transaction data for billing purposes.
                </p>
              </section>

              <section id="how-we-use">
                <h2 className="text-2xl font-bold text-charcoal-900">3. How We Use Your Information</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  We use your information to provide and improve our services, process payments,
                  send service-related communications, comply with legal obligations, and prevent
                  fraud or abuse. We never sell your personal data to third parties.
                </p>
              </section>

              <section id="sharing">
                <h2 className="text-2xl font-bold text-charcoal-900">4. Information Sharing</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  We share data only with service providers who help us operate (payment processors,
                  cloud hosting, email delivery) under strict confidentiality, and when required by
                  law. All providers are bound by data protection agreements.
                </p>
              </section>

              <section id="data-security">
                <h2 className="text-2xl font-bold text-charcoal-900">5. Data Security</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  We encrypt data in transit (TLS) and at rest, enforce role-based access controls,
                  and conduct regular security reviews. We are SOC 2-aligned and follow industry best
                  practices for safeguarding personal information.
                </p>
              </section>

              <section id="data-retention">
                <h2 className="text-2xl font-bold text-charcoal-900">6. Data Retention</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  We retain personal information for as long as your account is active or as needed to
                  provide services and comply with legal obligations. You may request deletion of
                  your data at any time, subject to legal retention requirements.
                </p>
              </section>

              <section id="your-rights">
                <h2 className="text-2xl font-bold text-charcoal-900">7. Your Rights</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  You have the right to access, correct, export, or delete your personal information.
                  To exercise any of these rights, contact us at privacy@airanexus.com. We respond to
                  verified requests within 30 days.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-charcoal-900">8. Contact Us</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  Questions about this policy? Email privacy@airanexus.com or write to AiraNexus
                  Technologies Pvt. Ltd., Indiranagar, Bangalore, Karnataka 560001, India.
                </p>
              </section>
            </div>
          </motion.article>
        </div>
      </section>
    </>
  )
}
