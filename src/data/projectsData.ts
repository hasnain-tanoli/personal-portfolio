export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  githubLink?: string;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: 'ConnectP',
    description: 'A social media platform designed for seamless connection and interaction, featuring real-time chats and a video calls.',
    technologies: ['React', 'Tailwind', 'Node.js', 'daisyUI', 'Zustand', 'Stream', 'bcryptJS', 'MongoDB'],
    image: '/assets/connectp.png',
    link: 'https://connect-p-px4qr.sevalla.app/',
    githubLink: 'https://github.com/hasnain-tanoli/connect-p',
  },
  {
    id: 2,
    title: 'Pace AI',
    description: 'An AI-powered tutoring application that provides personalized learning experiences and adaptive content based on user progress.',
    technologies: ['React.js', 'Tailwind', 'Node.js', 'Google Gemini'],
    image: '/assets/paceai.png',
    link: 'https://pace-ai-chi.vercel.app/',
    githubLink: 'https://github.com/hasnain-tanoli/pace-ai',

  },
];

export const allProjects: Project[] = [
  {
    id: 1,
    title: 'ConnectP',
    description: 'A social media platform designed for seamless connection and interaction, featuring real-time chats and a video calls.',
    technologies: ['React', 'Tailwind', 'Node.js', 'daisyUI', 'Zustand', 'Stream', 'bcryptJS', 'MongoDB'],
    image: '/assets/connectp.png',
    link: 'https://connect-p-px4qr.sevalla.app/',
    githubLink: 'https://github.com/hasnain-tanoli/connect-p',
  },
  {
    id: 2,
    title: 'Pace AI',
    description: 'An AI-powered tutoring application that provides personalized learning experiences and adaptive content based on user progress.',
    technologies: ['React.js', 'Tailwind', 'Node.js', 'Google Gemini'],
    image: '/assets/paceai.png',
    link: 'https://pace-ai-chi.vercel.app/',
    githubLink: 'https://github.com/hasnain-tanoli/pace-ai',
  },
  {
    id: 3,
    title: 'MusicDL',
    description: 'Download Spotify music effortlessly! MusicDL is a full-stack web application with real-time progress tracking for tracks, albums, and playlists.',
    technologies: ['React.js', 'Tailwind', 'Node.js', 'Spotdl'],
    image: '/assets/musicdl.png',
    link: 'https://github.com/hasnain-tanoli/music-dl.git',
    githubLink: 'https://github.com/hasnain-tanoli/music-dl.git',
  },
  {
    id: 4,
    title: 'Scroll',
    description: 'A modern, full-stack web application built with React for creating, editing, and sharing blog posts. Scroll provides a seamless writing experience with rich text editing, user authentication, and a clean, responsive UI.',
    technologies: ['React.js', 'Tailwind', 'Node.js', 'Redux', 'Appwrite', 'TinyMCE', 'React Hook Forms'],
    image: '/assets/scroll.png',
    link: 'https://scroll-phi-two.vercel.app/',
    githubLink: 'https://github.com/hasnain-tanoli/scroll.git',
  },
  {
    id: 5,
    title: 'Sentra',
    description: 'Sentra RBAC CMS is a cutting-edge content management system built with Next.js 16, designed to provide security through its sophisticated Role-Based Access Control (RBAC) system. Perfect for teams that need granular control over content and user permissions.',
    technologies: ['Next.js', 'Next-Auth', 'Tailwind', 'MongoDB', 'Tailwind CSS', 'Shadcn UI', 'TipTap Editor'],
    image: '/assets/sentra.png',
    link: 'https://sentra-rbac-cms.vercel.app/',
    githubLink: 'https://github.com/hasnain-tanoli/sentra-rbac-cms.git',
  }
]
