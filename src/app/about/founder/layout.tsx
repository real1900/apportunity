import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Suleman Imdad | Founder & Principal AI Systems Architect",
    description: "Suleman Imdad is a Principal AI Architect specializing in Edge AI and the founder of Apportunity Labs. He holds an M.Sc. in Artificial Intelligence from Johns Hopkins University.",
    keywords: ["Suleman Imdad", "Suleman Imdad Apportunity", "Suleman Imdad Johns Hopkins", "Principal AI Architect Suleman Imdad", "Principal AI Systems Architect"],
};

export default function FounderLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
