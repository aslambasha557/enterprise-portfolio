import React from 'react';
import { 
  ShieldCheck, 
  Brain, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  ArrowUpRight, 
  Mail, 
  Server, 
  Globe, 
  ExternalLink,
  Code2,
  Lock,
  Layers
} from 'lucide-react';

// Custom SVG components for brand logos
const GithubIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between border-b border-slate-800 pb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-wider text-white">
              ASLAM BASHA <span className="text-cyan-400 text-sm font-normal">| Enterprise Consultant</span>
            </span>
          </div>
          
          {/* Quick Social & Contact Bar */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/aslambasha557" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/aslambasha" 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a 
              href="mailto:aslambasha557@gmail.com" 
              className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="space-y-6 pt-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Architecting Next-Gen Infrastructure</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Enterprise AI Architecture & <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Network Security Automation
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            With <strong className="text-white font-semibold">over a decade of hands-on enterprise experience</strong>, 
            I design and deploy resilient on-premises RAG AI platforms, SOAR security pipelines, and multi-vendor network automation engines for mission-critical operations.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
              <p className="text-2xl font-bold text-cyan-400">10+ Years</p>
              <p className="text-xs text-slate-400">Enterprise Experience</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
              <p className="text-2xl font-bold text-blue-400">Air-Gapped</p>
              <p className="text-xs text-slate-400">Private AI & Vector DBs</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
              <p className="text-2xl font-bold text-purple-400">Zero-Trust</p>
              <p className="text-xs text-slate-400">Automated SOAR Pipelines</p>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
              <p className="text-2xl font-bold text-emerald-400">Multi-OS</p>
              <p className="text-xs text-slate-400">Windows & Linux Ready</p>
            </div>
          </div>
        </section>

        {/* Flagship Architectures Section */}
        <section className="space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
              <Layers className="text-cyan-400 w-7 h-7" />
              Production Solutions & Flagship Repositories
            </h2>
            <p className="text-slate-400 text-sm">
              Enterprise platforms architected for security, scalability, and zero external data leaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1: AI Knowledge Hub */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
                    <Brain className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">Private RAG Architecture</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Enterprise AI Knowledge Hub
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  An air-gapped, RBAC-compliant Retrieval-Augmented Generation (RAG) platform indexing corporate knowledge repositories with local LLMs and vector databases.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700">Qdrant Vector DB</span>
                  <span className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700">Ollama LLM</span>
                  <span className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700">n8n Orchestration</span>
                  <span className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700">PostgreSQL</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <a 
                  href="https://github.com/aslambasha557/enterprise-ai-knowledge-hub" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Explore Repository</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Project 2: Vulnerability Management */}
            <div className="group bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-purple-500/5">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">SOAR & Security</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  Automated Vulnerability Platform
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Continuous infrastructure threat scanning and SOAR pipeline. Scans internal enterprise subnets, evaluates risk indices, and dispatches automated telemetry.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700">OpenVAS / Nmap</span>
                  <span className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700">Python Automation</span>
                  <span className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700">Docker Engine</span>
                  <span className="px-2.5 py-1 text-xs bg-slate-800 text-slate-300 rounded-md border border-slate-700">Slack/ITS Webhooks</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <a 
                  href="https://github.com/aslambasha557/automated-vulnerability-management-platform" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-purple-400 hover:text-purple-300"
                >
                  <span>Explore Repository</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* OS & Infrastructure Deployment Section */}
        <section className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Terminal className="text-cyan-400 w-6 h-6" />
              Cross-Platform OS Execution Guide
            </h2>
            <p className="text-slate-400 text-sm">
              All infrastructure pipelines are validated for seamless execution across Windows (PowerShell/WSL2) and Enterprise Linux (Ubuntu/RHEL).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Windows Tab */}
            <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-300 font-sans font-semibold border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-400" /> Windows Environment (PowerShell)
                </span>
                <span className="text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">Docker Desktop / WSL2</span>
              </div>
              <p className="text-slate-400 font-sans text-xs">Clone and launch solution stack in PowerShell:</p>
              <pre className="bg-slate-900 p-3 rounded text-cyan-300 overflow-x-auto leading-relaxed">
{`# 1. Clone standard repository
git clone https://github.com/aslambasha557/enterprise-ai-knowledge-hub.git
cd enterprise-ai-knowledge-hub

# 2. Launch containerized services
docker-compose up -d --build`}
              </pre>
            </div>

            {/* Linux Tab */}
            <div className="p-5 bg-slate-950 border border-slate-800 rounded-xl space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-300 font-sans font-semibold border-b border-slate-800 pb-2">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" /> Linux Environment (Bash)
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">Ubuntu / RHEL / Debian</span>
              </div>
              <p className="text-slate-400 font-sans text-xs">Deploy background daemon services on Linux server:</p>
              <pre className="bg-slate-900 p-3 rounded text-emerald-300 overflow-x-auto leading-relaxed">
{`# 1. Clone and enter directory
git clone https://github.com/aslambasha557/enterprise-ai-knowledge-hub.git
cd enterprise-ai-knowledge-hub

# 2. Start detached orchestration daemon
sudo docker compose up -d`}
              </pre>
            </div>

          </div>
        </section>

        {/* Contact & Engagement Section */}
        <section className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-purple-950/40 border border-cyan-500/20 rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Ready to Automate & Secure Your Infrastructure?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Whether you need custom RAG deployment, network security automation, or multi-vendor enterprise orchestration, let's connect and build it right.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <a 
              href="mailto:aslambasha557@gmail.com" 
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/20"
            >
              <Mail className="w-5 h-5" />
              <span>Send Direct Email</span>
            </a>

            <a 
              href="https://linkedin.com/in/aslambasha" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold transition-all"
            >
              <LinkedinIcon className="w-5 h-5 text-blue-400" />
              <span>Connect on LinkedIn</span>
            </a>

            <a 
              href="https://github.com/aslambasha557" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold transition-all"
            >
              <GithubIcon className="w-5 h-5" />
              <span>GitHub Repositories</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Aslam Basha. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Enterprise AI Architecture</span>
            <span>•</span>
            <span>Network Security Automation</span>
          </div>
        </footer>

      </div>
    </div>
  );
}