import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  UserCircle2, 
  FileSearch, 
  GraduationCap, 
  FileCheck, 
  Plane, 
  Building2, 
  FileText, 
  CheckCircle2, 
  Trophy 
} from 'lucide-react';
import CustomCursor from './CustomCursor';

const steps = [
  {
    icon: UserCircle2,
    title: "Profile Creation",
    description: "Start your journey by creating your profile. Tell us about your academic background and aspirations.",
    color: "from-blue-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: FileSearch,
    title: "Course Selection",
    description: "Explore and choose from thousands of courses across global universities that match your interests.",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: GraduationCap,
    title: "University Shortlisting",
    description: "We help you shortlist universities based on your profile, preferences, and career goals.",
    color: "from-pink-500 to-red-500",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
  },
  {
    icon: FileCheck,
    title: "Document Preparation",
    description: "Get guidance on preparing all necessary documents including SOP, LORs, and transcripts.",
    color: "from-red-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: FileText,
    title: "Application Process",
    description: "We assist you in filling out applications and submitting them to your chosen universities.",
    color: "from-orange-500 to-yellow-500",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Building2,
    title: "University Response",
    description: "Track your applications and receive updates on university decisions.",
    color: "from-yellow-500 to-green-500",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description: "Get comprehensive support for visa application and pre-departure preparations.",
    color: "from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
  },
  {
    icon: CheckCircle2,
    title: "Pre-Departure Support",
    description: "Receive guidance on accommodation, travel arrangements, and cultural preparation.",
    color: "from-teal-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1501621667575-af81f1f0bacc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Trophy,
    title: "Journey Begins",
    description: "Start your international education journey with confidence and our continued support.",
    color: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
  }
];

const HowItWorks = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[var(--color-background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Journey to <span className="text-[var(--color-primary)]">Global Education</span>
          </h2>
          <p className="text-[var(--color-text)] opacity-80 max-w-3xl mx-auto text-lg">
            Follow our simple step-by-step process to make your international education dreams a reality
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] to-transparent" />

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`relative flex items-center mb-24 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] transform -translate-x-1/2"
                initial={false}
                animate={{
                  scale: hoveredStep === index ? 1.5 : 1,
                  backgroundColor: hoveredStep === index ? 'var(--color-accent)' : 'var(--color-primary)'
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Content Card */}
              <motion.div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}
                onMouseEnter={() => {
                  setHoveredStep(index);
                  setCursorVariant('button');
                }}
                onMouseLeave={() => {
                  setHoveredStep(null);
                  setCursorVariant('default');
                }}
              >
                <motion.div
                  className="rounded-xl border border-[var(--color-primary)] border-opacity-20 relative overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Background Image with Hover Effects */}
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-all duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${step.image})` }}
                    />
                    {/* Gradient Overlay with reduced opacity */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-60 group-hover:opacity-75 transition-opacity duration-500`} />
                    
                    {/* Additional hover effects */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
                  </div>

                  <div className="relative z-10 p-8">
                    {/* Glowing effect container */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1500" />
                    </div>

                    {/* Icon with enhanced effects */}
                    <motion.div
                      className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-all duration-500 relative"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Glowing ring */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/0 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <step.icon className="w-10 h-10 text-white relative z-10" />
                    </motion.div>

                    {/* Step number with enhanced styling */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
                      <span className="text-white/90 text-sm font-semibold">{index + 1}</span>
                    </div>

                    <motion.h3 
                      className="text-2xl font-semibold mb-4 text-white text-center group-hover:text-[#FFD700] transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {step.title}
                    </motion.h3>

                    <motion.p 
                      className="text-white/90 text-lg text-center leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {step.description}
                    </motion.p>

                    {/* Animated arrow */}
                    <motion.div 
                      className="mt-6 flex justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          initial={{ x: 0 }}
                          animate={hoveredStep === index ? { x: [0, 5, 0] } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <CustomCursor variant={cursorVariant} />
    </section>
  );
};

export default HowItWorks;