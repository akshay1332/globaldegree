import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Globe, MapPin } from 'lucide-react';
import CustomCursor from './CustomCursor';

const countries = [
  "Australia",
  "Ireland",
  "UK",
  "Canada",
  "Newzealand",
  "France",
  "USA",
  "Germany",
  "Others"
];

const Contact = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const inputVariants = {
    focused: {
      scale: 1.02,
      borderColor: 'var(--color-primary)',
      transition: { duration: 0.2 }
    },
    unfocused: {
      scale: 1,
      borderColor: 'rgba(255, 255, 255, 0.1)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="py-24 bg-[var(--color-background)] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[var(--color-primary)]"
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

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch with <span className="text-[var(--color-primary)]">Global Degrees</span>
          </h2>
          <p className="text-[var(--color-text)] opacity-80 max-w-3xl mx-auto text-lg">
            Reach out for Personalized Assistance and Start Your Educational Journey Today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-[var(--color-background)] p-8 rounded-2xl border border-[var(--color-primary)] border-opacity-20"
            variants={itemVariants}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'firstName' ? 'focused' : 'unfocused'}
                >
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    placeholder="First name here"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-primary)] border-opacity-20 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>

                <motion.div
                  variants={inputVariants}
                  animate={focusedField === 'lastName' ? 'focused' : 'unfocused'}
                >
                  <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Last name here"
                    className="w-full px-4 py-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-primary)] border-opacity-20 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField(null)}
                  />
                </motion.div>
              </div>

              <motion.div
                variants={inputVariants}
                animate={focusedField === 'email' ? 'focused' : 'unfocused'}
              >
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="Add email"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-primary)] border-opacity-20 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              <motion.div
                variants={inputVariants}
                animate={focusedField === 'phone' ? 'focused' : 'unfocused'}
              >
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="Add your Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-primary)] border-opacity-20 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              <motion.div
                variants={inputVariants}
                animate={focusedField === 'country' ? 'focused' : 'unfocused'}
              >
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                  Country of Interest *
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-primary)] border-opacity-20 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                  onFocus={() => setFocusedField('country')}
                  onBlur={() => setFocusedField(null)}
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                variants={inputVariants}
                animate={focusedField === 'course' ? 'focused' : 'unfocused'}
              >
                <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                  Tell Us which Course you want to enroll in *
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter course details"
                  className="w-full px-4 py-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-primary)] border-opacity-20 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                  onFocus={() => setFocusedField('course')}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              <motion.button
                className="w-full px-8 py-4 bg-[var(--color-primary)] text-black font-semibold rounded-lg flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <span>Submit</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                className="p-6 rounded-xl border border-[var(--color-primary)] border-opacity-20"
                whileHover={{
                  y: -5,
                  borderColor: 'var(--color-primary)',
                  transition: { duration: 0.2 }
                }}
              >
                <Mail className="w-8 h-8 text-[var(--color-primary)] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">Email Us</h3>
                <p className="text-[var(--color-text)] opacity-80">info@globaldegrees.in</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl border border-[var(--color-primary)] border-opacity-20"
                whileHover={{
                  y: -5,
                  borderColor: 'var(--color-primary)',
                  transition: { duration: 0.2 }
                }}
              >
                <Globe className="w-8 h-8 text-[var(--color-primary)] mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-text)]">Our Locations</h3>
                <ul className="text-[var(--color-text)] opacity-80 space-y-1">
                  <li>KARNATAKA</li>
                  <li>TAMIL NADU</li>
                  <li>TELANGANA</li>
                  <li>ANDHRA PRADESH</li>
                  <li>KERALA</li>
                  <li>PUNJAB</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              className="p-8 rounded-xl border border-[var(--color-primary)] border-opacity-20 bg-gradient-to-br from-[var(--color-primary)] to-transparent bg-opacity-5"
              whileHover={{
                y: -5,
                borderColor: 'var(--color-primary)',
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-text)]">
                Stay Informed: Subscribe to Our Newsletter
              </h3>
              <div className="flex space-x-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-background)] border border-[var(--color-primary)] border-opacity-20 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                />
                <motion.button
                  className="px-6 py-3 bg-[var(--color-primary)] text-black font-semibold rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <CustomCursor variant={cursorVariant} />
    </section>
  );
};

export default Contact;
