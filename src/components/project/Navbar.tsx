"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { NavLink } from "@/data/projectData";

type NavbarProps = {
  links: NavLink[];
};

export default function Navbar({ links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

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
            className="h-auto w-[150px] md:w-[180px] object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
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

        {/* Desktop Action Button */}
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
            <span className="relative z-10">Enquire Now</span>
          </Link>
        </motion.div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-full overflow-hidden bg-slate-950/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-5 px-6 pb-8 pt-4">
              {links.filter(link => link.label !== "Contact").map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-white transition hover:text-amber-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 block w-full bg-[#c29665] py-3 text-center text-md font-bold text-slate-950 hover:bg-[#b08556] transition"
              >
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
