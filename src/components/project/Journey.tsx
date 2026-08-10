"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { journeyData } from "@/data/projectData";

export default function Journey() {
    const [active, setActive] = useState(1);

    const prev = () => {
        setActive((prev) =>
            prev === 0 ? journeyData.length - 1 : prev - 1
        );
    };

    const next = () => {
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
        <section className="bg-white py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="text-center text-3xl md:text-4xl font-light mb-15 font-semibold"
                >
                    The Journey
                </motion.h2>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

                    {/* LEFT */}
                    <motion.div
                        key={leftCard.id}
                        initial={{ opacity: 0, x: -70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .45 }}
                        className="relative h-[380px] rounded-xl overflow-hidden shadow-xl cursor-pointer group"
                        onClick={prev}
                    >
                        <Image
                            src={leftCard.image}
                            alt={leftCard.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/10" />
                    </motion.div>

                    {/* CENTER */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={centerCard.id}
                            initial={{ opacity: 0, scale: .92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: .45 }}
                            className="relative h-[520px] rounded-xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src={centerCard.image}
                                alt={centerCard.title}
                                fill
                                priority
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute bottom-10 left-8 right-8 text-center text-white">

                                <h3 className="text-2xl font-semibold leading-tight">
                                    {centerCard.title}
                                </h3>

                                <p className="mt-4 text-md text-white/90 leading-6">
                                    {centerCard.subtitle}
                                </p>

                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* RIGHT */}
                    <motion.div
                        key={rightCard.id}
                        initial={{ opacity: 0, x: 70 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .45 }}
                        className="relative h-[380px] rounded-xl overflow-hidden shadow-xl cursor-pointer group"
                        onClick={next}
                    >
                        <Image
                            src={rightCard.image}
                            alt={rightCard.title}
                            fill
                            className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/10" />
                    </motion.div>

                </div>
                {/* Navigation */}
                <div className="mt-10 flex items-center justify-center gap-6">
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