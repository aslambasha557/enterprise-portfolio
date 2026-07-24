'use client';

import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  metrics: string[];
  tags: string[];
  architecture: string;
  challenges: string;
  solution: string;
}

const projects: Project[] = [
  {
    id: 'ai-net-auto',
    title: 'Zero-Trust Network Automation Pipeline',
    category: 'Network Security & Automation',
    summary: 'Automated CI/CD pipeline for enterprise firewall policy enforcement and network infrastructure state management.',
    metrics: ['70% reduction in policy provisioning time', 'Zero unmanaged firewall drift across 500+ nodes'],
    tags: ['Ansible', 'Python', 'Terraform', 'NetBox', 'GitLab CI/CD'],
    architecture: 'Centralized Infrastructure as Code (IaC) repository triggering automated validation pipelines via GitLab CI/CD, interacting with NetBox SSOT and applying configurations dynamically across Palo Alto / Cisco nodes.',
    challenges: 'Legacy manual change controls caused compliance audit delays and human errors during multi-region rule pushes.',
    solution: 'Designed declarative git-ops workflows using Ansible and NetBox webhook triggers to validate pre-push rule integrity and automate rollback triggers.'
  },
  {
    id: 'ai-llm-infra',
    title: 'Enterprise AI Inference & Vector Search Stack',
    category: 'AI Infrastructure & MLOps',
    summary: 'High-throughput private LLM inference architecture utilizing Docker containerization and vector search.',
    metrics: ['Sub-150ms P95 query response time', '45% infrastructure cost savings via container autoscaling'],
    tags: ['Docker', 'vLLM', 'Qdrant', 'PyTorch', 'Next.js'],
    architecture: 'Distributed GPU worker nodes running vLLM containers, orchestrated via Docker Swarm/Kubernetes, backed by Qdrant vector database for high-concurrency RAG queries.',
    challenges: 'Managing cold-start latencies and resource contention during high concurrent prompt requests.',
    solution: 'Implemented queue-based batching and optimized model quantization strategies to maximize token-per-second output per server.'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
        Featured Architectures & Case Studies
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Click on any architecture to review detailed design choices, security models, and measurable business impact.
      </p>

      {/* Grid List */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-500 transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-3 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.summary}
              </p>
            </div>

            <div>
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1">
                View Architecture Breakdown &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Detailed Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full p-6 border border-gray-200 dark:border-gray-800 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white font-bold text-xl"
            >
              &times;
            </button>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              {selectedProject.category}
            </span>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3 mb-4">
              {selectedProject.title}
            </h3>

            {/* Metrics */}
            <div className="mb-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50">
              <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">Quantified Business Impact</h4>
              <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-200 space-y-1">
                {selectedProject.metrics.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>
            </div>

            {/* Architecture Details */}
            <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Architecture Overview</h4>
                <p className="mt-1">{selectedProject.architecture}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">The Challenge</h4>
                <p className="mt-1">{selectedProject.challenges}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Engineering Solution</h4>
                <p className="mt-1">{selectedProject.solution}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 text-right">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg text-sm font-medium transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}