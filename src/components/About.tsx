"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  Layers,
  ShieldCheck,
  Workflow,
  Database,
  GraduationCap,
} from "lucide-react";

export default function About() {
  const techStack = [
    "Python",
    "JavaScript",
    "Node.js",
    "React",
    "MongoDB",
    "FAISS",
    "PyTorch",
    "TensorFlow",
    "Gemini API",
    "Claude 3.7",
    "MCP (Model Context Protocol)",
    "RAG",
    "GraphRAG",
    "Vector Search",
    "AI Guardrails",
    "MonoVLM",
    "Cosine Similarity",
  ];

  const specializations = [
    "LLM Architecture",
    "Multimodal RAG",
    "Multi-Agent Systems",
    "GraphRAG",
    "MonoVLM Reranking",
    "FAISS Vector Search",
    "AI Guardrails",
    "Claude MCP",
    "Zero-Hallucination AI",
    "Document AI (25MB)",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <span className="mb-2 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#A7ADB7]">
            BACKGROUND &amp; SYSTEM ENGINEERING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            AI-minded engineering with a focus on real utility.
          </h2>
          <p className="mt-3 max-w-3xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#A7ADB7]">
            Pursuing B.Tech in Computer Science &amp; Engineering at UPES, Dehradun.
          </p>
        </div>

        {/* 3-Column Grid Matching Reference */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 mt-10 items-start">
          {/* Column 1: Portrait Profile Card with Floating Glass Name Tag */}
          <div className="lg:col-span-4 flex items-start justify-center">
            <div className="relative group w-full max-w-[340px]">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-600/40 via-blue-600/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#12151A] shadow-2xl group-hover:border-purple-500/50 transition-colors duration-500">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src="/aditya-profile.png"
                    alt="Aditya Wadhwa"
                    fill
                    className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/90 via-[#08090B]/20 to-transparent pointer-events-none" />
                </div>

                {/* Floating Glassmorphic Name Tag */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#0D0F12]/85 backdrop-blur-xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-center group-hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <p className="font-mono text-xs font-bold uppercase tracking-widest text-white">
                      ADITYA WADHWA
                    </p>
                  </div>
                  <p className="text-xs text-cyan-400 font-mono tracking-tight">
                    AI &amp; LLM Systems Engineer
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Column 2: 3 Editorial Paragraphs */}
          <div className="lg:col-span-4 space-y-5 text-base text-[#A7ADB7] leading-relaxed font-normal">
            <p>
              I enjoy engineering complex AI software systems from the ground up, building high-performance architectures that transition academic AI research into reliable, low-latency production applications.
            </p>
            <p>
              My background covers multi-agent orchestration, multimodal RAG pipelines, vector search indexing, and deterministic guardrail enforcement. From creating <strong className="text-white">MyLegalSahayak</strong> (grounded on 400+ Indian legal documents) to developing 5-agent cross-modal frameworks with MonoVLM reranking, I emphasize mathematical rigor and zero-hallucination factuality.
            </p>
            <p>
              I continuously expand my capabilities across frontier LLM APIs (Gemini 2.0, Claude 3.7), Model Context Protocol (MCP), distributed HPC acceleration, and modern backend engineering.
            </p>
          </div>

          {/* Column 3: Active Specializations Domain Matrix Card */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl bg-[#12151A] p-6 sm:p-8 border border-white/15 shadow-xl">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#6F7682]">
                Active Specializations
              </span>
              <h4 className="mt-1 text-xl font-medium text-white">Domain Matrix</h4>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-mono tracking-tight bg-white/[0.06] text-[#F5F7FA] border border-white/10 hover:border-purple-500/40 hover:bg-purple-950/30 transition-colors"
                >
                  {spec}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#A7ADB7]">
              <span>DEGREE</span>
              <span className="font-semibold text-cyan-400">
                B.TECH CS &amp; ENG (8.66 CGPA)
              </span>
            </div>
          </div>
        </div>

        {/* Continuous Tech Stack Marquee */}
        <div className="mt-14 relative rounded-2xl bg-[#0D0F12] border border-white/[0.06] py-5 px-4 overflow-hidden">
          <div className="flex items-center justify-between mb-3 px-4">
            <span className="text-xs font-mono text-[#6F7682] uppercase tracking-wider">
              Technical Stack &amp; AI Ecosystem
            </span>
            <span className="text-[11px] font-mono text-purple-400">
              Continuously Expanding
            </span>
          </div>

          <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-4">
              {[...techStack, ...techStack].map((tech, idx) => (
                <div
                  key={`${tech}-${idx}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#12151A] border border-white/[0.08] text-xs font-mono text-[#F5F7FA] whitespace-nowrap hover:border-purple-500/40 hover:bg-[#171A20] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
