"use client";
import React from "react";
import { motion } from "motion/react";
import Container from "../common/Container";

const StatsBar = ({ stats }) => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-gray-900 text-white">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-spaceGrotesk mb-2">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-white/70 tracking-wide uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsBar;
