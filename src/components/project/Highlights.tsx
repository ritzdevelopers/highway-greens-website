"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { highlightsData } from "@/data/projectData";
import AnimatedButton from "../ui/AnimatedButton";

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-14 max-w-7xl mx-auto">

      {/* Dotted Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "radial-gradient(#dedede 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-[1465px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[40%_60%] lg:gap-0">

          {/* ================= LEFT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="relative h-[550px] w-full overflow-hidden lg:h-[660px] lg:pr-10"
          >
            <Image
              src="/highlights.jpg"
              alt="Highlights"
              fill
              priority
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
              className="mb-24"
            >
              <h2 className="inline-block border-b border-black pb-3 font-sans text-[40px] font-light uppercase leading-none tracking-[-1px] text-black">
                Highlights
              </h2>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                    h-[173px]
                    flex-col
                    items-center
                    justify-center
                    border
                    border-[#d5d5d5]
                    bg-white/90
                    px-5
                    py-6
                    text-center
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >
                  {/* Image Icon */}
                  <div className="mb-5 flex h-[58px] w-[58px] items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={58}
                      height={58}
                      className="h-[52px] w-[52px] object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="whitespace-pre-line font-sans text-[18px] font-normal leading-[1.35] tracking-[-0.2px] text-[#666666]">
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
              <AnimatedButton className="mt-10 px-12 py-4 md:px-14">
                Explore More
              </AnimatedButton>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}