"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const skillCategories = [
    {
      title: "AI / LLM Core",
      skills: [
        "LLMs & Fine-Tuning",
        "RAG & GraphRAG",
        "Multi-Agent Orchestration",
        "Context Engineering",
        "Prompt Engineering",
        "AI Guardrails & Safety",
        "VLMs & Multimodal AI",
        "NLP & Tokenization",
      ],
    },
    {
      title: "AI Tooling & MCP",
      skills: [
        "Claude 3.5 / 3.7",
        "Gemini 1.5 / 2.0 API",
        "Model Context Protocol (MCP)",
        "OpenAI API",
        "LangGraph",
        "AI Automation Workflows",
      ],
    },
    {
      title: "ML & Retrieval Systems",
      skills: [
        "FAISS Vector Indexing",
        "PyTorch",
        "TensorFlow",
        "Cosine Similarity",
        "BERTopic & Clustering",
        "Scikit-learn",
        "Dense & Sparse Embeddings",
      ],
    },
    {
      title: "Languages & Frameworks",
      skills: [
        "Python",
        "JavaScript / TypeScript",
        "Java",
        "C++",
        "SQL",
        "Node.js",
        "Express.js",
        "React.js",
        "Next.js",
      ],
    },
    {
      title: "Data & Systems Infrastructure",
      skills: [
        "MongoDB Atlas",
        "Knowledge Graphs",
        "REST APIs & Webhooks",
        "HPC GPU Scaling",
        "Docker",
        "Linux",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left">
            <span className="mb-2 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#A7ADB7]">
              TECHNICAL STACK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Technologies, architectures &amp; frameworks.
            </h2>
            <p className="mt-3 max-w-3xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#A7ADB7]">
              Categorized skill matrix with production and research application references.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6F7682]" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#12151A] border border-white/15 text-xs text-white placeholder-[#6F7682] focus:outline-none focus:border-purple-500/50 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Categorized Pill Groups (Matching Reference Layout) */}
        <div className="space-y-8 rounded-3xl bg-[#0D0F12]/80 border border-white/10 p-8 sm:p-10 backdrop-blur-xl shadow-xl">
          {skillCategories.map((group) => {
            const filtered = group.skills.filter((s) =>
              s.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filtered.length === 0) return null;

            return (
              <div key={group.title}>
                <h3 className="mb-3 font-mono text-xs font-semibold tracking-wider text-[#6F7682] uppercase">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {filtered.map((skill) => (
                    <button
                      key={skill}
                      className="cursor-pointer rounded-full border border-white/10 bg-[#12151A] px-4 py-2 text-xs sm:text-sm font-medium text-[#F5F7FA] transition-all hover:border-purple-500/50 hover:bg-purple-950/40 active:scale-95 shadow-xs"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
