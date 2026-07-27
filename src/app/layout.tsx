import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aslam Basha | Network Engineer & AI Security Specialist",
  description:
    "10+ years of experience in Enterprise Network Architecture, Cisco LAN/WAN, SOC Security Automation, and Local RAG Engines.",
  keywords: [
    "Network Engineering",
    "CCNP",
    "CCNA",
    "SOC Automation",
    "n8n",
    "Qdrant",
    "Ollama",
    "RAG Architecture",
    "Aslam Basha",
  ],
  authors: [{ name: "Aslam Basha" }],
  openGraph: {
    title: "Aslam Basha | Enterprise Network & Security Portfolio",
    description:
      "Automated SOC vulnerability pipelines, Network Incident AI Agents, and local RAG architectures.",
    url: "https://your-portfolio.vercel.app", // Replace with your actual live Vercel domain
    siteName: "Aslam Basha Portfolio",
    images: [
      {
        url: "/image_86b341.png",
        width: 1200,
        height: 630,
        alt: "Aslam Basha Executive Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aslam Basha | Network Engineer & AI Security Specialist",
    description: "10+ Years in Enterprise Infrastructure & AI Automation",
    images: ["/image_86b341.png"],
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