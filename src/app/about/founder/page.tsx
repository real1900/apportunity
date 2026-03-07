'use client';

import { motion } from "framer-motion";
import { Network, ArrowLeft, GraduationCap, Server, Brain, Quote, Linkedin, ExternalLink, Activity, NetworkIcon, Terminal, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FounderPage() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#09090b] text-slate-100 antialiased font-sans">

            {/* Animated Background Mesh Gradient */}
            <div className="fixed inset-0 min-h-screen z-0 bg-mesh-gradient opacity-30 pointer-events-none mix-blend-screen"></div>

            {/* Navigation */}

            <section className="px-6 py-16 lg:py-24 relative z-10 max-w-6xl mx-auto w-full">
                <a href="/about" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to About
                </a>

                {/* SECTION 1: THE THESIS (HERO) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-32">

                    {/* Headshot / Glassmorphic Overlay */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/30 blur-3xl rounded-full"></div>
                        <div className="w-full aspect-[4/5] relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 z-10">
                            <Image
                                src="/images/suleman-portrait.jpg"
                                alt="Apportunity Labs - Suleman Imdad - Principal AI Architect and Founder"
                                fill
                                priority
                                className="object-cover object-center filter contrast-110 saturate-100 shadow-2xl"
                            />
                            {/* Inner glassmorphic bottom overlay for credentials */}
                            <div className="absolute bottom-0 w-full p-6 bg-black/60 backdrop-blur-md border-t border-white/10">
                                <h1 className="text-2xl font-bold text-white tracking-tight">Suleman Imdad</h1>
                                <p className="text-sm font-mono text-emerald-400 mt-1">Principal AI Systems Architect</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* The Narrative */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col gap-8"
                    >
                        <div className="flex items-center gap-3">
                            <Terminal className="w-6 h-6 text-blue-400" />
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">FOUNDER & LEAD ARCHITECT</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            Bridging Two Decades of Systems Excellence with the Future of AI.
                        </h2>

                        <div className="border-l-2 border-emerald-500/50 pl-6 flex flex-col gap-4">
                            <p className="text-xl md:text-2xl text-zinc-300 font-medium">
                                Suleman Imdad, M.Sc. Artificial Intelligence (JHU).
                            </p>
                            <p className="text-lg text-zinc-400 leading-relaxed">
                                "The 'Last Mile' of AI isn't found in a massive generalized cloud data center—it's found on the device, strictly in the hardware, and dynamically at the edge. My career has been dedicated to engineering the high-scale systems that power the world’s most iconic brands, now evolved through the lens of Applied AI Research."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* SECTION 2: THE INFLECTION POINT (ACADEMIC ANCHOR) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-32 relative"
                >
                    <div className="absolute -left-10 top-0 w-1 bg-emerald-500/20 h-full hidden lg:block rounded-full"></div>
                    <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl relative z-10 hover:border-blue-500/30 transition-colors">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                                <GraduationCap className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-3xl font-bold text-white">Grounded in Academic Rigor.</h3>
                                <p className="text-lg text-zinc-400 leading-relaxed">
                                    Translating theoretical potential into robust physical products requires fundamentally understanding the underlying calculus of neural networks. The transition to AI architecture is backed by elite-level formal specialization at Johns Hopkins University.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                                        <div>
                                            <h4 className="text-white font-bold">Deep Neural Networks</h4>
                                            <p className="text-sm text-zinc-500 mt-1">Backpropagation strategies, gradient sparsity, and multi-modal embedding spaces.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                                        <div>
                                            <h4 className="text-white font-bold">Reinforcement Learning</h4>
                                            <p className="text-sm text-zinc-500 mt-1">Markov Decision Processes, Q-Learning matrices, and DPO applied to embodied systems.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 w-2 h-2 rounded-full bg-yellow-400 shrink-0 shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
                                        <div>
                                            <h4 className="text-white font-bold">Computer Vision</h4>
                                            <p className="text-sm text-zinc-500 mt-1">ViT architectures, YOLOv10 object detection, and spatial feature extraction at scale.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* SECTION 3: THE EVOLUTION TIMELINE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-32"
                >
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">FOUNDATIONAL EXCELLENCE</span>
                        <h3 className="text-4xl font-bold tracking-tight text-white mt-4">16 Years of Production-Grade Engineering</h3>
                        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-lg hover:text-white transition-colors">
                            I didn't just build apps; I built the distributed systems that handled millions of global transactions and real-time logistics for the world's largest retailers. This was the Battle-Testing phase.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-white/10 pl-8 md:pl-0 md:border-l-0">
                        {/* Desktop Timeline Center Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>

                        {/* Timeline Item 1: The Era of Scale */}
                        <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 mb-24 md:even:flex-row-reverse group">
                            {/* Dot */}
                            <div className="absolute left-[-41px] md:left-1/2 md:translate-x-[-50%] top-6 w-5 h-5 rounded-full bg-[#09090b] border-4 border-emerald-500 z-10 shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:scale-125 transition-transform"></div>

                            <div className="md:w-1/2 md:text-right flex flex-col justify-center">
                                <h4 className="text-emerald-400 font-mono text-sm tracking-widest mb-2">2008 &mdash; 2023</h4>
                                <h3 className="text-3xl font-bold text-white mb-4">The Era of Scale</h3>
                                <p className="text-zinc-400 leading-relaxed md:ml-auto md:max-w-md">
                                    Forged in the crucible of hyper-growth tech. Architected the Mobile Edge for industry titans: <strong className="text-zinc-200">Apple, Nike, Walmart, and Amazon</strong>. Engineered systems to survive massive unpredictable traffic spikes, ensuring deterministic behavior in unstable environments.
                                </p>
                            </div>

                            <div className="md:w-1/2 w-full">
                                <div className="grid grid-cols-2 gap-4 w-full opacity-70 group-hover:opacity-100 transition-all duration-500">
                                    {/* Grayscale Client Grid */}
                                    <div className="bg-white/5 border border-white/10 flex items-center justify-center p-6 rounded-2xl grayscale hover:grayscale-0 transition-all backdrop-blur-sm">
                                        <img src="/clients/apple.svg" alt="Apple" className="max-h-8 w-auto" />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 flex items-center justify-center p-6 rounded-2xl grayscale hover:grayscale-0 transition-all backdrop-blur-sm">
                                        <img src="/clients/nike.svg" alt="Nike" className="max-h-6 w-auto" />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 flex items-center justify-center p-6 rounded-2xl grayscale hover:grayscale-0 transition-all backdrop-blur-sm">
                                        <img src="/clients/amazon.svg" alt="Amazon" className="max-h-7 w-auto translate-y-1" />
                                    </div>
                                    <div className="bg-white/5 border border-white/10 flex items-center justify-center p-6 rounded-2xl grayscale hover:grayscale-0 transition-all backdrop-blur-sm">
                                        <img src="/clients/walmart.svg" alt="Walmart" className="max-h-7 w-auto" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Item 2: The AI Inflection */}
                        <div className="relative flex flex-col md:flex-row gap-8 md:gap-16 md:flex-row-reverse group">
                            {/* Dot */}
                            <div className="absolute left-[-41px] md:left-1/2 md:translate-x-[-50%] top-6 w-5 h-5 rounded-full bg-[#09090b] border-4 border-blue-500 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform"></div>

                            <div className="md:w-1/2 md:text-left flex flex-col justify-center">
                                <h4 className="text-blue-400 font-mono text-sm tracking-widest mb-2">2024 &mdash; Present</h4>
                                <h3 className="text-3xl font-bold text-white mb-4">The AI Inflection</h3>
                                <p className="text-zinc-400 leading-relaxed md:max-w-md">
                                    Transitioning raw technical engineering into Applied AI Research. Focusing intensely on <strong>Edge-RAG</strong>, <strong>Vision-Language Models (VLMs)</strong>, and offline-first Embodied Intelligence. Synthesizing the robustness of Fortune 500 mobile development with the extreme computational demands of modern inference.
                                </p>
                            </div>

                            <div className="md:w-1/2 w-full flex justify-end">
                                {/* Technical Grid */}
                                <div className="grid grid-cols-1 gap-4 w-full opacity-70 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white/5 border border-blue-500/20 flex items-center gap-4 p-6 rounded-2xl relative overflow-hidden backdrop-blur-md">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                                        <Brain className="w-8 h-8 text-blue-400 shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="text-white font-bold">Johns Hopkins Research Hub</span>
                                            <span className="text-zinc-500 text-sm font-mono mt-1">Quantized Intelligence on CoreML</span>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 border border-emerald-500/20 flex items-center gap-4 p-6 rounded-2xl relative overflow-hidden backdrop-blur-md">
                                        <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
                                        <NetworkIcon className="w-8 h-8 text-emerald-400 shrink-0" />
                                        <div className="flex flex-col">
                                            <span className="text-white font-bold">Apportunity Labs Foundation</span>
                                            <span className="text-zinc-500 text-sm font-mono mt-1">Founding the Center for Physical AI</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* SECTION 4: PHILOSOPHY & VISION (SIGNATURE) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-16 border-t border-white/10 pt-24"
                >
                    <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 px-6">
                        <Quote className="w-12 h-12 text-zinc-600 mb-2" />
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Professional Philosophy: The Ethics of Embodied Intelligence</h2>

                        <div className="flex flex-col gap-6 text-left md:text-center mt-4">
                            <p className="text-lg md:text-xl leading-relaxed text-zinc-300 font-medium max-w-3xl mx-auto">
                                "As we transition from the era of generative chat-interfaces to the dawn of Embodied Intelligence, the architectural responsibilities of the AI Systems Lead have fundamentally shifted. We are no longer merely managing data; we are orchestrating how machines perceive, interpret, and intervene in the physical world. At Apportunity Labs, my philosophy is rooted in the belief that the most profound AI is 'Invisible'—it is the intelligence that resides at the edge, functioning with deterministic reliability and absolute privacy.
                            </p>

                            <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                                The 'Last Mile' of AI deployment presents a unique ethical and technical challenge: how do we maintain the reasoning fidelity of a trillion-parameter model within the power and thermal constraints of a handheld device or an industrial sensor? My research at <strong className="text-white">Johns Hopkins</strong> University has convinced me that the answer lies in Architectural Distillation and Quantization. By prioritizing <strong className="text-white">Edge AI</strong>, we return data sovereignty to the user. When a model runs locally—bypassing the cloud—we eliminate the 'Privacy Tax' that has defined the first decade of the digital revolution.
                            </p>

                            <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                                Furthermore, as a Principal Architect with a 16-year legacy in global-scale systems (including <strong className="text-white">Apple</strong> and Nike), I view Deterministic Autonomy as a non-negotiable standard. In a production environment, 'probabilistic' success is insufficient. We must engineer Multi-Agent Workflows that utilize adversarial validation and semantic routing to ensure zero-hallucination execution.
                            </p>

                            <p className="text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
                                My vision for Apportunity Labs is to bridge this gap: applying the world’s most rigorous academic standards to the world’s most demanding production environments. We aren't just building smarter apps; we are engineering the secure, private, and high-performance neural infrastructure that will allow the physical and digital worlds to synchronize with unprecedented integrity."
                            </p>

                            <p className="text-emerald-400 font-medium italic mt-4">— By <strong className="text-emerald-300 font-bold">Suleman Imdad</strong>, M.Sc. AI (<strong className="text-emerald-300 font-bold">Johns Hopkins</strong> University)</p>
                        </div>

                        {/* CTAs */}
                        <div className="flex w-full flex-col sm:flex-row gap-4 mt-8 justify-center items-center">
                            <a href="https://www.linkedin.com/in/suleman-imdad" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-blue-600/20 border border-blue-500/50 px-8 py-4 text-base font-bold text-white w-full sm:w-auto transition-all hover:bg-blue-600/40">
                                <Linkedin className="w-5 h-5" />
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </motion.div>

            </section>
        </div>
    );
}
