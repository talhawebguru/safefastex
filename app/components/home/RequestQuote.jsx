"use client";
import React, { useState } from "react";
import Container from "../common/Container";
import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    deliverCity: "",
    cityOfDeparture: "",
    freightType: "Truck Freight",
    incoterms: "EXW",
    weight: "",
    height: "",
    options: {
      fragile: false,
      express: false,
      insurance: false,
      packaging: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        [name]: checked,
      },
    }));
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
      style={{
        backgroundImage: `url('/images/request-a-quote-bg.jpg')`,
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />

      <Container>
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start py-12 sm:py-16 lg:py-24">
            {/* Left Side - Quote Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-[20px] sm:rounded-[25px] p-6 sm:p-8 lg:p-12 border border-gray-300 w-full max-w-2xl"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
                Request a quote
              </h2>

              <form className="space-y-4 sm:space-y-6">
                {/* Row 1: Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Email"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                {/* Row 3: Deliver City & City of Departure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="deliverCity"
                      value={formData.deliverCity}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Deliver City"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="cityOfDeparture"
                      value={formData.cityOfDeparture}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="City of departure"
                    />
                  </div>
                </div>

                {/* Row 4: Freight Type & Incoterms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <select
                      name="freightType"
                      value={formData.freightType}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-900 rounded-lg text-sm text-gray-900 bg-white focus:border-gray-900 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Truck Freight">Truck Freight</option>
                      <option value="Ship Freight">Ship Freight</option>
                      <option value="Train Freight">Train Freight</option>
                      <option value="Air Freight">Air Freight</option>
                    </select>
                    <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <div className="w-2 h-1 bg-gray-900"></div>
                    </div>
                  </div>
                  <div className="relative">
                    <select
                      name="incoterms"
                      value={formData.incoterms}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-900 rounded-lg text-sm text-gray-900 bg-white focus:border-gray-900 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="EXW">EXW</option>
                      <option value="FOB">FOB</option>
                      <option value="CIF">CIF</option>
                      <option value="DDP">DDP</option>
                    </select>
                    <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <div className="w-2 h-1 bg-gray-900"></div>
                    </div>
                  </div>
                </div>

                {/* Row 5: Weight & Height */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Weight"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      className="w-full h-11 sm:h-12 px-3 sm:px-4 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Height"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3 sm:space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="fragile"
                        checked={formData.options.fragile}
                        onChange={handleCheckboxChange}
                        className="w-4 sm:w-5 h-4 sm:h-5 border border-gray-300 rounded text-gray-900 focus:ring-0"
                      />
                      <span className="text-gray-700 text-sm sm:text-base">Fragile</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="express"
                        checked={formData.options.express}
                        onChange={handleCheckboxChange}
                        className="w-4 sm:w-5 h-4 sm:h-5 border border-gray-300 rounded text-gray-900 focus:ring-0"
                      />
                      <span className="text-gray-700 text-sm sm:text-base">Express</span>
                    </label>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="insurance"
                        checked={formData.options.insurance}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 border border-gray-300 text-gray-900 focus:ring-0"
                      />
                      <span className="text-gray-700 text-sm sm:text-base">Insurance</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="packaging"
                        checked={formData.options.packaging}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 border border-gray-300 text-gray-900 focus:ring-0"
                      />
                      <span className="text-gray-700 text-sm sm:text-base">Packaging</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
                  className="mt-6 sm:mt-8"
                >
                  <Link
                    href="/about-us"
                    className="group relative inline-flex items-center rounded-2xl border border-amber-300 text-black pl-4 sm:pl-6 pr-1 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-amber-400 transition-[width] duration-300 ease-out group-hover:w-full rounded-2xl"
                    />
                    <span className="relative z-10 font-semibold text-sm sm:text-base group-hover:text-white">
                      Request Quote
                    </span>
                    <span className="relative z-10 ml-2 sm:ml-3 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-400 text-gray-900">
                      <FiArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
                    </span>
                  </Link>
                </motion.div>
              </form>
            </motion.div>

            {/* Right Side - Content */}
            <div className="lg:pl-8 space-y-6 sm:space-y-8">
              {/* Quote Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="text-white"
              >
                <div className="text-xs sm:text-sm font-medium text-white/70 mb-4 sm:mb-6">
                  / quote /
                </div>

                <div className="mb-6 sm:mb-8">
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                    Provide quick Tracking your cargo
                  </div>
                </div>

                <p className="text-white text-sm sm:text-base leading-6 sm:leading-8 max-w-lg">
                  Pacific hake false trevally queen parrotfish black prickleback
                  mosshead warbonnet sweeper! Greenling sleeper.
                </p>
              </motion.div>
              
              {/* Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="bg-amber-400 rounded-[20px] sm:rounded-[25px] p-6 sm:p-8 lg:p-12 w-full max-w-2xl"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
                  <div>
                    <h3 className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight sm:leading-10 mb-2">
                      Do you have
                      <br />
                      any questions?
                    </h3>
                  </div>
                  <div className="text-left lg:text-right">
                    <div className="text-gray-900 text-sm sm:text-base mb-1 sm:mb-2">
                      Call us today
                    </div>
                    <div className="text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-bold">
                      800 100 678 10 95
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RequestQuote;
