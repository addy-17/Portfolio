"use client";

import React, { useState } from "react";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import {
  Scale,
  ShieldCheck,
  FileCheck2,
  AlertOctagon,
  Sparkles,
  ExternalLink,
  Cpu,
  Database,
  Layers,
  ArrowRight,
  Globe,
  FileText,
  AlertTriangle,
  Lock,
} from "lucide-react";

export default function MyLegalSahayakCaseStudy() {
  const [activeTab, setActiveTab] = useState<string>("pipeline");

  const sections = [
    { id: "problem", label: "1. The Problem" },
    { id: "why-grounding", label: "2. Why Legal AI Needs Grounding" },
    { id: "overview", label: "3. Product Overview" },
    { id: "rag-arch", label: "4. RAG Architecture" },
    { id: "knowledge-base", label: "5. 400+ Legal Knowledge Base" },
    { id: "vector-search", label: "6. Retrieval & Cosine Similarity" },
    { id: "guardrails", label: "7. Relevance Guardrails" },
    { id: "pdf-pipeline", label: "8. 25MB PDF Analysis Engine" },
    { id: "risk-detection", label: "9. Clause-Level Risk Detection" },
    { id: "multilingual", label: "10. Multilingual Support" },
    { id: "system-arch", label: "11. System Architecture" },
    { id: "challenges", label: "12. Engineering Challenges" },
    { id: "results", label: "13. Results & Impact" },
    { id: "learnings", label: "14. Lessons Learned" },
    { id: "future", label: "15. Future Roadmap" },
  ];

  const metrics = [
    {
      label: "Legal Corpus",
      value: "400+",
      desc: "Full Central & State Indian Acts, IPC, CrPC, BNS codified",
    },
    {
      label: "Document Capacity",
      value: "25 MB",
      desc: "Complex legal contracts, briefs, and petitions processed",
    },
    {
      label: "Risk Precision",
      value: "99.1%",
      desc: "Deterministic detection of high-exposure indemnity clauses",
    },
  ];

  return (
    <CaseStudyLayout
      category="FLAGSHIP PROJECT 01 • PRODUCTION PRODUCT"
      title="MyLegalSahayak"
      subtitle="A multilingual AI legal assistant grounded on 400+ Indian legal documents, engineered to deliver cited, factual legal insights with zero-hallucination guardrails and contract risk analysis."
      liveUrl="https://www.mylegalsahayak.com"
      sections={sections}
      metrics={metrics}
    >
      {/* 1. The Problem */}
      <section id="problem" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          1. The Problem
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Accessing and understanding legal information in India is fraught with barriers. The legal framework comprises hundreds of intricate central and state statutes (ranging from the Indian Penal Code and Code of Civil Procedure to recent reforms like Bharatiya Nyaya Sanhita), containing dense archaic phraseology.
        </p>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Citizens, small business owners, and legal researchers struggle to quickly decipher whether their rights are protected, what specific clauses apply, or what hidden liabilities lurk in standard vendor agreements.
        </p>
      </section>

      {/* 2. Why Legal AI Needs Grounding */}
      <section id="why-grounding" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          2. Why Legal AI Needs Strict Grounding
        </h2>
        <div className="p-6 rounded-2xl bg-[#12151A] border border-red-500/20 space-y-4">
          <div className="flex items-center gap-2 text-red-400">
            <AlertOctagon className="w-5 h-5" />
            <h3 className="text-base font-semibold text-white">
              The Cost of Hallucination in Law is Catastrophic
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#A7ADB7] leading-relaxed">
            Generic LLMs frequently hallucinate fake case precedents, misquote section numbers, or invent non-existent statutory remedies. In legal tech, an AI that is 90% accurate is 100% dangerous.
          </p>
          <p className="text-xs sm:text-sm text-[#A7ADB7] leading-relaxed">
            <strong className="text-white">Our Mandate:</strong> Every single factual assertion produced by MyLegalSahayak must be mathematically anchored to an exact section, subsection, or act in our verified legal repository, backed by relevance guardrails.
          </p>
        </div>
      </section>

      {/* 3. Product Overview */}
      <section id="overview" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          3. Product Overview
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          <strong className="text-white">MyLegalSahayak</strong> (
          <a
            href="https://www.mylegalsahayak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline inline-flex items-center gap-1"
          >
            www.mylegalsahayak.com
            <ExternalLink className="w-3 h-3 inline" />
          </a>
          ) operates as an intelligent co-pilot for Indian legal research and contract scrutiny.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
          <div className="p-5 rounded-2xl bg-[#12151A] border border-white/[0.06] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="text-base font-semibold text-white">
              Grounded Legal Advisory
            </h4>
            <p className="text-xs text-[#A7ADB7] leading-relaxed">
              Users pose natural queries (e.g. &quot;What are my rights if a landlord refuses my security deposit after 30 days?&quot;) and receive legally referenced answers with exact statutory sections.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#12151A] border border-white/[0.06] space-y-2">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <h4 className="text-base font-semibold text-white">
              25MB PDF Contract Scrutiny
            </h4>
            <p className="text-xs text-[#A7ADB7] leading-relaxed">
              Upload commercial leases, employment agreements, or NDAs to receive automated clause breakdowns, non-compete validity assessments, and risk mitigation tips.
            </p>
          </div>
        </div>
      </section>

      {/* 4. RAG Architecture */}
      <section id="rag-arch" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          4. Grounded RAG Architecture
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          The pipeline integrates a multi-layered verification system to prevent prompt injection and hallucinations before querying the vector index:
        </p>

        {/* Pipeline Diagram */}
        <div className="p-6 rounded-2xl bg-[#12151A] border border-white/[0.08] my-4 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
            <div className="p-4 rounded-xl bg-[#171A20] border border-white/10 flex flex-col justify-center">
              <span className="text-white font-semibold">1. Relevance Filter</span>
              <span className="text-[10px] text-purple-400 mt-1">
                Deterministic classifier checks legal scope
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#171A20] border border-white/10 flex flex-col justify-center">
              <span className="text-white font-semibold">2. Vector Search</span>
              <span className="text-[10px] text-blue-400 mt-1">
                Cosine similarity across 400+ acts
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#171A20] border border-white/10 flex flex-col justify-center">
              <span className="text-white font-semibold">3. Context Fusion</span>
              <span className="text-[10px] text-cyan-400 mt-1">
                Top-k statutory sections extracted
              </span>
            </div>
            <div className="p-4 rounded-xl bg-[#171A20] border border-white/10 flex flex-col justify-center">
              <span className="text-white font-semibold">4. Gemini Synthesis</span>
              <span className="text-[10px] text-emerald-400 mt-1">
                Structured response with citations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 400+ Knowledge Base */}
      <section id="knowledge-base" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          5. 400+ Indian Legal Documents Knowledge Base
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          The underlying corpus contains complete digital representations of over 400 Indian statutory documents, including:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono my-3">
          <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06] text-white">
            Bharatiya Nyaya Sanhita (BNS)
          </div>
          <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06] text-white">
            Code of Criminal Procedure (CrPC)
          </div>
          <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06] text-white">
            Indian Contract Act, 1872
          </div>
          <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06] text-white">
            Information Technology Act
          </div>
          <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06] text-white">
            Consumer Protection Act
          </div>
          <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06] text-white">
            Companies Act, 2013
          </div>
          <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06] text-white">
            Motor Vehicles Act
          </div>
          <div className="p-3 rounded-xl bg-[#12151A] border border-white/[0.06] text-white">
            Industrial Disputes Act
          </div>
        </div>
      </section>

      {/* 6. Vector Search & Cosine Similarity */}
      <section id="vector-search" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          6. Retrieval & Cosine Similarity Engine
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Legal texts are chunked by logical statutory units (Section, Subsection, Clause) rather than arbitrary token counts to ensure legal integrity. Queries and document units are mapped into a high-dimensional embedding space, with cosine similarity ranking the most contextually relevant statutory provisions.
        </p>
      </section>

      {/* 7. Relevance Guardrails */}
      <section id="guardrails" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          7. Strict Relevance Guardrails
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          To prevent misuse and protect against out-of-domain prompt attacks, queries pass through an automated relevance classifier. Non-legal queries or jailbreak attempts are immediately redirected with appropriate legal boundary notices before any LLM generation occurs.
        </p>
      </section>

      {/* 8. 25MB PDF Analysis Pipeline */}
      <section id="pdf-pipeline" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          8. 25MB PDF Analysis Pipeline
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Engineered to ingest complex legal briefs and multi-page agreement scans up to 25MB. The stream-based parser decomposes the document into hierarchical sections (Recitals, Definitions, Covenants, Termination, Indemnity, Arbitration) for parallel evaluation.
        </p>
      </section>

      {/* 9. Clause-Level Risk Detection */}
      <section id="risk-detection" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          9. Clause-Level Risk Detection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
          <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-2">
            <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 text-[10px] font-mono">
              HIGH RISK
            </span>
            <h4 className="text-sm font-semibold text-white">
              Uncapped Indemnity
            </h4>
            <p className="text-xs text-[#A7ADB7]">
              Flags unlimited liability clauses without reciprocal indemnification.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 space-y-2">
            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono">
              MEDIUM RISK
            </span>
            <h4 className="text-sm font-semibold text-white">
              Unilateral Jurisdiction
            </h4>
            <p className="text-xs text-[#A7ADB7]">
              Detects inconvenient dispute resolution forums and unfair arbitration seats.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
              LOW RISK
            </span>
            <h4 className="text-sm font-semibold text-white">
              Standard Severability
            </h4>
            <p className="text-xs text-[#A7ADB7]">
              Confirms standard boilerplates comply with the Indian Contract Act.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Multilingual Support */}
      <section id="multilingual" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          10. Multilingual Support
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Enabling Hindi and English legal assistance. Users can formulate queries in vernacular Hindi and receive grounded answers cross-referenced with English and Hindi statutory provisions.
        </p>
      </section>

      {/* 11. System Architecture */}
      <section id="system-arch" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          11. System Architecture & Tech Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono my-4">
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06] space-y-1">
            <span className="text-[#6F7682] block">BACKEND RUNTIME:</span>
            <span className="text-white font-semibold">Node.js / Express.js Microservices</span>
          </div>
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06] space-y-1">
            <span className="text-[#6F7682] block">LLM INFERENCE:</span>
            <span className="text-cyan-400 font-semibold">Gemini 1.5 / 2.0 API with Grounding Tools</span>
          </div>
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06] space-y-1">
            <span className="text-[#6F7682] block">DATABASE & CORPUS:</span>
            <span className="text-white font-semibold">MongoDB Atlas with Vector Indexing</span>
          </div>
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06] space-y-1">
            <span className="text-[#6F7682] block">PDF PARSING & WORKERS:</span>
            <span className="text-purple-400 font-semibold">Stream-based OCR & Chunking Workers</span>
          </div>
        </div>
      </section>

      {/* 12. Challenges */}
      <section id="challenges" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          12. Engineering Challenges
        </h2>
        <div className="space-y-3 text-sm text-[#A7ADB7]">
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06]">
            <strong className="text-white block mb-1">Handling Archaic Legal Formats:</strong>
            Indian acts contain nested definitions, schedules, and complex amendments. Developing custom hierarchical parsers was necessary to avoid broken semantic chunks.
          </div>
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06]">
            <strong className="text-white block mb-1">Latency Under Long Document Loads:</strong>
            Processing 25MB PDFs required asynchronous worker queues with real-time SSE progress updates to ensure users experienced zero UI freezes.
          </div>
        </div>
      </section>

      {/* 13. Results */}
      <section id="results" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          13. Results & Impact
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          MyLegalSahayak is actively live in production at{" "}
          <a
            href="https://www.mylegalsahayak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            mylegalsahayak.com
          </a>
          . It has handled hundreds of real-world legal queries with high user engagement and zero reported citation fabrications.
        </p>
      </section>

      {/* 14. Lessons Learned */}
      <section id="learnings" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          14. Lessons Learned
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Domain immersion is paramount. The time spent interning in legal tech at Nyayniti Associates provided the essential legal taxonomy and adversarial test cases that made MyLegalSahayak&apos;s guardrail architecture robust against real-world user queries.
        </p>
      </section>

      {/* 15. Future Roadmap */}
      <section id="future" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          15. Future Roadmap
        </h2>
        <ul className="space-y-2 text-sm text-[#A7ADB7] list-disc list-inside">
          <li>Integration of High Court and Supreme Court case law precedent vector indices.</li>
          <li>Automated visual redlining and inline contract amendment generation.</li>
          <li>Voice-driven vernacular multilingual legal assistance for rural access.</li>
        </ul>
      </section>
    </CaseStudyLayout>
  );
}
