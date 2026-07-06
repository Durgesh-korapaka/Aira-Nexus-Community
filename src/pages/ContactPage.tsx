import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

interface ContactPageProps {
  darkMode: boolean;
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@airanexus.com', href: 'mailto:hello@airanexus.com' },
  { icon: Phone, label: 'Phone', value: '+91 123 456 7890', href: 'tel:+911234567890' },
  { icon: MapPin, label: 'Address', value: 'Bangalore, Karnataka, India', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon-Sat: 9AM - 6PM', href: '#' },
];

export default function ContactPage({ darkMode: _darkMode }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    apartmentName: '',
    city: '',
    state: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.from('contact_submissions').insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      apartment_name: formData.apartmentName || null,
      city: formData.city || null,
      state: formData.state || null,
      message: formData.message,
    });

    if (error) {
      setError('Something went wrong. Please try again.');
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  const states = [
    'Andhra Pradesh', 'Karnataka', 'Kerala', 'Maharashtra', 'Tamil Nadu',
    'Telangana', 'Delhi', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Other'
  ];

  return (
    <div>
      <SEO title="Contact — AiraNexus" description="Get in touch with AiraNexus. Email, phone, or send us a message and we'll respond within 24 hours." path="/contact" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-hero-gradient overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[350px] h-[350px] bg-lime-500 -bottom-20 -left-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="container-custom text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6"
          >
            Let's start a <span className="text-gradient">conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lime-50 mb-4">
                    <CheckCircle className="w-8 h-8 text-lime-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-charcoal-900">
                    Message Sent!
                  </h3>
                  <p className="text-neutral-500">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-charcoal-900">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-700">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-neutral-700">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                          placeholder="+91 1234567890"
                        />
                      </div>
                      <div>
                        <label htmlFor="apartmentName" className="block text-sm font-medium mb-2 text-neutral-700">
                          Apartment/Community Name
                        </label>
                        <input
                          type="text"
                          id="apartmentName"
                          name="apartmentName"
                          autoComplete="organization"
                          value={formData.apartmentName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                          placeholder="Your community name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-2 text-neutral-700">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          autoComplete="address-level2"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                          placeholder="Bangalore"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium mb-2 text-neutral-700">
                          State
                        </label>
                        <select
                          id="state"
                          name="state"
                          autoComplete="address-level1"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                        >
                          <option value="">Select state</option>
                          {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-700">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        autoComplete="off"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors resize-none"
                        placeholder="Tell us about your community and what you're looking for..."
                      />
                    </div>

                    {error && (
                      <div className="flex items-center space-x-2 bg-red-50 text-red-600 rounded-lg p-3 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button type="submit" disabled={loading} className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="card p-6 group"
                  >
                    <div className="icon-circle-lg mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-neutral-500">
                      {info.label}
                    </p>
                    <p className="font-medium text-charcoal-900 group-hover:text-primary-600 transition-colors">
                      {info.value}
                    </p>
                  </a>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="card p-6 bg-lime-50 border-lime-100">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-lime-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal-900">
                      Quick Response on WhatsApp
                    </p>
                    <p className="text-sm text-neutral-500">
                      Chat with our team instantly
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/911234567890?text=Hi, I'm interested in Aira Nexus for my community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-4"
                >
                  Start WhatsApp Chat
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="card overflow-hidden">
                <div className="h-64 bg-neutral-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-neutral-400 mx-auto mb-2" />
                    <p className="text-neutral-500">
                      Map: Bangalore, India
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
