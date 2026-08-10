"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { footerData } from "@/data/footer";

export default function Footer() {
    return (
        <footer className="bg-[#23382d] text-white overflow-hidden">
            {/* Top Section */}
            <div className="border-b border-[#3a4d42]">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center">

                    {/* Logo */}
                    <div className="relative w-[180px] h-[75px] sm:w-[220px] sm:h-[90px]">
                        <Image
                            src={footerData.logo}
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Disclaimer */}
                    <p className="mt-4 max-w-5xl text-center text-[14px] sm:text-[18px] leading-6 sm:leading-7 text-[#efefef]">
                        {footerData.disclaimer}
                    </p>

                    <p className="mt-4 text-[15px] sm:text-[18px] text-[#f4dcc6] text-center">
                        RERA Website :
                        <a
                            href={`https://${footerData.rera}`}
                            target="_blank"
                            className="underline ml-2 hover:text-white transition"
                        >
                            {footerData.rera}
                        </a>
                    </p>
                </div>
            </div>

            {/* Main Footer */}
            <div className="border-b border-[#3a4d42]">
                <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 lg:gap-16">

                    {/* Address */}
                    <div className="flex flex-col">
                        <h3 className="text-[22px] sm:text-[25px] text-[#f4dcc6] font-light mb-5">
                            Address
                        </h3>

                        <div className="space-y-5">
                            {footerData.addresses.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div key={index} className="flex items-start gap-4 sm:gap-5 group">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#d7b08d] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#d7b08d] group-hover:text-[#23382d]">
                                            <Icon size={16} />
                                        </div>

                                        <p className="text-sm sm:text-md leading-6 sm:leading-7 text-[#efefef] pt-1">
                                            {item.text}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:pl-10">
                        <h3 className="text-[22px] sm:text-[25px] text-[#f4dcc6] font-light mb-5">
                            Links
                        </h3>

                        <div className="space-y-5 sm:space-y-7">
                            {footerData.links.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="group flex items-center gap-2 text-sm sm:text-md text-[#efefef]"
                                >
                                    <ChevronRight
                                        size={16}
                                        className="transition-transform duration-300 group-hover:translate-x-2"
                                    />

                                    <span className="transition-all duration-300 group-hover:text-[#d7b08d]">
                                        {item.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* QR & Social */}
                    <div className="flex flex-col items-center sm:items-start sm:col-span-2 lg:col-span-1 mt-6 lg:mt-0">
                        <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] bg-white rounded-md overflow-hidden">
                            <Image
                                src={footerData.qr}
                                alt="QR Code"
                                fill
                                className="object-contain p-1"
                            />
                        </div>

                        <h3 className="text-[22px] sm:text-[25px] text-[#f4dcc6] font-light mt-8 sm:mt-10 mb-5 sm:mb-8">
                            Follow Us
                        </h3>

                        <div className="flex items-center gap-4">
                            {footerData.socials.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#d7b08d] flex items-center justify-center transition-all duration-300 hover:bg-[#d7b08d] hover:text-[#23382d] hover:-translate-y-1"
                                    >
                                        <Icon className="text-lg sm:text-xl" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#3a4d42]">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <p className="text-xs sm:text-sm text-[#d6d6d6] text-center md:text-left">
                        {footerData.copyright}
                    </p>

                    <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm">
                        <Link
                            href="/privacy-policy"
                            className="transition-colors duration-300 hover:text-[#d7b08d]"
                        >
                            Privacy Policy
                        </Link>

                        <span className="text-[#6c7d73]">|</span>

                        <Link
                            href="/terms-and-conditions"
                            className="transition-colors duration-300 hover:text-[#d7b08d]"
                        >
                            Terms & Conditions
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}