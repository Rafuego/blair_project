import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProfileGrid } from "@/components/about/ProfileGrid";
import { ADVISORY, FOUNDERS, MEDICAL_BOARD, TEAM } from "@/lib/about-people";
import { AboutMedia, AboutStatement } from "@/components/about/AboutBands";
import { AboutCareers } from "@/components/about/AboutCareers";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutSystem } from "@/components/about/AboutSystem";
import { AboutValues } from "@/components/about/AboutValues";
import { KeepLearning } from "@/components/sections/KeepLearning";

export const metadata: Metadata = {
  title: "About us | Blair Health",
  description:
    "Blair Health is a clinical infrastructure company closing the specialist gap in women's health.",
};

export default function AboutPage() {
  return (
    <>
      <Nav dark />
      <main className="flex flex-col">
        <AboutHero />
        <AboutStats />
        <AboutSystem />
        <AboutStatement />
        <ProfileGrid
          title="An operator and a specialist, building what healthcare should have been all along."
          profiles={FOUNDERS}
          wide
        />
        <ProfileGrid title="Our team. Big system." profiles={TEAM} />
        <ProfileGrid
          title="Specialists building the care system they've always envisioned."
          intro="Our Medical Advisory Board brings leading specialist expertise into every stage of the build."
          profiles={MEDICAL_BOARD}
        />
        <ProfileGrid
          title="Advised by leaders who know our markets inside out."
          intro="Deep domain knowledge in benefits, people leadership, and employer healthcare, on call for everything we build."
          profiles={ADVISORY}
        />
        <AboutValues />
        <AboutCareers />
        <AboutMedia />
        <KeepLearning />
      </main>
      <Footer />
    </>
  );
}
