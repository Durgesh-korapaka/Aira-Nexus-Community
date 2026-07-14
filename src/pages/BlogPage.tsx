import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Sparkles,
  Mail,
  TrendingUp,
} from 'lucide-react';
import SEO from '../components/SEO';

interface BlogPageProps {
  darkMode: boolean;
}

const categories = [
  { name: 'All', count: 24 },
  { name: 'Apartment Management', count: 8 },
  { name: 'Maintenance Billing', count: 5 },
  { name: 'Complaint Management', count: 4 },
  { name: 'Community Living', count: 4 },
  { name: 'Security', count: 2 },
  { name: 'Technology', count: 1 },
];

const featuredPost = {
  title: '10 Ways to Improve Maintenance Collection in Your Apartment',
  excerpt:
    'Discover proven strategies that have helped communities increase collection rates by 40% or more. From automated reminders to flexible payment options.',
  category: 'Apartment Management',
  date: 'June 15, 2024',
  readTime: '8 min read',
  author: 'Priya Sharma',
  image:
    'https://images.pexels.com/photos/1545324418/pexels-photo-1545324418.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const posts = [
  {
    title: 'How to Set Up a Digital Notice Board for Your Community',
    excerpt: 'Step-by-step guide to going paperless with community announcements.',
    category: 'Apartment Management',
    date: 'June 12, 2024',
    readTime: '5 min read',
    author: 'Rajesh Kumar',
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'The Complete Guide to Visitor Management Systems',
    excerpt: 'Everything you need to know about implementing secure visitor tracking.',
    category: 'Security',
    date: 'June 10, 2024',
    readTime: '7 min read',
    author: 'Anand Patel',
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'WhatsApp Integration: Transforming Community Communication',
    excerpt: 'How instant messaging is changing the way communities stay connected.',
    category: 'Technology',
    date: 'June 8, 2024',
    readTime: '4 min read',
    author: 'Sneha Patel',
    image:
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Managing Complaints: Best Practices for Committee Members',
    excerpt: 'Learn how to handle resident complaints efficiently and transparently.',
    category: 'Complaint Management',
    date: 'June 5, 2024',
    readTime: '6 min read',
    author: 'Vikram Singh',
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Budget Planning for Apartment Associations',
    excerpt: 'A comprehensive guide to financial planning and budgeting.',
    category: 'Maintenance Billing',
    date: 'June 3, 2024',
    readTime: '9 min read',
    author: 'Priya Sharma',
    image:
      'https://images.pexels.com/photos/1545324418/pexels-photo-1545324418.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Creating a Safe and Secure Community Environment',
    excerpt: 'Tips for improving security protocols in residential complexes.',
    category: 'Security',
    date: 'May 30, 2024',
    readTime: '5 min read',
    author: 'Anand Patel',
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function BlogPage({ darkMode: _darkMode }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const showFeatured = activeCategory === 'All' && !searchQuery;

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div>
      <SEO
        title="Blog — AiraNexus Community Management"
        description="Insights, tips, and stories about community management, technology, and residential living from the AiraNexus team."
        path="/blog"
      />

      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-24 overflow-hidden bg-greenish-50">
        <div className="blob w-[500px] h-[500px] bg-primary-400 -top-32 -right-32 animate-float" />
        <div className="blob w-[400px] h-[400px] bg-lime-400 -bottom-32 -left-32 animate-float-slow" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="badge badge-primary mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Blog &amp; Resources
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-charcoal-900 text-balance"
            >
              Insights for{' '}
              <span className="text-gradient">community managers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg text-charcoal-500 max-w-2xl mx-auto text-pretty"
            >
              Expert tips, industry insights, and best practices for managing residential
              communities — straight from the AiraNexus team.
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 max-w-md mx-auto relative"
            >
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search articles"
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white text-charcoal-900 placeholder:text-charcoal-400 border border-charcoal-200 shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-500/15 focus:border-primary-500 transition-all duration-200 ease-smooth"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-8 bg-white border-b border-charcoal-100 sticky top-16 z-30 backdrop-blur-md bg-white/90">
        <div className="container-custom">
          <div
            className="flex flex-wrap justify-center gap-2.5"
            role="tablist"
            aria-label="Article categories"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  role="tab"
                  aria-selected={isActive}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ease-smooth active:scale-[0.98] ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-teal'
                      : 'bg-charcoal-50 text-charcoal-600 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {category.name}
                  <span
                    className={`text-xs ${isActive ? 'text-white/70' : 'text-charcoal-400'}`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {showFeatured && (
        <section className="section-tight bg-greenish-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card card-hover p-0 overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-smooth"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                  />
                  <span className="absolute top-4 left-4 badge badge-primary bg-white/95 backdrop-blur-sm shadow-soft">
                    <Sparkles className="w-3 h-3" aria-hidden="true" />
                    Featured
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="badge badge-lime self-start mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-charcoal-900 text-balance">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-6 text-charcoal-500 text-pretty leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-charcoal-500 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User className="w-4 h-4" aria-hidden="true" />
                      {featuredPost.author}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="btn-primary self-start"
                    aria-label={`Read article: ${featuredPost.title}`}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className={showFeatured ? 'section-tight bg-greenish-50 pt-0' : 'section-padding bg-greenish-50'}>
        <div className="container-custom">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-charcoal-900">
              {activeCategory === 'All' ? 'Latest Articles' : activeCategory}
            </h2>
            <span className="text-sm text-charcoal-500 font-medium">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="card card-hover p-0 overflow-hidden group flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-smooth"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={250}
                    />
                    <span className="absolute top-3 left-3 badge badge-primary bg-white/95 backdrop-blur-sm shadow-soft">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 text-charcoal-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-2 text-charcoal-500 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-charcoal-400 pt-4 border-t border-charcoal-100">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="icon-circle-lg mx-auto mb-6">
                <Search className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">No articles found</h3>
              <p className="text-charcoal-500 mb-6">
                Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="btn-secondary"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-brand-gradient rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="blob w-[300px] h-[300px] bg-white/20 top-0 -right-20" />
            <div className="blob w-[250px] h-[250px] bg-white/10 bottom-0 -left-20" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="icon-circle-lg mx-auto mb-6 bg-white/15 backdrop-blur-sm border border-white/20">
                <Mail className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white text-balance">
                Stay in the loop
              </h2>
              <p className="mb-8 max-w-xl mx-auto text-white/90 text-pretty text-lg">
                Subscribe to our newsletter and get the latest community management tips,
                insights, and product updates delivered to your inbox.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl bg-white/95 text-charcoal-900 placeholder:text-charcoal-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white transition-all duration-200 ease-smooth"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-primary-600 font-semibold text-sm whitespace-nowrap hover:bg-charcoal-50 active:scale-[0.98] transition-all duration-200 ease-smooth shadow-soft"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
              <p className="mt-4 text-sm text-white/70 flex items-center justify-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
                Join 2,000+ community managers. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
