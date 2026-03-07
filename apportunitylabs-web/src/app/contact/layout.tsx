import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Secure Contact | Edge AI Systems Architect",
    description: "Contact Suleman Imdad (Johns Hopkins University), Principal AI Architect, to discuss Edge AI deployments, on-device inference, and enterprise autonomous systems.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
