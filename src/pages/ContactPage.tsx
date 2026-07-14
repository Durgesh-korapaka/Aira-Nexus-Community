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
  Loader2,
  Globe,
  Twitter,
  Linkedin,
  Facebook,
  Building2,
  ArrowRight,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';

interface ContactPageProps {
  darkMode: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  apartmentName: string;
  city: string;
  state: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const STATES = [
  'Andhra Pradesh',
  'Karnataka',
  'Kerala',
  'Maharashtra',
  'Tamil Nadu',
  'Telangana',
  'Delhi',
  'Gujarat',
  'Rajasthan',
  'Uttar Pradesh',
  'West Bengal',
  'Other',
];

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@airanexus.com',
    href: 'mailto:hello@airanexus.com',
    description: 'Reach out for any inquiries',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 123 456 7890',
    href: 'tel:+911234567890',
    description: 'Mon–Sat, 9AM–6PM IST',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Bangalore, Karnataka, India',
    href: '#',
    description: 'Visit our headquarters',
  },
];

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
];

const officeHours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  apartmentName: '',
  city: '',
  state: '',
  message: '',
};

export default function ContactPage({ darkMode: _darkMode }: ContactPageProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error when user edits
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const { error: insertError } = await supabase.from('contact_submissions').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        apartment_name: formData.apartmentName || null,
        city: formData.city || null,
        state: formData.state || null,
        message: formData.message,
      });

      if (insertError) {
        setError('Something went wrong while submitting your message. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('An unexpected error occurred. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setError(null);
    setSubmitted(false);
  };

  return (
    <div>
      <SEO
        title="Contact — AiraNexus"
        description="Get in touch with AiraNexus. Email, phone, or send us a message and we'll respond within 24 hours. We're here to help your community thrive."
        path="/contact"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-hero-gradient">
        <div className="blob w-[500px] h-[500px] bg-primary-400 -top-32 -right-32 animate-float" />
        <div className="blob w-[400px] h-[400px] bg-lime-400 -bottom-32 -left-32 animate-float-slow" />

        <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="badge badge-primary mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            Contact Us
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
          >
            Let's start a <span className="text-gradient">conversation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
          >
            Have questions about AiraNexus? We'd love to hear from you. Send us a message and
            our team will respond within 24 hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex items-center justify-center gap-6 text-sm text-charcoal-400"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
              24-hour response time
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
              No commitment required
            </span>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left Column — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 lg:sticky lg:top-24"
            >
              <div>
                <span className="badge badge-lime mb-4">Get in touch</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal-900 text-balance">
                  We're here to <span className="text-gradient">help</span>
                </h2>
                <p className="mt-4 text-lg text-charcoal-500 text-pretty">
                  Whether you're exploring AiraNexus for your community or need support with
                  an existing account, our team is ready to assist you.
                </p>
              </div>

              {/* Contact Detail Cards */}
              <div className="space-y-4">
                {contactDetails.map((detail, i) => (
                  <motion.a
                    key={detail.label}
                    href={detail.href}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="card card-hover p-5 flex items-start gap-4 group"
                    aria-label={`${detail.label}: ${detail.value}`}
                  >
                    <div className="icon-circle-lg flex-shrink-0 group-hover:scale-110">
                      <detail.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-charcoal-400 font-medium">{detail.label}</p>
                      <p className="font-semibold text-charcoal-900 group-hover:text-primary-600 transition-colors break-words">
                        {detail.value}
                      </p>
                      <p className="text-sm text-charcoal-500 mt-0.5">{detail.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-circle-sm">
                    <Clock className="w-4 h-4 text-primary-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-charcoal-900">Office Hours</h3>
                </div>
                <ul className="space-y-3" role="list">
                  {officeHours.map((entry) => (
                    <li
                      key={entry.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-charcoal-600 font-medium">{entry.day}</span>
                      <span
                        className={
                          entry.time === 'Closed'
                            ? 'text-charcoal-400 font-medium'
                            : 'text-charcoal-900 font-semibold'
                        }
                      >
                        {entry.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <span className="text-sm text-charcoal-500 font-medium">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`AiraNexus on ${social.label}`}
                    className="icon-circle-sm hover:bg-primary-500 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4 text-primary-600" aria-hidden="true" />
                  </a>
                ))}
              </motion.div>

              {/* WhatsApp Quick Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="card p-6 bg-gradient-to-br from-lime-50 to-primary-50 border-lime-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-lime-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal-900">Quick Response on WhatsApp</p>
                    <p className="text-sm text-charcoal-500">Chat with our team instantly</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/911234567890?text=Hi, I'm interested in AiraNexus for my community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full mt-4"
                >
                  Start WhatsApp Chat
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6 sm:p-8 lg:p-10"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12"
                  role="status"
                  aria-live="polite"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.1, type: 'spring' }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lime-50 mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-lime-500" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-charcoal-900">
                    Message Sent!
                  </h3>
                  <p className="text-charcoal-500 max-w-md mx-auto">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn-secondary mt-8"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal-900">
                      Send us a message
                    </h2>
                    <p className="mt-2 text-charcoal-500">
                      Fill out the form below and we'll be in touch shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name & Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold mb-2 text-charcoal-700"
                        >
                          Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          autoComplete="name"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          value={formData.name}
                          onChange={handleChange}
                          className={`input-base ${errors.name ? 'input-error' : ''}`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            role="alert"
                            aria-live="polite"
                            className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"
                          >
                            <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold mb-2 text-charcoal-700"
                        >
                          Email <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          value={formData.email}
                          onChange={handleChange}
                          className={`input-base ${errors.email ? 'input-error' : ''}`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            role="alert"
                            aria-live="polite"
                            className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"
                          >
                            <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Apartment Name */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold mb-2 text-charcoal-700"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-base"
                          placeholder="+91 1234567890"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="apartmentName"
                          className="block text-sm font-semibold mb-2 text-charcoal-700"
                        >
                          Apartment / Community Name
                        </label>
                        <input
                          type="text"
                          id="apartmentName"
                          name="apartmentName"
                          autoComplete="organization"
                          value={formData.apartmentName}
                          onChange={handleChange}
                          className="input-base"
                          placeholder="Your community name"
                        />
                      </div>
                    </div>

                    {/* City & State */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-semibold mb-2 text-charcoal-700"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          autoComplete="address-level2"
                          value={formData.city}
                          onChange={handleChange}
                          className="input-base"
                          placeholder="Bangalore"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="state"
                          className="block text-sm font-semibold mb-2 text-charcoal-700"
                        >
                          State
                        </label>
                        <select
                          id="state"
                          name="state"
                          autoComplete="address-level1"
                          value={formData.state}
                          onChange={handleChange}
                          className="input-base"
                        >
                          <option value="">Select state</option>
                          {STATES.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold mb-2 text-charcoal-700"
                      >
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        autoComplete="off"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`input-base resize-none ${errors.message ? 'input-error' : ''}`}
                        placeholder="Tell us about your community and what you're looking for..."
                      />
                      {errors.message && (
                        <p
                          id="message-error"
                          role="alert"
                          aria-live="polite"
                          className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* General Error */}
                    {error && (
                      <div
                        role="alert"
                        aria-live="assertive"
                        className="flex items-start gap-2 bg-red-50 text-red-600 rounded-xl p-4 text-sm border border-red-100"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-base py-4"
                      aria-busy={loading}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-charcoal-400">
                      By submitting, you agree to our privacy policy. We never share your data.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="section-tight bg-white border-t border-charcoal-100">
        <div className="container-custom">
          <SectionHeading
            badge="Why reach out"
            badgeColor="cyan"
            title={<>What to expect <span className="text-gradient">next</span></>}
            description="We've made it simple to get the answers you need."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: 'We respond fast',
                description: 'Expect a reply within 24 hours, often much sooner during business hours.',
              },
              {
                icon: Building2,
                title: 'Personalized demo',
                description: "We'll schedule a walkthrough tailored to your community's specific needs.",
              },
              {
                icon: Globe,
                title: 'No commitment',
                description: "Explore AiraNexus with zero pressure. We're here to help you decide.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card card-hover p-6"
              >
                <div className="icon-circle-sm mb-4">
                  <item.icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-charcoal-900 mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
