import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Globe, Link2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const footerNav = {
  Product: [
    { label: 'Features', to: '/features' },
    { label: 'Solutions', to: '/solutions' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Request Demo', to: '/request-demo' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Blog', to: '/blog' },
    { label: 'Contact', to: '/contact' },
    { label: 'FAQ', to: '/faq' },
  ],
  Resources: [
    { label: 'Apartment Management', to: '/apartment-management-software' },
    { label: 'Society Management', to: '/society-management-software' },
    { label: 'Maintenance Billing', to: '/maintenance-billing-software' },
    { label: 'MyGate Alternative', to: '/mygate-alternative' },
  ],
  Legal: [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms of Service', to: '/terms' },
    { label: 'Login', to: '/login' },
  ],
}

const socials = [
  { Icon: Globe, label: 'Facebook', href: 'https://facebook.com' },
  { Icon: MessageCircle, label: 'Twitter', href: 'https://twitter.com' },
  { Icon: Link2, label: 'LinkedIn', href: 'https://linkedin.com' },
  { Icon: Mail, label: 'Instagram', href: 'https://instagram.com' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="Aira Nexus home" className="inline-block">
              <img
                src="/airanexus-logo-footer.svg"
                alt="Aira Nexus Logo"
                className="object-contain w-auto h-[45px] sm:h-[55px]"
                width="240"
                height="50"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-charcoal-300">
              The AI-powered community management platform that brings residents, managers, and
              vendors together — making every apartment and society run like clockwork.
            </p>

            <div className="mt-6 space-y-3 text-sm text-charcoal-300">
              <a
                href="mailto:hello@airanexus.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                hello@airanexus.com
              </a>
              <a
                href="tel:+918000000000"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                +91 80 0000 0000
              </a>
              <p className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                Prestige Tech Park, Kadubeesanahalli, Bengaluru, Karnataka 560103
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-charcoal-200 transition-all hover:bg-primary-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-5">
            {Object.entries(footerNav).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-charcoal-300 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-charcoal-300">
              Get product updates and community management tips in your inbox.
            </p>
            <form onSubmit={onSubscribe} className="mt-4">
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-charcoal-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-xl bg-primary-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
                >
                  Subscribe
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-xs text-greenish-400">✓ Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-xs text-charcoal-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Aira Nexus Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link to="/login" className="transition-colors hover:text-white">
              Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
