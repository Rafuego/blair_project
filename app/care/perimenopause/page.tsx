import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CareHero } from "@/components/care/CareHero";
import { CareIntroBand } from "@/components/care/CareIntroBand";
import { CarePlan } from "@/components/care/CarePlan";
import { SymptomGrid } from "@/components/care/SymptomGrid";
import { KeepLearning } from "@/components/sections/KeepLearning";
import { Pricing } from "@/components/sections/Pricing";
import {
  PERI_HERO,
  PERI_PLAN,
  PERI_INTRO,
  PERI_SYMPTOMS,
  PERI_SYMPTOM_COPY,
} from "@/lib/perimenopause";
import { PRICING_CA } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Perimenopause care | Blair Health",
  description: PERI_HERO.body,
};

export default function PerimenopausePage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <CareHero {...PERI_HERO} />
        <CareIntroBand {...PERI_INTRO} />
        <SymptomGrid {...PERI_SYMPTOM_COPY} symptoms={PERI_SYMPTOMS} />
        <CarePlan {...PERI_PLAN} />
        <Pricing content={PRICING_CA} />
        <KeepLearning />
      </main>
      <Footer />
    </>
  );
}
