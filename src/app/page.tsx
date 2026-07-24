import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Header / Navigation */}
      <header className="relative z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-wider text-slate-100 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-blue-500 animate-pulse"></span>
            ASLAM BASHA <span className="text-slate-500 text-sm font-normal">| Enterprise AI Architect</span>
          </Link>
          <nav className="flex gap-6 text-sm text-slate-400 font-medium">
            <Link href="#solutions" className="hover:text-blue-400 transition-colors">Solutions</Link>
            <Link href="#case-studies" className="hover:text-blue-400 transition-colors">Case Studies</Link>
            <Link href="#about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link href="#contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-8">
          Enterprise Security & AI Automation
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Architecting Secure AI Knowledge Engines & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Autonomous SOAR Pipelines</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Bridging <strong className="text-slate-200 font-semibold">9+ years of Network Security infrastructure</strong> expertise with modern private vector stores, automated threat scanning, and enterprise orchestration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#case-studies" className="px-6 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-500/20">
            View Technical Case Studies
          </Link>
          <Link href="#contact" className="px-6 py-3.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold transition-all">
            Schedule Architecture Discovery Call
          </Link>
        </div>
      </section>

      {/* Trust & Capability Matrix Banner */}
      <section className="border-y border-slate-800/80 bg-slate-900/40 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-white">9+ Years</div>
            <div className="text-xs text-slate-400 mt-1">Network & Security Infrastructure</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">Air-Gapped AI</div>
            <div className="text-xs text-slate-400 mt-1">Zero Third-Party Data Leakage</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">Continuous SOAR</div>
            <div className="text-xs text-slate-400 mt-1">VLAN Footprint Threat Scanning</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-400">100% Production Ready</div>
            <div className="text-xs text-slate-400 mt-1">Containerized & API Orchestrated</div>
          </div>
        </div>
      </section>

      {/* Flagship Solutions / Case Studies Section */}
      <section id="case-studies" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-2">Flagship Solutions</h2>
        <p className="text-slate-400 mb-12">Production-tested architectural blueprints ready for enterprise deployment.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="border border-slate-800 rounded-xl bg-slate-900/50 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="text-xs font-semibold uppercase text-blue-400 tracking-wider mb-2">Enterprise AI Architecture</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise AI Knowledge Hub</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                An air-gapped, zero-trust RAG pipeline utilizing Qdrant vector databases and local LLMs (Ollama) to synthesize internal enterprise documentation without cloud dependencies.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 mb-8">
                <li className="flex items-center gap-2">✔ High-density semantic search via vector embeddings</li>
                <li className="flex items-center gap-2">✔ On-prem / isolated container deployment (Docker/n8n)</li>
                <li className="flex items-center gap-2">✔ Enterprise governance & RBAC compliance</li>
              </ul>
            </div>
            <a 
              href="https://github.com/aslambasha557/enterprise-ai-knowledge-hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              Explore Architecture on GitHub →
            </a>
          </div>

          {/* Card 2 */}
          <div className="border border-slate-800 rounded-xl bg-slate-900/50 p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
            <div>
              <div className="text-xs font-semibold uppercase text-indigo-400 tracking-wider mb-2">Cybersecurity SOAR Pipeline</div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Vulnerability Management</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Continuous vulnerability scanning engine across multi-VLAN enterprise subnets. Features non-blocking OAuth2 token management, automated status polling, and anomaly alerting.
              </p>
              <ul className="text-xs text-slate-300 space-y-2 mb-8">
                <li className="flex items-center gap-2">✔ Multi-VLAN dynamic footprint scanning</li>
                <li className="flex items-center gap-2">✔ Automated OAuth2 token lifecycle negotiation</li>
                <li className="flex items-center gap-2">✔ Noise suppression & targeted incident telemetry</li>
              </ul>
            </div>
            <a 
              href="https://github.com/aslambasha557/automated-vulnerability-management-platform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300"
            >
              Explore Pipeline on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Aslam Basha. Enterprise AI & Security Architecture. All rights reserved.
      </footer>
    </main>
  );
}