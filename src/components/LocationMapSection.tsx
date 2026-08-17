"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LocationMapSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Map Image */}
      <div className="relative h-[350px] w-full">
        {/* Desktop Map */}
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
            src="/landingPageA/location-map.png"
            alt="Location Map"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Mobile Map */}
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
            src="/landingPageA/location-map-mobile.png"
            alt="Location Map"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 z-10 bg-[#193320]/20" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute right-12 md:right-24 top-1/2 z-20 max-w-xl -translate-y-1/2"
        >
          <h2
            className="text-right text-2xl font-bold uppercase leading-tight text-white lg:text-[34px] [font-family:Georgia,serif]"
          >
            At The Right Distance
            <br />
            From Everything
          </h2>
        </motion.div>
      </div>
    </section>
  );
}