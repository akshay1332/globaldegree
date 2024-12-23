import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Search, Filter, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const upcomingEvents = [
  {
    id: 1,
    title: 'USA Education Fair 2024',
    date: 'Jan 15, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop',
    description: 'Meet representatives from top US universities and learn about admission processes.',
    universities: ['Harvard', 'MIT', 'Stanford', 'Yale'],
    type: 'Education Fair'
  },
  {
    id: 2,
    title: 'UK Universities Virtual Open Day',
    date: 'Jan 20, 2024',
    time: '2:00 PM - 6:00 PM',
    location: 'Online Event',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    description: 'Virtual tour and information sessions with UK universities.',
    universities: ['Oxford', 'Cambridge', 'Imperial', 'LSE'],
    type: 'Virtual Event'
  },
  {
    id: 3,
    title: 'Study in Canada Seminar',
    date: 'Feb 5, 2024',
    time: '11:00 AM - 3:00 PM',
    location: 'Toronto, Canada',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    description: 'Learn about study opportunities and visa processes for Canada.',
    universities: ['UofT', 'McGill', 'UBC', 'Waterloo'],
    type: 'Seminar'
  },
  {
    id: 4,
    title: 'Australia Education Workshop',
    date: 'Feb 12, 2024',
    time: '9:00 AM - 1:00 PM',
    location: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop',
    description: 'Interactive workshop about studying and living in Australia.',
    universities: ['Melbourne', 'Sydney', 'ANU', 'UQ'],
    type: 'Workshop'
  },
  {
    id: 5,
    title: 'European Universities Expo',
    date: 'Feb 25, 2024',
    time: '10:00 AM - 5:00 PM',
    location: 'Berlin, Germany',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop',
    description: 'Explore study opportunities across Europe.',
    universities: ['TU Munich', 'ETH Zurich', 'TU Delft', 'KTH'],
    type: 'Expo'
  },
  {
    id: 6,
    title: 'Global MBA Information Session',
    date: 'Mar 5, 2024',
    time: '3:00 PM - 7:00 PM',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
    description: 'Information session about MBA programs worldwide.',
    universities: ['INSEAD', 'NUS', 'HKUST', 'NTU'],
    type: 'Info Session'
  }
];

const eventTypes = [
  'All Events',
  'Education Fair',
  'Virtual Event',
  'Seminar',
  'Workshop',
  'Expo',
  'Info Session'
];

const Eduevents = () => {
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
            Educational <span className="text-[#FFD700]">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Discover upcoming education fairs, seminars, and workshops worldwide
          </motion.p>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4"
          >
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FFD700] text-[#1A1A40] p-3 rounded-full hover:bg-white transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
            </div>
            <button className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-lg text-white hover:bg-[#FFD700] hover:text-[#1A1A40] transition-all duration-300 flex items-center justify-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filter Events</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Event Types */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {eventTypes.map((type, index) => (
              <motion.button
                key={type}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-full ${
                  type === 'All Events'
                    ? 'bg-[#FFD700] text-[#1A1A40]'
                    : 'bg-white/10 text-white hover:bg-[#FFD700] hover:text-[#1A1A40]'
                } transition-all duration-300`}
              >
                {type}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-[#FFD700] text-[#1A1A40] px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-2 text-[#FFD700]" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-2 text-[#FFD700]" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-2 text-[#FFD700]" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.universities.map((uni, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/10 text-white px-3 py-1 rounded-full"
                      >
                        {uni}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-[#FFD700] text-[#1A1A40] py-2 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-white transition-colors duration-300">
                    <span>Register Now</span>
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

export default Eduevents;
