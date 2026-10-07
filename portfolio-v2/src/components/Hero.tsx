import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-3">Welcome to my portfolio</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              Hi, I'm <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Preetham A S</span>
            </h1>
            <h3 className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
              Electronics & Communication Engineering Student | Tech Enthusiast | Problem Solver
            </h3>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm an ECE engineering student passionate about electronics, embedded systems, programming and building innovative solutions to real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full font-medium transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                View My Projects
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-8 py-3 rounded-full font-medium transition-all">
                Contact Me
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border border-slate-700/50 shadow-[0_0_40px_rgba(56,189,248,0.1)]"></div>
              {/* Outer animated rings */}
              <div className="absolute inset-[-20px] rounded-full border border-accent/20 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-[-40px] rounded-full border border-blue-500/10 border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 border-4 border-slate-800 relative z-10 flex items-center justify-center">
                {/* Profile Placeholder, replace src with actual image if available */}
                <img src="/pixel_avatar.jpg" alt="Preetham A S" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
