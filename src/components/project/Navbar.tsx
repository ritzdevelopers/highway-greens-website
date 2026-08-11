"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { NavLink } from "@/data/projectData";
import MagneticButton from "../ui/ProjectAnumatedBtn";

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
        <nav className="hidden items-center gap-8 lg:flex xl:gap-14">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
        text-[18px]
        font-normal
        leading-none
        tracking-normal
        text-white
        font-roboto
        transition-colors
        duration-300
        hover:text-[#d8c18a]
      "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:block">
          <MagneticButton
            text="Enquire Now"
            bgColor="#BD8B59"
            textColor="#000"
            hoverTextColor="#000"
            accentColor="#caa56b"
            hoverColor="#fff"
          />
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full bg-black/20 p-2 text-white hover:bg-black/40 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
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
          <MagneticButton
            text="Enquire Now"
            bgColor="#BD8B59"
            textColor="#000"
            hoverTextColor="#000"
            accentColor="#caa56b"
            hoverColor="#fff"
          />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
