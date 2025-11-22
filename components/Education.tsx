import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full bg-gradient-to-l from-slate-800/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Journey So Far</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" /> Education
            </h3>
            <div className="space-y-8 border-l-2 border-slate-800 pl-8 ml-3">
              {EDUCATION.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-dark-900 border-4 border-primary"></span>
                  <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <div className="text-primary font-medium mb-4">{edu.institution}</div>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                    </div>
                    <div className="mt-4 inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                      {edu.score}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-primary" /> Certifications & Achievements
            </h3>
            <div className="grid gap-4">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 border border-slate-800 p-5 rounded-xl flex items-start gap-4 hover:border-primary/30 transition-all"
                >
                  <div className="p-3 bg-primary/10 text-primary rounded-lg">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className="text-slate-400 text-sm">{cert.issuer} • {cert.year}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Achievement Highlight based on resume */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-primary/20 to-blue-600/20 border border-primary/20 p-5 rounded-xl"
                >
                  <h4 className="text-lg font-bold text-white mb-2">Active Leader</h4>
                  <p className="text-slate-300 text-sm">
                    Demonstrated leadership in academic projects and active participation in Hackathons.
                  </p>
                </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;