import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, AtSign, Share2, Share, Send, CheckCircle2 } from 'lucide-react';

const columns = [
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
];

const socials = [
  { Icon: AtSign, label: 'LinkedIn', href: 'https://www.linkedin.com/company/airanexus' },
  { Icon: Share2, label: 'Twitter', href: 'https://twitter.com/airanexus' },
  { Icon: Share, label: 'Facebook', href: 'https://www.facebook.com/airanexus' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

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
            <p className="mt-4 max-w-xs text-sm text-white/70">
              The all-in-one platform for Indian residential communities. Manage billing,
              maintenance, visitors, and residents with ease.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <span>Indiranagar, Bengaluru, Karnataka 560038, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a href="mailto:hello@airanexus.com" className="hover:text-white">
                  hello@airanexus.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a href="tel:+918000000000" className="hover:text-white">
                  +91 80 0000 0000
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-sm text-white/70 transition-colors hover:text-white"
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
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Get product updates and community management tips in your inbox.
            </p>
            <form onSubmit={onSubscribe} className="mt-4">
              <div className="flex overflow-hidden rounded-full border border-white/20 bg-white/5 p-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white transition-colors hover:bg-primary-600"
                >
                  {subscribed ? (
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-2xs text-primary-300">Thanks for subscribing!</p>
              )}
            </form>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-primary-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-2xs text-white/60">
            © {new Date().getFullYear()} AiraNexus Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-2xs text-white/60">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
