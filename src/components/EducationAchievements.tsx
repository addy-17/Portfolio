"use client";

import React from "react";
import { GraduationCap, Award, HeartHandshake, Scale, BookOpen } from "lucide-react";

export default function EducationAchievements() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-left">
          <span className="mb-2 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#A7ADB7]">
            ACADEMIC STANDING &amp; DOMAIN EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            Education &amp; practical experience.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Education Block (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0D0F12] border border-white/15 p-8 backdrop-blur-xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>FORMAL EDUCATION</span>
              </div>

              <h3 className="text-2xl font-bold text-white leading-snug">
                University of Petroleum and Energy Studies
              </h3>
              <p className="text-base text-[#A7ADB7] mt-1.5">
                B.Tech in Computer Science &amp; Engineering
              </p>
              <span className="inline-block mt-2 font-mono text-xs text-[#6F7682]">
                2023 – Present • Dehradun, India
              </span>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-[#6F7682]">
                Cumulative Grade Point Average
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#A7ADB7]">CGPA</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-bold">
                  8.66 / 10.0
                </span>
              </div>
            </div>
          </div>

          {/* Additional Experience & Domain Impact (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0D0F12] border border-white/15 p-8 backdrop-blur-xl flex flex-col justify-between shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
              <Award className="w-4 h-4" />
              <span>DOMAIN IMPACT &amp; INTERNSHIPS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nyayniti Associates */}
              <div className="p-5 rounded-2xl bg-[#12151A] border border-white/[0.06] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Scale className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-[#6F7682]">2025</span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  Nyayniti Associates
                </h4>
                <p className="text-xs text-purple-300 font-mono">
                  Legal Tech Intern
                </p>
                <p className="text-xs text-[#A7ADB7] leading-relaxed">
                  Synthesized legal workflows and domain heuristics, directly guiding the guardrail architecture and risk heuristics in MyLegalSahayak.
                </p>
              </div>

              {/* Ten Smiles Foundation */}
              <div className="p-5 rounded-2xl bg-[#12151A] border border-white/[0.06] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-[#6F7682]">Community</span>
                </div>
                <h4 className="text-sm font-semibold text-white">
                  Ten Smiles Foundation
                </h4>
                <p className="text-xs text-emerald-300 font-mono">
                  Volunteer Educator
                </p>
                <p className="text-xs text-[#A7ADB7] leading-relaxed">
                  Taught foundational digital literacy and computer tools to educators instructing underprivileged students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
