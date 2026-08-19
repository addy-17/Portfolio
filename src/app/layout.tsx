import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Wadhwa — AI & LLM Engineer",
  description:
    "Computer Science Engineer focused on LLMs, RAG pipelines, multi-agent systems, AI automation, and intelligent products. Creator of MyLegalSahayak & Multimodal Multi-Agent RAG.",
  keywords: [
    "Aditya Wadhwa",
    "AI Engineer",
    "LLM Engineer",
    "RAG",
    "Multi-Agent Systems",
    "MyLegalSahayak",
    "GraphRAG",
    "MonoVLM",
    "Vector Search",
    "FAISS",
    "Machine Learning",
  ],
  authors: [{ name: "Aditya Wadhwa", url: "https://github.com/addy-17" }],
  openGraph: {
    title: "Aditya Wadhwa — AI & LLM Engineer",
    description:
      "Building intelligent systems that actually solve problems. Multi-agent RAG, AI automation, and production LLM engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Wadhwa — AI & LLM Engineer",
    description:
      "Building intelligent systems that actually solve problems. Multi-agent RAG, AI automation, and production LLM engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#08090B] text-[#F5F7FA] antialiased selection:bg-purple-900/40 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
