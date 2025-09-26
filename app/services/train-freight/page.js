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
  title: "Train Freight Services | SafeFastEx",
  description:
    "Sustainable rail & intermodal freight: bulk, containerized cargo, integrated drayage and emissions reduction programs.",
  alternates: { canonical: "/services/train-freight" },
  openGraph: {
    title: "Train Freight Services | SafeFastEx",
    description:
      "Sustainable rail & intermodal freight: bulk, containerized cargo, integrated drayage and emissions reduction programs.",
    url: "https://example.com/services/train-freight",
    type: "article",
  },
};

export default function TrainFreightPage() {
  const data = getService("trainFreight");
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: data.title },
  ];

  return (
    <main>
      <NameBanner
        title={`/ ${data.title} /`}
        backgroundImage="/images/nameBanner.jpg"
        breadcrumbs={breadcrumbs}
      />
      <ServiceOverview title={data.title} tagline={data.tagline} intro={data.intro} />
      <BenefitCards benefits={data.benefits} />
      <ProcessSteps process={data.process} />
      <StatsBar stats={data.stats} />
      <FAQ faqs={data.faqs} />
      <RelatedServices related={data.related} />
      <ServiceCTA {...data.cta} />
    </main>
  );
}