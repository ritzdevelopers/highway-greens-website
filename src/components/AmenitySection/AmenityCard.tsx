"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Amenity = {
    title: string;
    image: string;
    icon: string;
    subtitle: string;
    points: string[];
};

type Props = {
    amenity: Amenity;
    onPrev: () => void;
    onNext: () => void;
};

export default function AmenityCard({
    amenity,
    onPrev,
    onNext,
}: Props) {
    return (
        <div className="relative mx-auto mt-14 w-full max-w-6xl overflow-visible">
            <AnimatePresence mode="wait">
                <motion.div
                    key={amenity.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative h-[320px] w-full sm:h-[420px] lg:h-[450px]"
                >
                    {/* Background Image */}
                    <Image
                        src={amenity.image}
                        alt={amenity.title}
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Content Card */}
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.25 }}
                        className="
    absolute
    left-4
    right-4
    top-4
    w-auto
    bg-black/60
    p-4
    text-white

    sm:left-8
    sm:right-auto
    sm:top-1/2
    sm:w-[300px]
    sm:-translate-y-1/2
    sm:p-5

    lg:left-12
    lg:w-[330px]
    lg:p-6
  "
                    >
                        <div className="flex gap-3 items-center">
                            <Image
                                src="/icons/Vector.png"
                                alt={amenity.title}
                                width={25}
                                height={25}
                            />
                            <h3
                                className="text-2xl sm:text-3xl"
                                style={{ fontFamily: "Cormorant Garamond, serif" }}
                            >
                                {amenity.title}
                            </h3>
                        </div>

                        <div className="my-3 h-px bg-white/40" />

                        <p className="text-sm sm:text-base">{amenity.subtitle}</p>
                        <div className="my-3 h-px bg-white/40" />

                        <ul className="mt-3 space-y-2">
                            {amenity.points.map((point) => (
                                <li
                                    key={point}
                                    className="flex gap-2 text-xs leading-5 sm:text-sm"
                                >
                                    <span>•</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Left Arrow */}
                    <button
                        onClick={onPrev}
                        className="
absolute
left-3
top-1/2
z-50
flex
h-12
w-12
-translate-y-1/2
items-center
justify-center
rounded-full
bg-white
shadow-lg

sm:-left-8
sm:h-14
sm:w-14

lg:-left-20
lg:h-16
lg:w-16
text-black
"
                    >
                        <ChevronLeft size={30} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={onNext}
                        className="
absolute
right-3
top-1/2
z-50
flex
h-12
w-12
-translate-y-1/2
items-center
justify-center
rounded-full
bg-white
shadow-lg

sm:-right-8
sm:h-14
sm:w-14

lg:-right-20
lg:h-16
lg:w-16
text-black
"                    >
                        <ChevronRight size={30} />
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}