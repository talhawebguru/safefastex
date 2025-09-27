"use client";

import { motion } from "motion/react";
import Container from "./Container";
import GetInTouch from "./GetInTouch";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <footer className="bg-stone-900 rounded-3xl overflow-hidden">
      <Container>
        <div className="py-12 lg:py-20">
          {/* Hero Section with Get in Touch */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16"
          >
            {/* Left Content */}
            <div className="space-y-8">
              {/* Get in touch label */}
              <motion.div
                variants={itemVariants}
                className="text-white text-sm font-normal font-manrope leading-loose"
              >
                / get in touch /
              </motion.div>

              {/* Hero Text */}
              <motion.div variants={containerVariants} className="">
                <motion.div
                  variants={wordVariants}
                  className="flex flex-wrap items-center gap-x-4"
                >
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                    We
                  </span>
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                    are
                  </span>
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                    always
                  </span>
                </motion.div>
                <motion.div
                  variants={wordVariants}
                  className="flex flex-wrap items-center gap-x-4"
                >
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                    ready to
                  </span>
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                    help
                  </span>
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                    you
                  </span>
                </motion.div>
                <motion.div
                  variants={wordVariants}
                  className="flex flex-wrap items-center gap-x-4"
                >
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                    and
                  </span>
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                    answer your
                  </span>
                </motion.div>
                <motion.div variants={wordVariants}>
                  <span className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                    questions
                  </span>
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-neutral-200 text-base sm:text-lg font-normal font-manrope leading-loose"
              >
                At SafeFastEx, we are always ready to assist you with all your
                logistics, freight forwarding, and cold chain shipping
                requirements. Whether you need real-time shipment tracking,
                temperature-controlled transport, or global delivery solutions,
                our expert team is here to help.
              </motion.p>

              {/* Contact Information Grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {/* Call Center */}
                <div className="space-y-3">
                  <h4 className="text-white text-lg font-bold font-manrope leading-loose">
                    Call Center
                  </h4>
                  <div className="space-y-1">
                    <a
                      href="tel:+971527042536"
                      className="block text-white text-base font-normal font-manrope underline leading-7 hover:text-neutral-200 transition-colors"
                    >
                      +971-52-704-2536
                    </a>
                    <a
                      href="tel:+97125067345"
                      className="block text-white text-base font-normal font-manrope underline leading-7 hover:text-neutral-200 transition-colors"
                    >
                      +971-2-506-7345
                    </a>
                  </div>
                </div>

                {/* Our Location */}
                <div className="space-y-3">
                  <h4 className="text-white text-lg font-bold font-manrope leading-loose">
                    Our Location
                  </h4>
                  <address className="text-white text-base font-normal font-manrope leading-7 not-italic">
                    Al Sajaa Industrial, <br /> Al Sajaah, Sharjah, UAE
                  </address>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <h4 className="text-white text-lg font-bold font-manrope leading-loose">
                    Email
                  </h4>
                  <a
                    href="mailto:operations@safefastex.com"
                    className="block text-white text-base font-normal font-manrope underline leading-7 hover:text-neutral-200 transition-colors"
                  >
                    operations@safefastex.com
                  </a>
                </div>

                {/* Social Network */}
                <div className="space-y-3">
                  <h4 className="text-white text-lg font-bold font-manrope leading-loose">
                    Social network
                  </h4>
                  <div className="flex items-center gap-6">
                    <a
                      href="#"
                      className="text-white hover:text-neutral-200 transition-colors"
                    >
                      <FaFacebookF className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-neutral-200 transition-colors"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-neutral-200 transition-colors"
                    >
                      <FaLinkedinIn className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-neutral-200 transition-colors"
                    >
                      <FaYoutube className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Get In Touch Form */}
            <div className="flex justify-center lg:justify-end">
              <GetInTouch />
            </div>
          </motion.div>

          {/* Delivered Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-4 gap-y-0.5">
              <motion.span
                variants={wordVariants}
                className="text-white text-5xl sm:text-6xl lg:text-7xl font-medium font-['Space_Grotesk'] uppercase leading-tight"
              >
                Delivered
              </motion.span>
              <motion.span
                variants={wordVariants}
                className="text-[#39C0C8] text-5xl sm:text-6xl lg:text-7xl font-medium font-['Space_Grotesk'] uppercase leading-tight"
              >
                on time
              </motion.span>
            </div>
            <motion.div variants={wordVariants}>
              <span className="text-white text-5xl sm:text-6xl lg:text-7xl font-medium font-['Space_Grotesk'] uppercase leading-tight">
                with no hassle.
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center rounded-2xl border border-[#39C0C8] text-white pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#39C0C8]/60"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-[#39C0C8] transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
                  />
                  <span className="relative z-10 font-semibold group-hover:text-black">
                    Contact Us
                  </span>
                  <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#39C0C8] text-gray-900">
                    <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full h-px bg-stone-300 mb-16"
          />

          {/* Bottom Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
          >
            {/* Logo and Since */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 space-y-6"
            >
              {/* Logo placeholder - replace with actual logo */}
              <Image src={Logo} alt="Logico" className="w-[300px]  h-auto" />

              {/* Social Icons */}
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-white hover:text-neutral-200 transition-colors"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-neutral-200 transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-neutral-200 transition-colors"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-neutral-200 transition-colors"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>

              {/* Since 2000 */}
              <div className="text-6xl sm:text-7xl font-bold font-manrope leading-tight text-transparent bg-gradient-to-r from-[#39C0C8] to-[#118991] bg-clip-text">
                Since 2000
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white text-xl font-semibold font-manrope leading-loose">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request-quote"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Request a Quote
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white text-xl font-semibold font-manrope leading-loose">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/air-freight"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Air Freight
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ship-freight"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Sea Freight
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/road-freight"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Road Freight
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/customs-clearance"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Customs Clearance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cold-chain"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Cold Chain
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/door-to-door"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Door-to-Door
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white text-xl font-semibold font-manrope leading-loose">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Latest Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request-quote"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/project-cargo"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Project Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cold-chain"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Pharma Logistics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/warehousing-storage"
                    className="text-white text-base font-normal font-manrope leading-loose hover:text-neutral-200 transition-colors"
                  >
                    Storage Facilities
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-between items-center pt-12 mt-12 border-t border-stone-700 gap-4"
          >
            <div className="flex items-center gap-2 text-stone-300 text-sm font-normal font-manrope leading-loose">
              <span>©</span>
              {year}
              <Link
                href="/"
                className="underline hover:text-white transition-colors"
              >
                SafeFastEx.
              </Link>
              <span>All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-4 text-stone-300 text-sm font-normal font-manrope leading-loose">
              <Link
                href="/terms"
                className="underline hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                className="underline hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/environmental-policy"
                className="underline hover:text-white transition-colors"
              >
                Environmental Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
