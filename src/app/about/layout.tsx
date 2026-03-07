import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Apportunity Labs Manifesto | AI Systems Architecture",
    description: "The definitive intelligence layer for the physical world. Apportunity Labs, founded by Suleman Imdad (Johns Hopkins University), specializes in Edge AI, physical artificial intelligence, and agentic workflows.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
