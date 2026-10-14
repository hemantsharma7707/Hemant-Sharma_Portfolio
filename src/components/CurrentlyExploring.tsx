import { motion } from 'framer-motion';
import { Code2, Brain, Cpu } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '../lib/animations';

const explorations = [
  {
    icon: <Code2 size={28} />,
    title: 'Full Stack Development',
    description:
      'Building complete applications with React, Node.js, Express, MongoDB, and REST APIs.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/20',
  },
  {
    icon: <Brain size={28} />,
    title: 'Data Structures & Algorithms',
    description:
      'Improving problem-solving ability and strengthening programming fundamentals with C++.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: <Cpu size={28} />,
    title: 'AI Engineering',
    description:
      'Exploring AI technologies and learning how intelligent capabilities can be integrated into useful applications.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/20',
  },
];

export default function CurrentlyExploring() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm font-mono tracking-wide">// currently</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Currently Exploring
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {explorations.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className={`card-glass ${item.borderColor} card-hover p-6 md:p-8 text-center space-y-4 group`}
            >
              <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
