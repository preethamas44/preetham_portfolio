import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="text-accent" /> Academic Background
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-slate-700 before:to-transparent">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Calendar size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-accent">Currently Pursuing</span>
                  </div>
                  <h4 className="font-bold text-lg text-white">B.E. in Electronics & Communication</h4>
                  <p className="text-sm text-slate-400 mb-2">Adichunchanagiri Institute of Technology, Chikkamagaluru</p>
                  <p className="text-slate-300 text-sm">2nd Year Engineering Student.</p>
                </div>
              </motion.div>
              
            </div>
          </div>

          {/* Learning & Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
              <Award className="text-accent" /> Learning & Activities
            </h3>
            
            <div className="space-y-4">
              {[
                "Academic project conceptualization and development",
                "Hands-on electronics and circuit experimentation",
                "Programming practice in Python and C",
                "Technical presentations on emerging technologies",
                "Engineering project documentation",
                "AI-assisted learning and modern development practices"
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass p-4 rounded-xl flex items-start gap-4 border-l-4 border-l-slate-700 hover:border-l-accent transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"></div>
                  <p className="text-slate-300">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications Placeholder */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white mb-6">Certifications</h3>
              <div className="glass-card p-6 text-center border-dashed border-2 border-slate-700">
                <p className="text-slate-400 italic">Continuously learning and acquiring new certifications...</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
