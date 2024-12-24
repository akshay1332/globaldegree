import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Clock, User, Tag, ArrowRight, Search, ChevronLeft, ChevronRight, X, BookOpen } from 'lucide-react';
import { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts, type BlogPost } from '../data/blogData';

const categories = Array.from(new Set(blogPosts.map(post => post.category)));

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  const featuredPosts = blogPosts.slice(0, 3);

  const heroImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <div className="bg-[#1A1A40] min-h-screen">
      <Navbar />

      {/* Hero Section with Image Carousel */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 flex"
          animate={{ x: [0, -100, -200, 0] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          {[...heroImages, heroImages[0]].map((img, index) => (
            <div
              key={index}
              className="min-w-full h-full relative"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A40]/90 via-[#1A1A40]/80 to-[#1A1A40]" />
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop" 
              alt="Education Icon"
              className="w-20 h-20 mx-auto rounded-full border-4 border-[#FFD700] object-cover"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Study Abroad <span className="text-[#FFD700]">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
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

      {/* Featured Posts - Horizontal Scroll */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-white mb-8"
          >
            Featured Articles
          </motion.h2>
          
          <div className="relative">
            <div 
              ref={containerRef}
              className="flex overflow-x-scroll hide-scrollbar gap-6 py-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="min-w-[400px] h-[500px] relative rounded-2xl overflow-hidden flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="space-y-4"
                    >
                      <span className="px-3 py-1 bg-[#FFD700] text-[#1A1A40] rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{post.title}</h3>
                      <p className="text-gray-300">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-300">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author.name}
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ x: 5 }}
                          className="text-[#FFD700] flex items-center"
                        >
                          Read More <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Scroll Progress Bar */}
            <div className="h-1 bg-white/10 mt-6 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#FFD700]"
                style={{ scaleX: scrollXProgress }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section - Horizontal Scroll */}
      <div className="py-10 px-4">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto hide-scrollbar space-x-4 py-4">
            {['All', ...categories].map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#FFD700] text-[#1A1A40]'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Posts Grid with Enhanced Animations */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
              .map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                onClick={() => setSelectedBlog(post)}
                className="bg-white/5 rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-500 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 bg-[#FFD700] text-[#1A1A40] px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {post.category}
                  </motion.div>
                </div>
                <motion.div 
                  className="p-6"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author.name}
                    </div>
                  </div>
                  <motion.h2 
                    className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD700] transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    {post.title}
                  </motion.h2>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <motion.button 
                    className="flex items-center text-[#FFD700] hover:text-white transition-colors duration-300"
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.button>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Detail Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 overflow-y-auto"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="container mx-auto px-4 py-10 min-h-screen flex items-center"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-[#1A1A40] rounded-2xl overflow-hidden max-w-4xl mx-auto relative">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 text-white hover:text-[#FFD700] z-10"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="relative h-[40vh]">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A40] to-transparent" />
                </div>

                <div className="p-8 -mt-20 relative">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={selectedBlog.author.avatar} 
                        alt={selectedBlog.author.name}
                        className="w-12 h-12 rounded-full border-2 border-[#FFD700]"
                      />
                      <div>
                        <h3 className="text-white font-medium">{selectedBlog.author.name}</h3>
                        <p className="text-gray-400 text-sm">{selectedBlog.author.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedBlog.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <span className="px-4 py-2 bg-[#FFD700] text-[#1A1A40] rounded-full text-sm font-medium">
                      {selectedBlog.category}
                    </span>
                    
                    <h2 className="text-4xl font-bold text-white mt-6 mb-4">
                      {selectedBlog.title}
                    </h2>
                    
                    <div className="flex items-center space-x-4 text-gray-400 mb-8">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {selectedBlog.readTime}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {selectedBlog.date}
                      </div>
                    </div>

                    <div className="prose prose-lg prose-invert max-w-none">
                      <p className="text-gray-300 text-lg mb-8">
                        {selectedBlog.content.introduction}
                      </p>
                      
                      {selectedBlog.content.mainContent.map((paragraph, index) => (
                        <p key={index} className="text-gray-300 mb-6">
                          {paragraph}
                        </p>
                      ))}

                      <h3 className="text-2xl font-bold text-white mt-8 mb-4">
                        Key Takeaways
                      </h3>
                      <ul className="list-disc pl-6 text-gray-300 space-y-2">
                        {selectedBlog.content.keyTakeaways.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>

                      <p className="text-gray-300 mt-8 mb-8">
                        {selectedBlog.content.conclusion}
                      </p>

                      {selectedBlog.content.relatedLinks && (
                        <>
                          <h3 className="text-xl font-bold text-white mb-4">
                            Related Articles
                          </h3>
                          <div className="space-y-2">
                            {selectedBlog.content.relatedLinks.map((link, index) => (
                              <a
                                key={index}
                                href={link.url}
                                className="block text-[#FFD700] hover:text-white transition-colors duration-300"
                              >
                                → {link.title}
                              </a>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Blog;
