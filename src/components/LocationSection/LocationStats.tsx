"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 2,
    title: "Minutes To",
    subtitle: "Delhi-Meerut Expressway",
  },
  {
    value: 15,
    title: "Minutes To",
    subtitle: "Private School",
  },
  {
    value: 15,
    title: "Minutes To",
    subtitle: "Healthcare Facility",
  },
  {
    value: 10,
    title: "Minutes To",
    subtitle: "Business & Retail Hub",
  },
];

export default function LocationStats() {
  return (
    <div className="mt-14 grid grid-cols-2 gap-12 text-start text-white lg:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.subtitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
        >
          {/* Number */}
          <h3
            className="text-4xl font-bold text-[#F6D7C1] lg:text-5xl"
            style={{
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            <CountUp
              end={item.value}
              duration={2}
              enableScrollSpy
              scrollSpyOnce
            />
          </h3>

          {/* Minutes */}
          <p className="mt-5 text-xl text-white/95">
            {item.title}
          </p>

          {/* Label */}
          <p className="mt-2 text-xl font-semibold text-white font-roboto">
            {item.subtitle}
          </p>
        </motion.div>
      ))}
    </div>
  );
}