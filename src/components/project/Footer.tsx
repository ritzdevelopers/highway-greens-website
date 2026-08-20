"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { footerData } from "@/data/footer";
import { scrollToSection } from "@/lib/scrollToSection";

export default function Footer() {
    return (
        <footer className="bg-[#23382d] text-white overflow-hidden">
            {/* Top Section */}
            <div className="border-b border-[#3a4d42]">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center">

                    {/* Logo */}
                    <div className="relative w-[180px] h-[75px] sm:w-[220px] sm:h-[90px]">
                        <Link
                            href="/project"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("hero");
                            }}
                        >
                            <Image
                                src={footerData.logo}
                                alt="Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
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
            <div className="border-t border-[#3a4d42] bg-[#22382d]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">

                    {/* Copyright */}
                    <p className="font-roboto text-[10px] leading-5 text-[#e1e1e1] sm:text-xs">
                        {footerData.copyright}
                    </p>

                    {/* Right Actions */}
                    <div className="flex shrink-0 items-center gap-4">

                        {/* WhatsApp */}
                        <Link
                            href="#"
                            aria-label="WhatsApp"
                            className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          transition-transform
          duration-300
          hover:scale-105
        "
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 fill-current"
                                aria-hidden="true"
                            >
                                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.05 0C5.52 0 .2 5.32.2 11.85c0 2.09.55 4.13 1.6 5.92L.1 24l6.38-1.67a11.86 11.86 0 0 0 5.57 1.39h.01c6.53 0 11.85-5.32 11.85-11.85 0-3.17-1.24-6.15-3.39-8.39Zm-8.47 18.2h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.79.99 1.01-3.7-.23-.38a9.82 9.82 0 0 1-1.51-5.16C2.15 6.42 6.57 2 12.05 2c2.65 0 5.14 1.03 7.01 2.91a9.84 9.84 0 0 1 2.9 7c0 5.48-4.43 9.77-9.91 9.77Zm5.39-7.34c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                            </svg>
                        </Link>

                        {/* Help */}
                        <button
                            type="button"
                            aria-label="Help"
                            className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-white
          text-[#22382d]
          transition-transform
          duration-300
          hover:scale-105
        "
                        >
                            <span className="text-[13px] font-bold leading-none">
                                ?
                            </span>
                        </button>

                    </div>
                </div>
            </div>
        </footer>
    );
}