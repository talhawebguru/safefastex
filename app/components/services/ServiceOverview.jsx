"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";

const ServiceOverview = ({ title, tagline, intro }) => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <Container>
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-spaceGrotesk font-semibold leading-tight text-gray-900 uppercase"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 text-lg sm:text-xl text-[#39C0C8] font-medium"
          >
            {tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed"
          >
            {intro}
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default ServiceOverview;
