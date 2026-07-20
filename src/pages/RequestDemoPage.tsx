import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Loader2, AlertCircle, Sparkles, Clock, Users, BarChart3 } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import { supabase } from '../lib/supabase';

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
  'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
  'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand',
  'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh',
];

const benefits = [
  { icon: Clock, title: '30-minute personalized walkthrough', description: 'We tailor the demo to your community size, structure, and pain points.' },
  { icon: Users, title: 'Bring your whole committee', description: 'Invite committee members, facility managers, and security leads to the call.' },
  { icon: BarChart3, title: 'See ROI before you commit', description: 'We\'ll show you exactly how much time and money AiraNexus saves your society.' },
];

const avatars = [220453, 415829, 7640, 1043471];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function RequestDemoPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      apartment_name: String(data.get('apartmentName') ?? ''),
      city: String(data.get('city') ?? ''),
      state: String(data.get('state') ?? ''),
      number_of_flats: Number(data.get('numberOfFlats') ?? 0),
      preferred_date: String(data.get('preferredDate') ?? ''),
    };
    try {
      const { error } = await supabase.from('demo_requests').insert(payload);
      if (error) throw error;
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <SEO
        title="Request a Demo — See AiraNexus in action"
        description="Book a personalized demo of AiraNexus and see how it transforms your community management."
        canonical="https://airanexus.com/request-demo"
      />

      <section className="bg-hero-gradient pb-16 pt-32 sm:pt-36">
        <div className="container-custom">
          <SectionHeading
            badge="Book a demo"
            title="See AiraNexus in 30 minutes"
            description="Get a personalized walkthrough of the platform tailored to your community. No pressure, no commitment."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Benefits */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {benefits.map((b) => (
                  <div key={b.title} className="card flex items-start gap-4">
                    <div className="icon-circle">
                      <b.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-charcoal-900">{b.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-charcoal-600">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 card">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {avatars.map((id) => (
                      <img
                        key={id}
                        src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2`}
                        alt="Happy customer"
                        loading="lazy"
                        decoding="async"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Sparkles key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="mt-0.5 text-2xs text-charcoal-600">
                      Trusted by 500+ communities across India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card"
              >
                <form onSubmit={onSubmit} className="space-y-5" aria-label="Demo request form">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-800">
                        Full name
                      </label>
                      <input id="name" name="name" required className="input-base mt-1.5" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-800">
                        Work email
                      </label>
                      <input id="email" name="email" type="email" required className="input-base mt-1.5" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal-800">
                        Phone
                      </label>
                      <input id="phone" name="phone" type="tel" required className="input-base mt-1.5" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label htmlFor="apartmentName" className="block text-sm font-medium text-charcoal-800">
                        Apartment / Society name
                      </label>
                      <input id="apartmentName" name="apartmentName" required className="input-base mt-1.5" placeholder="Greenfield Residency" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-charcoal-800">
                        City
                      </label>
                      <input id="city" name="city" required className="input-base mt-1.5" placeholder="Bengaluru" />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-charcoal-800">
                        State
                      </label>
                      <select id="state" name="state" required defaultValue="" className="input-base mt-1.5">
                        <option value="" disabled>Select state</option>
                        {indianStates.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="numberOfFlats" className="block text-sm font-medium text-charcoal-800">
                        Number of flats
                      </label>
                      <input id="numberOfFlats" name="numberOfFlats" type="number" min={1} required className="input-base mt-1.5" placeholder="200" />
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-charcoal-800">
                        Preferred date
                      </label>
                      <input id="preferredDate" name="preferredDate" type="date" className="input-base mt-1.5" />
                    </div>
                  </div>

                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Booking...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        Book my demo
                      </>
                    )}
                  </button>

                  <div aria-live="polite">
                    {status === 'success' && (
                      <p className="flex items-center gap-2 text-sm font-medium text-greenish-700">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        Demo requested! We&apos;ll email you a calendar invite within one business day.
                      </p>
                    )}
                    {status === 'error' && (
                      <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                        <AlertCircle className="h-4 w-4" aria-hidden="true" />
                        {errorMsg}
                      </p>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
