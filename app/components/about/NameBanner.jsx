"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Container from "../common/Container";

const NameBanner = () => {
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

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative w-full h-[400px] sm:h-[500px] lg:h-[554px] bg-[url('/images/nameBanner.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden"
        >
          <div className="w-full h-full ">
            {/* Overlay */}
            <div className="w-full h-full bg-stone-900/20 rounded-3xl flex flex-col justify-between p-4 sm:p-8 lg:p-10">
              {/* Main Content Area */}
              <div className="flex-1 flex items-center">
                <motion.h1
                  variants={titleVariants}
                  className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-['Space_Grotesk'] uppercase leading-tight lg:leading-[96px] max-w-[600px]"
                >
                  About Logico
                </motion.h1>
              </div>

              {/* Bottom Section */}
              <div className="flex justify-between items-end">
                {/* Breadcrumb Navigation */}
                <motion.div variants={itemVariants}>
                  <div className="bg-white rounded-2xl px-6 py-4 sm:px-8 sm:py-5 shadow-lg">
                    <nav className="flex items-center space-x-2 text-sm font-normal font-['Manrope'] leading-tight">
                      <Link
                        href="/"
                        className="text-zinc-800 hover:text-zinc-600 transition-colors border-b border-zinc-800 hover:border-zinc-600"
                      >
                        Home
                      </Link>
                      <span className="text-zinc-800">/</span>
                      <span className="text-zinc-800">About Logico</span>
                    </nav>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default NameBanner;
