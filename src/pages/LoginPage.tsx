import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, Loader2, Lock, Mail, User } from 'lucide-react'
import SEO from '../components/SEO'
import { useAuth } from '../context/AuthContext'

export default function LoginPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    const result = mode === 'signin'
      ? await signIn(email, password)
      : await signUp(email, password, name)
    if (result.error) {
      setStatus('error')
      setErrorMsg(result.error)
    } else {
      setStatus('success')
      setTimeout(() => navigate('/'), 1200)
    }
  }

  return (
    <>
      <SEO title="Login — Sign in to AiraNexus" description="Sign in or create your AiraNexus account." path="/login" />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-mesh px-5 py-24">
        <div className="blob -left-20 top-10 h-72 w-72 bg-primary-200/30" aria-hidden="true" />
        <div className="blob -right-20 bottom-10 h-80 w-80 bg-cyan-200/20" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="card-glass relative w-full max-w-md p-8"
        >
          <Link to="/" aria-label="Aira Nexus home" className="inline-block">
            <img
              src="/airanexus-logo.svg"
              alt="Aira Nexus Logo"
              className="object-contain w-auto h-[32px]"
              width="180"
              height="36"
            />
          </Link>

          <h1 className="mt-6 text-2xl font-bold text-charcoal-900">
            {mode === 'signin' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="mt-1.5 text-sm text-charcoal-600">
            {mode === 'signin'
              ? 'Sign in to manage your community.'
              : 'Join AiraNexus in under a minute.'}
          </p>

          {/* Tab switcher */}
          <div className="mt-6 inline-flex w-full items-center rounded-full border border-charcoal-200 bg-white p-1">
            {(['signin', 'signup'] as const).map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); setStatus('idle'); setErrorMsg('') }}
                className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  mode === m ? 'bg-primary-500 text-white' : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
                aria-pressed={mode === m}
              >
                {m === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          {status === 'success' ? (
            <div className="mt-6 flex flex-col items-center py-6 text-center" role="status" aria-live="polite">
              <CheckCircle2 className="h-10 w-10 text-green-600" aria-hidden="true" />
              <p className="mt-3 text-sm font-medium text-charcoal-900">
                {mode === 'signin' ? 'Signed in!' : 'Account created!'} Redirecting…
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {mode === 'signup' && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700">Full name</label>
                  <div className="relative mt-1.5">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" aria-hidden="true" />
                    <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="input-base pl-10" placeholder="Priya Sharma" />
                  </div>
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal-700">Email</label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" aria-hidden="true" />
                  <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="input-base pl-10" placeholder="priya@community.com" />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-charcoal-700">Password</label>
                <div className="relative mt-1.5">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" aria-hidden="true" />
                  <input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="input-base pl-10" placeholder="••••••••" />
                </div>
              </div>

              {status === 'error' && (
                <div role="alert" aria-live="assertive" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
                {status === 'loading' ? (
                  <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Please wait…</>
                ) : (
                  mode === 'signin' ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>
          )}

          <p className="mt-6 text-center text-xs text-charcoal-500">
            By continuing you agree to our{' '}
            <Link to="/terms" className="font-medium text-primary-600 hover:text-primary-700">Terms</Link> and{' '}
            <Link to="/privacy" className="font-medium text-primary-600 hover:text-primary-700">Privacy Policy</Link>.
          </p>
        </motion.div>
      </section>
    </>
  )
}
