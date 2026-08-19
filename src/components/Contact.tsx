"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "adityawadhwa391@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-3xl bg-[#0D0F12] border border-white/15 p-8 sm:p-14 backdrop-blur-2xl overflow-hidden shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-600/15 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-600/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Have an interesting AI problem?{" "}
              <span className="text-gradient block mt-1">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#A7ADB7] max-w-xl mx-auto leading-relaxed">
              I&apos;m interested in AI systems, LLM applications, automation, and technically challenging products. Let&apos;s discuss research, engineering roles, or product builds.
            </p>

            {/* Email Copy Card */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#12151A] border border-white/15 text-sm font-mono text-[#F5F7FA] w-full sm:w-auto justify-between sm:justify-start shadow-inner">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="select-all text-xs sm:text-sm">{email}</span>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-lg hover:bg-white/[0.08] text-[#A7ADB7] hover:text-white transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold text-sm hover:opacity-95 transition-all shadow-[0_0_25px_rgba(124,58,237,0.35)] w-full sm:w-auto active:scale-95"
              >
                <span>Email Me Directly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Social Connectors */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://linkedin.com/in/adityawadhwa21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#12151A] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-[#A7ADB7] hover:text-white transition-all active:scale-95"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>

              <a
                href="https://github.com/addy-17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#12151A] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-[#A7ADB7] hover:text-white transition-all active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>

              <a
                href="https://www.mylegalsahayak.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 text-xs font-medium text-cyan-300 transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>MyLegalSahayak Live</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
