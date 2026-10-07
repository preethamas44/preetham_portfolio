import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Voice Controlled Wheelchair",
    category: "Embedded",
    shortDesc: "An assistive mobility system controlled through voice commands using a smartphone/interface and embedded hardware.",
    tech: ["Microcontroller", "Bluetooth", "Motor Driver", "Voice Recognition"],
    details: {
      problem: "Traditional wheelchairs require physical exertion which can be difficult for individuals with severe mobility impairments.",
      objective: "To design and develop an affordable voice-operated mobility assistance device.",
      working: "The user gives voice commands via an Android app. The commands are processed and sent via Bluetooth to the microcontroller, which drives the wheelchair motors accordingly.",
      results: "Successfully prototyped a small-scale model that responds accurately to 'forward', 'backward', 'left', 'right', and 'stop' commands.",
      future: "Implementation on a full-scale wheelchair with obstacle detection sensors."
    }
  },
  {
    id: 2,
    title: "Fingerprint Based Vehicle Starter",
    category: "Electronics",
    shortDesc: "A security-focused vehicle ignition system using fingerprint authentication to allow authorized users to start the vehicle.",
    tech: ["Microcontroller", "Fingerprint Sensor", "Relay Module", "LCD"],
    details: {
      problem: "Vehicle theft is a rising concern, and traditional keys can be easily duplicated or stolen.",
      objective: "To enhance vehicle security using biometric authentication.",
      working: "When a user places their finger on the scanner, the microcontroller verifies the template. If authorized, it triggers a relay to turn on the ignition circuit.",
      results: "Reliable authentication system that prevents unauthorized engine starts.",
      future: "Integration with GPS tracking and SMS alerts for failed unauthorized attempts."
    }
  },
  {
    id: 3,
    title: "Fire Detection and Water Spraying Robot",
    category: "Embedded",
    shortDesc: "A robot designed to detect fire and automatically move toward the fire source and activate a water-spraying mechanism.",
    tech: ["Arduino", "Flame Sensors", "Water Pump", "Motor Driver"],
    details: {
      problem: "Fires in enclosed or hazardous environments can be dangerous for human responders to approach.",
      objective: "To create an autonomous robotic system for early fire detection and suppression.",
      working: "Flame sensors continuously monitor the surroundings. Upon detecting a fire, the robot navigates toward it and activates a mounted water pump to extinguish the flames.",
      results: "The prototype successfully identifies fire sources within a specific radius and navigates towards them.",
      future: "Adding thermal cameras and IoT integration for remote monitoring."
    }
  },
  {
    id: 4,
    title: "Density Based Traffic Light Control System",
    category: "Electronics",
    shortDesc: "A smart traffic management concept that adjusts traffic signal timing according to vehicle density.",
    tech: ["IR Sensors", "Microcontroller", "LEDs"],
    details: {
      problem: "Fixed-timer traffic lights lead to unnecessary waiting times and traffic congestion on unevenly loaded roads.",
      objective: "To dynamically allocate green signal time based on actual traffic density.",
      working: "IR sensors are placed on each lane to measure vehicle density. The microcontroller adjusts the signal timings, granting more time to heavily congested lanes.",
      results: "A working miniature intersection model demonstrating dynamic timing adjustments.",
      future: "Camera-based density calculation using Computer Vision."
    }
  },
  {
    id: 5,
    title: "Smart Street Lighting Technology",
    category: "Python",
    shortDesc: "A smart lighting concept using programming and automation principles to control street lighting efficiently.",
    tech: ["Python", "Raspberry Pi / Microcontroller", "LDR", "LEDs"],
    details: {
      problem: "Continuous street lighting throughout the night wastes a significant amount of electricity.",
      objective: "To automate street lights to operate only when needed.",
      working: "The system uses LDRs to detect ambient light (turning on at dusk) and IR sensors to detect approaching vehicles/pedestrians (increasing brightness from a dim state).",
      results: "Demonstrated significant power savings in the prototype phase.",
      future: "Solar integration and wireless mesh networking for city-wide control."
    }
  }
];

const categories = ["All", "Electronics", "Embedded", "Python"];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Showcase</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-accent text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]' 
                    : 'glass text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="glass-card overflow-hidden flex flex-col group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-slate-800/80 relative flex items-center justify-center border-b border-slate-700/50">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                  <Code size={48} className="text-slate-600 group-hover:text-accent transition-colors duration-500 z-0" />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-accent/20 text-accent border border-accent/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm flex-1 mb-4">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0,3).map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider font-semibold text-slate-300 bg-slate-800 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-accent text-sm font-medium hover:text-white transition-colors">
                    View Details <ExternalLink size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card bg-slate-900 shadow-2xl"
            >
              <div className="sticky top-0 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 p-6 flex justify-between items-center z-10">
                <h3 className="text-2xl font-bold text-white pr-8">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 md:p-8 space-y-8">
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string) => (
                    <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div> Problem Statement
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.details.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div> Objective
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.details.objective}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div> Working Principle
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.details.working}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-md font-semibold text-white mb-2">Results / Implementation</h4>
                      <p className="text-slate-400 text-sm">{selectedProject.details.results}</p>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-white mb-2">Future Scope</h4>
                      <p className="text-slate-400 text-sm">{selectedProject.details.future}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
