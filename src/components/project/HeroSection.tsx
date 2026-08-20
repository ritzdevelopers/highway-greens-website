"use client";

import PremiumImage from "../ui/ProjectAnimateImage";
import { motion } from "framer-motion";
import { useState } from "react";
import type { HeroContent } from "@/data/projectData";
import MagneticButton from "../ui/ProjectAnumatedBtn";

type HeroSectionProps = {
  content: HeroContent;
};

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxJ8IxPoNnzlewmbzjwOHVZA1KNDxq6Jx-G1n19NUzuocfz9vCq7Jv12_RcPdVYIHsq/exec";

export default function HeroSection({ content }: HeroSectionProps) {
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
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
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
      const formBody = new URLSearchParams();

      formBody.append("formType", "hero");
      formBody.append("fullName", formData.fullName);
      formBody.append("email", formData.email);
      formBody.append("mobile", formData.mobile);
      formBody.append(
        "interestedIn",
        formData.interestedIn
      );
      formBody.append("message", formData.message);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
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
        "Hero form submission error:",
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
    <section
      id="hero"
      className="relative overflow-visible bg-white"
    >
      {/* ================= HERO CONTAINER ================= */}
      <div className="relative flex flex-col lg:h-[635px] lg:block">

        {/* ================= HERO IMAGE ================= */}
        <div className="relative h-[400px] w-full sm:h-[500px] lg:absolute lg:inset-y-0 lg:left-0 lg:right-[350px] lg:h-full lg:w-auto">

          {/* Desktop Image */}
          <div className="absolute inset-0 hidden lg:block">
            <PremiumImage
              src="/project/home_hero_image.png"
              alt="Highway Greens"
              fill
              priority
              wrapperClassName="h-full w-full"
              className="object-cover object-center"
              delay={0.1}
            />
          </div>

          {/* Mobile / Tablet Image */}
          <div className="absolute inset-0 block lg:hidden">
            <PremiumImage
              src="/project/hero-main-mobile.png"
              alt="Highway Greens"
              fill
              priority
              wrapperClassName="h-full w-full"
              className="object-cover object-center"
              delay={0.1}
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 z-20 bg-black/40" />

          {/* Headline & Subline */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-18 left-6 right-6 z-20 text-white md:bottom-[105px] md:left-[9%]"
          >
            <h1 className="text-[28px] font-normal leading-[1.15] sm:text-[32px] lg:text-[38px]">
              {content.headline}
            </h1>

            <p className="mt-3 text-[16px] sm:text-[24px]">
              {content.subline}
            </p>
          </motion.div>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            relative
            mx-auto
            -mt-10
            lg:mt-0
            lg:absolute
            right-auto
            lg:right-[55px]
            top-auto
            lg:top-[120px]
            z-30
            w-[90%]
            sm:w-[500px]
            rounded-[18px]
            bg-[#ffebe0]
            p-6
            sm:p-[30px]
            shadow-[0_10px_35px_rgba(0,0,0,0.12)]
          "
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-5"
          >
            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              required
              className="h-[48px] sm:h-[52px] w-full bg-white px-5 text-[15px] sm:text-[16px] outline-none placeholder:text-slate-700"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address*"
              required
              className="h-[48px] sm:h-[52px] w-full bg-white px-5 text-[15px] sm:text-[16px] outline-none placeholder:text-slate-700"
            />

            {/* Mobile */}
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number*"
              required
              className="h-[48px] sm:h-[52px] w-full bg-white px-5 text-[15px] sm:text-[16px] outline-none placeholder:text-slate-700"
            />

            {/* Interested In */}
            <select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              required
              className="h-[48px] sm:h-[52px] w-full appearance-none bg-white px-5 text-[15px] sm:text-[16px] text-slate-700 outline-none"
            >
              <option value="" disabled>
                I'm Interested In*
              </option>

              <option value="residential">
                Residential Plots
              </option>

              <option value="commercial">
                Commercial Plots
              </option>

              <option value="other">
                Other
              </option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message / Query"
              rows={4}
              className="min-h-[100px] sm:min-h-[135px] w-full resize-none bg-white px-5 py-4 text-[15px] sm:text-[16px] outline-none placeholder:text-slate-700"
            />

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="hero-agreement"
                required
                className="mt-1 h-[19px] w-[19px] shrink-0 accent-[#c29665]"
              />

              <label
                htmlFor="hero-agreement"
                className="text-[11px] sm:text-[12px] leading-[1.45] text-slate-700 font-roboto"
              >
                By submitting this form, I consent to being
                contacted by Kinza Estate and its authorised
                representatives through call, SMS, email or
                WhatsApp regarding Highway Greens, its
                availability and related offers. This consent
                will override any DND or NDNC registration.
              </label>
            </div>

            {/* Submit */}
            <MagneticButton
              text={
                isSubmitting
                  ? "Submitting..."
                  : "Submit"
              }
              bgColor="#BD8B59"
              textColor="#000"
              hoverTextColor="#000"
              accentColor="#caa56b"
              hoverColor="#fff"
            />

            {/* Status */}
            {status && (
              <p className="text-center text-sm text-slate-700">
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}