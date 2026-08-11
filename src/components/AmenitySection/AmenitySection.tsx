"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import AmenityCard, {
  Amenity,
} from "./AmenityCard";

const amenities: Amenity[] = [
  {
    title: "Leisure",
    icon: "/icons/Vector.svg",
    image: "/amenities/leisure.jpg",
    subtitle: "Time And Space To Slow Down",
    points: [
      "Swimming and water based relaxation spaces",
      "Landscaped sit out areas",
      "Open air wellbeing zones",
      "Shaded garden seating",
      "Dedicated spaces for elders",
    ],
  },
  {
    title: "Wellness",
    icon: "/icons/Vector.svg",
    image: "/amenities/wellness.jpg",
    subtitle: "Designed For Healthy Living",
    points: [
      "Yoga Deck",
      "Meditation Garden",
      "Jogging Track",
      "Fitness Lawn",
      "Nature Walk",
    ],
  },
  {
    title: "Community",
    icon: "/icons/Vector.svg",
    image: "/amenities/community.jpg",
    subtitle: "Bringing People Together",
    points: [
      "Club Plaza",
      "Event Lawn",
      "Community Hall",
      "Party Area",
      "Senior Citizen Zone",
    ],
  },
  {
    title: "Recreation",
    icon: "/icons/Vector.svg",
    image: "/amenities/recreation.jpg",
    subtitle: "Fun For Every Generation",
    points: [
      "Indoor Games",
      "Outdoor Games",
      "Basketball Court",
      "Cricket Practice",
      "Kids Zone",
    ],
  },
  {
    title: "Clubhouse",
    icon: "/icons/Vector.svg",
    image: "/amenities/clubhouse.jpg",
    subtitle: "Premium Club Experience",
    points: [
      "Gymnasium",
      "Cafe",
      "Lounge",
      "Multipurpose Hall",
      "Library",
    ],
  },
  {
    title: "Security",
    icon: "/icons/Vector.svg",
    image: "/amenities/security.jpg",
    subtitle: "Safe Living Everyday",
    points: [
      "24×7 Security",
      "CCTV",
      "Boom Barrier",
      "Visitor Management",
      "Smart Entry",
    ],
  },
];

export default function AmenitySection() {
  const [active, setActive] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const next = () => {
    setActive((prev) =>
      prev === amenities.length - 1 ? 0 : prev + 1
    );
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? amenities.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="amenities"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#FAFAFA]
        via-[#FDFDFD]
        to-white
        px-0
        py-2
        sm:px-4
        md:py-15
        lg:px-6
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="px-6 text-center"
        >
          <p className="font-roboto text-[18px] tracking-[0.15em] text-gray-500">
            Project Amenities
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-black
              uppercase
              leading-tight
              text-black
              lg:text-[38px]
            "
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            More Space for What Matters
          </h2>

          <p className="mx-auto mt-6 max-w-4xl font-roboto text-[16px] text-gray-600">
            Every space at Highway Greens has been planned to support the
            natural rhythm of daily life, from quiet morning walks and
            moments of reflection to recreation, fitness and meaningful
            community interactions.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* ================= MOBILE DROPDOWN ======================= */}
        {/* ========================================================= */}

        <div className="relative mt-7 w-full px-6 md:hidden">

          {/* Selected Button */}
          <motion.button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{ scale: 0.98 }}
            className="
              flex
              h-[48px]
              w-full
              items-center
              justify-between
              rounded-full
              border
              border-[#B98957]
              bg-[#B98957]
              px-5
              font-roboto
              text-[15px]
              font-medium
              text-white
              shadow-[0_4px_14px_rgba(189,139,89,0.18)]
              outline-none
            "
          >
            <span>{amenities[active]?.title}</span>

            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{
                rotate: isOpen ? 180 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <path d="m6 9 6 6 6-6" />
            </motion.svg>
          </motion.button>

          {/* ================= DROPDOWN MENU ================= */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 6,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  left-6
                  right-6
                  top-full
                  z-50
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#eadfd2]
                  bg-white
                  p-1.5
                  shadow-[0_12px_35px_rgba(0,0,0,0.14)]
                "
              >
                {amenities.map((item, index) => (
                  <motion.button
                    key={item.title}
                    type="button"
                    onClick={() => {
                      setActive(index);
                      setIsOpen(false);
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-xl
                      px-4
                      py-3
                      text-left
                      font-roboto
                      text-[15px]
                      font-medium
                      transition-all
                      duration-200
                      ${
                        active === index
                          ? "bg-[#B98957] text-white"
                          : "text-[#4b5563] hover:bg-[#f8f4ef] hover:text-[#B98957]"
                      }
                    `}
                  >
                    {/* Icon */}
                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ${
                          active === index
                            ? "bg-white/20"
                            : "bg-[#f5f1eb]"
                        }
                      `}
                    >
                      <Image
                        src={item.icon}
                        alt=""
                        width={18}
                        height={18}
                        className={
                          active === index
                            ? "brightness-0 invert"
                            : ""
                        }
                      />
                    </span>

                    {/* Title */}
                    <span className="flex-1">
                      {item.title}
                    </span>

                    {/* Selected Check */}
                    {active === index && (
                      <motion.svg
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </motion.svg>
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ========================================================= */}
        {/* ================ DESKTOP / TABLET TABS ================== */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mt-7
            hidden
            flex-wrap
            justify-center
            gap-3
            md:mt-12
            md:flex
            md:gap-4
          "
        >
          {amenities.map((item, index) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`
                flex
                w-[150px]
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-full
                border
                px-7
                py-2
                font-roboto
                text-base
                font-medium
                transition-colors
                duration-300
                sm:w-auto
                sm:px-10
                sm:text-lg
                ${
                  active === index
                    ? "border-[#B98957] bg-[#B98957] text-white"
                    : "border-gray-200 bg-white text-gray-700 hover:border-[#B98957]/50"
                }
              `}
            >
              <Image
                src={item.icon}
                alt=""
                width={22}
                height={22}
                className={
                  active === index
                    ? "brightness-0 invert"
                    : ""
                }
              />

              <span>{item.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* ========================================================= */}
        {/* ===================== AMENITY CARD ====================== */}
        {/* ========================================================= */}

        <motion.div
          layout
          className="
            mx-auto
            mt-7
            max-w-5xl
            px-0
            sm:px-4
            md:mt-12
            lg:px-6
          "
        >
          <AmenityCard
            key={amenities[active].title}
            amenity={amenities[active]}
            onPrev={prev}
            onNext={next}
          />
        </motion.div>

      </div>
    </section>
  );
}