"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { NavLink } from "@/data/siteData";

type NavbarProps = {
  links: NavLink[];
};

export default function Navbar({ links }: NavbarProps) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Highway Greens"
            width={180}
            height={70}
            priority
            className="h-auto w-[170px]"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-14 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[18px] font-medium text-white transition hover:text-[#d8c18a]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden bg-white px-10 py-3 text-lg font-semibold text-black transition hover:bg-[#d8c18a] lg:flex"
        >
          Enquire Now
        </Link>
      </div>
    </motion.header>
  );
}