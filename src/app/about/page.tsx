"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  BrainCircuit,
  FileText,
  ArrowLeft,
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

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-100 py-8 sm:py-12">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-600/10 blur-[150px]" />
        <div className="absolute top-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      {/* Fluid Widescreen Container */}
      <div className="relative w-full max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        
        {/* ================= NAVIGATION ================= */}
        <nav className="flex items-center justify-between border-b border-slate-800/80 pb-6 w-full">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Main Page (Projects)</span>
          </Link>

          <div className="flex items-center space-x-3">
            <a
              href="/resume.pdf"
              download="Aslam_Basha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-lg bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 border border-slate-700 transition-all active:scale-95"
            >
              <FileText className="h-3.5 w-3.5 text-cyan-400" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-4 py-2 text-xs font-semibold text-white transition-all shadow-md shadow-cyan-600/20 active:scale-95"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact Me</span>
            </a>
          </div>
        </nav>

        {/* ================= BIO & PASSPORT PHOTO ================= */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 w-full border-b border-slate-800/80 pb-12">
          
          {/* Passport Size Photo Frame */}
          <div className="flex-shrink-0 flex flex-col items-center space-y-3">
            <div className="relative w-40 h-52 sm:w-48 sm:h-64 rounded-xl overflow-hidden border-2 border-cyan-500/40 bg-slate-900 shadow-2xl shadow-cyan-950/60 group">
              <img
                src="/image_86b341.png"
                alt="Aslam Basha - Passport Photo"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = "none";
                }}
              />
            </div>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
              Aslam Basha
            </span>
          </div>

          {/* Bio & Details */}
          <div className="space-y-6 flex-1 text-center md:text-left">
            <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
              PROFESSIONAL BACKGROUND & BIO
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Aslam Basha <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Network Engineer & AI Security Specialist
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              Currently working as a <strong>Network Engineer at MAP (Museum of Art & Photography)</strong>, I bridge enterprise{" "}
              <strong>Cisco infrastructure (CCNP / CCNA)</strong>, <strong>Cybersecurity & SOC defense</strong>, and{" "}
              <strong>AI-driven operational automation</strong>. By deploying autonomous AI agents, private RAG engines, and automated network troubleshooting workflows, I help organizations reduce ticket turnaround times, optimize LAN/WAN topology, and secure critical infrastructure without data compromise.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="https://github.com/aslambasha557"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 transition-all"
              >
                <GithubIcon />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aslam-basha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 transition-all"
              >
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href="/resume.pdf"
                download="Aslam_Basha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all shadow-lg shadow-cyan-600/20"
              >
                <FileText className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>

        </section>

        {/* ================= WORK EXPERIENCE ================= */}
        <section className="space-y-6 w-full">
          <div className="border-b border-slate-800 pb-4">
            <p className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">CAREER ROADMAP</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Work Experience</h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">Network Engineer</h3>
                <p className="text-sm text-cyan-400 font-medium">MAP (Museum of Art & Photography)</p>
              </div>
              <span className="text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1 rounded-md w-fit">
                Present Role
              </span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside leading-relaxed pt-2">
              <li>Managing enterprise Cisco LAN/WAN core switches, routers, VLAN segmentation, and SD-WAN architecture.</li>
              <li>Performing real-time network troubleshooting, BGP/OSPF routing audits, and incident resolution.</li>
              <li>Deploying automated log monitoring and custom Python triage scripts to accelerate enterprise ticket turnaround times.</li>
              <li>Integrating air-gapped private AI solutions for secure internal documentation search and SOC threat analysis.</li>
            </ul>
          </div>
        </section>

        {/* ================= CERTIFICATIONS ================= */}
        <section className="space-y-8 w-full">
          <div className="border-b border-slate-800 pb-4">
            <p className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">VERIFIED CREDENTIALS</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Accreditations & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            
            {/* B10X CERT */}
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <BrainCircuit className="h-5 w-5" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">B10x Accreditation</span>
                </div>
                <h3 className="text-2xl font-bold text-white">AI Career Accelerator Certification</h3>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">AI Agents & Autonomous Systems:</strong> Multi-agent workflow automation, API tool-calling, and custom agent deployment.</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">AI Visual Dashboards:</strong> Napkin AI, Power BI, and interactive web application builds.</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">Ecosystem Mastery:</strong> Vector search databases, local air-gapped LLMs, and prompt engineering.</div>
                </div>
              </div>
            </div>

            {/* CISCO CERT */}
            <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/70 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-indigo-400">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider">Cisco & Security Stack</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Networking & Cybersecurity Credentials</h3>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">CCNP Enterprise Core:</strong> Advanced routing/switching, WAN architecture, BGP, OSPF, and fabric design.</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">CCNA Enterprise Networking:</strong> LAN switching, VLAN segmentation, wireless controllers, IPv4/IPv6 subnetting.</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">SOC Operations & Pen Testing:</strong> Security log monitoring, vulnerability assessments, and threat mitigation.</div>
                </div>
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
              href="https://github.com/aslambasha557"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-900 px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 transition-all active:scale-95"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aslam-basha"
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