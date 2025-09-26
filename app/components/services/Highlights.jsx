"use client";
import React from "react";
import Container from "../common/Container";
import { motion } from "motion/react";
import { FaTruck, FaShip, FaTrain, FaPlane } from "react-icons/fa";

const highlights = [
  {
    icon: <FaTruck className="text-amber-400 h-8 w-8" />,
    title: "Road Freight",
    description: "Efficient and reliable trucking solutions for all cargo sizes, with real-time tracking and flexible routes.",
  },
  {
    icon: <FaShip className="text-amber-400 h-8 w-8" />,
    title: "Ship Freight",
    description: "Global shipping with secure container handling, customs support, and competitive rates.",
  },
  {
    icon: <FaTrain className="text-amber-400 h-8 w-8" />,
    title: "Train Freight",
    description: "Cost-effective rail transport for bulk goods, offering speed and sustainability across regions.",
  },
  {
    icon: <FaPlane className="text-amber-400 h-8 w-8" />,
    title: "Air Freight",
    description: "Fast, priority air cargo for urgent shipments, with end-to-end logistics and insurance options.",
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
        <div className="text-sm text-gray-500 font-medium mb-3">/ highlights /</div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-spaceGrotesk font-semibold text-gray-900 uppercase mb-2">
          Our Service Highlights
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
          Discover our core logistics solutions, designed for speed, reliability, and global reach.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);

export default Highlights;
