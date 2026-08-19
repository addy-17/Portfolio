"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  Database,
  Layers,
  Network,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";

export default function Projects() {
  const [activeRagTab, setActiveRagTab] = useState<"traditional" | "multimodal">("multimodal");

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 text-left">
          <span className="mb-2 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#A7ADB7]">
            FEATURED SYSTEMS &amp; PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            Engineered projects &amp; AI platforms.
          </h2>
          <p className="mt-3 max-w-3xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#A7ADB7]">
            A showcase of production-grade AI platforms, legal risk engines, and multimodal multi-agent reasoning frameworks.
          </p>
        </div>

        <div className="space-y-8">
          {/* ========================================================= */}
          {/* PROJECT 01: MyLegalSahayak (Flagship Live Product) */}
          {/* ========================================================= */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-500/30 p-8 md:p-10 transition-all duration-300 bg-[#0D0F12] text-white shadow-2xl hover:border-cyan-400">
            {/* Hover Radial Spotlight */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(500px_circle_at_50%_0%,rgba(6,182,212,0.15),transparent_60%)]" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Header tags */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400">
                    01 • Legal Tech AI • Production RAG • Grounding
                  </span>
                  <span className="rounded-full bg-cyan-500 text-black px-3 py-0.5 font-mono text-[10px] uppercase font-bold tracking-wider shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                    ★ Flagship Live Product
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#A7ADB7]">
                  <span>Corpus: <strong className="text-cyan-400">400+ Acts</strong></span>
                  <span>•</span>
                  <span>PDF Parser: <strong className="text-purple-400">25MB</strong></span>
                  <span>•</span>
                  <span>Risk Precision: <strong className="text-emerald-400">99.1%</strong></span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="mb-3 text-2xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
                  <a
                    href="https://www.mylegalsahayak.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
                  >
                    <span>MyLegalSahayak</span>
                    <ExternalLink className="w-5 h-5 text-cyan-400 opacity-80" />
                  </a>
                </h3>
                <p className="mb-6 max-w-4xl text-base md:text-lg font-normal leading-relaxed text-[#A7ADB7]">
                  A multilingual AI legal assistant grounded on <strong className="text-white">400+ Indian legal documents</strong>, designed to provide cited, factual legal information while eliminating hallucination risks and automating contract risk scrutiny.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Gemini API",
                  "MongoDB Atlas",
                  "RAG",
                  "Vector Search",
                  "Cosine Similarity",
                  "AI Guardrails",
                  "PDF Parser (25MB)",
                  "Express.js",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-mono tracking-tight bg-white/[0.06] text-[#F5F7FA] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Grounded Pipeline Flow Mini Banner */}
              <div className="p-4 rounded-2xl bg-[#08090B] border border-white/[0.06] mb-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06]">
                    <span className="text-purple-400 font-semibold block">1. Guardrail</span>
                    <span className="text-[10px] text-[#6F7682]">Relevance Filter</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06]">
                    <span className="text-blue-400 font-semibold block">2. Vector Search</span>
                    <span className="text-[10px] text-[#6F7682]">Cosine Sim on 400+ Acts</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06]">
                    <span className="text-cyan-400 font-semibold block">3. Gemini 2.0</span>
                    <span className="text-[10px] text-[#6F7682]">Grounded Synthesis</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06]">
                    <span className="text-emerald-400 font-semibold block">4. Audit Trail</span>
                    <span className="text-[10px] text-[#6F7682]">Exact Clause Citations</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.mylegalsahayak.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all bg-cyan-400 text-black hover:bg-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
                >
                  <span>Visit MyLegalSahayak</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <Link
                  href="/case-studies/mylegalsahayak"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-black transition-all active:scale-95"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* PROJECT 02: Multimodal Multi-Agent RAG Framework */}
          {/* ========================================================= */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/20 p-8 md:p-10 transition-all duration-300 bg-[#0D0F12] text-white shadow-2xl hover:border-purple-500/40">
            {/* Hover Radial Spotlight */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(500px_circle_at_50%_0%,rgba(124,58,237,0.15),transparent_60%)]" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Header tags */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-semibold tracking-wider text-purple-400">
                    02 • Multi-Agent AI • Multimodal RAG • HPC
                  </span>
                  <span className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-0.5 font-mono text-[10px] uppercase font-bold tracking-wider shadow-sm">
                    ★ Flagship Research
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#A7ADB7]">
                  <span>Faithfulness: <strong className="text-emerald-400">0.94</strong></span>
                  <span>•</span>
                  <span>Context Precision: <strong className="text-cyan-400">0.89</strong></span>
                  <span>•</span>
                  <span>Relevancy: <strong className="text-purple-400">0.88</strong></span>
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="mb-3 text-2xl md:text-4xl font-bold tracking-tight text-white">
                  <Link
                    href="/case-studies/multimodal-rag"
                    className="hover:text-purple-300 transition-colors"
                  >
                    Multimodal Multi-Agent RAG Framework
                  </Link>
                </h3>
                <p className="mb-6 max-w-4xl text-base md:text-lg font-normal leading-relaxed text-[#A7ADB7]">
                  A five-agent multimodal RAG system designed to reason across text, complex tables, and technical figures for multi-hop scientific questions. Combines MonoVLM visual reranking with FAISS vector indexing and GraphRAG knowledge traversal.
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  "Python",
                  "FAISS",
                  "GraphRAG",
                  "LLMs",
                  "HPC Cluster",
                  "MonoVLM",
                  "Knowledge Graphs",
                  "PyTorch",
                  "LangGraph",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-mono tracking-tight bg-white/[0.06] text-[#F5F7FA] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Architecture Paradigm Comparison Inside Card */}
              <div className="p-5 rounded-2xl bg-[#08090B] border border-white/[0.06] mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06] mb-3">
                  <span className="text-xs font-mono text-[#6F7682] uppercase">
                    Architecture Workflow Paradigm
                  </span>
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#171A20] border border-white/[0.06]">
                    <button
                      onClick={() => setActiveRagTab("traditional")}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                        activeRagTab === "traditional"
                          ? "bg-red-500/20 text-red-300 border border-red-500/30"
                          : "text-[#6F7682] hover:text-[#A7ADB7]"
                      }`}
                    >
                      Traditional RAG
                    </button>
                    <button
                      onClick={() => setActiveRagTab("multimodal")}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                        activeRagTab === "multimodal"
                          ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold"
                          : "text-[#6F7682] hover:text-[#A7ADB7]"
                      }`}
                    >
                      5-Agent Multimodal RAG
                    </button>
                  </div>
                </div>

                {activeRagTab === "traditional" ? (
                  <div className="flex flex-wrap items-center justify-center gap-3 py-3 text-xs font-mono text-[#6F7682]">
                    <div className="px-3.5 py-1.5 rounded-xl bg-[#171A20] border border-white/[0.06] text-[#A7ADB7]">
                      Raw Text Only
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6F7682]" />
                    <div className="px-3.5 py-1.5 rounded-xl bg-[#171A20] border border-white/[0.06] text-[#A7ADB7]">
                      Naive Vector Search
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-[#6F7682]" />
                    <div className="px-3.5 py-1.5 rounded-xl bg-red-950/40 border border-red-500/20 text-red-300">
                      High Hallucination / Lost Tables
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 py-1 text-[11px] font-mono">
                    <div className="p-2.5 rounded-xl bg-purple-950/30 border border-purple-500/30 text-purple-300 text-center">
                      <span className="block font-semibold">1. Multimodal</span>
                      <span className="text-[9px] text-[#A7ADB7]">Text + Tables + Figures</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-indigo-300 text-center">
                      <span className="block font-semibold">2. Retrieval</span>
                      <span className="text-[9px] text-[#A7ADB7]">FAISS Vector Index</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-blue-300 text-center">
                      <span className="block font-semibold">3. Reranking</span>
                      <span className="text-[9px] text-[#A7ADB7]">MonoVLM Vision Scoring</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 text-center">
                      <span className="block font-semibold">4. Graph</span>
                      <span className="text-[9px] text-[#A7ADB7]">GraphRAG Traversal</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-center">
                      <span className="block font-semibold">5. 5 Agents</span>
                      <span className="text-[9px] text-[#A7ADB7]">Synthesizer Reasoning</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#171A20] border border-white/10 text-white text-center flex flex-col justify-center">
                      <span className="block font-semibold text-emerald-400">Grounded</span>
                      <span className="text-[9px] text-[#A7ADB7]">0.94 Faithfulness</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/case-studies/multimodal-rag"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white hover:opacity-95 shadow-[0_0_20px_rgba(124,58,237,0.3)] active:scale-95"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
