export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'other';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  features: string[];
  tech: string[];
  category: ProjectCategory;
  github: string;
  liveDemo: string;
  image: string; // gradient placeholder - replace with actual screenshots
  featured: boolean;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PROJECT DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// All data below is derived from verified GitHub repositories.
// Update liveDemo URLs and image paths when available.

export const projects: Project[] = [
  {
    id: 'brain-byte',
    title: 'Brain Byte',
    description:
      'An interactive web application built with JavaScript, deployed on Vercel for a seamless user experience.',
    longDescription:
      'Brain Byte is a web project designed to deliver an engaging interactive experience. Built with vanilla JavaScript and deployed to Vercel for fast, global access.',
    problem:
      'Creating an engaging, interactive web experience that works smoothly across devices.',
    features: [
      'Interactive user interface',
      'Modern responsive design',
      'Deployed on Vercel for fast loading',
      'Clean JavaScript implementation',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/hemantsharma7707/Brain-Byte',
    liveDemo: 'https://brain-byte-navy.vercel.app',
    image: 'gradient-1',
    featured: true,
  },
  {
    id: 'event-hub',
    title: 'Event Hub',
    description:
      'An event management web project to help users explore event-related information through a modern web interface.',
    longDescription:
      'EventHub is an event management web project built with HTML, CSS, and JavaScript. It provides users with a clean interface to browse and explore event-related information.',
    problem:
      'Organizing and presenting event information in an accessible, user-friendly format.',
    features: [
      'Event information display',
      'Responsive layout design',
      'Clean UI with organized content',
      'GitHub Pages deployment',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/hemantsharma7707/EventHub',
    liveDemo: '', // PLACEHOLDER: Add live demo URL if deployed
    image: 'gradient-2',
    featured: true,
  },
  {
    id: 'petals-of-happiness',
    title: 'Petals of Happiness',
    description:
      'A beautifully designed web application deployed on Vercel, built with JavaScript for a delightful user experience.',
    longDescription:
      'Petals of Happiness is a creative web project showcasing thoughtful design and engaging interactions. Deployed on Vercel for seamless global access.',
    problem:
      'Crafting a visually appealing web experience that brings joy to users.',
    features: [
      'Beautiful visual design',
      'Interactive elements',
      'Vercel deployment with custom domain',
      'Responsive across devices',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/hemantsharma7707/Petals-of-happiness',
    liveDemo: 'https://petals-of-happiness.vercel.app',
    image: 'gradient-3',
    featured: true,
  },
  {
    id: 'hand-tracking',
    title: 'Hand Tracking',
    description:
      'An interactive computer vision project exploring hand tracking and gesture-based interaction using web technologies.',
    longDescription:
      'HandTracking is a computer vision project that explores hand tracking and gesture recognition. Built with HTML and web APIs to demonstrate interactive possibilities.',
    problem:
      'Exploring computer vision capabilities in the browser with hand gesture detection.',
    features: [
      'Hand tracking visualization',
      'Gesture-based interaction',
      'Real-time processing',
      'Browser-based implementation',
    ],
    tech: ['HTML', 'JavaScript', 'Computer Vision'],
    category: 'other',
    github: 'https://github.com/hemantsharma7707/HandTracking',
    liveDemo: '', // PLACEHOLDER: Add live demo URL if deployed
    image: 'gradient-4',
    featured: true,
  },
  {
    id: 'todo-app',
    title: 'To-Do List',
    description:
      'A task management application to help users organize and track their daily tasks efficiently.',
    longDescription:
      'A clean and functional to-do list application built with HTML, CSS, and JavaScript. Helps users manage their daily tasks with an intuitive interface.',
    problem:
      'Providing a simple yet effective way to manage and organize daily tasks.',
    features: [
      'Add and remove tasks',
      'Task completion tracking',
      'Clean, intuitive interface',
      'Responsive design',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/hemantsharma7707/todo-app',
    liveDemo: '', // PLACEHOLDER: Add live demo URL if deployed
    image: 'gradient-5',
    featured: false,
  },
  {
    id: 'hire-hub',
    title: 'HireHub',
    description:
      'A job-related web platform designed to connect users with hiring opportunities through a modern interface.',
    longDescription:
      'HireHub is a web project focused on the hiring and job search space. Built with HTML and deployed on Vercel for fast, accessible performance.',
    problem:
      'Creating a modern web platform for job seekers to explore opportunities.',
    features: [
      'Job listing interface',
      'Modern responsive design',
      'Clean navigation',
      'Vercel deployment',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/hemantsharma7707/HireHub',
    liveDemo: 'https://hire-hub-umber.vercel.app',
    image: 'gradient-6',
    featured: false,
  },
  {
    id: 'ironfit-gym',
    title: 'IronFit GYM',
    description:
      'A fitness and gym website with modern design, responsive layout, and deployed on Vercel.',
    longDescription:
      'IronFit GYM is a gym and fitness website featuring a polished, modern design with responsive layouts. Deployed on Vercel for fast, reliable access.',
    problem:
      'Building a professional gym website that looks great across all devices.',
    features: [
      'Professional gym website design',
      'Responsive layout',
      'Multiple sections and pages',
      'Vercel deployment',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    github: 'https://github.com/hemantsharma7707/IronFit-GYM',
    liveDemo: 'https://iron-fit-gym-delta.vercel.app',
    image: 'gradient-7',
    featured: false,
  },
  {
    id: 'movie-search-app',
    title: 'Movie Search App',
    description:
      'A web application for searching and browsing movie information using API integration.',
    longDescription:
      'Movie Search App is an HTML-based project that lets users search for and browse movie information. Demonstrates API integration and dynamic content rendering.',
    problem:
      'Providing users with an easy way to discover and search for movie information.',
    features: [
      'Movie search functionality',
      'API integration',
      'Dynamic content display',
      'Clean user interface',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    category: 'frontend',
    github: 'https://github.com/hemantsharma7707/Movie-Search-App',
    liveDemo: '', // PLACEHOLDER: Add live demo URL if deployed
    image: 'gradient-8',
    featured: false,
  },
];

export const projectFilters: { label: string; value: ProjectCategory }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Other', value: 'other' },
];
