import { motion } from 'framer-motion';
import { Clock, User, Tag, ArrowRight, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Right University for Your Study Abroad Journey',
    excerpt: 'Discover the key factors to consider when selecting your dream university abroad...',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop',
    author: 'Dr. Sarah Wilson',
    date: 'Dec 20, 2023',
    category: 'University Guide',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Top Scholarships for International Students in 2024',
    excerpt: 'Comprehensive guide to the most prestigious scholarships available globally...',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
    author: 'Michael Brown',
    date: 'Dec 18, 2023',
    category: 'Scholarships',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Student Life in the USA: What to Expect',
    excerpt: "An insider's guide to campus life, culture, and academic expectations in American universities...",
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop',
    author: 'Emma Davis',
    date: 'Dec 15, 2023',
    category: 'Student Life',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'SOP Writing Tips: Stand Out in Your Application',
    excerpt: 'Expert advice on crafting a compelling Statement of Purpose for university applications...',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    author: 'Prof. James Lee',
    date: 'Dec 12, 2023',
    category: 'Application Tips',
    readTime: '7 min read'
  },
  {
    id: 5,
    title: 'Guide to Student Visas: Country-wise Requirements',
    excerpt: 'Detailed information about student visa processes for popular study destinations...',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    author: 'Lisa Chen',
    date: 'Dec 10, 2023',
    category: 'Visa Guide',
    readTime: '10 min read'
  },
  {
    id: 6,
    title: 'Career Opportunities After Studying Abroad',
    excerpt: 'Explore the various career paths and opportunities available after international education...',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
    author: 'Dr. Robert Smith',
    date: 'Dec 8, 2023',
    category: 'Career Guide',
    readTime: '9 min read'
  }
];

const categories = [
  'University Guide',
  'Scholarships',
  'Student Life',
  'Application Tips',
  'Visa Guide',
  'Career Guide',
  'Study Tips',
  'Country Guides'
];

const Blog = () => {
  return (
    <div className="bg-[#1A1A40] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A40] via-[#1A1A40]/90 to-[#1A1A40]" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#FFD700]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Study Abroad <span className="text-[#FFD700]">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Expert advice, tips, and guides for your international education journey
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto relative"
          >
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFD700] text-[#1A1A40] p-3 rounded-full hover:bg-white transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-xl overflow-hidden group hover:bg-white/10 transition-colors duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#FFD700] text-[#1A1A40] px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <button className="flex items-center text-[#FFD700] hover:text-white transition-colors duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Browse by <span className="text-[#FFD700]">Category</span>
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-white/10 text-white hover:bg-[#FFD700] hover:text-[#1A1A40] transition-all duration-300"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
