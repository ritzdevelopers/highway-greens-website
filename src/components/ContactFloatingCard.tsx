"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function ContactFloatingCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        fixed
        left-0
        top-[90%]
        z-[100]
        -translate-y-1/2
      "
    >
      <motion.div
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.a
          href="tel:+919355455592"
          whileHover={{
            x: 6,
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            group
            relative
            flex
            items-center
            gap-4
            overflow-hidden
            border
            border-[#caa56b]/60
            bg-[#BD8B59]
            px-5
            py-4
            shadow-[0_8px_30px_rgba(0,0,0,0.18)]
          "
        >
          {/* Animated shine */}
          <motion.span
            animate={{
              x: ["-120%", "220%"],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="
              absolute
              inset-y-0
              left-0
              w-1/3
              skew-x-[-20deg]
              bg-white/30
              blur-sm
            "
          />

          {/* Phone icon */}
          <motion.div
            animate={{
              rotate: [0, -8, 8, -8, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            className="
              relative
              z-10
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
            "
          >
            <PhoneCall
              size={30}
              strokeWidth={1.2}
              className="text-white"
            />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 pr-1">
            <p
              className="
                text-[18px]
                font-normal
                leading-none
                text-white
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Speak With Our Team
            </p>

            <p
              className="
                mt-2
                text-[18px]
                leading-none
                text-white
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Call: +91 93554 55592
            </p>
          </div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}