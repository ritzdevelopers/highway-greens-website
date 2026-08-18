"use client";

import PremiumImage from "../ui/ProjectAnimateImage";
import AnimatedButton from "../ui/ProjectAnumatedBtn";

export default function ExperienceSection() {
  return (
    <section className="relative h-[50vh] min-h-[450px] w-full overflow-hidden">
      {/* Desktop Background */}
      <PremiumImage
        src="/project/experience-bg.png"
        alt="Highway Greens"
        fill
        priority
        wrapperClassName="absolute inset-0 hidden h-full w-full md:block"
        className="object-cover"
      />

      {/* Mobile Background */}
      <PremiumImage
        src="/project/experience-bg-mobile.png"
        alt="Highway Greens"
        fill
        priority
        wrapperClassName="absolute inset-0 block h-full w-full md:hidden"
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h2 className="max-w-[4xl] text-2xl font-semibold tracking-tight text-white md:text-3xl lg:text-[38px]">
          Experience Highway Greens First Hand
        </h2>

        <AnimatedButton
          text="Schedule a Site Visit"
          bgColor="#F3D0BE"
          textColor="#1f1f1f"
          hoverTextColor="#ffffff"
          accentColor="#caa56b"
          hoverColor="#caa56b"
          className="mt-5 px-12 md:mt-10 md:px-14"
        />
      </div>
    </section>
  );
}