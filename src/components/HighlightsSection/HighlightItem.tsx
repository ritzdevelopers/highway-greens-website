"use client";

import { motion } from "framer-motion";

export type Highlight = {
  title: string;
  description: string;
};

type Props = {
  item: Highlight;
};

export default function HighlightItem({ item }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-b-2 border-[#E9DCCB] py-4 sm:py-5"
    >
      <h3 className="text-2xl font-semibold leading-tight text-[#123122] sm:text-3xl">
        {item.title}
      </h3>

      <p className="mt-3 text-[15px] leading-7 text-[#666666] sm:mt-4 sm:text-[16px]">
        {item.description}
      </p>
    </motion.div>
  );
}