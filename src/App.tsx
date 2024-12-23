import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/Services';
import Testimonials from './components/Testimonials';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import CourseFinder from './pages/CourseFinder';
import SopBuilder from './pages/SopBuilder';
import ContactUs from './pages/ContactUs';
import Destination from './pages/Destination';
import Home from './pages/Home';
import VirtualCounselling from './pages/VirtualCounselling';
import Blog from './pages/Blog';
import GlobalSchools from './pages/GlobalSchools';
import Eduevents from './pages/Eduevents';
import TestimonialsPage from './pages/Testimonials';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#1A1A40]">
        <AnimatePresence>
          {loading && <Loader />}
        </AnimatePresence>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courses" element={<CourseFinder />} />
          <Route path="/sop-builder" element={<SopBuilder />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/destinations/:country" element={<Destination />} />
          <Route path="/destinations/:country/:college" element={<Destination />} />
          <Route path="/virtual-counselling" element={<VirtualCounselling />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/global-schools" element={<GlobalSchools />} />
          <Route path="/eduevents" element={<Eduevents />} />
          <Route path="/" element={
            <>
              <Navbar />
              <main className="bg-[var(--color-background)]">
                <Hero />
                <Features />
                <AboutUsSection />
                <ServicesSection />
                <Testimonials />
                <HowItWorks />
                <FAQ />
                <Contact />
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;