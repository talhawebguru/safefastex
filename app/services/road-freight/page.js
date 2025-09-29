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
  title: "Road Freight Services UAE & GCC | SafeFastEx Trucking Solutions",
  description: "SafeFastEx offers reliable road freight services across UAE, GCC, and 22 countries. FTL, LTL, refrigerated, and high-value cargo with real-time tracking.",
  keywords: "road freight UAE, trucking services GCC, FTL LTL transport, cross-border trucking, refrigerated cargo, real-time tracking, SafeFastEx",
  alternates: { canonical: "/services/road-freight" },
  openGraph: {
    title: "Road Freight Services UAE & GCC | SafeFastEx Trucking Solutions",
    description: "SafeFastEx offers reliable road freight services across UAE, GCC, and 22 countries. FTL, LTL, refrigerated, and high-value cargo with real-time tracking.",
    url: "https://safefastex.com/services/road-freight",
    type: "article",
    siteName: "SafeFastEx",
  },
  twitter: {
    card: "summary_large_image",
    title: "Road Freight Services UAE & GCC | SafeFastEx Trucking Solutions",
    description: "SafeFastEx offers reliable road freight services across UAE, GCC, and 22 countries. FTL, LTL, refrigerated, and high-value cargo with real-time tracking.",
    site: "@safefastex",
  },
};

export default function RoadFreightPage() {
  const data = getService("roadFreight");
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: data.title },
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
            "serviceType": "Road Freight Services",
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
              "name": "UAE, GCC, and International Corridors"
            },
            "offers": {
              "@type": "Offer",
              "url": "https://safefastex.com/services/road-freight",
              "priceCurrency": "AED",
              "eligibleRegion": {
                "@type": "Place",
                "name": "United Arab Emirates"
              }
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
                "name": "What is road freight service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Road freight service is the transportation of goods by trucks across domestic and international routes. SafeFastEx provides FTL, LTL, refrigerated, and secure road freight across UAE, GCC, and beyond."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide full truckload (FTL) and less-than-truckload (LTL) options?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafeFastEx offers both FTL and LTL road freight services with optimized load planning to reduce costs and improve efficiency."
                }
              },
              {
                "@type": "Question",
                "name": "Can I track my road freight shipment in real-time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all shipments are equipped with live GPS tracking, milestone updates, and automated alerts via our client portal."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle temperature-controlled cargo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafeFastEx operates a specialized fleet for cold chain logistics with validated temperature monitoring and backup contingency routing."
                }
              },
              {
                "@type": "Question",
                "name": "Which countries do you cover with road freight?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We cover all major corridors in UAE and GCC, plus cross-border trucking to 22 countries with bonded solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Do you support high-value cargo security?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafeFastEx offers dual-driver protocols, geofenced routing, trailer seals, and escort services for high-value cargo shipments."
                }
              },
              {
                "@type": "Question",
                "name": "What is your on-time delivery rate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We achieve a 97% on-time delivery rate thanks to advanced tracking, route optimization, and proactive exception management."
                }
              },
              {
                "@type": "Question",
                "name": "Can you manage customs clearance for road freight?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide full customs clearance support including bonded trucking, documentation preparation, and regulatory compliance."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle oversized or hazardous cargo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our certified teams handle oversized, hazardous, and specialized cargo with safety protocols and compliance checks."
                }
              },
              {
                "@type": "Question",
                "name": "How do I request a quote for road freight services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can request a quote online at safefastex.com/request-quote or contact our customer service team directly for tailored pricing."
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
