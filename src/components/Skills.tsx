import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Monitor, Server, Database, Code2, Wrench, BookOpen,
} from 'lucide-react';
import { skillCategories, type SkillCategory } from '../data/skills';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={20} />,
  Server: <Server size={20} />,
  Database: <Database size={20} />,
  Code2: <Code2 size={20} />,
  Wrench: <Wrench size={20} />,
  BookOpen: <BookOpen size={20} />,
};

function SkillCard({ skill }: { skill: { name: string; icon: string; description: string } }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="card-glass card-hover p-4 flex flex-col items-center gap-3 text-center cursor-default h-full">
        <motion.span
          className="text-2xl md:text-3xl"
          animate={isHovered ? { scale: 1.2, rotate: [0, -10, 10, 0] } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {skill.icon}
        </motion.span>
        <span className="text-sm font-semibold text-white">{skill.name}</span>
        <motion.p
          initial={{ height: 0, opacity: 0 }}
          animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs text-gray-500 overflow-hidden"
        >
          {skill.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

function CategorySection({ category }: { category: SkillCategory }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
      className="space-y-4"
    >
      <motion.div variants={fadeInUp} className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          {iconMap[category.icon]}
        </div>
        <h3 className="text-lg font-semibold text-white">{category.category}</h3>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wide">// skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Technologies I Work With
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-base md:text-lg">
            Tools and technologies I use to bring ideas to life. Hover to learn more.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <CategorySection key={category.category} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
