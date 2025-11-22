import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-primary text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Available for work
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-400 mb-8 font-light h-16 md:h-auto">
            {PERSONAL_INFO.role} based in {PERSONAL_INFO.location}
          </h2>

          <p className="text-slate-400 mb-10 max-w-lg leading-relaxed">
            Transforming ideas into scalable solutions using React, Node.js, Python, and AI. 
            Passionate about IoT and Automation.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-primary text-dark-900 font-bold rounded hover:bg-primary-light transition-all flex items-center gap-2 cursor-pointer"
            >
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              onClick={scrollToContact}
              className="px-8 py-4 bg-transparent border border-slate-700 text-white font-medium rounded hover:bg-slate-800 transition-all flex items-center gap-2 cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex gap-6">
            {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transition-colors transform hover:scale-110"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
             {/* Decorative Code Block Visualization */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-2xl rotate-6 opacity-20 blur-xl"></div>
             <div className="absolute inset-0 bg-dark-800 border border-slate-700 rounded-2xl shadow-2xl p-6 flex flex-col">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 overflow-hidden font-mono text-sm">
                  <div className="text-slate-500">// Initializing Jubin's Portfolio...</div>
                  <div className="mt-2">
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = <span className="text-purple-400">new</span> <span className="text-blue-400">Engineer</span>({'{'}
                  </div>
                  <div className="pl-4 text-slate-300">
                    name: <span className="text-green-400">"{PERSONAL_INFO.name}"</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    skills: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"Node"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"AI"</span>],
                  </div>
                  <div className="pl-4 text-slate-300">
                    hardWorker: <span className="text-orange-400">true</span>,
                  </div>
                  <div className="pl-4 text-slate-300">
                    quickLearner: <span className="text-orange-400">true</span>
                  </div>
                  <div>{'}'});</div>
                  <div className="mt-4">
                    <span className="text-purple-400">await</span> <span className="text-yellow-300">developer</span>.<span className="text-blue-400">buildFuture</span>();
                  </div>
                  <div className="mt-4 animate-pulse text-primary">_</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;