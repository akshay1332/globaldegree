import { motion } from 'framer-motion';
import { GraduationCap, Award, Globe, Users, Search, MapPin, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const topSchools = [
  {
    id: 1,
    name: 'Harvard University',
    country: 'USA',
    ranking: '#1 QS World Rankings',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop',
    programs: ['Business', 'Law', 'Medicine', 'Engineering'],
    acceptance: '5%',
    intStudents: '24%'
  },
  {
    id: 2,
    name: 'University of Oxford',
    country: 'UK',
    ranking: '#2 QS World Rankings',
    image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=1887&auto=format&fit=crop',
    programs: ['Arts', 'Sciences', 'Engineering', 'Medicine'],
    acceptance: '17%',
    intStudents: '41%'
  },
  {
    id: 3,
    name: 'University of Toronto',
    country: 'Canada',
    ranking: '#21 QS World Rankings',
    image: 'https://images.unsplash.com/photo-1569581726100-c129ae0fc669?q=80&w=1974&auto=format&fit=crop',
    programs: ['Computer Science', 'Business', 'Medicine', 'Arts'],
    acceptance: '43%',
    intStudents: '26%'
  },
  {
    id: 4,
    name: 'University of Melbourne',
    country: 'Australia',
    ranking: '#33 QS World Rankings',
    image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2030&auto=format&fit=crop',
    programs: ['Engineering', 'Sciences', 'Arts', 'Business'],
    acceptance: '70%',
    intStudents: '40%'
  },
  {
    id: 5,
    name: 'Technical University Munich',
    country: 'Germany',
    ranking: '#50 QS World Rankings',
    image: 'https://images.unsplash.com/photo-1599928020632-ad30583799ea?q=80&w=1974&auto=format&fit=crop',
    programs: ['Engineering', 'Technology', 'Sciences', 'Mathematics'],
    acceptance: '80%',
    intStudents: '32%'
  },
  {
    id: 6,
    name: 'University of Auckland',
    country: 'New Zealand',
    ranking: '#87 QS World Rankings',
    image: 'https://images.unsplash.com/photo-1589665653391-c891dd93f6c6?q=80&w=1974&auto=format&fit=crop',
    programs: ['Business', 'Engineering', 'Arts', 'Sciences'],
    acceptance: '65%',
    intStudents: '33%'
  }
];

const features = [
  {
    icon: GraduationCap,
    title: 'Top 100 Universities',
    description: "Access to world's leading educational institutions"
  },
  {
    icon: Award,
    title: 'Accredited Programs',
    description: 'Internationally recognized degrees and certifications'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Connect with students and alumni worldwide'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Personalized counseling for university selection'
  }
];

const GlobalSchools = () => {
  return (
    <div className="bg-[#1A1A40] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A40] via-[#1A1A40]/90 to-[#1A1A40]" />
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

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Global <span className="text-[#FFD700]">100+ Schools</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Explore top-ranked universities and colleges worldwide
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto relative"
          >
            <input
              type="text"
              placeholder="Search universities..."
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFD700] text-[#1A1A40] p-3 rounded-full hover:bg-white transition-colors duration-300">
              <Search className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <feature.icon className="w-12 h-12 text-[#FFD700] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Schools Grid */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Featured <span className="text-[#FFD700]">Universities</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topSchools.map((school, index) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#FFD700] text-[#1A1A40] px-3 py-1 rounded-full text-sm font-medium">
                    {school.ranking}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-[#FFD700] mr-2" />
                    <span className="text-gray-300">{school.country}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{school.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Acceptance Rate:</span>
                      <span className="text-[#FFD700]">{school.acceptance}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">International Students:</span>
                      <span className="text-[#FFD700]">{school.intStudents}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {school.programs.map((program, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/10 text-white px-3 py-1 rounded-full"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-[#FFD700] text-[#1A1A40] py-2 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-white transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GlobalSchools;
