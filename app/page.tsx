import { ComesToYou } from "@/components/sections/ComesToYou";
import { Testimonials } from "@/components/sections/Testimonials";
import { RegionalPricing } from "@/components/sections/RegionalPricing";
import { Specialists } from "@/components/sections/Specialists";
import { RegionalFaq } from "@/components/sections/RegionalFaq";
import { KeepLearning } from "@/components/sections/KeepLearning";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InYourPocket } from "@/components/sections/InYourPocket";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { Nav } from "@/components/Nav";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyBlair } from "@/components/sections/WhyBlair";
import { AreasOfCare } from "@/components/sections/AreasOfCare";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <AreasOfCare />
        <WhyBlair />
        <HowItWorks />
        <InYourPocket />
        <LeadCapture />
        <ComesToYou />
        <Testimonials />
        <RegionalPricing />
        <Specialists />
        <RegionalFaq />
        <KeepLearning />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
