import { ComesToYou } from "@/components/sections/ComesToYou";
import { Testimonials } from "@/components/sections/Testimonials";
import { PRICING_CA } from "@/lib/pricing";
import { Pricing } from "@/components/sections/Pricing";
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
        <Pricing content={PRICING_CA} />
      </main>
    </>
  );
}
