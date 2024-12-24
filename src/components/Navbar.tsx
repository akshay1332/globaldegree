import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X, Book, Lightbulb, Users, MessageCircle, Award, ChevronDown, ChevronRight, Search, Globe } from 'lucide-react';
import CustomCursor from './CustomCursor';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface College {
  name: string;
  path: string;
}

interface DestinationItem {
  name: string;
  path: string;
  colleges?: College[];
}

interface MenuItem {
  name: string;
  icon: any;
  path: string;
  isNew?: boolean;
  destinations?: DestinationItem[];
}

const destinations: DestinationItem[] = [
  {
    name: "Study in UK",
    path: "/destinations/uk",
    colleges: [
      { name: "University of Oxford", path: "/destinations/uk/oxford" },
      { name: "University of Cambridge", path: "/destinations/uk/cambridge" },
      { name: "Imperial College London", path: "/destinations/uk/imperial" },
      { name: "University College London", path: "/destinations/uk/ucl" },
      { name: "London School of Economics", path: "/destinations/uk/lse" }
    ]
  },
  {
    name: "Study in USA",
    path: "/destinations/usa",
    colleges: [
      { name: "Harvard University", path: "/destinations/usa/harvard" },
      { name: "MIT", path: "/destinations/usa/mit" },
      { name: "Stanford University", path: "/destinations/usa/stanford" },
      { name: "Yale University", path: "/destinations/usa/yale" },
      { name: "Princeton University", path: "/destinations/usa/princeton" }
    ]
  },
  {
    name: "Study in Canada",
    path: "/destinations/canada",
    colleges: [
      { name: "University of Toronto", path: "/destinations/canada/toronto" },
      { name: "McGill University", path: "/destinations/canada/mcgill" },
      { name: "University of British Columbia", path: "/destinations/canada/ubc" },
      { name: "University of Waterloo", path: "/destinations/canada/waterloo" },
      { name: "University of Alberta", path: "/destinations/canada/alberta" }
    ]
  },
  {
    name: "Study in Australia",
    path: "/destinations/australia",
    colleges: [
      { name: "University of Melbourne", path: "/destinations/australia/melbourne" },
      { name: "University of Sydney", path: "/destinations/australia/sydney" },
      { name: "Australian National University", path: "/destinations/australia/anu" },
      { name: "University of Queensland", path: "/destinations/australia/uq" },
      { name: "Monash University", path: "/destinations/australia/monash" }
    ]
  },
  {
    name: "Study in New Zealand",
    path: "/destinations/new-zealand",
    colleges: [
      { name: "University of Auckland", path: "/destinations/new-zealand/auckland" },
      { name: "University of Otago", path: "/destinations/new-zealand/otago" },
      { name: "Victoria University of Wellington", path: "/destinations/new-zealand/victoria" },
      { name: "University of Canterbury", path: "/destinations/new-zealand/canterbury" },
      { name: "Massey University", path: "/destinations/new-zealand/massey" }
    ]
  }
];

const menuItems: MenuItem[] = [
  { name: 'Home', icon: Book, path: '/' },
  { name: 'About Us', icon: Users, path: '/about' },
  { name: 'Our Services', icon: Award, path: '/services' },
  { name: 'Course Finder', icon: Book, path: '/courses' },
  { name: 'SOP Builder', icon: Lightbulb, path: '/sop-builder' },
  { 
    name: 'Destination', 
    icon: GraduationCap, 
    path: '/destination',
    destinations: destinations
  },
  { name: 'Virtual Counselling', icon: Users, path: '/virtual-counselling' },
  { name: 'Testimonials', icon: MessageCircle, path: '/testimonials' },
  { name: 'Blog', icon: Book, path: '/blog' },
  { name: 'Contact Us', icon: MessageCircle, path: '/contact' },
  { name: 'Global 100+ Schools', icon: Award, isNew: true, path: '/global-schools' },
  { name: 'Eduevents', icon: Award, isNew: true, path: '/eduevents' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hoveredDestination, setHoveredDestination] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show navbar when scrolling up or at top
        if (currentScrollY < lastScrollY || currentScrollY < 50) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }

        // Update scroll position
        setLastScrollY(currentScrollY);
        
        // Update background
        setIsScrolled(currentScrollY > 50);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const searchVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: -10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      <CustomCursor variant={cursorVariant} />
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled ? 'bg-[#1A1A40]/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="relative group"
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <motion.div
                className="text-2xl font-bold text-white flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Globe className="w-8 h-8 mr-2 text-[#FFD700]" />
                Global<span className="text-[#FFD700]">Degree</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => {
                    setHoveredItem(item.name);
                    setCursorVariant('text');
                  }}
                  onMouseLeave={() => {
                    setHoveredItem(null);
                    setCursorVariant('default');
                  }}
                >
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors relative"
                  >
                    <motion.div
                      className="flex items-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <item.icon className="w-4 h-4 mr-1" />
                      <span>{item.name}</span>
                      {item.destinations && (
                        <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" />
                      )}
                      {item.isNew && (
                        <span className="absolute -top-3 -right-8 bg-[#FFD700] text-[#1A1A40] text-xs px-2 py-0.5 rounded-full">
                          New
                        </span>
                      )}
                    </motion.div>
                  </Link>

                  {/* Hover line effect */}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />

                  {/* First Level Dropdown */}
                  {item.destinations && hoveredItem === item.name && (
                    <AnimatePresence>
                      <motion.div
                        className="absolute left-0 mt-2 w-64 bg-[#1A1A40]/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#FFD700]/10 overflow-hidden z-50"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        {item.destinations.map((destination) => (
                          <div
                            key={destination.name}
                            className="relative group/item"
                            onMouseEnter={() => setHoveredDestination(destination.name)}
                            onMouseLeave={() => setHoveredDestination(null)}
                          >
                            <Link
                              to={destination.path}
                              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between group-hover/item:text-[#FFD700]"
                            >
                              <span>{destination.name}</span>
                              {destination.colleges && (
                                <ChevronRight className="w-4 h-4 transform group-hover/item:translate-x-1 transition-transform" />
                              )}
                            </Link>

                            {/* Second Level Dropdown */}
                            {destination.colleges && hoveredDestination === destination.name && (
                              <motion.div
                                className="absolute left-full top-0 ml-2 w-64 bg-[#1A1A40]/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#FFD700]/10 overflow-hidden"
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                              >
                                {destination.colleges.map((college) => (
                                  <Link
                                    key={college.name}
                                    to={college.path}
                                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                                  >
                                    {college.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}

              {/* Search Button */}
              <motion.button
                className="text-gray-300 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-[#1A1A40]/95 backdrop-blur-xl border-t border-[#FFD700]/10 p-4"
              variants={searchVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="container mx-auto max-w-3xl">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses, universities, or destinations..."
                    className="w-full bg-white/10 text-white placeholder-gray-400 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all"
                    autoFocus
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                    <Search className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#1A1A40]/95 backdrop-blur-xl shadow-xl border-l border-[#FFD700]/10 lg:hidden overflow-y-auto z-[101]"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-white">Menu</h2>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Search */}
                <div className="relative mb-8">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-white/10 text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition-all"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                    <Search className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-1">
                  {menuItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.path}
                        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 mr-3" />
                          <span>{item.name}</span>
                        </div>
                        {item.isNew && (
                          <span className="bg-[#FFD700] text-[#1A1A40] text-xs px-2 py-0.5 rounded-full">
                            New
                          </span>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;