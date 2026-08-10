"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Amenity } from "@/data/projectData";
import SectionWrapper from "@/components/SectionWrapper";

type AmenitiesSectionProps = {
  amenities: Amenity[];
};

export default function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
  return (
    <SectionWrapper id="amenities" className="bg-[#F9F6F1] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">Project Amenities</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-slate-950 sm:text-5xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            3+ Acres of Elevated Living
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Every space at Highway Greens has been planned to support the natural rhythm of daily life, from quiet morning walks and moments of reflection to recreation, fitness and meaningful community interactions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.3fr_0.4fr_0.3fr] lg:items-start">
          <div className="space-y-4">
            {amenities.slice(0, 6).map((item) => (
              <button
                key={item.title}
                className="flex w-full items-center gap-4 rounded-full border border-slate-200 bg-white px-5 py-4 text-left text-slate-900 transition hover:border-amber-700 hover:bg-amber-50"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  {item.title.charAt(0)}
                </span>
                <span className="font-semibold uppercase tracking-[0.18em]">{item.title}</span>
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[30px] bg-slate-950 shadow-2xl">
            <Image
              src="/highlight-main.jpg"
              alt="Project Amenity"
              width={760}
              height={900}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 rounded-b-[30px] bg-slate-950/65 px-6 py-8 text-white backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-amber-200">Leisure</p>
              <h3 className="mt-3 text-3xl font-bold leading-tight">Time and Space to Slow Down</h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-100/90">
                {amenities[0].features.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-200" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 rounded-[30px] bg-white p-6 shadow-xl">
            {amenities.slice(1, 5).map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 p-5 text-slate-900 hover:border-amber-700">
                <h3 className="text-lg font-semibold uppercase tracking-[0.18em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
