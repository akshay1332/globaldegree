import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';
import { GraduationCap, BookOpen, FileCheck, Plane, Building2, Globe, Users, Award } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'Study in USA',
    description: 'Experience world-class education at prestigious universities like Harvard, MIT, and Stanford. Benefit from cutting-edge research facilities, diverse campus life, and extensive networking opportunities. Optional Practical Training (OPT) allows for valuable work experience.',
    icon: GraduationCap,
    bgColor: 'from-purple-900/80 to-indigo-900/80',
    image: 'https://images.unsplash.com/photo-1589758443446-7194ba33ce35?q=80&w=2070&auto=format&fit=crop',
    features: [
      'Flexible credit system',
      'Research opportunities',
      'Cultural diversity',
      'Campus activities',
      'Work while studying'
    ],
    position: 'center'
  },
  {
    id: 2,
    title: 'Study in UK',
    description: 'Join prestigious institutions like Oxford, Cambridge, and Imperial College. Benefit from shorter course duration, rich cultural heritage, and high academic standards. Post-study work visa opportunities available for graduates.',
    icon: GraduationCap,
    bgColor: 'from-indigo-900/80 to-blue-900/80',
    image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1887&auto=format&fit=crop',
    features: [
      'Shorter programs',
      'Global recognition',
      'Research excellence',
      'Historic institutions',
      'Post-study work visa'
    ],
    position: 'center'
  },
  {
    id: 3,
    title: 'Study in Australia',
    description: 'Enjoy high-quality education at universities like Melbourne, Sydney, and ANU. Experience amazing weather, friendly culture, and excellent quality of life. Post-study work rights up to 4 years available for graduates.',
    icon: GraduationCap,
    bgColor: 'from-blue-900/80 to-cyan-900/80',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop',
    features: [
      'Work opportunities',
      'Beautiful campus life',
      'Safe environment',
      'Quality education',
      'Multicultural society'
    ],
    position: 'center'
  },
  {
    id: 4,
    title: 'Study in Ireland',
    description: 'Study in the land of saints and scholars at top institutions like Trinity College Dublin. Enjoy the perfect blend of traditional values and modern innovation. Two-year stay-back option for international graduates.',
    icon: GraduationCap,
    bgColor: 'from-cyan-900/80 to-teal-900/80',
    image: 'https://images.unsplash.com/photo-1564959130747-897fb406b9af?q=80&w=1974&auto=format&fit=crop',
    features: [
      'English-speaking country',
      'Rich cultural heritage',
      'Innovation hub',
      'Welcoming atmosphere',
      'Post-study opportunities'
    ],
    position: 'center'
  },
  {
    id: 5,
    title: 'Study in Canada',
    description: 'Experience world-class education at universities like Toronto, McGill, and UBC. Enjoy high living standards, multicultural environment, and excellent post-graduation work opportunities. Up to 3 years post-study work permit available.',
    icon: GraduationCap,
    bgColor: 'from-teal-900/80 to-emerald-900/80',
    image: 'https://images.unsplash.com/photo-1569581726100-c129ae0fc669?q=80&w=1974&auto=format&fit=crop',
    features: [
      'Quality education',
      'Safe environment',
      'Work opportunities',
      'Healthcare benefits',
      'Immigration pathways'
    ],
    position: 'center'
  },
  {
    id: 6,
    title: 'Study in New Zealand',
    description: 'Study in a country known for innovation and research at universities like Auckland and Otago. Experience stunning landscapes, friendly people, and excellent work-life balance. Post-study work rights available for graduates.',
    icon: GraduationCap,
    bgColor: 'from-emerald-900/80 to-green-900/80',
    image: 'https://images.unsplash.com/photo-1589665653391-c891dd93f6c6?q=80&w=1974&auto=format&fit=crop',
    features: [
      'Quality lifestyle',
      'Research excellence',
      'Practical learning',
      'Work opportunities',
      'Beautiful environment'
    ],
    position: 'center'
  },
  {
    id: 7,
    title: 'Study in Germany',
    description: 'Access tuition-free education at top institutions like TU Munich and Heidelberg University. Experience excellence in engineering, technology, and innovation. 18-month job seeker visa available after graduation.',
    icon: GraduationCap,
    bgColor: 'from-green-900/80 to-lime-900/80',
    image: 'https://images.unsplash.com/photo-1599928020632-ad30583799ea?q=80&w=1974&auto=format&fit=crop',
    features: [
      'No/Low tuition fees',
      'Strong economy',
      'Research opportunities',
      'Industry connections',
      'Work permits'
    ],
    position: 'center'
  },
  {
    id: 8,
    title: 'Study in France',
    description: 'Study in the heart of Europe at prestigious institutions like Sorbonne and École Polytechnique. Experience rich culture, art, and history while getting world-class education. Two-year post-study work permit available.',
    icon: GraduationCap,
    bgColor: 'from-lime-900/80 to-purple-900/80',
    image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=2000&auto=format&fit=crop',
    features: [
      'Cultural experience',
      'Historic institutions',
      'Research excellence',
      'Art and innovation',
      'Central location'
    ],
    position: 'center'
  }
];

const ServiceCard = ({ service, index }: any) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-90 group-hover:opacity-95 transition-opacity duration-300`} />
      </div>

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
          <p className="text-white/90">{service.description}</p>
          <ul className="text-white/90 mt-4">
            {service.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="flex items-center text-white/90 group-hover:text-white"
        >
          <span className="mr-2">Learn More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".parallax-bg", {
        y: "30%",
        ease: "none",
        scrollTrigger: {
          trigger: ".parallax-section",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#1A1A40] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden parallax-section">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-8"
          >
            Explore Our <span className="text-[#FFD700]">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Choose Global Degrees for a comprehensive suite of services that go beyond conventional boundaries. We're not just consultants; we are your partners in building a successful academic future.
          </motion.p>
        </div>

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

      {/* Services Grid */}
      <div ref={containerRef} className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <HowItWorks />

      <Footer />
    </div>
  );
};

export default Services;
