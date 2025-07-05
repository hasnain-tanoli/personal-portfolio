import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Asterisk } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string; // Added description field
  technologies: string[];
  image: string;
  link?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'ConnectP',
    description: 'A social media platform designed for seamless connection and interaction, featuring real-time chats and a video calls.',
    technologies: ['React', 'Tailwind', 'Node.js', 'daisyUI', 'Zustand', 'Stream', 'bcryptJS', 'MongoDB'],
    image: '/assets/connectp.png', // Placeholder image
    link: 'https://connect-p-px4qr.sevalla.app/',
  },
  {
    id: 2,
    title: 'Pace AI',
    description: 'An AI-powered tutoring application that provides personalized learning experiences and adaptive content based on user progress.',
    technologies: ['React.js', 'Tailwind', 'Node.js', 'Google Gemini'],
    image: '/assets/paceai.png', // Using existing image
    link: 'https://pace-ai-brown.vercel.app/',
  },
];

const Projects: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

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
    <section id="projects" className="relative min-h-screen w-full overflow-hidden text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans py-20 md:py-32">

      <div className="container-custom relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold mb-12 md:mb-16 flex items-center justify-start gap-4 md:gap-6 font-heading tracking-tight text-gray-800 dark:text-gray-50 project-title-glow"
        >
          <Asterisk className="text-green-600 w-10 h-10 md:w-12 md:h-12 custom-asterisk dark:text-green-400" />
          Projects
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
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
      </div>

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
    </section>
  );
};

export default Projects;
