"use client";

import { useEffect, useRef, useState } from "react";

const connectivityData = [
  "Delhi-Meerut Expressway – 2 Minutes",
  "Private School – 15 Minutes",
  "Healthcare Facility – 15 Minutes",
  "Business & Retail Hub – 2 Minutes",
];

export default function Location() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="relative overflow-hidden bg-white py-5 lg:py-14"
    >
      <div
        className="
    pointer-events-none
    absolute
    inset-0
    bg-[url('/project/location-pattern.png')]
    bg-cover
    bg-center
    bg-no-repeat
  "
      />

      <div className="relative z-10 mx-auto max-w-8xl sm:px-6 lg:px-20 px-5">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-[1200px] text-center">
          {/* Location */}
          <p
            className={`text-lg sm:text-xl tracking-[3px] text-[#222] transition-all duration-700 ${visible
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
              }`}
          >
            Location
          </p>

          {/* Heading */}
          <h2
            className={`mt-3 text-2xl font-normal uppercase tracking-[-1.5px] text-[#111] transition-all delay-100 duration-700 md:text-3xl lg:text-[48px] ${visible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
              }`}
          >
            Connected To What Matters
          </h2>

          {/* Description */}
          <p
            className={`mx-auto mt-3 md:mt-5 max-w-[1000px] text-sm sm:text-base leading-7 text-[#666] transition-all delay-200 duration-700 lg:text-[16px] ${visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
              }`}
          >
            Highway Greens Is Envisioned For People Who Want To Remain
            Connected To Work, Education, Healthcare, Family And Everyday
            Conveniences While Enjoying A Calmer And More Spacious Living
            Environment.
          </p>
        </div>

        {/* ================= MAP SECTION ================= */}
        <div
          className={`mt-5 md:mt-10 border border-[#cfcfcf] p-2 transition-all delay-300 duration-1000 ${visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-10 scale-[0.98] opacity-0"
            }`}
        >
          <div className="relative flex flex-col gap-4 lg:block lg:h-[420px] lg:overflow-hidden">

            {/* Map Box */}
            <div className="relative h-[300px] sm:h-[400px] lg:absolute lg:inset-0 lg:h-full w-full">
              {/* Real OpenStreetMap */}
              <iframe
                title="Highway Greens Location"
                src="https://maps.google.com/maps?q=28.675,77.45&t=k&z=15&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
              />

              {/* ================= CUSTOM LOCATION PIN ================= */}
              <div
                className={`absolute left-[46%] top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all delay-700 duration-700 ${visible
                  ? "scale-100 opacity-100"
                  : "scale-0 opacity-0"
                  }`}
              >
                {/* Pulse */}
                <div className="absolute -inset-3 animate-ping rounded-full bg-red-500/30" />

                {/* Pin */}
                {/* <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="relative drop-shadow-lg"
                  fill="none"
                >
                  <path
                    d="M24 3C15.2 3 8 9.8 8 18.2C8 29.5 24 45 24 45C24 45 40 29.5 40 18.2C40 9.8 32.8 3 24 3Z"
                    fill="#EF3E32"
                  />
                  <circle
                    cx="24"
                    cy="18"
                    r="6"
                    fill="white"
                  />
                </svg> */}
              </div>
            </div>

            {/* ================= CONNECTIVITY CARD ================= */}
            <div
              className={`relative lg:absolute lg:left-7 lg:top-10 w-full lg:w-[410px] bg-[#173223] p-5 text-white shadow-xl transition-all delay-500 duration-700 ${visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
                }`}
            >
              <h3 className="text-xl sm:text-[22px] font-normal">
                Connectivity
              </h3>

              <div className="mt-4 space-y-3">
                {connectivityData.map((item, index) => (
                  <p
                    key={item}
                    className={`text-sm sm:text-base leading-6 transition-all duration-500 ${visible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-3 opacity-0"
                      }`}
                    style={{
                      transitionDelay: `${700 + index * 120}ms`,
                    }}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* ================= STRATEGIC CARD ================= */}
            <div
              className={`relative lg:absolute lg:bottom-5 lg:right-6 w-full lg:max-w-[485px]
    overflow-hidden
    border border-white/20
    bg-black/55
    px-5 py-6
    text-white
    backdrop-saturate-150
    shadow-[0_10px_40px_rgba(0,0,0,0.22)]
    transition-all
    delay-700
    duration-700
    ${visible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
                }`}
            >
              {/* Glass highlight */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

              <div className="relative flex flex-wrap items-baseline gap-x-2 gap-y-0">
                <span className="text-3xl font-normal sm:text-4xl">
                  Strategic
                </span>

                <span className="text-sm leading-6 sm:text-base">
                  Access. Peaceful
                </span>

                <p className="w-full text-sm leading-6 sm:text-base">
                  Surroundings. A More Balanced Everyday Life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}