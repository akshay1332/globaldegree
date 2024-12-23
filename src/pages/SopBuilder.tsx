import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Sparkles, Send, Book, Globe, Award, GraduationCap, CheckCircle2, FileEdit, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SopBuilder = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    courseName: '',
    interestedCountry: '',
    intendedYear: '',
    bachelorsDegree: '',
    bachelorsStream: '',
    bachelorsCGPA: '',
    bachelorsPassoutYear: '',
    backlogs: '',
    interCGPA: '',
    interPassoutYear: '',
    englishTest: '',
    greScore: '',
    applyingFrom: '',
    tuitionRange: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const totalSteps = 4;

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const countries = [
    "USA", "UK", "Canada", "Australia", "Germany", "France", "Ireland", "New Zealand"
  ];

  const applyingFromOptions = [
    "India", "International", "Local"
  ];

  const tuitionRanges = [
    "Below $20,000",
    "$20,000 - $30,000",
    "$30,000 - $40,000",
    "$40,000 - $50,000",
    "Above $50,000"
  ];

  const features = [
    {
      icon: FileEdit,
      title: "Professional Format",
      description: "Get a perfectly formatted SOP that follows international standards",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      title: "Unique Content",
      description: "AI-powered content generation that ensures originality",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Receive your customized SOP within 24 hours",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const inputClasses = "w-full bg-[#2A2A5A] text-white border border-[#FFD700]/20 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FFD700] transition-all duration-300";
  const labelClasses = "block text-white/80 mb-2 font-medium";

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

  return (
    <div className="min-h-screen bg-[#1A1A40]">
      <Navbar />

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-[#FFD700]"
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

      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073&auto=format&fit=crop)',
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
            <FileText className="w-12 h-12 text-[#FFD700]" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            SOP <span className="text-[#FFD700]">Builder</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Create a compelling Statement of Purpose that stands out with our advanced AI-powered builder
          </motion.p>

          {/* Process Steps */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                variants={itemVariants}
              >
                <motion.div
                  className={`relative p-6 rounded-xl bg-gradient-to-br ${feature.color} backdrop-blur-lg transform transition-all duration-300 ${
                    hoveredFeature === index ? 'scale-105' : ''
                  }`}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 mx-auto"
                    animate={hoveredFeature === index ? { rotate: 360 } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ["0%", "30%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-white/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.form 
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <motion.div
                  key={step}
                  className={`relative ${step <= currentStep ? 'text-[#FFD700]' : 'text-white/50'}`}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step <= currentStep ? 'bg-[#FFD700]/20' : 'bg-white/10'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step <= currentStep ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <span>{step}</span>
                    )}
                  </motion.div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm">
                    Step {step}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="h-2 bg-white/10 rounded-full mt-8">
              <motion.div
                className="h-full bg-[#FFD700] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-[#2A2A5A]/30 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter Full Name"
                        className={inputClasses}
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className={labelClasses}>Mobile Number *</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="tel"
                        id="mobile"
                        name="mobile"
                        placeholder="Enter Mobile Number"
                        className={inputClasses}
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>Email *</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        className={inputClasses}
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="courseName" className={labelClasses}>Course Name *</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="courseName"
                        name="courseName"
                        placeholder="Enter Course Name"
                        className={inputClasses}
                        value={formData.courseName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="interestedCountry" className={labelClasses}>Interested Country *</label>
                      <motion.select
                        whileFocus={{ scale: 1.02 }}
                        id="interestedCountry"
                        name="interestedCountry"
                        className={inputClasses}
                        value={formData.interestedCountry}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Please Select</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </motion.select>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="bachelorsDegree" className={labelClasses}>Bachelor's Degree *</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="bachelorsDegree"
                        name="bachelorsDegree"
                        placeholder="Enter Degree"
                        className={inputClasses}
                        value={formData.bachelorsDegree}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="bachelorsStream" className={labelClasses}>Bachelor's Stream *</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="bachelorsStream"
                        name="bachelorsStream"
                        placeholder="Enter Stream"
                        className={inputClasses}
                        value={formData.bachelorsStream}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="englishTest" className={labelClasses}>English Proficiency Test</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="englishTest"
                        name="englishTest"
                        placeholder="Enter Test Name and Score"
                        className={inputClasses}
                        value={formData.englishTest}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="greScore" className={labelClasses}>GRE Score *</label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="greScore"
                        name="greScore"
                        placeholder="Enter Score"
                        className={inputClasses}
                        value={formData.greScore}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <motion.div 
              className="flex justify-between mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                type="button"
                onClick={prevStep}
                className={`group relative px-8 py-3 rounded-full overflow-hidden ${
                  currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={currentStep !== 1 ? { scale: 1.05 } : {}}
                whileTap={currentStep !== 1 ? { scale: 0.95 } : {}}
                disabled={currentStep === 1}
              >
                <span className="relative z-10 flex items-center space-x-2 text-[#FFD700]">
                  <span>Previous</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#FFD700]/10 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                type={currentStep === totalSteps ? 'submit' : 'button'}
                onClick={currentStep === totalSteps ? undefined : nextStep}
                className="group relative px-8 py-3 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-2 text-[#FFD700]">
                  <span>{currentStep === totalSteps ? 'Generate SOP' : 'Next'}</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-[#FFD700]/10 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.form>
      </div>

      <Footer />
    </div>
  );
};

export default SopBuilder;
