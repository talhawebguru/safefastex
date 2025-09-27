"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="pt-4 lg:pt-8 overflow-x-hidden">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] lg:rounded-[32px] min-h-[520px] lg:min-h-[640px] 2xl:min-h-[720px]">
          {/* Background video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/hero1.mp4" // Place your video at public/hero.mp4
            poster="/images/poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Background video"
          />

          {/* Dark gradient overlay to increase text contrast */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/40 to-transparent" />
          {/* Content */}
          <div className="absolute bottom-0 z-10 px-6 sm:px-10 lg:px-14 xl:px-20 py-14 lg:py-20 max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-6xl lg:leading-[1.05] opacity-0"
            >
              SafeFastEx: Global Freight Forwarding & Logistics
              <br className="hidden md:block" />
              Your trusted partner for secure, fast, and transparent cargo solutions
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href="/services"
                className="group relative inline-flex items-center rounded-2xl border border-[#39C0C8] text-white pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39C0C8]/60"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-[#39C0C8] transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
                />
                <span className="relative z-10 font-semibold group-hover:text-black">
                  Explore Our Services
                </span>
                <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#39C0C8] text-gray-900">
                  <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
