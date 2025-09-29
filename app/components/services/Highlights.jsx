"use client";
import React from "react";
import Container from "../common/Container";
import { motion } from "motion/react";
import { FaTruck, FaShip, FaPlane } from "react-icons/fa";

const highlights = [
  {
    icon: <FaTruck className="text-[#39C0C8] h-8 w-8" />,
    title: "Road Freight",
    description:
      "Flexible, reliable, and cost-effective ground transport across UAE and GCC.",
  },
  {
    icon: <FaShip className="text-[#39C0C8] h-8 w-8" />,
    title: "Sea Freight",
    description:
      "Global shipping solutions with optimized container handling, customs clearance, and competitive pricing.",
  },
  {
    icon: <FaPlane className="text-[#39C0C8] h-8 w-8" />,
    title: "Air Freight",
    description:
      "Fast, secure, and time-sensitive air cargo solutions backed by global airline partnerships.",
  },
];

const Highlights = () => (
  <section className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-white">
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <div className="text-sm text-gray-500 font-medium mb-3">
          / highlights /
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-spaceGrotesk font-semibold text-gray-900 uppercase mb-6">
          Our Service Highlights
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
          At SafeFastEx, we provide end-to-end logistics solutions designed for
          efficiency, transparency, and cost savings. From road, sea, and air
          freight to cold chain logistics and warehousing, our services ensure
          speed, safety, and global reach.{" "}
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {highlights.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
            className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm border border-gray-100"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

export default Highlights;
