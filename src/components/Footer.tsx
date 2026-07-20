import { Link } from 'react-router-dom'
import { AtSign, Globe, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react'

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Solutions', to: '/solutions' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Request Demo', to: '/request-demo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQ', to: '/faq' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Apartment Management', to: '/apartment-management-software' },
      { label: 'Society Management', to: '/society-management-software' },
      { label: 'Maintenance Billing', to: '/maintenance-billing-software' },
      { label: 'MyGate Alternative', to: '/mygate-alternative' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Login', to: '/login' },
    ],
  },
]

const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/airanexus', Icon: Share2, hover: 'hover:bg-blue-600' },
  { label: 'Twitter', href: 'https://twitter.com/airanexus', Icon: Globe, hover: 'hover:bg-sky-500' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/airanexus', Icon: AtSign, hover: 'hover:bg-blue-700' },
  { label: 'Instagram', href: 'https://www.instagram.com/airanexus', Icon: MessageCircle, hover: 'hover:bg-pink-600' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-custom py-16">
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
              The AI-powered community management platform for modern apartments, gated
              communities, and residential complexes.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-charcoal-300">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary-400" aria-hidden="true" />
                <a href="mailto:hello@airanexus.com" className="transition-colors hover:text-white">
                  hello@airanexus.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-primary-400" aria-hidden="true" />
                <a href="tel:+918045678900" className="transition-colors hover:text-white">
                  +91 80 4567 8900
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary-400" aria-hidden="true" />
                <span>Indiranagar, Bangalore, Karnataka 560001, India</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-white">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.to}>
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
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-white">Stay in the loop</h3>
            <p className="mt-2 text-sm text-charcoal-300">
              Product updates and community management insights, monthly. No spam.
            </p>
            <form
              className="mt-4 flex max-w-md gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@community.com"
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-charcoal-400 focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-400/30"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex items-start lg:items-end lg:justify-end">
            <div className="flex gap-3">
              {SOCIAL.map(({ label, href, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors ${hover}`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-xs text-charcoal-400 sm:flex-row">
          <p>© {new Date().getFullYear()} AiraNexus Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
