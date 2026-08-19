"use client";

import React, { useState } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  Eye,
  Award,
} from "lucide-react";

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<"digital" | "pdf">("digital");
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/Aditya_Wadhwa_Resume.pdf`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 md:px-8 relative z-10">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left">
            <span className="mb-2 inline-block font-mono text-xs font-semibold uppercase tracking-widest text-[#A7ADB7]">
              CURRICULUM VITAE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Official resume &amp; qualifications.
            </h2>
            <p className="mt-3 max-w-3xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-[#A7ADB7]">
              Complete record of education, production AI internships, core projects, and technical proficiencies.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#12151A] px-4 py-2 text-xs font-mono text-[#A7ADB7] hover:text-white hover:border-white/30 transition-all active:scale-95 shadow-sm"
              aria-label="Copy PDF link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Link</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>

            <a
              href="/Aditya_Wadhwa_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#12151A] px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-all active:scale-95 shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Open in New Tab</span>
            </a>

            <a
              href="/Aditya_Wadhwa_Resume.pdf"
              download="Aditya_Wadhwa_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 px-5 py-2 text-xs font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:opacity-95 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* View Mode Toggle: Interactive Digital vs Embedded PDF */}
        <div className="flex items-center justify-between p-2 rounded-2xl bg-[#0D0F12] border border-white/[0.08] mb-6">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("digital")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === "digital"
                  ? "bg-[#171A20] text-white border border-purple-500/40 shadow-sm font-semibold"
                  : "text-[#A7ADB7] hover:text-white"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Structured Executive View</span>
            </button>
            <button
              onClick={() => setActiveTab("pdf")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === "pdf"
                  ? "bg-[#171A20] text-white border border-cyan-500/40 shadow-sm font-semibold"
                  : "text-[#A7ADB7] hover:text-white"
              }`}
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Document Embed (PDF)</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-[#6F7682] hidden sm:inline-block pr-3">
            Last Updated: August 2026
          </span>
        </div>

        {/* Tab 1: Interactive Structured Digital Resume */}
        {activeTab === "digital" && (
          <div className="space-y-8 rounded-3xl bg-[#0D0F12] border border-white/15 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            {/* Header Contact Strip */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Aditya Wadhwa
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  Computer Science Engineer • AI &amp; LLM Systems
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A7ADB7]">
                <span>+91 8448041872</span>
                <span>•</span>
                <a
                  href="mailto:adityawadhwa391@gmail.com"
                  className="text-white hover:text-cyan-300 transition-colors"
                >
                  adityawadhwa391@gmail.com
                </a>
                <span>•</span>
                <a
                  href="https://linkedin.com/in/adityawadhwa21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  linkedin.com/in/adityawadhwa21
                </a>
              </div>
            </div>

            {/* Section 1: Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-[#12151A] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      B.Tech in Computer Science and Engineering
                    </h4>
                    <p className="text-xs text-[#A7ADB7]">
                      University of Petroleum and Energy Studies (UPES), Dehradun
                    </p>
                  </div>
                  <div className="text-right sm:shrink-0 font-mono text-xs">
                    <span className="text-cyan-400 font-bold block">CGPA: 8.66</span>
                    <span className="text-[#6F7682]">Aug 2023 – Present</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-[#12151A] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-semibold text-white">
                        Higher Secondary (12th Grade)
                      </h5>
                      <p className="text-xs text-[#6F7682]">
                        Manav Rachna International School, Faridabad
                      </p>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <span className="text-purple-400 font-bold block">92.8%</span>
                      <span className="text-[#6F7682]">2022 – 2023</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#12151A] border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <h5 className="text-sm font-semibold text-white">
                        Senior Secondary (10th Grade)
                      </h5>
                      <p className="text-xs text-[#6F7682]">
                        Manav Rachna International School, Faridabad
                      </p>
                    </div>
                    <div className="text-right font-mono text-xs">
                      <span className="text-purple-400 font-bold block">92.2%</span>
                      <span className="text-[#6F7682]">2020 – 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Internships */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Internships &amp; Production Work</span>
              </div>

              <div className="p-5 rounded-2xl bg-[#12151A] border border-purple-500/20 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Orchid ENT Pvt Ltd — Toscee Collective
                    </h4>
                    <p className="text-xs font-mono text-purple-300">
                      IT &amp; Automation Intern • Noida, India
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#A7ADB7]">
                    June 2026 – August 2026
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[#A7ADB7] leading-relaxed list-disc list-inside">
                  <li>
                    Analysts were spending <strong className="text-white">4+ hours</strong> manually parsing purchase orders — designed and shipped an LLM pipeline (scraping $\rightarrow$ extraction $\rightarrow$ cross-combination recommendations) that cut this to <strong className="text-emerald-400">under 15 minutes</strong>.
                  </li>
                  <li>
                    Business reports were locked in siloed PDFs with no queryable interface — built an <strong className="text-white">MCP integration with Claude</strong> that exposed structured data as reusable AI tools, letting non-technical stakeholders query reports in natural language.
                  </li>
                  <li>
                    Translated ambiguous operational requirements into practical automation workflows covering data extraction, transformation, analysis, and AI-assisted decision making.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Flagship Projects */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Core AI Engineering Projects</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#12151A] border border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">
                      MyLegalSahayak
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      Live AI Startup
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#6F7682]">
                    Node.js, Gemini API, MongoDB, RAG, Cosine Similarity
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#A7ADB7] leading-relaxed list-disc list-inside">
                    <li>Multilingual legal assistant grounded on <strong className="text-white">400+ Indian legal documents</strong> ensuring cited responses.</li>
                    <li>Engineered relevance guardrails blocking off-topic prompts to reduce hallucination.</li>
                    <li>Stream parser analyzing complex PDFs up to <strong className="text-white">25MB</strong> with clause-level risk alerts.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#12151A] border border-white/[0.06] space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">
                      Multimodal Multi-Agent RAG
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      HPC Research
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#6F7682]">
                    Python, FAISS, GraphRAG, LLMs, MonoVLM, HPC
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#A7ADB7] leading-relaxed list-disc list-inside">
                    <li>Five-agent pipeline reasoning end-to-end across text, tables, and figures.</li>
                    <li>MonoVLM visual reranking achieving <strong className="text-emerald-400">0.94 Faithfulness</strong> and <strong className="text-cyan-400">0.89 Context Precision</strong>.</li>
                    <li>GPU-optimized embedding workflows with hybrid FAISS and Knowledge Graph indexing.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4: Core Competencies */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Core Competencies &amp; Technologies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-[#12151A] border border-white/[0.06]">
                  <span className="text-[#6F7682] block mb-1">LANGUAGES:</span>
                  <span className="text-white">Python, Java, JavaScript, SQL</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#12151A] border border-white/[0.06]">
                  <span className="text-[#6F7682] block mb-1">BACKEND &amp; WEB:</span>
                  <span className="text-white">Node.js, Express.js, React.js, REST APIs</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#12151A] border border-white/[0.06]">
                  <span className="text-[#6F7682] block mb-1">AI &amp; LLM:</span>
                  <span className="text-white">LLMs, VLMs, RAG Pipelines, Multi-Agent, Guardrails</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#12151A] border border-white/[0.06]">
                  <span className="text-[#6F7682] block mb-1">AI TOOLS:</span>
                  <span className="text-white">Claude, Gemini, ChatGPT, MCP Protocol</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#12151A] border border-white/[0.06]">
                  <span className="text-[#6F7682] block mb-1">ML &amp; RETRIEVAL:</span>
                  <span className="text-white">TensorFlow, PyTorch, Scikit-learn, FAISS, BERTopic</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#12151A] border border-white/[0.06]">
                  <span className="text-[#6F7682] block mb-1">DATABASES:</span>
                  <span className="text-white">MongoDB, Knowledge Graphs</span>
                </div>
              </div>
            </div>

            {/* Section 5: Achievements & Co-Curricular */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Achievements &amp; Co-Curricular</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span>Nyayniti Associates</span>
                    <span className="font-mono text-[11px] text-[#6F7682]">2025</span>
                  </div>
                  <p className="text-purple-300 font-mono text-[11px]">Legal Tech Intern</p>
                  <p className="text-[#A7ADB7] leading-relaxed">
                    Analyzed legal document workflows and gained domain expertise, directly informing the architecture and relevance guardrails for MyLegalSahayak.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between font-semibold text-white">
                    <span>Ten Smiles Foundation (NGO)</span>
                    <span className="font-mono text-[11px] text-[#6F7682]">Faridabad, India</span>
                  </div>
                  <p className="text-emerald-300 font-mono text-[11px]">Volunteer Educator</p>
                  <p className="text-[#A7ADB7] leading-relaxed">
                    Taught foundational computer skills to educators of underprivileged children, leveraging strong technical communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Embedded PDF Viewer */}
        {activeTab === "pdf" && (
          <div className="rounded-3xl bg-[#0D0F12] border border-white/15 p-4 sm:p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-[#A7ADB7] flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Aditya_Wadhwa_Resume.pdf</span>
              </span>
              <a
                href="/Aditya_Wadhwa_Resume.pdf"
                download="Aditya_Wadhwa_Resume.pdf"
                className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Download file</span>
                <Download className="w-3 h-3" />
              </a>
            </div>

            <div className="w-full h-[750px] rounded-2xl overflow-hidden bg-[#171A20] border border-white/[0.08]">
              <iframe
                src="/Aditya_Wadhwa_Resume.pdf#toolbar=1"
                className="w-full h-full"
                title="Aditya Wadhwa Resume PDF"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
