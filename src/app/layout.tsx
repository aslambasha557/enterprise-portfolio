import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aslam Basha | Network Engineer & Cybersecurity Specialist",
  description:
    "Network Engineer at MAP specializing in CCNP/CCNA Enterprise LAN/WAN, SD-WAN, Cybersecurity, Penetration Testing, AI Network Security, SOC operations, and Automation.",
  keywords: [
    "Aslam Basha",
    "Network Engineer ",
    "CCNP",
    "CCNA",
    "Enterprise LAN/WAN",
    "SD-WAN",
    "Cybersecurity",
    "Penetration Testing",
    "AI Network Security",
    "SOC",
    "Windows Server & Active Directory",
    "Python",
    "Power BI",
    "Excel Mastery",
    "Automation",
    "Enterprise AI Architecture",
    "Private RAG",
    "Network Automation",
    "SOAR Security",
    "Cloud Native",
    "DevOps",
    "Qdrant",
    "Ollama",
  ],
  authors: [{ name: "Aslam Basha" }],
  creator: "Aslam Basha",
  openGraph: {
    title: "Aslam Basha | Network Engineer & Cybersecurity Specialist",
    description:
      "Network Engineer at MAP specializing in CCNP/CCNA Enterprise LAN/WAN, SD-WAN, Cybersecurity, Penetration Testing, AI Network Security, SOC operations, and Automation.",
    url: "https://enterprise-portfolio-5vvf.vercel.app",
    siteName: "Aslam Basha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aslam Basha | Network Engineer & Cybersecurity Specialist",
    description:
      "Network Engineer at MAP specializing in CCNP/CCNA Enterprise LAN/WAN, SD-WAN, Cybersecurity, Penetration Testing, AI Network Security, SOC operations, and Automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}