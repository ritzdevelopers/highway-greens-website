"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { NavLink } from "@/data/siteData";

type NavbarProps = {
  links: NavLink[];
};

export default function Navbar({ links }: NavbarProps) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowNavbar(false);
        setMobileMenuOpen(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        animate={{
          y: showNavbar ? 0 : -120,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="relative z-50 shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Highway Greens"
              width={180}
              height={70}
              priority
              className="h-auto w-[130px] sm:w-[150px] lg:w-[170px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex xl:gap-14">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-medium text-white transition-colors duration-300 hover:text-[#d8c18a] xl:text-[18px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden bg-white px-7 py-3 text-base font-semibold text-black transition-all duration-300 hover:bg-[#d8c18a] lg:flex xl:px-10 xl:text-lg"
          >
            Enquire Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <div className="flex w-7 flex-col gap-1.5">
              <motion.span
                animate={
                  mobileMenuOpen
                    ? {
                        rotate: 45,
                        y: 8,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{ duration: 0.25 }}
                className="block h-[2px] w-full bg-white"
              />

              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="block h-[2px] w-full bg-white"
              />

              <motion.span
                animate={
                  mobileMenuOpen
                    ? {
                        rotate: -45,
                        y: -8,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                transition={{ duration: 0.25 }}
                className="block h-[2px] w-full bg-white"
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="flex min-h-full flex-col items-center justify-center px-6"
            >
              {/* Mobile Navigation */}
              <nav className="flex w-full max-w-sm flex-col items-center">
                {links.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.05 + index * 0.07,
                      duration: 0.3,
                    }}
                    className="w-full border-b border-white/10"
                  >
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className="flex w-full items-center justify-center py-5 text-xl font-medium text-white transition-colors duration-300 hover:text-[#d8c18a]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.35,
                  duration: 0.3,
                }}
                className="mt-8"
              >
                <Link
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-flex bg-white px-10 py-3.5 text-lg font-semibold text-black transition-all duration-300 hover:bg-[#d8c18a]"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}