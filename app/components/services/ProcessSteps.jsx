"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";

const ProcessSteps = ({ process }) => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <Container>
        <div className="mb-10 sm:mb-14 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-spaceGrotesk font-semibold uppercase text-gray-900"
          >
            Execution Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-gray-600"
          >
            A structured, transparent and proactive approach from planning to proof of delivery.
          </motion.p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" aria-hidden />
          <ol className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-14">
            {process.map((p, i) => (
              <li key={p.step} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                  className={`bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-900 transition-colors shadow-sm ${
                    i % 2 === 0 ? "lg:pr-10" : "lg:pl-10"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-gray-900 text-white font-semibold text-base">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.text}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default ProcessSteps;
