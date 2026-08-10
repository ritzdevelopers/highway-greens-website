"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { OverviewContent } from "@/data/projectData";
import SectionWrapper from "@/components/SectionWrapper";

type OverviewSectionProps = {
  content: OverviewContent;
};

export default function OverviewSection({ content }: OverviewSectionProps) {
  return (
    <SectionWrapper id="overview" className="relative overflow-hidden bg-white py-24">
      <div
        className="absolute right-0 top-0 h-full w-[55%] opacity-30"
        style={{
          backgroundImage: "radial-gradient(#d8d8d8 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Overview</p>
          <h2 className="text-4xl font-black uppercase leading-tight text-slate-950 sm:text-5xl" style={{ fontFamily: "Cormorant Garamond, serif" }}>
            {content.title}
          </h2>
          <p className="mt-3 text-xl font-semibold text-slate-700">{content.subtitle}</p>

          <div className="mt-10 space-y-6 text-base leading-8 text-slate-600">
            {content.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>

          <button className="mt-10 rounded-full bg-amber-700 px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-amber-800">
            Download Brochure
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group overflow-hidden rounded-[30px] bg-slate-100 shadow-xl"
        >
          <Image
            src={content.image}
            alt={content.title}
            width={760}
            height={700}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
