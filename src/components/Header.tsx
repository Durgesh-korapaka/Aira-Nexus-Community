import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  LogOut,
  User as UserIcon,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Header({ darkMode: _darkMode, setDarkMode: _setDarkMode }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-100 shadow-sm'
            : 'bg-white border-b border-neutral-100'
        }`}
      >
        <nav className="container-custom flex items-center justify-between h-16 lg:h-18" aria-label="Main navigation">
          {/* Logo */}
          <Link to="/" className="flex items-center group pl-5 mr-8 flex-shrink-0" aria-label="AiraNexus home">
            <img
              src="/airanexus-logo.png"
              alt="AiraNexus"
              className="object-contain w-auto h-[28px] sm:h-[34px] lg:h-[40px]"
              width="150"
              height="40"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : 'text-charcoal-900 hover:text-lime-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="flex items-center space-x-2 text-sm text-charcoal-700">
                  <UserIcon className="w-4 h-4 text-primary-500" />
                  <span className="max-w-[120px] truncate">{user.email}</span>
                </span>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-1.5 px-4 py-2 text-sm font-medium text-charcoal-700 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-medium text-charcoal-900 hover:text-lime-500 transition-colors"
              >
                Login
              </Link>
            )}
            <Link to="/request-demo" className="btn-primary text-sm">
              Request Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal-900"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-neutral-100 lg:hidden"
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-500 bg-primary-50'
                      : 'text-charcoal-900 hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2 border-t border-neutral-100">
                {user ? (
                  <>
                    <div className="flex items-center space-x-2 px-4 py-3 text-sm text-charcoal-700">
                      <UserIcon className="w-4 h-4 text-primary-500" />
                      <span className="truncate">{user.email}</span>
                    </div>
                    <button
                      onClick={() => signOut()}
                      className="flex items-center space-x-2 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block px-4 py-3 rounded-xl text-sm font-medium text-charcoal-900 hover:bg-neutral-50"
                  >
                    Login
                  </Link>
                )}
                <Link to="/request-demo" className="block btn-primary text-center">
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
