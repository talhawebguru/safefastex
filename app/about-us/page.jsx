import React from "react";
import NameBanner from "../components/about/NameBanner";
import About from "../components/about/About";
import MarqueeText from "../components/common/MarqueeText";
import History from "../components/about/History";

const page = () => {
  return (
    <>
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
