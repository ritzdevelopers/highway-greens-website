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

  const getIndex = (offset: number) =>
    (active + offset + journeyData.length) % journeyData.length;

  const leftCard = journeyData[getIndex(-1)];
  const centerCard = journeyData[getIndex(0)];
  const rightCard = journeyData[getIndex(1)];

  const CardImage = ({
    card,
    center = false,
  }: {
    card: (typeof journeyData)[number];
    center?: boolean;
  }) => (
    <div className="group relative h-full w-full overflow-hidden rounded-2xl">
      <PremiumImage
        src={card.image}
        alt={card.title}
        fill
        priority={center}
        wrapperClassName="h-full w-full"
        className="object-cover"
        hoverScale={center ? 1.05 : 1.08}
        parallax={center ? 8 : 6}
        tilt={2}
      />

      {/* Default overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/75 group-hover:via-black/25" />

      {/* Hover Content */}
      <div
        className="
          absolute inset-x-0 bottom-0
          translate-y-5
          p-6 text-white
          opacity-0
          transition-all duration-500
          group-hover:translate-y-0
          group-hover:opacity-100
          sm:p-8
        "
      >
        <h3 className="text-xl font-medium leading-tight sm:text-2xl">
          {card.title}
        </h3>

        <p className="mt-3 max-w-[420px] text-sm leading-6 text-white/90 sm:text-base">
          {card.subtitle}
        </p>

        {/* <div className="mt-5 h-[2px] w-10 bg-[#BE8A56] transition-all duration-500 group-hover:w-16" /> */}
      </div>

      {/* Small hover indicator */}
      <div
        className="
          absolute right-5 top-5
          h-9 w-9 rounded-full
          border border-white/40
          bg-black/10
          opacity-0
          backdrop-blur-sm
          transition-all duration-500
          group-hover:opacity-100
        "
      />
    </div>
  );

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

        {/* Cards */}
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-3 lg:gap-6">

          {/* Left */}
          <motion.div
            key={`left-${leftCard.id}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={prev}
            className="
              relative hidden h-[400px]
              cursor-pointer overflow-hidden
              rounded-2xl shadow-lg
              transition-transform duration-500
              hover:-translate-y-1
              lg:block
            "
          >
            <CardImage card={leftCard} />
          </motion.div>

          {/* Center */}
          <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[450px] md:h-[500px]">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={centerCard.id}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? "100%" : "-100%",
                  }),
                  center: {
                    x: 0,
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? "-100%" : "100%",
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <CardImage card={centerCard} center />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right */}
          <motion.div
            key={`right-${rightCard.id}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={next}
            className="
              relative hidden h-[400px]
              cursor-pointer overflow-hidden
              rounded-2xl shadow-lg
              transition-transform duration-500
              hover:-translate-y-1
              lg:block
            "
          >
            <CardImage card={rightCard} />
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="mt-7 flex items-center justify-center gap-4 md:mt-10">
          <button
            onClick={prev}
            aria-label="Previous"
            className="
              group flex h-14 w-14 items-center justify-center
              rounded-full border border-[#d8d8d8]
              bg-white text-[#22382d]
              transition-all duration-300
              hover:border-[#22382d]
              hover:bg-[#22382d]
              hover:text-white
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
              bg-white text-[#22382d]
              transition-all duration-300
              hover:border-[#22382d]
              hover:bg-[#22382d]
              hover:text-white
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