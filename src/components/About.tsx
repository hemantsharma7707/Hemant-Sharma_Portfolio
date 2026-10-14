import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code2, Brain, Briefcase } from 'lucide-react';
import { aboutContent } from '../data/socialLinks';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '../lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  Education: <GraduationCap size={18} className="text-primary" />,
  Location: <MapPin size={18} className="text-primary" />,
  Focus: <Code2 size={18} className="text-primary" />,
  Stack: <Code2 size={18} className="text-primary" />,
  Internship: <Briefcase size={18} className="text-primary" />,
  'Currently Exploring': <Brain size={18} className="text-primary" />,
};

function CodeSnippet() {
  return (
    <motion.div
      variants={fadeInUp}
      className="mt-8 p-4 rounded-xl bg-dark-100 border border-gray-800/50 font-mono text-xs md:text-sm overflow-hidden"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="text-gray-600 text-xs ml-2">developer.ts</span>
      </div>
      <div className="space-y-1 text-gray-400">
        <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
        <p className="pl-4"><span className="text-emerald-400">name</span>: <span className="text-amber-300">&apos;Hemant Sharma&apos;</span>,</p>
        <p className="pl-4"><span className="text-emerald-400">role</span>: <span className="text-amber-300">&apos;Full Stack Developer&apos;</span>,</p>
        <p className="pl-4"><span className="text-emerald-400">stack</span>: [<span className="text-amber-300">&apos;MERN&apos;</span>],</p>
        <p className="pl-4"><span className="text-emerald-400">loves</span>: <span className="text-amber-300">&apos;Building cool stuff&apos;</span>,</p>
        <p>{'}'};</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wide">// about</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">{aboutContent.heading}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Visual / Photo Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={slideInLeft}
          >
            {/* Developer photo card */}
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Subtle neon glow behind portrait */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-emerald-500/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

              <div className="relative aspect-[4/5] rounded-2xl bg-dark-50 border border-gray-800/80 overflow-hidden shadow-2xl group-hover:border-primary/40 transition-colors duration-500">
                <img
                  src="/hemant.jpg"
                  alt="Hemant Sharma - Full Stack Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent pointer-events-none" />

                {/* Corner futuristic tech accents */}
                <div className="absolute top-0 left-0 w-16 h-16 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/60 to-transparent" />
                  <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-primary/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
                  <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-primary/60 to-transparent" />
                  <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-primary/60 to-transparent" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-3 md:right-auto md:-left-4 z-10 px-4 py-2 rounded-xl bg-dark/90 backdrop-blur-md border border-primary/30 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <Code2 size={16} className="text-primary" />
                  <span className="text-xs font-semibold text-white">Full Stack Developer</span>
                </div>
              </motion.div>
            </div>

            <CodeSnippet />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Paragraphs */}
            {aboutContent.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={slideInRight}
                className="text-gray-400 text-base md:text-lg leading-relaxed"
              >
                {p}
              </motion.p>
            ))}

            {/* Info cards */}
            <motion.div
              variants={slideInRight}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {aboutContent.infoCards.map((card) => (
                <div
                  key={card.label}
                  className="card-glass card-hover p-4 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    {iconMap[card.label]}
                    <span className="text-xs text-gray-500 font-medium">{card.label}</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{card.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
