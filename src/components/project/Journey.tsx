"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { journeyData } from "@/data/projectData";
import PremiumImage from "../ui/ProjectAnimateImage";

export default function Journey() {
    const [active, setActive] = useState(1);
    const [direction, setDirection] = useState(1);

    const prev = () => {
        setDirection(-1);

        setActive((prev) =>
            prev === 0 ? journeyData.length - 1 : prev - 1
        );
    };

    const next = () => {
        setDirection(1);

        setActive((prev) =>
            prev === journeyData.length - 1 ? 0 : prev + 1
        );
    };

    const getIndex = (offset: number) =>
        (active + offset + journeyData.length) % journeyData.length;

    const leftCard = journeyData[getIndex(-1)];
    const centerCard = journeyData[getIndex(0)];
    const rightCard = journeyData[getIndex(1)];

    return (
        <section className="overflow-hidden bg-white py-8 md:py-14">
            <div className="mx-auto max-w-8xl px-5 sm:px-6 lg:px-20">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-5 text-center text-2xl font-medium md:mb-10 md:text-3xl lg:text-[48px]"
                >
                    The Journey
                </motion.h2>

                {/* Cards */}
                <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">

                    {/* LEFT */}
                    <motion.div
                        key={leftCard.id}
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45 }}
                        className="group relative hidden h-[400px] cursor-pointer overflow-hidden rounded-xl shadow-xl lg:block"
                        onClick={prev}
                    >
                        <PremiumImage
                            src={leftCard.image}
                            alt={leftCard.title}
                            fill
                            wrapperClassName="h-full w-full"
                            className="object-cover"
                            hoverScale={1.08}
                            parallax={6}
                            tilt={2}
                        />

                        <div className="absolute inset-0 bg-black/10" />
                    </motion.div>

                    {/* CENTER */}
                    <div className="relative h-[350px] overflow-hidden rounded-xl sm:h-[450px] md:h-[500px]">
                        <AnimatePresence
                            initial={false}
                            custom={direction}
                            mode="popLayout"
                        >
                            <motion.div
                                key={centerCard.id}
                                custom={direction}
                                variants={{
                                    enter: (direction: number) => ({
                                        x: direction > 0 ? "100%" : "-100%",
                                        opacity: 1,
                                    }),

                                    center: {
                                        x: 0,
                                        opacity: 1,
                                    },

                                    exit: (direction: number) => ({
                                        x: direction > 0 ? "-100%" : "100%",
                                        opacity: 1,
                                    }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
        absolute
        inset-0
        overflow-hidden
        rounded-xl
        shadow-2xl
        will-change-transform
      "
                            >
                                {/* Image */}
                                <PremiumImage
                                    src={centerCard.image}
                                    alt={centerCard.title}
                                    fill
                                    priority
                                    wrapperClassName="h-full w-full"
                                    className="object-cover"
                                    hoverScale={1.05}
                                    parallax={8}
                                    tilt={2}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute bottom-10 left-8 right-8 text-center text-white">
                                    <h3 className="text-xl font-semibold leading-tight">
                                        {centerCard.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-5 text-white/90">
                                        {centerCard.subtitle}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT */}
                    <motion.div
                        key={rightCard.id}
                        initial={{ opacity: 0, x: 70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.45 }}
                        className="group relative hidden h-[400px] cursor-pointer overflow-hidden rounded-xl shadow-xl lg:block"
                        onClick={next}
                    >
                        <PremiumImage
                            src={rightCard.image}
                            alt={rightCard.title}
                            fill
                            wrapperClassName="h-full w-full"
                            className="object-cover"
                            hoverScale={1.08}
                            parallax={6}
                            tilt={2}
                        />

                        <div className="absolute inset-0 bg-black/10" />
                    </motion.div>

                </div>

                {/* Navigation */}
                <div className="mt-5 flex items-center justify-center gap-6 md:mt-10">

                    <button
                        onClick={prev}
                        aria-label="Previous"
                        className="group flex h-18 w-18 items-center justify-center rounded-full border border-[#d8d8d8] bg-white transition-all duration-300 hover:border-[#1d3a2f] hover:bg-[#1d3a2f] hover:text-white"
                    >
                        <ChevronLeft
                            size={36}
                            className="transition-transform duration-300 group-hover:-translate-x-1"
                        />
                    </button>

                    <button
                        onClick={next}
                        aria-label="Next"
                        className="group flex h-18 w-18 items-center justify-center rounded-full border border-[#d8d8d8] bg-white transition-all duration-300 hover:border-[#1d3a2f] hover:bg-[#1d3a2f] hover:text-white"
                    >
                        <ChevronRight
                            size={36}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </button>

                </div>
            </div>
        </section>
    );
}