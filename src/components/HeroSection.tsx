"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HeroContent } from "@/data/siteData";

type HeroSectionProps = {
  content: HeroContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <Image
        src={content.heroImage}
        alt="Highway Greens"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center"
        >
          <h1
            className="text-white text-5xl font-light italic leading-tight
            md:text-7xl"
          >
            {content.headline}
          </h1>

          <p
            className="mt-6 text-xl italic tracking-[0.3em]
            text-white/90"
          >
            {content.subline}
          </p>

          <button
            className="mt-12 bg-white px-10 py-4
            font-semibold text-black
            transition hover:bg-[#caa56b]"
          >
            {content.ctaPrimary}
          </button>
        </motion.div>
      </div>
    </section>
  );
}