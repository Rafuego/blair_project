import { ComesToYou } from "@/components/sections/ComesToYou";
import { Testimonials } from "@/components/sections/Testimonials";
import { PRICING_CA } from "@/lib/pricing";
import { Pricing } from "@/components/sections/Pricing";
import { Specialists } from "@/components/sections/Specialists";
import { FAQ_CA } from "@/lib/faq";
import { Faq } from "@/components/sections/Faq";
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
        <Pricing content={PRICING_CA} />
        <Specialists />
        <Faq items={FAQ_CA} title="Your questions, answered." />
        <KeepLearning />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
