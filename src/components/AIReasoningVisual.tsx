"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Search,
  Cpu,
  Bot,
  CheckCircle2,
  Database,
  Sparkles,
  Layers,
  Network,
  Zap,
} from "lucide-react";

interface NodeStage {
  id: string;
  name: string;
  category: string;
  icon: any;
  status: string;
  color: string;
  metric: string;
  detail: string;
}

export default function AIReasoningVisual() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const stages: NodeStage[] = [
    {
      id: "input",
      name: "Multimodal Corpus",
      category: "Documents & Tables",
      icon: FileText,
      status: "Chunked & Embedded",
      color: "from-purple-500 to-indigo-600",
      metric: "400+ Docs / 25MB PDF",
      detail: "Text, structured tables, visual figures vectorized with dense embeddings.",
    },
    {
      id: "retrieval",
      name: "Hybrid Retrieval",
      category: "Vector + Graph",
      icon: Database,
      status: "Cosine Sim + GraphRAG",
      color: "from-indigo-500 to-blue-600",
      metric: "Top-k FAISS / HPC",
      detail: "Dense vector search combined with knowledge graph entity traversal.",
    },
    {
      id: "reasoning",
      name: "5-Agent Reasoning",
      category: "Multi-Agent Cluster",
      icon: Network,
      status: "MonoVLM Reranked",
      color: "from-blue-500 to-cyan-500",
      metric: "0.94 Faithfulness",
      detail: "Specialized agents synthesize cross-modal evidence & enforce guardrails.",
    },
    {
      id: "generation",
      name: "Grounded Synthesis",
      category: "Claude / Gemini API",
      icon: Bot,
      status: "Zero-Hallucination",
      color: "from-cyan-500 to-teal-400",
      metric: "<15ms Stream Latency",
      detail: "Factually cited responses with clause-level risk detection and audit trails.",
    },
  ];

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovering, stages.length]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full max-w-lg mx-auto rounded-3xl p-6 bg-[#12151A]/80 border border-white/[0.08] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group"
    >
      {/* Dynamic Ambient Background Glow inside card */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/15 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-600/15 blur-[60px] rounded-full pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-[#6F7682] ml-2">
            ai_reasoning_pipeline.py
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-mono text-emerald-400">
          <Zap className="w-3 h-3 animate-pulse" />
          <span>LIVE PIPELINE</span>
        </div>
      </div>

      {/* Interactive Node Flow Grid */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = activeStage === idx;

          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`text-left p-3.5 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                isActive
                  ? "bg-[#171A20] border-purple-500/40 shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                  : "bg-[#0D0F12]/60 border-white/[0.04] hover:border-white/[0.12] hover:bg-[#12151A]"
              }`}
            >
              {/* Subtle top indicator bar */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                />
              )}

              <div className="flex items-center justify-between mb-2">
                <div
                  className={`p-2 rounded-xl bg-gradient-to-br ${
                    isActive
                      ? stage.color
                      : "from-white/[0.08] to-white/[0.02]"
                  } text-white shadow-sm`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[#6F7682]">
                  0{idx + 1}
                </span>
              </div>

              <div>
                <h4
                  className={`text-xs font-semibold tracking-tight transition-colors ${
                    isActive ? "text-white" : "text-[#A7ADB7]"
                  }`}
                >
                  {stage.name}
                </h4>
                <p className="text-[10px] font-mono text-[#6F7682] mt-0.5 truncate">
                  {stage.category}
                </p>
              </div>

              <div className="mt-2.5 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono">
                <span className="text-[#6F7682]">Metric</span>
                <span
                  className={isActive ? "text-cyan-400 font-medium" : "text-[#A7ADB7]"}
                >
                  {stage.metric}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Deep Dive Preview Box */}
      <div className="p-4 rounded-2xl bg-[#0D0F12]/90 border border-white/[0.06] relative overflow-hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-semibold text-white tracking-wide">
              {stages[activeStage].name}
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
            {stages[activeStage].status}
          </span>
        </div>
        <p className="text-xs text-[#A7ADB7] leading-relaxed">
          {stages[activeStage].detail}
        </p>

        {/* Live Pulse Data Stream Simulator */}
        <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#6F7682]">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>State: Active</span>
          </div>
          <div className="flex items-center gap-3">
            <span>RAG Context: 98.4%</span>
            <span className="text-cyan-400">FAISS / Gemini</span>
          </div>
        </div>
      </div>
    </div>
  );
}
