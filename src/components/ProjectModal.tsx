import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './icons';
import { type Project } from '../data/projects';
import { getProjectGradientClass } from '../lib/utils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Escape key closes modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  // Focus trap
  useEffect(() => {
    if (project && modalRef.current) {
      modalRef.current.focus();
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-md" />

          {/* Modal content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-dark-50 border border-gray-800/50 rounded-2xl shadow-2xl"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-dark-100/80 backdrop-blur-sm border border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 transition-all"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header gradient */}
            <div className={`relative h-48 md:h-56 ${getProjectGradientClass(project.image)}`}>
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 text-6xl md:text-7xl font-bold select-none">
                  {project.title.split(' ').map((w) => w[0]).join('')}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-dark-50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-white">
                  {project.title}
                </h2>

                {/* Action buttons */}
                <div className="flex items-center gap-3 mt-4">
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <GithubIcon size={16} />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Overview
                </h3>
                <p className="text-gray-400 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Problem */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  Problem Being Solved
                </h3>
                <p className="text-gray-400 leading-relaxed">{project.problem}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-dark-100 rounded-lg border border-gray-800/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
