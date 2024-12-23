import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: 'Study in USA',
    description: 'Unlock top-notch education and diverse opportunities in the United States.',
    icon: GraduationCap,
    bgColor: 'from-purple-900/80 to-indigo-900/80',
    image: 'https://plus.unsplash.com/premium_photo-1726862569563-37d29397ac3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    position: 'center'
  },
  {
    id: 2,
    title: 'Study in UK',
    description: 'Immerse yourself in quality education and rich history in the United Kingdom.',
    icon: GraduationCap,
    bgColor: 'from-indigo-900/80 to-blue-900/80',
    image: 'https://plus.unsplash.com/premium_photo-1726862569563-37d29397ac3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    position: 'center'
  },
  {
    id: 3,
    title: 'Study in Australia',
    description: 'Experience relaxed learning vibe and exciting cultural experiences!',
    icon: GraduationCap,
    bgColor: 'from-blue-900/80 to-cyan-900/80',
    image: 'https://plus.unsplash.com/premium_photo-1726862569563-37d29397ac3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    position: 'center'
  },
  {
    id: 4,
    title: 'Study in Ireland',
    description: 'Discover quality education in Ireland\'s welcoming atmosphere.',
    icon: GraduationCap,
    bgColor: 'from-cyan-900/80 to-teal-900/80',
    image: 'https://plus.unsplash.com/premium_photo-1726862569563-37d29397ac3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    position: 'center'
  },
  {
    id: 5,
    title: 'Study in Canada',
    description: 'Choose Canada for high-quality education and a global community.',
    icon: GraduationCap,
    bgColor: 'from-teal-900/80 to-emerald-900/80',
    image: 'https://plus.unsplash.com/premium_photo-1726862569563-37d29397ac3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    position: 'center'
  },
  {
    id: 6,
    title: 'Study in New Zealand',
    description: 'Explore stunning landscapes and academic excellence in New Zealand.',
    icon: GraduationCap,
    bgColor: 'from-emerald-900/80 to-green-900/80',
    image: 'https://plus.unsplash.com/premium_photo-1726862569563-37d29397ac3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    position: 'center'
  },
  {
    id: 7,
    title: 'Study in Germany',
    description: 'Experience innovation and research in Germany\'s dynamic education.',
    icon: GraduationCap,
    bgColor: 'from-green-900/80 to-lime-900/80',
    image: 'https://plus.unsplash.com/premium_photo-1726862569563-37d29397ac3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    position: 'center'
  },
  {
    id: 8,
    title: 'Study in France',
    description: 'Indulge in art, history, and quality education in the heart of Europe.',
    icon: GraduationCap,
    bgColor: 'from-lime-900/80 to-purple-900/80',
    image: 'https://plus.unsplash.com/premium_photo-1726862569563-37d29397ac3b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    position: 'center'
  }
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const sections = gsap.utils.toArray('.service-section:not(:last-child)');
    
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
    <div ref={containerRef} className="relative bg-[#1A1A40]">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="h-screen flex items-center justify-center sticky top-0 overflow-hidden"
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-6xl font-light text-white mb-6">
            Study <span className="text-[#FFD700]">Abroad</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore world-class education opportunities across the globe
          </p>
        </motion.div>
      </motion.div>

      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`service-section h-screen w-full relative overflow-hidden ${
            index === services.length - 1 ? 'relative' : 'sticky top-0'
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundPosition: service.position
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} transition-opacity duration-300`} />
          
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
              <service.icon className="w-16 h-16 text-[#FFD700]" />
            </motion.div>
            
            <motion.h3 
              className="text-4xl sm:text-5xl font-light mb-6 text-center"
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            
            <motion.p 
              className="text-lg sm:text-xl max-w-2xl text-center leading-relaxed mb-8"
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {service.description}
            </motion.p>
            
            <motion.button
              className="group relative px-8 py-3 rounded-full bg-[#FFD700] text-[#1A1A40] font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-[-5px]"
              >
                Learn More
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
