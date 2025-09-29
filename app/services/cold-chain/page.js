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
  title: "Cold Chain Logistics | Temperature-Controlled Cargo Solutions",
  description: "Professional cold chain logistics with GDP compliance, real-time monitoring & 98% excursion prevention. Pharma, perishables & frozen cargo worldwide. Request quote today.",
  keywords: "cold chain logistics, temperature controlled shipping, pharmaceutical logistics, GDP compliance, reefer transport, frozen cargo, perishable goods, cold storage",
  alternates: { canonical: "/services/cold-chain" },
  openGraph: {
    title: "Cold Chain Logistics | Temperature-Controlled Cargo Solutions",
    description: "Professional cold chain logistics with GDP compliance, real-time monitoring & 98% excursion prevention. Pharma, perishables & frozen cargo worldwide.",
    url: "https://safefastex.com/services/cold-chain",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/cold-chain-hero.jpg",
      alt: "Cold Chain Logistics Services"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cold Chain Logistics | Temperature-Controlled Cargo Solutions",
    description: "Professional cold chain with GDP compliance & 98% excursion prevention for pharma & perishables.",
    images: ["https://safefastex.com/images/cold-chain-hero.jpg"],
    site: "@safefastex"
  },
};

export default function ColdChainPage() {
  const data = getService("coldChain");
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
            "serviceType": "Cold Chain Logistics",
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
              "name": "UAE and Global Routes"
            },
            "description": "SafeFastEx provides specialized cold chain logistics with GDP compliance, calibrated IoT monitoring, and 98% excursion prevention for pharmaceuticals, medical supplies, and perishable goods.",
            "offers": {
              "@type": "Offer",
              "url": "https://safefastex.com/services/cold-chain",
              "priceCurrency": "AED",
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
                "name": "What is cold chain logistics?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cold chain logistics manages temperature-sensitive products like pharmaceuticals and perishables to maintain quality and integrity during transport and storage."
                }
              },
              {
                "@type": "Question",
                "name": "What temperature ranges can you manage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We manage frozen (-20°C), chilled (2-8°C), and controlled room temperature (CRT, 15-25°C) ranges with precision monitoring."
                }
              },
              {
                "@type": "Question",
                "name": "Are your cold chain services GDP compliant?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our processes are fully aligned with Good Distribution Practices (GDP) for the pharmaceutical industry with validated procedures."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide temperature data loggers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide calibrated single-use and multi-use IoT data loggers for real-time temperature and humidity tracking."
                }
              },
              {
                "@type": "Question",
                "name": "How do you handle temperature excursions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our 24/7 control tower receives automated alerts and initiates pre-defined SOPs to intervene and protect the product before damage occurs."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer validated shipping lanes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We have over 120 validated lanes for pharma shipments, ensuring consistent temperature control from end to end."
                }
              },
              {
                "@type": "Question",
                "name": "What industries use your cold chain services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We primarily serve pharmaceutical, life sciences, biotech, and high-value food and beverage industries requiring temperature control."
                }
              },
              {
                "@type": "Question",
                "name": "Can you provide thermal packaging solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we design and provide qualified thermal packaging solutions based on product requirements and transit duration."
                }
              },
              {
                "@type": "Question",
                "name": "Is your staff trained for cold chain handling?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our staff undergoes rigorous training on GDP standards and cold chain handling protocols for safe product management."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get a quote for cold chain shipment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact our cold chain specialists with your product details, temperature requirements, and route to get a tailored solution and quote."
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
