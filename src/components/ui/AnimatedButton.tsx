"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
}: AnimatedButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      variants={{
        initial: {
          scale: 1,
        },
        hover: {
          scale: 1.03,
        },
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group relative inline-flex items-center justify-center
        overflow-hidden
        bg-[#f4d4bf]
        px-10 py-4
        text-base md:text-lg
        font-medium
        text-black
        ${className}
      `}
    >
      {/* Expanding background */}
      <motion.span
        variants={{
          initial: {
            scaleX: 0,
            transformOrigin: "left",
          },
          hover: {
            scaleX: 1,
            transformOrigin: "left",
          },
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 bg-[#d7b08d]"
      />

      {/* Shimmer */}
      <motion.span
        variants={{
          initial: {
            x: "-120%",
            opacity: 0,
          },
          hover: {
            x: "120%",
            opacity: 0.35,
          },
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="
          absolute inset-y-0
          left-0
          w-1/3
          skew-x-[-20deg]
          bg-white
        "
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-3">
        {children}

        {/* <motion.span
          variants={{
            initial: {
              x: 0,
              y: 0,
              rotate: 0,
            },
            hover: {
              x: 3,
              y: -3,
              rotate: 45,
            },
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ArrowUpRight size={18} strokeWidth={1.8} />
        </motion.span> */}
      </span>
    </motion.button>
  );
}