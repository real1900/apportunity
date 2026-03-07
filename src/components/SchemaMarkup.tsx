export default function SchemaMarkup() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://apportunitylabs.ai/#organization",
                "name": "Apportunity Labs (AI Research)",
                "url": "https://apportunitylabs.ai",
                "logo": "https://apportunitylabs.ai/jhu-logo.png", // Using an available asset as placeholder 
                "description": "Apportunity Labs is a specialized AI Research & Systems Engineering firm dedicated to the 'Last Mile' of production AI, focusing on Edge AI, Autonomous Agents, and High-Scale Systems.",
                "founder": {
                    "@id": "https://apportunitylabs.ai/#person"
                },
                "knowsAbout": ["Artificial Intelligence", "Edge AI", "On-device Inference", "Agentic Workflows", "Vector Engineering", "RAG"]
            },
            {
                "@type": "Person",
                "@id": "https://apportunitylabs.ai/#person",
                "name": "Suleman Imdad",
                "jobTitle": "Principal AI Architect",
                "url": "https://apportunitylabs.ai/about/founder",
                "image": "https://apportunitylabs.ai/images/suleman-portrait.jpg",
                "sameAs": [
                    "https://www.linkedin.com/in/suleman-imdad/",
                    "https://github.com/real1900/"
                ],
                "alumniOf": {
                    "@type": "CollegeOrUniversity",
                    "name": "Johns Hopkins University",
                    "sameAs": "https://www.jhu.edu/"
                },
                "description": "Principal AI Architect specializing in Edge AI, On-device RAG implementation, and YOLOv10 Edge Vision. Architected the Mobile Edge for industry titans like Apple, Nike, Walmart, and Amazon.",
                "knowsAbout": ["Artificial Intelligence", "Edge AI Specialist", "On-device RAG implementation", "YOLOv10 Edge Vision", "JHU AI Research", "Embodied Intelligence"]
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
