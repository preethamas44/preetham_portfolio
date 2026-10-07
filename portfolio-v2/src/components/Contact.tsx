import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send, FileText, Download } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-slate-400">I'm currently looking for new opportunities, internships, and exciting projects to collaborate on.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href="mailto:muktham807@gmail.com" className="text-white hover:text-accent font-medium">muktham807@gmail.com</a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-4 uppercase tracking-wider font-semibold">Social Profiles</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent transition-colors">
                  <Github size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0077b5] transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#e1306c] transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div className="glass-card p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-accent/20">
              <h4 className="text-white font-semibold flex items-center gap-2 mb-4">
                <FileText size={18} className="text-accent" /> Resume
              </h4>
              <div className="flex gap-3">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  View Resume
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-accent/10 text-accent hover:bg-accent hover:text-white border border-accent/30 py-2 rounded-lg text-sm font-medium transition-colors">
                  <Download size={16} /> Download
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                  <input type="email" id="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" placeholder="Project Inquiry" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none" placeholder="Hello Preetham, I would like to..."></textarea>
              </div>
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white py-4 rounded-lg font-bold transition-colors shadow-lg shadow-accent/20">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
