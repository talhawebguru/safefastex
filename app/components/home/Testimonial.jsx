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
        "SafeFastEx has been our logistics partner for more than two years, and their consistency continues to impress us. They handle every shipment with professionalism, ensuring timely delivery and careful documentation. Their team is always available to support us, making the whole process stress-free. Thanks to SafeFastEx, we have been able to expand our customer base internationally with complete confidence.",
      author: "Ahmed Khan",
      location: "Dubai, UAE",
    },
    {
      id: 2,
      quote:
        "Our business deals with sensitive medical equipment that requires temperature-controlled logistics. SafeFastEx not only provided reliable cold chain solutions but also ensured that our shipments arrived safely without any delays. Their tracking system gave us full visibility at every step, and their staff was always available to answer our questions. We feel secure knowing that SafeFastEx is handling our critical deliveries.",
      author: "Dr. Sarah Al-Mutairi",
      location: "Riyadh, KSA",
    },
    {
      id: 3,
      quote:
        "Importing and exporting goods can be complicated, but SafeFastEx made the process seamless for our company. Their customs clearance service was handled with precision, saving us valuable time and avoiding costly delays. The team was transparent, proactive, and kept us informed at every stage. We appreciate their expertise and reliability, which has helped us focus on growing our business.",
      author: "Ravi Patel",
      location: "Sharjah, UAE",
    },
    {
      id: 4,
      quote:
        "We recently needed to transport oversized industrial machinery, and SafeFastEx managed the entire operation flawlessly. From planning the route to securing the cargo and handling the final delivery, everything was executed with care and efficiency. Their attention to detail and safety measures gave us complete peace of mind. We highly recommend them for any large or complex logistics projects.",
      author: "Michael Johnson",
      location: "Abu Dhabi, UAE",
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
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 overflow-x-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-brand text-sm font-medium mb-4 tracking-wide"
        >
          / testimonials /
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-3xl text-center text-brand font-spaceGrotesk sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight mb-10"
        >
          What Our Clients Say
        </motion.h2>
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
                        <blockquote className="text-zinc-800 text-lg sm:text-xl font-normal font-manrope leading-8 sm:leading-10">
                          “{testimonial.quote}”
                        </blockquote>
                      </div>
                      {/* Author Info */}
                      <div className="space-y-1">
                        <div className="text-zinc-800 text-base font-bold font-manrope leading-tight">
                          {testimonial.author}
                        </div>
                        <div className="text-zinc-800 text-sm font-medium font-manrope leading-tight">
                          {testimonial.location}
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
                <div className="text-zinc-800 text-base font-manrope leading-relaxed">
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
