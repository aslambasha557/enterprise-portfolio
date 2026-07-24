import React from "react";
import Link from "next/link";
import {
  FileText,
  Mail,
  User,
  ArrowRight,
  Terminal,
  Zap,
  Server,
  ShieldCheck,
  Cpu,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  const projects = [
    {
      id: "project-1",
      title: "Enterprise Autonomous Network Incident AI Agent",
      role: "Lead Automation Engineer",
      description:
        "Engineered an autonomous AI diagnostic agent using Python, Cisco IOS-XE APIs, and Ollama. Listens for SNMP traps and syslog alerts in real time, executes diagnostic show commands across routers/switches, pinpointing flapping BGP peers and VLAN mismatches instantly.",
      impact: "Reduced Mean Time To Repair (MTTR) by 75% for routine core routing outages.",
      tech: ["Python", "Cisco IOS-XE API", "Ollama", "SNMP/Syslog", "Make"],
      category: "Network Automation & AI",
    },
    {
      id: "project-2",
      title: "Air-Gapped Private RAG Engine for SOC Operations",
      role: "Security & AI Engineer",
      description:
        "Built a zero-data-leakage Retrieval-Augmented Generation (RAG) vector database utilizing Msty and local LLMs. Allows SOC analysts to instantly query internal network topologies, threat playbooks, and compliance policies without sending data to public cloud APIs.",
      impact: "100% data privacy compliance with instant internal search across 5,000+ pages.",
      tech: ["Msty", "NotebookLM", "Ollama", "Vector DB", "Python"],
      category: "Cybersecurity & RAG",
    },
    {
      id: "project-3",
      title: "Automated SD-WAN & Multi-Vendor LAN Topology Auditor",
      role: "Network Engineer",
      description:
        "Developed a custom auditing pipeline that harvests configurations across Cisco enterprise switches, routers, and SD-WAN edge devices. Generates real-time Power BI operational dashboards to flag configuration drift and security non-compliance.",
      impact: "Saved 15+ manual auditing hours per week across enterprise site deployments.",
      tech: ["Power BI", "Python", "Cisco CLI Parsing", "JSON", "REST APIs"],
      category: "Enterprise LAN/WAN",
    },
    {
      id: "project-4",
      title: "Voice-Activated IT Triage & Incident AI Assistant",
      role: "AI Integration Specialist",
      description:
        "Integrated Vapi Voice AI with automated REST webhooks to receive field engineer calls, transcribe incident descriptions, parse error codes, and automatically trigger initial ping/traceroute diagnostic routines.",
      impact: "Eliminated manual Tier-1 ticket creation delay for field network engineers.",
      tech: ["Vapi Voice AI", "Make Workflows", "REST APIs", "Python"],
      category: "Voice AI & Incident Triage",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-slate-950 text-slate-100 py-8 sm:py-12">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      {/* Fluid Widescreen Container */}
      <div className="relative w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        
        {/* ================= NAVIGATION BAR ================= */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-6 w-full">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-base shadow-inner">
              AB
            </div>
            <div>
              <h1 className="text-base font-bold text-white tracking-wide">Aslam Basha</h1>
              <p className="text-xs text-slate-400">Network Engineer @ MAP | AI Security Specialist</p>
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
              <span>Download Resume</span>
            </a>
          </div>
        </header>

        {/* ================= HERO SECTION ================= */}
        <section className="space-y-6 w-full">
          {/* Clean Corporate Category Label (No Pill Badge) */}
          <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            Enterprise Infrastructure & AI Automation
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Architecting Resilient Networks &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Autonomous AI Systems
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
            Network Engineer specializing in enterprise Cisco core routing/switching, cybersecurity defense, and air-gapped AI operational workflows. Below is my complete portfolio of technical projects and enterprise deployments.
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
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">TECHNICAL PORTFOLIO</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Production Projects & Systems</h2>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-md w-fit">
              {projects.length} Active Deployments
            </span>
          </div>

          {/* Full Grid Scaling Across Screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{project.role}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-cyan-950/20 text-xs text-cyan-300 flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Key Outcome:</strong> {project.impact}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-950 px-2.5 py-1 text-[11px] font-mono text-slate-300 border border-slate-800"
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