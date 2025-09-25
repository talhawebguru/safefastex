"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Container from "../common/Container";
import Image from "next/image";
import LogoImg from "@/public/images/logo.png"; // Replace with your logo path
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote:
        'Halosaur duckbilled barracudina, goosefish gar pleco, chum salmon armoured catfish gudgeon sawfish whitefish orbicular batfish mummichog paradise fish! Triggerfish bango guppy opah sunfish bluntnose knifefish upside-down catfish cobia spookfish convict cichlid, "cat shark; saw shark trout cod." Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel upside-down shark',
      name: "Adrian Mitchel",
      company: "SolarInc",
    },
    {
      id: 2,
      quote:
        "Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper, brotula sea lamprey. Yellowtail snapper, yellow tang yellowtail clownfish triggerfısh, grunt sculpin: starfish. Wahoo red snapper that's dentist! Barb Spanish mackerel; jewelfish king of herring opaleye tompot blenny.",
      name: "Sarah Johnson",
      company: "LogiTech",
    },
    {
      id: 3,
      quote:
        "Frigate mackerel snake mackerel upside-down catfish finback cat shark. Hello central mudminnow spiny eel jewel tetra sprat zebra danio. Bicolor goatfish yellowtail scad. Red velvetfish yellowfin crocodile shark cookie cutter shark bigeye squaretail nursehound. Longfin smelt glowlight danio, cisco blackchin kingfish.",
      name: "Michael Chen",
      company: "FreightCorp",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const quoteVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          variants={itemVariants}
          className="text-black text-sm font-normal font-['Manrope'] leading-loose"
        >
          / Testimonial /
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
            {/* Left Side - Quote Mark */}
            <motion.div
              variants={quoteVariants}
              className="order-2 lg:order-1 flex justify-center items-center"
            >
              <Image src={LogoImg} alt="Logo"  />

            </motion.div>

            {/* Right Side - Testimonial Slider */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 relative"
            >
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                speed={800}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={testimonial.id}>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="space-y-6 sm:space-y-8"
                    >
                      {/* Quote Text */}
                      <div className="space-y-6">
                        <blockquote className="text-zinc-800 text-lg sm:text-xl font-normal font-['Manrope'] leading-8 sm:leading-10">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>

                      {/* Author Info */}
                      <div className="space-y-1">
                        <div className="text-zinc-800 text-base font-bold font-['Manrope'] leading-tight">
                          {testimonial.name}
                        </div>
                        <div className="text-zinc-800 text-sm font-bold font-['Manrope'] leading-tight">
                          {testimonial.company}
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Pagination */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-end mt-8 sm:mt-12 space-x-4"
              >
                {/* Current/Total Indicator */}
                <div className="text-zinc-800 text-base font-['Manrope'] leading-relaxed">
                  <span className="font-semibold">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium">
                    /{String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center space-x-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (swiperRef.current?.swiper) {
                          swiperRef.current.swiper.slideTo(index);
                        }
                      }}
                      className={`w-12 h-1 transition-all duration-300 ${
                        index === activeIndex
                          ? "border-b-4 border-stone-900"
                          : "border-b-2 border-neutral-300 hover:border-neutral-400"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonial;
