
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import RequestQuote from "./components/home/RequestQuote";
import Footer from "./components/common/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <RequestQuote />
      </main>
      <Footer />
    </>
  );
}
