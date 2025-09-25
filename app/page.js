
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Features from "./components/home/Features";
import RequestQuote from "./components/home/RequestQuote";
import Footer from "./components/common/Footer";
import Blogs from "./components/home/Blogs";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Features />
        <RequestQuote />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
