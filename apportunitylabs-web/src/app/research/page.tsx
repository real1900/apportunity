'use client';

import { motion } from "framer-motion";
import { Network, ArrowLeft, GraduationCap, ServerCog, Bot, Activity, Layers, Zap, Search, ShieldCheck } from "lucide-react";

export default function Research() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#09090b] text-slate-100 antialiased font-sans">

            {/* Animated Background Mesh Gradient for "Lab" Feel */}
            <div className="fixed inset-0 min-h-screen z-0 bg-mesh-gradient opacity-40 pointer-events-none mix-blend-screen"></div>

            {/* Navigation */}

            <section className="px-6 py-24 lg:py-32 relative z-10 max-w-7xl mx-auto w-full">
                <a href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </a>

                {/* SECTION 1: THE ACADEMIC ANCHOR */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-24"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <img src="/jhu-logo.svg" alt="Johns Hopkins University M.Sc. in Artificial Intelligence Research Anchor" className="h-10 w-auto object-contain opacity-90" />
                        <span className="h-6 w-px bg-white/20"></span>
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">ACADEMIC ANCHOR</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-8 border-l-4 border-emerald-500 pl-6">
                        Bridging the Gap Between Research and Production.
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-4xl">
                        The laboratory&apos;s research directives are anchored in the advanced neural architectures and probabilistic frameworks defined by the Johns Hopkins University M.Sc. in Artificial Intelligence. We bridge the gap between frontier theoretical innovation and high-scale deployment, leveraging rigorous computational methodologies to solve the &apos;Last Mile&apos; of edge-native intelligence. Our work focuses on the intersection of Deep Learning and Embodied Systems, ensuring that every model we architect meets the elite standards of academic excellence and production stability.
                    </p>
                </motion.div>

                {/* SECTION 2: MODEL OPTIMIZATION & EDGE QUANTIZATION */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-white mb-6 flex items-center gap-3">
                        <ServerCog className="w-8 h-8 text-emerald-400" />
                        Model Optimization & Edge Quantization
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed max-w-4xl mb-12 border-l-2 border-white/10 pl-6">
                        In resource-constrained environments, raw model performance is secondary to Inference Efficiency. Our research focuses on the mathematical distillation of frontier models into high-performance Edge-Native entities.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* The Quantitative Spec Table */}
                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
                            <div className="p-6 border-b border-white/10 bg-black/40">
                                <h3 className="text-lg font-bold text-white">Inference Performance Metrics</h3>
                                <p className="text-zinc-500 mt-1 text-sm italic">Empirical metrics derived from edge inference deployments across mobile and embedded systems.</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-zinc-300">
                                    <thead className="bg-[#09090b]/50 text-xs font-mono uppercase tracking-wider text-zinc-500 border-b border-white/10">
                                        <tr>
                                            <th className="px-6 py-4">Optimization Technique</th>
                                            <th className="px-6 py-4">Bit-width</th>
                                            <th className="px-6 py-4">VRAM Usage</th>
                                            <th className="px-6 py-4 text-emerald-400">Target Device</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 font-medium text-white">FP16 (Baseline)</td>
                                            <td className="px-6 py-4">16-bit</td>
                                            <td className="px-6 py-4 text-red-400">14.2 GB</td>
                                            <td className="px-6 py-4 text-zinc-400">Server GPU</td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 font-medium text-white">GGUF (Q4_K_M)</td>
                                            <td className="px-6 py-4 text-emerald-400">4-bit</td>
                                            <td className="px-6 py-4 text-yellow-400">3.8 GB</td>
                                            <td className="px-6 py-4 font-medium">iPhone 15 Pro</td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 font-medium text-white">AWQ (INT4)</td>
                                            <td className="px-6 py-4 text-emerald-400">4-bit</td>
                                            <td className="px-6 py-4 text-emerald-400">3.2 GB</td>
                                            <td className="px-6 py-4 font-medium">Android Edge</td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 font-medium text-white">Distilled-ViT</td>
                                            <td className="px-6 py-4 text-blue-400">8-bit</td>
                                            <td className="px-6 py-4 text-emerald-400 font-bold">1.1 GB</td>
                                            <td className="px-6 py-4 font-medium text-emerald-400">Wearable / IoT</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Mathematical Callout Box */}
                        <div className="relative p-8 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl opacity-50"></div>
                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Deep Dive: Advanced Quantization & PEFT</h3>
                            <p className="text-zinc-300 leading-relaxed text-sm relative z-10">
                                We are pioneering research into extremely low-bitwidth <strong>Parameter-Efficient Fine-Tuning (PEFT)</strong> and <strong>Low-Rank Adaptation (LoRA)</strong> for massive Vision-Language Models. By optimizing model convergence rates directly onto restricted edge architectures, we circumvent von Neumann memory bottlenecks without compromising reasoning fidelity or triggering catastrophic forgetting during incremental learning phases.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* SECTION 3 & 4: ARCHITECTURE AND ALIGNMENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">

                    {/* Section 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-6 flex items-center gap-3">
                            <Bot className="w-8 h-8 text-blue-400" />
                            Hierarchical Multi-Agent Workflows
                        </h2>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            Moving beyond simple "Chat" interfaces, we research the orchestration of Autonomous Agents capable of long-horizon planning and self-correction.
                        </p>

                        {/* Mathematical Callout Box */}
                        <div className="relative p-8 rounded-3xl border border-blue-500/30 bg-blue-500/5 backdrop-blur-xl">
                            <h3 className="text-lg font-bold text-white mb-4 relative z-10 text-blue-400">Technical Context</h3>
                            <p className="text-zinc-300 leading-relaxed text-sm relative z-10">
                                We engineer deterministic, multi-step cognitive pathways utilizing adversarial and collaborative agentic frameworks. By leveraging LangGraph and Semantic Routing networks, we parse highly complex industrial tasks into sequential <strong>DAGs (Directed Acyclic Graphs)</strong>, ensuring zero-hallucination execution across global Fortune 500 supply chains and legacy mainframes.
                            </p>
                        </div>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-white mb-6 flex items-center gap-3">
                            <ShieldCheck className="w-8 h-8 text-yellow-500" />
                            Embodied Intelligence & Safety
                        </h2>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            Aligning AI with physical-world constraints requires more than just data; it requires Safety-Critical Alignment.
                        </p>

                        <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                            <h3 className="text-lg font-bold text-white mb-4 relative z-10 text-yellow-500">RLHF at the Edge</h3>
                            <p className="text-zinc-300 leading-relaxed text-sm relative z-10">
                                We deploy state-of-the-art <strong>RLHF</strong> and <strong>Direct Preference Optimization (DPO)</strong> pipelines to fundamentally align embodied intelligence with critical safety constraints. By integrating continuous human-in-the-loop expert validation, we force models to synthesize highly penalized reward functions in unpredictable physical environments, achieving stable robotic autonomy.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* SECTION 5: THE RESEARCH PIPELINE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-20"
                >
                    <h2 className="text-4xl font-extrabold tracking-tight text-white mb-12 text-center">
                        The Master Research Pipeline
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Hidden on Mobile) */}
                        <div className="hidden lg:block absolute top-[50px] left-10 right-10 h-0.5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/50 to-blue-500/10 z-0"></div>

                        {/* Step 1 */}
                        <div className="relative z-10 flex flex-col items-center lg:items-start p-6 rounded-3xl border border-white/5 bg-[#050505] shadow-xl hover:border-emerald-500/30 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                <Search className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Step 01</span>
                            <h3 className="text-lg font-bold text-white mb-3 text-center lg:text-left">Hypothesis & Simulation</h3>
                            <p className="text-sm text-zinc-400 text-center lg:text-left leading-relaxed">
                                Utilizing JHU research clusters for initial mathematical verification and foundational model behavior simulation.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="relative z-10 flex flex-col items-center lg:items-start p-6 rounded-3xl border border-white/5 bg-[#050505] shadow-xl hover:border-emerald-500/30 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                <Layers className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Step 02</span>
                            <h3 className="text-lg font-bold text-white mb-3 text-center lg:text-left">Model Distillation</h3>
                            <p className="text-sm text-zinc-400 text-center lg:text-left leading-relaxed">
                                Applying proprietary quantization techniques to reduce total VRAM structural footprint by up to 75%.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative z-10 flex flex-col items-center lg:items-start p-6 rounded-3xl border border-white/5 bg-[#050505] shadow-xl hover:border-blue-500/30 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                <Activity className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Step 03</span>
                            <h3 className="text-lg font-bold text-white mb-3 text-center lg:text-left">Edge Validation</h3>
                            <p className="text-sm text-zinc-400 text-center lg:text-left leading-relaxed">
                                Real-world testing on integrated SteelVision hardware to measure thermal throttling and edge inference drift.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="relative z-10 flex flex-col items-center lg:items-start p-6 rounded-3xl border border-white/5 bg-[#050505] shadow-xl hover:border-blue-500/30 transition-colors">
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                <Zap className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Step 04</span>
                            <h3 className="text-lg font-bold text-white mb-3 text-center lg:text-left">Production Deployment</h3>
                            <p className="text-sm text-zinc-400 text-center lg:text-left leading-relaxed">
                                Scaling deterministic execution to global-scale enterprise platforms via Vertex AI and Kubernetes orchestration.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </section>
        </div>
    );
}
