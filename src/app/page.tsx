import React from "react";
import Link from "next/link";
import {
  FileText,
  Mail,
  Shield,
  Cpu,
  Server,
  Award,
  ArrowRight,
  CheckCircle,
  Terminal,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Glow Effect */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Main Responsive Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 space-y-16">
        
        {/* HEADER / NAVIGATION */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/80 pb-6 w-full">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-lg">
              AB
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-wide">Aslam Basha</h1>
              <p className="text-xs text-slate-400">Network Engineer @ MAP</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-center sm:justify-end">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 rounded-lg bg-slate-900 hover:bg-slate-800 px-4 py-2.5 text-xs font-semibold text-cyan-400 border border-cyan-500/30 transition-all active:scale-95"
            >
              <Award className="h-4 w-4" />
              <span>Certifications & Bio</span>
            </Link>

            {/* Cross-Platform Resume Download Link */}
            <a
              href="/resume.pdf"
              download="Aslam_Basha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-white transition-all shadow-md shadow-cyan-600/20 active:scale-95"
            >
              <FileText className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-400">
            <Terminal className="h-3.5 w-3.5" />
            <span>Enterprise Infrastructure & Applied AI Security</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Architecting Resilient Networks &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Autonomous AI Systems
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Network Engineer specializing in enterprise Cisco core routing/switching, cybersecurity defense, and air-gapped AI automation. Accelerating MTTR and securing IT infrastructure with modern AI agent workflows.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 rounded-lg bg-white hover:bg-slate-200 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-950 transition-all active:scale-95"
            >
              <Mail className="h-4 w-4" />
              <span>Get In Touch</span>
            </a>
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 rounded-lg bg-slate-900 hover:bg-slate-800 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 border border-slate-700 transition-all active:scale-95"
            >
              <span>Explore AI Stack & Credentials</span>
              <ArrowRight className="h-4 w-4 text-cyan-400" />
            </Link>
          </div>
        </section>

        {/* CORE COMPETENCIES GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-3">
            <Server className="h-6 w-6 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Enterprise Networking</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              CCNP & CCNA core competency in BGP, OSPF, VLAN segmentation, WAN design, and multi-vendor LAN troubleshooting.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-3">
            <Shield className="h-6 w-6 text-indigo-400" />
            <h3 className="text-lg font-bold text-white">SOC & Cybersecurity</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Threat mitigation, log analysis, penetration testing methodologies, and air-gapped data protection workflows.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-3">
            <Cpu className="h-6 w-6 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">AI Agent Automation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Certified via B10x AI Career Accelerator in deploying multi-agent systems, private RAG, and automated ticket triage.
            </p>
          </div>
        </section>

        {/* CONTACT BANNER */}
        <section id="contact" className="rounded-2xl border border-cyan-500/20 bg-slate-900/80 p-8 text-center space-y-6 w-full">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to Discuss Infrastructure or AI Integration?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Reach out directly for consulting, enterprise network engineering, or AI operational deployments.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a
              href="mailto:aslambasha557@gmail.com"
              className="inline-flex items-center space-x-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-6 py-3 text-xs sm:text-sm font-semibold text-white transition-all shadow-lg shadow-cyan-600/20 active:scale-95"
            >
              <Mail className="h-4 w-4" />
              <span>aslambasha557@gmail.com</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}