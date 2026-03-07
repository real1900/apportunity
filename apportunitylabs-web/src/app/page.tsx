'use client';

import { motion } from "framer-motion";
import { Network, ArrowRight, ShieldCheck, Zap, Brain, Terminal, Database, Cpu } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // In case the video fails to load or play, timeout after 12s
    const timer = setTimeout(() => setIntroFinished(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!introFinished && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
        >
          <video
            ref={videoRef}
            src="/video/apportunity-intro.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => setIntroFinished(true)}
            onError={() => setIntroFinished(true)}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setIntroFinished(true)}
            className="absolute bottom-10 right-10 text-zinc-500 hover:text-white font-mono text-sm z-50 tracking-widest uppercase transition-colors"
          >
            Skip Sequence
          </button>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: introFinished ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className={`relative flex min-h-screen flex-col overflow-x-hidden bg-[#09090b] text-slate-100 antialiased font-sans ${!introFinished ? 'h-0 overflow-hidden hidden' : ''}`}
      >

        {/* Navigation */}

        {/* Hero Section */}
        <section className="relative px-6 pt-32 pb-24 lg:pt-48 lg:pb-32 flex justify-center w-full z-10 overflow-hidden">
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 z-0 bg-mesh-gradient opacity-60 pointer-events-none"></div>

          <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={introFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="flex flex-col gap-8 lg:w-1/2"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">ENTERPRISE AI ARCHITECTURE</span>
                <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-white lg:text-7xl">
                  Architecting the Infrastructure of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Embodied Intelligence</span>.
                </h1>
                <div className="flex flex-col gap-4 max-w-xl mt-4">
                  <p className="text-lg leading-relaxed text-zinc-400">
                    Apportunity Labs specializes in the productionization of Edge AI and Autonomous Agentic Workflows. From on-device RAG to real-time spatial awareness, we bridge the gap between high-scale systems and physical intelligence.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="/research" className="flex items-center gap-2 rounded-lg bg-emerald-500 px-8 py-4 text-base font-bold text-[#09090b] transition-all hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  Explore Our Research
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="/solutions" className="flex items-center gap-2 rounded-lg border border-blue-500/50 bg-blue-500/10 px-8 py-4 text-base font-bold text-blue-400 transition-all hover:bg-blue-500/20">
                  Technical Case Studies
                </a>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={introFinished ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="lg:w-1/2 w-full relative aspect-square max-w-lg"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-transparent to-blue-500/20 blur-3xl"></div>
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 relative h-full w-full overflow-hidden rounded-3xl shadow-2xl flex items-center justify-center p-8">
                {/* Simulated Terminal / Code Block for Hero */}
                <TerminalTypewriter start={introFinished} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Global Trust Marquee */}
        <section className="w-full border-y border-white/5 bg-[#09090b] py-12 relative z-20 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 flex flex-col items-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-8 text-center">
              Powering mission-critical systems for global leaders
            </p>
            <div className="w-full overflow-hidden relative">
              <div className="flex gap-16 md:gap-24 items-center justify-center flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Conceptual text logos since we don't have SVGs verified yet, user requested text representation or logos. We'll use styled text for reliability here. */}
                <span className="text-2xl font-bold tracking-tight">Apple</span>
                <span className="text-2xl font-black italic tracking-tighter">NIKE</span>
                <span className="text-2xl font-bold tracking-tight">amazon</span>
                <span className="text-2xl font-bold text-blue-400">Walmart</span>
                <span className="text-2xl font-bold">Southwest Airlines</span>
                <span className="text-2xl font-semibold">Union Bank</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars (Bento Grid) */}
        <section className="px-6 py-24 lg:py-32 relative z-10">
          <div className="mx-auto max-w-7xl flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">The Core Pillars</h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Our engineering foundation is built on three critical capabilities required for true physical autonomy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-emerald-500/50 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 relative z-10">
                  <Network className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-3 relative z-10">
                  <h3 className="text-xl font-bold text-white">Agentic Orchestration</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    We design multi-agent systems using <strong>LangGraph</strong> and <strong>Vertex AI</strong> that don&apos;t just "chat"—they execute. High-reliability task orchestration for complex enterprise workflows.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-blue-500/50 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 relative z-10">
                  <Cpu className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-3 relative z-10">
                  <h3 className="text-xl font-bold text-white">Edge-Native Inference</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Specialized in <strong>GGUF/AWQ quantization</strong> and <strong>CoreML</strong> optimization for sub-200ms local inference. Deploy frontier intelligence onto highly constrained environments.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="lg:col-span-1 md:col-span-2 group flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-emerald-500/50 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all"></div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 relative z-10">
                  <Database className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-3 relative z-10">
                  <h3 className="text-xl font-bold text-white">Physical Intelligence</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Bridging LLMs with proprietary hardware via <strong>BLE 5.4</strong> and high-frequency sensor fusion. Translating digital reasoning into physical context and automation streams.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </motion.div>
    </>
  );
}

const TerminalTypewriter = ({ start }: { start: boolean }) => {
  const [typedText, setTypedText] = useState("");
  const fullText = `$ systemctl status apportunity-edge-node
● active (running)
Tasks: 144 (limit: 32768)
Memory: 1.2G (Limit: 2.0G)
CGroup: /system.slice/apportunity-edge-node.service
$ tail -f /var/log/inference.log
[INFO] Loaded YOLOv10-TensorRT (Params: 15M, Precision: INT8)
[INFO] Starting hardware sync via BLE 5.4...
[READY] Inference engine online. Latency: 12ms.`;

  useEffect(() => {
    if (!start) return;

    // Slight delay before typing starts to allow the card animation to finish
    const startDelay = setTimeout(() => {
      let i = 0;
      const typingInterval = setInterval(() => {
        setTypedText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(typingInterval);
      }, 15);
      return () => clearInterval(typingInterval);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, [fullText, start]);

  const lines = typedText.split('\n');

  return (
    <div className="w-full h-full bg-[#050505] rounded-xl border border-white/10 p-6 font-mono text-sm shadow-inner flex flex-col items-start text-left">
      <div className="flex gap-2 mb-4 w-full">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>
      <div className="text-zinc-400 w-full break-all">
        {lines.map((line, i) => {
          if (line.startsWith('$ ')) {
            return <div key={i} className="text-emerald-400 mb-2 mt-2">{line}</div>;
          }
          if (line.startsWith('[READY]')) {
            return <div key={i} className="text-blue-400">{line}</div>;
          }
          if (line.startsWith('● ')) {
            const textAfterDot = line.slice(2);
            const target = "active (running)";
            if (target.startsWith(textAfterDot)) {
              return <div key={i}>● <span className="text-emerald-400">{textAfterDot}</span></div>;
            } else if (line.includes(target)) {
              const parts = line.split(target);
              return <div key={i}>● <span className="text-emerald-400">{target}</span>{parts[1]}</div>;
            }
          }
          return <div key={i}>{line}</div>;
        })}
        {start && typedText.length < fullText.length && (
          <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-1 align-middle" />
        )}
      </div>
    </div>
  );
};
