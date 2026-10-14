import { motion } from 'framer-motion';
import {
  Rocket, Layout, Code2, Server, Database, Layers, Brain, Briefcase,
} from 'lucide-react';
import { journeyMilestones } from '../data/journey';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={20} />,
  Layout: <Layout size={20} />,
  Code2: <Code2 size={20} />,
  Server: <Server size={20} />,
  Database: <Database size={20} />,
  Briefcase: <Briefcase size={20} />,
  Layers: <Layers size={20} />,
  Brain: <Brain size={20} />,
};

export default function Journey() {
  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-primary text-sm font-mono tracking-wide">// journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            My Development Journey
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-base md:text-lg">
            Key milestones in my path to becoming a full stack developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          {journeyMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              variants={staggerItem}
              className="relative flex gap-6 md:gap-8 mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="relative z-10 shrink-0">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-dark-50 border border-gray-800/50 flex items-center justify-center text-primary shadow-lg shadow-primary/5"
                >
                  {iconMap[milestone.icon]}
                </motion.div>
              </div>

              {/* Content */}
              <div className="pt-1 md:pt-3">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {milestone.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* End dot */}
          <div className="relative flex items-center gap-6 md:gap-8">
            <div className="relative z-10 shrink-0">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-primary rounded-full"
                />
              </div>
            </div>
            <p className="text-primary font-medium text-sm">The journey continues...</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
