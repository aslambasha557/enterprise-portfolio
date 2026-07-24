import React from "react";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  Cpu,
  Clock,
  CheckCircle2,
  BrainCircuit,
  Workflow,
  Server,
  FileText,
  ArrowLeft,
  Mail,
  Zap,
  Terminal,
  Lock,
  Briefcase,
  UserCheck,
  Image as ImageIcon,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 py-8 sm:py-12">
      {/* Background Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16">
        
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

        {/* ================= HERO PROFILE & PHOTOS SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-400">
              <UserCheck className="h-3.5 w-3.5" />
              <span>Professional Bio & Experience Roadmap</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Aslam Basha <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                Network Engineer & AI Security Specialist
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Currently serving as a <strong>Network Engineer at MAP</strong>, I combine years of 
              <strong> Cisco enterprise networking (CCNP Core / CCNA)</strong>, <strong>SOC cybersecurity defense</strong>, and 
              <strong> AI agent automation</strong>. My focus is engineering high-availability LAN/WAN infrastructure and automating enterprise workflows using air-gapped LLMs and multi-agent systems.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
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
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 rounded-lg bg-slate-900 border border-slate-700 hover:bg-slate-800 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 transition-all"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* GALLERY / PHOTO CARDS */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3 w-full">
            <div className="col-span-2 rounded-2xl border border-cyan-500/30 bg-slate-900 p-2 overflow-hidden shadow-xl">
              <img
                src="/image_86b341.png"
                alt="Aslam Basha Network Engineer"
                className="w-full h-48 sm:h-56 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-1.5 overflow-hidden">
              <img
                src="/image_87903c.jpg"
                alt="Certification Credentials"
                className="w-full h-28 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-1.5 overflow-hidden">
              <img
                src="/image_8793e3.png"
                alt="AI Stack Architecture"
                className="w-full h-28 object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </div>

        </section>

        {/* ================= WORK EXPERIENCE TIMELINE ================= */}
        <section className="space-y-6 w-full">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
            <Briefcase className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Work Experience</h2>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-white">Network Engineer</h3>
                <p className="text-sm text-cyan-400 font-medium">MAP (Management & Professional Services)</p>
              </div>
              <span className="text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 px-3 py-1 rounded-full w-fit">
                Present Role
              </span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside leading-relaxed pt-2">
              <li>Managing and maintaining enterprise Cisco LAN/WAN networks, switches, routers, and SD-WAN architecture.</li>
              <li>Performing real-time network troubleshooting, VLAN segmentation, BGP/OSPF routing audits, and incident escalation.</li>
              <li>Deploying automated log monitoring and custom Python triage scripts to reduce resolution times across enterprise tickets.</li>
              <li>Integrating secure, air-gapped private AI tools for internal network documentation search and SOC threat analysis.</li>
            </ul>
          </div>
        </section>

        {/* ================= VERIFIED CERTIFICATIONS ================= */}
        <section className="space-y-8 w-full">
          <div className="space-y-2 border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Verified Certifications</h2>
            <p className="text-slate-400 text-sm">Formal accreditations in Enterprise Networking, Cybersecurity, and Applied Artificial Intelligence.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            
            {/* CERT CARD 1: B10X AI CAREER ACCELERATOR */}
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/70 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                Certified AI Specialist
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <BrainCircuit className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">B10x Accreditation</span>
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
                  <div><strong className="text-white">AI Product Building & Visuals:</strong> Visual dashboards (Napkin AI, Power BI) and functional web apps.</div>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div><strong className="text-white">Ecosystem Mastery:</strong> Enterprise LLMs, local air-gapped vector search, and advanced prompt engineering.</div>
                </div>
              </div>
            </div>

            {/* CERT CARD 2: CISCO & SECURITY */}
            <div className="rounded-2xl border border-indigo-500/30 bg-slate-900/70 p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                Infrastructure & SOC
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-indigo-400">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Cisco & Security Stack</span>
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

        {/* ================= CONTACT ME SECTION ================= */}
        <section id="contact" className="w-full rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-white">Let's Connect & Collaborate</h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Available for enterprise network engineering roles, cybersecurity consulting, or AI workflow integration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="mailto:aslambasha557@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 px-8 py-3.5 text-sm font-semibold text-white transition-all shadow-lg shadow-cyan-600/20 active:scale-95"
            >
              <Mail className="h-4 w-4" />
              <span>aslambasha557@gmail.com</span>
            </a>

            <a
              href="/resume.pdf"
              download="Aslam_Basha_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 px-8 py-3.5 text-sm font-semibold text-slate-200 transition-all active:scale-95"
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