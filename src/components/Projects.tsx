import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects, projectFilters, type ProjectCategory, type Project } from '../data/projects';
import { socialLinks } from '../data/socialLinks';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <>
      <section id="projects" className="section-padding relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="section-container">
          {/* Section heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
            className="mb-12"
          >
            <span className="text-primary text-sm font-mono tracking-wide">// projects</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              Things I&apos;ve Built
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl text-base md:text-lg">
              Selected projects that showcase my development skills and problem-solving approach.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={fadeInUp}
            className="flex flex-wrap gap-2 mb-10"
          >
            {projectFilters.map((filter) => {
              const count = filter.value === 'all'
                ? projects.length
                : projects.filter((p) => p.category === filter.value).length;

              if (count === 0 && filter.value !== 'all') return null;

              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.value
                      ? 'bg-primary text-dark'
                      : 'bg-dark-50 text-gray-400 border border-gray-800/50 hover:border-gray-700 hover:text-white'
                  }`}
                >
                  {filter.label}
                  <span className="ml-1.5 text-xs opacity-60">{count}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Project grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Projects */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View All Projects on GitHub
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}
