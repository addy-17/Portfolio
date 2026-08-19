"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Database,
  Bot,
  Sparkles,
  Zap,
  Scale,
  FileCheck2,
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
      id: "corpus",
      name: "400+ Legal Acts & PDF",
      category: "Corpus & 25MB Parser",
      icon: Scale,
      status: "Section Chunked",
      color: "from-purple-500 to-indigo-600",
      metric: "400+ Central Acts",
      detail: "Codified IPC, CrPC, BNS, Contract Act and complex 25MB PDF agreements.",
    },
    {
      id: "guardrails",
      name: "Relevance Guardrail",
      category: "Zero-Hallucination Filter",
      icon: ShieldCheck,
      status: "Deterministic Gate",
      color: "from-indigo-500 to-blue-600",
      metric: "99.1% Risk Precision",
      detail: "Strict domain classifier eliminates out-of-scope prompts before vector lookup.",
    },
    {
      id: "retrieval",
      name: "Cosine Vector Search",
      category: "MongoDB Atlas Vector",
      icon: Database,
      status: "Top-k Relevant Clauses",
      color: "from-blue-500 to-cyan-500",
      metric: "<18ms Vector Lookup",
      detail: "High-dimensional embedding search ranks exact statutory sections and provisions.",
    },
    {
      id: "generation",
      name: "Grounded Synthesis",
      category: "Gemini 2.0 + Audit Trail",
      icon: Bot,
      status: "Clause-Cited Output",
      color: "from-cyan-500 to-teal-400",
      metric: "100% Provenance Citations",
      detail: "Generates legally referenced answers with clause-level risk detection.",
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
      className="relative w-full max-w-lg mx-auto rounded-3xl p-6 bg-[#12151A]/90 border border-cyan-500/20 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group"
    >
      {/* Dynamic Ambient Background Glow inside card */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-600/15 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/15 blur-[60px] rounded-full pointer-events-none" />

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
                  ? "bg-[#171A20] border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                  : "bg-[#0D0F12]/60 border-white/[0.04] hover:border-white/[0.12] hover:bg-[#12151A]"
              }`}
            >
              {/* Subtle top indicator bar */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
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
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-semibold text-white tracking-wide">
              {stages[activeStage].name}
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
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
            <span>State: Active (mylegalsahayak.com)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-cyan-400 font-medium">Gemini Grounded</span>
          </div>
        </div>
      </div>
    </div>
  );
}
