"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

type MagneticButtonProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  accentColor?: string;
  hoverColor?: string;
  onClick?: () => void;
  className?: string;
};

export default function MagneticButton({
  text,
  bgColor = "#ffffff",
  textColor = "#1f1f1f",
  hoverTextColor = "#ffffff",
  accentColor = "#caa56b",
  hoverColor = "#caa56b",
  onClick,
  className = "",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
  });

  const rotateX = useTransform(springY, [-10, 10], [4, -4]);
  const rotateY = useTransform(springX, [-10, 10], [-4, 4]);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX * 0.12);
    y.set(mouseY * 0.12);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: bgColor,
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: {
          scale: 1,
        },
        hover: {
          scale: 1.02,
        },
        tap: {
          scale: 0.96,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 22,
      }}
      className={`
        group
        relative
        inline-flex
        h-[56px]
        items-center
        justify-center
        overflow-hidden
        px-10
        ${className}
      `}
    >
      {/* Outer Border */}
      <motion.span
        className="absolute inset-0 border"
        style={{
          borderColor: accentColor,
        }}
        variants={{
          rest: {
            opacity: 1,
          },
          hover: {
            opacity: 0.8,
          },
        }}
      />

      {/* Animated Border Sweep */}
      <motion.span
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            90deg,
            transparent 0%,
            ${accentColor}50 50%,
            transparent 100%
          )`,
        }}
        variants={{
          rest: {
            x: "-120%",
          },
          hover: {
            x: "120%",
          },
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Hover Background */}
      <motion.span
        className="absolute inset-0"
        style={{
          backgroundColor: hoverColor,
        }}
        variants={{
          rest: {
            clipPath: "circle(0% at 50% 50%)",
          },
          hover: {
            clipPath: "circle(100% at 50% 50%)",
          },
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Inner Glow */}
      <motion.span
        className="absolute inset-[3px] border pointer-events-none"
        style={{
          borderColor: accentColor,
        }}
        variants={{
          rest: {
            opacity: 0.25,
          },
          hover: {
            opacity: 0.6,
          },
        }}
      />

      {/* Content */}
      <motion.span
        className="relative z-10 flex items-center gap-4"
        variants={{
          rest: {
            color: textColor,
          },
          hover: {
            color: hoverTextColor,
          },
        }}
        transition={{
          duration: 0.25,
        }}
      >
        {/* Text */}
        <span className="text-[18px] font-semibold tracking-wide font-roboto">
          {text}
        </span>
      </motion.span>
    </motion.button>
  );
}