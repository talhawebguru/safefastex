"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const RelatedServices = ({ related }) => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-spaceGrotesk font-semibold uppercase text-gray-900"
          >
            Related Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="max-w-2xl text-gray-600"
          >
            Extend your multimodal strategy with these complementary logistics solutions.
          </motion.p>
        </div>
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#39C0C8] transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-900">
                  {r.title}
                </h3>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#39C0C8]/15 text-gray-900 group-hover:bg-[#39C0C8] transition-colors ring-1 ring-[#39C0C8]/40">
                  <FiArrowUpRight className="h-5 w-5" />
                </span>
              </div>
              <Link
                href={r.href}
                className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39C0C8]/60"
                aria-label={`Read more about ${r.title}`}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RelatedServices;
