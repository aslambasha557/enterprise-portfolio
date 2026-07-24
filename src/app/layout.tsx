import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aslam Basha | Network Engineer & AI Security Specialist",
  description: "Enterprise Network Infrastructure, SOC Security & AI Automation Portfolio",
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
      <body className={`${inter.className} min-h-screen w-full bg-slate-950 text-slate-100 antialiased overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950`}>
        <div className="w-full min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}