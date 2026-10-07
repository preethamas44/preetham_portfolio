import { motion } from 'framer-motion';

export const Skills = () => {
  const categories = [
    {
      title: "Programming",
      skills: [
        { name: "C", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "Java", level: "Working Knowledge" }
      ]
    },
    {
      title: "Web & Software",
      skills: [
        { name: "HTML", level: "Familiar" },
        { name: "CSS", level: "Familiar" },
        { name: "JavaScript", level: "Working Knowledge" },
        { name: "Tkinter", level: "Working Knowledge" }
      ]
    },
    {
      title: "Electronics & Embedded",
      skills: [
        { name: "Verilog", level: "Currently Learning" },
        { name: "8051 Microcontroller", level: "Familiar" },
        { name: "Digital Electronics", level: "Intermediate" },
        { name: "Analog Electronics", level: "Familiar" },
        { name: "Communication Systems", level: "Familiar" },
        { name: "Embedded Systems", level: "Working Knowledge" }
      ]
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "Vivado", level: "Familiar" },
        { name: "VS Code", level: "Intermediate" },
        { name: "Git/GitHub", level: "Working Knowledge" },
        { name: "MATLAB", level: "Currently Learning" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map(skill => (
                  <div key={skill.name} className="flex justify-between items-center group">
                    <span className="text-slate-300 font-medium group-hover:text-accent transition-colors">{skill.name}</span>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
