import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CareAssessment } from "@/components/care/CareAssessment";
import { CareFinalCta } from "@/components/care/CareFinalCta";
import { CareHero } from "@/components/care/CareHero";
import { CareIntroBand } from "@/components/care/CareIntroBand";
import { CarePlan } from "@/components/care/CarePlan";
import { CareSpecialist } from "@/components/care/CareSpecialist";
import { CareTestimonials } from "@/components/care/CareTestimonials";
import { CareTracking } from "@/components/care/CareTracking";
import { SymptomGrid } from "@/components/care/SymptomGrid";
import { Faq } from "@/components/sections/Faq";
import { KeepLearning } from "@/components/sections/KeepLearning";
import { Pricing } from "@/components/sections/Pricing";
import {
  PERI_ASSESSMENT,
  PERI_FAQ,
  PERI_FINAL_CTA,
  PERI_HERO,
  PERI_INTRO,
  PERI_PLAN,
  PERI_SPECIALIST,
  PERI_SYMPTOMS,
  PERI_SYMPTOM_COPY,
  PERI_TESTIMONIALS,
  PERI_TRACKING,
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
        <CareTracking {...PERI_TRACKING} />
        <CareAssessment {...PERI_ASSESSMENT} />
        <CareTestimonials {...PERI_TESTIMONIALS} />
        <Pricing content={PRICING_CA} />
        <CareSpecialist {...PERI_SPECIALIST} />
        <Faq items={PERI_FAQ} title="Your questions, answered." />
        <KeepLearning />
        <CareFinalCta {...PERI_FINAL_CTA} />
      </main>
      <Footer />
    </>
  );
}
