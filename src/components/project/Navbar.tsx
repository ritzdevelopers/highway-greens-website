"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavLink } from "@/data/projectData";
import MagneticButton from "../ui/ProjectAnumatedBtn";
import { scrollToSection } from "@/lib/scrollToSection";

type NavbarProps = {
  links: NavLink[];
};

export default function Navbar({ links }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 10) {
        setShowNavbar(true);
        setHasScrolled(false);
      } else {
        setHasScrolled(true);
        setShowNavbar(currentY < lastScrollY);
        if (currentY > lastScrollY) setIsOpen(false);
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const menuLinks = links.filter((link) => link.label !== "Contact");

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{
          y: showNavbar ? 0 : -120,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${hasScrolled && showNavbar
            ? "bg-[#213A2D] shadow-lg"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex max-w-8xl items-center justify-between px-5 py-5 sm:px-6 lg:px-20 lg:py-6">
          <Link
            href="/project"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="relative z-[70]"
          >
            <Image
              src="/logo-white.png"
              alt="Highway Greens"
              width={180}
              height={70}
              className="h-auto w-[150px] object-contain md:w-[180px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex xl:gap-14">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-roboto text-[18px] text-white transition-colors hover:text-[#d8c18a]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
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

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative z-[70] flex h-10 w-10 items-center justify-center rounded-full bg-black/20 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <span className="relative h-6 w-6">
                <span className="absolute left-0 top-1/2 h-[1.5px] w-6 rotate-45 bg-white" />
                <span className="absolute left-0 top-1/2 h-[1.5px] w-6 -rotate-45 bg-white" />
              </span>
            ) : (
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-6 bg-white" />
                <span className="h-0.5 w-6 bg-white" />
                <span className="h-0.5 w-6 bg-white" />
              </span>
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex min-h-[100dvh] flex-col bg-black lg:hidden"
          >
            {/* Menu Header */}
            <div className="flex h-[100px] shrink-0 items-center justify-between px-6 pt-5">
              <Image
                src="/logo-white.png"
                alt="Highway Greens"
                width={180}
                height={70}
                className="w-[145px] object-contain"
              />

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 items-center justify-center border border-white/70"
                aria-label="Close menu"
              >
                <span className="relative h-6 w-6">
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-6 rotate-45 bg-white" />
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-6 -rotate-45 bg-white" />
                </span>
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-1 flex-col items-center justify-center px-8 pb-10">
              <nav className="w-full max-w-[320px]">
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.06,
                      duration: 0.35,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex h-[52px] items-center justify-center border-b border-white/10 font-roboto text-[16px] text-white transition-colors hover:text-[#caa56b]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Enquire */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35 }}
                className="mt-7"
              >
                <MagneticButton
                  text="Enquire Now"
                  bgColor="#fff"
                  textColor="#111"
                  hoverTextColor="#fff"
                  accentColor="#c79157"
                  hoverColor="#c79157"
                  className="min-w-[150px] rounded-none border border-[#c79157]"
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}