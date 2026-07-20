import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import SEO from '../components/SEO'

const SECTIONS = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'definitions', title: '2. Definitions' },
  { id: 'accounts', title: '3. Accounts' },
  { id: 'license', title: '4. License to Use' },
  { id: 'acceptable-use', title: '5. Acceptable Use' },
  { id: 'fees', title: '6. Fees and Payment' },
  { id: 'intellectual-property', title: '7. Intellectual Property' },
  { id: 'user-content', title: '8. User Content' },
  { id: 'disclaimer', title: '9. Disclaimer' },
  { id: 'liability', title: '10. Limitation of Liability' },
  { id: 'indemnification', title: '11. Indemnification' },
  { id: 'termination', title: '12. Termination' },
  { id: 'contact', title: '13. Contact Us' },
]

export default function TermsPage({ _darkMode = false }: { _darkMode?: boolean }) {
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
        title="Terms of Service"
        description="The terms and conditions that govern your use of the AiraNexus platform."
        path="/terms"
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
            <span className="icon-circle-lg mx-auto"><FileText className="h-6 w-6" aria-hidden="true" /></span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Terms of Service
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-charcoal-600 text-pretty">
              Last updated: March 1, 2025. These terms govern your use of AiraNexus.
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
            <div className="space-y-8">
              <section id="acceptance">
                <h2 className="text-2xl font-bold text-charcoal-900">1. Acceptance of Terms</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  By accessing or using the AiraNexus platform, you agree to be bound by these Terms
                  of Service. If you do not agree, please do not use our services.
                </p>
              </section>

              <section id="definitions">
                <h2 className="text-2xl font-bold text-charcoal-900">2. Definitions</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  "Platform" refers to the AiraNexus web and mobile applications. "User" refers to any
                  individual who accesses the platform. "Community" refers to a residential group
                  managed on the platform.
                </p>
              </section>

              <section id="accounts">
                <h2 className="text-2xl font-bold text-charcoal-900">3. Accounts</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  You must provide accurate information when creating an account and keep your
                  credentials secure. You are responsible for all activity under your account.
                </p>
              </section>

              <section id="license">
                <h2 className="text-2xl font-bold text-charcoal-900">4. License to Use</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  We grant you a limited, non-exclusive, non-transferable license to use the platform
                  for the duration of your active subscription, subject to these terms.
                </p>
              </section>

              <section id="acceptable-use">
                <h2 className="text-2xl font-bold text-charcoal-900">5. Acceptable Use</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  You agree not to misuse the platform, attempt unauthorized access, transmit
                  malware, or use the service for any unlawful purpose. Violations may result in
                  immediate account suspension.
                </p>
              </section>

              <section id="fees">
                <h2 className="text-2xl font-bold text-charcoal-900">6. Fees and Payment</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  Subscription fees are billed per the plan you select. Fees are non-refundable
                  except as required by law. We may change pricing with at least 30 days’ notice.
                </p>
              </section>

              <section id="intellectual-property">
                <h2 className="text-2xl font-bold text-charcoal-900">7. Intellectual Property</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  The platform, including software, design, and branding, is owned by AiraNexus and
                  protected by intellectual property laws. These terms grant no rights to our
                  trademarks or copyrights.
                </p>
              </section>

              <section id="user-content">
                <h2 className="text-2xl font-bold text-charcoal-900">8. User Content</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  You retain ownership of content you upload. You grant us a limited license to host
                  and process it to provide the service. You are responsible for ensuring you have
                  rights to any content you upload.
                </p>
              </section>

              <section id="disclaimer">
                <h2 className="text-2xl font-bold text-charcoal-900">9. Disclaimer</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  The platform is provided "as is" without warranties of any kind. We do not
                  guarantee uninterrupted or error-free operation.
                </p>
              </section>

              <section id="liability">
                <h2 className="text-2xl font-bold text-charcoal-900">10. Limitation of Liability</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  To the maximum extent permitted by law, AiraNexus shall not be liable for indirect,
                  incidental, or consequential damages, or for any damages exceeding the fees you
                  paid in the preceding 12 months.
                </p>
              </section>

              <section id="indemnification">
                <h2 className="text-2xl font-bold text-charcoal-900">11. Indemnification</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  You agree to indemnify and hold AiraNexus harmless from claims arising out of your
                  use of the platform or violation of these terms.
                </p>
              </section>

              <section id="termination">
                <h2 className="text-2xl font-bold text-charcoal-900">12. Termination</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  Either party may terminate this agreement at any time. Upon termination, your
                  access to the platform ceases and we may delete your data per our retention policy.
                </p>
              </section>

              <section id="contact">
                <h2 className="text-2xl font-bold text-charcoal-900">13. Contact Us</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600 text-pretty">
                  Questions about these terms? Email legal@airanexus.com or write to AiraNexus
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
