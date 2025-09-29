import React from "react";
import NameBanner from "../../components/about/NameBanner";
import ServiceOverview from "../../components/services/ServiceOverview";
import BenefitCards from "../../components/services/BenefitCards";
import ProcessSteps from "../../components/services/ProcessSteps";
import StatsBar from "../../components/services/StatsBar";
import FAQ from "../../components/services/FAQ";
import RelatedServices from "../../components/services/RelatedServices";
import ServiceCTA from "../../components/services/ServiceCTA";
import { getService } from "../../lib/services";

export const metadata = {
  title: "Project Cargo Logistics | Heavy Lift & Oversized Transport",
  description: "Expert project cargo handling for heavy lift & oversized shipments. 600+ projects, 350+ tons capacity. Engineering, permits & multimodal solutions.",
  keywords: "project cargo, heavy lift transport, oversized cargo, out of gauge shipping, breakbulk cargo, project logistics, heavy machinery transport, engineering logistics",
  alternates: { canonical: "/services/project-cargo" },
  openGraph: {
    title: "Project Cargo Logistics | Heavy Lift & Oversized Transport",
    description: "Expert project cargo handling for heavy lift & oversized shipments. 600+ projects, 350+ tons capacity. Engineering, permits & multimodal solutions.",
    url: "https://safefastex.com/services/project-cargo",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/project-cargo-hero.jpg",
      alt: "Project Cargo Logistics Services"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Cargo Logistics | Heavy Lift & Oversized Transport",
    description: "Expert project cargo for heavy lift & oversized shipments. 600+ projects completed successfully.",
    images: ["https://safefastex.com/images/project-cargo-hero.jpg"],
    site: "@safefastex"
  },
};

export default function ProjectCargoPage() {
  const data = getService("projectCargo");
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: data?.title },
  ];

  return (
    <main>
      {/* JSON-LD Schema for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Project Cargo Logistics",
            "provider": {
              "@type": "Organization",
              "name": "SafeFastEx",
              "url": "https://safefastex.com",
              "logo": "https://safefastex.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-52-704-2536",
                "contactType": "Customer Support",
                "areaServed": ["AE", "SA", "KW", "OM", "QA", "BH"]
              }
            },
            "areaServed": {
              "@type": "Place",
              "name": "30+ Countries Worldwide"
            },
            "description": "SafeFastEx specializes in project cargo logistics for heavy, oversized, and complex shipments with engineering expertise, route planning, and multimodal transport solutions for industries worldwide.",
            "offers": {
              "@type": "Offer",
              "url": "https://safefastex.com/services/project-cargo",
              "priceCurrency": "USD",
              "eligibleRegion": { "@type": "Place", "name": "Global" },
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      {/* JSON-LD Schema for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is project cargo in logistics?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Project cargo refers to transporting oversized, heavy, or complex shipments such as machinery, energy equipment, or industrial components that require specialized handling."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle out-of-gauge (OOG) shipments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in out-of-gauge cargo using flat-rack containers, breakbulk vessels, and specialized trailers for oversized shipments."
                }
              },
              {
                "@type": "Question",
                "name": "What industries use project cargo services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve power, oil & gas, mining, renewable energy, infrastructure, and large-scale construction industries requiring specialized logistics."
                }
              },
              {
                "@type": "Question",
                "name": "Can you arrange multimodal project logistics?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely, we integrate road, rail, air, and ocean freight to deliver tailored multimodal project solutions for complex cargo."
                }
              },
              {
                "@type": "Question",
                "name": "Do you conduct route surveys before transport?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we perform comprehensive engineering route studies, lifting simulations, and risk assessments before every project execution."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure safety during heavy-lift transport?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We follow international HSSE standards, use certified rigging gear, and employ experienced heavy-lift operators with proven safety records."
                }
              },
              {
                "@type": "Question",
                "name": "Do you assist with permits and customs clearance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we handle all documentation, permits, and customs compliance to avoid delays and ensure smooth project execution."
                }
              },
              {
                "@type": "Question",
                "name": "Can you transport project cargo internationally?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide global project logistics with access to major ports, airports, and inland connections across 30+ countries."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between breakbulk and project cargo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Breakbulk refers to general non-containerized cargo, while project cargo requires tailored solutions for oversized and complex shipments with specialized handling."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get a quote for project cargo services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply provide shipment details, dimensions, and destination, and our team will prepare a tailored project logistics plan and comprehensive cost estimate."
                }
              }
            ]
          })
        }}
      />

      <NameBanner
        title={`/ ${data.title} /`}
        backgroundImage="/images/nameBanner.jpg"
        breadcrumbs={breadcrumbs}
      />
      <ServiceOverview
        title={data.title}
        tagline={data.tagline}
        intro={data.intro}
      />
      <BenefitCards benefits={data.benefits} />
      <ProcessSteps process={data.process} />
      <StatsBar stats={data.stats} />
      <FAQ faqs={data.faqs} />
      <RelatedServices related={data.related} />
      <ServiceCTA {...data.cta} />
    </main>
  );
}
