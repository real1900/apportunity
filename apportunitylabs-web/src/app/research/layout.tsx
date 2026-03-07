import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Johns Hopkins AI Research & Model Quantization",
    description: "Deep technical Edge AI research into Parameter-Efficient Fine-Tuning, LoRA, Model Quantization, and secure Neural Network Deployment, directed by Suleman Imdad (Johns Hopkins University).",
    keywords: ["Johns Hopkins AI Research", "Model Quantization", "Neural Network Deployment", "PEFT", "Edge-Native SLMs", "Adversarial Multi-Agent Planning"],
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
