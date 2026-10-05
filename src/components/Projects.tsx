"use client";

import { motion } from "framer-motion";
import { ExternalLink, Database, Brain, Cpu } from "lucide-react";

const projects = [
  {
    title: "GesturePilot - Vision PC Control",
    description: "A modular, real-time hand gesture recognition system to control PC operations seamlessly using Computer Vision.",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    icon: Cpu,
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50",
    link: "https://github.com/AyushBhalla05/GesturePilot"
  },
  {
    title: "Local Food Wastage Management",
    description: "A Streamlit and SQL-based application addressing food wastage by connecting surplus food providers with NGOs and individuals in need.",
    tech: ["Python", "Streamlit", "SQL"],
    icon: Database,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    link: "https://github.com/AyushBhalla05/LOCAL-FOOD-WASTAGE-MANAGEMENT-SYSTEM"
  },
  {
    title: "Email Spam Detector",
    description: "Machine Learning project that successfully detects spam emails by implementing a Naive Bayes classifier on structured textual data.",
    tech: ["Python", "Machine Learning", "Naive Bayes"],
    icon: Brain,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    link: "https://github.com/AyushBhalla05/email-spam-detector"
  },
  {
    title: "Secure Password Generator",
    description: "A Python utility that programmatically generates highly secure, randomized passwords to enhance digital security.",
    tech: ["Python", "Security", "Scripting"],
    icon: Cpu,
    color: "from-yellow-500/20 to-orange-500/20",
    border: "group-hover:border-yellow-500/50",
    link: "https://github.com/AyushBhalla05/password-generator"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured</span> <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-2xl glass-card overflow-hidden border border-white/5 transition-all duration-500 flex flex-col h-full ${project.border}`}
            >
              {/* Thumbnail Area */}
              <div className="h-48 relative overflow-hidden flex items-center justify-center bg-[#050510]">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                <project.icon className="w-16 h-16 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10" />
                
                {/* Tech Stack Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <div className="flex flex-wrap justify-center gap-2 px-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 bg-white/10 rounded-md text-cyan-200 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group/btn mt-auto"
                >
                  <span className="relative">
                    View Project
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover/btn:w-full"></span>
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform group-hover/btn:text-cyan-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
