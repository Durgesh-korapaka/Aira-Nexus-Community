import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode: _darkMode }: FooterProps) {
  const productLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Request Demo', path: '/request-demo' },
    { name: 'Blog', path: '/blog' },
  ];

  const solutionLinks = [
    { name: 'Society Management', path: '/society-management-software' },
    { name: 'Apartment Management', path: '/apartment-management-software' },
    { name: 'Maintenance Billing', path: '/maintenance-billing-software' },
    { name: 'MyGate Alternative', path: '/mygate-alternative' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-charcoal-900 text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2.5 mb-6">
              <img
                src="/airanexus-logo.png"
                alt="AiraNexus"
                className="w-auto h-[40px] object-contain"
                width="180"
                height="40"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-sm text-charcoal-300 leading-relaxed mb-6 max-w-xs">
              The AI-powered community management platform that transforms how residential communities operate, connect, and thrive.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@airanexus.com" className="flex items-center space-x-3 text-sm text-charcoal-300 hover:text-lime-500 transition-colors">
                <Mail className="w-4 h-4 text-primary-500" />
                <span>hello@airanexus.com</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center space-x-3 text-sm text-charcoal-300 hover:text-lime-500 transition-colors">
                <Phone className="w-4 h-4 text-primary-500" />
                <span>+91 123 456 7890</span>
              </a>
              <div className="flex items-center space-x-3 text-sm text-charcoal-300">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-primary-500 mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-charcoal-300 hover:text-lime-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-primary-500 mb-4 uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-charcoal-300 hover:text-lime-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-primary-500 mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-charcoal-300 hover:text-lime-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-charcoal-700">
          <p className="text-sm text-charcoal-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} AiraNexus. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center bg-charcoal-800 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <social.icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
