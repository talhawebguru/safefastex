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
  title: "Warehousing & Storage UAE | 3PL Fulfillment & Distribution",
  description: "Professional warehousing & storage in UAE with 99.8% accuracy. WMS, 3PL fulfillment, bonded storage & value-added services. Get quote today.",
  keywords: "warehousing UAE, 3PL fulfillment, storage facilities Dubai, warehouse management system, bonded warehousing, distribution center, inventory management",
  alternates: { canonical: "/services/warehousing-storage" },
  openGraph: {
    title: "Warehousing & Storage UAE | 3PL Fulfillment & Distribution",
    description: "Professional warehousing & storage in UAE with 99.8% accuracy. WMS, 3PL fulfillment, bonded storage & value-added services.",
    url: "https://safefastex.com/services/warehousing-storage",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/warehousing-hero.jpg",
      alt: "Warehousing & Storage Services"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Warehousing & Storage UAE | 3PL Fulfillment & Distribution",
    description: "Professional UAE warehousing with 99.8% accuracy. WMS, 3PL fulfillment & value-added services.",
    images: ["https://safefastex.com/images/warehousing-hero.jpg"],
    site: "@safefastex"
  },
};

export default function WarehousingStoragePage() {
  const data = getService("warehousingStorage");
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
            "serviceType": "Warehousing & Storage Services",
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
              "name": "UAE - Dubai, Sharjah, Abu Dhabi"
            },
            "description": "SafeFastEx provides secure, scalable warehousing and storage services in the UAE with advanced WMS technology, 99.8% inventory accuracy, and value-added services for optimal supply chain management.",
            "offers": {
              "@type": "Offer",
              "url": "https://safefastex.com/services/warehousing-storage",
              "priceCurrency": "AED",
              "eligibleRegion": { "@type": "Place", "name": "United Arab Emirates" },
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
                "name": "What types of warehousing do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer ambient, temperature-controlled (chilled and frozen), and bonded warehousing solutions across the UAE with flexible capacity."
                }
              },
              {
                "@type": "Question",
                "name": "Can you handle e-commerce fulfillment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our facilities are equipped for B2C and B2B e-commerce fulfillment, including pick-pack operations and dispatch services."
                }
              },
              {
                "@type": "Question",
                "name": "Is your Warehouse Management System (WMS) integrated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our advanced WMS provides real-time inventory data and can be integrated with your ERP or e-commerce platform for seamless operations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer value-added services (VAS)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide a comprehensive range of VAS, including kitting, bundling, relabeling, quality control checks, and light assembly services."
                }
              },
              {
                "@type": "Question",
                "name": "Are your warehouses secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our facilities feature 24/7 CCTV monitoring, controlled access zones, and fire suppression systems to ensure maximum security and safety."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide bonded warehousing in Dubai or Sharjah?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we operate customs-bonded warehouses that allow for deferred duty and tax payments, optimizing your cash flow."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure inventory accuracy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use a robust WMS, regular cycle counting, and strict receiving/dispatch processes to maintain our industry-leading 99.8% inventory accuracy."
                }
              },
              {
                "@type": "Question",
                "name": "What is the benefit of using your distribution hubs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our strategically located hubs reduce transit times, lower transportation costs, and improve delivery speed to your customers."
                }
              },
              {
                "@type": "Question",
                "name": "Can you manage both palletized and non-palletized goods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we handle all types of goods with flexible racking systems and floor space for both palletized and bulk items."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you serve with your warehousing solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve retail, FMCG, electronics, automotive, pharmaceuticals, and industrial sectors with tailored warehousing solutions."
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
