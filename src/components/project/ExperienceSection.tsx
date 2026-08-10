"use client";

import Image from "next/image";
import AnimatedButton from "../ui/AnimatedButton";

export default function ExperienceSection() {
  return (
    <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/project/experience-bg.webp"
        alt="Highway Greens"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Experience Highway Greens First Hand
        </h2>

        <AnimatedButton className="mt-10 px-12 py-4 md:px-14">
          Schedule a Site Visit
        </AnimatedButton>
      </div>
    </section>
  );
}