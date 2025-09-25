"use client";

import { motion } from "motion/react";

const Map = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full h-[400px] sm:h-[500px] lg:h-[600px]"
    >
      {/* Map Container */}
      <div className="w-full h-full relative bg-gray-200 overflow-hidden">
        {/* Embedded Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959900000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location Map"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />

        {/* Location Pin Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-amber-400 rounded-full p-3 shadow-lg"
          >
            <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Company Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-lg max-w-xs hidden lg:block"
        >
          <h3 className="text-neutral-900 text-lg font-semibold font-['Manrope'] mb-3">
            Our Location
          </h3>
          <div className="space-y-2">
            <p className="text-neutral-600 text-sm font-normal font-['Manrope']">
              USA, New York - 10001
            </p>
            <p className="text-neutral-600 text-sm font-normal font-['Manrope']">
              764, First Avenue 1
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-neutral-900 text-sm font-medium font-['Manrope']">
                Call Center
              </p>
              <p className="text-amber-500 text-sm font-semibold font-['Manrope']">
                +1 800 100 900 234
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Map;