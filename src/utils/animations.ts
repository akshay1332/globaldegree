export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeInScale = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const textReveal = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
    },
  },
};

export const parallaxScroll = {
  initial: {
    y: 0,
  },
  animate: (scrollProgress: number) => ({
    y: scrollProgress * -100,
    transition: {
      duration: 0,
    },
  }),
};

export const magneticEffect = (strength: number = 1) => ({
  x: { type: "spring", stiffness: 150, damping: 15 },
  scale: { type: "spring", stiffness: 150, damping: 15 },
  whileHover: { scale: 1.1 * strength },
});

export const glowEffect = {
  initial: {
    boxShadow: "0 0 0 rgba(212, 175, 55, 0)",
  },
  animate: {
    boxShadow: [
      "0 0 20px rgba(212, 175, 55, 0.2)",
      "0 0 60px rgba(212, 175, 55, 0.4)",
      "0 0 20px rgba(212, 175, 55, 0.2)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
