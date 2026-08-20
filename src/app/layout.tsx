import type { Metadata } from "next";
import { Outfit, Roboto } from "next/font/google";
import EnquiryPopupProvider from "@/components/EnquiryPopup";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit-next",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto-next",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Highway Greens | Premium Residential Landing Page",
  description:
    "Highway Greens combines luxury living, wellness design, and resort-quality amenities in an elevated residential destination.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full font-outfit">
        <EnquiryPopupProvider>{children}</EnquiryPopupProvider>
      </body>
    </html>
  );
}