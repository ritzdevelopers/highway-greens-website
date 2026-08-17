"use client";

import { motion } from "framer-motion";

type AnimatedButtonProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  accentColor?: string;
  hoverColor?: string;
  onClick?: () => void;
  className?: string;
};

export default function AnimatedButton({
  text,
  bgColor = "#ffffff",
  textColor = "#1f1f1f",
  hoverTextColor = "#ffffff",
  accentColor = "#caa56b",
  hoverColor = "#caa56b",
  onClick,
  className = "",
}: AnimatedButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      style={{
        backgroundColor: bgColor,
      }}
      variants={{
        rest: {
          scale: 1,
        },
        hover: {
          scale: 1.03,
        },
        tap: {
          scale: 0.97,
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
  px-8
  border-2
  cursor-pointer
  border-transparent
  ${className}
`}
    >
      {/* Premium border */}
{/* Hover Premium Border */}
<motion.span
  variants={{
    rest: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  }}
  transition={{
    duration: 0.25,
  }}
  className="
    pointer-events-none
    absolute
    inset-0
    z-20
    border-2
    border-[#caa56b]
  "
/>

      {/* Subtle inner border */}
      <span
        className="absolute inset-[3px] border opacity-30"
        style={{
          borderColor: accentColor,
        }}
      />

      {/* Moving light */}
      <motion.span
        animate={{
          x: ["-120%", "220%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-y-0
          left-0
          w-[30%]
          skew-x-[-20deg]
          bg-white/50
          blur-md
        "
      />

      {/* Subtle glow */}
      <motion.span
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
        style={{
          boxShadow: `inset 0 0 18px ${accentColor}30`,
        }}
      />

      {/* Hover background */}
      <motion.span
        variants={{
          rest: {
            scaleX: 0,
            transformOrigin: "left",
          },
          hover: {
            scaleX: 1,
            transformOrigin: "left",
          },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
        style={{
          backgroundColor: hoverColor,
        }}
      />

      {/* Content */}
      <motion.span
        variants={{
          rest: {
            x: 0,
            color: textColor,
          },
          hover: {
            x: 4,
            color: hoverTextColor,
          },
        }}
        transition={{
          x: {
            duration: 0.3,
            ease: "easeOut",
          },
          color: {
            duration: 0.25,
            ease: "easeOut",
          },
        }}
        className="relative z-10 flex items-center gap-4"
      >
        <span className="text-[18px] font-semibold tracking-wide font-roboto">
          {text}
        </span>
      </motion.span>
    </motion.button>
  );
}