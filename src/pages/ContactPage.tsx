import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react'
import SEO from '../components/SEO'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

const indianStates = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana',
  'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
  'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal',
]

interface FormState {
  name: string
  email: string
  phone: string
  apartmentName: string
  city: string
  state: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  apartmentName: '',
  city: '',
  state: '',
  message: '',
}

export default function ContactPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  const [form, setForm] = useState<FormState>(initialForm)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (error) setError(null)
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (isSupabaseConfigured) {
        const { error: insertError } = await supabase.from('contact_submissions').insert({
          name: form.name,
          email: form.email,
          phone: form.phone,
          apartment_name: form.apartmentName,
          city: form.city,
          state: form.state,
          message: form.message,
        })
        if (insertError) throw insertError
      } else {
        await new Promise((r) => setTimeout(r, 800))
      }
      setSuccess(true)
      setForm(initialForm)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact — Talk to the Aira Nexus Team"
        description="Get in touch with Aira Nexus. Whether you have a question, want a demo, or need support, our team is here to help."
        path="/contact"
      />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom pb-12 text-center lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <span className="badge-primary">
              <MessageSquare className="h-3.5 w-3.5" />
              Contact Us
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Let's talk about your <span className="text-gradient">community</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Questions about features, pricing, or onboarding? Fill out the form and we'll get back within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-charcoal-900">Get in touch</h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-600 text-pretty">
                Prefer a direct line? Reach us through any of the channels below — we respond fast.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@airanexus.com', href: 'mailto:hello@airanexus.com' },
                  { icon: Phone, label: 'Phone', value: '+91 80 0000 0000', href: 'tel:+918000000000' },
                  { icon: MapPin, label: 'Office', value: 'Prestige Tech Park, Kadubeesanahalli, Bengaluru, Karnataka 560103' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="icon-circle">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal-900">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-charcoal-600 transition-colors hover:text-primary-600">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-charcoal-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-charcoal-100 bg-charcoal-50/60 p-6">
                <h3 className="text-sm font-semibold text-charcoal-900">Support hours</h3>
                <p className="mt-2 text-sm text-charcoal-600">
                  Monday – Saturday, 9:00 AM – 8:00 PM IST. Emergency support available 24/7 for Enterprise customers.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              {success ? (
                <div className="card flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-greenish-100 text-greenish-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-charcoal-900">Message sent!</h3>
                  <p className="mt-2 text-sm text-charcoal-600">
                    Thanks for reaching out. Our team will get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-ghost mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="card space-y-4" aria-live="polite">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                        Full name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className="input-base"
                        placeholder="Priya Sharma"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className="input-base"
                        placeholder="priya@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        className="input-base"
                        placeholder="+91 90000 00000"
                      />
                    </div>
                    <div>
                      <label htmlFor="apartmentName" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                        Apartment / Society name
                      </label>
                      <input
                        id="apartmentName"
                        type="text"
                        value={form.apartmentName}
                        onChange={(e) => update('apartmentName', e.target.value)}
                        className="input-base"
                        placeholder="Prestige Lakeside"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        value={form.city}
                        onChange={(e) => update('city', e.target.value)}
                        className="input-base"
                        placeholder="Bengaluru"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                        State
                      </label>
                      <select
                        id="state"
                        value={form.state}
                        onChange={(e) => update('state', e.target.value)}
                        className="input-base"
                      >
                        <option value="">Select state</option>
                        {indianStates.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      className="input-base resize-none"
                      placeholder="Tell us about your community and what you're looking for..."
                    />
                  </div>

                  {error && (
                    <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
