"use client";

import { motion } from "framer-motion";
import { Dumbbell, Activity, ShieldCheck } from "lucide-react";

export default function Fitness() {
  return (
    <section id="discipline" className="relative py-32 z-10 bg-[#02000a]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            {/* Abstract Gym Visual / 3D placeholder */}
            <div className="aspect-square max-w-md mx-auto relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-orange-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-700" />
              <div className="absolute inset-4 border border-red-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-8 border border-orange-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Dumbbell className="w-32 h-32 text-red-500/80 drop-shadow-[0_0_20px_rgba(255,0,0,0.5)] group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Iron &</span> <span className="text-red-500">Discipline</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-8" />
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Physical transformation is a mirror to mental fortitude. My fitness journey is driven by absolute consistency, intense discipline, and a focus on self-improvement.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Activity, title: "Transformation Goal", desc: "Building a powerful, bulky muscular physique through structured hyper-focused training." },
                  { icon: ShieldCheck, title: "The Mindset", desc: "Discipline equals freedom. Treating physical health with the same rigor as engineering complex AI systems." }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 p-4 rounded-2xl glass border border-red-500/10 hover:border-red-500/30 transition-colors"
                  >
                    <div className="p-3 rounded-xl bg-red-500/10 h-max">
                      <item.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
