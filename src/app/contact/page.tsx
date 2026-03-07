'use client';

import { motion, Variants } from "framer-motion";
import { Terminal, Shield, Lock, MapPin, Activity, Mail, ArrowRight, Server, Cpu, Database, Network } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    // Framer Motion Variants for the "Secure Hatch" mechanical sliding effect
    const hatchVariants: Variants = {
        hidden: { opacity: 0, y: 80, scaleY: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scaleY: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 20,
                mass: 1.5
            }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#050505] text-slate-100 antialiased font-sans selection:bg-emerald-500/30">
            {/* Background Architecture */}
            <div className="fixed inset-0 min-h-screen z-0 bg-mesh-gradient opacity-20 pointer-events-none mix-blend-screen"></div>
            <div className="fixed inset-0 min-h-screen z-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

            {/* Navigation */}

            <main className="flex-1 relative z-10 w-full max-w-7xl mx-auto px-6 py-24 pb-32">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-b border-white/10 pb-12"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md bg-emerald-500/10 border border-emerald-500/30 mb-8 font-mono shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400">Secure Comm Terminal</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
                        Establish Connection<span className="text-emerald-500">_</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-medium">
                        Request a secure architectural consultation to evaluate your physical infrastructure for edge-native, deterministic intelligence deployments.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8"
                >
                    {/* Left Column: Communications */}
                    <div className="lg:col-span-4 flex flex-col gap-6">

                        {/* Direct Channel */}
                        <motion.div variants={hatchVariants} className="p-8 rounded-xl bg-[#0a0a0c] border border-white/5 shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500">
                            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                            <Mail className="w-8 h-8 text-white mb-6" />
                            <h3 className="text-lg font-bold text-white mb-2 font-mono uppercase tracking-widest text-emerald-50/80">Direct Channel</h3>
                            <p className="text-zinc-500 text-sm mb-6">For general architectural inquiries and research partnership assessments.</p>
                            <a href="mailto:suleman@apportunitylabs.ai" className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors group/link">
                                suleman@apportunitylabs.ai
                                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                        {/* Headquarters with Ping */}
                        <motion.div variants={hatchVariants} className="p-8 rounded-xl bg-[#0a0a0c] border border-white/5 shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500">
                            <div className="absolute top-0 right-0 p-8 flex items-center justify-center">
                                {/* PING ANIMATION: Active Network Status */}
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                                </span>
                            </div>
                            <MapPin className="w-8 h-8 text-white mb-6" />
                            <h3 className="text-lg font-bold text-white mb-2 font-mono uppercase tracking-widest text-emerald-50/80">Headquarters /// USA</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                APPORTUNITY LABS<br />
                                Advanced Neural Architecture<br />
                                United States, Earth Node
                            </p>
                            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 font-mono">
                                <Activity className="w-3 h-3 text-emerald-500" /> ACTIVE NETWORK STATUS
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column: Enterprise Sales & Methodology */}
                    <div className="lg:col-span-8">
                        <motion.div variants={hatchVariants} className="p-10 md:p-12 rounded-2xl bg-[#0a0a0c] border border-white/10 shadow-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-all duration-700">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full group-hover:bg-emerald-500/10 transition-colors duration-700"></div>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                                    <Server className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black tracking-tight text-white">Enterprise Implementation</h2>
                                    <p className="text-zinc-500 font-mono text-xs mt-1 uppercase tracking-widest">Architectural Consultation Methodology</p>
                                </div>
                            </div>

                            <div className="prose prose-invert max-w-none text-zinc-300 font-sans text-[15px] leading-[1.8]">
                                <p className="text-lg text-emerald-50 mb-8 border-l-2 border-emerald-500 pl-6 py-1">
                                    Apportunity Labs does not engage in theoretical consultancy; we architect, deploy, and verify physical intelligence systems capable of localized, determinable reasoning. Our formal engagement lifecycle is built strictly for Fortune 500 integrations demanding extreme security, hardware synergy, and regulatory adherence. The process is executed across four uncompromising phases.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                    {/* Phase 1 */}
                                    <div className="p-6 rounded-xl bg-[#0f0f12] border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-emerald-500 font-mono font-bold">01</span>
                                            <h4 className="text-white font-bold m-0">Initial Infrastructure Audit & Feasibility Validation</h4>
                                        </div>
                                        <p className="text-sm text-zinc-400 m-0">
                                            Before any tensor is computed, our engineering team executes a deep diagnostic of your existing operational topography. We evaluate your on-premise compute availability, legacy cloud dependency overhead, and viable edge capacities. We map the data flow from your core datacenters down to the specific hardware nodes (Nvidia Jetsons, Apple Silicon, or custom TPUs) hosting our inference engines. This phase mathematically structures the constraints required to achieve sub-millisecond, real-time latency.
                                        </p>
                                    </div>

                                    {/* Phase 2 */}
                                    <div className="p-6 rounded-xl bg-[#0f0f12] border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-emerald-500 font-mono font-bold">02</span>
                                            <h4 className="text-white font-bold m-0">Elite Security Clearances & Air-Gapped Verification</h4>
                                        </div>
                                        <p className="text-sm text-zinc-400 m-0">
                                            True physical intelligence demands absolute data sovereignty. We design the cryptographic perimeter, configuring encrypted transfer protocols and establishing isolated, air-gapped data lakes engineered exclusively for secure model distillation. Our architectures pass rigorous penetration testing, ensuring highly guarded proprietary telemetry and classified mechanical inputs never breach the physical boundary of the embedded device. We guarantee mathematical immunity against external interception prior to ingestion.
                                        </p>
                                    </div>

                                    {/* Phase 3 */}
                                    <div className="p-6 rounded-xl bg-[#0f0f12] border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-emerald-500 font-mono font-bold">03</span>
                                            <h4 className="text-white font-bold m-0">Deterministic Stakeholder Alignment & Logic Schema</h4>
                                        </div>
                                        <p className="text-sm text-zinc-400 m-0">
                                            We reject the probabilistic guessing of basic generative models. We align with your technical stakeholders to define absolute mathematical constraints and guard-railed logic schemas required for your specific physical application. We map exact operational boundaries, failure modes, and acceptable inference tolerances. This ensures the neural network behaves predictably, safely, and transparently, adhering to rigid bounds without suffering from unconstrained hallucinatory drift.
                                        </p>
                                    </div>

                                    {/* Phase 4 */}
                                    <div className="p-6 rounded-xl bg-[#0f0f12] border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-emerald-500 font-mono font-bold">04</span>
                                            <h4 className="text-white font-bold m-0">Multi-Phase Deployment & Hardened Shadow Rollout</h4>
                                        </div>
                                        <p className="text-sm text-zinc-400 m-0">
                                            Our deployment protocol mitigates all operational risk. We initiate "Shadow Deployments," running quantized models securely in parallel to existing workflows, logging inferential reasoning without actuating physical consequence. We utilize these logs for aggressive A/B validation, tracking model drift or metric degradation. Only upon capturing verified, 99.9% deterministic accuracy across thousands of edge simulations do we transition to a Hardened Rollout, permanently fusing the architecture into your infrastructure.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-6 bg-emerald-500/5 rounded-xl border border-emerald-500/20">
                                    <div className="mb-4 sm:mb-0">
                                        <h4 className="text-white font-bold text-lg mb-1">Initiate Enterprise Intake</h4>
                                        <p className="text-zinc-500 text-sm">Clearances required for highly-classified infrastructure audits.</p>
                                    </div>
                                    <a href="mailto:enterprise@apportunitylabs.ai" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all transform hover:scale-105 flex items-center gap-2">
                                        <Lock className="w-4 h-4" /> Secure Request
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>

            {/* TASK 2: The 'Reputation Shield' Footer */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-full relative z-20 mt-16 pb-12"
            >
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-2xl bg-[#0a0a0c] border border-zinc-800 shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
                        {/* JHU Credential Reiterated */}
                        <div className="flex items-center gap-4 mb-6 md:mb-0">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500/20 grayscale hover:grayscale-0 transition-all duration-500 relative flex-shrink-0">
                                <Image
                                    src="/suleman-portrait.jpg"
                                    alt="Apportunity Labs - Suleman Imdad - Principal AI Architect"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg leading-tight">Suleman Imdad</h4>
                                <p className="text-emerald-400 text-xs font-mono uppercase tracking-widest mt-1">Principal AI Systems Architect</p>
                                <p className="text-zinc-500 text-sm mt-1 flex items-center gap-1">
                                    <Shield className="w-3 h-3" /> M.Sc. Artificial Intelligence, Johns Hopkins
                                </p>
                            </div>
                        </div>

                        <div className="w-px h-16 bg-zinc-800 hidden md:block mx-8"></div>

                        {/* Security & Compliance Strip */}
                        <div className="flex flex-col items-center md:items-start">
                            <h5 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                                <Network className="w-4 h-4 text-emerald-500" /> Embedded Compliance Standards
                            </h5>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">GDPR VERIFIED</span>
                                <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">SOC2 TYPE II SECURE</span>
                                <span className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">HIPAA-ALIGNED AI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
