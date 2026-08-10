"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-15"
    >
      {/* Row 1 */}
      <div className="grid gap-10 lg:grid-cols-4">
        <div>
          <label className="block text-lg font-medium text-black">
            Full Name*
          </label>

          <input
            type="text"
            className="w-full border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-black">
            Email Address*
          </label>

          <input
            type="email"
            className="w-full border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-black">
            Mobile Number*
          </label>

          <input
            type="tel"
            className="w-full border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-black">
            I'm Interested In*
          </label>

          <input
            type="text"
            className="w-full border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
          />
        </div>
      </div>

      {/* Message */}

      <div className="mt-12">
        <label className="block text-lg font-medium text-black">
          Message / Query
        </label>

        <textarea
          rows={1}
          className="w-full resize-none border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
        />
      </div>

      {/* Checkbox */}

      <label className="mt-10 flex items-start gap-4">
        <input
          type="checkbox"
          className="mt-1 h-5 w-5 accent-[#BE8A56]"
        />

        <span className="text-[14px] leading-5 text-[#555]">
          By submitting this form, I consent to being contacted by
          Kinza Estate and its authorised representatives through
          call, SMS, email or WhatsApp regarding Highway Greens,
          its availability and related offers. This consent will
          override any DND or NDNC registration.
        </span>
      </label>

      {/* Button */}

      <button
        className="mt-14 bg-[#C18A52] px-14 py-3 text-md font-semibold text-black transition hover:bg-[#ab7440]"
      >
        Submit Enquiry
      </button>
    </motion.form>
  );
}