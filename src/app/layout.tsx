import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Base URL for metadata resolution across social platforms
const siteUrl = "https://enterprise-portfolio-5vvf.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aslam Basha | Network Engineer & AI Security Specialist",
  description:
    "10+ years of experience in Enterprise Network Architecture, Cisco LAN/WAN, SOC Security Automation, and Local RAG Engines.",
  keywords: [
    // Personal Brand & Role
    "Aslam Basha",
    "Aslam Basha Portfolio",
    "Aslam Basha Network Engineer",
    "Senior Network Engineer",
    "AI Security Specialist",
    "Enterprise Infrastructure Architect",

    // Enterprise Networking & Cisco
    "Network Engineering",
    "CCNP",
    "CCNA",
    "Cisco Core Routing",
    "Cisco Switching",
    "LAN/WAN Architecture",
    "BGP Routing",
    "OSPF Protocol",
    "SD-WAN Architecture",
    "Enterprise Network Security",

    // SOC Automation & Cybersecurity
    "SOC Automation",
    "Cybersecurity Defense",
    "SecOps Automation",
    "Vulnerability Management Pipelines",
    "Incident Response Automation",
    "Network Defense",
    "Air-Gapped Security Systems",
    "Threat Intelligence",

    // AI, Local RAG & Vector Databases
    "RAG Architecture",
    "Local RAG Engines",
    "Retrieval-Augmented Generation",
    "Air-Gapped AI Systems",
    "Ollama Integration",
    "Qdrant Vector Database",
    "Vector Search",
    "Local LLM Deployment",
    "Autonomous AI Agents",
    "Enterprise AI Workflows",

    // Automation & DevOps
    "n8n Automation",
    "n8n Workflows",
    "Network Automation",
    "DevSecOps",
    "Infrastructure Automation"
  ],
  authors: [{ name: "Aslam Basha" }],
  openGraph: {
    title: "Aslam Basha | Enterprise Network & Security Portfolio",
    description:
      "Automated SOC vulnerability pipelines, Network Incident AI Agents, and local RAG architectures.",
    url: siteUrl,
    siteName: "Aslam Basha Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aslam Basha Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aslam Basha | Network Engineer & AI Security Specialist",
    description: "10+ Years in Enterprise Infrastructure & AI Automation",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.className} min-h-screen w-full bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950`}
      >
        <div className="w-full min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}