import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { WaitGap } from "@/components/sections/WaitGap";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Hero />
        <WaitGap />
      </main>
    </>
  );
}
