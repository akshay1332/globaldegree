import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  variant?: 'default' | 'button' | 'text' | 'large';
}

const CustomCursor: React.FC<CustomCursorProps> = ({ variant = 'default' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const cursorVariants = {
    default: {
      height: 12,
      width: 12,
      backgroundColor: 'var(--color-primary)',
    },
    text: {
      height: 64,
      width: 64,
      backgroundColor: 'transparent',
      border: '2px solid var(--color-primary)',
    },
    button: {
      height: 48,
      width: 48,
      backgroundColor: 'var(--color-primary)',
    },
    large: {
      height: 96,
      width: 96,
      backgroundColor: 'transparent',
      border: '2px solid var(--color-primary)',
    }
  };

  const cursorOutlineVariants = {
    default: {
      height: 32,
      width: 32,
      border: '2px solid var(--color-primary)',
      opacity: 0.5,
    },
    text: {
      height: 96,
      width: 96,
      border: '2px solid var(--color-primary)',
      opacity: 0.3,
    },
    button: {
      height: 64,
      width: 64,
      border: '2px solid var(--color-primary)',
      opacity: 0.5,
    },
    large: {
      height: 128,
      width: 128,
      border: '2px solid var(--color-primary)',
      opacity: 0.3,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={variant}
        variants={cursorVariants}
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${mousePosition.y - 6}px)`,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        animate={variant}
        variants={cursorOutlineVariants}
        style={{
          transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
          delay: 0.03
        }}
      />
      <style jsx global>{`
        * {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          * {
            cursor: auto;
          }
          .cursor-dot, .cursor-outline {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
