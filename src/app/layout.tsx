import type { Metadata } from "next";
import Script from "next/script";
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
  title: "Aslam Basha | Enterprise AI & Network Automation Architect",
  description:
    "Portfolio of Aslam Basha specializing in cloud-native architectures, enterprise network automation, and AI infrastructure solutions.",
  keywords: [
    "Aslam Basha",
    "Network Automation",
    "AI Architect",
    "Cloud Native",
    "DevOps",
    "Enterprise Portfolio",
  ],
  authors: [{ name: "Aslam Basha" }],
  creator: "Aslam Basha",
  openGraph: {
    title: "Aslam Basha | Enterprise AI & Network Automation Architect",
    description:
      "Specializing in cloud-native architectures, enterprise network automation, and AI infrastructure solutions.",
    url: "https://enterprise-portfolio-5vvf.vercel.app",
    siteName: "Aslam Basha Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aslam Basha - Enterprise Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aslam Basha | Enterprise AI & Network Automation Architect",
    description:
      "Specializing in cloud-native architectures, enterprise network automation, and AI infrastructure solutions.",
    images: ["/og-image.png"],
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
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-0000000000000000"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}