"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";
import { FaCubes, FaShieldAlt, FaBoxOpen, FaMapMarkedAlt } from "react-icons/fa";
import { FaGaugeHigh } from "react-icons/fa6";
import { PiThermometerColdFill } from "react-icons/pi";

const iconMap = {
  capacity: <FaCubes className="h-7 w-7 text-[#39C0C8]" />,
  tracking: <FaMapMarkedAlt className="h-7 w-7 text-[#39C0C8]" />,
  secure: <FaShieldAlt className="h-7 w-7 text-[#39C0C8]" />,
  special: <PiThermometerColdFill className="h-7 w-7 text-[#39C0C8]" />,
  speed: <FaGaugeHigh className="h-7 w-7 text-[#39C0C8]" />,
  default: <FaBoxOpen className="h-7 w-7 text-[#39C0C8]" />,
};

const BenefitCards = ({ benefits }) => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
      <Container>
        <div className="mb-10 sm:mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-spaceGrotesk font-semibold uppercase text-gray-900"
          >
            Key Advantages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-gray-600"
          >
            Strategic capabilities that reduce cost, improve visibility and elevate supply chain performance.
          </motion.p>
        </div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-900 transition-colors shadow-[0_2px_4px_-2px_rgba(0,0,0,0.05),0_4px_8px_-2px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-4">{iconMap[b.icon] || iconMap.default}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-900">
                {b.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BenefitCards;
