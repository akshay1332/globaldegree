import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  university: string;
  course: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "International Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    content: "Global Degree transformed my dream of studying abroad into reality. Their guidance throughout the application process was invaluable.",
    rating: 5,
    university: "Oxford University",
    course: "MSc Computer Science"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Graduate Student",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    content: "The personalized attention and expert counseling helped me secure admission to my dream university. Couldn't have done it without them!",
    rating: 5,
    university: "MIT",
    course: "MEng Artificial Intelligence"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Undergraduate Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1890&auto=format&fit=crop",
    content: "Their comprehensive support system and dedication to student success made my application journey smooth and successful.",
    rating: 5,
    university: "University of Toronto",
    course: "BSc Data Science"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Research Scholar",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
    content: "The team's expertise in visa processing and documentation was exceptional. They guided me through every step meticulously.",
    rating: 5,
    university: "Stanford University",
    course: "PhD Computer Science"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -20
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      rotateX: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.15,
      rotate: [0, -5, 5, 0],
      transition: {
        rotate: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }
      }
    }
  };

  const quoteVariants = {
    initial: { 
      scale: 1, 
      rotate: 12,
      opacity: 0.1
    },
    hover: {
      scale: [1, 1.2, 1.1],
      rotate: [12, 0, -12, 0],
      opacity: 0.2,
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.5, 0.8, 1]
      }
    }
  };

  const shimmerVariants = {
    initial: {
      x: '-100%',
      opacity: 0
    },
    hover: {
      x: '100%',
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative min-h-screen bg-[#1A1A40] py-20 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-3xl -top-20 -left-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-[500px] h-[500px] bg-[#FFD700]/5 rounded-full blur-3xl -bottom-20 -right-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-[#FFD700]">Students</span> Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how we've helped students achieve their academic dreams and embark on life-changing educational journeys.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[
                testimonials[currentIndex],
                testimonials[(currentIndex + 1) % testimonials.length]
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="relative"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  onMouseEnter={() => setHoveredCard(testimonial.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <motion.div
                    className="relative bg-[#2A2A5A]/30 backdrop-blur-xl p-8 rounded-2xl overflow-hidden group"
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px"
                    }}
                    animate={{
                      boxShadow: hoveredCard === testimonial.id
                        ? [
                            "0 0 20px rgba(255, 215, 0, 0.2)",
                            "0 0 30px rgba(255, 215, 0, 0.4)",
                            "0 0 20px rgba(255, 215, 0, 0.2)"
                          ]
                        : "0 0 0 rgba(255, 215, 0, 0)",
                      transition: {
                        boxShadow: {
                          duration: 1,
                          repeat: Infinity
                        }
                      }
                    }}
                  >
                    {/* Quote Icon */}
                    <motion.div
                      className="absolute -right-4 -top-4 text-[#FFD700]/10"
                      variants={quoteVariants}
                    >
                      <Quote size={80} />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-6">
                        <motion.div
                          className="relative overflow-hidden rounded-full"
                          variants={imageVariants}
                        >
                          <motion.img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 object-cover border-2 border-[#FFD700]"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div
                            className="absolute inset-0 bg-[#FFD700]/20"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h3 className="text-white font-semibold">{testimonial.name}</h3>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </motion.div>
                      </div>

                      <motion.p 
                        className="text-gray-300 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {testimonial.content}
                      </motion.p>

                      {/* University & Course */}
                      <motion.div
                        className="bg-[#1A1A40]/50 p-4 rounded-xl mb-6 transform-gpu"
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(255, 215, 0, 0.2)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div 
                          className="text-[#FFD700] font-medium mb-1"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {testimonial.university}
                        </motion.div>
                        <motion.div 
                          className="text-gray-400 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {testimonial.course}
                        </motion.div>
                      </motion.div>

                      {/* Rating */}
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ 
                              delay: 0.6 + (i * 0.1),
                              duration: 0.4,
                              type: "spring",
                              stiffness: 200
                            }}
                            whileHover={{
                              scale: 1.2,
                              rotate: 360,
                              transition: { duration: 0.3 }
                            }}
                          >
                            <Star className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Hover Effects */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/0 via-[#FFD700]/10 to-[#FFD700]/0"
                      variants={shimmerVariants}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD700]/5 to-transparent opacity-0"
                      animate={{
                        opacity: hoveredCard === testimonial.id ? [0, 0.1, 0] : 0,
                        y: hoveredCard === testimonial.id ? [0, 100, 0] : 0
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation Buttons */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-[#FFD700]/10 text-[#FFD700] hover:bg-[#FFD700]/20 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-[#FFD700]/10 text-[#FFD700] hover:bg-[#FFD700]/20 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Enhanced View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link to="/testimonials">
              <motion.button
                className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-full bg-[#FFD700] text-[#1A1A40] font-medium hover:bg-[#FFD700]/90 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View All Testimonials</span>
                <motion.div
                  className="absolute right-4 z-10"
                  animate={{ 
                    x: [0, 5, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/0 via-white/30 to-[#FFD700]/0"
                  animate={{
                    x: ['-100%', '100%'],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;