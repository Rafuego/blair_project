import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CareFinalCta } from "@/components/care/CareFinalCta";
import { CareHero } from "@/components/care/CareHero";
import { CareSpecialist } from "@/components/care/CareSpecialist";
import { ComingSoon } from "@/components/care/ComingSoon";
import { NutritionPrograms } from "@/components/care/NutritionPrograms";
import { NutritionSteps } from "@/components/care/NutritionSteps";
import { Faq } from "@/components/sections/Faq";
import { KeepLearning } from "@/components/sections/KeepLearning";
import {
  NUTRI_COMING_SOON,
  NUTRI_FAQ,
  NUTRI_FINAL_CTA,
  NUTRI_HERO,
  NUTRI_PROGRAMS,
  NUTRI_PROGRAMS_COPY,
  NUTRI_SPECIALIST,
  NUTRI_STEPS,
} from "@/lib/nutrition";

export const metadata: Metadata = {
  title: "Nutrition & healthy aging | Blair Health",
  description:
    "One-on-one, personalized nutrition care for energy, muscle, blood sugar, and body composition.",
};

export default function NutritionPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <CareHero {...NUTRI_HERO} />
        <NutritionPrograms {...NUTRI_PROGRAMS_COPY} programs={NUTRI_PROGRAMS} />
        <NutritionSteps {...NUTRI_STEPS} />
        <ComingSoon {...NUTRI_COMING_SOON} />
        <CareSpecialist {...NUTRI_SPECIALIST} />
        <Faq items={NUTRI_FAQ} title="Your questions, answered." />
        <KeepLearning />
        <CareFinalCta {...NUTRI_FINAL_CTA} />
      </main>
      <Footer />
    </>
  );
}
