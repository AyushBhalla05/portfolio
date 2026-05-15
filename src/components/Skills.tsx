"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python", level: 84 },
  { name: "Artificial Intelligence", level: 80 },
  { name: "Machine Learning", level: 78 },
  { name: "Data Analysis", level: 82 },
  { name: "Power BI", level: 80 },
  { name: "SQL", level: 82 },
  { name: "HTML/CSS", level: 85 },
  { name: "JavaScript", level: 82 },
  { name: "React / Next.js", level: 78 },
  { name: "Web Development", level: 84 },
  { name: "Cybersecurity Basics", level: 75 },
  { name: "Operating Systems", level: 80 },
  { name: "Problem Solving", level: 85 },
  { name: "Logical Reasoning", level: 83 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 z-10 bg-[#050510]/50 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Technical</span> <span className="text-purple-500">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Skill Bars */}
          <div className="space-y-6">
            {skills.slice(0, 7).map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
                  <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-[#0a0a1a] rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[2px] -translate-y-1/2" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {skills.slice(7).map((skill, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300 font-medium tracking-wide">{skill.name}</span>
                  <span className="text-purple-400 font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-[#0a0a1a] rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-600 to-cyan-500 relative"
                  >
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[2px] -translate-y-1/2" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Floating Tags */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {["Machine Learning", "Neural Networks", "Data Visualization", "Full-Stack Dev", "REST APIs", "Cloud Basics", "UI/UX"].map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="px-6 py-2 rounded-full glass border border-white/10 text-sm text-cyan-200 cursor-default hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
