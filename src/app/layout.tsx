import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
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
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full font-outfit">
        {children}
      </body>
    </html>
  );
}