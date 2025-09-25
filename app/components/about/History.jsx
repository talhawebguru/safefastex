"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import Container from "../common/Container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const History = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Timeline data - 5 items as per reference
  const timelineData = [
    {
      period: "2004 - 2007",
      title: "Killifish emperor bream",
      description: "Pacific hake false trevally queen parrotfish black prickleback moss. Pacific hake false trevally queen parrotfish black prickleback moss.",
      hasTopBorder: true
    },
    {
      period: "2007 - 2012", 
      title: "Pollock Sacramento blackfish",
      description: 'Triggerfish bluntnose knifefish upside-down catfish cobia spookfish convict cichlid, "cat shark; saw shark trout cod."',
      hasTopBorder: true
    },
    {
      period: "2012 - 2018",
      title: "Triggerfish bluntnose knifefish", 
      description: "Halosaur duckbilled barracudina, goosefish gar pleco, chum salmon armoured catfish gudgeon sawfish whitefish orbicular batfish mummichog paradise fish!",
      hasTopBorder: true
    },
    {
      period: "2018 - 2020",
      title: "Halosaur duckbilled barracudina",
      description: "Pacific hake false trevally queen parrotfish black prickleback moss. Pacific hake false trevally queen parrotfish black prickleback moss.",
      hasTopBorder: true
    },
    {
      period: "2020 - 2023",
      title: "Pacific hake false trevally queen",
      description: 'Triggerfish bluntnose knifefish upside-down catfish cobia spookfish convict cichlid, "cat shark; saw shark trout cod."',
      hasTopBorder: true
    }
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
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 xl:py-32 overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12 lg:space-y-16"
        >
          {/* Header Section */}
          <div className="text-center space-y-8">
            {/* Breadcrumb */}
            <motion.p variants={itemVariants} className="text-neutral-900 text-sm font-medium font-['Manrope'] leading-loose">
              / history /
            </motion.p>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-neutral-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-['Space_Grotesk'] uppercase leading-tight lg:leading-[72px] tracking-[-0.02em]">
                <span className="block sm:inline">History </span>
                <span className="block sm:inline">of </span>
                <span className="block sm:inline">our </span>
                <span className="block">company</span>
              </h2>
            </motion.div>
          </div>

          {/* Timeline Swiper */}
          <motion.div variants={itemVariants} className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              speed={800}
              effect="slide"
              grabCursor={true}
              centeredSlides={false}
              initialSlide={0}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                  centeredSlides: false,
                },
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  centeredSlides: false,
                },
              }}
              className="history-swiper"
            >
              {timelineData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-12 h-full">
                    {/* Period */}
                    <div className="mb-6 sm:mb-8 lg:mb-12">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Space_Grotesk'] leading-[1] tracking-[-0.03em] text-neutral-900">
                        {item.period}
                      </h3>
                    </div>

                    {/* Content with HR */}
                    <div className={`space-y-4 sm:space-y-6 lg:space-y-8 ${item.hasTopBorder ? 'border-t-2 border-neutral-900 pt-4 sm:pt-6 lg:pt-8' : ''}`}>
                      {/* Title */}
                      <h4 className="text-neutral-900 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-['Manrope'] leading-loose tracking-[-0.01em]">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-zinc-800 text-sm sm:text-base lg:text-lg font-normal font-['Manrope'] leading-loose">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="flex items-center justify-center mt-8 lg:mt-12 space-x-4">
              {/* Current slide indicator */}
              <div className="text-zinc-800 text-base font-semibold font-['Manrope'] leading-relaxed">
                {String(activeIndex + 1).padStart(2, '0')}
                <span className="font-medium"> /03</span>
              </div>

              {/* Progress indicators - Show only 3 */}
              <div className="flex items-center space-x-3 ml-4">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`w-8 sm:w-10 lg:w-12 h-1 transition-all duration-300 ${
                      index === activeIndex
                        ? 'border-b-4 border-stone-900'
                        : 'border-b-2 border-neutral-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <style jsx global>{`
        .history-swiper .swiper-slide {
          height: auto;
          display: flex;
          align-items: stretch;
        }
        
        .history-swiper .swiper-wrapper {
          align-items: stretch;
        }
        
        .history-swiper {
          padding: 0;
          margin: 0;
          overflow: hidden;
        }

        .history-swiper .swiper-slide-active {
          transform: scale(1);
        }

        /* Mobile responsive improvements */
        @media (max-width: 480px) {
          .history-swiper {
            margin-left: -1rem;
            margin-right: -1rem;
          }
          
          .history-swiper .swiper-slide {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Tablet and mobile overflow fix */
        @media (max-width: 1024px) {
          .history-swiper {
            overflow: hidden;
          }
          
          .history-swiper .swiper-wrapper {
            overflow: hidden;
          }
        }

        /* Desktop layout improvements */
        @media (min-width: 1024px) {
          .history-swiper .swiper-slide {
            width: calc(33.333% - 20px) !important;
            margin-right: 30px;
          }
          
          .history-swiper .swiper-slide:last-child {
            margin-right: 0;
          }
        }

        /* Ensure no horizontal scroll */
        .history-swiper,
        .history-swiper * {
          box-sizing: border-box;
        }
      `}</style>
    </section>
  );
};

export default History;