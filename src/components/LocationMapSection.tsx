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
        <div className="absolute inset-0 z-10 bg-[#193320]/2z0" />

{/* Heading */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
    absolute
    left-1/2
    top-[20%]
    z-20
    -translate-x-1/2
    -translate-y-1/2
    md:left-auto
    md:right-12
    md:top-1/2
    md:translate-x-0
  "
>
  <h2
    className="
      w-[320px]
      text-end
      text-[22px]
      font-bold
      uppercase
      leading-[1.05]
      tracking-wide
      text-white
      [text-shadow:2px_2px_0_#193320,-2px_-2px_0_#193320,2px_-2px_0_#193320,-2px_2px_0_#193320,0_4px_8px_rgba(0,0,0,0.7)]
      md:w-auto
      md:text-right
      md:text-2xl
      md:leading-tight
      md:[text-shadow:0_3px_6px_rgba(0,0,0,0.7)]
      lg:text-[34px]
      [font-family:Georgia,serif]
    "
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