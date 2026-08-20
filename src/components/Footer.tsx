import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#213A2D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Logo */}
        <div className="flex justify-center">
          <Link
            href="/#hero"
          >
            <Image
              src="/logo-white.png"
              alt="Highway Greens"
              width={222}
              height={70}
              className="h-auto w-65 object-contain"
            />
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mx-auto mt-8 max-w-7xl text-center">
          <p className="text-[16px] leading-6 text-white/95 font-roboto">
            <span className="font-bold">Disclaimer :</span> The information,
            plans, specifications, amenities, dimensions, pricing and
            availability presented on this website are indicative and may be
            revised subject to applicable approvals and laws. Images and
            visualisations are artistic representations intended for
            illustrative purposes and may not accurately depict the final
            development. Prospective buyers are advised to independently verify
            all project information, legal approvals, commercial terms and
            availability before making a purchase decision. Nothing displayed on
            this website constitutes an offer, contract, representation or
            legal commitment. Please refer to the registered project
            information available on the official UP RERA website.
          </p>
        </div>
      </div>

      {/* Gold Strip */}
      <div className="bg-[#BF8D58] py-4">
        <div className="flex items-center justify-center gap-6">
          <Link
            href="/disclaimer"
            className="text-md text-white transition hover:opacity-80"
          >
            Disclaimer
          </Link>

          <Link
            href="/privacy-policy"
            className="text-md text-white transition hover:opacity-80"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6">
        <p className="text-center text-[16px] italic text-white/50 font-roboto">
          © 2026 Highway Greens. All rights reserved. A Project by Kinza Estate.
          Digital Media Planned By Ritz Media World
        </p>
      </div>
    </footer>
  );
}