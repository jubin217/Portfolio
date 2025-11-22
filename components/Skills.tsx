import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu, Code2, Globe, Wrench } from 'lucide-react';

const categories = [
  { id: 'Language', label: 'Languages', icon: Code2 },
  { id: 'Framework', label: 'Frameworks', icon: Globe },
  { id: 'Tool', label: 'Tools', icon: Wrench },
  { id: 'Concept', label: 'Concepts', icon: Cpu },
] as const;

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6 text-primary">
                <category.icon size={24} />
                <h3 className="text-xl font-bold text-white">{category.label}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(skill => skill.category === category.id).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.1)" }}
                    className="px-4 py-2 bg-dark-900 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm cursor-default"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;