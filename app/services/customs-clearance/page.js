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
  title: "Customs Clearance UAE | Expert Import Export Broker Services",
  description: "Fast customs clearance in UAE with 99.5% accuracy. Licensed customs broker for import/export, HS classification & duty optimization. Get quote today.",
  keywords: "customs clearance UAE, customs broker Dubai, import export clearance, HS classification, duty optimization, trade compliance, customs documentation",
  alternates: { canonical: "/services/customs-clearance" },
  openGraph: {
    title: "Customs Clearance UAE | Expert Import Export Broker Services",
    description: "Fast customs clearance in UAE with 99.5% accuracy. Licensed customs broker for import/export, HS classification & duty optimization.",
    url: "https://safefastex.com/services/customs-clearance",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/customs-hero.jpg",
      alt: "Customs Clearance Services"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Customs Clearance UAE | Expert Import Export Broker Services",
    description: "Fast UAE customs clearance with 99.5% accuracy. Licensed broker for import/export & duty optimization.",
    images: ["https://safefastex.com/images/customs-hero.jpg"],
    site: "@safefastex"
  },
};

export default function CustomsClearancePage() {
  const data = getService("customsClearance");
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
            "serviceType": "Customs Clearance Services",
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
              "name": "United Arab Emirates"
            },
            "description": "SafeFastEx provides expert customs clearance services in UAE with 99.5% accuracy rate, HS classification, duty optimization, and digital milestone visibility for import/export shipments.",
            "offers": {
              "@type": "Offer",
              "url": "https://safefastex.com/services/customs-clearance",
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
                "name": "What is customs clearance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Customs clearance is the process of preparing and submitting documentation to facilitate export or import, ensuring compliance with local laws and regulations."
                }
              },
              {
                "@type": "Question",
                "name": "Why is customs clearance important in the UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Proper customs clearance in the UAE prevents shipment delays, fines, and ensures your goods enter or exit the country legally and efficiently."
                }
              },
              {
                "@type": "Question",
                "name": "Can you act as my customs broker in the UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafeFastEx is a licensed customs broker in the UAE, handling all interactions with customs authorities on your behalf."
                }
              },
              {
                "@type": "Question",
                "name": "How long does customs clearance take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With pre-submitted and accurate documentation, we achieve an average clearance time of less than 6 hours in the UAE."
                }
              },
              {
                "@type": "Question",
                "name": "Can you classify complex products with HS codes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our experts handle HS classification for all goods, including multi-component and regulatory-sensitive products with precision."
                }
              },
              {
                "@type": "Question",
                "name": "Do you assist with duty recovery and optimization?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We evaluate eligibility for FTAs, duty drawbacks, and re-export relief to minimize your costs and optimize duty payments."
                }
              },
              {
                "@type": "Question",
                "name": "What documents are required for customs clearance in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typically, you need a commercial invoice, packing list, bill of lading/air waybill, and certificate of origin for customs clearance."
                }
              },
              {
                "@type": "Question",
                "name": "Is restricted party screening included in your service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we use automated systems to screen against restricted party lists as part of our compliance workflow."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle temporary imports and exports?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we manage temporary import/export processes, including ATA Carnets and re-export documentation for temporary goods."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle clearance for all freight types?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide customs clearance for air, sea, and road freight shipments of all sizes and types across the UAE."
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
