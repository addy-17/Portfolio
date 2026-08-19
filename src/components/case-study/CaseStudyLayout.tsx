"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Share2,
  Check,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";

interface SectionNavItem {
  id: string;
  label: string;
}

interface CaseStudyLayoutProps {
  category: string;
  title: string;
  subtitle: string;
  liveUrl?: string;
  githubUrl?: string;
  sections: SectionNavItem[];
  metrics?: { label: string; value: string; desc: string }[];
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  category,
  title,
  subtitle,
  liveUrl,
  githubUrl,
  sections,
  metrics,
  children,
}: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || "");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090B] text-[#F5F7FA]">
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2 text-xs font-mono text-[#A7ADB7] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Editorial Header */}
          <div className="border-b border-white/[0.08] pb-12 mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs font-semibold uppercase tracking-wider">
                {category}
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl bg-[#12151A] border border-white/[0.08] hover:border-white/20 text-[#A7ADB7] hover:text-white transition-colors text-xs flex items-center gap-1.5"
                  aria-label="Share case study"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied link</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </>
                  )}
                </button>

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white text-xs font-semibold hover:opacity-95 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all"
                  >
                    <span>Visit Live System</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="p-2 rounded-xl bg-[#12151A] border border-white/[0.08] hover:border-white/20 text-[#A7ADB7] hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              {title}
            </h1>
            <p className="text-base sm:text-xl text-[#A7ADB7] mt-4 max-w-3xl leading-relaxed">
              {subtitle}
            </p>

            {/* Metrics Callout Strip */}
            {metrics && metrics.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/[0.06]">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-4 rounded-2xl bg-[#12151A]/80 border border-white/[0.06]"
                  >
                    <span className="text-3xl font-extrabold font-mono text-cyan-400 block">
                      {m.value}
                    </span>
                    <span className="text-xs font-semibold text-white mt-1 block">
                      {m.label}
                    </span>
                    <span className="text-[11px] text-[#6F7682] mt-0.5 block">
                      {m.desc}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Two-Column Body: Sticky Sub-Nav + Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Sticky Navigation Sidebar (Desktop) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-3">
              <div className="p-4 rounded-2xl bg-[#12151A]/60 border border-white/[0.06] backdrop-blur-xl">
                <span className="text-xs font-mono text-[#6F7682] uppercase tracking-wider block mb-3 px-2">
                  Table of Contents
                </span>
                <nav className="flex flex-col space-y-1">
                  {sections.map((sec) => {
                    const isCurrent = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={`px-3 py-2 rounded-xl text-xs font-mono transition-all flex items-center justify-between ${
                          isCurrent
                            ? "bg-purple-500/15 text-purple-300 border border-purple-500/30 font-semibold"
                            : "text-[#A7ADB7] hover:text-white hover:bg-white/[0.04]"
                        }`}
                      >
                        <span className="truncate">{sec.label}</span>
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        )}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Author Info Card with Avatar */}
              <div className="p-4 rounded-2xl bg-[#12151A]/70 border border-white/[0.06] flex items-center gap-3 backdrop-blur-xl">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-purple-500/30 shrink-0">
                  <Image
                    src="/aditya-profile.png"
                    alt="Aditya Wadhwa"
                    fill
                    className="object-cover object-top scale-110"
                  />
                </div>
                <div className="space-y-0.5 font-mono text-xs">
                  <div className="text-white font-semibold">Aditya Wadhwa</div>
                  <div className="text-[10px] text-cyan-400">AI / LLM Engineer</div>
                  <div className="text-[9px] text-[#6F7682]">Verified Architecture</div>
                </div>
              </div>
            </aside>

            {/* Main Content Sections */}
            <div className="lg:col-span-9 space-y-16">
              {children}

              {/* Bottom Final CTA */}
              <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#171A20] via-[#12151A] to-[#171A20] border border-white/[0.1] text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>COLLABORATE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Interested in building something similar?
                </h3>
                <p className="text-sm text-[#A7ADB7] max-w-md mx-auto">
                  Let&apos;s discuss custom RAG architectures, multi-agent frameworks, or production AI engineering.
                </p>
                <div className="pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white text-xs font-semibold shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:opacity-95 transition-all"
                  >
                    <span>Let&apos;s talk</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
