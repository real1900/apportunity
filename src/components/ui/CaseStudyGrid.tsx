'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Sparkles, Database, Network, Combine, Activity, Video } from "lucide-react";

export interface CaseStudyData {
    id: string;
    client: string;
    logo: string;
    brandColor: string; // Tailwind hex or rgb string for glow/border
    title: string;
    challenge: string;
    architecture: string;
    metrics: string[];
    icon: React.ElementType;
}

const caseStudies: CaseStudyData[] = [
    {
        id: "apple-spear",
        client: "Apple Inc.",
        logo: "/clients/apple.svg",
        brandColor: "rgba(255, 255, 255, 0.4)", // Whiteish glow for Apple
        title: "Global Incident Intelligence (SPEAR)",
        challenge: "Developing a highly secure, modular architecture for global IT staff to track and report physical environment anomalies across manufacturing facilities.",
        architecture: "Engineered a Serverless CloudKit architecture with Edge-level wearable reporting (Apple Watch). Ensured strict organizational security constraints while maintaining sub-second synchronization latency globally.",
        metrics: ["15% reduction in Time-to-Resolution", "20,000+ Active Enterprise Users", "Modular OS-level Integration"],
        icon: Shield,
    },
    {
        id: "walmart",
        client: "Walmart",
        logo: "/clients/walmart.svg",
        brandColor: "rgba(0, 113, 206, 0.6)", // Walmart Blue
        title: "High-Scale Distributed Retail Systems",
        challenge: "Architecting a highly functional omni-channel platform competing in the world's most aggressive retail market, requiring intricate API choreographies for delivery logic.",
        architecture: "Built out intricate fulfillment pipelines (Pickup, Delivery, Shipping) utilizing modern mobile architectural patterns (Swift/Kotlin mapping to microservices). Validated via complex load balancing.",
        metrics: ["Millions in net-new revenue generated", "15% increase in user retention", "15M+ registered users in 6 months"],
        icon: Database,
    },
    {
        id: "amazon-frames",
        client: "Amazon",
        logo: "/clients/amazon.svg",
        brandColor: "rgba(255, 153, 0, 0.6)", // Amazon Orange
        title: "On-Device Conversational AI Integration",
        challenge: "Integrating massive, complex JavaScript-to-Native communication streams for Amazon Echo Frames to support real-time audio/voice processing over BLE.",
        architecture: "Deployed a bridging architecture utilizing Native Code Modules to bypass performance bottlenecks. Enabled real-time NLP/Voice pipelines to process ambient commands efficiently.",
        metrics: ["Sub-millisecond Native Bridge execution", "100k+ downloads week one", "15% increase daily transactions"],
        icon: Sparkles,
    },
    {
        id: "vance-hines",
        client: "Vance & Hines",
        logo: "/clients/vance and hines.svg",
        brandColor: "rgba(220, 38, 38, 0.6)", // Red
        title: "Edge Sensor Inference Pipelines",
        challenge: "Processing massive streams of live telemetry data from high-performance engine sensors over raw Bluetooth Low Energy (BLE) channels.",
        architecture: "Designed a high-throughput data processing pipeline mapping complex raw HEX sensor streams into real-time User Interfaces. Allowed for live performance tuning and predictive metric tracking.",
        metrics: ["150% Active User Growth", "Continuous 10Hz+ Telemetry Parsing", "20% YoY Sales Lift mapping to Software Experience"],
        icon: Activity,
    },
    {
        id: "korn-ferry",
        client: "Korn Ferry",
        logo: "/clients/kornferry.svg",
        brandColor: "rgba(16, 185, 129, 0.5)", // Greenish
        title: "Applied AI for Simulated Video",
        challenge: "Transforming standard video capture into an interactive, simulated environment capable of deep linguistic interaction.",
        architecture: "Integrated NLP and machine learning pipelines to analyze user sentiment, speech patterns, and vocabulary in real-time, functioning as an ambient intelligence layer during video capture.",
        metrics: ["10% higher success rate for candidates", "200k+ downloads Year 1", "Sub-second NLP processing loop"],
        icon: Video,
    }
];

export default function CaseStudyGrid() {
    return (
        <section className="w-full max-w-5xl mt-32 relative z-20">
            <div className="flex items-center gap-3 mb-10">
                <Network className="w-5 h-5 text-zinc-400" />
                <h2 className="text-2xl font-semibold">Enterprise Architecture Matrix</h2>
            </div>

            <div className="flex flex-col gap-12">
                {caseStudies.map((study, idx) => (
                    <motion.div
                        key={study.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="relative glass-panel overflow-hidden group border border-zinc-800/50 hover:border-zinc-700 transition-colors"
                        style={{
                            // Subtle brand-colored border glow on hover via CSS custom property trick
                            '--brand-glow': study.brandColor,
                        } as React.CSSProperties}
                    >
                        {/* The Brand Glow Background */}
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none transform translate-x-1/3 -translate-y-1/3"
                            style={{ backgroundColor: study.brandColor }}></div>

                        <div className="relative z-10 p-8 sm:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
                            {/* Left Column: Logo & Architecture */}
                            <div className="lg:w-1/3 flex flex-col justify-between">
                                <div>
                                    <div className="h-12 w-auto mb-8 relative flex items-center justify-start opacity-70 group-hover:opacity-100 transition-opacity">
                                        {/* We use standard img to easily handle SVGs, avoiding Next Image strict dimension rules if desired, but object-contain works */}
                                        <img
                                            src={study.logo}
                                            alt={study.client}
                                            className="max-h-12 w-auto object-contain drop-shadow-md"
                                            style={study.id === 'korn-ferry' ? { filter: 'invert(1) brightness(2)' } : undefined}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                                        {study.challenge}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
                                    <study.icon className="w-4 h-4 text-zinc-400" />
                                    <span className="text-xs font-mono font-medium text-zinc-300">SYSTEM ARCHITECTURE</span>
                                </div>
                            </div>

                            {/* Right Column: Technical specifics & Metrics */}
                            <div className="lg:w-2/3 flex flex-col justify-center">
                                <div className="border border-zinc-800/60 bg-zinc-950/50 rounded-xl p-6 mb-6">
                                    <p className="text-sm text-zinc-300 leading-relaxed font-mono">
                                        <span className="text-zinc-500">{'> '}</span>
                                        {study.architecture}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {study.metrics.map((metric, mIdx) => (
                                        <div key={mIdx} className="flex items-start gap-2">
                                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                                            <span className="text-xs text-zinc-400 leading-tight">{metric}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
