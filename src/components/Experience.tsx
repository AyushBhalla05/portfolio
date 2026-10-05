"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BookOpen, Award } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      type: "experience",
      title: "Artificial Intelligence Intern",
      institution: "OutriX (Virtual)",
      date: "Jul 2025 – Sep 2025",
      description: "Learnt core concepts of Artificial Intelligence, Machine Learning, and data-driven problem solving. Implemented AI workflows and practical tasks in Python.",
      icon: Briefcase,
      color: "text-cyan-400"
    },
    {
      type: "education",
      title: "BCA in Artificial Intelligence",
      institution: "Invertis University, Bareilly",
      date: "2024 – 2027 (5th Sem)",
      description: "Studying Artificial Intelligence, Machine Learning, Data Analytics, Python, DBMS, DSA, Operating Systems, Linux/Unix, and Power BI.",
      icon: GraduationCap,
      color: "text-purple-400"
    },
    {
      type: "experience",
      title: "Explainable AI Researcher",
      institution: "Smart India Hackathon 2026",
      date: "2026",
      description: "Designed a MATLAB-based explainable retinal image analysis pipeline for rural diabetic retinopathy screening with Grad-CAM explainability.",
      icon: Award,
      color: "text-emerald-400"
    },
    {
      type: "education",
      title: "Intermediate (12th) & High School (10th)",
      institution: "JP Inter College",
      date: "2021 – 2024",
      description: "Class 12: 67.6% (2024) | Class 10: 73.5% (2021) with a strong foundation in Mathematics and Science.",
      icon: BookOpen,
      color: "text-pink-400"
    }
  ];

  return (
    <section id="experience" className="relative py-32 z-10 bg-[#050510]/50 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Journey &</span> <span className="text-purple-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center md:justify-between w-full">
                
                {/* Timeline Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full glass border border-white/20 flex items-center justify-center -translate-x-1/2 z-10 bg-[#0a0a1a] shadow-[0_0_15px_rgba(138,43,226,0.3)]"
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`w-full md:w-5/12 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:ml-auto md:pl-16'}`}
                >
                  <div className="p-6 rounded-2xl glass-card border border-white/5 hover:border-white/10 transition-colors group">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-gray-400 mb-4 inline-block group-hover:text-white transition-colors">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <h4 className={`text-sm font-medium mb-4 ${item.color}`}>{item.institution}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
