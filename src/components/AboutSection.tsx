"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { AboutContent } from "@/data/siteData";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedButton from "./ui/AnimatedBtn";
import AnimatedImage from "./ui/AnimatedImage";

type AboutSectionProps = {
  content: AboutContent;
};

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <SectionWrapper id="overview" className="relative overflow-hidden bg-white py-10 md:py-15">
      {/* Dots Background */}
      <div
        aria-hidden="true"
        className="
    pointer-events-none
    absolute
    right-0
    top-0
    z-0
    w-[58%]
    max-w-[869px]
    overflow-hidden
    opacity-40
  "
      >
        <Image
          src="/dots-pattern.png"
          alt=""
          width={869}
          height={548}
          className="
      h-auto
      w-full
      brightness-75
    "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-8xl sm:px-6 lg:px-20 px-5">
        <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-lg font-semibold tracking-[0.15em] text-[#666] font-roboto">
              Overview
            </p>

            <h2
              className="
                text-2xl
                font-black
                uppercase
                leading-tight
                text-black
                lg:text-[38px]
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              {content.title}
            </h2>

            <h3 className="mt-3 text-[18px] font-medium text-black">
              {content.subtitle}
            </h3>

            <div className="mt-5 md:mt-10 space-y-5 text-[16px] leading-[1.8] text-[#666]">
              {content.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <AnimatedButton
              text="Download Brochure"
              bgColor="#caa56b"
              textColor="#fff"
              accentColor="#b9965a"
              hoverTextColor="#000"
              hoverColor="#ffffff"
              className="mt-8"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <AnimatedImage
              src={content.image}
              alt={content.title}
              width={700}
              height={550}
              priority
              delay={0.2}
              hoverScale={1.04}
              wrapperClassName="shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}