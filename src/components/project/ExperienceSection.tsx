"use client";

import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="relative h-[520px] w-full">
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
          <h2 className="max-w-3xl text-white text-4xl md:text-4xl font-semibold tracking-tight">
            Experience Highway Greens First Hand
          </h2>

          <button className="group mt-10 relative overflow-hidden bg-[#f4d4bf] px-14 py-4 text-xl font-medium text-black transition-all duration-500 hover:scale-105">
            <span className="absolute inset-0 origin-left scale-x-0 bg-[#d7b08d] transition-transform duration-500 group-hover:scale-x-100" />

            <span className="relative z-10">
              Schedule a Site Visit
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}