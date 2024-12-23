import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Award, GraduationCap, Globe, Shield, CreditCard } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

gsap.registerPlugin(ScrollTrigger);

const whyChooseUs = [
  {
    id: 1,
    title: 'Extensive Reach',
    description: 'Benefit from our nationwide presence with 18 fully operational branches.',
    icon: Globe,
    bgColor: 'from-purple-900/80 to-indigo-900/80',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Trusted Affiliations',
    description: 'NAFSA member, ICEF Certified Agency & AIRC certified for excellence.',
    icon: Shield,
    bgColor: 'from-indigo-900/80 to-blue-900/80',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Comprehensive Services',
    description: 'Access all services in-house, including university shortlisting and visa counseling.',
    icon: Users,
    bgColor: 'from-blue-900/80 to-cyan-900/80',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Impressive Track Record',
    description: 'Excellence in matching students with top institutions worldwide.',
    icon: Award,
    bgColor: 'from-cyan-900/80 to-teal-900/80',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Transparent Approach',
    description: 'Direct marketing approach through our branch networks.',
    icon: GraduationCap,
    bgColor: 'from-teal-900/80 to-emerald-900/80',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Financial Assistance',
    description: 'Partnerships with Govt. certified financial institutions.',
    icon: CreditCard,
    bgColor: 'from-emerald-900/80 to-purple-900/80',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
  }
];

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const sections = gsap.utils.toArray('.feature-section:not(:last-child)');
    
    sections.forEach((section: any) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        snap: 1,
        scrub: 1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#1A1A40] min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop)',
            filter: 'brightness(0.3)'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A40]/50 to-[#1A1A40]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="text-[#FFD700]">Us</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Empowering Students to Achieve Their Global Education Dreams
          </motion.p>
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

      {/* About Section */}
      <div className="relative min-h-screen bg-[#1A1A40] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20 transform hover:scale-105 transition-transform duration-1000"
             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop)' }}>
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              At Global Degrees, our goal is to be recognized as one of the most reliable and reputable organizations in the field of foreign education services. Established in 2015, we have evolved into a highly versatile provider of overseas education advisory and consulting services, driven by our commitment to integrity, professionalism, and innovative practices.
            </motion.p>

            <motion.p 
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We started with a simple goal – to be really helpful in foreign education. As time passed, people began to trust us because we always try to do our best. We believe in being honest, professional, and trying new and creative ways to help you. When you talk to us at Global Degrees, you'll notice we care a lot about helping you grow as a student. We want to understand what you dream of achieving in your career and guide you in that direction. Every time you connect with us, you'll feel a strong purpose – we're here to support your overall growth and focus on your special career goals.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Director's Message Section */}
      <div className="relative min-h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop)',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-light text-[#FFD700] mb-4">Message from the Director's Office</h2>
              <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop" 
                  alt="Director's Office"
                  className="rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  We take great pride in introducing you to Global Degrees. Over the years, we have developed into a dynamic organization that specializes in student recruitment to foreign universities, university partnerships, and scaling growth for overseas education-related businesses. Our performance-driven approach has positioned us as a leader in the industry.
                </p>

                <p className="text-xl text-gray-300 leading-relaxed">
                  Our firm's strength is derived from core marketing strategies, building and maintaining industry relations, and delivering quality service. Unlike other models, we operate with company-owned branches to ensure competence and excellence in our services. With a strong presence in South India and a network of eighteen branches, we prioritize the needs of our students, university partners, and sub-agents alike.
                </p>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <div className="flex items-center space-x-2 text-[#FFD700] font-semibold">
                    <span>Global Degree consultancy in Bangalore</span>
                    <span className="w-12 h-0.5 bg-[#FFD700]"></span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Sections */}
      <div ref={containerRef} className="relative">
        {whyChooseUs.map((feature, index) => (
          <motion.div
            key={feature.id}
            className={`feature-section h-screen w-full relative overflow-hidden ${
              index === whyChooseUs.length - 1 ? 'relative' : 'sticky top-0'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundPosition: 'center'
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} transition-opacity duration-300`} />
            
            <motion.div 
              className="absolute inset-0 flex flex-col justify-center items-center text-white p-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <feature.icon className="w-16 h-16 text-[#FFD700]" />
              </motion.div>
              
              <motion.h3 
                className="text-4xl sm:text-5xl font-light mb-6 text-center"
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {feature.title}
              </motion.h3>
              
              <motion.p 
                className="text-lg sm:text-xl max-w-2xl text-center leading-relaxed"
                initial={{ x: 50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
