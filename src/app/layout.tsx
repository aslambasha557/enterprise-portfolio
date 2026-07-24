import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Aslam Basha | Enterprise AI Architecture & Network Automation",
  description:
    "Enterprise consultant specializing in air-gapped private RAG AI platforms, SOAR security automation, and multi-vendor network orchestration.",
  keywords: [
    "Aslam Basha",
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
    title: "Aslam Basha | Enterprise AI Architecture & Network Automation",
    description:
      "Enterprise consultant specializing in air-gapped private RAG AI platforms, SOAR security automation, and multi-vendor network orchestration.",
    url: "https://enterprise-portfolio-5vvf.vercel.app",
    siteName: "Aslam Basha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aslam Basha | Enterprise AI Architecture & Network Automation",
    description:
      "Enterprise consultant specializing in air-gapped private RAG AI platforms, SOAR security automation, and multi-vendor network orchestration.",
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
      </body>
    </html>
  );
}