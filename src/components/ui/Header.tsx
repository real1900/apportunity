'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent body scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Solutions", href: "/solutions" },
        { name: "Platform", href: "/platform" },
        { name: "Research", href: "/research" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Brand Identity */}
                <div className="flex items-center gap-3 relative z-50">
                    <Image
                        src="/logo.png"
                        alt="Apportunity Labs"
                        width={32}
                        height={32}
                    />
                    <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        Apportunity Labs
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm transition-colors ${isActive
                                    ? "text-emerald-400 font-bold"
                                    : "text-zinc-400 font-medium hover:text-emerald-400"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="flex lg:hidden relative z-50 p-2 rounded-md text-zinc-300 hover:bg-white/5 hover:text-emerald-400 transition-all border border-transparent focus:border-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-[#09090b] pt-24 px-6 pb-6 lg:hidden overflow-y-auto border-b border-white/10"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');

                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`block text-2xl font-medium transition-colors ${isActive
                                                ? "text-emerald-400 font-bold"
                                                : "text-zinc-400 hover:text-emerald-400"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
