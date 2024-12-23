import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import LuxuryText from './LuxuryText';
import CustomCursor from './CustomCursor';
import { fadeInUp, staggerContainer, glowEffect } from '../utils/animations';

const Hero = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Add new animation configurations
  const letterAnimation = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: 90,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }),
    hover: {
      scale: 1.1,
      rotateY: 15,
      color: "var(--color-primary)",
      transition: { duration: 0.2 }
    }
  };

  const headingText = "Global Degrees";
  const letters = headingText.split("");

  // Enhanced 3D effect configuration
  const perspective = 1000;
  const depth = 50;

  // Mouse movement tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 200, damping: 30 });
  const scale = useSpring(1, { stiffness: 200, damping: 30 });

  // Creative morphing path variants
  const morphPath = {
    initial: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    animate: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
    hover: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsImageLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const handleMouseEnter = () => {
    scale.set(1.05);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  };

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

  const floatingElements = Array(5).fill(null).map(() => ({
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
          
            <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 flex flex-wrap"
            style={{
              perspective: `${perspective}px`,
              transformStyle: "preserve-3d"
            }}
            >
            {letters.map((letter, i) => (
              <motion.span
              key={i}
              className="inline-block origin-center"
              custom={i}
              variants={letterAnimation}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{
                display: "inline-block",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                marginRight: letter === " " ? "0.5em" : "0.02em"
              }}
              >
              <motion.span
                className="inline-block relative"
                style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(${depth}px)`
                }}
              >
                {letter}
                <motion.span
                className="absolute inset-0 text-[var(--color-primary)]"
                style={{
                  transform: `translateZ(-${depth}px)`,
                  opacity: 0.3
                }}
                >
                {letter}
                </motion.span>
              </motion.span>
              </motion.span>
            ))}
            </motion.h1>

            <motion.div
            className="absolute -z-10 w-full h-full"
            style={{
              perspective: `${perspective}px`,
              transformStyle: "preserve-3d"
            }}
            >
            {[...Array(5)].map((_, i) => (
              <motion.div
              key={i}
              className="absolute w-8 h-8 rounded-full bg-[var(--color-primary)] opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transformStyle: "preserve-3d"
              }}
              animate={{
                z: [-50, 50, -50],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
                rotateX: [0, 180, 360],
                rotateY: [0, 180, 360]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "linear"
              }}
              />
            ))}
            </motion.div>

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
        className="absolute right-0 top-0 w-1/2 h-full z-0 perspective-1000"
        initial={{ opacity: 0, x: 100, rotateY: 90 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          rotateY: 0,
          transition: {
            duration: 1.2,
            ease: [0.6, 0.01, -0.05, 0.9],
            opacity: { duration: 0.6 }
          }
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d"
        }}
      >
        <motion.div 
          className="w-full h-full bg-cover bg-center bg-no-repeat relative transform-gpu"
          initial={{
            clipPath: morphPath.initial,
            filter: "brightness(0) blur(10px)"
          }}
          animate={{
            clipPath: morphPath.animate,
            filter: "brightness(1) blur(0px)",
            transition: {
              duration: 1.5,
              ease: [0.645, 0.045, 0.355, 1],
              delay: 0.2
            }
          }}
          whileHover={{
            clipPath: morphPath.hover,
            transition: { duration: 0.4 }
          }}
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1669814665626-70d9802b449e?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            transformStyle: "preserve-3d",
            transform: "translateZ(50px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[var(--color-background)] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 0.8,
                delay: 1 
              }
            }}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(25px)"
            }}
          />
          
          {/* Animated Glowing Outline */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              boxShadow: [
                "0 0 0 0px rgba(var(--color-primary-rgb), 0)",
                "0 0 0 2px rgba(var(--color-primary-rgb), 0.3)",
                "0 0 0 6px rgba(var(--color-primary-rgb), 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          {/* Interactive Particles with Enhanced Animation */}
          {isImageLoaded && Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-[var(--color-primary)]"
              initial={{ 
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.5, 1],
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                z: [0, 50, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transformStyle: "preserve-3d",
                transform: `translateZ(${Math.random() * 50}px)`
              }}
            />
          ))}
        </motion.div>

        {/* Animated Corner Accents */}
        {isImageLoaded && ['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((corner, i) => (
          <motion.div
            key={corner}
            className={`absolute w-8 h-8 border-2 border-[var(--color-primary)] ${
              corner.includes('top') ? 'top-4' : 'bottom-4'
            } ${corner.includes('left') ? 'left-4' : 'right-4'}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 0.6,
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 2,
              delay: 1 + i * 0.2,
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        ))}
      </motion.div>

      {/* Enhanced Floating Elements with Morphing Shapes */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: "100px",
            height: "100px",
            left: el.initialX,
            transformStyle: "preserve-3d",
            filter: 'blur(40px)',
          }}
          initial={{
            opacity: 0,
            pathLength: 0
          }}
          animate={{
            opacity: [0, 0.2, 0],
            pathLength: 1,
            y: [-100, -300],
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: el.delay,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        >
          <motion.div
            className="w-full h-full"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
              borderRadius: '50%',
            }}
            animate={{
              borderRadius: ['50%', '20%', '50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}

        <CustomCursor variant={cursorVariant as "default" | "button" | "text" | "large"} />
    </motion.div>
  );
};

export default Hero;