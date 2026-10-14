import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Sparkles } from 'lucide-react';
import { personalInfo, heroContent, socialLinks } from '../data/socialLinks';
import { fadeInUp, staggerContainer } from '../lib/animations';

function FloatingOrb({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) {
  return (
    <motion.div
      className="gradient-orb bg-primary/10"
      style={{ width: size, height: size, left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    const container = containerRef.current;
    container?.addEventListener('mousemove', handleMouseMove);
    return () => container?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Central geometric shape */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotateX: mousePos.y * 15,
          rotateY: mousePos.x * 15,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        {/* Outer ring */}
        <motion.div
          className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-primary/20 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute w-3 h-3 bg-primary rounded-full -top-1.5" />
        </motion.div>
        {/* Middle ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-60 md:h-60 rounded-full border border-primary/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute w-2 h-2 bg-emerald-400/60 rounded-full -top-1" />
          <div className="absolute w-2 h-2 bg-emerald-400/40 rounded-full -bottom-1 right-1/4" />
        </motion.div>
        {/* Inner hexagon / code symbol */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24"
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full border border-primary/30 rounded-lg rotate-45 flex items-center justify-center">
            <div className="w-3/4 h-3/4 border border-primary/20 rounded-sm rotate-12" />
          </div>
        </motion.div>
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary/40 rounded-full blur-md" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
      </motion.div>

      {/* Floating tech symbols */}
      {['</', '{;}', '( )', '=>', '[]'].map((symbol, i) => (
        <motion.span
          key={symbol}
          className="absolute text-primary/20 font-mono text-xs md:text-sm select-none"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.7,
            ease: 'easeInOut',
          }}
        >
          {symbol}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroContent.rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <FloatingOrb delay={0} size={400} x="-10%" y="-10%" />
      <FloatingOrb delay={2} size={300} x="70%" y="60%" />
      <FloatingOrb delay={4} size={200} x="50%" y="10%" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-28 md:py-32">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >
            {/* Availability badge */}
            <motion.div variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <motion.div
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-primary text-xs md:text-sm font-medium">{heroContent.badge}</span>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={fadeInUp} className="space-y-2">
              {heroContent.heading.map((line, i) => (
                <h1
                  key={i}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
                >
                  {i === 0 ? (
                    <span className="text-gradient glow-text">{line}</span>
                  ) : (
                    <span className="text-white">{line}</span>
                  )}
                </h1>
              ))}
            </motion.div>

            {/* Name */}
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-semibold text-white/90">
              {personalInfo.name}
            </motion.p>

            {/* Professional subtitle */}
            <motion.p variants={fadeInUp} className="text-sm md:text-base text-gray-400 font-medium">
              {personalInfo.shortTitle}
            </motion.p>

            {/* Rotating text */}
            <motion.div variants={fadeInUp} className="h-8 overflow-hidden">
              <motion.div
                key={currentTextIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <Sparkles size={16} className="text-primary" />
                <span className="text-primary font-medium text-sm md:text-base">
                  {heroContent.rotatingTexts[currentTextIndex]}
                </span>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={scrollToProjects} className="btn-primary">
                {heroContent.ctaButtons.projects}
                <ArrowDown size={16} />
              </button>
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download="Hemant_Sharma_Resume.pdf"
                className="btn-secondary"
              >
                <Download size={16} />
                {heroContent.ctaButtons.resume}
              </a>
            </motion.div>

            {/* Connect link */}
            <motion.div variants={fadeInUp}>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-primary transition-colors duration-300 group"
              >
                {heroContent.ctaButtons.connect}
                <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side — Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block relative h-[500px]"
          >
            <HeroScene />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
