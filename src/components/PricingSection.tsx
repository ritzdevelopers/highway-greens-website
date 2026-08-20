"use client";

import { motion } from "framer-motion";
import type { PlanCard } from "@/data/siteData";
import SectionWrapper from "@/components/SectionWrapper";
import AnimatedButton from "@/components/ui/AnimatedBtn";

type PricingSectionProps = {
  plans: PlanCard[];
};

export default function PricingSection({
  plans,
}: PricingSectionProps) {
  return (
    <SectionWrapper
      id="pricing"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#FAFAFA]
        via-[#FDFDFD]
        to-white
        py-8
        lg:pt-10
        lg:pb-15
        px-2
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-5 md:mb-10 text-center"
        >
          <p className="text-[18px] font-medium tracking-[0.15em] text-gray-500 font-roboto">
            Plot Options
          </p>

          <h2
            className="
            mt-2
            md:mt-3
            text-2xl
            font-bold
            text-[#10261D]
            lg:text-[38px]
            uppercase
            [font-family:Georgia,serif]
          "
          >
            Find the Right Space for Your Future
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const featured = index === 1;

            return (
              <motion.div
                key={plan.title}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                group
                relative
                flex
                min-h-[300px]
                md:min-h-[350px]
                flex-col
                overflow-hidden
                md:rounded-xl
                border
                p-8
                transition-shadow
                duration-500
                lg:p-10

                ${featured
                    ? `
                      border-[#213A2D]
                      bg-[#22362B]
                      text-white
                      shadow-[0_20px_45px_rgba(33,58,45,0.18)]
                    `
                    : `
                      border-[#ececec]
                      bg-white
                      text-[#10261D]
                      shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                    `
                  }
              `}
              >
                {/* Featured Card Glow */}
                {featured && (
                  <motion.div
                    initial={{
                      opacity: 0.2,
                    }}
                    whileHover={{
                      opacity: 0.4,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#BF8D58]/20
                    blur-3xl
                  "
                  />
                )}

                {/* Card Content */}
                <div className="relative z-10">
                  <h3
                    className="
                    text-[28px]
                    leading-tight
                    lg:text-[28px]
                    font-roboto
                  "
                  >
                    {plan.title}
                  </h3>

                  {/* Features */}
                  <div className="mt-8 space-y-3 font-roboto text-[16px]">
                    {plan.features.map((feature, index) => {
                      const hasColon = feature.includes(":");

                      if (!hasColon) {
                        return (
                          <p key={index} className="...">
                            {feature}
                          </p>
                        );
                      }

                      const [label, ...rest] = feature.split(":");

                      return (
                        <p key={index} className="...">
                          <strong>{label}:</strong>
                          {rest.join(":")}
                        </p>
                      );
                    })}
                  </div>
                </div>

                {/* Button */}
                <div className="relative z-10 mt-auto pt-10">
                  <AnimatedButton
                    text={plan.button}
                    bgColor="#BF8D58"
                    textColor="#FFFFFF"
                    accentColor="#BF8D58"
                    hoverColor="#FFFFFF"
                    hoverTextColor="#10261D"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}