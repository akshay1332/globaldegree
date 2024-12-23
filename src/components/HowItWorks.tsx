import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: FileSearch,
    title: "Course Selection",
    description: "Explore and choose from thousands of courses across global universities that match your interests.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: GraduationCap,
    title: "University Shortlisting",
    description: "We help you shortlist universities based on your profile, preferences, and career goals.",
    color: "from-pink-500 to-red-500"
  },
  {
    icon: FileCheck,
    title: "Document Preparation",
    description: "Get guidance on preparing all necessary documents including SOP, LORs, and transcripts.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: FileText,
    title: "Application Process",
    description: "We assist you in filling out applications and submitting them to your chosen universities.",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Building2,
    title: "University Response",
    description: "Track your applications and receive updates on university decisions.",
    color: "from-yellow-500 to-green-500"
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description: "Get comprehensive support for visa application and pre-departure preparations.",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: CheckCircle2,
    title: "Pre-Departure Support",
    description: "Receive guidance on accommodation, travel arrangements, and cultural preparation.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Trophy,
    title: "Journey Begins",
    description: "Start your international education journey with confidence and our continued support.",
    color: "from-cyan-500 to-blue-500"
  }
];

const HowItWorks = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
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
                  className="p-6 rounded-xl border border-[var(--color-primary)] border-opacity-20 relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 opacity-10 bg-gradient-to-br ${step.color}`}
                    initial={false}
                    animate={{
                      opacity: hoveredStep === index ? 0.2 : 0.1
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-[var(--color-primary)] bg-opacity-10 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <step.icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-2 flex items-center">
                      <span className="text-[var(--color-primary)] mr-2">Step {index + 1}:</span>
                      {step.title}
                    </h3>
                    <p className="text-[var(--color-text)] opacity-80">
                      {step.description}
                    </p>
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