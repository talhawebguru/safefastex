import React from "react";
import NameBanner from "../components/about/NameBanner";

import Highlights from "../components/services/Highlights";
import Services from "../components/home/Services";
import Features from "../components/home/Features";
import RequestQuote from "../components/home/RequestQuote";

const page = () => {
  // Define breadcrumbs for services page
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
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
