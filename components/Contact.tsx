import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-dark-800 pt-24 pb-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Let's build something <span className="text-primary">amazing</span> together.
            </h2>
            <p className="text-slate-400 text-lg mb-12">
              I'm currently available for freelance work or full-time opportunities. 
              If you have a project that needs some creative touch, drop me a line.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email Me</div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl font-medium hover:text-primary transition-colors">{PERSONAL_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Call Me</div>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xl font-medium hover:text-primary transition-colors">{PERSONAL_INFO.phone}</a>
                </div>
              </div>

               <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <span className="text-xl font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-dark-900 p-8 rounded-2xl border border-slate-800 shadow-2xl"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-dark-900 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]">
                Send Message
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Jubin T Joseph. All rights reserved.
          </div>
          <div className="flex gap-6">
             {SOCIAL_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-primary transition-colors"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;