import React from "react";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ResumeSection from "@/components/ResumeSection";
import EducationAchievements from "@/components/EducationAchievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08090B] text-[#F5F7FA] selection:bg-purple-600/30 selection:text-white">
      <ScrollProgress />
      <AmbientBackground />
      <Navbar />
      <div className="relative z-10 flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <ResumeSection />
        <EducationAchievements />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
