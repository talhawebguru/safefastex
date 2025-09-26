"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const ServiceCTA = ({ heading, subheading, buttonText, buttonHref }) => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gray-900 text-white">
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
        backgroundSize: '22px 22px'
      }} />
      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-spaceGrotesk font-semibold uppercase tracking-tight"
          >
            {heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto"
          >
            {subheading}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-10"
          >
            <Link
              href={buttonHref}
              className="group relative inline-flex items-center rounded-2xl border border-amber-300 text-white pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-amber-400 transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
              />
              <span className="relative z-10 font-semibold group-hover:text-gray-900">
                {buttonText}
              </span>
              <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-gray-900">
                <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
              </span>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceCTA;
