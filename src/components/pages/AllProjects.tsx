import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../ThemeToggle';
import { Instagram, Linkedin, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjects as projectsData } from '../../data/projectsData';

const Stars = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const numStars = 100; // Number of stars
    const starsContainer = starsRef.current;

    if (starsContainer) {
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size for stars
        const size = Math.random() * 2 + 0.5; // Between 0.5px and 2.5px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random initial position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Random animation delays and durations for variety
        star.style.animationDelay = `${Math.random() * 10}s`;
        star.style.animationDuration = `${Math.random() * 5 + 3}s, ${Math.random() * 60 + 30}s`; // Twinkle, then move

        // Random end positions for movement
        star.style.setProperty('--star-x-end', `${(Math.random() - 0.5) * 200}px`);
        star.style.setProperty('--star-y-end', `${(Math.random() - 0.5) * 200}px`);

        starsContainer.appendChild(star);
      }
    }
  }, []);

  return <div ref={starsRef} className="stars"></div>;
};

const AllProjects: React.FC = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const navLinks = [
    { name: 'Home', id: '/' },
    { name: 'Projects', id: '/projects' },
  ];

  const handleMouseEnter = (image: string) => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (imageRef.current) {
      const imageWidth = imageRef.current.offsetWidth;
      const imageHeight = imageRef.current.offsetHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let newX = e.clientX + 30; // Offset from cursor
      let newY = e.clientY + 30; // Offset from cursor

      // Keep image within viewport
      if (newX + imageWidth > viewportWidth - 20) { // 20px padding from right edge
        newX = viewportWidth - imageWidth - 20;
      }
      if (newY + imageHeight > viewportHeight - 20) { // 20px padding from bottom edge
        newY = viewportHeight - imageHeight - 20;
      }
      if (newX < 20) newX = 20; // 20px padding from left edge
      if (newY < 20) newY = 20; // 20px padding from top edge

      setImagePosition({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    if (hoveredImage) {
      window.addEventListener('mousemove', handleMouseMove as EventListener);
    } else {
      window.removeEventListener('mousemove', handleMouseMove as EventListener);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, [hoveredImage]);

  return (
      <div className="min-h-screen font-sans">
        <Stars />
        <ThemeToggle />
        <header className="absolute top-0 left-0 right-0 p-2 md:p-4 z-30">
            <div className="container-custom mx-auto flex justify-between items-center">
                <Link to="/" className="cursor-pointer">
                    <img src={theme === 'light' ? '/assets/Logo-black.png' : '/assets/Logo.png'} alt="Logo" className="h-20" />
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                    <Link
                        key={link.id}
                        to={link.id}
                        className={`nav-link ${location.pathname === link.id ? 'text-green-500 dark:text-green-400 font-bold' : ''}`}
                    >
                        {link.name}
                    </Link>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none text-gray-800 dark:text-gray-200">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                </div>
            </div>
        </header>
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
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                className={`text-3xl font-bold text-white ${location.pathname === link.id ? 'gradient-text' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
        <main className="container-custom mx-auto py-32">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wide text-gray-800 dark:text-gray-200">All My Work</h1>
          <div className="max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8 md:mb-10 last:mb-0 group relative p-4 md:p-6 rounded-xl transition-all duration-300 bg-gray-50 hover:bg-gray-100 shadow-sm hover:shadow-md hover:scale-[1.01] border border-gray-200 hover:border-green-400/50 dark:bg-white/5 dark:hover:bg-white/5 dark:shadow-lg dark:hover:shadow-lg dark:border-transparent dark:hover:border-green-400/30"
              onMouseEnter={() => handleMouseEnter(project.image)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Mobile Layout */}
              <div className="block md:hidden">
                <div className="flex flex-row items-center gap-4">
                  <span className="text-2xl font-['JetBrains_Mono'] text-gray-400 project-number-gradient dark:text-gray-500">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300 cursor-pointer font-['Poppins'] project-title-hover-effect dark:text-gray-50 dark:hover:text-green-400"
                  >
                    {project.title}
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600 font-light font-['Inter'] mb-4 dark:text-gray-400">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 font-['JetBrains_Mono'] flex flex-wrap gap-x-2">
                    {project.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-gray-500/80 dark:text-gray-400/80">{tech}</span>
                        {i < project.technologies.length - 1 && (
                          <span className="text-gray-400 dark:text-gray-600">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex flex-row items-center gap-0">
                <span className="text-5xl font-['JetBrains_Mono'] text-gray-400 mr-8 project-number-gradient dark:text-gray-500">
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <div className="flex-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-5xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300 cursor-pointer font-['Poppins'] project-title-hover-effect dark:text-gray-50 dark:hover:text-green-400"
                  >
                    {project.title}
                  </a>
                  <p className="text-lg text-gray-600 mt-3 font-light font-['Inter'] mb-4 dark:text-gray-400">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 font-['JetBrains_Mono'] flex flex-wrap gap-x-2">
                    {project.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="text-gray-500/80 dark:text-gray-400/80">{tech}</span>
                        {i < project.technologies.length - 1 && (
                          <span className="mx-2 text-gray-400 dark:text-gray-600">|</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
            <Link
                to="/"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-green-500/80 px-8 py-3 font-bold text-green-500 transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white dark:border-green-400/80 dark:text-green-400 dark:hover:bg-green-500 dark:hover:text-gray-900"
              >
                <span className="absolute inset-0 h-full w-0 bg-green-600 transition-all duration-300 ease-out group-hover:w-full dark:bg-green-500"></span>
                <span className="relative flex items-center gap-2">
                  Back to Home
                </span>
              </Link>
        </div>
        </main>
        <footer>
          <div className="container-custom py-4 text-center text-gray-600 dark:text-gray-400">
            <div className="flex justify-center gap-6 mb-4">
              <a href="https://www.linkedin.com/in/hasnain-tanoli-794586286/" target="_blank" rel="noopener noreferrer" className="hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"><Linkedin size={24} /></a>
              <a href="https://www.instagram.com/_am.hasnaintanoli?igsh=MXYxeXhjbHN1Mm44OQ==" target="_blank" rel="noopener noreferrer" className="hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"><Instagram size={24} /></a>
              <a href="https://www.fiverr.com/hasnain_tanoli_" target="_blank" rel="noopener noreferrer" className="hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300"><BriefcaseBusiness size={24} /></a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">&copy; 2025 Hasnain Tanoli. Designed & built with passion.</p>
          </div>
        </footer>
        <AnimatePresence>
        {hoveredImage && (
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8, rotateX: 10, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 10, rotateY: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed z-50 pointer-events-none hidden md:block" /* Hide on small screens */
            style={{
              top: imagePosition.y,
              left: imagePosition.x,
              transform: `translate(-50%, -50%)`, // Center the image on the cursor
              width: '350px', // Adjust image size as needed
              height: 'auto',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(74, 222, 128, 0.6)', // Green border
              background: 'rgba(255,255,255,0.9)', // Background for subtle border effect
              transformOrigin: 'center center',
            }}
          >
            <img
              src={hoveredImage}
              alt="Project Preview"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  );
};

export default AllProjects;
