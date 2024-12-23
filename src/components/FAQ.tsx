import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import CustomCursor from './CustomCursor';

const faqs = [
  {
    question: 'How do I start my application process?',
    answer: 'Begin by creating an account on our platform. Our expert counselors will guide you through university selection, document preparation, and application submission.',
    gradient: 'from-blue-500 to-purple-500'
  },
  {
    question: 'What scholarships are available?',
    answer: 'We offer access to various scholarships including merit-based, need-based, and country-specific opportunities. Our team helps you identify and apply for suitable scholarships.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    question: 'How long does the application process take?',
    answer: 'The timeline varies by university and program, typically ranging from 4-12 weeks. We help you plan ahead to meet all deadlines effectively.',
    gradient: 'from-orange-500 to-pink-500'
  },
  {
    question: 'Do you provide visa assistance?',
    answer: 'Yes, we provide comprehensive visa assistance including documentation preparation, interview preparation, and guidance throughout the visa process.',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    question: 'What countries do you cover?',
    answer: 'We partner with universities in major study destinations including the USA, UK, Canada, Australia, and many European countries.',
    gradient: 'from-red-500 to-yellow-500'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[var(--color-background)]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-full opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--color-primary)]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 luxury-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="text-[var(--color-text)] opacity-80 max-w-2xl mx-auto">
            Find answers to common questions about our global education services.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative"
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
                className={`
                  relative z-10 rounded-2xl
                  backdrop-blur-xl backdrop-filter
                  border border-[var(--color-primary)] border-opacity-20
                  hover:border-opacity-50
                  transition-all duration-500
                  overflow-hidden
                `}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`
                    absolute inset-0 opacity-10 bg-gradient-to-br
                    ${faq.gradient}
                  `}
                  animate={{
                    opacity: hoveredIndex === index ? 0.2 : 0.1
                  }}
                />

                {/* Question */}
                <motion.button
                  className="w-full p-6 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-[var(--color-text)]">
                    {faq.question}
                  </span>
                  <motion.div
                    className="flex-shrink-0 ml-4"
                    animate={{
                      rotate: openIndex === index ? 180 : 0
                    }}
                  >
                    {openIndex === index ? (
                      <Minus className="w-6 h-6 text-[var(--color-primary)]" />
                    ) : (
                      <Plus className="w-6 h-6 text-[var(--color-primary)]" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98]
                        },
                        opacity: { duration: 0.25 }
                      }}
                    >
                      <div className="px-6 pb-6 text-[var(--color-text)] opacity-80">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover Glow Effect */}
                <motion.div
                  className={`
                    absolute -inset-2 rounded-2xl bg-gradient-to-br
                    ${faq.gradient} opacity-0
                    blur-2xl
                  `}
                  animate={{
                    opacity: hoveredIndex === index ? 0.2 : 0,
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <CustomCursor variant={cursorVariant} />
    </section>
  );
};

export default FAQ;
