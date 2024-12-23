import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, className }) => {
  return (
    <h1 className={className}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="inline-block hover:scale-110 hover:text-[#FFC107] transition-all duration-200"
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default SplitText;