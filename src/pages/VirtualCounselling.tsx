import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, Video, MessageSquare, Check, Star, Users, Heart, Sparkles } from 'lucide-react';

const VirtualCounselling = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    topic: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the form data to your backend
    console.log(formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingBubbleVariants = {
    animate: {
      y: [-20, 20],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="bg-[#1A1A40] min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-[#FFD700]/5 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={floatingBubbleVariants}
            animate="animate"
          />
        ))}
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A40]/90 via-[#1A1A40]/80 to-[#1A1A40]" />
        </div>

        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="mb-6"
          >
            <Sparkles className="w-16 h-16 text-[#FFD700] mx-auto" />
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Virtual <span className="text-[#FFD700]">Counselling</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get expert guidance from anywhere in the world. Book your personalized virtual counselling session today.
          </p>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div 
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Video, title: 'HD Video Call', description: 'Crystal clear video consultation' },
            { icon: Calendar, title: 'Flexible Timing', description: 'Choose your preferred slot' },
            { icon: MessageSquare, title: 'Expert Guidance', description: 'Professional counsellors' },
            { icon: Clock, title: '45 Min Session', description: 'Comprehensive discussion' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1A1A40] p-6 rounded-xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-colors"
              variants={itemVariants}
            >
              <feature.icon className="w-12 h-12 text-[#FFD700] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div 
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Student",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
              quote: "The virtual counselling sessions helped me overcome my anxiety and perform better in my studies."
            },
            {
              name: "Michael Chen",
              role: "Professional",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
              quote: "Flexible scheduling and professional guidance made it easy to maintain work-life balance."
            },
            {
              name: "Emma Williams",
              role: "Entrepreneur",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
              quote: "The counsellor's expertise helped me navigate through challenging business decisions."
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-[#FFD700]/40 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#FFD700]"
                />
                <div className="ml-4">
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.quote}</p>
              <div className="flex mt-4 text-[#FFD700]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Booking Form Section */}
      <motion.div 
        className="container mx-auto px-4 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Book Your Session</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-[#FFD700]" />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed!</h3>
                  <p className="text-xl text-gray-300 mb-6">
                    Thank you for choosing our virtual counselling service.
                  </p>
                  <div className="space-y-2 text-gray-400">
                    <p>✨ Check your email for session details</p>
                    <p>📅 Calendar invite has been sent</p>
                    <p>🎯 Prepare your questions for the session</p>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFD700]/50"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFD700]/50"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFD700]/50"
                      placeholder="Your phone number"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFD700]/50"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Time</label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFD700]/50"
                    >
                      <option value="">Select a time slot</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Counselling Topic</label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFD700]/50"
                    >
                      <option value="">Select a topic</option>
                      <option value="career">Career Guidance</option>
                      <option value="university">University Selection</option>
                      <option value="application">Application Process</option>
                      <option value="visa">Visa Guidance</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FFD700]/50"
                    placeholder="Tell us about your requirements..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Your Session
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default VirtualCounselling;
