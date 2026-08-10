"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HeroContent } from "@/data/projectData";

type HeroSectionProps = {
  content: HeroContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative overflow-visible bg-white">
      {/* ================= HERO IMAGE ================= */}
      <div className="relative h-[635px] w-full lg:h-[635px]">
        {/* Image only covers left hero area */}
        <div className="absolute inset-y-0 left-0 right-[350px]">
          <Image
            src="/hero-main.jpg"
            alt="Highway Greens"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-[105px] left-[9%] z-20 text-white"
        >
          <h1 className="text-[42px] font-normal leading-[1.15] lg:text-[43px]">
            {content.headline}
          </h1>

          <p className="mt-3 text-[20px] font-normal">
            {content.subline}
          </p>
        </motion.div>

        {/* ================= CONTACT FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            absolute
            right-[55px]
            top-[150px]
            z-50
            w-[500px]
            rounded-[18px]
            bg-[#ffebe0]
            p-[30px]
            shadow-[0_10px_35px_rgba(0,0,0,0.12)]
          "
        >
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name*"
              required
              className="h-[52px] w-full bg-white px-5 text-[16px] outline-none placeholder:text-slate-700"
            />

            <input
              type="email"
              placeholder="Email Address*"
              required
              className="h-[52px] w-full bg-white px-5 text-[16px] outline-none placeholder:text-slate-700"
            />

            <input
              type="tel"
              placeholder="Mobile Number*"
              required
              className="h-[52px] w-full bg-white px-5 text-[16px] outline-none placeholder:text-slate-700"
            />

            <select
              required
              defaultValue=""
              className="h-[52px] w-full appearance-none bg-white px-5 text-[16px] text-slate-700 outline-none"
            >
              <option value="" disabled>
                I'm Interested In*
              </option>
              <option value="residential">Residential Plots</option>
              <option value="commercial">Commercial Plots</option>
              <option value="other">Other</option>
            </select>

            <textarea
              placeholder="Message / Query"
              rows={4}
              className="min-h-[135px] w-full resize-none bg-white px-5 py-4 text-[16px] outline-none placeholder:text-slate-700"
            />

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreement"
                required
                defaultChecked
                className="mt-1 h-[19px] w-[19px] shrink-0 accent-[#c29665]"
              />

              <label
                htmlFor="agreement"
                className="text-[12px] leading-[1.45] text-slate-700"
              >
                By submitting this form, I consent to being contacted by
                Kinza Estate and its authorised representatives through call,
                SMS, email or WhatsApp regarding Highway Greens, its
                availability and related offers. This consent will override
                any DND or NDNC registration.
              </label>
            </div>

            <button
              type="submit"
              className="mt-2 h-[55px] w-full bg-[#c29665] text-[16px] font-bold uppercase tracking-wider text-slate-900 transition hover:bg-[#b08556]"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* ================= SPEAK WITH OUR TEAM ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="
            absolute
            bottom-[-58px]
            z-[60]
            flex
            h-[86px]
            w-[335px]
            items-center
            gap-4
            bg-[#c29665]
            px-5
            text-white
            shadow-md
          "
        >
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-white/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.117-6.942-6.942l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>

          <div>
            <p className="text-[16px] font-semibold">
              Speak With Our Team
            </p>

            <p className="mt-1 text-[17px] font-bold">
              Call: +91 9355455592
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}