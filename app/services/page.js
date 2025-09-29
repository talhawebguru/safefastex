import React from "react";
import NameBanner from "../components/about/NameBanner";

import Highlights from "../components/services/Highlights";
import Services from "../components/home/Services";
import Features from "../components/home/Features";
import RequestQuote from "../components/home/RequestQuote";

export const metadata = {
  title: "Logistics & Freight Forwarding Services in UAE | SafeFastEx",
  description: "Explore SafeFastEx logistics services in UAE including air freight, sea freight, road transport, warehousing, cold chain, customs clearance, and project cargo handling. Trusted supply chain partner since 2000.",
  keywords: "logistics services UAE, freight forwarding UAE, air freight UAE, sea freight shipping UAE, road transport UAE, cold chain logistics UAE, customs clearance UAE, pharma logistics UAE, supply chain solutions UAE",
  robots: "index, follow",
  alternates: { canonical: "https://safefastex.com/services" },
  openGraph: {
    title: "Logistics & Freight Forwarding Services in UAE | SafeFastEx",
    description: "Explore SafeFastEx logistics services in UAE including air freight, sea freight, road transport, warehousing, cold chain, customs clearance, and project cargo handling. Trusted supply chain partner since 2000.",
    url: "https://safefastex.com/services",
    type: "website",
    images: [
      {
        url: "https://safefastex.com/images/logo.png",
        width: 500,
        height: 174,
        alt: "SafeFastEx Logistics Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SafeFastEx",
    title: "Logistics & Freight Forwarding Services in UAE | SafeFastEx",
    description: "Explore SafeFastEx logistics services in UAE including air freight, sea freight, road transport, warehousing, cold chain, customs clearance, and project cargo handling.",
    image: "https://safefastex.com/images/logo.png",
  },
};

const page = () => {
  // Define breadcrumbs for services page
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ServicePage",
            "mainEntity": {
              "@type": "Organization",
              "name": "SafeFastEx",
              "url": "https://safefastex.com",
              "logo": "https://safefastex.com/logo.png",
              "description": "SafeFastEx provides logistics and freight forwarding services in UAE including air freight, sea freight, road transport, warehousing, cold chain, customs clearance, and project cargo handling.",
              "serviceType": [
                {
                  "@type": "Service",
                  "name": "Air Freight Forwarding",
                  "description": "Fast and reliable air freight services across global destinations with end-to-end visibility and secure handling."
                },
                {
                  "@type": "Service",
                  "name": "Sea Freight Forwarding",
                  "description": "Cost-effective sea freight solutions including FCL, LCL, and international trade support with customs clearance."
                },
                {
                  "@type": "Service",
                  "name": "Road Freight & Transport",
                  "description": "Flexible and affordable road transport services across UAE and GCC, backed by live GPS tracking."
                },
                {
                  "@type": "Service",
                  "name": "Warehousing & Storage",
                  "description": "Secure warehousing solutions with temperature-controlled storage and modern distribution facilities."
                },
                {
                  "@type": "Service",
                  "name": "Cold Chain & Medical Shipments",
                  "description": "Specialized cold chain logistics with temperature monitoring, alarms, and pharma-grade compliance."
                },
                {
                  "@type": "Service",
                  "name": "Customs Clearance",
                  "description": "Efficient customs clearance solutions ensuring smooth trade compliance and hassle-free delivery."
                },
                {
                  "@type": "Service",
                  "name": "Project & Heavy Cargo",
                  "description": "End-to-end handling of oversized, project, and heavy cargo shipments with expert planning and execution."
                },
                {
                  "@type": "Service",
                  "name": "Door-to-Door Delivery",
                  "description": "Convenient door-to-door freight solutions ensuring safe, fast, and reliable last-mile delivery."
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-52-704-2536",
                "contactType": "customer support",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic"]
              },
              "sameAs": [
                "https://www.facebook.com/safefastex",
                "https://www.linkedin.com/company/safefastex",
                "https://www.twitter.com/safefastex",
                "https://www.youtube.com/safefastex"
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What logistics services does SafeFastEx provide in the UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafeFastEx offers air freight, sea freight, road transport, warehousing, cold chain logistics, customs clearance, and project cargo handling."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide temperature-controlled logistics for pharma and medical shipments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafeFastEx specializes in cold chain logistics with temperature monitoring, real-time alerts, and pharma-grade compliance."
                }
              },
              {
                "@type": "Question",
                "name": "Can I track my shipment in real time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. All shipments come with live GPS tracking for full supply chain visibility."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle customs clearance in UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our customs clearance team ensures fast and compliant clearance for all types of goods."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer international freight forwarding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide global freight forwarding through air and sea shipping with competitive rates."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide door-to-door delivery services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafeFastEx offers convenient and reliable door-to-door delivery services within UAE and internationally."
                }
              },
              {
                "@type": "Question",
                "name": "Do you handle oversized or project cargo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in project cargo and heavy shipments, offering tailored planning and execution."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer warehousing and storage facilities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide secure warehousing with both standard and temperature-controlled storage options."
                }
              },
              {
                "@type": "Question",
                "name": "How can I request a quote for logistics services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can request a quote directly through our website or contact our support team via phone or email."
                }
              },
              {
                "@type": "Question",
                "name": "What makes SafeFastEx different from other logistics providers in UAE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our advanced tracking systems, cold chain expertise, and 20+ years of experience make us a trusted logistics partner."
                }
              }
            ]
          })
        }}
      />
      <main>
        <NameBanner
          title="/ Services /"
          backgroundImage="/images/nameBanner.jpg"
          breadcrumbs={breadcrumbs}
        />
        <Highlights />
        <Services />
        <Features />
        <RequestQuote />
      </main>
    </>
  );
};

export default page;
