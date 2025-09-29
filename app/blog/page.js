import NameBanner from "../components/about/NameBanner";
import BlogGrid from "../components/common/BlogGrid";

export const metadata = {
  title: "Logistics Blog | Shipping Insights & Industry News | SafeFastEx",
  description: "Stay updated with latest logistics trends, shipping insights, freight forwarding tips & supply chain news. Expert advice on air freight, sea freight & warehousing.",
  keywords: "logistics blog, shipping news, freight forwarding insights, supply chain trends, air freight tips, sea freight updates, warehousing advice, UAE logistics news",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Logistics Blog | Shipping Insights & Industry News | SafeFastEx",
    description: "Stay updated with latest logistics trends, shipping insights, freight forwarding tips & supply chain news. Expert advice on air freight, sea freight & warehousing.",
    url: "https://safefastex.com/blog",
    type: "website",
    siteName: "SafeFastEx",
    images: [{
      url: "https://safefastex.com/images/blog-hero.jpg",
      alt: "SafeFastEx Logistics Blog"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistics Blog | Shipping Insights & Industry News | SafeFastEx",
    description: "Stay updated with latest logistics trends, shipping insights & expert freight forwarding advice.",
    images: ["https://safefastex.com/images/blog-hero.jpg"],
    site: "@safefastex"
  },
};

export default function BlogPage() {
  // Define breadcrumbs for blog page
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs" }
  ];

  return (
    <main>
      {/* JSON-LD Schema for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "SafeFastEx Logistics Blog",
            "description": "Expert insights on logistics, freight forwarding, shipping trends, and supply chain management from SafeFastEx - your trusted logistics partner in UAE.",
            "url": "https://safefastex.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "SafeFastEx",
              "url": "https://safefastex.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://safefastex.com/logo.png",
                "width": 600,
                "height": 200
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-52-704-2536",
                "contactType": "Customer Service",
                "areaServed": ["AE", "SA", "KW", "OM", "QA", "BH"]
              }
            },
            "about": [
              "Logistics",
              "Freight Forwarding",
              "Supply Chain Management",
              "Air Freight",
              "Sea Freight",
              "Road Freight",
              "Warehousing",
              "Customs Clearance"
            ],
            "inLanguage": "en-US",
            "audience": {
              "@type": "Audience",
              "audienceType": "Business professionals, logistics managers, supply chain professionals"
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
            "@type": "CollectionPage",
            "name": "SafeFastEx Logistics Blog - Industry Insights & News",
            "description": "Browse our comprehensive collection of logistics articles, shipping guides, industry insights, and expert advice on freight forwarding and supply chain management.",
            "url": "https://safefastex.com/blog",
            "mainEntity": {
              "@type": "Blog",
              "name": "SafeFastEx Logistics Blog"
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
                  "name": "Blog",
                  "item": "https://safefastex.com/blog"
                }
              ]
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://safefastex.com/blog?search={search_term_string}"
              },
              "query-input": "required name=search_term_string"
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
                "name": "What topics does the SafeFastEx blog cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our blog covers logistics trends, freight forwarding insights, shipping guides, supply chain management, air freight updates, sea freight news, warehousing tips, and customs clearance advice."
                }
              },
              {
                "@type": "Question",
                "name": "How often is the SafeFastEx blog updated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We publish new blog articles regularly, typically 2-3 times per week, covering the latest industry trends, shipping updates, and expert logistics advice."
                }
              },
              {
                "@type": "Question",
                "name": "Who writes the SafeFastEx blog articles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our blog articles are written by logistics experts, freight forwarding specialists, and industry professionals with years of experience in international shipping and supply chain management."
                }
              },
              {
                "@type": "Question",
                "name": "Can I subscribe to the SafeFastEx blog updates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can subscribe to our blog updates by contacting us or following our social media channels to stay informed about the latest logistics insights and industry news."
                }
              },
              {
                "@type": "Question",
                "name": "Are the blog articles relevant for UAE logistics?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! Our blog covers global logistics trends with specific focus on UAE, GCC, and Middle East shipping regulations, trade routes, and market insights."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide shipping guides in your blog?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we regularly publish comprehensive shipping guides, how-to articles, best practices, and step-by-step instructions for various logistics processes."
                }
              },
              {
                "@type": "Question",
                "name": "Can I suggest topics for the SafeFastEx blog?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We welcome topic suggestions from our readers. Contact us with your ideas, and we'll consider creating content that addresses your logistics questions and interests."
                }
              },
              {
                "@type": "Question",
                "name": "Are the blog articles written by industry experts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our blog content is created by experienced logistics professionals, certified freight forwarders, and supply chain experts with deep industry knowledge."
                }
              },
              {
                "@type": "Question",
                "name": "Do you cover international shipping regulations in your blog?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we regularly cover international shipping regulations, customs requirements, trade compliance updates, and regulatory changes affecting global logistics."
                }
              },
              {
                "@type": "Question",
                "name": "Can I share SafeFastEx blog articles?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We encourage sharing our blog articles with your network. Each article includes social sharing options for easy distribution."
                }
              }
            ]
          })
        }}
      />

        <NameBanner
          title="Our Blogs"
          backgroundImage="/images/nameBanner.jpg"
          breadcrumbs={breadcrumbs}
        />
        <BlogGrid 
          showHeader={false}
          showSeeAllButton={false}
          showPagination={true}
          postsPerPage={9}
          gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          spacing="gap-8 lg:gap-12"
        />
    </main>
  );
}