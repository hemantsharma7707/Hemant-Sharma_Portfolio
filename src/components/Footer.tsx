import { motion } from 'framer-motion';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { personalInfo, socialLinks, footerContent } from '../data/socialLinks';
import { fadeInUp } from '../lib/animations';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [
    { icon: <GithubIcon size={18} />, href: socialLinks.github, label: 'GitHub' },
    { icon: <LinkedinIcon size={18} />, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: socialLinks.email, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-gray-800/50">
      {/* Decorative top line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="section-container py-12 md:py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center gap-6"
        >
          {/* Name and monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">{personalInfo.monogram}</span>
            </div>
            <span className="text-lg font-bold text-white">{personalInfo.name}</span>
          </div>

          {/* Tagline */}
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            {footerContent.tagline.split('.')[0]}.
            <Heart size={12} className="text-primary inline-block" />
            {footerContent.tagline.split('.').slice(1).join('.')}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 rounded-xl bg-dark-50 border border-gray-800/50 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-xs">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="mt-2 p-3 rounded-xl bg-dark-50 border border-gray-800/50 text-gray-500 hover:text-primary hover:border-primary/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
