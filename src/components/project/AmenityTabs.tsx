"use client";

import { motion } from "framer-motion";
import { amenities } from "@/data/amenities";

interface AmenityTabsProps {
  activeId: string;
  onChange: (id: string) => void;
}

export default function AmenityTabs({
  activeId,
  onChange,
}: AmenityTabsProps) {
  return (
    <div className="flex flex-col gap-5">
      {amenities.map((amenity) => {
        const Icon = amenity.icon;
        const isActive = activeId === amenity.id;

        return (
          <motion.button
            key={amenity.id}
            type="button"
            onClick={() => onChange(amenity.id)}
            whileTap={{ scale: 0.98 }}
            className={`relative flex h-[50px] w-full items-center gap-4 rounded-full border px-8 text-left transition-colors duration-300 ${
              isActive
                ? "border-[#b88954] bg-[#c3955d] text-black"
                : "border-[#e8e8e8] bg-white text-black hover:border-[#c3955d]"
            }`}
          >
            <Icon
              size={24}
              strokeWidth={1.4}
              className="shrink-0"
            />

            <span className="text-[16px] font-medium font-roboto">
              {amenity.title}
            </span>

            {isActive && (
              <motion.span
                layoutId="activeAmenity"
                className="absolute inset-0 -z-0 rounded-full"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}