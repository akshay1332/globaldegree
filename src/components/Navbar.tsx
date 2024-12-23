import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X, Book, Lightbulb, Users, MessageCircle, Award } from 'lucide-react';
import CustomCursor from './CustomCursor';

const menuItems = [
  { name: 'Home', icon: Book },
  { name: 'About Us', icon: Users },
  { name: 'Our Services', icon: Award },
  { name: 'Course Finder', icon: Book },
  { name: 'SOP Builder', icon: Lightbulb },
  { name: 'Destination', icon: MessageCircle },
  { name: 'Virtual Counselling', icon: Users },
  { name: 'Testimonials', icon: MessageCircle },
  { name: 'Blog', icon: Book },
  { name: 'Contact Us', icon: MessageCircle },
  { name: 'Global 100+ Schools', icon: Award, isNew: true },
  { name: 'Eduevents', icon: Award, isNew: true }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const menuItemVariants = {
    closed: {
      x: -20,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  };

  const menuBackgroundVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 30
      }
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-[var(--color-background)]/95 backdrop-blur-md' : 'bg-transparent'
        }`}
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ x: 5 }}
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <motion.div
                className="p-2 rounded-full bg-[var(--color-primary)] bg-opacity-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="h-8 w-8 text-[var(--color-primary)]" />
              </motion.div>
              <span className="text-2xl font-serif luxury-gradient">GlobalDegree</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`relative text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors group ${
                    hoveredItem === item.name ? 'text-[var(--color-primary)]' : ''
                  }`}
                  onMouseEnter={() => {
                    setHoveredItem(item.name);
                    setCursorVariant('text');
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    setCursorVariant('default');
                  }}
                  whileHover={{ y: -2 }}
                >
                  <span className="flex items-center">
                    {item.name}
                    {item.isNew && (
                      <span className="ml-1 px-2 py-0.5 text-xs bg-[var(--color-primary)] text-white rounded-full">
                        New
                      </span>
                    )}
                  </span>
                  {hoveredItem === item.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-primary)]"
                      layoutId="underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.a>
              ))}
              <motion.button
                className="magnetic-button glow-effect px-6 py-2 rounded-full bg-[var(--color-primary)] text-black font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Get Started Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-full hover:bg-[var(--color-primary)]/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[var(--color-primary)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--color-primary)]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-[var(--color-background)] z-40"
              variants={menuBackgroundVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div
                className="h-full flex flex-col items-center justify-center space-y-8 p-4"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center space-x-4 text-xl text-[var(--color-text)] hover:text-[var(--color-primary)]"
                    variants={menuItemVariants}
                    whileHover={{ x: 20, color: 'var(--color-primary)' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-6 w-6" />
                    <span>{item.name}</span>
                  </motion.a>
                ))}
                <motion.button
                  className="mt-8 px-8 py-3 rounded-full bg-[var(--color-primary)] text-black font-medium"
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started Now
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <CustomCursor variant={cursorVariant} />
    </>
  );
};

export default Navbar;