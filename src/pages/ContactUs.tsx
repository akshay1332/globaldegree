import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Globe, ExternalLink, Building, Navigation } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import map from '../assets/locations-of-GD.png';
import studyAbroad from '../assets/Study-Abroad-With-GD-1024x1024.png';

gsap.registerPlugin(ScrollTrigger);

interface Location {
  state: string;
  offices: {
    name: string;
    address: string;
    phone?: string;
    image: string;
  }[];
}

const ContactUs = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [hoveredOffice, setHoveredOffice] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const locations: Location[] = [
    {
      state: "KARNATAKA",
      offices: [
        {
          name: "BENGALURU (HEAD OFFICE)",
          address: "No.28/14 and 28/15, 2nd floor, City Centre, Church St, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001",
          image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2071&auto=format&fit=crop"
        },
        {
          name: "KORAMANGALA BENGALURU",
          address: "#122, 1st Floor, Raheja Arcade, 80 Ft – Ganapati Temple Road, Opp Forum Mall, Koramangala, Bengaluru – 560 095",
          phone: "+91-8754588777",
          image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    },
    {
      state: "TAMIL NADU",
      offices: [
        {
          name: "Global Degrees - Chennai",
          address: "No 1, Ground Floor, Guna Complex, 443 445, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018",
          phone: "+91-9500008218",
          image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    },
    {
      state: "TELANGANA",
      offices: [
        {
          name: "HYDERABAD SOMAJIGUDA",
          address: "2nd Floor, Pothula Towers Annex South India Shopping Mall Somajiguda Building, Somajiguda, Hyderabad, Telangana, 500082",
          phone: "+91-9951354999",
          image: "https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?q=80&w=2070&auto=format&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1A40] overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${studyAbroad})`,
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A40]/50 to-[#1A1A40]" />
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-[#FFD700]/10 flex items-center justify-center"
          >
            <Building className="w-12 h-12 text-[#FFD700]" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our <span className="text-[#FFD700]">Locations</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Find us at multiple locations across India
          </motion.p>
        </motion.div>
      </div>

      {/* Global Presence Map Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img 
              src={map} 
              alt="Global Degree Locations"
              className="w-full h-auto object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A40] via-transparent to-transparent" />
            
            {/* Animated Markers */}
            {locations.map((location, index) => (
              <motion.div
                key={location.state}
                className="absolute w-3 h-3"
                style={{
                  top: `${30 + Math.random() * 40}%`,
                  left: `${20 + index * 15}%`
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <motion.div
                  className="w-full h-full bg-[#FFD700] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <Contact />
      </div>

      {/* Locations Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {locations.map((location, stateIndex) => (
            <motion.div
              key={location.state}
              variants={{
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
              }}
              className="relative"
            >
              <motion.h2 
                className="text-3xl font-bold text-white mb-8 border-l-4 border-[#FFD700] pl-4"
                whileHover={{ x: 10 }}
              >
                {location.state}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {location.offices.map((office, officeIndex) => (
                  <motion.div
                    key={office.name}
                    className="relative group perspective-1000"
                    initial={{ 
                      opacity: 0,
                      y: 50,
                      rotateX: -15,
                      scale: 0.9
                    }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        delay: officeIndex * 0.2
                      }
                    }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredOffice(stateIndex * 100 + officeIndex)}
                    onMouseLeave={() => setHoveredOffice(null)}
                  >
                    <motion.div
                      className={`relative rounded-xl overflow-hidden bg-[#2A2A5A]/30 backdrop-blur-xl transition-all duration-500 
                        ${hoveredOffice === stateIndex * 100 + officeIndex ? 
                          'shadow-2xl shadow-[#FFD700]/20 transform -translate-y-4' : 
                          'shadow-lg shadow-black/5'}`}
                      whileHover={{
                        scale: 1.02,
                        rotateY: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Main Image Container */}
                      <div className="relative h-48 overflow-hidden rounded-t-xl">
                        <motion.img 
                          src={office.image}
                          alt={office.name}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-[#1A1A40] to-transparent"
                          initial={{ opacity: 0.5 }}
                          whileHover={{ opacity: 0.7 }}
                          transition={{ duration: 0.3 }}
                        />
                        
                        {/* Floating Badge */}
                        <motion.div
                          className="absolute top-4 right-4 bg-[#FFD700]/90 text-[#1A1A40] px-3 py-1 rounded-full text-sm font-semibold"
                          initial={{ y: -20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ delay: 0.5 }}
                        >
                          Global Degree
                        </motion.div>
                      </div>

                      {/* Content Section */}
                      <div className="relative p-6 z-10">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileInView={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="space-y-4"
                        >
                          {/* Office Name with Glow Effect */}
                          <motion.h3 
                            className="text-xl font-semibold text-white relative inline-block"
                            whileHover={{ scale: 1.05 }}
                          >
                            {office.name}
                            <motion.div
                              className="absolute -inset-2 bg-[#FFD700]/10 rounded-lg -z-10 blur-sm"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.h3>

                          {/* Address with Icon Animation */}
                          <motion.div
                            className="flex items-start space-x-3 text-gray-300 group"
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                            </motion.div>
                            <p className="text-sm leading-relaxed">{office.address}</p>
                          </motion.div>

                          {/* Phone with Slide Effect */}
                          {office.phone && (
                            <motion.div
                              className="flex items-center space-x-3 text-gray-300"
                              initial={{ x: -20, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              whileHover={{ x: 5 }}
                            >
                              <motion.div
                                whileHover={{ rotate: 15 }}
                                transition={{ duration: 0.2 }}
                              >
                                <Phone className="w-5 h-5 text-[#FFD700]" />
                              </motion.div>
                              <p className="text-sm">{office.phone}</p>
                            </motion.div>
                          )}

                          {/* Interactive Button */}
                          <motion.button
                            className="mt-6 w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-[#FFD700]/10 to-[#FFD700]/20 p-4"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/30 to-[#FFD700]/0"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.8 }}
                            />
                            <span className="relative z-10 flex items-center justify-center space-x-2 text-[#FFD700] font-medium">
                              <span>View Location</span>
                              <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </motion.div>
                            </span>
                          </motion.button>
                        </motion.div>
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#FFD700]/20 to-[#FFD700]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Floating Particles */}
                      {hoveredOffice === stateIndex * 100 + officeIndex && (
                        <motion.div 
                          className="absolute inset-0 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full bg-[#FFD700]"
                              initial={{
                                x: '50%',
                                y: '50%',
                                scale: 0,
                                opacity: 0
                              }}
                              animate={{
                                x: `${Math.random() * 100}%`,
                                y: `${Math.random() * 100}%`,
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Study Abroad Section */}
      <motion.div 
        className="relative py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1A1A40] to-[#2A2A5A] p-12"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={studyAbroad}
              alt="Study Abroad"
              className="absolute right-0 top-0 w-1/2 h-full object-cover opacity-20"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.2 }}
              viewport={{ once: true }}
            />
            
            <div className="relative z-10 max-w-2xl">
              <motion.h2
                className="text-4xl font-bold text-white mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Start Your Global Education Journey
              </motion.h2>
              
              <motion.p
                className="text-gray-300 mb-8"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Transform your future with our expert guidance and support in international education.
              </motion.p>
              
              <motion.button
                className="bg-[#FFD700] text-[#1A1A40] px-8 py-3 rounded-full font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default ContactUs;
