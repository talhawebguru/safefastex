import React from "react";
import NameBanner from "../components/about/NameBanner";
import About from "../components/about/About";
import MarqueeText from "../components/common/MarqueeText";
import History from "../components/about/History";

export const metadata = {
  title: "About SafeFastEx | Leading Logistics & Freight Forwarding UAE",
  description:
    "Discover SafeFastEx, a trusted logistics company in UAE since 2000. We deliver air, sea & road freight, cold chain solutions, and global supply chain services.",
  keywords:
    "logistics company UAE, freight forwarding UAE, cold chain logistics, transportation services Sharjah, air freight UAE, sea freight UAE, road freight UAE, SafeFastEx",
  alternates: { canonical: "https://safefastex.com/about" },
  robots: "index, follow",
  openGraph: {
    title: "About SafeFastEx | Leading Logistics & Freight Forwarding UAE",
    description:
      "Discover SafeFastEx, a trusted logistics company in UAE since 2000. We deliver air, sea & road freight, cold chain solutions, and global supply chain services.",
    url: "https://safefastex.com/about",
    type: "profile",
    images: [
      {
        url: "https://safefastex.com/images/logo.png",
        width: 500,
        height: 174,
        alt: "SafeFastEx Global Logistics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SafeFastEx",
    title: "About SafeFastEx | Leading Logistics & Freight Forwarding UAE",
    description:
      "Discover SafeFastEx, a trusted logistics company in UAE since 2000. We deliver air, sea & road freight, cold chain solutions, and global supply chain services.",
    image: "https://safefastex.com/images/logo.png",
  },
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "SafeFastEx",
              "alternateName": "Safe Fast Express",
              "url": "https://safefastex.com",
              "logo": "https://safefastex.com/logo.png",
              "foundingDate": "2000",
              "founders": [
                { "@type": "Person", "name": "SafeFastEx Team" }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Al Sajaa Industrial",
                "addressLocality": "Sharjah",
                "addressCountry": "UAE"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+971-52-704-2536",
                  "contactType": "customer support",
                  "areaServed": "AE",
                  "availableLanguage": ["English", "Arabic"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+971-2-506-7345",
                  "contactType": "sales",
                  "areaServed": "AE",
                  "availableLanguage": ["English", "Arabic"]
                }
              ],
              "sameAs": [
                "https://www.facebook.com/safefastex",
                "https://www.twitter.com/safefastex",
                "https://www.linkedin.com/company/safefastex",
                "https://www.youtube.com/safefastex"
              ],
              "description": "SafeFastEx is a leading logistics and freight forwarding company in the UAE, specializing in air, sea, and road freight, cold chain management, and end-to-end supply chain solutions since 2000.",
              "knowsAbout": [
                "Air Freight Forwarding",
                "Sea Freight",
                "Road Transport",
                "Cold Chain Logistics",
                "Customs Clearance",
                "Warehousing & Distribution",
                "Door-to-Door Delivery",
                "Medical & Pharma Logistics",
                "Project Cargo Handling"
              ]
            }
          }),
        }}
      />
      <main>
        <NameBanner />
        <About />
        <History />
        <MarqueeText />
      </main>
    </>
  );
};

export default page;