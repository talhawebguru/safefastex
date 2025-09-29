import React from "react";
import NameBanner from "../components/about/NameBanner";
import GetInTouch from "../components/common/GetInTouch";
import Map from "../components/contact/Map";
import Container from "../components/common/Container";

export const metadata = {
  title: "Contact SafeFastEx | Get Shipping Quote & Expert Logistics Support",
  description: "Contact SafeFastEx for shipping quotes, logistics support & expert advice. Call +971-52-704-2536 or email for air, sea, road freight & warehousing services in UAE.",
  keywords: "contact SafeFastEx, shipping quote UAE, logistics support, freight forwarding contact, cargo services Dubai, supply chain consultation, transportation quote",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact SafeFastEx | Get Shipping Quote & Expert Logistics Support",
    description: "Contact SafeFastEx for shipping quotes, logistics support & expert advice. Call +971-52-704-2536 or email for comprehensive logistics solutions.",
    url: "https://safefastex.com/contact",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/contact-hero.jpg",
      alt: "Contact SafeFastEx Logistics"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SafeFastEx | Get Shipping Quote & Expert Logistics Support",
    description: "Get expert logistics support & shipping quotes. Contact SafeFastEx for comprehensive freight solutions.",
    images: ["https://safefastex.com/images/contact-hero.jpg"],
    site: "@safefastex"
  },
};

const page = () => {
  // Define breadcrumbs for Contact page
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];
  
  return (
    <main>
      {/* JSON-LD Schema for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SafeFastEx",
            "url": "https://safefastex.com",
            "logo": "https://safefastex.com/logo.png",
            "description": "Leading logistics and freight forwarding company in UAE providing air freight, sea freight, road freight, warehousing, customs clearance, and supply chain solutions.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office 123, Business Bay",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "postalCode": "00000",
              "addressCountry": "AE"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+971-52-704-2536",
                "contactType": "Customer Service",
                "areaServed": ["AE", "SA", "KW", "OM", "QA", "BH"],
                "availableLanguage": ["English", "Arabic"]
              },
              {
                "@type": "ContactPoint",
                "email": "info@safefastex.com",
                "contactType": "Customer Support",
                "areaServed": "Worldwide"
              }
            ],
            "sameAs": [
              "https://facebook.com/safefastex",
              "https://twitter.com/safefastex",
              "https://linkedin.com/company/safefastex",
              "https://instagram.com/safefastex"
            ],
            "foundingDate": "2015",
            "numberOfEmployees": "500+",
            "serviceArea": {
              "@type": "Place",
              "name": "UAE, GCC, and Worldwide"
            }
          })
        }}
      />

      {/* JSON-LD Schema for ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact SafeFastEx - Logistics & Freight Services",
            "description": "Get in touch with SafeFastEx for shipping quotes, logistics consultation, and expert freight forwarding services across UAE and worldwide.",
            "url": "https://safefastex.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "SafeFastEx",
              "telephone": "+971-52-704-2536",
              "email": "info@safefastex.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office 123, Business Bay",
                "addressLocality": "Dubai",
                "addressRegion": "Dubai",
                "postalCode": "00000",
                "addressCountry": "AE"
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
                "name": "How can I contact SafeFastEx for a shipping quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact SafeFastEx by calling +971-52-704-2536, emailing info@safefastex.com, or filling out our online contact form for a personalized shipping quote."
                }
              },
              {
                "@type": "Question",
                "name": "What are SafeFastEx office hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafeFastEx operates 24/7 for urgent shipments and customer support. Our main office hours are Sunday to Thursday, 9:00 AM to 6:00 PM GST."
                }
              },
              {
                "@type": "Question",
                "name": "Where is SafeFastEx located in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SafeFastEx is located in Dubai, UAE with offices in Business Bay and additional facilities across the Emirates for comprehensive logistics coverage."
                }
              },
              {
                "@type": "Question",
                "name": "Can I track my shipment through the contact page?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can request shipment tracking information through our contact form or by calling our customer service team with your tracking number."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide emergency shipping support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, SafeFastEx offers 24/7 emergency shipping support for urgent freight requirements. Contact us immediately for time-critical shipments."
                }
              },
              {
                "@type": "Question",
                "name": "What information do I need to provide for a shipping quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Please provide origin/destination, cargo dimensions/weight, preferred shipping method, timeline, and any special requirements for an accurate quote."
                }
              },
              {
                "@type": "Question",
                "name": "Can I schedule a consultation with SafeFastEx experts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can schedule a consultation with our logistics experts through our contact form or by calling +971-52-704-2536 for personalized advice."
                }
              },
              {
                "@type": "Question",
                "name": "Do you respond to contact inquiries on weekends?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we monitor contact inquiries on weekends and respond promptly. For urgent matters, our 24/7 support line is always available."
                }
              }
            ]
          })
        }}
      />

      {/* Name Banner Section */}
      <NameBanner
        title="Our Contact"
        backgroundImage="/images/nameBanner.jpg"
        breadcrumbs={breadcrumbs}
      />

      {/* Contact Form Section with White Background */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="flex justify-center">
            <div className="w-full">
              {/* Section Header */}
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-neutral-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                  WE ARE ALWAYS READY TO
                </h2>
                <h3 className="text-neutral-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                  HELP YOU AND ANSWER
                </h3>
                <h4 className="text-neutral-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-['Space_Grotesk'] uppercase leading-tight mb-4">
                  YOUR QUESTIONS
                </h4>
                <p className="text-neutral-600 text-base sm:text-lg font-normal font-manrope leading-relaxed max-w-2xl mx-auto">
                  Get in touch today through our easy contact form, track orders and packages throughout our worldwide distribution network.
                </p>
              </div>

              {/* Contact Form and Info Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Contact Form */}
                <div className="order-2 lg:order-1">
                  <GetInTouch />
                </div>

                {/* Contact Information */}
                <div className="order-1 lg:order-2 space-y-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Call Center */}
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                    <h5 className="text-neutral-900 text-xl font-semibold font-manrope mb-4">
                      Call Center
                    </h5>
                    <div className="space-y-2">
                      <p className="text-neutral-600 text-base font-normal font-manrope">
                        +971-52-704-2536
                      </p>
                      <p className="text-neutral-600 text-base font-normal font-manrope">
                        24/7 Emergency Support
                      </p>
                    </div>
                  </div>

                  {/* Our Location */}
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                    <h5 className="text-neutral-900 text-xl font-semibold font-manrope mb-4">
                      Our Location
                    </h5>
                    <div className="space-y-2">
                      <p className="text-neutral-600 text-base font-normal font-manrope">
                        UAE, Dubai - Business Bay
                      </p>
                      <p className="text-neutral-600 text-base font-normal font-manrope">
                        Office 123, Bay Square Building 1
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                    <h5 className="text-neutral-900 text-xl font-semibold font-manrope mb-4">
                      Email
                    </h5>
                    <div className="space-y-2">
                      <p className="text-neutral-600 text-base font-normal font-manrope">
                        info@safefastex.com
                      </p>
                      <p className="text-neutral-600 text-base font-normal font-manrope">
                        quotes@safefastex.com
                      </p>
                    </div>
                  </div>

                  {/* Social Networks */}
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                    <h5 className="text-neutral-900 text-xl font-semibold font-manrope mb-4">
                      Social Networks
                    </h5>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center text-white hover:bg-[#39C0C8] hover:text-neutral-900 transition-colors"
                      >
                        f
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center text-white hover:bg-[#39C0C8] hover:text-neutral-900 transition-colors"
                      >
                        t
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center text-white hover:bg-[#39C0C8] hover:text-neutral-900 transition-colors"
                      >
                        in
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center text-white hover:bg-[#39C0C8] hover:text-neutral-900 transition-colors"
                      >
                        ig
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section - Full Width */}
      <Map />
    </main>
  );
};

export default page;
