import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { EmployerHero } from "@/components/employers/EmployerHero";
import { EmployerLeadCapture } from "@/components/employers/EmployerLeadCapture";
import { EmployerLogoBar } from "@/components/employers/EmployerLogoBar";
import { CaCompare } from "@/components/employers/ca/CaCompare";
import { CaFinalCta } from "@/components/employers/ca/CaFinalCta";
import { CaHowItWorks } from "@/components/employers/ca/CaHowItWorks";
import { CaProven } from "@/components/employers/ca/CaProven";
import { CaStages } from "@/components/employers/ca/CaStages";
import { CaTestimonials } from "@/components/employers/ca/CaTestimonials";
import { CaVisit } from "@/components/employers/ca/CaVisit";
import { CaWait } from "@/components/employers/ca/CaWait";
import { CA_HERO, CA_SEEN_LOGOS } from "@/lib/employers-ca";
import { TRUSTED_LOGOS } from "@/lib/employers-us";

export const metadata: Metadata = {
  title: "For employers | Blair Health",
  description:
    "Fast, specialist-led care across perimenopause and menopause, pelvic health, and weight management — one simple benefit that replaces the wait.",
};

/** For Employers (Canada) — Figma frame 3224:5508. */
export default function ForTeamsCaPage() {
  return (
    <>
      <Nav dark />
      <main className="flex flex-col">
        <EmployerHero title={CA_HERO.title} body={CA_HERO.body} bodyTone="secondary" />
        <EmployerLogoBar title="Trusted by leading employers" logos={TRUSTED_LOGOS} />
        <CaWait />
        <CaCompare />
        <CaVisit />
        <CaStages />
        <CaHowItWorks />
        <CaProven />
        <EmployerLogoBar title="As seen on" logos={CA_SEEN_LOGOS} />
        <CaTestimonials />
        <CaFinalCta />
        <EmployerLeadCapture compact />
      </main>
      <Footer />
    </>
  );
}
