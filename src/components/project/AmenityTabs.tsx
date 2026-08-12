"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { amenities } from "@/data/amenities";

interface AmenityTabsProps {
  activeId: string;
  onChange: (id: string) => void;
}

export default function AmenityTabs({
  activeId,
  onChange,
}: AmenityTabsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeAmenity =
    amenities.find((item) => item.id === activeId) ?? amenities[0];

  const ActiveIcon = activeAmenity.icon;

  const handleSelect = (id: string) => {
    onChange(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* MOBILE + TABLET DROPDOWN */}
      <div className="relative lg:hidden">
        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          whileTap={{ scale: 0.99 }}
          className={`flex h-[52px] w-full items-center justify-between rounded-full border px-6 transition-all duration-300 ${
            isOpen
              ? "border-[#b88954] bg-[#c3955d]"
              : "border-[#e8e8e8] bg-white"
          }`}
        >
          <span className="flex items-center gap-4">
            <ActiveIcon
              size={22}
              strokeWidth={1.4}
              className="shrink-0"
            />

            <span className="font-roboto text-[15px] font-medium">
              {activeAmenity.title}
            </span>
          </span>

          <motion.span
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <ChevronDown
              size={20}
              strokeWidth={1.5}
            />
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute left-0 right-0 top-[60px] z-50 rounded-[24px] border border-[#e8e8e8] bg-white p-2 shadow-[0_15px_40px_rgba(0,0,0,0.10)]"
            >
              <div className="flex flex-col gap-1">
                {amenities.map((amenity) => {
                  const Icon = amenity.icon;
                  const isActive = activeId === amenity.id;

                  return (
                    <motion.button
                      key={amenity.id}
                      type="button"
                      onClick={() => handleSelect(amenity.id)}
                      whileTap={{ scale: 0.98 }}
                      className={`flex h-[48px] w-full items-center gap-4 rounded-full px-5 text-left transition-colors ${
                        isActive
                          ? "bg-[#c3955d]"
                          : "bg-white hover:bg-[#f7f4ef]"
                      }`}
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.4}
                        className="shrink-0"
                      />

                      <span className="font-roboto text-[15px] font-medium">
                        {amenity.title}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* DESKTOP TABS */}
      <div className="hidden flex-col gap-5 lg:flex">
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

              <span className="font-roboto text-[16px] font-medium">
                {amenity.title}
              </span>
            </motion.button>
          );
        })}
      </div>
    </>
  );
}