"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ExternalLink, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#08090B] relative z-10 py-12 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Profile Avatar */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-purple-500/30 shrink-0">
            <Image
              src="/aditya-profile.png"
              alt="Aditya Wadhwa"
              fill
              className="object-cover object-top scale-110"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm tracking-tight">
                Aditya Wadhwa
              </span>
              <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                AI / LLM Engineer
              </span>
            </div>
            <p className="text-[11px] text-[#6F7682] font-mono">
              Architecting intelligent RAG &amp; multi-agent systems.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[#A7ADB7]">
          <Link href="/#home" className="hover:text-white transition-colors">
            Overview
          </Link>
          <Link href="/#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/#resume" className="hover:text-white transition-colors">
            Resume
          </Link>
          <Link
            href="/case-studies/mylegalsahayak"
            className="hover:text-cyan-300 transition-colors"
          >
            MyLegalSahayak
          </Link>
          <Link
            href="/case-studies/multimodal-rag"
            className="hover:text-purple-300 transition-colors"
          >
            Multimodal RAG
          </Link>
          <a
            href="https://linkedin.com/in/adityawadhwa21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/addy-17"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#6F7682]">
            © 2026 Aditya Wadhwa
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-full bg-[#12151A] border border-white/10 hover:border-white/30 text-[#A7ADB7] hover:text-white transition-colors active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
