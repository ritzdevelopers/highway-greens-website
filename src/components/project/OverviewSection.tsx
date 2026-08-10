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
      <div className="mx-auto max-w-[1380px] px-6 pb-16 pt-16 lg:pb-24 lg:pt-24 lg:px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)_300px] lg:gap-x-10 gap-y-12 lg:gap-y-0">

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
                h-[400px]
                sm:h-[560px]
                w-full
                max-w-[365px]
                border
                border-slate-300
                bg-white
                p-[15px]
                sm:p-[20px]
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
              pt-2
              text-center
              lg:px-0
              lg:pt-[145px]
            "
          >
            {/* Heading */}
            <h2
              className="
                text-[32px]
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
                mt-4
                sm:mt-6
                text-[13px]
                sm:text-[14px]
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
                mt-8
                lg:mt-11
                max-w-[720px]
                space-y-5
                sm:space-y-7
                text-[15px]
                sm:text-[16px]
                leading-[1.8]
                text-[#666666]
              "
            >
              {content.details.map((detail, idx) => (
                <p key={idx}>
                  {detail}
                </p>
              ))}
            </div>

            {/* Download button */}
            <AnimatedButton className="mt-8 sm:mt-10 px-10 py-3.5 sm:px-14 sm:py-4">
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
                h-[200px]
                sm:h-[235px]
                w-full
                max-w-[310px]
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