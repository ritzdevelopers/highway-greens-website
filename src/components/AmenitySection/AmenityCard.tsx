"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import AnimatedImage from "@/components/ui/AnimatedImage";

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
        h-[320px]
        w-full
        sm:h-[420px]
        lg:h-[450px]
      "
    >
      {/* ================= IMAGE ================= */}

      <AnimatedImage
        key={amenity.title}
        src={amenity.image}
        alt={amenity.title}
        fill
        priority
        delay={0.05}
        hoverScale={1.03}
        wrapperClassName="absolute inset-0 h-full w-full"
      />

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
          left-4
          right-4
          top-4
          z-20
          w-auto
          bg-black/60
          p-4
          text-white

          sm:left-8
          sm:right-auto
          sm:top-1/2
          sm:w-[300px]
          sm:-translate-y-1/2
          sm:p-5

          lg:left-12
          lg:w-[330px]
          lg:p-6
        "
      >
        {/* Title */}
        <h3
          className="text-2xl sm:text-3xl"
          style={{
            fontFamily: "Cormorant Garamond, serif",
          }}
        >
          {amenity.title}
        </h3>

        <div className="my-3 h-px bg-white/40" />

        {/* Subtitle */}
        <p className="text-sm sm:text-base">
          {amenity.subtitle}
        </p>

        <div className="my-3 h-px bg-white/40" />

        {/* Points */}
        <ul className="mt-3 space-y-2">
          {amenity.points.map((point) => (
            <li
              key={point}
              className="
                flex
                gap-2
                text-xs
                leading-5
                sm:text-sm
              "
            >
              <span>•</span>
              <span>{point}</span>
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
          left-3
          top-1/2
          z-50
          flex
          h-12
          w-12
          -translate-y-1/2
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
          size={28}
          strokeWidth={1.5}
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
          right-3
          top-1/2
          z-50
          flex
          h-12
          w-12
          -translate-y-1/2
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
          size={28}
          strokeWidth={1.5}
        />
      </motion.button>
    </motion.div>
  );
}