"use client";

import { motion } from "framer-motion";
import { TrendingUp, Home, Car, Cpu } from "lucide-react";

export default function Goals() {
  return (
    <section id="goals" className="relative py-32 z-10 overflow-hidden">
      
      {/* Background Holographic Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Future</span> <span className="text-cyan-400">Vision</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl glass-card border border-cyan-500/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="w-32 h-32 text-cyan-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-cyan-400" /> Professional Heights
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My ultimate goal is to become a top-tier <span className="text-cyan-300 font-semibold">AI Engineer</span> and <span className="text-cyan-300 font-semibold">Data Scientist</span>. I am driven to build advanced, highly intelligent systems that solve real-world problems and push the boundaries of technology.
            </p>
            <p className="text-gray-400">
              Achieving significant financial success through high-level technical expertise, relentless innovation, and strategic execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-3xl glass-card border border-purple-500/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Home className="w-32 h-32 text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Car className="text-purple-400" /> Lifestyle & Ambition
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Working towards a premium future lifestyle in <span className="text-purple-300 font-semibold">Delhi</span>. A vision backed by hard work, discipline, and absolute clarity.
            </p>
            <p className="text-gray-400">
              The dream includes a luxury house, premium cars, and the financial freedom to continuously invest in personal growth and cutting-edge tech ventures.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
