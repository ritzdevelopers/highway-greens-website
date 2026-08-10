"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HeroContent } from "@/data/projectData";

type HeroSectionProps = {
  content: HeroContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-slate-950 text-white">
      <Image
        src={content.heroImage}
        alt="Highway Greens"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/60" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-200">A project by Kinza Estate</p>

          <h1 className="mt-8 text-5xl font-black uppercase leading-tight text-white sm:text-6xl lg:text-7xl">
            {content.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            {content.subline}
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex rounded-full bg-amber-200 px-8 py-4 text-base font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-lg shadow-slate-950/10 transition hover:bg-amber-300"
          >
            {content.ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
