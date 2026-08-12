"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { highlightsData } from "@/data/projectData";
import PremiumImage from "../ui/ProjectAnimateImage";
import AnimatedButton from "../ui/ProjectAnumatedBtn";

export default function Highlights() {
  return (
    <section id="highlights" className="relative overflow-hidden bg-white py-5 lg:py-14">

      {/* Dotted Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(#dedede 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[40%_60%] lg:gap-0">

          {/* ================= LEFT IMAGE - DESKTOP ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative hidden h-[550px] w-full overflow-hidden lg:block lg:h-[660px] lg:pr-10"
          >
            <PremiumImage
              src="/highlights.jpg"
              alt="Highlights"
              fill
              priority
              wrapperClassName="h-full w-full"
              className="object-cover"
              sizes="40vw"
            />
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="relative lg:pl-12">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="mb-5 lg:mb-24"
            >
              <h2 className="inline-block border-b border-black pb-3 font-sans text-2xl font-light uppercase leading-none tracking-[-1px] text-black md:text-3xl lg:text-[36px]">
                Highlights
              </h2>
            </motion.div>

            {/* ================= MOBILE IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="relative mb-10 h-[400px] w-full overflow-hidden sm:h-[500px] lg:hidden"
            >
              <PremiumImage
                src="/highlights.jpg"
                alt="Highlights"
                fill
                priority
                wrapperClassName="h-full w-full"
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>

            {/* ================= CARDS ================= */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {highlightsData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                  className="
        flex
        h-[160px]
        sm:h-[173px]
        flex-col
        items-center
        justify-center
        border
        border-[#d5d5d5]
        bg-white/90
        px-3
        py-5
        text-center
      "
                >
                  {/* Image Icon */}
                  <div className="mb-4 flex h-[48px] w-[48px] items-center justify-center sm:mb-5 sm:h-[58px] sm:w-[58px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={58}
                      height={58}
                      className="h-[45px] w-[45px] object-contain sm:h-[52px] sm:w-[52px]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="whitespace-pre-line font-sans text-[15px] font-normal leading-[1.3] tracking-[-0.2px] text-[#666666] sm:text-[18px] sm:leading-[1.35]">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            {/* Explore Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.25,
                ease: "easeOut",
              }}
            >
              <AnimatedButton
                text="Explore More"
                bgColor="#BD8B59"
                textColor="#1f1f1f"
                hoverTextColor="#000"
                accentColor="#caa56b"
                hoverColor="#fff"
                className="mt-5 md:mt-10 px-12 md:px-14"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}