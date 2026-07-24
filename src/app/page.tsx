import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Mail,
  CheckCircle2,
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="h-4 w-4 text-cyan-400 fill-current" viewBox="0 0 24 24" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg className="h-4 w-4 text-cyan-400 fill-current" viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-100 py-8 sm:py-12">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      {/* Widescreen Container */}
      <div className="relative w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        
        {/* ================= HEADER / NAV ================= */}
        <header className="flex flex-col sm:flex-row items-center justify-between border-b border-slate-800/80 pb-6 gap-4 w-full">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">Aslam Basha</h1>
            <p className="text-xs font-mono text-cyan-400">
              Network Engineer @ MAP | AI Security Specialist
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 rounded-lg bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 border border-slate-700 transition-all active:scale-95"
            >
              <span>About Me & Experience</span>
            </Link>
            <a
              href="/resume.pdf"
              download="Aslam_Basha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-semibold text-white transition-all shadow-md shadow-cyan-600/20 active:scale-95"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </header>

        {/* ================= HERO SECTION ================= */}
        <section className="space-y-6 max-w-4xl">
          <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            ENTERPRISE INFRASTRUCTURE & AI AUTOMATION
          </p>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Architecting Resilient Networks & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Autonomous AI Systems
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Network Engineer specializing in enterprise Cisco core routing and switching, cybersecurity defense, and air-gapped AI operational workflows. Below is my complete portfolio of production projects and enterprise deployments.
          </p>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all shadow-lg shadow-cyan-600/25 active:scale-95"
            >
              <span>View Experience & Certifications</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ================= PROJECTS GRID ================= */}
        <section className="space-y-8 w-full">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <p className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">
                TECHNICAL PORTFOLIO
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Production Projects & Systems
              </h2>
            </div>
            <span className="text-xs font-mono bg-slate-900 border border-slate-800 text-cyan-400 px-3 py-1 rounded-full">
              4 Active Deployments
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            
            {/* PROJECT 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6 hover:border-cyan-500/50 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                  NETWORK AUTOMATION & AI
                </span>
                <span className="text-[11px] font-mono text-slate-400">Lead Automation Engineer</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Enterprise Autonomous Network Incident AI Agent
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineered an autonomous AI diagnostic agent using Python, Cisco IOS-XE APIs, and Ollama. Listens for SNMP traps and syslog alerts in real time, executing diagnostic show commands across routers and switches to pinpoint flapping BGP peers and VLAN mismatches instantly.
              </p>

              <div className="rounded-xl bg-slate-950/80 border border-cyan-500/20 p-4 space-y-1">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Key Outcome</span>
                </div>
                <p className="text-xs text-slate-300 pl-6">
                  Reduced Mean Time To Repair (MTTR) by 75% for routine core routing outages.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Python", "Cisco IOS-XE API", "Ollama", "SNMP/Syslog", "Make"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6 hover:border-cyan-500/50 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                  CYBERSECURITY & RAG
                </span>
                <span className="text-[11px] font-mono text-slate-400">Security & AI Engineer</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Air-Gapped Private RAG Engine for SOC Operations
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Built a zero-data-leakage Retrieval-Augmented Generation (RAG) vector database utilizing Msty and local LLMs. Enables SOC analysts to instantly query internal network topologies, threat playbooks, and compliance policies without sending data to public cloud APIs.
              </p>

              <div className="rounded-xl bg-slate-950/80 border border-cyan-500/20 p-4 space-y-1">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Key Outcome</span>
                </div>
                <p className="text-xs text-slate-300 pl-6">
                  100% data privacy compliance with instant internal search across 5,000+ pages.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Msty", "NotebookLM", "Ollama", "Vector DB", "Python"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6 hover:border-cyan-500/50 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                  ENTERPRISE LAN/WAN
                </span>
                <span className="text-[11px] font-mono text-slate-400">Network Engineer</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Automated SD-WAN & Multi-Vendor LAN Topology Auditor
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Developed an automated auditing pipeline that harvests configurations across Cisco enterprise switches, routers, and SD-WAN edge devices. Generates real-time Power BI operational dashboards to flag configuration drift and security non-compliance.
              </p>

              <div className="rounded-xl bg-slate-950/80 border border-cyan-500/20 p-4 space-y-1">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Key Outcome</span>
                </div>
                <p className="text-xs text-slate-300 pl-6">
                  Saved 15+ manual auditing hours per week across enterprise site deployments.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Power BI", "Python", "Cisco CLI Parsing", "JSON", "REST APIs"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* PROJECT 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-6 hover:border-cyan-500/50 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                  VOICE AI & INCIDENT TRIAGE
                </span>
                <span className="text-[11px] font-mono text-slate-400">AI Integration Specialist</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Voice-Activated IT Triage & Incident AI Assistant
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Integrated Vapi Voice AI with automated REST webhooks to receive field engineer calls, transcribe incident descriptions, parse error codes, and automatically trigger initial ping and traceroute diagnostic routines.
              </p>

              <div className="rounded-xl bg-slate-950/80 border border-cyan-500/20 p-4 space-y-1">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Key Outcome</span>
                </div>
                <p className="text-xs text-slate-300 pl-6">
                  Eliminated manual Tier-1 ticket creation delay for field network engineers.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Vapi Voice AI", "Make Workflows", "REST APIs", "Python"].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono bg-slate-950 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= CONTACT SECTION WITH GITHUB & LINKEDIN ================= */}
        <section id="contact" className="w-full rounded-2xl border border-slate-800 bg-slate-900/80 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Available for enterprise network engineering, cybersecurity consulting, or AI workflow automation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:aslambasha557@gmail.com"
              className="inline-flex items-center space-x-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all shadow-lg shadow-cyan-600/20 active:scale-95"
            >
              <Mail className="h-4 w-4" />
              <span>aslambasha557@gmail.com</span>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 transition-all active:scale-95"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 transition-all active:scale-95"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>

            <a
              href="/resume.pdf"
              download="Aslam_Basha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 transition-all active:scale-95"
            >
              <FileText className="h-4 w-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}