"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { NavLink } from "@/data/projectData";

type NavbarProps = {
  links: NavLink[];
};

export default function Navbar({ links }: NavbarProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/project" className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Highway Greens"
            width={170}
            height={60}
            className="h-auto w-[150px] object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-800 transition hover:text-amber-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden rounded-full border border-amber-700 bg-amber-50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-900 transition hover:bg-amber-100 lg:inline-flex"
        >
          Enquire Now
        </Link>
      </div>
    </motion.header>
  );
}
