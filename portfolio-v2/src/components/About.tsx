import { motion } from 'framer-motion';
import { Cpu, BookOpen, Lightbulb, Code } from 'lucide-react';

export const About = () => {
  const cards = [
    { icon: <Cpu className="text-accent" size={24} />, title: "ECE Engineering", desc: "Specializing in hardware-software integration." },
    { icon: <BookOpen className="text-accent" size={24} />, title: "2nd Year", desc: "Adichunchanagiri Institute of Technology." },
    { icon: <Code className="text-accent" size={24} />, title: "Multiple Projects", desc: "Hands-on experience in practical solutions." },
    { icon: <Lightbulb className="text-accent" size={24} />, title: "Always Learning", desc: "Exploring AI, automation, and embedded systems." }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              Hello! I am a second-year student pursuing my Bachelor of Engineering in Electronics and Communication Engineering at Adichunchanagiri Institute of Technology in Chikkamagaluru, Karnataka.
            </p>
            <p>
              My academic journey is driven by a deep fascination with how hardware and software communicate. I am particularly interested in electronics, embedded systems, programming, and leveraging AI-assisted development to build innovative, real-world projects.
            </p>
            <p>
              I believe in a hands-on learning approach. Rather than just studying theory, I constantly challenge myself to solve practical problems by conceptualizing and prototyping functional systems. My career goal is to become a professional engineer who designs robust technical solutions that make a tangible difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center mb-4 border border-slate-700/50">
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
