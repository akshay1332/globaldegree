import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Pencil, Globe, Award } from 'lucide-react';

const Loader = () => {
  const iconComponents = [GraduationCap, Book, Pencil, Globe, Award];
  const radius = 40;
  const circleRadius = 120;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-background)]"
    >
      {/* Center Logo */}
      <motion.div
        className="absolute w-20 h-20 bg-[var(--color-primary)] rounded-full flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 0 0 rgba(212, 175, 55, 0.4)',
            '0 0 0 20px rgba(212, 175, 55, 0)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <GraduationCap className="w-10 h-10 text-black" />
      </motion.div>

      {/* Orbiting Icons */}
      {iconComponents.map((Icon, index) => {
        const angle = (index * 360) / iconComponents.length;
        const x = Math.cos((angle * Math.PI) / 180) * circleRadius;
        const y = Math.sin((angle * Math.PI) / 180) * circleRadius;

        return (
          <motion.div
            key={index}
            className="absolute w-10 h-10 bg-[var(--color-primary)] bg-opacity-20 rounded-full flex items-center justify-center"
            initial={{ x, y, opacity: 0 }}
            animate={{
              x: [x, x * 1.2, x],
              y: [y, y * 1.2, y],
              opacity: 1,
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-5 h-5 text-[var(--color-primary)]" />
          </motion.div>
        );
      })}

      {/* Rotating Circles */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`circle-${index}`}
          className="absolute rounded-full border-2 border-[var(--color-primary)] border-opacity-20"
          style={{
            width: `${radius * (index + 4)}px`,
            height: `${radius * (index + 4)}px`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Text Animation */}
      <motion.div
        className="absolute bottom-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-bold text-[var(--color-primary)] mb-2"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          GlobalDegree
        </motion.h2>
        <motion.div className="flex items-center justify-center space-x-1">
          {['Loading', '.', '.', '.'].map((char, index) => (
            <motion.span
              key={index}
              className="text-[var(--color-text)]"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Particle Effects */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-[var(--color-primary)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default Loader;