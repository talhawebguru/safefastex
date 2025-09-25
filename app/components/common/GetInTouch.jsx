"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 max-w-[670px] w-full"
    >
      <h3 className="text-neutral-900 text-2xl sm:text-3xl font-semibold font-['Manrope'] leading-tight mb-8">
        Get in Touch
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 placeholder-neutral-400 text-sm font-normal font-['Manrope'] leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 placeholder-neutral-400 text-sm font-normal font-['Manrope'] leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all"
          />
        </div>

        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full h-12 px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 placeholder-neutral-400 text-sm font-normal font-['Manrope'] leading-7 focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-zinc-400 rounded-[10px] text-neutral-900 placeholder-neutral-400 text-sm font-normal font-['Manrope'] leading-7 resize-none focus:outline-none focus:ring-2 focus:ring-neutral-300 transition-all"
          />
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
              Send a Message
            </span>
            <span className="relative z-10 ml-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-gray-900">
              <FiArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]" />
            </span>
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default GetInTouch;
