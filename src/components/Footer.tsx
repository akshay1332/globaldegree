import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import CustomCursor from './CustomCursor';

const socialLinks = [
  { icon: Facebook, href: '#', color: '#1877F2' },
  { icon: Twitter, href: '#', color: '#1DA1F2' },
  { icon: Instagram, href: '#', color: '#E4405F' },
  { icon: Linkedin, href: '#', color: '#0A66C2' }
];

const Footer = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
  const [emailFocused, setEmailFocused] = useState(false);

  const footerSections = [
    {
      title: 'Programs',
      links: ['Undergraduate', 'Graduate', 'PhD Programs', 'Scholarships']
    },
    {
      title: 'Resources',
      links: ['Application Guide', 'Student Visa', 'Country Guides', 'Success Stories']
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Careers', 'Contact Us']
    }
  ];

  return (
    <motion.footer
      className="bg-[var(--color-background)] relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-30">
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

      {/* Newsletter Section */}
      <div className="border-b border-[var(--color-primary)] border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="max-w-xl mx-auto text-center"
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 luxury-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Stay Updated
            </motion.h2>
            <p className="text-[var(--color-text)] opacity-80 mb-8">
              Subscribe to our newsletter for the latest updates on global education opportunities
            </p>
            <motion.div
              className="relative"
              animate={{
                boxShadow: emailFocused
                  ? '0 0 20px rgba(212, 175, 55, 0.2)'
                  : '0 0 0 rgba(212, 175, 55, 0)',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full bg-[var(--color-secondary)] text-[var(--color-text)] placeholder-[var(--color-text)]/50 focus:outline-none"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
              <motion.button
                className="absolute right-2 top-1/2 -translate-y-1/2 magnetic-button glow-effect p-3 rounded-full bg-[var(--color-primary)]"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <Send className="w-5 h-5 text-black" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            variants={fadeInUp}
          >
            <motion.div
              className="flex items-center space-x-2 mb-6"
              whileHover={{ x: 10 }}
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
            <p className="text-[var(--color-text)] opacity-80 mb-8">
              Empowering students to achieve their global education dreams through expert guidance and support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-full bg-[var(--color-secondary)]"
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => {
                    setHoveredSocial(index);
                    setCursorVariant('button');
                  }}
                  onMouseLeave={() => {
                    setHoveredSocial(null);
                    setCursorVariant('default');
                  }}
                  style={{
                    boxShadow: hoveredSocial === index
                      ? `0 0 20px ${social.color}40`
                      : 'none'
                  }}
                >
                  <social.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              variants={fadeInUp}
              custom={index}
            >
              <h3 className="text-[var(--color-primary)] font-bold text-lg mb-6">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}>
                    <motion.a
                      href="#"
                      className="text-[var(--color-text)] opacity-80 hover:opacity-100 flex items-center group"
                      whileHover={{ x: 10 }}
                      onMouseEnter={() => setCursorVariant('text')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-[var(--color-primary)] border-opacity-20"
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--color-text)] opacity-80 text-sm">
              &copy; 2024 GlobalDegree. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-[var(--color-text)] opacity-80 hover:opacity-100 text-sm"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-[var(--color-text)] opacity-80 hover:opacity-100 text-sm"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      <CustomCursor variant={cursorVariant} />
    </motion.footer>
  );
};

export default Footer;