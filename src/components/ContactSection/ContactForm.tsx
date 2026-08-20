"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedButton from "../ui/AnimatedBtn";
import { submitEnquiry } from "@/lib/submitEnquiry";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    interestedIn: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      await submitEnquiry({
        formType: "contact",
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        interestedIn: formData.interestedIn,
        message: formData.message,
      });

      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        interestedIn: "",
        message: "",
      });

      setStatus(
        "Thank you! Your enquiry has been submitted."
      );
    } catch (error) {
      console.error(
        "Contact form submission error:",
        error
      );

      setStatus(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-15"
    >
      {/* Row 1 */}
      <div className="grid gap-10 lg:grid-cols-4">

        {/* Full Name */}
        <div>
          <label className="block text-[16px] font-medium text-black font-roboto">
            Full Name*
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-[16px] font-medium text-black font-roboto">
            Email Address*
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-[16px] font-medium text-black font-roboto">
            Mobile Number*
          </label>

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
          />
        </div>

        {/* Interested In */}
        <div>
          <label className="block text-[16px] font-medium text-black font-roboto">
            I'm Interested In*
          </label>

          <input
            type="text"
            name="interestedIn"
            value={formData.interestedIn}
            onChange={handleChange}
            required
            className="w-full border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-12">
        <label className="block text-[16px] font-medium text-black font-roboto">
          Message / Query
        </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={1}
          className="w-full resize-none border-b-2 border-[#B7B7B7] bg-transparent py-3 outline-none transition focus:border-[#BE8A56] text-gray-800"
        />
      </div>

      {/* Checkbox */}
      <label className="mt-10 flex items-start gap-4">
        <input
          type="checkbox"
          required
          className="mt-1 h-5 w-5 accent-[#BE8A56]"
        />

        <span className="text-[14px] leading-5 text-[#555] font-roboto">
          By submitting this form, I consent to being contacted by
          Kinza Estate and its authorised representatives through
          call, SMS, email or WhatsApp regarding Highway Greens,
          its availability and related offers. This consent will
          override any DND or NDNC registration.
        </span>
      </label>

      {/* Button */}
      <AnimatedButton
        type="submit"
        text={
          isSubmitting
            ? "Submitting..."
            : "Submit Enquiry"
        }
        bgColor="#BF8D58"
        textColor="#000"
        accentColor="#BF8D58"
        hoverColor="#FFFFFF"
        hoverTextColor="#000"
        className="mt-14"
      />

      {/* Status */}
      {status && (
        <p className="mt-5 text-sm text-black">
          {status}
        </p>
      )}
    </motion.form>
  );
}