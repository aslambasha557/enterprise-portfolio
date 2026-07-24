import React from "react";
import Link from "next/link";
import {
  FileText,
  Mail,
  User,
  ArrowRight,
  ExternalLink,
  Github,
  Terminal,
  Server,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const projects = [
    {
      id: "project-1",
      title: "Enterprise Autonomous Network Incident AI Agent",
      tagline: "AI Agent for Automated Cisco Router Triage & Log Diagnostics",
      description:
        "Built using Python, Ollama, and Cisco APIs. Automatically listens for SNMP traps and syslog alerts, parses router error logs, diagnoses root causes (e.g., flapping BGP peers, VLAN mismatches), and generates mitigation recommendations instantly.",
      tech: ["Python", "Ollama", "Cisco IOS-XE API", "Make / Webhooks"],
      badge: "AI Network Automation",
    },
    {
      id: "project-2",
      title: "Air-Gapped Private RAG Engine for SOC Operations",
      tagline: "Local Privacy-First Vector Search for Internal Security Playbooks",
      description:
        "Engineered an air-gapped Retrieval-Augmented Generation (RAG) system utilizing Msty and NotebookLM. Allows SOC analysts to query thousands of pages of internal network topology docs and security policies with zero data leakage.",
      tech: ["Msty", "NotebookLM", "Ollama", "Vector DB", "Python"],
      badge: "Cybersecurity & RAG",
    },
    {
      id: "project-3",
      title: "Automated SD-WAN & Multi-Vendor LAN Topology Auditor",
      tagline: "Interactive Topology Dashboard & Automated Health Auditing",
      description:
        "Developed a custom automation tool that pulls configuration states across Cisco enterprise switches, routers, and SD-WAN edge nodes to render interactive Power BI health metrics and automatically highlight configuration drift.",
      tech: ["Power BI", "Python", "Cisco CLI", "JSON Data Parsing"],
      badge: "Enterprise LAN/WAN",
    },
    {
      id: "project-4",
      title: "Voice-Activated IT Triage & Voice AI Assistant",
      tagline: "Autonomous Voice Agent for Tier-1 Infrastructure Ticket Escalation",
      description:
        "Integrated Vapi with custom webhook pipelines to handle incoming voice calls from field engineers, log incident details directly into IT Service Management systems, and trigger automated ping/traceroute diagnostics.",
      tech: ["Vapi Voice AI", "Make Automation", "REST APIs", "Python"],
      badge: "Voice AI & Workflow",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 space-y-16">
        
        {/* ================= HEADER / NAVIGATION ================= */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-6 w-full">
          <div className="flex items-center space-x-3">
            <div className="h-11 w-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-lg shadow-inner">
              AB
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-wide">Aslam Basha</h1>
              <p className="text-xs text-slate-400">Network Engineer @ MAP | AI Security</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-center sm:justify-end">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 text-xs font-semibold text-cyan-400 hover:bg-cyan-500/20 transition-all active:scale-95"
            >
              <User className="h-4 w-4" />
              <span>About Me & Experience</span>
            </Link>

            <a
              href="/resume.pdf"
              download="Aslam_Basha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition-all active:scale-95"
            >
              <FileText className="h-4 w-4 text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>
        </header>

        {/* ================= HERO SECTION ================= */}
        <section className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-400">
            <Terminal className="h-3.5 w-3.5" />
            <span>Featured Portfolio & Technical Implementations</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Enterprise Network Engineering Meets{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              AI Operational Automation
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Welcome to my technical portfolio. Below are my production-grade projects bridging 
            <strong> Cisco LAN/WAN infrastructure</strong>, <strong>SOC cybersecurity</strong>, and <strong>autonomous AI workflow integration</strong>.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all shadow-lg shadow-cyan-600/20 active:scale-95"
            >
              <span>View Experience & Certifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ================= ALL PROJECTS SECTION ================= */}
        <section className="space-y-8 w-full pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">All Portfolio Projects</h2>
              <p className="text-xs sm:text-sm text-slate-400">Hands-on infrastructure automation, private AI engines, and network tooling.</p>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-3 py-1 rounded-full w-fit">
              {projects.length} Active Deployments
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-[11px] font-semibold text-cyan-400">
                      {project.badge}
                    </span>
                    <Zap className="h-4 w-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-cyan-400/90 font-medium">{project.tagline}</p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-950 px-2.5 py-1 text-[11px] font-mono text-slate-400 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}