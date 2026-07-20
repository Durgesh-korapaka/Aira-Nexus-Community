import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Search, Tag } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/ui/SectionHeading'

interface Post {
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string
  slug: string
}

const CATEGORIES = ['All', 'Billing', 'Operations', 'Security', 'Product', 'Community']

const POSTS: Post[] = [
  {
    title: 'How to reduce maintenance defaulters by 40%',
    excerpt: 'A practical playbook for treasurers: reminders, late-fee policies, and the psychology of timely payments.',
    category: 'Billing',
    date: 'Mar 12, 2025',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'reduce-maintenance-defaulters',
  },
  {
    title: 'The committee’s guide to AGM-ready financial reports',
    excerpt: 'Everything you need to prepare a transparent, audit-ready annual report in under an hour.',
    category: 'Operations',
    date: 'Mar 4, 2025',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'agm-financial-reports',
  },
  {
    title: 'Visitor management: from logbooks to QR passes',
    excerpt: 'Why paper visitor logs fail and how digital passes transform gate security without friction.',
    category: 'Security',
    date: 'Feb 24, 2025',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/8018847/pexels-photo-8018847.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'visitor-management-qr-passes',
  },
  {
    title: 'Introducing WhatsApp-native notices in AiraNexus',
    excerpt: 'Send notices that residents actually read — with read receipts, pinning, and category filters.',
    category: 'Product',
    date: 'Feb 10, 2025',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'whatsapp-native-notices',
  },
  {
    title: 'Building a culture of participation in gated communities',
    excerpt: 'Practical ways to turn passive residents into engaged community members using polls, events, and transparency.',
    category: 'Community',
    date: 'Jan 28, 2025',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'culture-of-participation',
  },
  {
    title: 'Amenity booking: stop the double-bookings for good',
    excerpt: 'How conflict-free calendars and fair-use policies keep your gym, pool, and clubhouse running smoothly.',
    category: 'Operations',
    date: 'Jan 15, 2025',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/1954527/pexels-photo-1954527.jpeg?auto=compress&cs=tinysrgb&w=800',
    slug: 'amenity-booking',
  },
]

export default function BlogPage({ _darkMode = false }: { _darkMode?: boolean }) {
  void _darkMode
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const featured = POSTS[0]
  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const matchesCat = category === 'All' || p.category === category
      const matchesQuery =
        query.trim() === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase())
      return matchesCat && matchesQuery
    })
  }, [query, category])

  return (
    <>
      <SEO
        title="Blog — Community management insights"
        description="The AiraNexus blog: practical guides on billing, operations, security, and building thriving residential communities."
        path="/blog"
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
            <span className="badge-primary">Blog</span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl md:leading-[1.05] text-balance">
              Insights for <span className="text-gradient">community leaders</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-charcoal-600 text-pretty">
              Practical guides on billing, operations, security, and building thriving communities.
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-md">
              <label htmlFor="blog-search" className="sr-only">Search articles</label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" aria-hidden="true" />
                <input
                  id="blog-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search articles…"
                  className="input-base pl-11"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category pills */}
      <section className="border-b border-charcoal-100 bg-white">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  category === c
                    ? 'bg-primary-500 text-white'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
                aria-pressed={category === c}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {category === 'All' && query.trim() === '' && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionHeading
              badge="Featured"
              badgeVariant="lime"
              title="Latest from the blog"
              align="left"
            />
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center"
            >
              <div className="overflow-hidden rounded-3xl border border-charcoal-100 bg-white shadow-card">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div>
                <span className="badge-primary"><Tag className="h-3 w-3" aria-hidden="true" /> {featured.category}</span>
                <h2 className="mt-4 text-2xl font-bold text-charcoal-900 sm:text-3xl text-balance">{featured.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-charcoal-600 text-pretty">{featured.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-charcoal-500">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" aria-hidden="true" /> {featured.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" aria-hidden="true" /> {featured.readTime} read</span>
                </div>
                <Link to={`/blog/${featured.slug}`} className="btn-link mt-6 text-base">
                  Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <SectionHeading
            badge={category === 'All' ? 'All articles' : category}
            badgeVariant="cyan"
            title={query ? `Results for "${query}"` : 'Recent articles'}
            align="left"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: 'easeOut' }}
                className="card-hover group flex flex-col overflow-hidden p-0"
              >
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="badge-primary self-start"><Tag className="h-3 w-3" aria-hidden="true" /> {p.category}</span>
                  <h3 className="mt-3 text-lg font-semibold text-charcoal-900 line-clamp-2">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600 line-clamp-3 text-pretty">{p.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-charcoal-500">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" aria-hidden="true" /> {p.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" aria-hidden="true" /> {p.readTime}</span>
                  </div>
                  <Link to={`/blog/${p.slug}`} className="btn-link mt-4">
                    Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-10 text-center text-charcoal-500">No articles found. Try a different search or category.</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl rounded-3xl border border-charcoal-100 bg-charcoal-50 p-8 text-center shadow-soft sm:p-12">
            <h2 className="text-2xl font-bold text-charcoal-900 sm:text-3xl">Get the newsletter</h2>
            <p className="mt-3 text-base text-charcoal-600 text-pretty">
              Monthly insights on community management. No spam, unsubscribe anytime.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="blog-newsletter" className="sr-only">Email address</label>
              <input id="blog-newsletter" type="email" required placeholder="you@community.com" className="input-base" />
              <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
