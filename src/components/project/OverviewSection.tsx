"use client";

import { motion } from "framer-motion";
import type { OverviewContent } from "@/data/projectData";
import PremiumImage from "../ui/ProjectAnimateImage";
import MagneticButton from "../ui/ProjectAnumatedBtn";

type OverviewSectionProps = {
  content: OverviewContent;
};

export default function OverviewSection({
  content,
}: OverviewSectionProps) {
  return (
    <section id="overview" className="relative bg-white">
      <div
        className="
          mx-auto
          max-w-8xl
          px-5
          pb-10
          pt-10
          sm:px-6
          md:px-10
          md:pb-12
          md:pt-12
          lg:px-20
          lg:pb-14
          lg:pt-14
        "
      >
        <div
          className="
            relative
            grid
            w-full
            grid-cols-1
            gap-y-12
            lg:grid-cols-[340px_minmax(0,1fr)_300px]
            lg:gap-x-10
            lg:gap-y-0
          "
        >
          {/* =====================================================
              DESKTOP LEFT IMAGE
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="hidden justify-center lg:flex lg:justify-start"
          >
            <div
              className="
                relative
                h-[400px]
                w-full
                max-w-[365px]
                border
                border-slate-300
                bg-white
                p-[15px]
                shadow-sm
                sm:h-[560px]
                sm:p-[20px]
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
                />
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              CENTER CONTENT
          ====================================================== */}
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
              md:px-0
              lg:px-0
              lg:pt-[120px]
            "
          >
            {/* =================================================
                HEADING
            ================================================== */}
            <h2
              className="
                text-2xl
                font-normal
                leading-none
                tracking-[-0.02em]
                text-[#101827]
                sm:text-3xl
                md:text-[38px]
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

            {/* =================================================
                MOBILE IMAGES
                < 768px
            ================================================== */}
            <div
              className="
                mt-4
                flex
                w-full
                flex-col
                items-center
                gap-5
                md:hidden
                lg:hidden
              "
            >
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="w-full"
              >
                <div
                  className="
                    relative
                    mx-auto
                    h-[400px]
                    w-full
                    max-w-[365px]
                    border
                    border-slate-300
                    bg-white
                    p-[5px]
                    shadow-sm
                    sm:h-[500px]
                    sm:p-[20px]
                  "
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <PremiumImage
                      src="/project/overview-main-mobile.png"
                      alt="Highway Greens wellness"
                      fill
                      priority
                      wrapperClassName="h-full w-full"
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Highlight Image */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="w-full"
              >
                <div
                  className="
                    relative
                    mx-auto
                    h-[220px]
                    w-full
                    overflow-hidden
                    rounded-[3px]
                    sm:h-[235px]
                  "
                >
                  <PremiumImage
                    src="/project/highlight-mobile.png"
                    alt="Highway Greens community"
                    fill
                    wrapperClassName="h-full w-full"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* =================================================
                TABLET IMAGES
                768px - 1023px
            ================================================== */}
            <div
              className="
                mt-8
                hidden
                w-full
                grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
                items-center
                gap-5
                md:grid
                lg:hidden
              "
            >
              {/* Tablet Main Image */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="w-full"
              >
                <div
                  className="
                    relative
                    mx-auto
                    h-[430px]
                    w-full
                    max-w-[330px]
                    border
                    border-slate-300
                    bg-white
                    p-[10px]
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
                    />
                  </div>
                </div>
              </motion.div>

              {/* Tablet Highlight Image */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex w-full items-center"
              >
                <div
                  className="
                    relative
                    h-[230px]
                    w-full
                    overflow-hidden
                    rounded-[3px]
                  "
                >
                  <PremiumImage
                    src="/project/highlight.png"
                    alt="Highway Greens community"
                    fill
                    wrapperClassName="h-full w-full"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* =================================================
                SUBTITLE
            ================================================== */}
            <p
              className="
                mt-6
                text-[14px]
                font-semibold
                tracking-[0.08em]
                text-[#111827]
                sm:mt-8
                sm:text-[18px]
                md:mt-8
                md:max-w-[650px]
                lg:mt-6
              "
            >
              {content.subtitle}
            </p>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <div
              className="
                mt-5
                max-w-[720px]
                space-y-3
                font-roboto
                text-[15px]
                leading-[1.7]
                text-[#666666]
                sm:space-y-5
                sm:text-[16px]
                md:max-w-[680px]
                lg:mt-8
              "
            >
              {content.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>

            {/* =================================================
                DOWNLOAD BUTTON
            ================================================== */}
            <MagneticButton
              text="Download Brochure"
              bgColor="#BD8B59"
              textColor="#000"
              hoverTextColor="#000"
              accentColor="#caa56b"
              hoverColor="#fff"
              className="mt-6 md:mt-8 lg:mt-10"
            />
          </motion.div>

          {/* =====================================================
              DESKTOP RIGHT IMAGE
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              hidden
              justify-center
              lg:flex
              lg:justify-end
              lg:pt-[415px]
            "
          >
            <div
              className="
                relative
                h-[200px]
                w-full
                max-w-[310px]
                overflow-hidden
                rounded-[3px]
                sm:h-[235px]
              "
            >
              <PremiumImage
                src="/project/highlight.png"
                alt="Highway Greens community"
                fill
                wrapperClassName="h-full w-full"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}