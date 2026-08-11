"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { HeroContent } from "@/data/siteData";
import AnimatedButton from "./ui/AnimatedBtn";

type HeroSectionProps = {
  content: HeroContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src={content.heroImage}
          alt="Highway Greens"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center"
        >
          <h1
            className="
    text-white
    font-normal
    italic
    text-[38px]
    md:text-[56px]
    leading-none
    tracking-normal
    [font-family:Georgia,serif]
  "
          >
            {content.headline}
          </h1>

          <p
            className="mt-6 text-xl italic tracking-[0.3em]
            text-white/90 [font-family:Georgia,serif]"
          >
            {content.subline}
          </p>
          <div className="pt-10">
            <AnimatedButton
              text={content.ctaPrimary}
              bgColor="#ffffff"
              textColor="#000"
              accentColor="#b9965a"
              hoverColor="#caa56b"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}