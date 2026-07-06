import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
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
  excerpt: 'Discover proven strategies that have helped communities increase collection rates by 40% or more. From automated reminders to flexible payment options.',
  category: 'Apartment Management',
  date: 'June 15, 2024',
  readTime: '8 min read',
  author: 'Priya Sharma',
  image: 'https://images.pexels.com/photos/1545324418/pexels-photo-1545324418.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const posts = [
  {
    title: 'How to Set Up a Digital Notice Board for Your Community',
    excerpt: 'Step-by-step guide to going paperless with community announcements.',
    category: 'Apartment Management',
    date: 'June 12, 2024',
    readTime: '5 min read',
    author: 'Rajesh Kumar',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'The Complete Guide to Visitor Management Systems',
    excerpt: 'Everything you need to know about implementing secure visitor tracking.',
    category: 'Security',
    date: 'June 10, 2024',
    readTime: '7 min read',
    author: 'Anand Patel',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'WhatsApp Integration: Transforming Community Communication',
    excerpt: 'How instant messaging is changing the way communities stay connected.',
    category: 'Technology',
    date: 'June 8, 2024',
    readTime: '4 min read',
    author: 'Sneha Patel',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Managing Complaints: Best Practices for Committee Members',
    excerpt: 'Learn how to handle resident complaints efficiently and transparently.',
    category: 'Complaint Management',
    date: 'June 5, 2024',
    readTime: '6 min read',
    author: 'Vikram Singh',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Budget Planning for Apartment Associations',
    excerpt: 'A comprehensive guide to financial planning and budgeting.',
    category: 'Maintenance Billing',
    date: 'June 3, 2024',
    readTime: '9 min read',
    author: 'Priya Sharma',
    image: 'https://images.pexels.com/photos/1545324418/pexels-photo-1545324418.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    title: 'Creating a Safe and Secure Community Environment',
    excerpt: 'Tips for improving security protocols in residential complexes.',
    category: 'Security',
    date: 'May 30, 2024',
    readTime: '5 min read',
    author: 'Anand Patel',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function BlogPage({ darkMode: _darkMode }: BlogPageProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <SEO title="Blog — AiraNexus Community Management" description="Insights, tips, and stories about community management, technology, and residential living from the AiraNexus team." path="/blog" />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-greenish-50 overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-primary-500 -top-20 -right-20 animate-float" />
        <div className="blob w-[350px] h-[350px] bg-lime-500 -bottom-20 -left-20 animate-float-delayed" />
        <div className="container-custom text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
          >
            Blog & Resources
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-charcoal-900 mb-6"
          >
            Insights for <span className="text-gradient">community managers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8"
          >
            Expert tips, industry insights, and best practices for managing residential communities.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white text-charcoal-900 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-colors"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.name
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category.name}
                <span className={`ml-1 ${activeCategory === category.name ? 'text-white/70' : 'text-neutral-400'}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === 'All' && !searchQuery && (
        <section className="section-padding bg-greenish-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-0 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="400"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-medium mb-4 bg-primary-100 text-primary-700">
                    Featured
                  </span>
                  <h2 className="text-2xl font-bold mb-4 text-charcoal-900">
                    {featuredPost.title}
                  </h2>
                  <p className="mb-6 text-neutral-500">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center mt-6 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="section-padding bg-greenish-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card p-0 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    width="400"
                    height="250"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-charcoal-900 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2 text-neutral-500">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-500">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-brand-gradient rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Stay Updated
            </h2>
            <p className="mb-6 max-w-xl mx-auto text-white/90">
              Subscribe to our newsletter and get the latest community management tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white text-charcoal-900 border border-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white transition-colors"
              />
              <button type="submit" className="px-6 py-3 rounded-xl bg-white text-primary-600 font-semibold whitespace-nowrap hover:bg-neutral-50 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
