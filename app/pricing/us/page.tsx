import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Container } from "@/components/ui/Container";
import { Pricing } from "@/components/sections/Pricing";
import { PRICING_US } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing (United States) | Blair Health",
  description: PRICING_US.intro,
};

export default function PricingPage() {
  return (
    <>
      <Nav dark />
      <main className="flex flex-col">
        <section className="w-full pt-40 pb-0 xl:pt-50">
          <Container className="flex flex-col items-center gap-4 px-6 text-center xl:px-18">
            <h1 className="type-h1 text-espresso xl:w-[962px]">
              {PRICING_US.title}
            </h1>
            <p className="type-body-lg max-w-[671px] text-secondary">
              {PRICING_US.intro}
            </p>
          </Container>
        </section>
        <div className="pt-25">
          <Pricing content={PRICING_US} standalone />
        </div>
      </main>
      <Footer />
    </>
  );
}
