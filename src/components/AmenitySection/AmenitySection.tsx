"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
py-10 
md:py-15
        px-0
        sm:px-4
        lg:px-6
      "
        >
            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
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
                    <p className="text-[18px] tracking-[0.15em] text-gray-500 font-roboto">
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

                    <p className="mx-auto mt-6 max-w-4xl text-[16px] text-gray-600 font-roboto">
                        Every space at Highway Greens has been planned to support the
                        natural rhythm of daily life, from quiet morning walks and
                        moments of reflection to recreation, fitness and meaningful
                        community interactions.
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                        delay: 0.15,
                    }}
                    className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-3
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
                items-center
                justify-center
                gap-2
                rounded-full
                border
                px-5
                py-3
                text-base
                transition-colors
                duration-300
                sm:w-auto
                sm:px-7
                sm:text-lg
                font-roboto
                font-medium
                ${active === index
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

                {/* Amenity Card */}
                <motion.div
                    layout
                    className="mx-auto mt-12 max-w-5xl px-0 sm:px-4 lg:px-6"
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