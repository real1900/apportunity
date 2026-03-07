'use client';

import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="px-6 pt-20 pb-12 bg-[#050505] border-t border-white/5 font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand & Newsletter */}
                    <div className="md:col-span-12 lg:col-span-6 flex flex-col gap-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Image
                                src="/logo.png"
                                alt="Apportunity Labs"
                                width={40}
                                height={40}
                            />
                            <span className="text-2xl font-bold tracking-tight text-white">Apportunity<span className="text-emerald-500">.</span></span>
                        </div>
                        <h4 className="text-xl font-bold text-white tracking-tight">Join the Network</h4>
                        <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                            Receive classified updates on neural architecture breakthroughs, edge-inference case studies, and physical intelligence deployments.
                        </p>
                        <form className="flex gap-2 w-full max-w-md mt-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="flex-1 bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 transition-all placeholder:text-zinc-600"
                                placeholder="Email Address"
                                type="email"
                            />
                            <button className="bg-emerald-500 hover:bg-emerald-400 text-[#09090b] font-bold px-6 py-3 rounded-xl text-sm transition-colors flex items-center justify-center min-w-[100px] shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                Join
                            </button>
                        </form>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-4 lg:col-span-2 space-y-6">
                        <h5 className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em]">Ecosystem</h5>
                        <ul className="space-y-4 text-sm text-zinc-400 font-medium">
                            <li><Link className="hover:text-emerald-400 transition-colors" href="/research">Research & Theory</Link></li>
                            <li><Link className="hover:text-emerald-400 transition-colors" href="/platform">The Platform</Link></li>
                            <li><Link className="hover:text-emerald-400 transition-colors" href="/solutions">Enterprise Solutions</Link></li>
                            <li><Link className="hover:text-emerald-400 transition-colors" href="/about">Manifesto & About</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-2 space-y-6">
                        <h5 className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em]">Connect</h5>
                        <ul className="space-y-4 text-sm text-zinc-400 font-medium">
                            <li><Link className="hover:text-emerald-400 transition-colors flex items-center gap-2" href="/contact">Encrypted Contact <ArrowRight className="w-3 h-3" /></Link></li>
                            <li><a className="hover:text-emerald-400 transition-colors flex items-center gap-2 group" href="https://linkedin.com/in/suleman-imdad" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" /> LinkedIn</a></li>
                            <li><a className="hover:text-emerald-400 transition-colors flex items-center gap-2 group" href="#" target="_blank" rel="noopener noreferrer"><Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" /> Twitter / X</a></li>
                            <li><a className="hover:text-emerald-400 transition-colors flex items-center gap-2 group" href="#" target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 group-hover:scale-110 transition-transform" /> GitHub Hub</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-2 space-y-6">
                        <h5 className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em]">Leadership</h5>
                        <ul className="space-y-4 text-sm text-zinc-400 font-medium">
                            <li><Link className="hover:text-emerald-400 transition-colors" href="/about/founder">Principal Architect: Suleman Imdad</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-center gap-6 pt-12 border-t border-white/5">
                    <div className="flex items-center justify-center opacity-30 grayscale mix-blend-screen">
                        <Image src="/logo.png" alt="Apportunity Labs Neural Symbol" width={24} height={24} />
                    </div>
                    <p className="text-zinc-500 text-xs text-center font-mono tracking-widest leading-relaxed">
                        &copy; 2026 APPORTUNITY LABS. ALL RIGHTS RESERVED.<br />
                        <span className="text-emerald-500/50 mt-1 inline-block">NEURAL-SYMBOLIC ARCHITECTURE v4.0.2</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
