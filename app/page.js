
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Features from "./components/home/Features";
import Testimonial from "./components/home/Testimonial";
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
        <Testimonial />
        <RequestQuote />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}
