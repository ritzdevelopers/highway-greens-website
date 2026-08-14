"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LocationStats from "./LocationStats";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative overflow-hidden py-16 md:py-32"
    >
      {/* Desktop Background */}
      <motion.div
        className="absolute inset-0 z-0 hidden md:block"
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
          src="/landingPageA/location-bg.jpg"
          alt="Location"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Mobile Background */}
      <motion.div
        className="absolute inset-0 z-0 block md:hidden"
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
          src="/landingPageA/location-bg-mobile.jpg"
          alt="Location"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-[#183121]/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center text-white"
        >
          <p className="text-md tracking-[0.15em] font-roboto">
            Location
          </p>

          <h2
            className="mt-2 text-2xl font-bold uppercase md:mt-5 lg:text-[38px]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            CONNECTED TO WHAT MATTERS
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-md leading-7 text-white/90 font-roboto md:mt-10">
            Highway Greens is envisioned for people who want to remain connected
            to work, education, healthcare, family and everyday conveniences
            while enjoying a calmer and more spacious living environment.
          </p>

          <p className="mx-auto mt-4 max-w-4xl text-md leading-7 text-white/90 font-roboto md:mt-6">
            It offers the balance of being close enough to participate in the
            city and far enough to step away from its constant noise and
            congestion.
          </p>
        </motion.div>

        <LocationStats />
      </div>
    </section>
  );
}