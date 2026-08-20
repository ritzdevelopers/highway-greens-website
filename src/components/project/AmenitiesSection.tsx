"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { amenities } from "@/data/amenities";
import AmenityTabs from "./AmenityTabs";

export default function AmenitiesSection() {
  const [activeId, setActiveId] = useState("leisure");

  const activeAmenity =
    amenities.find((item) => item.id === activeId) ?? amenities[0];

  const Icon = activeAmenity.icon;

  return (
    <section id="amenities" className="relative overflow-hidden bg-white py-5 lg:py-14">
      <div className="mx-auto max-w-8xl sm:px-6 lg:px-30 px-5">
        {/* Heading */}
        <div className="mx-auto mb-6 md:mb-16 max-w-[1100px] text-center">
          <p className="mb-3 text-[18px] font-medium tracking-[0.22em] text-neutral-500 font-roboto">
            Project Amenities
          </p>

          <h2 className="text-2xl font-normal tracking-[-0.03em] text-black md:text-3xl lg:text-[48px]">
            3+ ACRES OF ELEVATED LIVING
          </h2>

          <p className="mx-auto mt-3 max-w-[1050px] text-sm leading-7 text-neutral-500 md:text-[16px] font-roboto">
            Every Space At Highway Greens Has Been Planned To Support The
            Natural Rhythm Of Daily Life, From Quiet Morning Walks And
            Moments Of Reflection To Recreation, Fitness And Meaningful
            Community Interactions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-12">
          {/* Tabs */}
          <AmenityTabs
            activeId={activeId}
            onChange={setActiveId}
          />

          {/* Image */}
          <div className="relative aspect-[1.35/1] overflow-hidden bg-neutral-100">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeAmenity.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* Desktop Image */}
                <div className="absolute inset-0 hidden md:block">
                  <Image
                    src={activeAmenity.image}
                    alt={activeAmenity.title}
                    fill
                    sizes="50vw"
                    quality={90}
                    className="object-cover"
                    priority={activeAmenity.id === "leisure"}
                  />
                </div>

                {/* Mobile Image */}
                <div className="absolute inset-0 block md:hidden">
                  <Image
                    src={activeAmenity.mobileImage}
                    alt={activeAmenity.title}
                    fill
                    sizes="100vw"
                    quality={90}
                    className="object-cover"
                    priority={activeAmenity.id === "leisure"}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content */}
          <div className="lg:pl-3">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeAmenity.id}
                initial={{
                  opacity: 0,
                  x: 16,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -12,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-center gap-4">
                  <Icon
                    size={32}
                    strokeWidth={1.3}
                  />

                  <h3 className="text-2xl font-semibold">
                    {activeAmenity.title}
                  </h3>
                </div>

                <div className="my-5 border-y border-neutral-400 py-3">
                  <p className="text-[16px] font-medium">
                    {activeAmenity.subtitle}
                  </p>
                </div>

                <ul className="space-y-4">
                  {activeAmenity.points.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{
                        opacity: 0,
                        y: 6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                        duration: 0.25,
                      }}
                      className="flex gap-4 text-[15px] leading-6 text-neutral-700"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-black" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
