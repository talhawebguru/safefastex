"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Container from "../common/Container";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) =>
    latest.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const statisticsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.6,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 223158482, {
        duration: 2.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      });
      return controls.stop;
    }
  }, [isInView, count]);

  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-20 overflow-x-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onViewportEnter={() => setIsInView(true)}
          className="space-y-16 sm:space-y-20 lg:space-y-24"
        >
          {/* Statistics Section */}
          <motion.div
            variants={statisticsVariants}
            className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12"
          >
            {/* Large Numbers */}
            <div className="flex-1 text-center lg:text-left">
              <motion.h2 className="text-[100px] sm:text-[120px] md:text-[140px] lg:text-[160px] xl:text-[180px] 2xl:text-[200px] font-semibold font-['Manrope'] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 tracking-[-0.04em] select-none">
                {displayValue}
              </motion.h2>
            </div>

            {/* Descriptive Text - Responsive Layout */}
            <div className="flex-shrink-0">
              {/* Desktop - Rotated Text */}
              <div className="hidden lg:flex items-center justify-center h-full">
                <div className="transform rotate-90 origin-center whitespace-nowrap">
                  <div className="space-y-2 text-center">
                    <p className="text-neutral-900 text-xl xl:text-2xl font-medium font-['Manrope'] leading-tight">
                      Delivered tons
                    </p>
                    <p className="text-neutral-900 text-xl xl:text-2xl font-medium font-['Manrope'] leading-tight">
                      of products
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet - Normal Text */}
              <div className="lg:hidden text-center">
                <p className="text-neutral-900 text-lg sm:text-xl font-medium font-['Manrope'] leading-relaxed">
                  Delivered tons of products
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Left Column - Main Heading */}
            <div className="lg:col-span-7 xl:col-span-6">
              <motion.div variants={headingVariants}>
                <h1 className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium font-['Space_Grotesk'] uppercase leading-[1.1] tracking-[-0.02em] space-y-1">
                  <span className="block">Logico is the best</span>
                  <span className="block">Transportation</span>
                  <span className="block">company in our</span>
                  <span className="block">state</span>
                </h1>
              </motion.div>
            </div>

            {/* Right Column - Content Paragraphs */}
            <div className="lg:col-span-5 xl:col-span-6">
              <motion.div
                variants={itemVariants}
                className="space-y-6 sm:space-y-7 lg:space-y-8"
              >
                {/* First Paragraph - Bold */}
                <p className="text-zinc-800 text-base sm:text-lg xl:text-xl font-bold font-['Manrope'] leading-relaxed">
                  Halosaur duckbilled barracudina, goosefish gar pleco, chum
                  salmon armoured catfish gudgeon sawfish whitefish orbicular
                  batfish
                </p>

                {/* Second Paragraph - Regular */}
                <p className="text-zinc-800 text-base sm:text-lg xl:text-xl font-normal font-['Manrope'] leading-relaxed">
                  mummichog paradise fish!
                </p>

                {/* Third Paragraph - Regular */}
                <p className="text-zinc-800 text-base sm:text-lg xl:text-xl font-normal font-['Manrope'] leading-relaxed">
                  Triggerfish bluntnose knifefish upside-down catfish cobia
                  spookfish convict cichlid, cat shark saw shark trout cod."
                  Pacific hake false trevally queen parrotfish black prickleback
                  moss. Pacific hake false trevally queen parrotfish black
                  prickleback moss Halosaur duckbilled barracudina, goosefish
                  gar pleco, chum salmon armoured catfish gudgeon sawfish
                  whitefish orbicular batfish mummichog paradise fish!
                </p>

                {/* Fourth Paragraph - Regular */}
                <p className="text-zinc-800 text-base sm:text-lg xl:text-xl font-normal font-['Manrope'] leading-relaxed">
                  Triggerfish bluntnose knifefish upside-down catfish cobia
                  spookfish convict cichlid, "cat shark; saw shark trout cod."
                  Pacific hake false trevally queen parrotfish black prickleback
                  moss. Pacific hake false trevally queen parrotfish black
                  prickleback moss
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
