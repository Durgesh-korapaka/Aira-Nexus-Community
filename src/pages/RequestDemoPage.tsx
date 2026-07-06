import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  CheckCircle,
  ArrowRight,
  Video,
  Clock,
  Shield,
  Sparkles,
  AlertCircle,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

interface RequestDemoPageProps {
  darkMode: boolean;
}

const benefits = [
  { icon: Video, title: 'Personalized Demo', description: 'See how Aira Nexus works for your community' },
  { icon: Clock, title: '30 Minutes', description: 'Quick overview of key features' },
  { icon: Shield, title: 'No Obligation', description: 'No credit card or commitment required' },
];

const states = [
  'Andhra Pradesh', 'Karnataka', 'Kerala', 'Maharashtra', 'Tamil Nadu',
  'Telangana', 'Delhi', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Other'
];

const flatRanges = [
  'Up to 50 units',
  '51-100 units',
  '101-200 units',
  '201-500 units',
  '500+ units',
];

export default function RequestDemoPage({ darkMode: _darkMode }: RequestDemoPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    apartmentName: '',
    city: '',
    state: '',
    numberOfFlats: '',
    preferredDate: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.from('demo_requests').insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      apartment_name: formData.apartmentName || null,
      city: formData.city || null,
      state: formData.state || null,
      number_of_flats: formData.numberOfFlats || null,
      preferred_date: formData.preferredDate || null,
    });

    if (error) {
      setError('Something went wrong. Please try again.');
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <SEO title="Request Demo — AiraNexus" description="Book a personalized demo and see how AiraNexus works for your community. 30-minute overview, no obligation." path="/request-demo" />
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
            Free Demo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6"
          >
            See Aira Nexus in <span className="text-gradient">action</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-neutral-500 max-w-2xl mx-auto"
          >
            Get a personalized demo tailored to your community needs. No commitment required.
          </motion.p>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4 text-charcoal-900">
                  What to expect
                </h2>
                <p className="text-neutral-500">
                  Our demo is designed to show you exactly how Aira Nexus can solve your community's unique challenges.
                </p>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start space-x-4">
                    <div className="icon-circle-lg flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-charcoal-900">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-neutral-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What You'll See */}
              <div className="card p-6">
                <h3 className="font-semibold mb-4 text-charcoal-900">
                  In the demo, you'll see:
                </h3>
                <ul className="space-y-3">
                  {[
                    'How to automate maintenance billing',
                    'Complaint tracking and resolution workflow',
                    'Resident mobile app demo',
                    'Reports and analytics dashboard',
                    'WhatsApp notification setup',
                    'Q&A with our product expert',
                  ].map((item) => (
                    <li key={item} className="flex items-center text-sm">
                      <CheckCircle className="w-5 h-5 text-lime-500 mr-3 flex-shrink-0" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Indicators */}
              <div className="card p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex -space-x-2">
                    {[220453, 415829, 7640, 1043471].map((id, i) => (
                      <img
                        key={i}
                        src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2`}
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        loading="lazy"
                        decoding="async"
                        width="32"
                        height="32"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-charcoal-900">
                      500+ communities
                    </div>
                    <div className="text-xs text-neutral-500">
                      already using Aira Nexus
                    </div>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-lime-500 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-neutral-600">
                    4.8/5 rating
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Demo Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lime-50 mb-6">
                    <CheckCircle className="w-10 h-10 text-lime-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-charcoal-900">
                    Demo Requested!
                  </h3>
                  <p className="mb-6 text-neutral-500">
                    Thank you for your interest! Our team will contact you within 24 hours to schedule your demo.
                  </p>
                  <div className="bg-neutral-50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-neutral-700">
                      <strong>What's Next:</strong>
                    </p>
                    <ul className="text-sm mt-2 space-y-1 text-neutral-500">
                      <li>1. You'll receive a confirmation email</li>
                      <li>2. Our team will call to confirm the time</li>
                      <li>3. Join the demo via the link provided</li>
                    </ul>
                  </div>
                  <Link to="/" className="btn-primary">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="icon-circle-lg">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-charcoal-900">
                        Request a Demo
                      </h2>
                      <p className="text-sm text-neutral-500">
                        Fill in your details below
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-700">
                          Your Name *
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
                          placeholder="John Doe"
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
                          placeholder="john@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-neutral-700">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>

                    <div>
                      <label htmlFor="apartmentName" className="block text-sm font-medium mb-2 text-neutral-700">
                        Community/Apartment Name *
                      </label>
                      <input
                        type="text"
                        id="apartmentName"
                        name="apartmentName"
                        autoComplete="organization"
                        required
                        value={formData.apartmentName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                        placeholder="Green Valley Apartments"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-2 text-neutral-700">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          autoComplete="address-level2"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                          placeholder="Bangalore"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium mb-2 text-neutral-700">
                          State *
                        </label>
                        <select
                          id="state"
                          name="state"
                          autoComplete="address-level1"
                          required
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

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="numberOfFlats" className="block text-sm font-medium mb-2 text-neutral-700">
                          Number of Units *
                        </label>
                        <select
                          id="numberOfFlats"
                          name="numberOfFlats"
                          autoComplete="off"
                          required
                          value={formData.numberOfFlats}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                        >
                          <option value="">Select range</option>
                          {flatRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium mb-2 text-neutral-700">
                          Preferred Demo Date
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          autoComplete="off"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border bg-white border-neutral-200 text-charcoal-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-colors"
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="flex items-center space-x-2 bg-red-50 text-red-600 rounded-lg p-3 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button type="submit" disabled={loading} className="w-full btn-primary text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Schedule My Free Demo
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-neutral-500">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy" className="text-primary-500 hover:underline">Privacy Policy</Link>
                      {' '}and{' '}
                      <Link to="/terms" className="text-primary-500 hover:underline">Terms of Service</Link>.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
