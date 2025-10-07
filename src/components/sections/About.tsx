import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-12 md:mb-16 flex items-center justify-center gap-4 md:gap-6 font-heading tracking-tight text-gray-800 dark:text-gray-50 project-title-glow px-4 md:px-0">The Person Behind the Pixels</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative p-2 rounded-full overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 mx-auto w-fit">
              <img
                src="/assets/new-pfp.jpg"
                alt="Portrait"
                className="rounded-full shadow-lg transition-all duration-300 hover:scale-105 block"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed dark:text-gray-300 px-4 md:px-0">
              I'm a passionate developer who loves building beautiful and functional web applications. I'm driven by a desire to solve complex problems and create elegant solutions that people love.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed dark:text-gray-300 px-4 md:px-0">
              When I'm not coding, you can find me exploring new technologies, sipping on a cup of tea, or sketching out new ideas. I'm a firm believer in lifelong learning and am always looking for new ways to grow and improve.
            </p>
            <motion.a
              href="/assets/Resume.pdf"
              download="Hasnain_Tanoli_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-green-500/80 px-8 py-3 font-bold text-green-500 transition-all duration-300 hover:border-green-600 hover:bg-green-600 hover:text-white dark:border-green-400/80 dark:text-green-400 dark:hover:bg-green-500 dark:hover:text-gray-900 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="absolute inset-0 h-full w-0 bg-green-600 transition-all duration-300 ease-out group-hover:w-full dark:bg-green-500"></span>
              <span className="relative flex items-center gap-2">
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
