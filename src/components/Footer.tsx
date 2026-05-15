"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 z-10 border-t border-white/5 bg-[#010008]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            &copy; {currentYear} Ayush Bhalla. All Rights Reserved.
          </motion.div>

          <div className="flex items-center gap-4">
            {[
              { Icon: Github, href: "https://github.com/AyushBhalla05" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/ayush-bhalla/" },
              { Icon: Mail, href: "mailto:ayushbhalla469@gmail.com" }
            ].map(({ Icon, href }, idx) => (
              <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-400 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-xs font-mono"
          >
            Engineered for the Future
          </motion.div>

        </div>
      </div>
    </footer>
  );
}
