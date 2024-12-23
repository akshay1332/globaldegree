import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import CustomCursor from './CustomCursor';

const testimonials = [
  {
    name: "Bhanu Prasad",
    quote: "This consultancy was very good. They guide me through everything even I have any questions and need any additional information they can available for any time in business hours. Personally to me Mamatha ma'am very informative and helpful consular in every thing."
  },
  {
    name: "VADDEPALLY RAKESH",
    quote: "An excellent consultancy. The way they motivate the students to reach their goals is incredible. Always try to give their best in admitting students in Universities."
  },
  {
    name: "Anurag Reddy (Nani)",
    quote: "I had a Wonderful experience with GLOBAL DEGREES as they are very helpful with the process and also help you grow your skills with their excellent consultation."
  },
  {
    name: "NELA SRI SANDEEP",
    quote: "Big shoutout to Global Degrees Consultancy! Thanks to their exceptional support, I successfully secured admission to Mercer University and got my visa approved hassle-free. Their guidance was invaluable, making the entire process smooth. Grateful for their expertise and personalized assistance."
  },
  {
    name: "Rohan Kumar",
    quote: "GLOBAL DEGREES helped me a lot with the short listing of universities, with my profile and with the LOR's and SOP. Other than that Global Degrees Team helped me a lot with the application process and explaining step-by-step what all I would be needed."
  },
  {
    name: "Anusha Surapaneni",
    quote: "I had the best experience with Global Degrees. Their support is highly commendable and probably they have the best counselors one can get. Kudos to your great efforts. Overall, Global Degrees is highly recommended to whoever is planning for their abroad studies."
  }
];

const Testimonials = () => {
  const [cursorVariant, setCursorVariant] = useState('default');

  return (
    <motion.div 
      className="py-20 bg-[var(--color-background)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-block p-3 rounded-full bg-[var(--color-primary)] bg-opacity-10 mb-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="h-6 w-6 text-[var(--color-primary)]" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[var(--color-primary)]">Testimonials</span>
          </h2>
          <p className="text-[var(--color-text)] opacity-80 max-w-2xl mx-auto">
            We've helped over 1000's of students go Abroad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-background)] p-6 rounded-xl border border-[var(--color-primary)] border-opacity-20"
              variants={fadeInUp}
              whileHover={{ 
                y: -10,
                borderColor: 'var(--color-primary)',
                transition: { duration: 0.2 }
              }}
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Quote className="h-8 w-8 text-[var(--color-primary)] mb-4 opacity-50" />
              <p className="text-[var(--color-text)] opacity-80 mb-6 line-clamp-4">
                {testimonial.quote}
              </p>
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="font-semibold text-[var(--color-text)]">{testimonial.name}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
        >
          <motion.button
            className="magnetic-button glow-effect px-8 py-4 bg-[var(--color-primary)] text-black font-semibold rounded-full flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <span>View All Success Stories</span>
          </motion.button>
        </motion.div>
      </div>
      <CustomCursor variant={cursorVariant} />
    </motion.div>
  );
};

export default Testimonials;