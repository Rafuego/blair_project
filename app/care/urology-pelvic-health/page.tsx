import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { CareAssessment } from "@/components/care/CareAssessment";
import { CareFinalCta } from "@/components/care/CareFinalCta";
import { CareHero } from "@/components/care/CareHero";
import { CareIntroBand } from "@/components/care/CareIntroBand";
import { CareSpecialist } from "@/components/care/CareSpecialist";
import { CareTestimonials } from "@/components/care/CareTestimonials";
import { DiagnosisFlow } from "@/components/care/DiagnosisFlow";
import { SymptomGrid } from "@/components/care/SymptomGrid";
import { TreatmentTabs } from "@/components/care/TreatmentTabs";
import { Faq } from "@/components/sections/Faq";
import { KeepLearning } from "@/components/sections/KeepLearning";
import { Pricing } from "@/components/sections/Pricing";
import { PRICING_CA } from "@/lib/pricing";
import {
  URO_ASSESSMENT,
  URO_CONDITIONS,
  URO_CONDITIONS_COPY,
  URO_DIAGNOSIS,
  URO_FAQ,
  URO_FINAL_CTA,
  URO_HERO,
  URO_INTRO,
  URO_SPECIALIST,
  URO_TESTIMONIALS,
  URO_TREATMENT,
} from "@/lib/urology";

export const metadata: Metadata = {
  title: "Urology & pelvic health care | Blair Health",
  description: URO_HERO.body,
};

export default function UrologyPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <CareHero {...URO_HERO} />
        <CareIntroBand {...URO_INTRO} />
        <SymptomGrid {...URO_CONDITIONS_COPY} symptoms={URO_CONDITIONS} />
        <DiagnosisFlow {...URO_DIAGNOSIS} />
        <TreatmentTabs {...URO_TREATMENT} />
        <CareAssessment {...URO_ASSESSMENT} />
        <CareTestimonials {...URO_TESTIMONIALS} />
        <Pricing content={PRICING_CA} />
        <CareSpecialist {...URO_SPECIALIST} />
        <Faq items={URO_FAQ} title="Your questions, answered." />
        <KeepLearning />
        <CareFinalCta {...URO_FINAL_CTA} />
      </main>
      <Footer />
    </>
  );
}
