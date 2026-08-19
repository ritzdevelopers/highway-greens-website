import dynamic from "next/dynamic";
import { navLinks, heroData, aboutData, pricingPlans } from "@/data/siteData";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ContactFloatingCard from "@/components/ContactFloatingCard";

const LocationMapSection = dynamic(() => import("@/components/LocationMapSection"));
const PricingSection = dynamic(() => import("@/components/PricingSection"));
const AboutSection = dynamic(() => import("@/components/AboutSection"));
const AmenitySection = dynamic(() => import("@/components/AmenitySection/AmenitySection"));
const LocationSection = dynamic(() => import("@/components/LocationSection/LocationSection"));
const HighlightsSection = dynamic(() => import("@/components/HighlightsSection/HighlightsSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection/ContactSection"));

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-white">
      <Navbar links={navLinks} />
      <HeroSection content={heroData} />
      <ContactFloatingCard />
      <AboutSection content={aboutData} />
      <AmenitySection />
      <LocationSection />
      <LocationMapSection />
      <HighlightsSection />
      <PricingSection plans={pricingPlans} />
      <ContactSection />
      <Footer />
    </main>
  );
}
