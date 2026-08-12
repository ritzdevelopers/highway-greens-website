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
  hoverScale = 1,
  revealDuration = 0.8,
  delay = 0,
  parallax = 0,
  tilt = 0,
  enableTilt = false,
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
      whileHover={hoverScale !== 1 ? "hover" : undefined}
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
        perspective: enableTilt ? 1000 : undefined,
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
            scale: 1.04,
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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        style={{
          rotateX: enableTilt ? rotateX : 0,
          rotateY: enableTilt ? rotateY : 0,
        }}
        className="relative h-full w-full"
      >
        <motion.div
          style={{
            x: enableTilt ? imageX : 0,
            y: enableTilt ? imageY : 0,
          }}
          className={
            enableTilt
              ? "relative h-[calc(100%+24px)] w-[calc(100%+24px)] -left-3 -top-3"
              : "relative h-full w-full"
          }
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
    </motion.div>
  );
}
