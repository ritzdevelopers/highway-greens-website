"use client";

import Image, { type ImageProps } from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";

type PremiumImageProps = Omit<ImageProps, "className"> & {
  className?: string;
  wrapperClassName?: string;

  hoverScale?: number;
  revealDuration?: number;
  delay?: number;

  parallax?: number;
  tilt?: number;
  enableTilt?: boolean;
  animateOnChange?: boolean;
};

export default function PremiumImage({
  className = "",
  wrapperClassName = "",
  hoverScale = 1.08,
  revealDuration = 0.8,
  delay = 0,
  parallax = 12,
  tilt = 4,
  enableTilt = true,
  animateOnChange = false,
  ...imageProps
}: PremiumImageProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
  });

  const springY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
  });

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    [tilt, -tilt]
  );

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    [-tilt, tilt]
  );

  const imageX = useTransform(
    springX,
    [-0.5, 0.5],
    [-parallax, parallax]
  );

  const imageY = useTransform(
    springY,
    [-0.5, 0.5],
    [-parallax, parallax]
  );

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    if (!enableTilt) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        group
        relative
        overflow-hidden
        ${wrapperClassName}
      `}
      style={{
        perspective: 1000,
      }}
    >
      {/* Soft Reveal Mask */}
      <motion.div
        variants={{
          hidden: {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
          },
          visible: {
            clipPath: "inset(0 0 100% 0)",
            opacity: 1,
          },
        }}
        transition={{
          duration: revealDuration,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
    pointer-events-none
    absolute
    inset-0
    z-10
    bg-[#caa56b]/15
  "
      />

      {/* Image */}
      <motion.div
        variants={{
          hidden: {
            clipPath: "inset(0 0 100% 0)",
            scale: 1.12,
          },
          visible: {
            clipPath: "inset(0 0 0% 0)",
            scale: 1,
          },
          hover: {
            scale: hoverScale,
          },
        }}
        transition={{
          clipPath: {
            duration: revealDuration,
            delay,
            ease: [0.76, 0, 0.24, 1],
          },
          scale: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
        }}
        className="relative h-full w-full"
      >
        {/* Parallax Image */}
        <motion.div
          style={{
            x: enableTilt ? imageX : 0,
            y: enableTilt ? imageY : 0,
          }}
          className="relative h-[calc(100%+24px)] w-[calc(100%+24px)] -left-3 -top-3"
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

      {/* Dark Hover Overlay */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 0,
          },
          hover: {
            opacity: 0.18,
          },
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-20
          bg-black
        "
      />

      {/* Spotlight */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 0,
          },
          hover: {
            opacity: 1,
          },
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
          opacity-0
        "
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.18), transparent 38%)",
        }}
      />

      {/* Premium Border */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 1.03,
          },
          visible: {
            opacity: 0,
            scale: 1,
          },
          hover: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          pointer-events-none
          absolute
          inset-3
          z-40
          border
          border-white/40
        "
      />

      {/* Corner Accent */}
      <motion.div
        variants={{
          hidden: {
            scaleX: 0,
          },
          visible: {
            scaleX: 0,
          },
          hover: {
            scaleX: 1,
          },
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-0
          left-0
          z-40
          h-[2px]
          w-24
          origin-left
          bg-[#caa56b]
        "
      />
    </motion.div>
  );
}