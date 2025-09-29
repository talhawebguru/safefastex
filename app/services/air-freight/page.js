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
  title: "Air Freight Services | Fast & Reliable Global Cargo Solutions",
  description: "Discover our air freight services with expedited transit, global coverage, temperature control, and secure handling. Trusted by businesses worldwide for fast, reliable, and compliant cargo transport.",
  keywords: "air freight, air cargo, global shipping, next flight out, pharmaceutical logistics, cold chain, international shipping, urgent freight, cargo tracking, express logistics",
  alternates: { canonical: "/services/air-freight" },
  openGraph: {
    title: "Air Freight Services | Fast & Reliable Global Cargo Solutions",
    description: "Fast and secure international air freight services with temperature control, real-time tracking, and compliance.",
    url: "https://safefastex.com/services/air-freight",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/air-freight-hero.jpg",
      alt: "Air Freight Services"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Freight Services | Fast & Reliable Global Cargo Solutions",
    description: "Global air cargo solutions with speed, visibility, and compliance.",
    images: ["https://safefastex.com/images/air-freight-hero.jpg"],
    site: "@safefastex"
  },
};

export default function AirFreightPage() {
  const data = getService("airFreight");
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
            "serviceType": "Air Freight Services",
            "provider": {
              "@type": "Organization",
              "name": "SafeFastex Logistics",
              "url": "https://safefastex.com",
              "logo": "https://safefastex.com/logo.png"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "description": "SafeFastex provides fast, reliable and secure global air freight solutions including NFO, temperature control, pharmaceutical handling and oversized cargo transport.",
            "offers": {
              "@type": "Offer",
              "url": "https://safefastex.com/services/air-freight",
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
                "name": "Do you offer next-flight-out (NFO) services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide next-flight-out services with 24/7 monitoring and automated status feeds for urgent shipments."
                }
              },
              {
                "@type": "Question",
                "name": "Can you handle pharmaceutical and temperature-sensitive cargo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer GDP-compliant handling, calibrated monitoring devices, and validated cold-chain processes for pharma and perishables."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure cargo security?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We maintain strict compliance with security screening, tamper-evident seals, and chain-of-custody logging."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide consolidation options?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer multi-shipper consolidations with optimized load factors to reduce cost."
                }
              },
              {
                "@type": "Question",
                "name": "Which destinations do you cover with air freight?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We cover 190+ destinations worldwide with direct and consolidated air freight solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer real-time cargo tracking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, shipments are tracked via live GPS with milestone updates and automated alerts."
                }
              },
              {
                "@type": "Question",
                "name": "What industries benefit most from air freight?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Healthcare, electronics, automotive, retail, and perishables benefit most from our expedited solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Can you manage dangerous goods by air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our IATA-DGR certified team manages hazardous cargo safely and compliantly."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide customs clearance for air shipments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our customs experts manage documentation, HS classification, and duty optimization for faster clearance."
                }
              },
              {
                "@type": "Question",
                "name": "What is the maximum size/weight allowed in air freight?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We handle oversized shipments with access to freighter aircraft and charter solutions."
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
