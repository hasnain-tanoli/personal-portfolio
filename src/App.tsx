import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import About from './components/sections/About';
import ThemeToggle from './components/ThemeToggle';
import { Instagram, Linkedin, BriefcaseBusiness } from 'lucide-react';
import { useEffect, useRef } from 'react';

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

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Stars />
      <ThemeToggle />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
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
    </div>
  );
}

export default App;
