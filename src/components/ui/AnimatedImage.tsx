"use client";

import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";

type AnimatedImageProps = Omit<ImageProps, "className"> & {
  className?: string;
  wrapperClassName?: string;
  hoverScale?: number;
  zoomScale?: number;
  zoomDuration?: number;
  delay?: number;
};

export default function AnimatedImage({
  className = "",
  wrapperClassName = "",
  hoverScale = 1.04,
  zoomScale = 1.025,
  zoomDuration = 8,
  delay = 0,
  ...imageProps
}: AnimatedImageProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className={`group relative overflow-hidden ${wrapperClassName}`}
    >
      {/* Fade + Lift + Subtle Zoom */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.97,
          },

          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
          },

          hover: {
            scale: hoverScale,
          },
        }}
        transition={{
          opacity: {
            duration: 0.8,
            delay,
            ease: "easeOut",
          },
          y: {
            duration: 1,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
          scale: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className="relative h-full w-full"
      >
        {/* Continuous subtle zoom */}
        <motion.div
          animate={{
            scale: [1, zoomScale, 1],
          }}
          transition={{
            duration: zoomDuration,
            delay: delay + 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-full w-full"
        >
          <Image
            {...imageProps}
            className={`
              block
              h-full
              w-full
              object-cover
              ${className}
            `}
          />
        </motion.div>
      </motion.div>

      {/* Premium Shine */}
      <motion.div
        initial={{
          x: "-150%",
          opacity: 0,
        }}
        whileInView={{
          x: "150%",
          opacity: [0, 0.25, 0],
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          delay: delay + 0.7,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-20
          w-[30%]
          skew-x-[-20deg]
          bg-white
          blur-xl
        "
      />
    </motion.div>
  );
}