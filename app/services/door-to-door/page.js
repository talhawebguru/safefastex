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
  title: "Door-to-Door Delivery Services | SafeFastEx",
  description:
    "Fully managed door-to-door logistics with multimodal transport, customs clearance and unified tracking.",
  alternates: { canonical: "/services/door-to-door" },
  openGraph: {
    title: "Door-to-Door Delivery Services | SafeFastEx",
    description:
      "Fully managed door-to-door logistics with multimodal transport, customs clearance and unified tracking.",
    url: "https://example.com/services/door-to-door",
    type: "article",
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
