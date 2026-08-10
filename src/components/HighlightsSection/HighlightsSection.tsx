"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import HighlightItem, {
    Highlight,
} from "./HighlightItem";

const highlights: Highlight[] = [
    {
        title: "A Nature Led Master Plan",
        description:
            "Tree lined roads, landscaped green corridors and open environments create a more spacious and refreshing neighbourhood experience.",
    },
    {
        title: "More Than Plotted Land",
        description:
            "Highway Greens brings together community spaces, recreation, wellness and everyday convenience to support a complete living environment.",
    },
    {
        title: "Spaces For Every Generation",
        description:
            "Children, families, working professionals and elders are considered through dedicated activity, gathering and relaxation spaces.",
    },
    {
        title: "Wellness In Everyday Life",
        description:
            "Meditation gardens, walking paths, reflexology trails, yoga spaces and open air environments make wellbeing part of everyday life.",
    },
    {
        title: "Spaces For Every Generation",
        description:
            "Children, families, working professionals and elders are considered through dedicated activity, gathering and relaxation spaces.",
    },
    {
        title: "Wellness In Everyday Life",
        description:
            "Meditation gardens, walking paths, reflexology trails, yoga spaces and open air environments make wellbeing part of everyday life.",
    },
];

export default function HighlightsSection() {

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-2">

                <div className="grid gap-10 lg:grid-cols-[30%_70%]">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center lg:items-start"
                    >
                        <Image
                            src="/highlight-small.jpg"
                            alt="Highlights"
                            width={420}
                            height={520}
                            className="w-full max-w-[320px] object-cover lg:max-w-none"
                        />

                        <div className="mt-10 text-center lg:mt-22 lg:text-left">
                            <h2
                                className="text-3xl font-bold uppercase text-black sm:text-4xl"
                                style={{
                                    fontFamily: "Cormorant Garamond, serif",
                                }}
                            >
                                Highlights
                            </h2>

                            <div className="mx-auto mt-4 h-[2px] w-40 bg-black lg:mx-0 lg:w-56" />
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <div className="grid gap-8 pt-10 lg:grid-cols-[48%_52%] lg:pt-14">
                        {/* Large Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src="/highlight-main.jpg"
                                alt="Highlights"
                                width={700}
                                height={900}
                                className="mx-auto h-auto w-full max-w-[420px] object-cover lg:max-w-none lg:h-full"
                            />
                        </motion.div>

                        {/* Highlight Items */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="
max-h-[500px]
overflow-y-auto
pr-2

sm:max-h-[600px]

lg:h-[720px]
lg:max-h-none
lg:pr-4
"
                        >
                            {highlights.map((item) => (
                                <HighlightItem
                                    key={item.title}
                                    item={item}
                                />
                            ))}
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}