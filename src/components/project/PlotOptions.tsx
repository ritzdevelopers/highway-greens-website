"use client";

import { plotOptions } from "@/data/projectData";
import AnimatedButton from "../ui/ProjectAnumatedBtn";

export default function PlotOptions() {
    return (
        <section id="plots" className="bg-[#22362B] py-10 md:py-14 overflow-hidden">
            <div className="mx-auto max-w-8xl sm:px-6 lg:px-20 px-5">

                {/* Heading */}
                <div className="text-center mb-10 md:mb-16">
                    <p className="text-[#f5f5f5] text-[18px] mb-2">
                        Plot Options
                    </p>

                    <h2 className="text-white text-2xl md:text-3xl lg:text-[48px] font-light leading-tight">
                        Find the Right Space for Your Future
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-3">
                    {plotOptions.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className={`relative overflow-hidden rounded-[30px] p-8 pt-8 ${item.variant === "dark"
                                        ? "bg-[#395242] text-white shadow-[0_30px_80px_rgba(0,0,0,.25)]"
                                        : "bg-white text-[#24372d]"
                                    }`}
                            >
                                {/* ================= MOST DESIRED BADGE ================= */}
                                {item.tag && (
                                    <div
                                        className="
              absolute
              right-0
              top-0
              flex
              h-[30px]
              min-w-[130px]
              items-center
              justify-center
              rounded-bl-[24px]
              bg-[#c79157]
              px-6
              text-sm
              font-semibold
              text-white
            "
                                    >
                                        {item.tag}
                                    </div>
                                )}

                                {/* Category */}
                                <p
                                    className="
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-[#BD8B59]
          "
                                >
                                    {item.category}
                                </p>

                                {/* Title */}
                                <h3
                                    className={`mt-3 text-[28px] font-light leading-tight ${item.variant === "dark"
                                            ? "text-white"
                                            : "text-[#22382d]"
                                        }`}
                                >
                                    {item.title}
                                </h3>

                                {/* Divider */}
                                <div
                                    className={`my-5 h-px ${item.variant === "dark"
                                            ? "bg-white/15"
                                            : "bg-[#d8d8d8]"
                                        }`}
                                />

                                {/* Features */}
                                {item.features ? (
                                    <div className="space-y-4">
                                        {item.features.map((feature) => (
                                            <div
                                                key={feature.label}
                                                className="flex items-start gap-3"
                                            >
                                                <Icon
                                                    size={20}
                                                    strokeWidth={1.6}
                                                    className={
                                                        item.variant === "dark"
                                                            ? "mt-1 shrink-0 text-[#f5d5bc]"
                                                            : "mt-1 shrink-0 text-[#c79157]"
                                                    }
                                                />

                                                <p
                                                    className={`text-[16px] leading-6 ${item.variant === "dark"
                                                            ? "text-white/90"
                                                            : "text-[#2d2d2d]"
                                                        }`}
                                                >
                                                    <span>{feature.label}: </span>

                                                    <span className="font-semibold">
                                                        {feature.value}
                                                    </span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p
                                        className={`text-[16px] leading-7 ${item.variant === "dark"
                                                ? "text-white/90"
                                                : "text-[#555]"
                                            }`}
                                    >
                                        {item.description}
                                    </p>
                                )}

                                {/* Button */}
                                <div className="mt-10">
                                    <AnimatedButton
                                        text={item.button}
                                        bgColor={
                                            item.variant === "dark"
                                                ? "#c79157"
                                                : "#ffffff"
                                        }
                                        textColor={
                                            item.variant === "dark"
                                                ? "#ffffff"
                                                : "#22382d"
                                        }
                                        hoverTextColor="#ffffff"
                                        accentColor="#c79157"
                                        hoverColor="#22382d"
                                        className="w-full rounded-xl"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}