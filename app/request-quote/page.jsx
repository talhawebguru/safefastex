import React from 'react'
import NameBanner from '../components/about/NameBanner';
import GeneralForm from '../components/request-quote/GeneralForm';

export const metadata = {
  title: "Get Free Shipping Quote | Air, Sea & Road Freight Rates UAE",
  description: "Get instant free shipping quotes from SafeFastEx. Compare air freight, sea freight, road freight & warehousing rates. Expert logistics solutions across UAE & GCC.",
  keywords: "free shipping quote, freight quote UAE, air freight rates, sea freight pricing, road freight quote, logistics quote Dubai, cargo shipping rates, warehousing quote",
  alternates: { canonical: "/request-quote" },
  openGraph: {
    title: "Get Free Shipping Quote | Air, Sea & Road Freight Rates UAE",
    description: "Get instant free shipping quotes from SafeFastEx. Compare air freight, sea freight, road freight & warehousing rates. Expert logistics solutions across UAE & GCC.",
    url: "https://safefastex.com/request-quote",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/quote-hero.jpg",
      alt: "Request Shipping Quote SafeFastEx"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Free Shipping Quote | Air, Sea & Road Freight Rates UAE",
    description: "Get instant free shipping quotes from SafeFastEx. Compare freight rates & expert logistics solutions.",
    images: ["https://safefastex.com/images/quote-hero.jpg"],
    site: "@safefastex"
  },
};

const page = () => {
  // Define breadcrumbs for request quote page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Request a Quote" }
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
            "serviceType": "Freight Quote Service",
            "provider": {
              "@type": "Organization",
              "name": "SafeFastEx",
              "url": "https://safefastex.com",
              "logo": "https://safefastex.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-52-704-2536",
                "contactType": "Sales",
                "areaServed": ["AE", "SA", "KW", "OM", "QA", "BH"]
              }
            },
            "areaServed": {
              "@type": "Place",
              "name": "UAE, GCC, and Worldwide"
            },
            "description": "Get instant free shipping quotes for air freight, sea freight, road freight, warehousing, customs clearance, and specialized logistics services from SafeFastEx.",
            "offers": {
              "@type": "Offer",
              "url": "https://safefastex.com/request-quote",
              "priceCurrency": "AED",
              "price": "0",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "0",
                "priceCurrency": "AED",
                "name": "Free Quote"
              },
              "eligibleRegion": { "@type": "Place", "name": "Worldwide" },
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      {/* JSON-LD Schema for WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Request Free Shipping Quote - SafeFastEx",
            "description": "Request a free shipping quote for air freight, sea freight, road freight, warehousing and logistics services from SafeFastEx. Get competitive rates instantly.",
            "url": "https://safefastex.com/request-quote",
            "mainEntity": {
              "@type": "Service",
              "name": "Free Shipping Quote Service",
              "provider": {
                "@type": "Organization",
                "name": "SafeFastEx"
              }
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://safefastex.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Request a Quote",
                  "item": "https://safefastex.com/request-quote"
                }
              ]
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
                "name": "How do I request a shipping quote from SafeFastEx?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply fill out our online quote form with your shipment details including origin, destination, cargo type, dimensions, and preferred service. You'll receive a competitive quote within 2-4 hours."
                }
              },
              {
                "@type": "Question",
                "name": "Is the shipping quote free?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all shipping quotes from SafeFastEx are completely free with no obligation. We provide transparent pricing for all our logistics services."
                }
              },
              {
                "@type": "Question",
                "name": "What information do I need to provide for an accurate quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Please provide origin/destination addresses, cargo type, weight, dimensions, preferred shipping method (air/sea/road), timeline, and any special handling requirements."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly will I receive my shipping quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most quotes are provided within 2-4 hours during business hours. For urgent requests, call +971-52-704-2536 for immediate assistance."
                }
              },
              {
                "@type": "Question",
                "name": "What shipping services can I get quotes for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide quotes for air freight, sea freight, road freight, door-to-door delivery, warehousing, customs clearance, project cargo, and cold chain logistics."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide quotes for international shipping?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide international shipping quotes to and from 190+ countries worldwide with competitive rates and reliable service."
                }
              },
              {
                "@type": "Question",
                "name": "Can I get multiple shipping options in one quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We provide multiple shipping options with different transit times and pricing to help you choose the best solution for your needs."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any hidden fees in your quotes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, SafeFastEx provides transparent, all-inclusive quotes with no hidden fees. All applicable charges are clearly itemized in your quote."
                }
              },
              {
                "@type": "Question",
                "name": "Can I request quotes for regular shipments?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we offer special contract rates for regular shippers. Contact us to discuss volume discounts and customized logistics solutions."
                }
              },
              {
                "@type": "Question",
                "name": "What happens after I submit my quote request?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our logistics experts will review your requirements and send a detailed quote via email. We may contact you for clarification if needed to ensure accuracy."
                }
              }
            ]
          })
        }}
      />

      <NameBanner
        title="Request a Quote"
        backgroundImage="/images/nameBanner.jpg"
        breadcrumbs={breadcrumbs}
      />
      
      <GeneralForm />
    </main>
  )
}

export default page