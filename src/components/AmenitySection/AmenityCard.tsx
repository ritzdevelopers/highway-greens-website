"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Amenity = {
  title: string;
  image: string;
  icon: string;
  subtitle: string;
  points: string[];
};

type Props = {
  amenity: Amenity;
  onPrev: () => void;
  onNext: () => void;
};

export default function AmenityCard({
  amenity,
  onPrev,
  onNext,
}: Props) {
  return (
    <motion.div
      key={amenity.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="
        relative
        h-[360px]
        w-full
        overflow-hidden
        sm:h-[420px]
        sm:overflow-visible
        lg:h-[450px]
      "
    >
{/* ================= IMAGE ================= */}

<div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
  <motion.div
    key={`image-${amenity.title}`}
    initial={{
      opacity: 0,
      scale: 1.08,
      y: 8,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    whileHover={{
      scale: 1.04,
    }}
    transition={{
      opacity: {
        duration: 0.45,
        ease: "easeOut",
      },
      scale: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
      y: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }}
    className="relative h-full w-full"
  >
    <Image
      src={amenity.image}
      alt={amenity.title}
      fill
      priority
      className="object-cover"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
    />
  </motion.div>
</div>

      {/* ================= IMAGE OVERLAY ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-black/20
        "
      />

      {/* ================= CONTENT CARD ================= */}

      <motion.div
        key={`content-${amenity.title}`}
        initial={{
          x: -40,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          w-[70%]
          -translate-x-1/2
          -translate-y-1/2
          bg-black/60
          p-4
          text-white

          sm:left-8
          sm:right-auto
          sm:top-1/2
          sm:w-[250px]
          sm:translate-x-0
          sm:-translate-y-1/2
          sm:p-5

          lg:left-12
          lg:w-[300px]
          lg:p-6
        "
      >
        {/* Title */}

        <h3
          className="
            text-[22px]
            sm:text-[24px]
            font-roboto
          "
          style={{
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          {amenity.title}
        </h3>

        <div className="my-3 h-px bg-white/40" />

        {/* Subtitle */}

        <p className="text-[13px] sm:text-base font-roboto">
          {amenity.subtitle}
        </p>

        <div className="my-3 h-px bg-white/40" />

        {/* Points */}

        <ul className="mt-3 space-y-1.5 sm:space-y-2">
          {amenity.points.map((point) => (
            <li
              key={point}
              className="
                flex
                gap-2
                text-[11px]
                leading-4
                sm:text-sm
                sm:leading-5
              "
            >
              <span className="shrink-0">•</span>

              <span className="font-roboto text-gray-200">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* ================= LEFT ARROW ================= */}

      <motion.button
        type="button"
        onClick={onPrev}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          absolute
          left-2
          top-1/2
          z-50
          flex
          h-10
          w-10
          -translate-y-1/2
          cursor-pointer
          items-center
          justify-center
          rounded-full
          bg-white
          text-black
          shadow-lg

          sm:-left-8
          sm:h-14
          sm:w-14

          lg:-left-20
          lg:h-16
          lg:w-16
        "
        aria-label="Previous amenity"
      >
        <ChevronLeft
          size={24}
          strokeWidth={1.5}
          className="sm:h-7 sm:w-7"
        />
      </motion.button>

      {/* ================= RIGHT ARROW ================= */}

      <motion.button
        type="button"
        onClick={onNext}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          absolute
          right-2
          top-1/2
          z-50
          flex
          h-10
          w-10
          -translate-y-1/2
          cursor-pointer
          items-center
          justify-center
          rounded-full
          bg-white
          text-black
          shadow-lg

          sm:-right-8
          sm:h-14
          sm:w-14

          lg:-right-20
          lg:h-16
          lg:w-16
        "
        aria-label="Next amenity"
      >
        <ChevronRight
          size={24}
          strokeWidth={1.5}
          className="sm:h-7 sm:w-7"
        />
      </motion.button>
    </motion.div>
  );
}