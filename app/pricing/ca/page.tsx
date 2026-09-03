import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Container } from "@/components/ui/Container";
import { Pricing } from "@/components/sections/Pricing";
import { PRICING_CA } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing (Canada) | Blair Health",
  description: PRICING_CA.intro,
};

export default function PricingPage() {
  return (
    <>
      <Nav dark />
      <main className="flex flex-col">
        <section className="w-full pt-40 pb-0 xl:pt-50">
          <Container className="flex flex-col items-center gap-4 px-6 text-center xl:px-18">
            <h1 className="type-h1 text-espresso xl:w-[962px]">
              {PRICING_CA.title}
            </h1>
            <p className="type-body-lg max-w-[671px] text-secondary">
              {PRICING_CA.intro}
            </p>
          </Container>
        </section>
        <div className="pt-25">
          <Pricing content={PRICING_CA} standalone />
        </div>
      </main>
      <Footer />
    </>
  );
}
