import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import LuxuryText from './LuxuryText';
import CustomCursor from './CustomCursor';
import { fadeInUp, staggerContainer, glowEffect } from '../utils/animations';

const Hero = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const floatingElements = Array(5).fill(null).map((_, i) => ({
    initialX: Math.random() * window.innerWidth,
    delay: Math.random() * 2
  }));

  return (
    <motion.div 
      className="relative min-h-screen flex items-center bg-[var(--color-background)] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Content */}
      <motion.div 
        className="relative z-10 w-1/2 px-4 sm:px-6 lg:px-8"
        style={{ y, opacity }}
      >
        <motion.div 
          className="flex items-center space-x-3 mb-8"
          variants={fadeInUp}
        >
          <motion.div
            className="p-3 rounded-full bg-[var(--color-primary)] bg-opacity-10"
            variants={glowEffect}
            animate="animate"
            whileHover={{ scale: 1.1 }}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <GraduationCap className="h-8 w-8 text-[var(--color-primary)]" />
          </motion.div>
        </motion.div>

        <div className="space-y-6">
          <motion.p 
            className="text-[var(--color-primary)] font-semibold text-xl"
            variants={fadeInUp}
          >
            Welcome To
          </motion.p>
          
          <LuxuryText
            text="Global Degrees"
            as="h1"
            className="text-5xl md:text-7xl font-bold mb-4"
            delay={0.5}
          />

          <motion.p
            className="max-w-xl text-lg md:text-xl text-[var(--color-text)] opacity-80"
            variants={fadeInUp}
          >
            Find, Compare and Apply to the Best Universities Across the Globe
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
            variants={staggerContainer}
          >
            <motion.button
              className="magnetic-button glow-effect px-8 py-4 bg-[var(--color-primary)] text-black font-semibold rounded-full flex items-center space-x-2 transform transition-all hover:shadow-2xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="magnetic-button px-8 py-4 border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-full hover:bg-[var(--color-primary)] hover:text-black transition-all"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div 
        className="absolute right-0 top-0 w-1/2 h-full z-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1669814665626-70d9802b449e?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
        </div>
      </motion.div>

      {/* Floating Elements */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 rounded-full"
          style={{
            background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
            left: el.initialX,
            filter: 'blur(40px)',
            opacity: 0.1
          }}
          animate={{
            y: [-100, -300],
            opacity: [0, 0.2, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: el.delay,
            ease: "linear"
          }}
        />
      ))}

      <CustomCursor variant={cursorVariant} />
    </motion.div>
  );
};

export default Hero;