import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  // Removed all state and form-related functions as they are no longer needed

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden
                 text-gray-900 dark:text-gray-100 transition-colors duration-300
                 font-sans flex items-center justify-center py-20 md:py-20 lg:py-24"
    >
      {/* Background Gradient Blob */}

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
          style={{ transform: 'none' }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-poppins text-gray-800 dark:text-white">
            Let's Connect.
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 md:px-0">
            Open to collaborations, freelance, or full-time opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-6 md:p-10 rounded-xl
                     bg-white/50 dark:bg-gray-900/30 border border-gray-300 dark:border-gray-800 backdrop-blur-sm
                     shadow-lg text-center"
        >
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed text-center">
            Want to chat or discuss a project?
          </p>
          <a
            href="mailto:your.email@example.com" // IMPORTANT: Replace with your actual email address
            className="inline-block text-xl md:text-4xl font-extrabold
                       bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600
                       text-transparent bg-clip-text
                       hover:scale-105 transition-transform duration-300 ease-in-out
                       block my-6 text-center break-words"
          >
            contact.hasnaintanoli<wbr />@gmail.com
          </a>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 mt-6 md:mt-8 text-center">
            I always reply!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
