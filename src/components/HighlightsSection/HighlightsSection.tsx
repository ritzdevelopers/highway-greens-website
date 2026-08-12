"use client";

import { motion } from "framer-motion";

import HighlightItem, {
    Highlight,
} from "./HighlightItem";

import AnimatedImage from "../ui/AnimatedImage";

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
        <section className="bg-white py-5 md:py-8 lg:pt-15">
            <div className="mx-auto max-w-8xl px-5 sm:px-6 md:px-8 lg:px-20">

                {/* =====================================================
            MOBILE LAYOUT
            < 768px
            ===================================================== */}

                <div className="md:hidden">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2
                            className="
                text-3xl
                font-bold
                uppercase
                text-black
                sm:text-[38px]
              "
                            style={{
                                fontFamily: "Cormorant Garamond, serif",
                            }}
                        >
                            Highlights
                        </h2>

                        <div className="mx-auto mt-2 h-[2px] w-50 bg-black" />
                    </motion.div>

                    {/* Images */}
                    <div className="mt-7 space-y-8">

                        {/* Image 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <AnimatedImage
                                src="/highlight-small.jpg"
                                alt="Highlights"
                                width={420}
                                height={520}
                                priority
                                delay={0.1}
                                hoverScale={1.04}
                                wrapperClassName="
                  mx-auto
                  w-full
                  max-w-[420px]
                "
                            />
                        </motion.div>

                        {/* Image 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <AnimatedImage
                                src="/highlight-main.jpg"
                                alt="Highlights"
                                width={700}
                                height={900}
                                priority
                                delay={0.2}
                                hoverScale={1.03}
                                wrapperClassName="
                  mx-auto
                  w-full
                  max-w-[420px]
                "
                            />
                        </motion.div>

                    </div>

                    {/* Highlight Items */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="
    mt-8
    h-[500px]
    overflow-y-auto
    overscroll-auto
    pr-2
  "
                    >
                        {highlights.map((item, index) => (
                            <HighlightItem
                                key={`${item.title}-${index}`}
                                item={item}
                            />
                        ))}
                    </motion.div>

                </div>

                {/* =====================================================
            TABLET LAYOUT
            768px - 1023px
            ===================================================== */}

                <div className="hidden md:block lg:hidden">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2
                            className="
                text-4xl
                font-bold
                uppercase
                tracking-wide
                text-black
              "
                            style={{
                                fontFamily: "Cormorant Garamond, serif",
                            }}
                        >
                            Highlights
                        </h2>

                        <div className="mx-auto mt-3 h-[2px] w-62 bg-black" />
                    </motion.div>


                    {/* Tablet Images */}
                    <div className="mt-10 grid grid-cols-2 gap-6">

                        {/* Image 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex justify-center"
                        >
                            <AnimatedImage
                                src="/highlight-small.jpg"
                                alt="Highlights"
                                width={420}
                                height={520}
                                priority
                                delay={0.1}
                                hoverScale={1.04}
                                wrapperClassName="
                  w-full
                  max-w-[360px]
                "
                            />
                        </motion.div>


                        {/* Image 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex justify-center"
                        >
                            <AnimatedImage
                                src="/highlight-main.jpg"
                                alt="Highlights"
                                width={700}
                                height={900}
                                priority
                                delay={0.2}
                                hoverScale={1.03}
                                wrapperClassName="
                  w-full
                  max-w-[360px]
                "
                            />
                        </motion.div>

                    </div>


                    {/* Tablet Highlight Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="
              mt-12
              grid
              grid-cols-2
              gap-x-10
              gap-y-2
            "
                    >
                        {highlights.map((item, index) => (
                            <HighlightItem
                                key={`${item.title}-${index}`}
                                item={item}
                            />
                        ))}
                    </motion.div>

                </div>


                {/* =====================================================
            DESKTOP LAYOUT
            1024px+
            DO NOT CHANGE
            ===================================================== */}

                <div className="hidden lg:flex">

                    <div className="grid w-full gap-10 lg:grid-cols-[30%_70%]">

                        {/* Left Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center lg:items-start"
                        >
                            <AnimatedImage
                                src="/highlight-small.jpg"
                                alt="Highlights"
                                width={420}
                                height={520}
                                priority
                                delay={0.1}
                                hoverScale={1.04}
                                wrapperClassName="
                  w-full
                  max-w-[320px]
                  lg:max-w-none
                "
                            />

                            <div className="mt-10 text-center lg:mt-22 lg:text-left">
                                <h2
                                    className="
                    text-3xl
                    font-bold
                    uppercase
                    text-black
                    sm:text-[38px]
                  "
                                    style={{
                                        fontFamily: "Cormorant Garamond, serif",
                                    }}
                                >
                                    Highlights
                                </h2>

                                <div className="mx-auto mt-4 h-[2px] w-40 bg-black lg:mx-0 lg:w-62" />
                            </div>
                        </motion.div>


                        {/* Right Column */}
                        <div
                            className="
    grid
    gap-8
    lg:grid-cols-[48%_52%]
    pt-20
    lg:pr-4
    xl:pr-8
    lg:h-[clamp(560px,calc(100vh-140px),760px)]
  "
                        >
                            {/* Large Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="h-full w-full"
                            >
                                <AnimatedImage
                                    src="/highlight-main.jpg"
                                    alt="Highlights"
                                    width={700}
                                    height={900}
                                    priority
                                    delay={0.2}
                                    hoverScale={1.03}
                                    wrapperClassName="
        h-full
        w-full
      "
                                />
                            </motion.div>

                            {/* Highlight Items */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6 }}
                                className="
      h-full
      min-h-0
      overflow-y-auto
      pr-4
      scrollbar-thin
      scrollbar-thumb-[#c79157]
      scrollbar-track-transparent
    "
                            >
                                {highlights.map((item, index) => (
                                    <HighlightItem
                                        key={`${item.title}-${index}`}
                                        item={item}
                                    />
                                ))}
                            </motion.div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}