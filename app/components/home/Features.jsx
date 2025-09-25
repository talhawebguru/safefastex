"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Container from "../common/Container";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import FeatureImage from "@/public/images/features.png"; // Replace with your image path

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0); // First feature expanded by default

  const features = [
    {
      id: 1,
      title: "01. Transparent pricing",
      description:
        "Pacific hake false trevally queen parrotfish black prickleback moss hake false trevally queen parrotfish black prichake false trevally queen parrotfish black prickleback mosskleback moss",
    },
    {
      id: 2,
      title: "02. Warehouse storage",
      description:
        "Comprehensive storage solutions with climate control and security monitoring for all your cargo needs.",
    },
    {
      id: 3,
      title: "03. Real time tracking",
      description:
        "Track your shipments in real-time with our advanced GPS and monitoring systems.",
    },
    {
      id: 4,
      title: "04. Security for cargo",
      description:
        "State-of-the-art security measures to protect your valuable shipments throughout transit.",
    },
    {
      id: 5,
      title: "05. Easy payment method",
      description:
        "Multiple payment options and flexible payment terms to suit your business needs.",
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
    <section className="py-16 lg:py-20 container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Left Side - Image */}
        <motion.div variants={itemVariants} className="order-2 lg:order-1">
          <Image src={FeatureImage} alt="Features" className="w-full h-auto" />
        </motion.div>

        {/* Right Side - Content */}
        <div className="order-1 lg:order-2 space-y-8">
          {/* Features Label */}
          <motion.div
            variants={itemVariants}
            className="text-neutral-900 text-sm font-medium font-['Manrope'] leading-loose"
          >
            / features /
          </motion.div>

          {/* Hero Text */}
          <motion.div variants={containerVariants} className="space-y-2">
            <motion.div
              variants={wordVariants}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="text-neutral-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                Unusual
              </span>
              <span className="text-neutral-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                things
              </span>
              <span className="text-neutral-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                we
              </span>
            </motion.div>
            <motion.div
              variants={wordVariants}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="text-neutral-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                do
              </span>
              <span className="text-neutral-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                work
              </span>
            </motion.div>
            <motion.div variants={wordVariants}>
              <span className="text-neutral-900 text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                efficiency
              </span>
            </motion.div>
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
                  className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-neutral-900 text-lg sm:text-xl font-semibold font-['Manrope'] leading-loose">
                    {feature.title}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    <div
                      className={`w-3.5 h-3.5 transition-colors ${
                        activeFeature === index
                          ? "bg-amber-400"
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
                  <div className="pb-6">
                    <p className="text-zinc-800 text-base sm:text-lg font-normal font-['Manrope'] leading-loose max-w-md">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Explore More Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-48 h-12 bg-gradient-to-r from-zinc-800/0 to-zinc-800 rounded-[10px] border border-zinc-800 overflow-hidden transition-all hover:from-zinc-700/0 hover:to-zinc-700"
            >
              <span className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-800 text-sm font-semibold font-['Manrope'] leading-tight tracking-tight">
                Explore more
              </span>
              <div className="absolute right-1 top-1 w-10 h-10 bg-zinc-800 rounded-[8px] flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                <FiArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
