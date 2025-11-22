import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my work ranging from IoT systems to Full Stack web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-dark-900 rounded-xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20 bg-dark-900/90 px-3 py-1 rounded-full text-xs font-mono text-primary border border-primary/30">
                  {project.date}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  )}
                  {project.links.demo && (
                     <a 
                     href={project.links.demo} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                   >
                     <ExternalLink size={18} />
                     Live Demo
                   </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;