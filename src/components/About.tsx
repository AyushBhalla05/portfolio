"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Target, Code, Database } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Academic Focus",
      desc: "BCA in Artificial Intelligence student at Invertis University. Deeply interested in deep learning concepts, advanced mathematics, and logical thinking.",
      icon: BrainCircuit,
      color: "from-cyan-500/20 to-blue-600/20",
      border: "group-hover:border-cyan-400/50"
    },
    {
      title: "Core Passion",
      desc: "Dedicated to AI, Machine Learning, Data Science, and futuristic tech. Building impactful real-world technology and intelligent systems.",
      icon: Database,
      color: "from-purple-500/20 to-pink-600/20",
      border: "group-hover:border-purple-400/50"
    },
    {
      title: "Technical Breadth",
      desc: "Experienced in Python, web development, data analysis, and cybersecurity basics. Creating full-stack experiences with intelligent capabilities.",
      icon: Code,
      color: "from-emerald-500/20 to-teal-600/20",
      border: "group-hover:border-emerald-400/50"
    },
    {
      title: "Ambitious Vision",
      desc: "Focused on becoming financially successful and building a high-level career. Striving for a future lifestyle driven by innovation and excellence.",
      icon: Target,
      color: "from-orange-500/20 to-red-600/20",
      border: "group-hover:border-orange-400/50"
    }
  ];

  return (
    <section id="about" className="relative py-32 z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About</span> <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative p-8 rounded-2xl glass-card overflow-hidden border border-white/5 transition-all duration-500 ${card.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col items-start">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <card.icon className="w-8 h-8 text-gray-200 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
