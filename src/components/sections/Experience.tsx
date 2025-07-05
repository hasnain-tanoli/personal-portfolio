import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, GitBranch, Server, PenTool } from 'lucide-react';

const experienceData = [
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    date: '2023 - Present',
    description: 'Designed and developed custom websites for clients, focusing on clean design and performance.',
  },
];

const skillsData = {
  Frontend: [
    { name: 'React', icon: <Code size={20} /> },
    { name: 'Next.js', icon: <Code size={20} /> },
    { name: 'Tailwind CSS', icon: <PenTool size={20} /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <Server size={20} /> },
    { name: 'Firebase', icon: <Server size={20} /> },
  ],
  'Dev Tools': [
    { name: 'Git', icon: <GitBranch size={20} /> },
    { name: 'Github', icon: <GitBranch size={20} /> },
  ],
};

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
          <p className="text-sm text-gray-600 max-w-3xl mx-auto dark:text-gray-400 px-4 md:hidden">
            I don’t have professional experience just yet — but I’m eager to grow, collaborate, and make a meaningful impact.
          </p>
          <p className="hidden md:block text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-400 px-4 md:px-0">
            I don’t have professional experience just yet — but I’m eager to grow, collaborate, and make a meaningful impact.
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
                  <h4 className="flex items-center mb-1 text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-50">
                    {item.title}
                  </h4>
                  <time className="block mb-2 text-xs md:text-sm font-normal leading-none text-gray-500 dark:text-gray-400">
                    {item.date}
                  </time>
                  <p className="text-base font-normal text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm backdrop-blur-sm border border-gray-200 dark:bg-gray-900/20 dark:border-gray-800/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 font-heading text-gray-800 dark:text-gray-50">What I Know</h3>
            <div className="space-y-6 md:space-y-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-gray-50">{category}</h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {skills.map(skill => (
                      <div key={skill.name} className="flex items-center gap-2 bg-gray-200 text-gray-800 border border-gray-300 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 hover:bg-gray-300 hover:border-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-600">
                        {React.cloneElement(skill.icon, { size: 14, className: 'text-green-600 dark:text-green-400' })}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
