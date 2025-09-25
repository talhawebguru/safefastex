import React from "react";
import NameBanner from "../components/about/NameBanner";
import GetInTouch from "../components/common/GetInTouch";
import Map from "../components/contact/Map";
import Container from "../components/common/Container";

const page = () => {
  // Define breadcrumbs for Contact page
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];
  
  return (
    <main>
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
            <div className="w-full max-w-4xl">
              {/* Section Header */}
              <div className="text-center mb-12 lg:mb-16">
                <h2 className="text-neutral-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-['Space_Grotesk'] uppercase leading-tight mb-6">
                  WE ARE ALWAYS READY TO
                </h2>
                <h3 className="text-neutral-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-['Space_Grotesk'] uppercase leading-tight mb-6">
                  HELP YOU AND ANSWER
                </h3>
                <h4 className="text-neutral-900 text-3xl sm:text-4xl lg:text-5xl font-medium font-['Space_Grotesk'] uppercase leading-tight mb-8">
                  YOUR QUESTIONS
                </h4>
                <p className="text-neutral-600 text-base sm:text-lg font-normal font-['Manrope'] leading-relaxed max-w-2xl mx-auto">
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
                <div className="order-1 lg:order-2 space-y-8">
                  {/* Call Center */}
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                    <h5 className="text-neutral-900 text-xl font-semibold font-['Manrope'] mb-4">
                      Call Center
                    </h5>
                    <div className="space-y-2">
                      <p className="text-neutral-600 text-base font-normal font-['Manrope']">
                        +1 800 100 900 234
                      </p>
                      <p className="text-neutral-600 text-base font-normal font-['Manrope']">
                        +1 800 (888) 789-8678
                      </p>
                    </div>
                  </div>

                  {/* Our Location */}
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                    <h5 className="text-neutral-900 text-xl font-semibold font-['Manrope'] mb-4">
                      Our Location
                    </h5>
                    <div className="space-y-2">
                      <p className="text-neutral-600 text-base font-normal font-['Manrope']">
                        USA, New York - 10001
                      </p>
                      <p className="text-neutral-600 text-base font-normal font-['Manrope']">
                        764, First Avenue 1
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                    <h5 className="text-neutral-900 text-xl font-semibold font-['Manrope'] mb-4">
                      Email
                    </h5>
                    <div className="space-y-2">
                      <p className="text-neutral-600 text-base font-normal font-['Manrope']">
                        logico@mail.co
                      </p>
                    </div>
                  </div>

                  {/* Social Networks */}
                  <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
                    <h5 className="text-neutral-900 text-xl font-semibold font-['Manrope'] mb-4">
                      Social Networks
                    </h5>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center text-white hover:bg-amber-400 hover:text-neutral-900 transition-colors"
                      >
                        f
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center text-white hover:bg-amber-400 hover:text-neutral-900 transition-colors"
                      >
                        t
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center text-white hover:bg-amber-400 hover:text-neutral-900 transition-colors"
                      >
                        in
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center text-white hover:bg-amber-400 hover:text-neutral-900 transition-colors"
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
