import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, GraduationCap, Award } from 'lucide-react';
import CustomCursor from './CustomCursor';

const features = [
  {
    icon: Lightbulb,
    title: 'Personalized Guidance',
    description: 'Receive individualized advice that aligns with your specific interests, academic background, and career ambitions. Your success is our foremost focus.',
    gradient: 'from-blue-500 to-purple-500',
    hoverGradient: 'from-blue-600 to-purple-600'
  },
  {
    icon: GraduationCap,
    title: 'Application Support',
    description: 'Experience a hassle-free application process with our expert assistance—covering everything from exams and documentation to securing scholarships and preparing for visa interviews.',
    gradient: 'from-green-500 to-teal-500',
    hoverGradient: 'from-green-600 to-teal-600'
  },
  {
    icon: Award,
    title: 'Free Processing',
    description: 'With Global Degrees, you can be assured that your educational aspirations are in good hands. Say goodbye to processing fees and hello to a hassle-free experience with us!',
    gradient: 'from-orange-500 to-pink-500',
    hoverGradient: 'from-orange-600 to-pink-600'
  }
];

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorVariant, setCursorVariant] = useState('default');

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
    hidden: { y: 50, opacity: 0 },
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

  const glowVariants = {
    idle: { scale: 1, opacity: 0.5 },
    hover: { 
      scale: 1.2, 
      opacity: 0.8,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--color-background)]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--color-primary)]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.5, 1]
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text)]">
            Why Choose <span className="text-[var(--color-primary)]">Global Degrees</span>
          </h2>
          <p className="text-lg text-[var(--color-text)] opacity-80 max-w-3xl mx-auto">
            We provide comprehensive support to make your educational journey smooth and successful
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`relative p-8 rounded-2xl bg-gradient-to-br transition-transform duration-300 hover:scale-105 ${
                hoveredIndex === index ? `bg-gradient-to-br ${feature.hoverGradient}` : `bg-gradient-to-br ${feature.gradient}`
              }`}
              style={{ 
                background: 'var(--color-background)',
                border: '1px solid var(--color-primary)',
              }}
              variants={itemVariants}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setCursorVariant('button');
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setCursorVariant('default');
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-10"
                variants={glowVariants}
                animate={hoveredIndex === index ? "hover" : "idle"}
                style={{
                  background: `linear-gradient(135deg, var(--color-primary), transparent)`,
                }}
              />
              <feature.icon className="w-12 h-12 text-[var(--color-primary)] mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-text)]">{feature.title}</h3>
              <p className="text-[var(--color-text)] opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <CustomCursor variant={cursorVariant} />
    </section>
  );
};

export default Features;