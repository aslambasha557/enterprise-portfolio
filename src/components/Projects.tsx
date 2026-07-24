import React from 'react';

export function SOCProjectCard() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-slate-700">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          Cybersecurity & Automation
        </span>
        <a 
          href="https://github.com/aslambasha557/enterprise-ai-knowledge-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-slate-400 hover:text-white transition-colors"
        >
          View GitHub →
        </a>
      </div>

      <h3 className="mt-3 text-xl font-bold text-white">
        Production SOC Automated Vulnerability Management Matrix Pipeline
      </h3>

      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
        An enterprise Security Operations Center (SOC) orchestration pipeline built to automate continuous network scanning, REST API authentication, non-blocking polling, and instant SMTP security alerts.
      </p>

      {/* Tech Stack Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["n8n", "FastAPI", "Docker", "OAuth2", "SMTP", "REST API"].map((tag) => (
          <span 
            key={tag}
            className="rounded-md bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-700/50"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Key Features Bullet List */}
      <ul className="mt-5 space-y-2 text-xs text-slate-400">
        <li className="flex items-start">
          <span className="mr-2 text-cyan-400">▸</span>
          <b>Dual Scheduling Logic:</b> Hourly & monthly execution triggers with First-Monday suppression shields.
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-cyan-400">▸</span>
          <b>Automated Auth:</b> Bearer JWT negotiation with host scanning engine endpoints.
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-cyan-400">▸</span>
          <b>Dynamic Polling:</b> Asynchronous 20s polling loop for non-blocking scan tracking.
        </li>
      </ul>
    </div>
  );
}