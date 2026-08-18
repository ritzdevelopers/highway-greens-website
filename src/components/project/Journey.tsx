"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { journeyData } from "@/data/projectData";
import PremiumImage from "../ui/ProjectAnimateImage";

export default function Journey() {
  const [active, setActive] = useState(1);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setActive((prev) =>
      prev === 0 ? journeyData.length - 1 : prev - 1
    );
  };

  const next = () => {
    setDirection(1);
    setActive((prev) =>
      prev === journeyData.length - 1 ? 0 : prev + 1
    );
  };

  const getPositionClassAndStyles = (index: number) => {
    const total = journeyData.length;
    const diff = (index - active + total) % total;

    // Determine normalized position relative to active card
    let position = diff;
    if (diff > total / 2) {
      position = diff - total;
    }

    if (position === 0) {
      return {
        // Active Center Card
        zIndex: 30,
        x: "0%",
        scale: 1,
        opacity: 1,
        pointerEvents: "auto" as const,
        isCenter: true,
      };
    } else if (position === -1 || (active === 0 && index === total - 1)) {
      return {
        // Left Card
        zIndex: 20,
        x: "-65%",
        scale: 0.85,
        opacity: 0.7,
        pointerEvents: "auto" as const,
        isCenter: false,
      };
    } else if (position === 1 || (active === total - 1 && index === 0)) {
      return {
        // Right Card
        zIndex: 20,
        x: "65%",
        scale: 0.85,
        opacity: 0.7,
        pointerEvents: "auto" as const,
        isCenter: false,
      };
    } else if (position < -1) {
      return {
        // Far left background items
        zIndex: 10,
        x: "-110%",
        scale: 0.7,
        opacity: 0,
        pointerEvents: "none" as const,
        isCenter: false,
      };
    } else {
      return {
        // Far right background items
        zIndex: 10,
        x: "110%",
        scale: 0.7,
        opacity: 0,
        pointerEvents: "none" as const,
        isCenter: false,
      };
    }
  };

  return (
    <section className="overflow-hidden bg-white py-10 md:py-16">
      <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-7 text-center md:mb-12"
        >
          <h2 className="text-3xl font-medium tracking-tight text-[#172b22] md:text-4xl lg:text-[48px]">
            The Journey
          </h2>
        </motion.div>

        {/* Carousel Area */}
        <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px] w-full">
          {journeyData.map((card, index) => {
            const pos = getPositionClassAndStyles(index);

            return (
              <motion.div
                key={card.id}
                initial={false}
                animate={{
                  x: pos.x,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 1, 0.5, 1],
                }}
                onClick={() => {
                  if (pos.x.startsWith("-")) prev();
                  else if (pos.x.startsWith("65") || pos.x.startsWith("110")) next();
                }}
                className="absolute w-[88%] sm:w-[70%] lg:w-[48%] h-[360px] sm:h-[430px] md:h-[480px] cursor-pointer rounded-2xl shadow-xl overflow-hidden select-none"
                style={{
                  pointerEvents: pos.pointerEvents,
                }}
              >
                <div className="group relative h-full w-full overflow-hidden rounded-2xl">
{/* Desktop Image */}
<div className="absolute inset-0 hidden md:block">
  <PremiumImage
    src={card.image}
    alt={card.title}
    fill
    priority={pos.isCenter}
    wrapperClassName="h-full w-full"
    className="object-cover"
    hoverScale={pos.isCenter ? 1.05 : 1.08}
    parallax={pos.isCenter ? 8 : 6}
    tilt={2}
  />
</div>

{/* Mobile Image */}
<div className="absolute inset-0 block md:hidden">
  <PremiumImage
    src={card.mobileImage || card.image}
    alt={card.title}
    fill
    priority={pos.isCenter}
    wrapperClassName="h-full w-full"
    className="object-cover"
    hoverScale={pos.isCenter ? 1.05 : 1.08}
    parallax={pos.isCenter ? 8 : 6}
    tilt={2}
  />
</div>

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${pos.isCenter
                        ? "bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85"
                        : "bg-gradient-to-t from-black/60 via-black/10 to-transparent hover:from-black/70"
                      }`}
                  />

                  {/* Card Content (Always visible on Center card, hover/subtle on sides) */}
                  {/* Card Content */}
                  <div
                    className="
    absolute inset-x-0 bottom-0 p-6 text-white sm:p-8
    opacity-0 translate-y-4
    group-hover:opacity-100
    group-hover:translate-y-0
    transition-all duration-500 ease-out
    pointer-events-none
  "
                  >
                    <h3 className="text-lg font-medium leading-tight sm:text-2xl md:text-3xl drop-shadow-md">
                      {card.title}
                    </h3>

                    <p className="mt-2.5 max-w-[480px] text-xs sm:text-sm md:text-base leading-snug text-white/90">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Top indicator icon on active/hover */}
                  <div
                    className={`
                      absolute right-5 top-5
                      h-9 w-9 rounded-full
                      border border-white/40
                      bg-black/20 backdrop-blur-sm
                      transition-all duration-500
                      ${pos.isCenter ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    `}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4 md:mt-12">
          <button
            onClick={prev}
            aria-label="Previous"
            className="
              group flex h-14 w-14 items-center justify-center
              rounded-full border border-[#d8d8d8]
              bg-white text-[#22382d] shadow-sm
              transition-all duration-300
              hover:border-[#22382d]
              hover:bg-[#22382d]
              hover:text-white
              hover:shadow-md
              active:scale-95
              md:h-16 md:w-16
            "
          >
            <ChevronLeft
              size={28}
              className="transition-transform duration-300 group-hover:-translate-x-1 cursor-pointer"
            />
          </button>

          <button
            onClick={next}
            aria-label="Next"
            className="
              group flex h-14 w-14 items-center justify-center
              rounded-full border border-[#d8d8d8]
              bg-white text-[#22382d] shadow-sm
              transition-all duration-300
              hover:border-[#22382d]
              hover:bg-[#22382d]
              hover:text-white
              hover:shadow-md
              active:scale-95
              md:h-16 md:w-16
            "
          >
            <ChevronRight
              size={28}
              className="transition-transform duration-300 group-hover:translate-x-1 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
