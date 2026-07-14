import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = {
  Product: [
    { name: 'Features', path: '/features' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Request Demo', path: '/request-demo' },
  ],
  Company: [
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ],
  Resources: [
    { name: 'Apartment Management', path: '/apartment-management-software' },
    { name: 'Society Management', path: '/society-management-software' },
    { name: 'Maintenance Billing', path: '/maintenance-billing-software' },
    { name: 'MyGate Alternative', path: '/mygate-alternative' },
  ],
  Legal: [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Login', path: '/login' },
  ],
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/airanexus' },
  { icon: Twitter, label: 'Twitter', url: 'https://www.twitter.com/airanexus' },
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/airanexus' },
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/airanexus' },
];

const contactInfo = [
  { icon: Mail, label: 'hello@airanexus.com' },
  { icon: Phone, label: '+91-123-456-7890' },
  { icon: MapPin, label: 'Bangalore, Karnataka, India' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-5" aria-label="AiraNexus home">
              <img
                src="/airanexus-logo.png"
                alt="AiraNexus"
                className="object-contain w-auto h-[36px] brightness-0 invert"
                width="180"
                height="36"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-6">
              AI-powered community management for apartments, gated communities, and RWAs.
              Automate billing, complaints, and communication — all in one platform.
            </p>
            <div className="space-y-2.5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-white/70">
                  <item.icon className="w-4 h-4 text-primary-400 flex-shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-white/60">Stay updated with community management insights</p>
            <form className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="w-full sm:w-64 px-4 py-2.5 rounded-lg bg-white/10 border border-white/15 text-white text-sm placeholder:text-white/40 focus:bg-white/15 focus:border-primary-400 focus:outline-none transition-all"
              />
              <button
                type="submit"
                className="flex-shrink-0 px-4 py-2.5 rounded-lg bg-primary-500 text-white font-medium text-sm hover:bg-primary-400 transition-colors flex items-center gap-1.5"
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </form>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 text-white/60 hover:bg-primary-500 hover:text-white transition-all duration-200 ease-smooth"
              >
                <social.icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} AiraNexus. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with care in Bangalore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
