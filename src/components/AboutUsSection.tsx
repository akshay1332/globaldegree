import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, Star, ArrowRight, GraduationCap, Globe, Award } from 'lucide-react';

const AboutUsSection = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const stats = [
    { icon: GraduationCap, value: "1000+", label: "Students Placed" },
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Award, value: "95%", label: "Success Rate" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#1A1A40]">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#FFD700]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1
              }}
              animate={{
                scale: [1, 1.5, 1],
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

      {/* Background Gradient Circles */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
      </div>

      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            style={{ y, opacity }}
            className="relative"
          >
            <div className="relative group">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                  alt="Global Degrees Team"
                  className="w-full h-[600px] object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A40] via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
              </motion.div>

              {/* Stats Cards */}
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className={`absolute ${
                    index === 0 ? 'top-10 -right-10' :
                    index === 1 ? 'top-1/2 -left-10 transform -translate-y-1/2' :
                    'bottom-10 -right-10'
                  } bg-[#2A2A5A]/80 backdrop-blur-lg p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform duration-300`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#FFD700]/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-bold">{stat.value}</h4>
                      <p className="text-gray-400 text-sm">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Decorative Elements */}
              <motion.div 
                className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#FFD700]/20 rounded-2xl"
                animate={{
                  rotate: [0, 90],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#FFD700]/20 rounded-2xl"
                animate={{
                  rotate: [90, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                whileHover={{ scale: 1.02 }}
              >
                ABOUT <span className="text-[#FFD700] inline-block hover:scale-110 transition-transform">US</span>
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-6"
                variants={itemVariants}
              >
                In 2015, Global Degrees started with a simple goal – to help people like you achieve their dreams of studying abroad. Since then, we've grown and become experts in making international education accessible and easy for everyone.
              </motion.p>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8"
                variants={itemVariants}
              >
                At Global Degrees, our main job is to make your dream of studying in another country come true. We promise to be honest, always act professionally, and find easy ways to help you. We are on a mission to make sure you have the best experience in your education journey.
              </motion.p>
            </motion.div>

            {/* What Makes Us Different */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 relative"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-semibold text-white">What Makes Us Different</h3>
              <div className="flex items-start space-x-4 relative group">
                <motion.div 
                  className="w-12 h-12 rounded-full bg-[#FFD700]/10 flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Heart className="w-6 h-6 text-[#FFD700]" />
                </motion.div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Your Success Matters: We care deeply about your success. We're not just here to give advice; we're your partners in growth, focused on helping you achieve your dreams.
                </p>
              </div>
            </motion.div>

            {/* Know More Button */}
            <motion.button
              onClick={() => navigate('/about')}
              className="group relative flex items-center space-x-2 bg-transparent border-2 border-[#FFD700] text-[#FFD700] px-8 py-4 rounded-full font-semibold overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="relative z-10 flex items-center space-x-2"
                whileHover={{ x: 5 }}
              >
                <span>KNOW MORE</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-[#FFD700]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
