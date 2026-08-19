"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function ContactFloatingCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Card should be visible when:
  // 1. User is hovering
  // 2. User has clicked it open
  const showCard = isOpen || isHovered;

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
          width: showCard ? "fit-content" : "56px",
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          relative
          flex
          min-h-[56px]
          cursor-pointer
          items-center
          overflow-hidden
          border
          border-[#caa56b]/60
          bg-[#BD8B59]
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
            pointer-events-none
            absolute
            inset-y-0
            left-0
            w-1/3
            skew-x-[-20deg]
            bg-white/30
            blur-sm
          "
        />

        {/* Phone Icon */}
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
            h-14
            w-14
            shrink-0
            items-center
            justify-center
          "
        >
          <PhoneCall
            size={26}
            strokeWidth={1.4}
            className="text-white"
          />
        </motion.div>

        {/* Desktop Content */}
        <div
          className={`
            relative
            z-10
            hidden
            whitespace-nowrap
            pr-5
            sm:block
            transition-all
            duration-300
            ${showCard
              ? "translate-x-0 opacity-100"
              : "-translate-x-2 opacity-0"
            }
          `}
        >
          <a
            href="tel:+919355455592"
            onClick={(e) => e.stopPropagation()}
          >
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
          </a>
        </div>

        {/* Mobile Content */}
        <div
          className={`
            relative
            z-10
            pr-4
            whitespace-nowrap
            sm:hidden
            transition-all
            duration-300
            ${showCard
              ? "translate-x-0 opacity-100"
              : "-translate-x-2 opacity-0"
            }
          `}
        >
          <a
            href="tel:+919355455592"
            onClick={(e) => e.stopPropagation()}
          >
            <p
              className="
                text-[14px]
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
                mt-1.5
                text-[14px]
                leading-none
                text-white
              "
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Call: +91 93554 55592
            </p>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}