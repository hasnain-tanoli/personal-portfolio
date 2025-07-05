import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 md:top-8 md:right-8 md:bottom-auto z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/90 dark:border-gray-700/90 shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {theme === 'light' ? <Moon size={20} className="text-gray-900" /> : <Sun size={20} className="text-gray-100" />}
    </motion.button>
  );
};

export default ThemeToggle;
