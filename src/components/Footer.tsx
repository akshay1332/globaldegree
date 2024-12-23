import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, ChevronRight, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const locations = [
    'KARNATAKA',
    'TAMIL NADU',
    'TELANGANA',
    'ANDHRA PRADESH',
    'KERALA',
    'PUNJAB'
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Destination', path: '/destination' },
    { name: 'Virtual Counselling', path: '/counselling' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const importantLinks = [
    { name: 'Company Policy', path: '/policy' },
    { name: 'Submit a Complaint', path: '/complaint' },
    { name: 'Feedback Form', path: '/feedback' },
    { name: 'Download Profile', path: '/profile' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-[#1A1A40] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-[#FFD700]/5 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#FFD700]/5 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Don't miss Any News & offers From Us.
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Stay Informed: Subscribe to Our Newsletter
            </motion.p>

            <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-6 py-4 rounded-full bg-white/5 border border-[#FFD700]/20 focus:border-[#FFD700] outline-none transition-all duration-300 pr-12"
                />
                <motion.button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FFD700] text-[#1A1A40] flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Send size={18} />
                </motion.button>
              </motion.div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.a
                href="mailto:info@globaldegrees.in"
                className="flex items-center space-x-2 text-lg hover:text-[#FFD700] transition-colors group"
                whileHover={{ x: 5 }}
              >
                <Mail className="group-hover:rotate-12 transition-transform" />
                <span>info@globaldegrees.in</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
                { Icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
                { Icon: Linkedin, href: '#', color: 'hover:bg-blue-500' },
                { Icon: Twitter, href: '#', color: 'hover:bg-sky-500' }
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${color} transition-all duration-300 hover:scale-110 hover:rotate-12`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Locations</h3>
            <ul className="space-y-3">
              {locations.map((location) => (
                <motion.li
                  key={location}
                  onHoverStart={() => setHoveredLocation(location)}
                  onHoverEnd={() => setHoveredLocation(null)}
                  className="relative"
                >
                  <motion.div
                    className="flex items-center space-x-2 cursor-pointer group"
                    whileHover={{ x: 10 }}
                  >
                    <MapPin 
                      className="w-4 h-4 text-[#FFD700] group-hover:rotate-12 transition-transform" 
                    />
                    <span className="relative">
                      {location}
                      {hoveredLocation === location && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FFD700]"
                          layoutId="locationUnderline"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </span>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  onHoverStart={() => setHoveredLink(link.name)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <Link to={link.path}>
                    <motion.div
                      className="flex items-center space-x-2 group"
                      whileHover={{ x: 10 }}
                    >
                      <ChevronRight className="w-4 h-4 text-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative">
                        {link.name}
                        {hoveredLink === link.name && (
                          <motion.div
                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#FFD700] via-white to-[#FFD700]"
                            layoutId="linkUnderline"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                          />
                        )}
                      </span>
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Important Links</h3>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <motion.li
                  key={link.name}
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <Link to={link.path}>
                    <motion.div
                      className="flex items-center space-x-2 group"
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                      <ChevronRight className="w-4 h-4 text-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4">
          <motion.p 
            className="text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Copyright 2024 Global Degree - All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;