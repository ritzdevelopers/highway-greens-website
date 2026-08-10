"use client";

import { motion, Variants } from "framer-motion";
import type { ReactNode } from "react";

const sectionMotion: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

type SectionWrapperProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export default function SectionWrapper({
  id,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      variants={sectionMotion}
    >
      {children}
    </motion.section>
  );
}
