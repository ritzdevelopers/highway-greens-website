"use client";

import { PhoneCall } from "lucide-react";

export default function ContactFloatingCard() {
  return (
    <div className="relative z-30 mx-auto">
      <div className="-mt-10 w-fit bg-[#C4915C] px-8 py-3 shadow-xl">
        <div className="flex items-center gap-3">
          <PhoneCall
            size={35}
            className="text-white"
            strokeWidth={1.7}
          />

          <div>
            <p
              className="text-[17px] text-white"
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Speak With Our Team
            </p>

            <p
              className="mt-1 text-[17px] font-semibold text-white"
              style={{
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Call: +91 93554 55592
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}