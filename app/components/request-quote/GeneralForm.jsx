"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FiArrowUpRight, FiCalendar, FiChevronDown } from "react-icons/fi";
import Container from "../common/Container";

const GeneralForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    extension: "",
    fromCountry: "First Choice",
    fromPostalCode: "",
    toCountry: "First Choice",
    toPostalCode: "",
    pickupDate: "",
    discount: "",
    absoluteMinCharge: "",
    pickupServices: {
      blindShipment: false,
      holidayWeekend: false,
      constructionUtility: false,
      insidePickup: false,
      containerStation: false,
      liftGateService: false,
      exhibition: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (serviceName) => {
    setFormData((prev) => ({
      ...prev,
      pickupServices: {
        ...prev.pickupServices,
        [serviceName]: !prev.pickupServices[serviceName],
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 xl:gap-16"
        >
          {/* Form Section */}
          <div className="xl:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-12">
              {/* General Information Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-neutral-900 text-3xl font-semibold font-manrope leading-9 mb-8">
                  General information
                </h2>

                <div className="space-y-6">
                  {/* First Row - First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          First Name{" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          Last Name{" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Row - Company Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          Company Name{" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          Email{" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Third Row - Phone & Extension */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          Phone (Use local format){" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          Extension
                        </span>
                      </label>
                      <input
                        type="text"
                        name="extension"
                        value={formData.extension}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                      />
                    </div>
                  </div>

                  {/* Fourth Row - From Country & From Postal Code */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-900 text-sm font-normal font-manrope leading-7">
                          From Country{" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <div className="relative">
                        <select
                          name="fromCountry"
                          value={formData.fromCountry}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 py-3 border border-neutral-900 rounded-[10px] text-black text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 appearance-none bg-white"
                          required
                        >
                          <option value="First Choice">First Choice</option>
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-900 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          From Postal Code{" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="fromPostalCode"
                        value={formData.fromPostalCode}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Fifth Row - To Country & To Postal Code */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-900 text-sm font-normal font-manrope leading-7">
                          To Country{" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <div className="relative">
                        <select
                          name="toCountry"
                          value={formData.toCountry}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 py-3 border border-neutral-900 rounded-[10px] text-black text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 appearance-none bg-white"
                          required
                        >
                          <option value="First Choice">First Choice</option>
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                        </select>
                        <FiChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-900 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          To Postal Code{" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <input
                        type="text"
                        name="toPostalCode"
                        value={formData.toPostalCode}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                        required
                      />
                    </div>
                  </div>

                  {/* Sixth Row - Pickup Date, Discount & Absolute Min Charge */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          Pickup Date{" "}
                        </span>
                        <span className="text-red-500 text-sm font-normal font-manrope leading-7">
                          *
                        </span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleInputChange}
                          className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                          required
                        />
                        <FiCalendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-900 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          Discount
                        </span>
                      </label>
                      <input
                        type="text"
                        name="discount"
                        value={formData.discount}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block mb-2">
                        <span className="text-neutral-400 text-sm font-normal font-manrope leading-7">
                          Absolute Min Charge
                        </span>
                      </label>
                      <input
                        type="text"
                        name="absoluteMinCharge"
                        value={formData.absoluteMinCharge}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 text-sm font-normal font-manrope leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-neutral-900 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pickup Services Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-neutral-900 text-3xl font-semibold font-manrope leading-9 mb-8">
                  Pickup Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="blindShipment"
                        checked={formData.pickupServices.blindShipment}
                        onChange={() => handleCheckboxChange("blindShipment")}
                        className="w-5 h-5 rounded-[5px] border border-zinc-400 text-neutral-900 focus:ring-2 focus:ring-neutral-300"
                      />
                      <label
                        htmlFor="blindShipment"
                        className="text-zinc-800 text-base font-normal font-manrope leading-9 tracking-tight cursor-pointer"
                      >
                        Blind Shipment
                      </label>
                    </div>

                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="constructionUtility"
                        checked={formData.pickupServices.constructionUtility}
                        onChange={() =>
                          handleCheckboxChange("constructionUtility")
                        }
                        className="w-5 h-5 rounded-[5px] border border-zinc-400 text-neutral-900 focus:ring-2 focus:ring-neutral-300"
                      />
                      <label
                        htmlFor="constructionUtility"
                        className="text-zinc-800 text-base font-normal font-manrope leading-9 tracking-tight cursor-pointer"
                      >
                        Construction/Utility
                      </label>
                    </div>

                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="containerStation"
                        checked={formData.pickupServices.containerStation}
                        onChange={() =>
                          handleCheckboxChange("containerStation")
                        }
                        className="w-5 h-5 rounded-[5px] border border-zinc-400 text-neutral-900 focus:ring-2 focus:ring-neutral-300"
                      />
                      <label
                        htmlFor="containerStation"
                        className="text-zinc-800 text-base font-normal font-manrope leading-9 tracking-tight cursor-pointer"
                      >
                        Container Station
                      </label>
                    </div>

                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="exhibition"
                        checked={formData.pickupServices.exhibition}
                        onChange={() => handleCheckboxChange("exhibition")}
                        className="w-5 h-5 rounded-[5px] border border-zinc-400 text-neutral-900 focus:ring-2 focus:ring-neutral-300"
                      />
                      <label
                        htmlFor="exhibition"
                        className="text-zinc-800 text-base font-normal font-manrope leading-9 tracking-tight cursor-pointer"
                      >
                        Exhibition
                      </label>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="holidayWeekend"
                        checked={formData.pickupServices.holidayWeekend}
                        onChange={() => handleCheckboxChange("holidayWeekend")}
                        className="w-5 h-5 rounded-[5px] border border-zinc-400 text-neutral-900 focus:ring-2 focus:ring-neutral-300"
                      />
                      <label
                        htmlFor="holidayWeekend"
                        className="text-zinc-800 text-base font-normal font-manrope leading-9 tracking-tight cursor-pointer"
                      >
                        Holiday/Weekend
                      </label>
                    </div>

                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="insidePickup"
                        checked={formData.pickupServices.insidePickup}
                        onChange={() => handleCheckboxChange("insidePickup")}
                        className="w-5 h-5 rounded-[5px] border border-zinc-400 text-neutral-900 focus:ring-2 focus:ring-neutral-300"
                      />
                      <label
                        htmlFor="insidePickup"
                        className="text-zinc-800 text-base font-normal font-manrope leading-9 tracking-tight cursor-pointer"
                      >
                        Inside Pickup
                      </label>
                    </div>

                    <div className="flex items-center space-x-4">
                      <input
                        type="checkbox"
                        id="liftGateService"
                        checked={formData.pickupServices.liftGateService}
                        onChange={() => handleCheckboxChange("liftGateService")}
                        className="w-5 h-5 rounded-[5px] border border-zinc-400 text-neutral-900 focus:ring-2 focus:ring-neutral-300"
                      />
                      <label
                        htmlFor="liftGateService"
                        className="text-zinc-800 text-base font-normal font-manrope leading-9 tracking-tight cursor-pointer"
                      >
                        Lift Gate Service
                      </label>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                  className="mt-10"
                >
                  <button
                    type="submit"
                    className="group relative inline-flex items-center rounded-2xl border border-gray-900 text-gray-900 pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/60 hover:cursor-pointer"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gray-900 transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
                    />
                    <span className="relative z-10 font-semibold group-hover:text-white">
                      Get a Quote
                    </span>
                    <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#39C0C8] text-gray-900">
                      <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            </form>
          </div>

          {/* Help Card Section */}
          <div className="xl:col-span-4">
            <motion.div
              variants={itemVariants}
              className="bg-[#39C0C8] rounded-3xl p-8 lg:p-10 flex flex-col justify-between sticky top-28"
            >
              <div>
                <h3 className="text-neutral-900 text-3xl font-semibold font-manrope leading-10 mb-6">
                  How we can help you?
                </h3>
                <p className="text-zinc-800 text-lg font-normal font-manrope leading-loose mb-4">
                  Triggerfish bluntnose knifefish upside-down catfish cobia
                  spookfish convict cichlid.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                className="mt-10"
              >
                <button
                  type="submit"
                  className="group relative inline-flex items-center rounded-2xl border border-gray-900 text-gray-900 pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500/60 hover:cursor-pointer"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-gray-900 transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
                  />
                  <span className="relative z-10 font-semibold group-hover:text-white">
                    Contact Us
                  </span>
                  <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#39C0C8] text-gray-900">
                    <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default GeneralForm;
