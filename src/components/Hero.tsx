"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, FileText } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building AI Projects, Data Dashboards, Intelligent Systems & Modern Web Experiences";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden z-10">
      
      <div className="container mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        
        {/* Holographic Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 px-4 py-1.5 rounded-full glass border border-cyan-500/30 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00ffff]" />
          <span className="text-xs font-medium uppercase tracking-wider text-cyan-200">System Online • Ready</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Ayush Bhalla
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-3xl font-medium text-gradient mb-8"
        >
          AI Student • Data Analyst • Future AI Engineer
        </motion.h2>

        {/* Typing Animation */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="max-w-2xl text-gray-400 text-lg md:text-xl mb-12 min-h-[3.5rem]"
        >
          {typedText}
          <span className="inline-block w-1 h-5 ml-1 bg-cyan-400 animate-pulse align-middle" />
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full font-bold text-white shadow-[0_0_40px_-10px_rgba(0,255,255,0.5)] transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(0,255,255,0.7)] border border-cyan-500/50"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              Explore My Journey
            </span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-6 py-4 bg-white/5 hover:bg-white/10 rounded-full font-semibold text-gray-200 border border-white/20 transition-all hover:scale-105 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] flex items-center gap-2"
          >
            <FileText size={18} className="text-cyan-400" />
            <span>View Resume</span>
          </a>
          
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/AyushBhalla05" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ayush-bhalla/" },
              { icon: Mail, href: "mailto:ayushbhalla469@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all hover:-translate-y-1"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-cyan-400 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
