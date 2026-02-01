import React from 'react';
import {
  Database, Wind, FileCode, FileText,
  Shield, Lock, Server, Zap, Layers,
  Key, Share2, Activity, Search, Layout, Cpu, Terminal
} from 'lucide-react';

const skillsData = {
  'Frontend essentials': [
    { name: 'Tailwind CSS', icon: <Wind size={20} /> },
    { name: 'CSS', icon: <FileCode size={20} /> },
    { name: 'React Query / TanStack Query', icon: <Activity size={20} /> },
    { name: 'Zustand', icon: <Zap size={20} /> },
    { name: 'Redux', icon: <Layers size={20} /> },
    { name: 'React Hook Form', icon: <Layout size={20} /> },
    { name: 'Zod', icon: <Shield size={20} /> },
  ],
  'Backend & APIs': [
    { name: 'JWT', icon: <Key size={20} /> },
    { name: 'OAuth', icon: <Lock size={20} /> },
    { name: 'NextAuth / Auth.js', icon: <Shield size={20} /> },
    { name: 'Zod', icon: <Shield size={20} /> },
    { name: 'WebSockets', icon: <Activity size={20} /> },
    { name: 'Socket.io', icon: <Share2 size={20} /> },
    { name: 'REST best practices', icon: <Server size={20} /> },
    { name: 'GraphQL basics', icon: <Search size={20} /> },
  ],
  'Architecture & fundamentals': [
    { name: 'System design basics', icon: <Cpu size={20} /> },
    { name: 'Clean architecture / layering', icon: <Layers size={20} /> },
    { name: 'Database design & indexing', icon: <Database size={20} /> },
    { name: 'CORS', icon: <Shield size={20} /> },
    { name: 'CSRF', icon: <Lock size={20} /> },
    { name: 'XSS', icon: <Shield size={20} /> },
    { name: 'SQL injection', icon: <Terminal size={20} /> },
    { name: 'Rate limiting', icon: <Activity size={20} /> },
  ],
  'Extra': [
    { name: 'Docs: Swagger / OpenAPI', icon: <FileText size={20} /> },
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
