import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import { type Project } from '../data/projects';
import { getProjectGradientClass } from '../lib/utils';
import { staggerItem } from '../lib/animations';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      layout
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="card-glass card-hover overflow-hidden h-full flex flex-col">
        {/* Project preview image / gradient */}
        <div className={`relative aspect-video ${getProjectGradientClass(project.image)} overflow-hidden`}>
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-white/20 text-4xl md:text-5xl font-bold select-none"
              whileHover={{ scale: 1.05 }}
            >
              {project.title.split(' ').map((w) => w[0]).join('')}
            </motion.span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <span className="text-sm font-medium text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
              View Details
            </span>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 px-2.5 py-1 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
              <span className="text-primary text-xs font-semibold">Featured</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mt-2 line-clamp-2 flex-1">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-dark-100 rounded-md border border-gray-800/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-800/50">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-400 transition-colors"
                aria-label={`Live demo of ${project.title}`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GithubIcon size={14} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
