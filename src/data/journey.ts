export interface JourneyMilestone {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 1,
    title: 'Started Learning Web Development',
    description:
      'Took the first step into web development by learning HTML and CSS, understanding how the web works at a fundamental level.',
    icon: 'Rocket',
  },
  {
    id: 2,
    title: 'Built Initial Frontend Projects',
    description:
      'Created early projects like portfolio pages and website clones, gaining confidence in building real user interfaces.',
    icon: 'Layout',
  },
  {
    id: 3,
    title: 'Explored JavaScript & React',
    description:
      'Dived deep into JavaScript ES6+ features, DOM manipulation, and started building dynamic interfaces with React.js.',
    icon: 'Code2',
  },
  {
    id: 4,
    title: 'Started Backend Development',
    description:
      'Began learning server-side development with Node.js and Express.js, understanding RESTful APIs and server architecture.',
    icon: 'Server',
  },
  {
    id: 5,
    title: 'Worked with Databases & APIs',
    description:
      'Explored MongoDB and MySQL for data persistence, and integrated third-party APIs into web applications.',
    icon: 'Database',
  },
  {
    id: 6,
    title: 'Web Development Intern — WsCube Tech, Jaipur',
    description:
      'Gaining practical industry experience building responsive, user-friendly websites with React.js, Tailwind CSS, JavaScript, Git, and GitHub (Aug 2026 – Present).',
    icon: 'Briefcase',
  },
  {
    id: 7,
    title: 'Advanced MERN Stack Engineering',
    description:
      'Building scalable full-stack applications with MongoDB, Express.js, React.js, and Node.js with secure REST APIs and database modeling.',
    icon: 'Layers',
  },
  {
    id: 8,
    title: 'Expanding into AI & Problem Solving',
    description:
      'Deepening problem-solving skills with Data Structures & Algorithms, while integrating AI-assisted engineering into development workflows.',
    icon: 'Brain',
  },
];
