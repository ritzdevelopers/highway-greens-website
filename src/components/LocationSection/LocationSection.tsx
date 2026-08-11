"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import LocationStats from "./LocationStats";

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative overflow-hidden py-32"
    >
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
          src="/location-bg.jpg"
          alt="Location"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#183121]/60" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto max-w-5xl text-center text-white"
        >
          <p className="text-md tracking-[0.15em] font-roboto">
            Location
          </p>

          <h2
            className="mt-5 text-3xl font-bold uppercase lg:text-[38px]"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            CONNECTED TO WHAT MATTERS
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-md leading-7 text-white/90 font-roboto">
            Highway Greens is envisioned for people who want to remain connected
            to work, education, healthcare, family and everyday conveniences
            while enjoying a calmer and more spacious living environment.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-md leading-7 text-white/90 font-roboto">
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