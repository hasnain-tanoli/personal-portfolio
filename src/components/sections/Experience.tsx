import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Skills from './Skills'; // Adjust the import path as necessary

const experienceData = [
  {
    title: 'AI/ML and Web Dev Intern',
    company: 'Revnix',
    date: 'August 2025 - Present',
    description: 'Working on various projects involving AI, Machine Learning, and Web Development.',
    link: 'https://revnix.com/',
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    date: '2023 - Present',
    description: 'Designed and developed custom websites for clients, focusing on clean design and performance.',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative min-h-screen w-full overflow-hidden text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans py-20 md:py-32">

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 md:mb-8 font-heading tracking-tight text-gray-800 dark:text-gray-50 project-title-glow">My Journey</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-400 px-4 md:px-0">
            I'm at the beginning of my professional journey, passionate about learning, working with others, and delivering real value through my work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm backdrop-blur-sm border border-gray-200 dark:bg-gray-900/20 dark:border-gray-800/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 font-heading text-gray-800 dark:text-gray-50">Experience</h3>
            <div className="relative border-l-2 border-gray-300 dark:border-gray-700">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-8 md:mb-10 ml-6"
                >
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 rounded-full -left-3 ring-8 ring-white dark:ring-gray-950 dark:ring-black">
                    <Briefcase size={14} className="text-white" />
                  </span>
                  <h4 className="flex items-center mb-1 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-50 font-sans font-bold">
                    {item.title}
                    {item.company && (
                      <span className="ml-2 text-base font-medium text-gray-600 dark:text-gray-400">
                        at
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 text-blue-500 hover:underline"
                          >
                            {item.company}
                          </a>
                        ) : (
                          <span className="ml-1">{item.company}</span>
                        )}
                      </span>
                    )}
                  </h4>
                  <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500 dark:text-gray-400 font-sans font-bold">
                    {item.date}
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-400 font-sans font-bold">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Experience;
