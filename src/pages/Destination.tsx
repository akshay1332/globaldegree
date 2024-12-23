import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, GraduationCap, Building, Users, BookOpen, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';

interface Destination {
  country: string;
  image: string;
  description: string;
  stats: {
    universities: number;
    students: string;
    ranking: string;
  };
  features: string[];
}

const destinations: Destination[] = [
  {
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    description: "Experience world-class education in the birthplace of the English language. The UK offers a perfect blend of historic excellence and modern innovation.",
    stats: {
      universities: 130,
      students: "450K+",
      ranking: "Top 10"
    },
    features: ["Historic Universities", "Multicultural Environment", "Research Excellence", "Career Opportunities"]
  },
  {
    country: "United States",
    image: "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?q=80&w=2012&auto=format&fit=crop",
    description: "Discover endless possibilities in the land of opportunity. The USA offers cutting-edge research facilities and diverse campus experiences.",
    stats: {
      universities: 4000,
      students: "1M+",
      ranking: "Top 5"
    },
    features: ["Innovation Hubs", "Diverse Programs", "Campus Life", "Global Network"]
  },
  {
    country: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2071&auto=format&fit=crop",
    description: "Embrace quality education in one of the world's most welcoming nations. Canada combines academic excellence with incredible natural beauty.",
    stats: {
      universities: 96,
      students: "350K+",
      ranking: "Top 15"
    },
    features: ["Work Opportunities", "Safe Environment", "Quality Education", "Natural Beauty"]
  },
  {
    country: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop",
    description: "Study in the land down under, where innovation meets adventure. Australia offers world-class education with a unique lifestyle.",
    stats: {
      universities: 43,
      students: "300K+",
      ranking: "Top 20"
    },
    features: ["Quality Life", "Research Focus", "Work Rights", "Scenic Campus"]
  },
  {
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=2071&auto=format&fit=crop",
    description: "Experience education in one of the world's most beautiful countries. New Zealand offers practical learning in a stunning environment.",
    stats: {
      universities: 8,
      students: "100K+",
      ranking: "Top 25"
    },
    features: ["Practical Learning", "Work Rights", "Safe Country", "Natural Beauty"]
  }
];

const DestinationPage = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-[#1A1A40] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop)',
              filter: 'brightness(0.3)'
            }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A40]/50 via-[#1A1A40]/70 to-[#1A1A40]" />

        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center"
          >
            <Globe className="w-12 h-12 text-[#FFD700]" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore Your Study <span className="text-[#FFD700]">Destinations</span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            At Global Degrees, we understand that choosing the right study destination is a pivotal decision in your academic journey. Our study destination services are designed to guide you towards the best educational opportunities worldwide.
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[#FFD700]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1
              }}
              animate={{
                y: [0, 30, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.country}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCountry(destination.country)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <motion.div 
                  className="relative rounded-xl overflow-hidden bg-[#2A2A5A]/30 backdrop-blur-xl"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={destination.image}
                      alt={destination.country}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A40] to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-4"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {destination.country}
                    </motion.h3>

                    <motion.p 
                      className="text-gray-300 mb-6"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {destination.description}
                    </motion.p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-[#FFD700] text-2xl font-bold">{destination.stats.universities}</div>
                        <div className="text-gray-400 text-sm">Universities</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#FFD700] text-2xl font-bold">{destination.stats.students}</div>
                        <div className="text-gray-400 text-sm">Students</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#FFD700] text-2xl font-bold">{destination.stats.ranking}</div>
                        <div className="text-gray-400 text-sm">Global Rank</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {destination.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-2 text-gray-300"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <ChevronRight className="w-4 h-4 text-[#FFD700]" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-[#FFD700]/0 rounded-xl transition-all duration-300"
                      animate={{
                        borderColor: hoveredCountry === destination.country ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 215, 0, 0)'
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      <Footer />
    </div>
  );
};

export default DestinationPage;
