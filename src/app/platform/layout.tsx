import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Submission AI Platform | MNI Agentic Framework",
    description: "The Submission AI platform engineered by Suleman Imdad (Johns Hopkins University). A scalable, low-latency framework for Edge AI and Multilingual Neural Intelligence.",
};

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
