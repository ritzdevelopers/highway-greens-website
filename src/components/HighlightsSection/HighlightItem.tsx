"use client";

import { motion } from "framer-motion";

export type Highlight = {
  title: string;
  description: string;
};

type Props = {
  item: Highlight;
};

export default function HighlightItem({
  item,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        border-b-2
        border-[#E9DCCB]
        py-5
        sm:py-6
      "
    >
      <h3
        className="
          text-xl
          font-semibold
          text-[#10261D]
          sm:text-[20px]
          font-roboto
        "
      >
        {item.title}
      </h3>

      <p
        className="
          mt-3
          text-[15px]
          leading-7
          text-gray-600
          sm:mt-4
          sm:text-[16px]
          font-roboto
        "
      >
        {item.description}
      </p>
    </motion.div>
  );
}