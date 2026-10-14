export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'HTML5', icon: '🌐', description: 'Semantic markup and modern HTML5 APIs' },
      { name: 'CSS3', icon: '🎨', description: 'Responsive layouts, animations, and modern CSS' },
      { name: 'JavaScript', icon: '⚡', description: 'ES6+, async programming, and DOM manipulation' },
      { name: 'React.js', icon: '⚛️', description: 'Component-based UI development with hooks' },
      { name: 'Tailwind CSS', icon: '💨', description: 'Utility-first CSS framework for rapid UI' },
    ],
  },
  {
    category: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript runtime environment' },
      { name: 'Express.js', icon: '🚂', description: 'Fast, minimalist web framework for Node.js' },
      { name: 'REST APIs', icon: '🔌', description: 'Designing and consuming RESTful services' },
    ],
  },
  {
    category: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', icon: '🍃', description: 'NoSQL document database for modern apps' },
      { name: 'MySQL', icon: '🐬', description: 'Relational database management system' },
    ],
  },
  {
    category: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'C++', icon: '⚙️', description: 'Systems programming and competitive coding' },
      { name: 'Python', icon: '🐍', description: 'Scripting, automation, and AI exploration' },
    ],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', icon: '🔀', description: 'Version control and collaboration' },
      { name: 'GitHub', icon: '🐙', description: 'Code hosting and project management' },
      { name: 'VS Code', icon: '💻', description: 'Primary code editor and IDE' },
      { name: 'Postman', icon: '📮', description: 'API testing and development' },
      { name: 'Vite', icon: '⚡', description: 'Next-generation frontend build tool' },
    ],
  },
  {
    category: 'Learning',
    icon: 'BookOpen',
    skills: [
      { name: 'DSA', icon: '🧩', description: 'Data Structures and Algorithms with C++' },
      { name: 'AI Engineering', icon: '🤖', description: 'Exploring AI technologies and integration' },
    ],
  },
];
