"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Animated Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/contact-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Light Overlay */}
      <div className="absolute inset-0 z-[1] bg-white/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <h2 className="max-w-5xl text-3xl font-medium uppercase leading-tight text-black lg:text-[38px] font-roboto">
            Begin Your Highway Greens Journey
          </h2>

          <p className="mt-6 max-w-6xl text-xl uppercase leading-relaxed text-black lg:text-[28px] font-roboto">
            Speak with our property advisor to learn more about plot
            availability, pricing and the project vision.
          </p>
        </motion.div>

        {/* Form */}
        <ContactForm />
      </div>
    </section>
  );
}