"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { OverviewContent } from "@/data/projectData";
import AnimatedButton from "../ui/AnimatedButton";

type OverviewSectionProps = {
  content: OverviewContent;
};

export default function OverviewSection({ content }: OverviewSectionProps) {
  return (
    <section
      id="overview"
      className="relative bg-white"
    >
      <div className="mx-auto max-w-[1380px] px-6 pb-24 pt-24 lg:px-10 lg:pt-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)_300px] lg:gap-x-10">

          {/* ================= LEFT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div
              className="
                relative
                h-[560px]
                w-[365px]
                border
                border-slate-300
                bg-white
                p-[20px]
                shadow-sm
              "
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/overview-main.jpg"
                  alt="Highway Greens wellness"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* ================= CENTER CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="
              flex
              flex-col
              items-center
              px-2
              pt-10
              text-center
              lg:px-0
              lg:pt-[145px]
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[38px]
                font-normal
                leading-none
                tracking-[-0.02em]
                text-[#101827]
                sm:text-[44px]
                lg:whitespace-nowrap
                lg:text-[48px]
              "
            >
              THE{" "}
              <span className="font-normal text-[#b77b42]">
                HIGHWAY
              </span>{" "}
              GREENS
            </h2>

            {/* Subtitle */}
            <p
              className="
                mt-6
                text-[14px]
                font-semibold
                tracking-[0.08em]
                text-[#111827]
              "
            >
              {content.subtitle}
            </p>

            {/* Description */}
            <div
              className="
                mt-10
                max-w-[720px]
                space-y-7
                text-[16px]
                leading-[1.8]
                text-[#666666]
                lg:mt-11
              "
            >
              {content.details.map((detail, idx) => (
                <p key={idx}>
                  {detail}
                </p>
              ))}
            </div>

            {/* Download button */}
            <AnimatedButton className="mt-10 px-12 py-4 md:px-14">
              Download Brochure
            </AnimatedButton>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              flex
              justify-center
              lg:justify-end
              lg:pt-[515px]
            "
          >
            <div
              className="
                relative
                h-[235px]
                w-[310px]
                overflow-hidden
                rounded-[3px]
              "
            >
              <Image
                src="/highlight.jpg"
                alt="Highway Greens community"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}