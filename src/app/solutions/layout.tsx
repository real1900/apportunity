import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edge AI Vision & On-Device RAG Implementation",
    description: "Enterprise Edge AI case studies detailing On-device RAG deployments and autonomous systems architecture engineered by Suleman Imdad (Johns Hopkins University). Bridging cloud telemetry with the physical world.",
    keywords: ["Edge AI Vision", "YOLOv10 Implementation", "On-device RAG", "Enterprise AI Case Studies"],
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
