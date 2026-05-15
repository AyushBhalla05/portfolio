"use client";

import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, MapPin, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.currentTarget);

    // Web3Forms Access Key
    formData.append("access_key", "759538c6-dbda-4974-8e73-5093cf277c38");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };
  return (
    <section id="contact" className="relative py-32 z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Let's Build Something</span> <span className="text-purple-400">Intelligent Together</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="w-full lg:w-5/12 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a project in mind, want to discuss AI trends, or just want to say hi, feel free to drop a message.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "ayushbhalla469@gmail.com", href: "mailto:ayushbhalla469@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ayush-bhalla", href: "https://www.linkedin.com/in/ayush-bhalla/" },
                  { icon: Github, label: "GitHub", value: "github.com/AyushBhalla05", href: "https://github.com/AyushBhalla05" },
                  { icon: MapPin, label: "Location", value: "Bareilly, India (Future: Delhi)", href: "#" }
                ].map((item, idx) => (
                  <a key={idx} href={item.href} target={item.href.startsWith('http') ? "_blank" : "_self"} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all">
                      <item.icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{item.label}</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12">
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl border border-white/10 relative"
              onSubmit={onSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all placeholder:text-gray-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2 mb-8">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your intelligent project idea..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all placeholder:text-gray-600 resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold tracking-wide flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(138,43,226,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-5 h-5" />
              </button>

              {result && (
                <div className={`mt-4 p-3 rounded-lg text-center text-sm font-medium ${result.includes("Successfully") ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"}`}>
                  {result}
                </div>
              )}
            </motion.form>
          </div>

        </div>
      </div>
    </section>
  );
}
