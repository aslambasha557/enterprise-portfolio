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
  Network,
  Server,
  FileText,
  ArrowLeft,
  Mail,
  Zap,
  Sparkles,
  ChevronRight,
  Terminal,
  Lock,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* ================= NAVIGATION BAR ================= */}
        <nav className="flex items-center justify-between border-b border-slate-800/80 pb-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center space-x-3">
            <a
              href="/resume.pdf"
              download="Aslam_Basha_Resume.pdf"
              className="inline-flex items-center space-x-2 rounded-lg bg-slate-900 hover:bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-slate-200 border border-slate-700 transition-all"
            >
              <FileText className="h-3.5 w-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-3.5 py-1.5 text-xs font-semibold text-white transition-all shadow-md shadow-cyan-600/20"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>Contact</span>
            </a>
          </div>
        </nav>

        {/* ================= HERO HEADER & PROFESSIONAL BIO ================= */}
        <section className="space-y-6">
          <div className="inline-flex items-center space-x-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
            <Award className="h-3.5 w-3.5" />
            <span>Professional Certification Bio & Ecosystem Matrix</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Aslam Basha <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Network Engineer & AI Security Specialist
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-4xl">
            Currently working as a <strong>Network Engineer at MAP</strong>, I bridge the gap between 
            <strong> enterprise Cisco infrastructure (CCNP / CCNA)</strong>, <strong>Cybersecurity & SOC defense</strong>, and 
            <strong> AI-driven operational automation</strong>. By deploying autonomous AI agents, private RAG engines, and automated network troubleshooting workflows, I help organizations reduce ticket turnaround times, optimize LAN/WAN topology, and secure critical infrastructure without data compromise.
          </p>
        </section>

        {/* ================= HOOKING SECTION: WHY WORK WITH ME & SAVINGS ROI ================= */}
        <section className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 via-slate-900/60 to-slate-950 p-6 sm:p-8 space-y-6">
          <div className="flex items-center space-x-3 border-b border-slate-800 pb-4">
            <Clock className="h-6 w-6 text-cyan-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Why Partner With Me?</h2>
              <p className="text-xs text-slate-400">Measurable ROI, Time Savings, & Reduced Operational Friction</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                <Zap className="h-4 w-4" />
                <span>Save 15+ Hours / Week</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                By automating repetitive tasks like topology audits, log summary generation, and routine ticket triage using custom Python scripts and AI agent workflows (Make/Zapier).
              </p>
            </div>

            <div className="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
              <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm">
                <Lock className="h-4 w-4" />
                <span>Zero Data Leakage Security</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Implementation of air-gapped private AI solutions (Msty, Ollama, NotebookLM) for internal documentation search without exposing enterprise IP to public cloud LLMs.
              </p>
            </div>

            <div className="space-y-2 rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <Terminal className="h-4 w-4" />
                <span>75% Faster MTTR</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Combining CCNP-level network troubleshooting with AI SOC analytics to identify root causes in complex LAN/WAN/SD-WAN outages in minutes rather than hours.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CERTIFICATION BIO & ACCREDITATION ================= */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">Verified Certifications & Accelerators</h2>
            <p className="text-slate-400 text-sm">Formal accreditations across Enterprise Networking, Security, and Applied Artificial Intelligence.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* CARD 1: B10x AI CAREER ACCELERATOR */}
            <div className="rounded-xl border border-cyan-500/30 bg-slate-900/70 p-6 space-y-6 relative overflow-hidden shadow-xl shadow-cyan-950/20">
              <div className="absolute top-0 right-0 bg-cyan-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                Certified AI Specialist
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <BrainCircuit className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">B10x Accreditation</span>
                </div>
                <h3 className="text-2xl font-bold text-white">AI Career Accelerator Certification</h3>
                <p className="text-xs text-slate-400">
                  An intensive executive program focused on deploying autonomous AI agents, building enterprise AI products, and leveraging advanced AI ecosystems.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Completed Curriculum Modules:</h4>
                
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">AI Agents & Autonomous Systems:</strong> Multi-agent workflow automation, API tool-calling, and custom agent deployment.
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">AI Product Building, Storytelling & Analytics:</strong> Turning raw data into visual dashboards (Napkin AI, Power BI) and functional web apps.
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">AI Fundamentals & Ecosystem Mastery:</strong> In-depth hands-on mastery of LLMs, vector search, prompt architecture, and context engineering.
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">AI Branding & Executive Leadership:</strong> Leading enterprise AI adoption, governance, and secure integration strategy.
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Career Readiness & Capstone Phase:</strong> Real-world production deployment and end-to-end operational showcase.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: CISCO & CYBERSECURITY CREDENTIALS */}
            <div className="rounded-xl border border-indigo-500/30 bg-slate-900/70 p-6 space-y-6 relative overflow-hidden shadow-xl shadow-indigo-950/20">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                Infrastructure & SOC
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-indigo-400">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Cisco & Security Stack</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Networking & Cybersecurity Credentials</h3>
                <p className="text-xs text-slate-400">
                  Enterprise-grade network engineering expertise backed by Cisco architectures, Active Directory administration, and penetration testing skills.
                </p>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Core Infrastructure Competencies:</h4>
                
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">CCNP Enterprise Core:</strong> Advanced routing/switching, WAN architecture, BGP, OSPF, and fabric design.
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">CCNA Enterprise Networking:</strong> LAN switching, VLAN segmentation, wireless controllers, IPv4/IPv6 subnetting.
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">SD-WAN & Multi-Vendor WAN:</strong> Traffic orchestration, path optimization, and edge gateway management.
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">SOC Operations & Penetration Testing:</strong> AI-augmented security log monitoring, vulnerability assessments, and threat mitigation.
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Windows Server & Active Directory:</strong> Domain Controller setup, GPO policy management, and enterprise identity control.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= FULL HANDS-ON AI TOOL STACK ================= */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">Hands-On AI Tool Ecosystem</h2>
            <p className="text-slate-400 text-sm">
              Tools actively utilized for workflow automation, enterprise research, productivity coaching, and content creation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Category 1 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                <Workflow className="h-4 w-4" />
                <span className="text-white">AI Agents & Workflow Automation</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-cyan-400" /><span><strong>Make / Zapier:</strong> Multi-step automated pipelines</span></li>
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-cyan-400" /><span><strong>Vapi:</strong> Advanced Voice AI Agent construction</span></li>
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-cyan-400" /><span><strong>Hugging Face & Emergent AI:</strong> Model testing</span></li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
              <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm">
                <Cpu className="h-4 w-4" />
                <span className="text-white">LLMs & Air-Gapped Private AI</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-indigo-400" /><span><strong>Msty:</strong> Secure private local LLM interface</span></li>
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-indigo-400" /><span><strong>NotebookLM & Claude 3.5:</strong> Enterprise analysis</span></li>
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-indigo-400" /><span><strong>ChatGPT & Perplexity:</strong> Deep search intelligence</span></li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                <BrainCircuit className="h-4 w-4" />
                <span className="text-white">Research & Data Analytics</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-emerald-400" /><span><strong>Consensus, Litmaps, Elicit:</strong> Academic research</span></li>
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-emerald-400" /><span><strong>Power BI & Advanced Excel:</strong> Executive reporting</span></li>
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-emerald-400" /><span><strong>Python Scripts:</strong> Custom data parsing & automation</span></li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 space-y-3">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
                <Sparkles className="h-4 w-4" />
                <span className="text-white">Visual AI & Business Storytelling</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-amber-400" /><span><strong>Napkin AI:</strong> Visual diagrams & technical storytelling</span></li>
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-amber-400" /><span><strong>Ideogram & Leonardo.Ai:</strong> Custom media generation</span></li>
                <li className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-amber-400" /><span><strong>Higgsfield & Supergrow:</strong> Visual brand assets</span></li>
              </ul>
            </div>

            {/* Category 5 */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 space-y-3 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-2 text-sky-400 font-bold text-sm">
                <Server className="h-4 w-4" />
                <span className="text-white">Career Readiness & Communication Enhancement</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-sky-400" /><span><strong>Yoodli:</strong> AI Speech & presentation coaching</span></div>
                <div className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-sky-400" /><span><strong>Cake AI & Interviews Chat:</strong> Technical career optimization</span></div>
                <div className="flex items-center space-x-2"><ChevronRight className="h-3 w-3 text-sky-400" /><span><strong>Mailmeteor / AI Writers:</strong> High-impact executive communications</span></div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= CALL TO ACTION FOOTER ================= */}
        <section id="contact" className="rounded-2xl border border-slate-800 bg-slate-900/80 p-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Let's Build Resilient Infrastructure Together</h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Whether you need enterprise network architecture, SD-WAN migration, SOC automation, or custom private AI integrations—I am ready to deliver.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="mailto:aslambasha557@gmail.com"
              className="inline-flex items-center space-x-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all shadow-lg shadow-cyan-600/20"
            >
              <Mail className="h-4 w-4" />
              <span>Send Direct Email</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}