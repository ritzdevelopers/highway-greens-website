"use client";

import { motion } from "framer-motion";
import type { OverviewContent } from "@/data/projectData";
import PremiumImage from "../ui/ProjectAnimateImage";
import MagneticButton from "../ui/ProjectAnumatedBtn";

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
                <PremiumImage
                  src="/overview-main.jpg"
                  alt="Highway Greens wellness"
                  fill
                  priority
                  wrapperClassName="h-full w-full"
                  className="object-cover"
                  hoverScale={1.06}
                  parallax={8}
                  tilt={3}
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
              lg:pt-[100px]
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
                text-[14px]
                sm:text-[18px]
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
                mt-5
                lg:mt-8
                max-w-[720px]
                space-y-3
                sm:space-y-5
                text-[15px]
                sm:text-[16px]
                leading-[1.7]
                text-[#666666]
                font-roboto
              "
            >
              {content.details.map((detail, idx) => (
                <p key={idx}>
                  {detail}
                </p>
              ))}
            </div>

            {/* Download button */}
            <MagneticButton
              text="Download Brochure"
              bgColor="#BD8B59"
              textColor="#000"
              hoverTextColor="#000"
              accentColor="#caa56b"
              hoverColor="#fff"
              className="mt-6 md:mt-10"
            />
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
              lg:pt-[415px]
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
              <PremiumImage
                src="/highlight.jpg"
                alt="Highway Greens community"
                fill
                wrapperClassName="h-full w-full"
                className="object-cover"
                hoverScale={1.08}
                parallax={6}
                tilt={2}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}