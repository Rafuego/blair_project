import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { BlairPath } from "@/components/employers/BlairPath";
import { BrokerBand } from "@/components/employers/BrokerBand";
import { ClaimsJourney } from "@/components/employers/ClaimsJourney";
import { EmployerCategories } from "@/components/employers/EmployerCategories";
import { EmployerHero } from "@/components/employers/EmployerHero";
import { EmployerLeadCapture } from "@/components/employers/EmployerLeadCapture";
import { EmployerLogoBar } from "@/components/employers/EmployerLogoBar";
import { EmployerMath } from "@/components/employers/EmployerMath";
import { NotWellness } from "@/components/employers/NotWellness";
import { PlanFit } from "@/components/employers/PlanFit";
import { PRESS_LOGOS, TRUSTED_LOGOS } from "@/lib/employers-us";

export const metadata: Metadata = {
  title: "For employers | Blair Health",
  description:
    "Specialist-led menopause, pelvic health, and weight management care — one benefit that keeps your most experienced people healthy, productive, and here.",
};

/** For Employers (USA) — Figma frame 3224:5039. */
export default function ForTeamsPage() {
  return (
    <>
      <Nav dark />
      <main className="flex flex-col">
        <EmployerHero />
        <EmployerLogoBar title="Trusted by leading employers" logos={TRUSTED_LOGOS} />
        <ClaimsJourney />
        <BlairPath />
        <NotWellness />
        <EmployerCategories />
        <EmployerMath />
        <PlanFit />
        <BrokerBand />
        <EmployerLogoBar title="As featured in" logos={PRESS_LOGOS} />
        <EmployerLeadCapture />
      </main>
      <Footer />
    </>
  );
}
