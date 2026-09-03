import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { AboutBandsPlaceholder } from "@/components/about/pending";
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
        <AboutBandsPlaceholder />
        <AboutValues />
        <AboutCareers />
        <AboutMedia />
        <KeepLearning />
      </main>
      <Footer />
    </>
  );
}
