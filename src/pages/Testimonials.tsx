import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    university: 'Harvard University',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    quote: "The guidance I received was invaluable. From university selection to visa approval, every step was handled professionally.",
    rating: 5,
    course: 'Masters in Business Analytics'
  },
  {
    id: 2,
    name: 'Michael Chen',
    university: 'University of Oxford',
    country: 'UK',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
    quote: "Their expertise in UK admissions helped me secure a place at Oxford. The counselors were supportive throughout the journey.",
    rating: 5,
    course: 'PhD in Computer Science'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    university: 'University of Toronto',
    country: 'Canada',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1887&auto=format&fit=crop',
    quote: "The personalized attention and detailed guidance made my dream of studying in Canada a reality.",
    rating: 5,
    course: 'Bachelor of Engineering'
  },
  {
    id: 4,
    name: 'Raj Patel',
    university: 'University of Melbourne',
    country: 'Australia',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    quote: "From test preparation to visa counseling, they provided comprehensive support that exceeded my expectations.",
    rating: 5,
    course: 'Masters in Data Science'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    university: 'TU Munich',
    country: 'Germany',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1887&auto=format&fit=crop',
    quote: "Their knowledge of German universities and the application process was exceptional. Highly recommended!",
    rating: 5,
    course: 'Masters in Mechanical Engineering'
  },
  {
    id: 6,
    name: 'David Kim',
    university: 'University of Auckland',
    country: 'New Zealand',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop',
    quote: "The team's dedication and expertise made my application process smooth and successful.",
    rating: 5,
    course: 'Bachelor of Commerce'
  }
];

const videoTestimonials = [
  {
    id: 1,
    name: 'James Wilson',
    university: 'Stanford University',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    videoUrl: '#',
    course: 'Masters in Computer Science'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    university: 'Imperial College London',
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop',
    videoUrl: '#',
    course: 'PhD in Biotechnology'
  },
  {
    id: 3,
    name: 'Tom Anderson',
    university: 'University of British Columbia',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    videoUrl: '#',
    course: 'Masters in Environmental Science'
  }
];

const Testimonials = () => {
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
            Student <span className="text-[#FFD700]">Success Stories</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Hear from our students who achieved their dreams of studying abroad
          </motion.p>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            Video <span className="text-[#FFD700]">Testimonials</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#1A1A40] border-b-8 border-b-transparent ml-1" />
                    </motion.div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white">{video.name}</h3>
                  <p className="text-gray-300">{video.university}</p>
                  <p className="text-[#FFD700]">{video.course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Written Testimonials Section */}
      <div className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white text-center mb-16"
          >
            What Our <span className="text-[#FFD700]">Students Say</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 relative group hover:bg-white/20 transition-colors duration-300"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#FFD700] opacity-50" />
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-[#FFD700]">{testimonial.university}</p>
                    <p className="text-sm text-gray-300">{testimonial.country}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-sm text-[#FFD700] mt-2">{testimonial.course}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Testimonials;
