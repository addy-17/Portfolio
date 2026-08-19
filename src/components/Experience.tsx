"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Clock,
  MapPin,
  TrendingDown,
  Cpu,
  Layers,
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-purple-400 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRODUCTION EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Engineering real-world{" "}
            <span className="text-gradient">AI automation.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#A7ADB7]">
            Translating complex enterprise workflows into autonomous, MCP-enabled AI systems that deliver massive efficiency gains.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="relative rounded-3xl bg-[#12151A]/80 border border-white/[0.08] p-8 sm:p-10 backdrop-blur-xl overflow-hidden glow-card">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-3xl pointer-events-none" />

          {/* Top Row: Company, Role & Duration */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs">
                  Orchid ENT Pvt Ltd — Toscee Collective
                </span>
                <span className="flex items-center gap-1 text-xs text-[#6F7682] font-mono">
                  <MapPin className="w-3 h-3" /> Noida, India
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                IT & Automation Intern
              </h3>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-[#A7ADB7] px-4 py-2 rounded-xl bg-[#171A20] border border-white/[0.06] w-fit">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>June 2026 – August 2026</span>
            </div>
          </div>

          {/* Prominent Metric Transformation Banner */}
          <div className="my-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#171A20] via-[#12151A] to-[#171A20] border border-white/[0.1] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Purchase-Order Workflow Transformation
                </span>
                <p className="text-sm text-[#A7ADB7] max-w-md">
                  End-to-end automation replacing manual data extraction and verification bottlenecks.
                </p>
              </div>

              {/* Big Animated Metric */}
              <div className="flex items-center gap-4 sm:gap-6 bg-[#08090B]/80 px-6 py-4 rounded-2xl border border-white/10 shadow-xl">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-mono text-[#6F7682] line-through">
                    BEFORE
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#6F7682] font-mono">
                    4+ HOURS
                  </span>
                </div>

                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600/20 text-purple-400">
                  <ArrowRight className="w-4 h-4" />
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs font-mono text-emerald-400 font-semibold">
                    WITH AI PIPELINE
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono animate-pulse">
                    &lt;15 MINS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#0D0F12]/80 border border-white/[0.04] space-y-3">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <h4 className="text-base font-semibold text-white">
                Autonomous LLM Pipeline
              </h4>
              <p className="text-xs text-[#A7ADB7] leading-relaxed">
                Architected document parsing, multi-tier validation, and structured extraction engine handling complex nested order sheets with zero manual overhead.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D0F12]/80 border border-white/[0.04] space-y-3">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-base font-semibold text-white">
                MCP Protocol Integration
              </h4>
              <p className="text-xs text-[#A7ADB7] leading-relaxed">
                Integrated Model Context Protocol (MCP) with Claude, standardizing external tool interfaces and enabling seamless conversational invocation of business logic.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D0F12]/80 border border-white/[0.04] space-y-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-base font-semibold text-white">
                Reusable AI Tooling
              </h4>
              <p className="text-xs text-[#A7ADB7] leading-relaxed">
                Exposed internal company reports as dynamic tool endpoints, empowering cross-functional teams to query live inventory and financial metrics via natural language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
