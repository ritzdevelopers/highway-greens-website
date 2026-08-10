"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { NavLink } from "@/data/projectData";
import AnimatedButton from "../ui/AnimatedButton";

type NavbarProps = {
  links: NavLink[];
};

export default function Navbar({ links }: NavbarProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute left-0 right-0 top-0 z-50 bg-transparent"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/project" className="flex items-center gap-4">
          <Image
            src="/logo-white.png"
            alt="Highway Greens"
            width={180}
            height={70}
            className="h-auto w-[180px] object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.filter(link => link.label !== "Contact").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-md font-medium text-white transition hover:text-amber-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

<motion.div
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.97, y: 0 }}
  transition={{
    duration: 0.25,
    ease: "easeOut",
  }}
  className="hidden lg:block"
>
  <Link
    href="#contact"
    className="
      group
      relative
      inline-flex
      overflow-hidden
      bg-[#c29665]
      px-8
      py-3
      text-md
      font-bold
      text-slate-950
      transition-shadow
      duration-300
      hover:shadow-[0_10px_30px_rgba(194,150,101,0.35)]
    "
  >
    {/* Animated Background Fill */}
    <span
      className="
        absolute
        inset-0
        -translate-x-full
        bg-[#b08556]
        transition-transform
        duration-500
        ease-out
        group-hover:translate-x-0
      "
    />

    {/* Shine Effect */}
    <span
      className="
        absolute
        -left-[70%]
        top-0
        h-full
        w-[45%]
        skew-x-[-20deg]
        bg-white/30
        transition-all
        duration-700
        group-hover:left-[130%]
      "
    />

    {/* Text */}
    <span className="relative z-10">
      Enquire Now
    </span>
  </Link>
</motion.div>

      </div>
    </motion.header>
  );
}
