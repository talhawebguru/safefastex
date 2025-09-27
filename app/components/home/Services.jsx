"use client";
import React, { useMemo } from "react";
import Container from "../common/Container";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaPlaneDeparture,
  FaShip,
  FaTruck,
  FaWarehouse,
  FaFileInvoice,
  FaSnowflake,
  FaCogs,
  FaDoorOpen,
} from "react-icons/fa";

const servicesData = [
  {
    title: "Air Freight Forwarding",
    description: "Fast, secure, and global air cargo solutions with real-time tracking.",
    href: "/services/air-freight",
    Icon: FaPlaneDeparture,
  },
  {
    title: "Sea Freight Forwarding",
    description: "Cost-effective shipping with FCL, LCL, and breakbulk handling.",
    href: "/services/ship-freight",
    Icon: FaShip,
  },
  {
    title: "Road Freight & Transport",
    description: "Reliable trucking across the UAE and GCC.",
    href: "/services/road-freight",
    Icon: FaTruck,
  },
  {
    title: "Warehousing & Storage",
    description: "Secure facilities with packaging and inventory management.",
    href: "/services/warehousing-storage",
    Icon: FaWarehouse,
  },
  {
    title: "Customs Clearance",
    description: "Smooth import/export clearance and documentation.",
    href: "/services/customs-clearance",
    Icon: FaFileInvoice,
  },
  {
    title: "Cold Chain & Medical Shipments",
    description: "Specialized handling for pharmaceuticals and perishables.",
    href: "/services/cold-chain",
    Icon: FaSnowflake,
  },
  {
    title: "Project & Heavy Cargo",
    description: "Expertise in oversized, breakbulk, and industrial shipments.",
    href: "/services/project-cargo",
    Icon: FaCogs,
  },
  {
    title: "Door-to-Door Delivery",
    description: "Hassle-free pickup and delivery at your doorstep.",
    href: "/services/door-to-door",
    Icon: FaDoorOpen,
  },
];

const Services = () => {
  // Conditional grid columns if future services exceed 8
  const gridColsClass = useMemo(
    () =>
      servicesData.length > 8
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    []
  );

  return (
    <section className="py-12 lg:py-16 xl:py-20 overflow-hidden relative">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, #1f2937 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />
      <Container>
        <div className="max-w-4xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-sm text-gray-500 font-medium mb-4 tracking-wide"
          >
            / services /
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="text-3xl font-spaceGrotesk sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-tight uppercase"
          >
            Comprehensive Logistics & Freight Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            className="mt-6 text-lg text-gray-600 max-w-2xl"
          >
            We provide a full spectrum of logistics and supply chain services tailored to your business needs.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.06 },
            },
          }}
          className={`grid ${gridColsClass} gap-5 sm:gap-6 lg:gap-7 xl:gap-8`}
        >
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.title} service={service} index={idx} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="mt-12 lg:mt-16 flex justify-center"
        >
          <Link
            href="/services"
            aria-label="Explore all logistics and freight services"
            className="group relative inline-flex items-center rounded-2xl border border-gray-900 text-gray-900 pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/60"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gray-900 transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
            />
            <span className="relative z-10 font-semibold group-hover:text-white">
              Explore All Services
            </span>
            <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#39C0C8] text-gray-900">
              <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const { title, description, href, Icon } = service;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
      }}
    >
      <Link
        href={href}
        aria-label={title}
        className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 rounded-2xl"
      >
        <div className="relative h-full p-6 xl:p-7 rounded-2xl bg-white border border-gray-200 hover:border-[#39C0C8] shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[#39C0C8]/15 text-gray-900 ring-1 ring-[#39C0C8]/40 shadow-sm transition-all duration-300 group-hover:bg-[#39C0C8] group-hover:text-white group-hover:shadow-lg">
              <Icon className="h-8 w-8" aria-hidden="true" />
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-transparent group-hover:ring-white/50 transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2 group-hover:text-gray-900">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center text-sm font-semibold text-gray-900">
            <span className="relative inline-flex items-center gap-1">
              Learn more
              <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
              <span className="absolute inset-x-0 -bottom-1 h-px bg-gray-300 group-hover:bg-gray-900 transition-colors duration-300" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Services;