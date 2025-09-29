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
  title: "Ship Freight Services | Reliable Ocean Cargo & Container Shipping Solutions",
  description: "Get reliable and cost-effective ship freight services for global cargo movement. From FCL & LCL to breakbulk and reefer containers, our ocean freight solutions ensure secure, timely, and compliant international shipping across major trade routes.",
  keywords: "ship freight, ocean freight, container shipping, FCL, LCL, reefer shipping, breakbulk, sea cargo logistics, international shipping solutions",
  alternates: { canonical: "/services/ship-freight" },
  openGraph: {
    title: "Ship Freight Services | Reliable Ocean Cargo & Container Shipping Solutions",
    description: "Get reliable and cost-effective ship freight services for global cargo movement. From FCL & LCL to breakbulk and reefer containers, our ocean freight solutions ensure secure, timely, and compliant international shipping across major trade routes.",
    url: "https://safefastex.com/services/ship-freight",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/ship-freight-hero.jpg",
      alt: "Ship Freight Services"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ship Freight Services | Reliable Ocean Cargo & Container Shipping Solutions",
    description: "Reliable ocean freight solutions with FCL, LCL, reefer, and breakbulk options for global cargo movement.",
    images: ["https://safefastex.com/images/ship-freight-hero.jpg"],
    site: "@safefastex"
  },
};

export default function ShipFreightPage() {
  const data = getService("shipFreight");
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
            "serviceType": "Ship Freight Services",
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
              "name": "Global Trade Routes"
            },
            "description": "SafeFastEx provides reliable and cost-effective ship freight services including FCL, LCL, reefer containers, breakbulk cargo, and specialized ocean freight solutions with global coverage and compliance support.",
            "offers": {
              "@type": "Offer",
              "url": "https://safefastex.com/services/ship-freight",
              "priceCurrency": "USD",
              "eligibleRegion": { "@type": "Place", "name": "Worldwide" },
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
                "name": "What types of ship freight services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide FCL, LCL, breakbulk, project cargo, and reefer shipping solutions for all types of cargo."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle refrigerated or temperature-sensitive cargo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer reefer containers with real-time temperature monitoring for perishables and pharmaceuticals."
                }
              },
              {
                "@type": "Question",
                "name": "How do I choose between FCL and LCL shipping?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FCL is ideal for large volumes, while LCL is cost-effective for smaller shipments. Our team helps assess the best option for your cargo."
                }
              },
              {
                "@type": "Question",
                "name": "Can I track my ocean freight shipment online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you'll have access to our client portal with real-time milestones, ETAs, and customs clearance updates."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide customs clearance support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely, we handle export and import documentation, duties, and compliance with international trade laws."
                }
              },
              {
                "@type": "Question",
                "name": "What is the average transit time for ship freight?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Transit times vary depending on routes, ranging from 7–45 days. We'll provide an accurate ETA at booking."
                }
              },
              {
                "@type": "Question",
                "name": "Do you support oversized or hazardous cargo shipping?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we manage dangerous goods and project cargo with specialized containers, permits, and safety protocols."
                }
              },
              {
                "@type": "Question",
                "name": "How competitive are your ship freight rates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our strong carrier partnerships and consolidation services ensure highly competitive and transparent pricing."
                }
              },
              {
                "@type": "Question",
                "name": "Can you provide door-to-door shipping solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer multimodal solutions integrating road, rail, and ocean freight for seamless delivery."
                }
              },
              {
                "@type": "Question",
                "name": "Which regions do you cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We cover all major global trade lanes including Asia, Europe, North America, Middle East, and Africa."
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
      <ServiceOverview title={data.title} tagline={data.tagline} intro={data.intro} />
      <BenefitCards benefits={data.benefits} />
      <ProcessSteps process={data.process} />
      <StatsBar stats={data.stats} />
      <FAQ faqs={data.faqs} />
      <RelatedServices related={data.related} />
      <ServiceCTA {...data.cta} />
    </main>
  );
}
