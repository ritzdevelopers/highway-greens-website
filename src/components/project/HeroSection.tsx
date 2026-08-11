"use client";

import PremiumImage from "../ui/ProjectAnimateImage";
import { motion } from "framer-motion";
import type { HeroContent } from "@/data/projectData";
import MagneticButton from "../ui/ProjectAnumatedBtn";

type HeroSectionProps = {
  content: HeroContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative overflow-visible bg-white pb-24 lg:pb-0">
      {/* ================= HERO CONTAINER ================= */}
      <div className="relative flex flex-col lg:h-[635px] lg:block">

        {/* ================= HERO IMAGE ================= */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-full w-full lg:absolute lg:inset-y-0 lg:left-0 lg:right-[350px] lg:w-auto">
          <PremiumImage
            src="/hero-main.jpg"
            alt="Highway Greens"
            fill
            priority
            wrapperClassName="h-full w-full"
            className="object-cover object-center"
            hoverScale={1.04}
            parallax={8}
            tilt={2}
            delay={0.1}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 z-20 bg-black/40" />

          {/* Headline & Subline */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-18 left-6 right-6 md:bottom-[105px] md:left-[9%] z-20 text-white"
          >
            <h1 className="text-[28px] sm:text-[32px] lg:text-[38px] font-normal leading-[1.15]">
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
          <form className="flex flex-col gap-4 sm:gap-5">
            <input
              type="text"
              placeholder="Full Name*"
              required
              className="h-[48px] sm:h-[52px] w-full bg-white px-5 text-[15px] sm:text-[16px] outline-none placeholder:text-slate-700"
            />

            <input
              type="email"
              placeholder="Email Address*"
              required
              className="h-[48px] sm:h-[52px] w-full bg-white px-5 text-[15px] sm:text-[16px] outline-none placeholder:text-slate-700"
            />

            <input
              type="tel"
              placeholder="Mobile Number*"
              required
              className="h-[48px] sm:h-[52px] w-full bg-white px-5 text-[15px] sm:text-[16px] outline-none placeholder:text-slate-700"
            />

            <select
              required
              defaultValue=""
              className="h-[48px] sm:h-[52px] w-full appearance-none bg-white px-5 text-[15px] sm:text-[16px] text-slate-700 outline-none"
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
              className="min-h-[100px] sm:min-h-[135px] w-full resize-none bg-white px-5 py-4 text-[15px] sm:text-[16px] outline-none placeholder:text-slate-700"
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
                className="text-[11px] sm:text-[12px] leading-[1.45] text-slate-700"
              >
                By submitting this form, I consent to being contacted by
                Kinza Estate and its authorised representatives through call,
                SMS, email or WhatsApp regarding Highway Greens, its
                availability and related offers. This consent will override
                any DND or NDNC registration.
              </label>
            </div>

            <MagneticButton
              text="Submit"
              bgColor="#BD8B59"
              textColor="#000"
              hoverTextColor="#000"
              accentColor="#caa56b"
              hoverColor="#fff"
            />
          </form>
        </motion.div>
      </div>
    </section>
  );
}