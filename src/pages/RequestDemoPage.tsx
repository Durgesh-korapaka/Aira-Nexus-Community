import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, Sparkles, Star, Users } from 'lucide-react'
import SEO from '../components/SEO'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

const indianStates = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana',
  'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
  'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal',
]

const benefits = [
  { icon: Sparkles, title: 'Personalized walkthrough', description: 'We tailor the demo to your community size, structure, and specific pain points.' },
  { icon: Users, title: 'Bring your team', description: 'Invite committee members, managers, and security leads — everyone gets a role-specific view.' },
  { icon: Star, title: 'No commitment', description: 'The demo is free, no credit card required. Decide if Aira Nexus is right for you.' },
  { icon: Calendar, title: 'Flexible scheduling', description: 'Pick a time that works for you — we conduct demos 6 days a week.' },
]

const testimonials = [
  { name: 'Rajesh K.', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2' },
  { name: 'Priya S.', avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2' },
  { name: 'Amit P.', avatar: 'https://images.pexels.com/photos/7640/pexels-photo-7640.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2' },
  { name: 'Sneha R.', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2' },
]

interface FormState {
  name: string
  email: string
  phone: string
  apartmentName: string
  city: string
  state: string
  numberOfFlats: string
  preferredDate: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  apartmentName: '',
  city: '',
  state: '',
  numberOfFlats: '',
  preferredDate: '',
}

export default function RequestDemoPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
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
        const { error: insertError } = await supabase.from('demo_requests').insert({
          name: form.name,
          email: form.email,
          phone: form.phone,
          apartment_name: form.apartmentName,
          city: form.city,
          state: form.state,
          number_of_flats: form.numberOfFlats ? parseInt(form.numberOfFlats, 10) : null,
          preferred_date: form.preferredDate || null,
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
        title="Request a Demo — See Aira Nexus in Action"
        description="Book a personalized demo of Aira Nexus. We'll tailor the walkthrough to your community and show you exactly how the platform fits your needs."
        path="/request-demo"
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
              <Sparkles className="h-3.5 w-3.5" />
              Book a Demo
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              See Aira Nexus <span className="text-gradient">in action</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              A 30-minute personalized walkthrough. We'll show you how Aira Nexus fits your community — no slides, just the real product.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-charcoal-900">What to expect</h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-600 text-pretty">
                A focused, practical session designed around your community's needs.
              </p>
              <div className="mt-8 space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="icon-circle">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal-900">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-charcoal-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-charcoal-100 bg-charcoal-50/60 p-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {testimonials.map((t) => (
                      <img
                        key={t.name}
                        src={t.avatar}
                        alt={t.name}
                        className="h-8 w-8 rounded-full border-2 border-white object-cover"
                        loading="lazy"
                        decoding="async"
                        width="32"
                        height="32"
                      />
                    ))}
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm text-charcoal-600">
                  "The demo was incredibly tailored. They showed us exactly how billing and complaints would work for our 3-tower setup."
                </p>
                <p className="mt-2 text-xs font-semibold text-charcoal-900">— Joined by 500+ communities</p>
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
                  <h3 className="mt-5 text-xl font-semibold text-charcoal-900">Demo requested!</h3>
                  <p className="mt-2 text-sm text-charcoal-600">
                    We've received your request. Our team will reach out within 24 hours to confirm your slot.
                  </p>
                  <button onClick={() => setSuccess(false)} className="btn-ghost mt-6">
                    Request another demo
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
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="numberOfFlats" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                        Number of flats
                      </label>
                      <input
                        id="numberOfFlats"
                        type="number"
                        min="1"
                        value={form.numberOfFlats}
                        onChange={(e) => update('numberOfFlats', e.target.value)}
                        className="input-base"
                        placeholder="180"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                        Preferred date
                      </label>
                      <input
                        id="preferredDate"
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => update('preferredDate', e.target.value)}
                        className="input-base"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                      {error}
                    </p>
                  )}

                  <button type="submit" disabled={loading} className="btn-primary w-full">
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Booking...
                      </>
                    ) : (
                      <>
                        Book My Demo
                        <Calendar className="h-4 w-4" />
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
