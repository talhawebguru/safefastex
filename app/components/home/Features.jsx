"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Container from "../common/Container";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import FeatureImage from "@/public/images/features.png"; // Replace with your image path
import Link from "next/link";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0); // First feature expanded by default

  const features = [
    {
      id: 1,
      title: "01. Transparent Pricing",
      description:
        "Clear quotes, no hidden fees. Know exactly what you pay for every shipment.",
    },
    {
      id: 2,
      title: "02. Mobile Shipment Tracking",
      description:
        "Real-time visibility for every shipment, from pickup to delivery, via our online portal.",
    },
    {
      id: 3,
      title: "03. Secure Handling",
      description:
        "Careful management of valuable and sensitive cargo, including cold chain and project cargo.",
    },
    {
      id: 4,
      title: "04. Global Reach",
      description:
        "International and local delivery, door-to-door, with customs clearance and warehousing support.",
    },
    {
      id: 5,
      title: "05. 24/7 Support",
      description:
        "Dedicated team available around the clock to answer your questions and resolve issues.",
    },
    {
      id: 6,
      title: "06. Warehousing & Storage",
      description:
        "Safe, climate-controlled facilities for all goods, with flexible storage options.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
        {/* Left Side - Image */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-2 lg:order-1 w-full"
        >
          <div className="w-full h-full">
            <Image
              src={FeatureImage}
              alt="Features"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <Container>
            <div className="space-y-6 sm:space-y-8 py-8 sm:py-12 lg:py-16">
              {/* Features Label */}
              <motion.div
                variants={itemVariants}
                className="text-neutral-900 text-xs sm:text-sm font-medium font-['Manrope'] leading-loose"
              >
                / features /
              </motion.div>

              {/* Section Heading */}
              <motion.div
                variants={containerVariants}
                className="space-y-1 sm:space-y-2"
              >
                <motion.h2
                  variants={wordVariants}
                  className="text-neutral-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight"
                >
                  Why Choose SafeFastEx?
                </motion.h2>
              </motion.div>

              {/* Features List */}
              <motion.div variants={containerVariants} className="space-y-0">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    variants={itemVariants}
                    className={`border-t border-neutral-900 ${
                      index === features.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <button
                      onClick={() =>
                        setActiveFeature(activeFeature === index ? -1 : index)
                      }
                      className="w-full py-3 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                    >
                      <span className="text-neutral-900 text-base sm:text-lg lg:text-xl font-semibold font-['Manrope'] leading-loose pr-4">
                        {feature.title}
                      </span>
                      <div className="flex-shrink-0">
                        <div
                          className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-colors ${
                            activeFeature === index
                              ? "bg-[#39C0C8]"
                              : "bg-neutral-900"
                          }`}
                        />
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: activeFeature === index ? "auto" : 0,
                        opacity: activeFeature === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 sm:pb-6">
                        <p className="text-zinc-800 text-sm sm:text-base lg:text-lg font-normal font-['Manrope'] leading-relaxed sm:leading-loose">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Explore More Button */}
              <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                  className="hidden lg:block"
                >
                  <Link
                    href="/services"
                    className="group relative inline-flex items-center rounded-2xl border border-gray-900 text-gray-900 pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/60"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gray-900 transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
                    />
                    <span className="relative z-10 font-semibold group-hover:text-white">
                      Explore More
                    </span>
                    <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#39C0C8] text-gray-900">
                      <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </Container>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
