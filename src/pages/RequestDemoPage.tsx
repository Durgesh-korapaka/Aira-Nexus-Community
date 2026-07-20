import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Loader2, Send, Sparkles, Users } from 'lucide-react'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'

const INDIAN_STATES = [
  'Andhra Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Odisha', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
]

const AVATARS = [220453, 415829, 7640, 1043471]

const BENEFITS = [
  { icon: Clock, title: '30-minute walkthrough', description: 'A live, tailored demo of the modules that matter most to your community.' },
  { icon: Users, title: 'Bring your committee', description: 'Invite your treasurer, secretary, and manager — we’ll address everyone’s questions.' },
  { icon: Sparkles, title: 'Custom setup plan', description: 'Leave with a concrete onboarding plan and timeline for your community.' },
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

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  apartmentName: '',
  city: '',
  state: '',
  numberOfFlats: '',
  preferredDate: '',
}

export default function RequestDemoPage({ _darkMode = false }: { _darkMode?: boolean }) {
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
      const { error } = await supabase.from('demo_requests').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        apartment_name: form.apartmentName,
        city: form.city,
        state: form.state,
        number_of_flats: Number(form.numberOfFlats) || null,
        preferred_date: form.preferredDate || null,
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
        title="Request a Demo — See AiraNexus in action"
        description="Book a 30-minute demo of AiraNexus tailored to your community. Bring your committee and leave with a concrete onboarding plan."
        path="/request-demo"
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
            <span className="badge-primary">Request Demo</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              See AiraNexus <span className="text-gradient">in action</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Book a 30-minute, no-pressure demo tailored to your community’s needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-charcoal-900 sm:text-3xl">What you’ll get</h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-600 text-pretty">
                A focused, practical session — not a generic sales pitch.
              </p>

              <ul className="mt-8 space-y-6">
                {BENEFITS.map((b) => (
                  <li key={b.title} className="flex items-start gap-4">
                    <span className="icon-circle-lg"><b.icon className="h-6 w-6" aria-hidden="true" /></span>
                    <div>
                      <p className="text-base font-semibold text-charcoal-900">{b.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal-600 text-pretty">{b.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center gap-4 rounded-2xl border border-charcoal-100 bg-charcoal-50 p-5">
                <div className="flex -space-x-3">
                  {AVATARS.map((id) => (
                    <img
                      key={id}
                      src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <p className="text-sm text-charcoal-600">
                  <span className="font-semibold text-charcoal-900">500+ communities</span> have booked a demo this year.
                </p>
              </div>
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
                    <h3 className="mt-4 text-xl font-semibold text-charcoal-900">Demo requested!</h3>
                    <p className="mt-2 text-sm text-charcoal-600 text-pretty">
                      We’ll reach out within one business day to confirm your slot.
                    </p>
                    <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">
                      Request another demo
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
                        <label htmlFor="email" className="block text-sm font-medium text-charcoal-700">Work email</label>
                        <input id="email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} className="input-base mt-1.5" placeholder="priya@community.com" />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700">Phone</label>
                        <input id="phone" type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)} className="input-base mt-1.5" placeholder="+91 98765 43210" />
                      </div>
                      <div>
                        <label htmlFor="apartmentName" className="block text-sm font-medium text-charcoal-700">Community name</label>
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
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="numberOfFlats" className="block text-sm font-medium text-charcoal-700">Number of flats</label>
                        <input id="numberOfFlats" type="number" min={1} required value={form.numberOfFlats} onChange={(e) => update('numberOfFlats', e.target.value)} className="input-base mt-1.5" placeholder="120" />
                      </div>
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-charcoal-700">Preferred date</label>
                        <input id="preferredDate" type="date" value={form.preferredDate} onChange={(e) => update('preferredDate', e.target.value)} className="input-base mt-1.5" />
                      </div>
                    </div>

                    {status === 'error' && (
                      <div role="alert" aria-live="assertive" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {errorMsg}
                      </div>
                    )}

                    <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
                      {status === 'loading' ? (
                        <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Requesting…</>
                      ) : (
                        <>Request demo <Send className="h-4 w-4" aria-hidden="true" /></>
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
