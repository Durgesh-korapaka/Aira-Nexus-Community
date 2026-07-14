import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  CheckCircle,
  ArrowRight,
  Video,
  Shield,
  Sparkles,
  AlertCircle,
  CalendarClock,
  ListChecks,
  MessageSquare,
  BarChart3,
  Smartphone,
  HelpCircle,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import SEO from '../components/SEO';

interface RequestDemoPageProps {
  darkMode: boolean;
}

const benefits = [
  { icon: Video, title: 'Personalized Demo', description: 'A 30-minute walkthrough tailored to your community size and workflow.' },
  { icon: Shield, title: 'No Obligation', description: 'No credit card, no commitment. Just a friendly conversation about your needs.' },
  { icon: Building2, title: 'See Your Community Type', description: 'We configure the demo to match apartments, gated layouts, or RWAs.' },
];

const whatYoullSee = [
  { icon: ListChecks, label: 'How to automate maintenance billing' },
  { icon: MessageSquare, label: 'Complaint tracking and resolution workflow' },
  { icon: Smartphone, label: 'Resident mobile app demo' },
  { icon: BarChart3, label: 'Reports and analytics dashboard' },
  { icon: Sparkles, label: 'WhatsApp notification setup' },
  { icon: HelpCircle, label: 'Q&A with our product expert' },
];

const states = [
  'Andhra Pradesh', 'Karnataka', 'Kerala', 'Maharashtra', 'Tamil Nadu',
  'Telangana', 'Delhi', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Other',
];

const flatRanges = [
  'Up to 50 units',
  '51-100 units',
  '101-200 units',
  '201-500 units',
  '500+ units',
];

const avatarIds = [220453, 415829, 7640, 1043471];

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (!/^[+\d][\d\s-]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    if (!formData.apartmentName.trim()) newErrors.apartmentName = 'Please enter your community name.';
    if (!formData.city.trim()) newErrors.city = 'Please enter your city.';
    if (!formData.state) newErrors.state = 'Please select your state.';
    if (!formData.numberOfFlats) newErrors.numberOfFlats = 'Please select a unit range.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validate()) return;

    setLoading(true);

    const { error: insertError } = await supabase.from('demo_requests').insert({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      apartment_name: formData.apartmentName || null,
      city: formData.city || null,
      state: formData.state || null,
      number_of_flats: formData.numberOfFlats || null,
      preferred_date: formData.preferredDate || null,
    });

    if (insertError) {
      setError('Something went wrong. Please try again.');
    } else {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <SEO
        title="Request Demo — AiraNexus"
        description="Book a personalized 30-minute demo and see how AiraNexus automates billing, complaints, visitor management, and resident communication for your community."
        path="/request-demo"
      />

      {/* Hero */}
      <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-20 overflow-hidden bg-hero-gradient">
        <div className="blob w-[480px] h-[480px] bg-primary-400 -top-32 -right-24 animate-float" />
        <div className="blob w-[380px] h-[380px] bg-lime-400 -bottom-24 -left-24 animate-float-slow" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="badge badge-primary mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Free Personalized Demo
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              See AiraNexus in <span className="text-gradient">action</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              Get a personalized walkthrough tailored to your community. Thirty minutes, zero
              obligation, and a clear picture of how AiraNexus fits your daily operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-charcoal-400"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                30-minute walkthrough
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-primary-500" aria-hidden="true" />
                Response within 24 hours
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Two-column: benefits + form */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: benefits + checklist + trust */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8 lg:sticky lg:top-24"
            >
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-charcoal-900 mb-4">
                  What to expect
                </h2>
                <p className="text-charcoal-500 text-pretty">
                  Our demo is designed to show you exactly how AiraNexus can solve your
                  community&apos;s unique challenges — no slides, just real workflows.
                </p>
              </div>

              {/* Benefits list */}
              <div className="space-y-5">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="icon-circle-lg flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-charcoal-500 text-pretty">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* What you'll see checklist */}
              <div className="card p-6">
                <div className="flex items-center gap-2 mb-5">
                  <CalendarClock className="w-5 h-5 text-primary-600" aria-hidden="true" />
                  <h3 className="font-semibold text-charcoal-900">In the demo, you&apos;ll see</h3>
                </div>
                <ul className="space-y-3">
                  {whatYoullSee.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-lime-50 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-lime-600" aria-hidden="true" />
                      </span>
                      <span className="text-charcoal-600">{item.label}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Trust indicators */}
              <div className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    {avatarIds.map((id, i) => (
                      <img
                        key={i}
                        src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2`}
                        alt=""
                        className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-soft"
                        loading="lazy"
                        decoding="async"
                        width="32"
                        height="32"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-charcoal-900">500+ communities</div>
                    <div className="text-xs text-charcoal-500">already using AiraNexus</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-4 h-4 text-lime-500 fill-current" aria-hidden="true" />
                  ))}
                  <span className="ml-2 text-sm text-charcoal-600">4.8/5 average rating</span>
                </div>
              </div>
            </motion.div>

            {/* Right: the form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6 sm:p-8 lg:p-10"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-10"
                  role="status"
                  aria-live="polite"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1, type: 'spring' }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lime-50 mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-lime-500" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-charcoal-900 mb-2">Demo Requested!</h3>
                  <p className="mb-6 text-charcoal-500 text-pretty">
                    Thank you for your interest! Our team will contact you within 24 hours to
                    schedule your personalized demo.
                  </p>
                  <div className="bg-charcoal-50 rounded-xl p-5 mb-6 text-left">
                    <p className="text-sm font-semibold text-charcoal-700 mb-3">What&apos;s next:</p>
                    <ol className="text-sm space-y-2 text-charcoal-500 list-decimal list-inside">
                      <li>You&apos;ll receive a confirmation email shortly.</li>
                      <li>Our team will call to confirm a time that works for you.</li>
                      <li>Join the demo via the link we provide.</li>
                    </ol>
                  </div>
                  <Link to="/" className="btn-primary">
                    Back to Home
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="icon-circle-lg">
                      <Building2 className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-charcoal-900">Request a Demo</h2>
                      <p className="text-sm text-charcoal-500">Fill in your details below</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-charcoal-700">
                          Your Name <span className="text-red-500" aria-hidden="true">*</span>
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
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-charcoal-700">
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
                          placeholder="john@email.com"
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-charcoal-700">
                        Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input-base ${errors.phone ? 'input-error' : ''}`}
                        placeholder="+91 1234567890"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="apartmentName" className="block text-sm font-medium mb-2 text-charcoal-700">
                        Community / Apartment Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="apartmentName"
                        name="apartmentName"
                        autoComplete="organization"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.apartmentName}
                        aria-describedby={errors.apartmentName ? 'apartmentName-error' : undefined}
                        value={formData.apartmentName}
                        onChange={handleChange}
                        className={`input-base ${errors.apartmentName ? 'input-error' : ''}`}
                        placeholder="Green Valley Apartments"
                      />
                      {errors.apartmentName && (
                        <p id="apartmentName-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          {errors.apartmentName}
                        </p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium mb-2 text-charcoal-700">
                          City <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          autoComplete="address-level2"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.city}
                          aria-describedby={errors.city ? 'city-error' : undefined}
                          value={formData.city}
                          onChange={handleChange}
                          className={`input-base ${errors.city ? 'input-error' : ''}`}
                          placeholder="Bangalore"
                        />
                        {errors.city && (
                          <p id="city-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            {errors.city}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium mb-2 text-charcoal-700">
                          State <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="state"
                          name="state"
                          autoComplete="address-level1"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.state}
                          aria-describedby={errors.state ? 'state-error' : undefined}
                          value={formData.state}
                          onChange={handleChange}
                          className={`input-base ${errors.state ? 'input-error' : ''}`}
                        >
                          <option value="">Select state</option>
                          {states.map((state) => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                        {errors.state && (
                          <p id="state-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            {errors.state}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="numberOfFlats" className="block text-sm font-medium mb-2 text-charcoal-700">
                          Number of Units <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <select
                          id="numberOfFlats"
                          name="numberOfFlats"
                          autoComplete="off"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.numberOfFlats}
                          aria-describedby={errors.numberOfFlats ? 'numberOfFlats-error' : undefined}
                          value={formData.numberOfFlats}
                          onChange={handleChange}
                          className={`input-base ${errors.numberOfFlats ? 'input-error' : ''}`}
                        >
                          <option value="">Select range</option>
                          {flatRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                        {errors.numberOfFlats && (
                          <p id="numberOfFlats-error" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                            {errors.numberOfFlats}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium mb-2 text-charcoal-700">
                          Preferred Demo Date
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          autoComplete="off"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="input-base"
                        />
                      </div>
                    </div>

                    {error && (
                      <div
                        className="flex items-center gap-2 bg-red-50 text-red-600 rounded-lg p-3 text-sm"
                        role="alert"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-base py-4"
                    >
                      {loading ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
                          <span>Scheduling…</span>
                        </>
                      ) : (
                        <>
                          Schedule My Free Demo
                          <ArrowRight className="w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-center text-charcoal-500">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>
                      {' '}and{' '}
                      <Link to="/terms" className="text-primary-600 hover:underline">Terms of Service</Link>.
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
