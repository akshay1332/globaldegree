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
    description: 'Unlock top-notch education at prestigious institutions like Harvard, MIT, and Stanford. Benefit from cutting-edge research facilities, diverse campus life, and extensive networking opportunities. Optional Practical Training (OPT) allows for valuable work experience.',
    icon: GraduationCap,
    bgColor: 'from-purple-900/80 to-indigo-900/80',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop',
    features: [
      'World-renowned universities',
      'Cutting-edge research facilities',
      'Diverse student community',
      'Optional Practical Training',
      'Flexible education system'
    ],
    stats: {
      universities: '4,000+',
      intStudents: '1M+',
      workVisa: '3 years OPT',
      ranking: '#1 in QS'
    },
    position: 'center'
  },
  {
    id: 2,
    title: 'Study in UK',
    description: 'Experience centuries of academic excellence at Oxford, Cambridge, and Imperial College. Benefit from shorter course durations, internationally recognized degrees, and post-study work opportunities. Immerse yourself in rich cultural heritage while building your future.',
    icon: GraduationCap,
    bgColor: 'from-indigo-900/80 to-blue-900/80',
    image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1887&auto=format&fit=crop',
    features: [
      'Shorter degree programs',
      'Historic institutions',
      'Research excellence',
      'Graduate Route Visa',
      'Global recognition'
    ],
    stats: {
      universities: '160+',
      intStudents: '600K+',
      workVisa: '2 years PSW',
      ranking: '#2 in QS'
    },
    position: 'center'
  },
  {
    id: 3,
    title: 'Study in Australia',
    description: 'Join top institutions like Melbourne, Sydney, and ANU. Experience world-class education in a country known for its high quality of life, excellent weather, and welcoming culture. Enjoy post-study work rights up to 6 years and excellent career opportunities.',
    icon: GraduationCap,
    bgColor: 'from-blue-900/80 to-cyan-900/80',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop',
    features: [
      'High quality of life',
      'Post-study work rights',
      'Safe environment',
      'World-class research',
      'Beautiful campuses'
    ],
    stats: {
      universities: '43',
      intStudents: '750K+',
      workVisa: '2-6 years',
      ranking: '#3 for education'
    },
    position: 'center'
  },
  {
    id: 4,
    title: 'Study in Ireland',
    description: 'Study in the land of saints and scholars at prestigious institutions like Trinity College Dublin and UCD. Experience a perfect blend of traditional values and modern innovation, with excellent career opportunities in tech hubs.',
    icon: GraduationCap,
    bgColor: 'from-cyan-900/80 to-teal-900/80',
    image: 'https://images.unsplash.com/photo-1564959130747-897fb406b9af?q=80&w=1974&auto=format&fit=crop',
    features: [
      'English-speaking country',
      'Tech hub opportunities',
      'Rich cultural heritage',
      'Stay back option',
      'EU access'
    ],
    stats: {
      universities: '34+',
      intStudents: '250K+',
      workVisa: '2 years',
      ranking: 'Top 3% globally'
    },
    position: 'center'
  },
  {
    id: 5,
    title: 'Study in Canada',
    description: 'Experience world-class education at institutions like Toronto, McGill, and UBC. Enjoy high living standards, multicultural environment, and excellent post-graduation work opportunities with pathways to permanent residency.',
    icon: GraduationCap,
    bgColor: 'from-teal-900/80 to-emerald-900/80',
    image: 'https://images.unsplash.com/photo-1530025809667-1f4bcff8e60f?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Work while studying',
      'Immigration pathways',
      'Healthcare benefits',
      'Multicultural environment',
      'High employment rate'
    ],
    stats: {
      universities: '100+',
      intStudents: '800K+',
      workVisa: '3 years PGWP',
      ranking: 'Top 5 globally'
    },
    position: 'center'
  },
  {
    id: 6,
    title: 'Study in New Zealand',
    description: 'Experience excellence at universities like Auckland and Otago. Enjoy a unique blend of quality education and adventure in one of the world\'s most beautiful countries. Benefit from practical learning approaches and post-study work opportunities.',
    icon: GraduationCap,
    bgColor: 'from-emerald-900/80 to-green-900/80',
    image: 'https://images.unsplash.com/photo-1706311564943-c4809d1a39ea?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Work rights included',
      'Practical education',
      'Safe environment',
      'Natural beauty',
      'Quality lifestyle'
    ],
    stats: {
      universities: '8',
      intStudents: '100K+',
      workVisa: '3 years',
      ranking: 'Top 3% globally'
    },
    position: 'center'
  },
  {
    id: 7,
    title: 'Study in Germany',
    description: 'Access tuition-free education at renowned institutions like TU Munich and Heidelberg. Experience excellence in engineering and technology while enjoying a high standard of living and strong industry connections.',
    icon: GraduationCap,
    bgColor: 'from-green-900/80 to-lime-900/80',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      'Free/Low tuition',
      'Strong economy',
      'Industry links',
      'Research excellence',
      'Job seeker visa'
    ],
    stats: {
      universities: '400+',
      intStudents: '450K+',
      workVisa: '18 months',
      ranking: '#4 for innovation'
    },
    position: 'center'
  },
  {
    id: 8,
    title: 'Study in France',
    description: 'Join prestigious institutions like Sorbonne and École Polytechnique. Experience world-class education in the heart of Europe while immersing yourself in rich culture, art, and history. Benefit from affordable education and post-study opportunities.',
    icon: GraduationCap,
    bgColor: 'from-lime-900/80 to-purple-900/80',
    image: 'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=2000&auto=format&fit=crop',
    features: [
      'Affordable education',
      'Rich culture & history',
      'Central EU location',
      'Research opportunities',
      'Art & Innovation'
    ],
    stats: {
      universities: '250+',
      intStudents: '400K+',
      workVisa: '2 years',
      ranking: 'Top 10 globally'
    },
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
        pinSpacing: false
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Heading Section */}
      <div className="min-h-[50vh] flex items-center justify-center relative overflow-hidden bg-[#1A1A40]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A40] via-[#1A1A40]/90 to-[#1A1A40]" />
          {/* Animated Background Elements */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#FFD700]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.2,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            className="inline-block relative group cursor-default"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
              Explore Our Top
              <span className="relative inline-block ml-4">
                <span className="relative z-10 text-[#FFD700]">Study Destinations</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-[#FFD700]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.div
                  className="absolute -inset-2 bg-[#FFD700]/10 rounded-lg -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </h1>
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Discover world-class education opportunities across the globe
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {services.map((service, index) => (
        <section
          key={service.id}
          className="service-section min-h-screen relative flex items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 group">
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-90 group-hover:opacity-95 transition-opacity duration-300`} />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <div className="flex justify-center mb-6">
                <service.icon className="w-16 h-16 text-[#FFD700]" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-6">{service.title}</h3>
              <p className="text-white/90 text-lg mb-8">{service.description}</p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {Object.entries(service.stats).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-lg p-4 transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-[#FFD700] text-2xl font-bold mb-2">
                      {value}
                    </div>
                    <div className="text-white/80 text-sm capitalize">
                      {key === 'intStudents' ? 'International Students' :
                       key === 'workVisa' ? 'Work Visa' :
                       key === 'universities' ? 'Universities' : 'Ranking'}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center space-x-2 text-white/90"
                  >
                    <ArrowRight className="w-4 h-4 text-[#FFD700]" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;
