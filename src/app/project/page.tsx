import Navbar from "@/components/project/Navbar";
import HeroSection from "@/components/project/HeroSection";
import OverviewSection from "@/components/project/OverviewSection";
import AmenitiesSection from "@/components/project/AmenitiesSection";
import Footer from "@/components/project/Footer";

import {
  projectNavLinks,
  heroContent,
  overviewContent,
  amenities,
} from "@/data/projectData";
import ExperienceSection from "@/components/project/ExperienceSection";
import Journey from "@/components/project/Journey";
import PlotOptions from "@/components/project/PlotOptions";
import Highlights from "@/components/project/Highlights";
import Location from "@/components/project/Location";
import ContactFloatingCard from "@/components/ContactFloatingCard";

export default function ProjectPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar links={projectNavLinks} />
      <HeroSection content={heroContent} />
      <ContactFloatingCard />
      <OverviewSection content={overviewContent} />
      <AmenitiesSection />
      <Location />
      <Highlights />
      <PlotOptions />
      <Journey />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
