import React from 'react';
import { Code, Database, Wind, FileCode, Globe, FileText, Puzzle, MessageCircle, GitCompare, BookOpen } from 'lucide-react';

const skillsData = {
  'Technical Skills': [
    { name: 'MERN Stack', icon: <Database size={20} /> },
    { name: 'React', icon: <Code size={20} /> },
    { name: 'Tailwind CSS', icon: <Wind size={20} /> },
    { name: 'JavaScript', icon: <FileCode size={20} /> },
    { name: 'HTML', icon: <FileCode size={20} /> },
    { name: 'CSS', icon: <FileCode size={20} /> },
    { name: 'WordPress', icon: <Globe size={20} /> },
    { name: 'MS Office', icon: <FileText size={20} /> },
  ],
  'Soft Skills': [
    { name: 'Problem Solving', icon: <Puzzle size={20} /> },
    { name: 'Communication', icon: <MessageCircle size={20} /> },
    { name: 'Adaptability', icon: <GitCompare size={20} /> },
    { name: 'Self Learning', icon: <BookOpen size={20} /> },
  ],
};

const Skills: React.FC = () => {
  return (
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
  );
};

export default Skills;
