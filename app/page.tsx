import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { AreasOfCare } from "@/components/sections/AreasOfCare";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <AreasOfCare />
      </main>
    </>
  );
}
