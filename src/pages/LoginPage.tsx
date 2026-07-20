import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Loader2, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { useAuth } from '../context/AuthContext';

type Mode = 'signin' | 'signup';

export default function LoginPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<Mode>('signin');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    const data = new FormData(e.currentTarget);
    const email = String(data.get('email') ?? '');
    const password = String(data.get('password') ?? '');
    const result = mode === 'signin' ? await signIn(email, password) : await signUp(email, password);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else if (mode === 'signup') {
      setSuccess('Account created! Check your email for a confirmation link.');
    } else {
      setSuccess('Signed in successfully.');
    }
  };

  return (
    <>
      <SEO
        title="Sign In — AiraNexus"
        description="Sign in to your AiraNexus account or create a new one to manage your community."
        canonical="https://airanexus.com/login"
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-gradient px-4 py-28">
        <div className="blob -left-20 top-20 h-72 w-72 bg-primary-200/40" aria-hidden="true" />
        <div className="blob -right-16 bottom-10 h-80 w-80 bg-lime-200/30" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md"
        >
          <div className="mb-8 text-center">
            <Link to="/" aria-label="Aira Nexus home" className="inline-block">
              <img
                src="/airanexus-logo.svg"
                alt="Aira Nexus Logo"
                className="mx-auto object-contain w-auto h-[36px]"
                width="180"
                height="36"
              />
            </Link>
          </div>

          <div className="card-glass">
            {/* Tab switcher */}
            <div className="mb-6 inline-flex w-full items-center gap-1 rounded-full bg-charcoal-100/80 p-1">
              <button
                onClick={() => { setMode('signin'); setError(''); setSuccess(''); }}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  mode === 'signin' ? 'bg-white text-charcoal-900 shadow-soft' : 'text-charcoal-600'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => { setMode('signup'); setError(''); setSuccess(''); }}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  mode === 'signup' ? 'bg-white text-charcoal-900 shadow-soft' : 'text-charcoal-600'
                }`}
              >
                Sign Up
              </button>
            </div>

            <h1 className="font-display text-xl font-bold text-charcoal-900">
              {mode === 'signin' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="mt-1 text-sm text-charcoal-600">
              {mode === 'signin' ? 'Sign in to manage your community.' : 'Start your 14-day free trial. No credit card required.'}
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4" aria-label={mode === 'signin' ? 'Sign in form' : 'Sign up form'}>
              {mode === 'signup' && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-800">Full name</label>
                  <div className="relative mt-1.5">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" aria-hidden="true" />
                    <input id="name" name="name" required className="input-base pl-11" placeholder="Your name" />
                  </div>
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal-800">Email</label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" aria-hidden="true" />
                  <input id="email" name="email" type="email" required className="input-base pl-11" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-charcoal-800">Password</label>
                <div className="relative mt-1.5">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" aria-hidden="true" />
                  <input id="password" name="password" type="password" required minLength={6} className="input-base pl-11" placeholder="••••••••" />
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Please wait...
                  </>
                ) : (
                  <>
                    {mode === 'signin' ? 'Sign in' : 'Create account'}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>

              <div aria-live="polite">
                {error && (
                  <p className="flex items-center gap-2 text-sm font-medium text-red-600">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {error}
                  </p>
                )}
                {success && (
                  <p className="flex items-center gap-2 text-sm font-medium text-greenish-700">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    {success}
                  </p>
                )}
              </div>
            </form>

            <p className="mt-6 text-center text-2xs text-charcoal-500">
              {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); setSuccess(''); }}
                className="font-semibold text-primary-600 hover:text-primary-700"
              >
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
