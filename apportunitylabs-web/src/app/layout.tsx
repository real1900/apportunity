import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apportunitylabs.ai"),
  title: {
    template: "%s | Apportunity Labs | AI Systems Architecture",
    default: "Apportunity Labs | AI Systems Architecture",
  },
  description: "Apportunity Labs: Led by Suleman Imdad (Johns Hopkins M.Sc. AI). Specialized in Edge AI, Autonomous Agents, and High-Scale Systems for Apple, Nike, and Amazon.",
  keywords: ["Principal AI Systems Architect", "Suleman Imdad", "Edge AI Specialist", "On-device RAG implementation", "YOLOv10 Edge Vision", "JHU AI Research", "Embodied Intelligence", "Parameter-Efficient Fine-Tuning"],
  authors: [{ name: "Suleman Imdad", url: "https://www.linkedin.com/in/suleman-imdad" }],
  creator: "Apportunity Labs",
  openGraph: {
    title: "Apportunity Labs | AI Systems Architecture",
    description: "Apportunity Labs: Led by Suleman Imdad (Johns Hopkins University M.Sc. AI). Specialized in Edge AI, Autonomous Agents, and High-Scale Systems for Apple, Nike, and Amazon.",
    url: "https://apportunitylabs.ai",
    siteName: "Apportunity Labs",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for dynamic social preview card
        width: 1200,
        height: 630,
        alt: "Apportunity Labs - AI Systems Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apportunity Labs | AI Systems Architecture",
    description: "Apportunity Labs: Led by Suleman Imdad (Johns Hopkins University M.Sc. AI). Specialized in Edge AI, Autonomous Agents, and High-Scale Systems.",
    creator: "@apportunity", // Placeholder
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://apportunitylabs.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="dark">
      <head>
        <SchemaMarkup />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50 min-h-screen selection:bg-emerald-500/30`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
