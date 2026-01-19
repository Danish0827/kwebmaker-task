import AboutTabsSection from "@/components/AboutTabsSection";
import ExperienceGridSection from "@/components/ExperienceGridSection";
import GlimpseSection from "@/components/GlimpseSection";
import HeroBanner from "@/components/HeroBanner";
import LaunchingConnectivity from "@/components/LaunchingConnectivity";
import Professionals from "@/components/Professionals";
import ProgramsSection from "@/components/ProgramsSection";
import QuoteSection from "@/components/QuoteSection";
import TextMarquee from "@/components/TextMarquee";
import TwoPromoBanner from "@/components/TwoPromoBanner";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <AboutTabsSection />
      <QuoteSection />
      <GlimpseSection />
      <ProgramsSection />
      <TextMarquee />
      <LaunchingConnectivity />
      <Professionals />
      <ExperienceGridSection />
      <TwoPromoBanner />
    </main>
  );
}
