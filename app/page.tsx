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
      </main>
    </>
  );
}
