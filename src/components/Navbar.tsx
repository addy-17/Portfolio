"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = ["home", "about", "projects", "skills", "experience", "resume", "education", "contact"];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Resume", href: "/#resume", id: "resume" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090B]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold tracking-tight text-white transition-transform hover:scale-105"
        >
          <div className="relative w-8 h-8 rounded-full p-[1px] bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 overflow-hidden shadow-md shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#171A20]">
              <Image
                src="/aditya-profile.png"
                alt="Aditya Wadhwa"
                fill
                className="object-cover object-top scale-110"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white tracking-tight text-base leading-tight">
              Aditya Wadhwa
            </span>
            <span className="text-[10px] text-[#6F7682] font-mono hidden sm:inline-block">
              AI / LLM Engineer
            </span>
          </div>
        </Link>

        {/* Center Pill Nav */}
        <div className="hidden items-center gap-1 md:flex rounded-full bg-[#12151A]/80 p-1.5 backdrop-blur-md border border-white/[0.08] shadow-2xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold shadow-sm"
                    : "text-[#A7ADB7] hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/addy-17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white hover:text-black hover:border-white"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <a
            href="https://linkedin.com/in/adityawadhwa21"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-[#0A66C2] hover:border-[#0A66C2]"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>

          {/* Direct Resume Button */}
          <a
            href="/Aditya_Wadhwa_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white transition-all hover:bg-white hover:text-black shadow-xs"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
          </a>

          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 px-4 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all hover:opacity-95 active:scale-95"
          >
            Get In Touch
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 mx-4 p-5 rounded-2xl bg-[#12151A]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-2"
          >
            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/[0.03] text-xs text-[#A7ADB7] mb-2 border border-white/[0.04]">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/40 shrink-0">
                <Image
                  src="/aditya-profile.png"
                  alt="Aditya Wadhwa"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium">Aditya Wadhwa</span>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for AI / LLM roles
                </span>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#A7ADB7] hover:text-white hover:bg-white/[0.05] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}

            <div className="pt-2 border-t border-white/[0.08] mt-2 flex flex-col gap-2">
              <a
                href="/Aditya_Wadhwa_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-white bg-white/10 border border-white/20 flex items-center gap-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
