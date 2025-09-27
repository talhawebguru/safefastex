"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Container from "../common/Container";

const FAQ = ({ faqs }) => {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-4xl font-spaceGrotesk font-semibold uppercase text-gray-900 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-4 mb-10 text-center text-gray-600"
          >
            Answers to common queries about our road freight solutions.
          </motion.p>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-gray-900 pr-6">
                      {f.q}
                    </span>
                    <span
                      className={`h-6 w-6 flex items-center justify-center rounded-full text-xs font-medium transition-colors ${
                        isOpen ? "bg-[#39C0C8] text-gray-900" : "bg-gray-900 text-white"
                      }`}
                    >
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 -mt-1 text-gray-600 text-sm leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
