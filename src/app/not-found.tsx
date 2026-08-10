"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#103b29] px-6 py-12 text-white">
      {/* Decorative background grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(35deg,transparent_48%,#ffffff_49%,transparent_50%),linear-gradient(145deg,transparent_48%,#ffffff_49%,transparent_50%)] bg-[length:280px_280px]" />
      </div>

      {/* Decorative glowing gradient sphere */}
      <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[#c29665]/10 blur-[120px]" />

      <div className="relative z-10 text-center">
        {/* Animated 404 text */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[120px] font-light leading-none tracking-tighter text-[#c29665] sm:text-[180px]"
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mt-4 text-2xl font-light tracking-wide text-white sm:text-3xl"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-300"
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Let's get you back on track.
        </motion.p>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center overflow-hidden bg-[#c29665] px-8 py-3.5 text-md font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(194,150,101,0.3)]"
          >
            {/* Hover Slide Effect */}
            <span className="absolute inset-0 -translate-x-full bg-[#b08556] transition-transform duration-500 ease-out group-hover:translate-x-0" />
            <span className="relative z-10">Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
