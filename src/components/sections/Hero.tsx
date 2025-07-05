import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Instagram, Linkedin, BriefcaseBusiness } from 'lucide-react'; // Changed Facebook to Linkedin, Twitter to BriefcaseBusiness

const Hero: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'experience', 'about', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Offset to highlight when section is roughly in view

      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          if (scrollPosition >= sectionElement.offsetTop && scrollPosition < sectionElement.offsetTop + sectionElement.offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans">

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 p-6 md:p-8 z-30">
        <div className="container-custom mx-auto flex justify-between items-center">
          <motion.a
            href="#hero"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-bold font-poppins cursor-pointer"
          >
            Hasnain Tanoli
          </motion.a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link ${activeSection === link.id ? 'text-green-500 dark:text-green-400 font-bold' : ''}`}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm md:hidden z-50 flex flex-col items-center justify-center"
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 focus:outline-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-white">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`text-3xl font-bold text-white ${activeSection === link.id ? 'gradient-text' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center z-20 p-6">
        {/* Mobile-only Avatar */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6 md:hidden"
        >
            <div className="relative p-1 rounded-full overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 w-fit rotate-infinite">
                <img src="/assets/pfp.png" alt="Avatar" className="w-24 h-24 rounded-full block" />
            </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-bold leading-tight font-heading"
          style={{ fontSize: 'clamp(1.8rem, 8vw, 5rem)' }}
        >
          <span className="block">Hasnain Tanoli</span>
          <span className="gradient-text">Developer.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-full md:max-w-xs text-center mt-6 block md:hidden"
        >
          <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
            I transform thorny problems into elegant solutions using visual design, rapid prototyping, and interaction skills.
          </p>
          <a href="#about" className="font-semibold hover:underline">Know more →</a>
        </motion.div>
      </div>

      {/* Left Vertical Elements */}
      <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-8 z-30 hidden md:flex">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>

      {/* Right Vertical Elements */}
      <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 items-center gap-2 z-30 hidden md:flex" style={{ writingMode: 'vertical-rl' }}>
        <span className="text-sm">Follow Us –</span>
        <div className="flex gap-4">
          <motion.a href="https://www.linkedin.com/in/hasnain-tanoli-794586286/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}><Linkedin size={16} /></motion.a>
          <motion.a href="https://www.instagram.com/_am.hasnaintanoli?igsh=MXYxeXhjbHN1Mm44OQ==" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}><Instagram size={16} /></motion.a>
          <motion.a href="https://www.fiverr.com/s/vv6zD8N" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}><BriefcaseBusiness size={16} /></motion.a>
        </div>
      </div>

      {/* Bottom Left Subtext for Desktop */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 left-8 max-w-xs text-left z-20 hidden md:block"
      >
        <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
          I transform thorny problems into elegant solutions using visual design, rapid prototyping, and interaction skills.
        </p>
        <a href="#about" className="font-semibold hover:underline">Know more →</a>
      </motion.div>

      {/* Bottom Right Avatar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 right-8 items-center gap-3 z-20 cursor-pointer group hidden md:flex"
      >
        <div className="relative p-1 rounded-full overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 w-fit rotate-infinite">
          <img src="/assets/pfp.png" alt="Avatar" className="w-12 h-12 rounded-full block group-hover:scale-110 transition-transform" />
        </div>
        {/* <span className="font-semibold">Play Intro</span> */}
      </motion.div>
    </section>
  );
};

export default Hero;
