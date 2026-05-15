import Background3D from "@/components/Background3D";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Goals from "@/components/Goals";
import Fitness from "@/components/Fitness";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030014]">
      {/* Global 3D Particle Background */}
      <Background3D />
      
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Goals />
      <Fitness />
      <Contact />
      <Footer />
    </main>
  );
}
