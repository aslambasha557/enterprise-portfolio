import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aslam Basha | Network Engineer & AI Security Specialist",
    template: "%s | Aslam Basha",
  },
  description:
    "Portfolio & Bio of Aslam Basha — Network Engineer at MAP specializing in Cisco Infrastructure (CCNP/CCNA), Cybersecurity, SOC Operations, and Air-Gapped AI Systems.",
  keywords: [
    "Aslam Basha",
    "Network Engineer",
    "AI Security Specialist",
    "CCNP Enterprise",
    "CCNA",
    "Cybersecurity",
    "SOC Operations",
    "Air-Gapped AI",
    "Autonomous AI Agents",
    "Private RAG",
    "MAP Network Engineer",
  ],
  authors: [{ name: "Aslam Basha" }],
  creator: "Aslam Basha",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aslam Basha | Network Engineer & AI Security Specialist",
    description:
      "Bridging Cisco enterprise infrastructure, cybersecurity defense, and autonomous AI-driven network automation.",
    siteName: "Aslam Basha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aslam Basha | Network Engineer & AI Security Specialist",
    description:
      "Enterprise infrastructure, cybersecurity defense, and autonomous AI-driven network automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617", // slate-950 background sync
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
        className={`${inter.className} min-h-screen w-full bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden`}
      >
        {/* Full-width container that prevents squishing/centering issues */}
        <div className="relative flex min-h-screen w-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}