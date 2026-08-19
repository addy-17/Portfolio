"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Scale,
  FileCheck2,
  Sparkles,
  Bot,
  Zap,
  Database,
  FileText,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";
import AIReasoningVisual from "./AIReasoningVisual";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-32 pb-16 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-5xl text-center w-full">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12151A]/90 border border-white/[0.08] text-xs font-medium text-[#A7ADB7] mb-8 backdrop-blur-md shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-white font-mono text-[11px] uppercase tracking-wider">
            Available for AI / LLM Engineering Roles
          </span>
          <span className="text-[#6F7682]">•</span>
          <span className="text-cyan-400 font-mono text-[11px]">
            UPES B.Tech CSE
          </span>
        </motion.div>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6"
        >
          Building intelligent systems{" "}
          <span className="text-gradient block mt-1">
            that actually solve problems.
          </span>
        </motion.h1>

        {/* Supporting Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#A7ADB7]"
        >
          Hi, I&apos;m <strong className="font-semibold text-white">Aditya Wadhwa</strong>. Specializing in LLMs, RAG pipelines, multi-agent systems, AI automation, and intelligent products. Creator of{" "}
          <a
            href="https://www.mylegalsahayak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/40 inline-flex items-center gap-1 font-medium"
          >
            MyLegalSahayak
            <ExternalLink className="w-3.5 h-3.5 inline" />
          </a>
          .
        </motion.p>

        {/* Centered Button Row (Reference Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-14 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group/btn inline-flex items-center justify-center transition-all duration-200 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white hover:opacity-95 font-semibold shadow-[0_0_25px_rgba(124,58,237,0.35)] px-7 py-3 text-sm md:text-base gap-2 rounded-full active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </a>

          <a
            href="https://github.com/addy-17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-all duration-200 bg-[#12151A] text-white border border-white/20 hover:border-white hover:bg-neutral-900 font-medium px-6 py-3 text-sm md:text-base gap-2 rounded-full active:scale-95"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/adityawadhwa21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-all duration-200 bg-[#12151A] text-white border border-white/20 hover:border-[#0A66C2] hover:bg-[#0A66C2]/20 font-medium px-6 py-3 text-sm md:text-base gap-2 rounded-full active:scale-95"
          >
            <LinkedinIcon className="w-4 h-4 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href="#resume"
            className="inline-flex items-center justify-center transition-all duration-200 bg-[#12151A] text-white border border-white/20 hover:border-white/50 font-medium px-6 py-3 text-sm md:text-base gap-2 rounded-full active:scale-95"
          >
            <FileText className="w-4 h-4 text-purple-400" />
            <span>Resume</span>
          </a>

          <a
            href="https://www.mylegalsahayak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center transition-all duration-200 bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-900/50 font-medium px-6 py-3 text-sm md:text-base gap-2 rounded-full active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>MyLegalSahayak Live</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </motion.div>

        {/* Flagship Product Showcase Card: MyLegalSahayak */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-5xl rounded-3xl border border-cyan-500/25 bg-[#12151A]/85 p-6 sm:p-8 text-left shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  FLAGSHIP LIVE PLATFORM
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE PRODUCTION
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                MyLegalSahayak — Grounded Legal AI Platform
              </h3>
              <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
                Architected an AI legal assistant grounded on <strong className="text-white">400+ Indian statutory acts</strong> with deterministic relevance guardrails, 25MB PDF contract risk scanning, and zero-hallucination Gemini API synthesis.
              </p>

              {/* Capability Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <div className="flex items-center gap-1.5 rounded-full bg-cyan-950/40 px-3.5 py-1.5 text-xs font-mono text-cyan-300 border border-cyan-500/30 cursor-default">
                  <Scale className="h-3.5 w-3.5 text-cyan-400" />
                  <span>400+ Indian Acts</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-purple-950/40 px-3.5 py-1.5 text-xs font-mono text-purple-300 border border-purple-500/30 cursor-default">
                  <FileCheck2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>25MB PDF Risk Parser</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-950/40 px-3.5 py-1.5 text-xs font-mono text-emerald-300 border border-emerald-500/30 cursor-default">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Relevance Guardrails</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-blue-950/40 px-3.5 py-1.5 text-xs font-mono text-blue-300 border border-blue-500/30 cursor-default">
                  <Bot className="h-3.5 w-3.5 text-blue-400" />
                  <span>Gemini Grounding</span>
                </div>
              </div>

              {/* CTAs inside Hero showcase */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <a
                  href="https://www.mylegalsahayak.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-400 text-black text-xs font-bold hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
                >
                  <span>Visit MyLegalSahayak</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/case-studies/mylegalsahayak"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#171A20] hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-colors active:scale-95"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Embedded Interactive Visualizer */}
            <div className="lg:col-span-6">
              <AIReasoningVisual />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
