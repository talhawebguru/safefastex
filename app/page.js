import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Features from "./components/home/Features";
import Testimonial from "./components/home/Testimonial";
import RequestQuote from "./components/home/RequestQuote";
import Blogs from "./components/home/Blogs";


export const metadata = {
  title: "SafeFastEx | Global Freight Forwarding & Logistics UAE",
  description: "SafeFastEx provides air, sea, and road freight, warehousing, customs clearance, and 24/7 logistics support across UAE and worldwide with reliable delivery.",
  alternates: { canonical: "https://safefastex.com/" },
  openGraph: {
    title: "SafeFastEx | Global Freight Forwarding & Logistics UAE",
    description: "SafeFastEx provides air, sea, and road freight, warehousing, customs clearance, and 24/7 logistics support across UAE and worldwide with reliable delivery.",
    url: "https://safefastex.com/",
    type: "website",
    images: [
      { url: "https://safefastex.com/images/logo.png", width: 500, height: 174, alt: "SafeFastEx Global Logistics Logo" },
      { url: "https://safefastex.com/images/features.png", width: 800, height: 600, alt: "SafeFastEx Features" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@SafeFastEx",
    title: "SafeFastEx | Global Freight Forwarding & Logistics UAE",
    description: "Trusted logistics partner for air, sea, and road freight, warehousing, and customs clearance in the UAE and worldwide.",
    image: "https://safefastex.com/images/logo.png"
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://safefastex.com/#organization",
                "name": "SafeFastEx",
                "alternateName": "Safe Fast Express",
                "url": "https://safefastex.com/",
                "logo": "https://safefastex.com/images/logo.png",
                "description": "SafeFastEx is a global logistics and freight forwarding company providing air, sea, and road freight, warehousing, customs clearance, cold chain solutions, and 24/7 support across the UAE and worldwide.",
                "sameAs": [
                  "https://www.facebook.com/safefastex",
                  "https://www.linkedin.com/company/safefastex",
                  "https://www.instagram.com/safefastex"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+971-0527042536",
                  "contactType": "customer service",
                  "areaServed": "AE",
                  "availableLanguage": ["English", "Arabic"]
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://safefastex.com/#website",
                "url": "https://safefastex.com/",
                "name": "SafeFastEx",
                "publisher": { "@id": "https://safefastex.com/#organization" },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://safefastex.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://safefastex.com/#localbusiness",
                "name": "SafeFastEx UAE Office",
                "image": "https://safefastex.com/images/logo.png",
                "url": "https://safefastex.com/",
                "telephone": "+971-0527042536",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Al Sajaa Industrial, Al Sajaah",
                  "addressLocality": "Sharjah",
                  "addressRegion": "Sharjah",
                  "postalCode": "00000",
                  "addressCountry": "AE"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "25.3573",
                  "longitude": "55.4033"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                "parentOrganization": {
                  "@id": "https://safefastex.com/#organization"
                }
              },
              {
                "@type": "Service",
                "@id": "https://safefastex.com/#services",
                "serviceType": "Global Freight Forwarding & Logistics",
                "provider": { "@id": "https://safefastex.com/#organization" },
                "areaServed": {
                  "@type": "Place",
                  "name": "United Arab Emirates, GCC, and Worldwide"
                },
                "offers": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Air Freight Forwarding",
                      "description": "Fast and reliable international air cargo services with global coverage and shipment tracking."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sea Freight Forwarding",
                      "description": "Cost-effective ocean freight forwarding for full-container and less-than-container shipments."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Road Freight & Transport",
                      "description": "Domestic and cross-border trucking services across the UAE and GCC."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Warehousing & Storage",
                      "description": "Secure storage, inventory management, and packaging solutions."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Customs Clearance",
                      "description": "Efficient import/export clearance with compliance and documentation support."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cold Chain & Medical Shipments",
                      "description": "Specialized handling for pharmaceutical, medical, and perishable goods."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      <main>
        <Hero />
        <Services />
        <Features />
        <Testimonial />
        <RequestQuote />
        <Blogs />
      </main>
    </>
  );
}
