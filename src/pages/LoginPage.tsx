import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'
import { useAuth } from '../context/AuthContext'

type Mode = 'signin' | 'signup'

export default function LoginPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  const { signIn, signUp } = useAuth()
  const navigate = useNavigate()
  const [mode, setMode] = useState<Mode>('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    try {
      if (mode === 'signin') {
        const { error: err } = await signIn(email, password)
        if (err) throw new Error(err)
        navigate('/')
      } else {
        const { error: err } = await signUp(email, password, name)
        if (err) throw new Error(err)
        setSuccess('Account created! Check your email to confirm your registration.')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Sign In — Aira Nexus"
        description="Sign in to your Aira Nexus account or create a new one to start managing your community."
        path="/login"
      />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-mesh px-5 py-20">
        <div className="blob left-1/4 top-10 h-72 w-72 bg-primary-200/40" />
        <div className="blob right-10 bottom-10 h-80 w-80 bg-cyan-200/30" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-md"
        >
          <div className="card-glass rounded-3xl border-charcoal-100/60 bg-white/80 p-8 shadow-elevated backdrop-blur-xl">
            <Link to="/" aria-label="Aira Nexus home" className="flex justify-center">
              <img
                src="/airanexus-logo.svg"
                alt="Aira Nexus Logo"
                className="object-contain h-9 w-auto"
                width="180"
                height="36"
              />
            </Link>

            {/* Tab switcher */}
            <div className="mt-8 flex rounded-xl border border-charcoal-200 bg-charcoal-50 p-1">
              {(['signin', 'signup'] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setMode(m)
                    setError(null)
                    setSuccess(null)
                  }}
                  className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                    mode === m ? 'bg-white text-primary-700 shadow-soft' : 'text-charcoal-500'
                  }`}
                >
                  {m === 'signin' ? 'Sign In' : 'Sign Up'}
                </button>
              ))}
            </div>

            {success && (
              <div className="mt-5 flex items-start gap-2 rounded-xl bg-greenish-50 px-4 py-3 text-sm text-greenish-700" role="alert">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{success}</span>
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-5 space-y-4" aria-live="polite">
              {mode === 'signup' && (
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                    Full name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-base pl-10"
                      placeholder="Priya Sharma"
                    />
                  </div>
                </div>
              )}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-base pl-10"
                    placeholder="priya@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-charcoal-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-base pl-10 pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal-400 transition-colors hover:text-charcoal-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
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
                    {mode === 'signin' ? 'Signing in...' : 'Creating account...'}
                  </>
                ) : (
                  mode === 'signin' ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-charcoal-500">
              {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
              <button
                onClick={() => {
                  setMode(mode === 'signin' ? 'signup' : 'signin')
                  setError(null)
                  setSuccess(null)
                }}
                className="font-semibold text-primary-600 transition-colors hover:text-primary-700"
              >
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-charcoal-400">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="underline hover:text-charcoal-600">Terms</Link> and{' '}
            <Link to="/privacy" className="underline hover:text-charcoal-600">Privacy Policy</Link>.
          </p>
        </motion.div>
      </section>
    </>
  )
}
