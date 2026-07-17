import { useMemo, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Search, Sparkles, TrendingUp } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'

interface BlogPost {
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  featured?: boolean
}

const posts: BlogPost[] = [
  {
    title: 'How to reduce maintenance dues collection time by 60%',
    excerpt: 'A practical, step-by-step playbook for apartment committees to move from 60-day collection cycles to under 20 days — without chasing residents.',
    category: 'Billing',
    author: 'Arjun Mehta',
    date: 'Jan 12, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    title: 'The complete guide to visitor management for gated communities',
    excerpt: 'Everything you need to know about digital visitor passes, guard workflows, and the policies that keep communities secure.',
    category: 'Security',
    author: 'Sneha Reddy',
    date: 'Jan 8, 2025',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: '5 ways AI is transforming apartment management in 2025',
    excerpt: 'From predictive maintenance to smart billing reminders, here are the AI trends reshaping how communities are run.',
    category: 'AI',
    author: 'Vikram Singh',
    date: 'Jan 5, 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'RWA elections: How to run transparent, tamper-proof voting',
    excerpt: "Digital voting eliminates the chaos of paper ballots. Here's how to set it up and keep it fair.",
    category: 'Governance',
    author: 'Ananya Iyer',
    date: 'Dec 28, 2024',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: "Maintenance billing software: A buyer's guide for committees",
    excerpt: 'What to look for, what to avoid, and the questions every vendor should answer before you sign.',
    category: 'Billing',
    author: 'Arjun Mehta',
    date: 'Dec 20, 2024',
    readTime: '10 min read',
    image: 'https://images.pexels.com/photos/669454/pexels-photo-669454.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Why your community needs a digital notice board (and how to set one up)',
    excerpt: "Paper notices get lost. WhatsApp groups get noisy. Here's why a structured notice board works better.",
    category: 'Communication',
    author: 'Sneha Reddy',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

const categories = ['All', 'Billing', 'Security', 'AI', 'Governance', 'Communication']

export default function BlogPage({ darkMode: _darkMode }: { darkMode?: boolean }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p !== featured)

  const filtered = useMemo(() => {
    return rest.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [rest, search, activeCategory])

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <>
      <SEO
        title="Blog — Insights on Community Management"
        description="Expert insights, how-to guides, and best practices for apartment and society management from the Aira Nexus team."
        path="/blog"
      />

      {/* Hero with search */}
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
              Blog
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl text-balance">
              Insights for better <span className="text-gradient">community management</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Practical guides, expert insights, and real-world stories from communities across India.
            </p>
            <div className="mx-auto mt-8 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles..."
                  aria-label="Search blog posts"
                  className="w-full rounded-xl border border-charcoal-200 bg-white py-3 pl-11 pr-4 text-sm shadow-soft focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-charcoal-100 bg-white">
        <div className="container-custom flex flex-wrap items-center gap-2 py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-primary-500 text-white shadow-teal'
                  : 'bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      {activeCategory === 'All' && !search && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="grid items-center gap-8 rounded-3xl border border-charcoal-100 bg-white p-6 shadow-card lg:grid-cols-2 lg:p-8"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="500"
                />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="badge-primary">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Featured
                  </span>
                  <span className="badge-neutral">{featured.category}</span>
                </div>
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-charcoal-900 sm:text-3xl text-balance">
                  {featured.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-charcoal-600 text-pretty">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-4 text-xs text-charcoal-500">
                  <span className="font-semibold text-charcoal-700">{featured.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{featured.readTime}</span>
                </div>
                <a href="#" className="btn-link mt-6">
                  Read article
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog grid */}
      <section className="pb-20 lg:pb-28">
        <div className="container-custom">
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                  className="card-hover group flex flex-col"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="500"
                    />
                  </div>
                  <div className="mt-4 flex-1">
                    <span className="badge-neutral">{post.category}</span>
                    <h3 className="mt-3 text-lg font-semibold text-charcoal-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-3 border-t border-charcoal-100 pt-4 text-xs text-charcoal-500">
                    <span className="font-semibold text-charcoal-700">{post.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-base text-charcoal-500">No articles found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-charcoal-50/40">
        <div className="container-custom">
          <SectionHeading
            badge="Newsletter"
            badgeVariant="lime"
            title={<>Get the best of Aira Nexus <span className="text-gradient">in your inbox</span></>}
            description="One email every two weeks. No spam, just practical community management insights."
          />
          <form onSubmit={onSubscribe} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address"
              className="input-base"
            />
            <button type="submit" className="btn-primary shrink-0">
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          {subscribed && (
            <p className="mt-3 text-center text-sm text-greenish-600">✓ Thanks for subscribing!</p>
          )}
        </div>
      </section>
    </>
  )
}
