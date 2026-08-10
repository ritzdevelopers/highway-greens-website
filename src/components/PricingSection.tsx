"use client";

import { motion } from "framer-motion";
import type { PlanCard } from "@/data/siteData";
import SectionWrapper from "@/components/SectionWrapper";

type PricingSectionProps = {
  plans: PlanCard[];
};

export default function PricingSection({ plans }: PricingSectionProps) {
  return (
    <SectionWrapper
      id="pricing"
      className="bg-white py-14"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-15 text-center"
        >
          <p className="text-md font-semibold uppercase tracking-[0.25em] text-[#666]">
            Plot Options
          </p>

          <h2
            className="mt-5 text-3xl font-bold text-[#10261D] lg:text-5xl"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Find the Right Space for Your Future
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const featured = index === 1;

            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`rounded-2xl border-2 p-10 transition-all duration-300 hover:-translate-y-2
                  ${
                    featured
                      ? "border-[#213A2D] bg-[#213A2D] text-white shadow-xl"
                      : "border-[#ececec] bg-white text-[#10261D] shadow-sm"
                  }`}
              >
                <h3
                  className="text-3xl leading-tight"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {plan.title}
                </h3>

                <div className="mt-8 space-y-3 text-md">
                  {plan.features.map((feature) => (
                    <p
                      key={feature}
                      className={
                        featured ? "text-white/75" : "text-[#666]"
                      }
                    >
                      {feature}
                    </p>
                  ))}
                </div>

                <button
                  className="mt-10 bg-[#BF8D58] px-8 py-3 text-md font-semibold text-white transition hover:bg-[#a87848]"
                >
                  {plan.button}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}