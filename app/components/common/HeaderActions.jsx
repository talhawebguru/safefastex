"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";

const HeaderActions = ({ onMobileMenuToggle }) => {
  // Only Get a quote and mobile menu

  return (
    <div className="flex items-center space-x-4">
      {/* Desktop: Only Get a Quote Button */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
        className="hidden lg:flex"
      >
        <Link
          href="/request-quote"
          className="group relative inline-flex items-center rounded-2xl border border-[#39C0C8] text-gray-900 pl-6 pr-1 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39C0C8]/60"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-[#39C0C8] transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
          />
          <span className="relative z-10 font-semibold group-hover:text-black">
            Get a Quote
          </span>
          <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#39C0C8] text-gray-900">
            <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
          </span>
        </Link>
      </motion.div>

      {/* Mobile: Only Mobile Menu Trigger */}
      <div className="flex lg:hidden items-center">
        <button
          onClick={onMobileMenuToggle}
          className="p-2 rounded-full hover:bg-[#39C0C8]/10 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39C0C8]/50"
          aria-label="Open Menu"
        >
          <FiMenu className="w-5 h-5 text-[#39C0C8]" />
        </button>
      </div>
    </div>
  );
};

export default HeaderActions;
