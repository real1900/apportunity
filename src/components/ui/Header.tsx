'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();

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
                <div className="flex items-center gap-3">
                    <Image
                        src="/favicon.png"
                        alt="Apportunity Labs"
                        width={32}
                        height={32}
                    />
                    <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors">
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

            </div>
        </nav>
    );
}
