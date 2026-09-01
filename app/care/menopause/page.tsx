import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CareAssessment } from "@/components/care/CareAssessment";
import { CareFinalCta } from "@/components/care/CareFinalCta";
import { CareHero } from "@/components/care/CareHero";
import { CarePlan } from "@/components/care/CarePlan";
import { CareSpecialist } from "@/components/care/CareSpecialist";
import { CareTestimonials } from "@/components/care/CareTestimonials";
import { CareTracking } from "@/components/care/CareTracking";
import { MenopauseTypes } from "@/components/care/MenopauseTypes";
import { PostMenopause } from "@/components/care/PostMenopause";
import { SymptomGrid } from "@/components/care/SymptomGrid";
import { Faq } from "@/components/sections/Faq";
import { KeepLearning } from "@/components/sections/KeepLearning";
import { Pricing } from "@/components/sections/Pricing";
import {
  MENO_ASSESSMENT,
  MENO_FAQ,
  MENO_FINAL_CTA,
  MENO_HERO,
  MENO_POST_CARDS,
  MENO_POST_COPY,
  MENO_SYMPTOMS,
  MENO_SYMPTOM_COPY,
  MENO_TRACKING,
  MENO_TYPES,
  MENO_TYPES_COPY,
} from "@/lib/menopause";
import { PERI_PLAN, PERI_SPECIALIST, PERI_TESTIMONIALS } from "@/lib/perimenopause";
import { PRICING_CA } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Menopause care | Blair Health",
  description: MENO_HERO.body,
};

export default function MenopausePage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <CareHero {...MENO_HERO} />
        <MenopauseTypes {...MENO_TYPES_COPY} types={MENO_TYPES} />
        <SymptomGrid {...MENO_SYMPTOM_COPY} symptoms={MENO_SYMPTOMS} />
        <CarePlan {...PERI_PLAN} />
        <CareTracking {...MENO_TRACKING} />
        <PostMenopause {...MENO_POST_COPY} cards={MENO_POST_CARDS} />
        <CareAssessment {...MENO_ASSESSMENT} />
        <CareTestimonials {...PERI_TESTIMONIALS} />
        <Pricing content={PRICING_CA} />
        <CareSpecialist {...PERI_SPECIALIST} />
        <Faq items={MENO_FAQ} title="Your questions, answered." />
        <KeepLearning />
        <CareFinalCta {...MENO_FINAL_CTA} />
      </main>
      <Footer />
    </>
  );
}
