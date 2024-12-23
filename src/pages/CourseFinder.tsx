import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, GraduationCap, Globe, Award, CheckCircle2, BookOpen, Target, Compass, Sparkles } from 'lucide-react';

const CourseFinder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const totalSteps = 3;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    courseName: '',
    interestedCountry: '',
    intendedYear: '',
    bachelorsDegree: '',
    bachelorsStream: '',
    bachelorsPercentage: '',
    bachelorsPassoutYear: '',
    backlogs: '',
    interPercentage: '',
    interPassoutYear: '',
    englishProficiency: '',
    greScore: '',
    applyingFrom: '',
    tuitionFeeRange: ''
  });

  const countries = [
    'USA', 'UK', 'Canada', 'Australia', 'New Zealand', 'Germany', 'Ireland', 'Singapore'
  ];

  const applyingFromOptions = [
    'Home Country', 'Already in Destination Country', 'Other Country'
  ];

  const feeRanges = [
    '10,000 - 15,000 USD',
    '15,000 - 20,000 USD',
    '20,000 - 25,000 USD',
    '25,000 - 30,000 USD',
    '30,000+ USD'
  ];

  const features = [
    {
      icon: Target,
      title: "Personalized Matching",
      description: "Get course recommendations tailored to your profile and preferences",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Globe,
      title: "Global Database",
      description: "Access courses from top universities worldwide",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      title: "Smart Analysis",
      description: "AI-powered analysis to find your perfect academic match",
      color: "from-purple-500 to-pink-500"
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop)',
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
            <Search className="w-12 h-12 text-[#FFD700]" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Course <span className="text-[#FFD700]">Finder</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Find your perfect course match with our intelligent course finder
          </motion.p>

          {/* Features */}
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
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <motion.form 
          onSubmit={handleSubmit}
          className="bg-[#2A2A5A]/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter Full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className={labelClasses}>Mobile Number *</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Enter mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClasses}>E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Course Name */}
            <div>
              <label htmlFor="courseName" className={labelClasses}>Course Name *</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                placeholder="Enter course name"
                value={formData.courseName}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Interested Country */}
            <div>
              <label htmlFor="interestedCountry" className={labelClasses}>Interested Country *</label>
              <select
                id="interestedCountry"
                name="interestedCountry"
                value={formData.interestedCountry}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="">Please select</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Intended Year */}
            <div>
              <label htmlFor="intendedYear" className={labelClasses}>Intended Year *</label>
              <input
                type="month"
                id="intendedYear"
                name="intendedYear"
                placeholder="Select month and year"
                value={formData.intendedYear}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Bachelors Degree */}
            <div>
              <label htmlFor="bachelorsDegree" className={labelClasses}>Bachelors Degree *</label>
              <input
                type="text"
                id="bachelorsDegree"
                name="bachelorsDegree"
                placeholder="Enter degree"
                value={formData.bachelorsDegree}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Bachelors Stream */}
            <div>
              <label htmlFor="bachelorsStream" className={labelClasses}>Bachelors Stream *</label>
              <input
                type="text"
                id="bachelorsStream"
                name="bachelorsStream"
                placeholder="Enter Stream"
                value={formData.bachelorsStream}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Bachelors Percentage */}
            <div>
              <label htmlFor="bachelorsPercentage" className={labelClasses}>Bachelors Percentage or CGPA *</label>
              <input
                type="text"
                id="bachelorsPercentage"
                name="bachelorsPercentage"
                placeholder="Enter percentage or CGPA"
                value={formData.bachelorsPercentage}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Bachelors Passout Year */}
            <div>
              <label htmlFor="bachelorsPassoutYear" className={labelClasses}>Bachelors Pass Out Year *</label>
              <input
                type="text"
                id="bachelorsPassoutYear"
                name="bachelorsPassoutYear"
                placeholder="Enter year"
                value={formData.bachelorsPassoutYear}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Backlogs */}
            <div>
              <label htmlFor="backlogs" className={labelClasses}>Backlogs in Degree</label>
              <input
                type="text"
                id="backlogs"
                name="backlogs"
                placeholder="Enter if any"
                value={formData.backlogs}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            {/* Inter Percentage */}
            <div>
              <label htmlFor="interPercentage" className={labelClasses}>Inter Percentage or CGPA *</label>
              <input
                type="text"
                id="interPercentage"
                name="interPercentage"
                placeholder="Enter percentage or CGPA"
                value={formData.interPercentage}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Inter Passout Year */}
            <div>
              <label htmlFor="interPassoutYear" className={labelClasses}>Inter Pass Out Year *</label>
              <input
                type="text"
                id="interPassoutYear"
                name="interPassoutYear"
                placeholder="Enter year"
                value={formData.interPassoutYear}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* English Proficiency */}
            <div>
              <label htmlFor="englishProficiency" className={labelClasses}>English Proficiency Test</label>
              <input
                type="text"
                id="englishProficiency"
                name="englishProficiency"
                placeholder="Enter Test name and Score"
                value={formData.englishProficiency}
                onChange={handleChange}
                className={inputClasses}
              />
            </div>

            {/* GRE Score */}
            <div>
              <label htmlFor="greScore" className={labelClasses}>GRE *</label>
              <input
                type="text"
                id="greScore"
                name="greScore"
                placeholder="Enter Score"
                value={formData.greScore}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            {/* Applying From */}
            <div>
              <label htmlFor="applyingFrom" className={labelClasses}>Applying From *</label>
              <select
                id="applyingFrom"
                name="applyingFrom"
                value={formData.applyingFrom}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="">Choose an option</option>
                {applyingFromOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            {/* Tuition Fee Range */}
            <div>
              <label htmlFor="tuitionFeeRange" className={labelClasses}>Tuition Fee Range *</label>
              <select
                id="tuitionFeeRange"
                name="tuitionFeeRange"
                value={formData.tuitionFeeRange}
                onChange={handleChange}
                required
                className={inputClasses}
              >
                <option value="">Choose an option</option>
                {feeRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="mt-8 w-full bg-[#FFD700] text-[#1A1A40] py-4 rounded-lg font-semibold text-lg hover:bg-[#FFD700]/90 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit Application
          </motion.button>
        </motion.form>
      </div>

      <Footer />
    </div>
  );
};

export default CourseFinder;
