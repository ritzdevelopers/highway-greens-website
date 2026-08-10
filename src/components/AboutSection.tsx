"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { AboutContent } from "@/data/siteData";
import SectionWrapper from "@/components/SectionWrapper";

type AboutSectionProps = {
  content: AboutContent;
};

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <SectionWrapper
      id="overview"
      className="relative overflow-hidden bg-white py-20"
    >
      {/* Dots Background */}
      <div
        className="absolute right-0 top-0 h-full w-[60%] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#d8d8d8 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-lg font-semibold tracking-[0.25em] text-[#666]">
              Overview
            </p>

            <h2
              className="text-3xl font-black uppercase leading-tight text-black lg:text-4xl"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {content.title}
            </h2>

            <h3 className="mt-3 text-xl font-semibold text-gray-800">
              {content.subtitle}
            </h3>

            <div className="mt-12 space-y-5 text-[16px] leading-[1.8] text-[#666]">
              {content.details.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <button className="mt-8 bg-[#C18A52] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#a87341]">
              Download Brochure
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Image
              src={content.image}
              alt={content.title}
              width={700}
              height={550}
              className="h-auto w-full object-cover shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}