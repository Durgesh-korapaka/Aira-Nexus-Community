import { useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Send, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/ui/SectionHeading';
import CTABanner from '../components/ui/CTABanner';

interface Post {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    title: 'How Greenfield Residency cut collection time by 60%',
    excerpt: 'A case study on how a 300-flat society in Bengaluru transformed its maintenance collection process with AiraNexus.',
    category: 'Case Studies',
    date: '2024-09-15',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    title: '5 ways to reduce maintenance defaulters in your society',
    excerpt: 'Practical strategies and automation tips to improve collection rates without alienating residents.',
    category: 'Billing',
    date: '2024-09-02',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'The complete guide to visitor management for gated communities',
    excerpt: 'Everything you need to know about modernizing gate operations with digital visitor passes.',
    category: 'Security',
    date: '2024-08-21',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/3196338/pexels-photo-3196338.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Why your society accounting should move to the cloud',
    excerpt: 'The risks of spreadsheet accounting and how a cloud ledger saves time and prevents fraud.',
    category: 'Accounting',
    date: '2024-08-10',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Resident engagement: building a thriving community',
    excerpt: 'Tips for committees to foster participation, transparency, and a sense of belonging.',
    category: 'Community',
    date: '2024-07-28',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Amenity booking: from chaos to calm',
    excerpt: 'How conflict-free scheduling improves resident satisfaction and reduces committee workload.',
    category: 'Product',
    date: '2024-07-15',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/7651935/pexels-photo-7651935.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const categories = ['All', 'Case Studies', 'Billing', 'Security', 'Accounting', 'Community', 'Product'];

export default function BlogPage({ _darkMode }: { _darkMode?: boolean }) {
  void _darkMode;
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesCat = activeCat === 'All' || p.category === activeCat;
      const q = query.toLowerCase();
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, activeCat]);

  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <>
      <SEO
        title="Blog — Insights from AiraNexus"
        description="Guides, case studies, and best practices for society and apartment management from the AiraNexus team."
        canonical="https://airanexus.com/blog"
      />

      <section className="bg-hero-gradient pb-16 pt-32 sm:pt-36">
        <div className="container-custom">
          <SectionHeading
            badge="Blog"
            title="Insights for better communities"
            description="Guides, case studies, and best practices to help your community run smarter."
          />
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                aria-label="Search articles"
                className="input-base pl-11"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category pills */}
      <section className="border-b border-charcoal-100 bg-white">
        <div className="container-custom py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeCat === cat
                    ? 'bg-primary-500 text-white'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && activeCat === 'All' && !query && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 overflow-hidden rounded-4xl border border-charcoal-100 bg-white shadow-card lg:grid-cols-2"
            >
              <figure className="overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={533}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <div className="flex items-center gap-3 text-2xs text-charcoal-500">
                  <span className="badge-primary">{featured.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" aria-hidden="true" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden="true" />{featured.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-display-sm font-bold tracking-tight text-charcoal-900 text-balance">
                  {featured.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-600">{featured.excerpt}</p>
                <Link to="/blog" className="btn-link mt-6">
                  Read article
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="card-hover group flex flex-col overflow-hidden p-0"
              >
                <figure className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={533}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-2xs text-charcoal-500">
                    <span className="badge-primary">{p.category}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" aria-hidden="true" />{p.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-charcoal-900 line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-600 line-clamp-3">
                    {p.excerpt}
                  </p>
                  <Link to="/blog" className="btn-link mt-4">
                    Read more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-16 text-center text-sm text-charcoal-500">No articles found. Try a different search or category.</p>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-display-sm font-bold tracking-tight text-charcoal-900">
              Get our best insights
            </h2>
            <p className="mt-3 text-sm text-charcoal-600">
              Subscribe to our newsletter for community management tips and product updates.
            </p>
            <form onSubmit={onSubscribe} className="mx-auto mt-6 flex max-w-md gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="input-base"
              />
              <button type="submit" className="btn-primary shrink-0">
                {subscribed ? <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
                <span className="hidden sm:inline">{subscribed ? 'Subscribed' : 'Subscribe'}</span>
              </button>
            </form>
            {subscribed && <p className="mt-2 text-2xs text-primary-600">Thanks for subscribing!</p>}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
