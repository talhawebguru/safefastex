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
  title: "Door-to-Door Delivery | Global Shipping & Logistics Solutions",
  description: "Complete door-to-door delivery service with 96% on-time rate. Pickup, customs, tracking & final mile to 190+ countries. Simplify shipping today.",
  keywords: "door to door delivery, international shipping, global logistics, pickup delivery service, end to end shipping, multimodal transport, last mile delivery",
  alternates: { canonical: "/services/door-to-door" },
  openGraph: {
    title: "Door-to-Door Delivery | Global Shipping & Logistics Solutions",
    description: "Complete door-to-door delivery service with 96% on-time rate. Pickup, customs, tracking & final mile to 190+ countries.",
    url: "https://safefastex.com/services/door-to-door",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/door-to-door-hero.jpg",
      alt: "Door-to-Door Delivery Services"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Door-to-Door Delivery | Global Shipping & Logistics Solutions",
    description: "Complete door-to-door delivery with 96% on-time rate to 190+ countries. Simplify your shipping.",
    images: ["https://safefastex.com/images/door-to-door-hero.jpg"],
    site: "@safefastex"
  },
};

export default function DoorToDoorPage() {
  const data = getService("doorToDoor");
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
            "serviceType": "Door-to-Door Delivery Services",
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
              "name": "190+ Countries Worldwide"
            },
            "description": "SafeFastEx provides fully managed door-to-door delivery services coordinating origin pickup, multimodal transport, customs clearance, and last-mile delivery with 96% on-time performance.",
            "offers": {
              "@type": "Offer",
              "url": "https://safefastex.com/services/door-to-door",
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
                "name": "What is door-to-door delivery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Door-to-door delivery is a service where we manage the entire shipment process, from pickup at the origin to delivery at the final destination."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle both domestic and international door-to-door services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide door-to-door services within the UAE and to over 190 countries worldwide with complete logistics management."
                }
              },
              {
                "@type": "Question",
                "name": "Is customs clearance included in the door-to-door service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our service includes managing all customs documentation and clearance procedures for seamless international delivery."
                }
              },
              {
                "@type": "Question",
                "name": "Can I track my door-to-door shipment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. You get end-to-end visibility through our unified tracking portal with real-time updates and predictive ETAs."
                }
              },
              {
                "@type": "Question",
                "name": "What shipping modes do you use for door-to-door?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use a flexible combination of air, sea, and road freight to create the most efficient and cost-effective route for your shipment."
                }
              },
              {
                "@type": "Question",
                "name": "Is this service suitable for e-commerce businesses?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, it's ideal for e-commerce as it simplifies fulfillment and provides a seamless delivery experience for your customers."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle returns or reverse logistics?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we can integrate reverse logistics and returns management into your door-to-door solution for complete supply chain support."
                }
              },
              {
                "@type": "Question",
                "name": "Are customs duties and taxes included in the price?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer options for both DDP (Delivered Duty Paid) and DAP (Delivered at Place) based on your preference and requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Can you consolidate multiple small shipments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we can consolidate multiple SKUs or small packages at the origin to optimize cost and handling efficiency."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get a quote for door-to-door delivery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply provide the origin and destination addresses, along with shipment details, to receive a comprehensive quote and transit plan."
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
