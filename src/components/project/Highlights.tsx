"use client";

import Image from "next/image";
import { highlightsData } from "@/data/projectData";

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-[#faf9f7] py-24">
      {/* Dotted Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(#d9d9d9 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:items-start">
        {/* Left Image */}
        <div className="relative overflow-hidden rounded-md">
          <Image
            src="/highlights.jpg"
            alt="Highlights"
            width={650}
            height={900}
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="inline-block border-b border-[#23382d] pb-3 text-5xl font-light uppercase tracking-wide text-[#23382d]">
            Highlights
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlightsData.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className="group flex h-[180px] flex-col items-center justify-center border border-[#d8d8d8] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#23382d] hover:shadow-xl"
                >
                  <Icon
                    size={44}
                    className="mb-5 text-[#23382d] transition-transform duration-300 group-hover:scale-110"
                  />

                  <h3 className="whitespace-pre-line text-xl font-medium leading-8 text-[#555]">
                    {item.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <button className="mt-14 bg-[#c79157] px-10 py-4 text-lg font-semibold text-black transition-all duration-300 hover:bg-[#23382d] hover:text-white">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}