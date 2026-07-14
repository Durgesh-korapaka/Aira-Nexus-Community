import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, AlertCircle, CheckCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/SEO';

interface LoginPageProps {
  darkMode: boolean;
}

type Mode = 'signin' | 'signup';

export default function LoginPage({ darkMode: _darkMode }: LoginPageProps) {
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState<Mode>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const switchMode = (next: Mode) => {
    if (next === mode) return;
    setMode(next);
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (mode === 'signup') {
      const { error } = await signUp(email, password);
      if (error) {
        setError(error);
      } else {
        setSuccess('Account created! You are now signed in.');
        setTimeout(() => navigate('/'), 1500);
      }
    } else {
      const { error } = await signIn(email, password);
      if (error) {
        setError(error);
      } else {
        navigate('/');
      }
    }
    setLoading(false);
  };

  const heading = mode === 'signin' ? 'Welcome back' : 'Create your account';
  const subheading =
    mode === 'signin'
      ? 'Sign in to manage your community with AiraNexus.'
      : 'Join AiraNexus and transform your community today.';

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-mesh bg-greenish-50 px-4 py-16 sm:py-24 overflow-hidden">
      <SEO
        title="Login — AiraNexus"
        description="Sign in to your AiraNexus community management account, or create a new account to get started."
        path="/login"
      />

      {/* Decorative blobs */}
      <div className="blob w-[480px] h-[480px] bg-primary-400 -top-32 -right-24 animate-float" aria-hidden="true" />
      <div className="blob w-[380px] h-[380px] bg-lime-400 -bottom-24 -left-24 animate-float-slow" aria-hidden="true" />
      <div className="blob w-[300px] h-[300px] bg-cyan-300 top-1/3 left-1/2 animate-float-delayed opacity-10" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="card-glass p-6 sm:p-8 md:p-10">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center mb-8" aria-label="AiraNexus home">
            <img
              src="/airanexus-logo.png"
              alt="AiraNexus"
              width="180"
              height="40"
              loading="lazy"
              decoding="async"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Heading */}
          <div className="text-center mb-7">
            <h1 className="text-2xl sm:text-3xl font-bold text-charcoal-900 tracking-tight text-balance">
              {heading}
            </h1>
            <p className="mt-2 text-sm text-charcoal-500 text-pretty">
              {subheading}
            </p>
          </div>

          {/* Tab switcher */}
          <div
            role="tablist"
            aria-label="Authentication mode"
            className="relative flex rounded-2xl p-1 bg-charcoal-100/70 mb-6"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'signin'}
              aria-controls="signin-panel"
              id="signin-tab"
              onClick={() => switchMode('signin')}
              className={`relative flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                mode === 'signin' ? 'text-primary-700' : 'text-charcoal-500 hover:text-charcoal-700'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'signup'}
              aria-controls="signup-panel"
              id="signup-tab"
              onClick={() => switchMode('signup')}
              className={`relative flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                mode === 'signup' ? 'text-primary-700' : 'text-charcoal-500 hover:text-charcoal-700'
              }`}
            >
              Sign Up
            </button>
            {/* Sliding indicator */}
            <motion.div
              layout
              className="absolute top-1 bottom-1 rounded-xl bg-white shadow-soft"
              style={{ width: 'calc(50% - 0.25rem)' }}
              animate={{ left: mode === 'signin' ? '0.25rem' : 'calc(50% + 0rem)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              aria-hidden="true"
            />
          </div>

          {/* Error / success messages */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                key="error"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-2 bg-red-50 text-red-600 rounded-xl p-3 mb-4 text-sm border border-red-100"
                role="alert"
                aria-live="assertive"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{error}</span>
              </motion.div>
            )}
            {success && (
              <motion.div
                key="success"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-2 bg-lime-50 text-lime-700 rounded-xl p-3 mb-4 text-sm border border-lime-100"
                role="status"
                aria-live="polite"
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{success}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <AnimatePresence mode="popLayout" initial={false}>
              {mode === 'signup' && (
                <motion.div
                  key="name-field"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-charcoal-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400 pointer-events-none" aria-hidden="true" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="input-base pl-10"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-charcoal-700">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400 pointer-events-none" aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input-base pl-10"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1.5 text-charcoal-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400 pointer-events-none" aria-hidden="true" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  minLength={6}
                  autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-base pl-10 pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-charcoal-400 hover:text-charcoal-600 hover:bg-charcoal-100 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" aria-hidden="true" /> : <Eye className="w-4 h-4" aria-hidden="true" />}
                </button>
              </div>
            </div>

            {mode === 'signin' && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-3.5 text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  Please wait…
                </>
              ) : (
                <>
                  {mode === 'signin' ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </>
              )}
            </button>
          </form>

          {/* Toggle link */}
          <p className="text-center text-sm mt-6 text-charcoal-500">
            {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => switchMode(mode === 'signin' ? 'signup' : 'signin')}
              className="font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              {mode === 'signin' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        {/* Trust indicator */}
        <p className="text-center text-xs text-charcoal-400 mt-6 flex items-center justify-center gap-1.5">
          <CheckCircle className="w-3.5 h-3.5 text-primary-500" aria-hidden="true" />
          Secured with bank-grade encryption
        </p>
      </motion.div>
    </div>
  );
}
