'use client';

import { motion } from "framer-motion";
import { Network, ArrowLeft, Globe, Database, Cog } from "lucide-react";

export default function Platform() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#09090b] text-slate-100 antialiased font-sans">

            {/* Navigation */}

            <section className="px-6 py-24 lg:py-32 relative z-10 max-w-6xl mx-auto w-full">
                <a href="/" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-emerald-400 mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </a>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2 block">Enterprise Localization Engine</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                        Submission: Multilingual Neural Intelligence.
                    </h1>
                    <p className="text-xl text-zinc-400 leading-relaxed max-w-4xl border-l-2 border-emerald-500/50 pl-6 mb-16 mt-4">
                        <strong className="text-zinc-200">Platform Overview:</strong> A global-scale platform for the ingestion, semantic indexing, and localization of complex technical and theological corpora.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col gap-6"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            <Globe className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">NMT Translation</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                <strong>Neural Machine Translation (NMT):</strong> Proprietary pipelines for high-fidelity, context-aware translation across dozens of languages, dynamically preserving precise technical and domain-specific terminology.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col gap-6"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <Database className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Semantic Search</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Vector-based indexing of massive text corpora, enabling intent-based queries across ancient and modern technical texts, vastly outperforming legacy keyword heuristics.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col gap-6"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                            <Cog className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Agentic Localization</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                Automated adversarial workflows utilizing dual-LLM architectures for real-time content verification and high-precision cultural context adjustment prior to publication.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
