"use client";
import React from "react";
import Container from "../common/Container";
import Link from "next/link";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import TruckIcon from "@/public/images/truck.png";
import ShipIcon from "@/public/images/ship.png";
import TrainIcon from "@/public/images/train.png";
import Image from "next/image";

const Services = () => {
  return (
    <section className="py-16 lg:py-24 relative">
      {/* Dotted map background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, #333333 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-sm text-gray-500 font-medium mb-6"
            >
              / services /
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
              className="text-3xl font-spaceGrotesk sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-tight uppercase mb-8"
            >
              Transportation services which we provide to our customers
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:block"
            >
              <Link
                href="/services"
                className="group relative inline-flex items-center rounded-2xl border border-gray-900 text-gray-900 pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/60"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gray-900 transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
                />
                <span className="relative z-10 font-semibold group-hover:text-white">
                  All services
                </span>
                <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-gray-900">
                  <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Services */}
          <div>
            <ServiceItem
              image={TruckIcon}
              title="Truck Freight"
              description="Pacific hake false trevally queen parrotfish black prickleback moss"
              href="/services/road-freight"
              delay={0.1}
            />
            
            <motion.hr 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="my-8 border-gray-300 origin-left"
            />
            
            <ServiceItem
              image={ShipIcon}
              title="Ship Freight"
              description="Pacific hake false trevally queen parrotfish black prickleback moss"
              href="/services/ship-freight"
              delay={0.2}
            />
            
            <motion.hr 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="my-8 border-gray-300 origin-left"
            />
            
            <ServiceItem
              image={TrainIcon}
              title="Train Freight"
              description="Pacific hake false trevally queen parrotfish black prickleback moss"
              href="/services/train-freight"
              delay={0.3}
            />
          </div>
        </div>

        {/* Mobile button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          className="lg:hidden mt-10"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center rounded-2xl border border-gray-900 text-gray-900 pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/60"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gray-900 transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
            />
            <span className="relative z-10 font-semibold group-hover:text-white">
              All Services
            </span>
            <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-gray-900">
              <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

// Service Item Component for right column
const ServiceItem = ({ image, title, description, href, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center">
            <Image src={image} alt={title} className=" object-contain" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed max-w-2xs">{description}</p>
      </div>
    </motion.div>
  );
};

export default Services;