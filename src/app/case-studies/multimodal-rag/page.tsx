"use client";

import React, { useState } from "react";
import CaseStudyLayout from "@/components/case-study/CaseStudyLayout";
import {
  FileText,
  Database,
  Layers,
  Network,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  GitBranch,
  Terminal,
  Zap,
} from "lucide-react";

export default function MultimodalRagCaseStudy() {
  const [selectedAgent, setSelectedAgent] = useState<number>(0);

  const sections = [
    { id: "problem", label: "1. Problem Definition" },
    { id: "traditional-fails", label: "2. Why Traditional RAG Fails" },
    { id: "architecture", label: "3. 5-Agent Architecture" },
    { id: "agent-roles", label: "4. Specialized Agent Cluster" },
    { id: "retrieval", label: "5. Multimodal Ingestion" },
    { id: "reranking", label: "6. MonoVLM Reranking" },
    { id: "graphrag", label: "7. Graph Traversal & FAISS" },
    { id: "hpc", label: "8. HPC Cluster Scaling" },
    { id: "results", label: "9. Benchmarks & Results" },
    { id: "learnings", label: "10. Lessons Learned" },
  ];

  const metrics = [
    {
      label: "Faithfulness",
      value: "0.94",
      desc: "Measured via Ragas benchmark on multi-hop technical papers",
    },
    {
      label: "Context Precision",
      value: "0.89",
      desc: "MonoVLM cross-encoder reranking precision score",
    },
    {
      label: "Answer Relevancy",
      value: "0.88",
      desc: "Synthesizer fidelity across tables, graphs, and text",
    },
  ];

  const agentDetails = [
    {
      name: "Decomposer Agent",
      role: "Query Decomposition & Plan Synthesis",
      input: "Raw multi-hop query across modalities",
      output: "Directed Acyclic Graph (DAG) of sub-queries",
      tech: "Claude 3.5 Sonnet / Custom Prompt Templates",
      logic: "Splits compound questions like 'Compare Table 2 revenues with Figure 4 growth trends' into isolated retrieval steps.",
    },
    {
      name: "Table & Structural Agent",
      role: "Tabular Reasoning & Markdown Parser",
      input: "Raw XML, HTML tables, and PDF tabular bounding boxes",
      output: "Normalized JSON & Python Pandas execution matrices",
      tech: "Pandas + FAISS Index + LLM Code Gen",
      logic: "Converts nested multi-column balance sheets and financial metrics into queryable structured dataframes.",
    },
    {
      name: "Vision-Language Agent",
      role: "Figure, Diagram & Chart Extractor",
      input: "PDF image vectors and visual figures",
      output: "Visual semantic embeddings & MonoVLM relevance scores",
      tech: "MonoVLM + Vision Embeddings",
      logic: "Performs optical semantic parsing of plots, bar charts, and system diagrams without losing axes or legend context.",
    },
    {
      name: "Graph Traversal Agent",
      role: "Knowledge Graph Entity Traversal",
      input: "Entities extracted from sub-queries",
      output: "2-hop relational subgraphs & connected nodes",
      tech: "GraphRAG + Neo4j / NetworkX",
      logic: "Traverses interconnected document concepts to resolve implicit references and cross-document entity relations.",
    },
    {
      name: "Master Synthesizer Agent",
      role: "Consensus Aggregation & Citation Grounding",
      input: "Aggregated outputs from Agents 1–4",
      output: "Grounded answer with verified provenance citations",
      tech: "Gemini / Claude API with Deterministic Guardrails",
      logic: "Executes final consensus check, eliminates contradictory sub-agent hypotheses, and binds exact citation links.",
    },
  ];

  return (
    <CaseStudyLayout
      category="PROJECT 02 • RESEARCH & HPC ARCHITECTURE"
      title="Multimodal Multi-Agent RAG Framework"
      subtitle="A five-agent multimodal RAG system designed to reason across complex text, tabular structures, and technical figures for multi-hop scientific questions."
      sections={sections}
      metrics={metrics}
    >
      {/* 1. Problem */}
      <section id="problem" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          1. Problem Statement
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Modern enterprise documents and academic research papers are inherently multimodal. Key insights rarely live purely in raw narrative text; they are locked inside complex tabular data, financial spreadsheets, mathematical plots, and architectural diagrams.
        </p>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          When domain experts ask complex multi-hop queries such as <span className="text-white font-medium">&quot;How does the latency in Table 3 correlate with the throughput spike illustrated in Figure 2?&quot;</span>, traditional RAG pipelines fail completely because they process text chunks in isolation, flattening or discarding graphical and tabular context.
        </p>
      </section>

      {/* 2. Why Traditional RAG Fails */}
      <section id="traditional-fails" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          2. Why Traditional RAG Fails
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
          <div className="p-5 rounded-2xl bg-[#12151A] border border-red-500/20 space-y-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-sm font-semibold text-white">
              Tabular Flattening
            </h3>
            <p className="text-xs text-[#A7ADB7] leading-relaxed">
              Chunking algorithms destroy row-column semantic relationships, rendering structured numbers meaningless noise.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#12151A] border border-red-500/20 space-y-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-sm font-semibold text-white">
              Visual Blind Spots
            </h3>
            <p className="text-xs text-[#A7ADB7] leading-relaxed">
              Standard OCR strips coordinate metadata, trend slopes, and visual relationships present in charts and figures.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#12151A] border border-red-500/20 space-y-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-sm font-semibold text-white">
              Single-Hop Retrieval
            </h3>
            <p className="text-xs text-[#A7ADB7] leading-relaxed">
              Cosine vector similarity retrieves top-k chunks with no ability to follow relational entity chains across disparate pages.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Architecture */}
      <section id="architecture" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          3. 5-Agent Architecture
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          To overcome these bottlenecks, we engineered a modular multi-agent system where dedicated agents specialize in different modalities, orchestrated by a central planner and synthesized by a consensus engine.
        </p>

        {/* Architecture flow visualization */}
        <div className="p-6 rounded-2xl bg-[#12151A] border border-white/[0.08] my-6 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <span className="text-xs font-mono text-cyan-400 uppercase">
              End-to-End Orchestration Workflow
            </span>
            <span className="text-xs font-mono text-[#6F7682]">
              Parallel Agent Threads
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#171A20] border border-white/10 flex flex-col justify-center">
              <span className="text-white font-semibold">User Query</span>
              <span className="text-[10px] text-[#6F7682]">Complex Multi-Hop</span>
            </div>
            <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 flex flex-col justify-center text-purple-300">
              <span className="font-semibold">Query Decomposer</span>
              <span className="text-[10px] text-purple-400">Generates Sub-DAG</span>
            </div>
            <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 flex flex-col justify-center text-blue-300">
              <span className="font-semibold">Hybrid Retrieval</span>
              <span className="text-[10px] text-blue-400">FAISS + GraphRAG</span>
            </div>
            <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col justify-center text-cyan-300">
              <span className="font-semibold">MonoVLM Rerank</span>
              <span className="text-[10px] text-cyan-400">Vision Cross-Encoder</span>
            </div>
            <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col justify-center text-emerald-300">
              <span className="font-semibold">Synthesizer</span>
              <span className="text-[10px] text-emerald-400">Cited Consensus</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Agent Cluster Interactive Explorer */}
      <section id="agent-roles" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          4. Specialized Agent Cluster
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7]">
          Click on any agent below to inspect its operational logic, inputs, outputs, and underlying technology stack:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-4">
          {agentDetails.map((agent, idx) => (
            <button
              key={agent.name}
              onClick={() => setSelectedAgent(idx)}
              className={`p-3 rounded-xl text-left border transition-all text-xs font-mono ${
                selectedAgent === idx
                  ? "bg-purple-950/40 border-purple-500 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                  : "bg-[#12151A] border-white/[0.06] text-[#A7ADB7] hover:text-white"
              }`}
            >
              <span className="text-[10px] text-[#6F7682] block mb-1">
                AGENT 0{idx + 1}
              </span>
              <span className="font-semibold">{agent.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Agent Inspector */}
        <div className="p-6 rounded-2xl bg-[#12151A] border border-purple-500/30 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
            <div>
              <h3 className="text-lg font-bold text-white">
                {agentDetails[selectedAgent].name}
              </h3>
              <span className="text-xs font-mono text-purple-400">
                {agentDetails[selectedAgent].role}
              </span>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-cyan-400">
              {agentDetails[selectedAgent].tech}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#0D0F12] border border-white/[0.04]">
              <span className="text-[#6F7682] block mb-1">INPUT PAYLOAD:</span>
              <span className="text-[#F5F7FA]">
                {agentDetails[selectedAgent].input}
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[#0D0F12] border border-white/[0.04]">
              <span className="text-[#6F7682] block mb-1">OUTPUT ARTIFACT:</span>
              <span className="text-emerald-400">
                {agentDetails[selectedAgent].output}
              </span>
            </div>
          </div>

          <div className="text-xs text-[#A7ADB7] leading-relaxed pt-2">
            <span className="font-semibold text-white block mb-1 font-mono">
              Operational Logic:
            </span>
            {agentDetails[selectedAgent].logic}
          </div>
        </div>
      </section>

      {/* 5. Ingestion */}
      <section id="retrieval" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          5. Multimodal Ingestion Pipeline
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Input PDFs are parsed through a multi-pass pipeline:
        </p>
        <ul className="space-y-2 text-sm text-[#A7ADB7] list-disc list-inside">
          <li>
            <strong className="text-white">Spatial Layout Analyzer:</strong> Segments document bounding boxes into narrative text, tables, figures, and mathematical formulas.
          </li>
          <li>
            <strong className="text-white">Table Serializer:</strong> Transcribes visual rows/columns into strict Markdown and semantic JSON representations with coordinate tags.
          </li>
          <li>
            <strong className="text-white">Image Patch Embedding:</strong> High-resolution crops of figures are encoded using vision transformers alongside contextual captions.
          </li>
        </ul>
      </section>

      {/* 6. MonoVLM Reranking */}
      <section id="reranking" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          6. MonoVLM Vision-Language Reranking
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Standard cross-encoders only compare text tokens. We implemented <span className="text-white font-medium">MonoVLM</span>, a vision-language cross-encoder that ingests the raw query paired directly with visual document crops, scoring relevance based on both visual cues (charts, diagrams) and accompanying textual captions.
        </p>
        <div className="p-4 rounded-xl bg-[#0D0F12] border border-white/[0.06] font-mono text-xs text-cyan-300">
          Relevance_Score = MonoVLM.forward(query, image_crop, context_tokens)
        </div>
      </section>

      {/* 7. GraphRAG & FAISS */}
      <section id="graphrag" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          7. Graph Traversal & FAISS Indexing
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          We coupled <span className="text-white font-medium">FAISS HNSW</span> index (for sub-millisecond dense vector nearest-neighbor search) with a <span className="text-white font-medium">GraphRAG knowledge graph</span>. When an entity is retrieved, the Graph Agent performs a 2-hop traversal to retrieve related entities across preceding and succeeding chapters.
        </p>
      </section>

      {/* 8. HPC Optimization */}
      <section id="hpc" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          8. High-Performance Computing (HPC) Scaling
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          To enable low-latency inference across large corpora, the pipeline was benchmarked on an HPC cluster with GPU parallelization:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06]">
            <span className="text-xs font-mono text-[#6F7682] block">Batch Embedding</span>
            <span className="text-xl font-bold text-white font-mono mt-1 block">&gt;1,200 pages/min</span>
          </div>
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06]">
            <span className="text-xs font-mono text-[#6F7682] block">Multi-Agent Latency</span>
            <span className="text-xl font-bold text-white font-mono mt-1 block">&lt;1.8s End-to-End</span>
          </div>
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06]">
            <span className="text-xs font-mono text-[#6F7682] block">GPU Utilization</span>
            <span className="text-xl font-bold text-white font-mono mt-1 block">94.2% Peak Efficiency</span>
          </div>
        </div>
      </section>

      {/* 9. Results */}
      <section id="results" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          9. Benchmarks & Results
        </h2>
        <p className="text-sm sm:text-base text-[#A7ADB7] leading-relaxed">
          Evaluated using the Ragas evaluation suite against 150 complex multi-modal academic queries:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-xs font-mono border-collapse border border-white/[0.08] rounded-xl overflow-hidden">
            <thead className="bg-[#171A20] text-white">
              <tr>
                <th className="p-3 border border-white/[0.08]">Metric</th>
                <th className="p-3 border border-white/[0.08]">Standard RAG</th>
                <th className="p-3 border border-white/[0.08]">Our 5-Agent Framework</th>
                <th className="p-3 border border-white/[0.08]">Delta</th>
              </tr>
            </thead>
            <tbody className="bg-[#12151A] text-[#A7ADB7]">
              <tr>
                <td className="p-3 border border-white/[0.08] font-semibold text-white">Faithfulness</td>
                <td className="p-3 border border-white/[0.08]">0.68</td>
                <td className="p-3 border border-white/[0.08] text-emerald-400 font-bold">0.94</td>
                <td className="p-3 border border-white/[0.08] text-emerald-400">+38.2%</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/[0.08] font-semibold text-white">Context Precision</td>
                <td className="p-3 border border-white/[0.08]">0.61</td>
                <td className="p-3 border border-white/[0.08] text-emerald-400 font-bold">0.89</td>
                <td className="p-3 border border-white/[0.08] text-emerald-400">+45.9%</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/[0.08] font-semibold text-white">Answer Relevancy</td>
                <td className="p-3 border border-white/[0.08]">0.72</td>
                <td className="p-3 border border-white/[0.08] text-emerald-400 font-bold">0.88</td>
                <td className="p-3 border border-white/[0.08] text-emerald-400">+22.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 10. Learnings */}
      <section id="learnings" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          10. Lessons Learned
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-[#A7ADB7]">
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06]">
            <strong className="text-white block mb-1">Agent Specialization Beats Giant Monolithic Prompts:</strong>
            Decomposing tasks into dedicated micro-agents with constrained JSON output schemas yielded dramatically lower error rates and eliminated cross-modal hallucinations.
          </div>
          <div className="p-4 rounded-xl bg-[#12151A] border border-white/[0.06]">
            <strong className="text-white block mb-1">Visual Reranking is Mandatory for Technical Documents:</strong>
            Standard text-only embeddings consistently miss context in plots and infographics. MonoVLM cross-modal reranking proved to be the single most impactful architectural addition.
          </div>
        </div>
      </section>
    </CaseStudyLayout>
  );
}
