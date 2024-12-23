import React from 'react';
import { motion } from 'framer-motion';
import { textReveal } from '../utils/animations';

interface LuxuryTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}

const LuxuryText: React.FC<LuxuryTextProps> = ({
  text,
  as: Component = 'div',
  className = '',
  delay = 0,
}) => {
  const words = text.split(' ');

  return (
    <Component className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-2">
          <motion.span
            className="inline-block luxury-gradient"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { y: '100%' },
              animate: {
                y: 0,
                transition: {
                  duration: 1,
                  ease: [0.6, 0.01, -0.05, 0.95],
                  delay: delay + i * 0.1,
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
};

export default LuxuryText;
