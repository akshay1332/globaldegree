import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Menu, X, Book, Lightbulb, Users, MessageCircle, Award, ChevronDown, ChevronRight } from 'lucide-react';
import CustomCursor from './CustomCursor';
import { Link, useNavigate } from 'react-router-dom';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 }
  };

  return (
    <>
      <CustomCursor variant={cursorVariant} />
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#1A1A40]/90 backdrop-blur-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="text-2xl font-bold text-white">
              Global<span className="text-[#FFD700]">Degree</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <span>{item.name}</span>
                    {item.destinations && (
                      <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform" />
                    )}
                  </Link>

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
                              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#FFD700]/10 transition-colors cursor-pointer flex items-center justify-between"
                            >
                              <span>{destination.name}</span>
                              {destination.colleges && (
                                <ChevronRight className="w-4 h-4 text-[#FFD700] transform group-hover/item:translate-x-1 transition-transform" />
                              )}
                            </Link>

                            {/* Second Level Dropdown */}
                            {destination.colleges && hoveredDestination === destination.name && (
                              <motion.div
                                className="absolute left-full top-0 ml-2 w-72 bg-[#1A1A40]/95 backdrop-blur-xl rounded-xl shadow-xl border border-[#FFD700]/10 z-50"
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                              >
                                {destination.colleges.map((college) => (
                                  <Link
                                    key={college.name}
                                    to={college.path}
                                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-[#FFD700]/10 transition-colors cursor-pointer"
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
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-64 bg-[#1A1A40] shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <div className="p-4 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-[#FFD700]/10 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;