"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        borderColor: accentColor,
      }}
      initial="rest"
      whileHover="hover"
      className={`
        relative
        inline-flex
        h-[56px]
        items-center
        justify-center
        overflow-hidden
        border
        px-10
        cursor-pointer
        ${className}
      `}
    >
      {/* Circle expand fill */}
      <motion.span
        className="absolute inset-0"
        style={{ backgroundColor: hoverColor }}
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

      <motion.span
        className="relative z-10 text-[18px] font-semibold tracking-wide font-roboto"
        variants={{
          rest: { color: textColor },
          hover: { color: hoverTextColor },
        }}
        transition={{ duration: 0.25 }}
      >
        {text}
      </motion.span>
    </motion.button>
  );
}
