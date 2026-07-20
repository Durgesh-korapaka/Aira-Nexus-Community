import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
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

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@airanexus.com', href: 'mailto:hello@airanexus.com' },
  { icon: Phone, label: 'Phone', value: '+91 80 0000 0000', href: 'tel:+918000000000' },
  { icon: MapPin, label: 'Office', value: 'Indiranagar, Bengaluru, Karnataka 560038', href: undefined },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage({ _darkMode }: { _darkMode?: boolean }) {
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
      message: String(data.get('message') ?? ''),
    };
    try {
      const { error } = await supabase.from('contact_submissions').insert(payload);
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
        title="Contact Us — Talk to the AiraNexus team"
        description="Get in touch with AiraNexus for a demo, support, or partnership. We're here to help your community thrive."
        canonical="https://airanexus.com/contact"
      />

      <section className="bg-hero-gradient pb-16 pt-32 sm:pt-36">
        <div className="container-custom">
          <SectionHeading
            badge="Contact"
            title="Let's talk about your community"
            description="Whether you want a demo, have a question, or need support — we're here and ready to help."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Contact info */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <div key={c.label} className="card flex items-start gap-4">
                    <div className="icon-circle">
                      <c.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-2xs font-semibold uppercase tracking-wide text-charcoal-500">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a href={c.href} className="mt-1 block text-sm font-medium text-charcoal-900 hover:text-primary-600">
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-medium text-charcoal-900">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
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
                <form onSubmit={onSubmit} className="space-y-5" aria-label="Contact form">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal-800">
                        Full name
                      </label>
                      <input id="name" name="name" required className="input-base mt-1.5" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal-800">
                        Email
                      </label>
                      <input id="email" name="email" type="email" required className="input-base mt-1.5" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal-800">
                        Phone
                      </label>
                      <input id="phone" name="phone" type="tel" className="input-base mt-1.5" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label htmlFor="apartmentName" className="block text-sm font-medium text-charcoal-800">
                        Apartment / Society name
                      </label>
                      <input id="apartmentName" name="apartmentName" className="input-base mt-1.5" placeholder="Greenfield Residency" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-charcoal-800">
                        City
                      </label>
                      <input id="city" name="city" className="input-base mt-1.5" placeholder="Bengaluru" />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-charcoal-800">
                        State
                      </label>
                      <select id="state" name="state" defaultValue="" className="input-base mt-1.5">
                        <option value="" disabled>Select state</option>
                        {indianStates.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal-800">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="input-base mt-1.5 resize-none"
                      placeholder="Tell us about your community and what you need..."
                    />
                  </div>

                  <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        Send message
                      </>
                    )}
                  </button>

                  <div aria-live="polite">
                    {status === 'success' && (
                      <p className="flex items-center gap-2 text-sm font-medium text-greenish-700">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        Thanks! We&apos;ll get back to you within one business day.
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
