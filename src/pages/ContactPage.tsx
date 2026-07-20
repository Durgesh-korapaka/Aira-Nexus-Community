import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'

const INDIAN_STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
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

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  apartmentName: '',
  city: '',
  state: '',
  message: '',
}

export default function ContactPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        apartment_name: form.apartmentName,
        city: form.city,
        state: form.state,
        message: form.message,
      })
      if (error) throw error
      setStatus('success')
      setForm(INITIAL)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <>
      <SEO
        title="Contact — Talk to the AiraNexus team"
        description="Get in touch with AiraNexus. Email, phone, or send us a message and we'll respond within one business day."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient pt-28 lg:pt-36">
        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="badge-primary">Contact</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              Let’s talk about <span className="text-gradient">your community</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Questions about pricing, onboarding, or a custom setup? We typically respond within one
              business day.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-charcoal-900 sm:text-3xl">Get in touch</h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-600 text-pretty">
                Prefer a direct line? Reach us through any of the channels below.
              </p>

              <ul className="mt-8 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="icon-circle-lg"><Mail className="h-6 w-6" aria-hidden="true" /></span>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">Email</p>
                    <a href="mailto:hello@airanexus.com" className="text-sm text-charcoal-600 transition-colors hover:text-primary-600">
                      hello@airanexus.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="icon-circle-lg"><Phone className="h-6 w-6" aria-hidden="true" /></span>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">Phone</p>
                    <a href="tel:+918045678900" className="text-sm text-charcoal-600 transition-colors hover:text-primary-600">
                      +91 80 4567 8900
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="icon-circle-lg"><MapPin className="h-6 w-6" aria-hidden="true" /></span>
                  <div>
                    <p className="text-sm font-semibold text-charcoal-900">Office</p>
                    <p className="text-sm text-charcoal-600">Indiranagar, Bangalore, Karnataka 560001, India</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="card">
                {status === 'success' ? (
                  <div className="flex flex-col items-center py-10 text-center" role="status" aria-live="polite">
                    <CheckCircle2 className="h-12 w-12 text-green-600" aria-hidden="true" />
                    <h3 className="mt-4 text-xl font-semibold text-charcoal-900">Message sent!</h3>
                    <p className="mt-2 text-sm text-charcoal-600 text-pretty">
                      Thanks for reaching out. We’ll get back to you within one business day.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-charcoal-700">Full name</label>
                        <input id="name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} className="input-base mt-1.5" placeholder="Priya Sharma" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal-700">Email</label>
                        <input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="input-base mt-1.5" placeholder="priya@community.com" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700">Phone</label>
                        <input id="phone" type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} className="input-base mt-1.5" placeholder="+91 98765 43210" />
                      </div>
                      <div>
                        <label htmlFor="apartmentName" className="block text-sm font-medium text-charcoal-700">Apartment / community</label>
                        <input id="apartmentName" type="text" required value={form.apartmentName} onChange={(e) => update('apartmentName', e.target.value)} className="input-base mt-1.5" placeholder="Lakeview Residency" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-charcoal-700">City</label>
                        <input id="city" type="text" required value={form.city} onChange={(e) => update('city', e.target.value)} className="input-base mt-1.5" placeholder="Bangalore" />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-charcoal-700">State</label>
                        <select id="state" required value={form.state} onChange={(e) => update('state', e.target.value)} className="input-base mt-1.5">
                          <option value="" disabled>Select a state</option>
                          {INDIAN_STATES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-charcoal-700">Message</label>
                      <textarea id="message" required rows={4} value={form.message} onChange={(e) => update('message', e.target.value)} className="input-base mt-1.5 resize-none" placeholder="Tell us about your community and what you're looking for…" />
                    </div>

                    {status === 'error' && (
                      <div role="alert" aria-live="assertive" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
                      {status === 'loading' ? (
                        <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…</>
                      ) : (
                        <>Send message <Send className="h-4 w-4" aria-hidden="true" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
