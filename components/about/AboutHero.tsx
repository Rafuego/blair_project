import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

/**
 * About hero (node 3224:6613): centred statement with three photo cards
 * floating at the edges — two bleed off-canvas, so they live outside the
 * Container and hide below xl.
 */
const FLOATS = [
  { src: "/images/about/hero-1.png", style: { left: -112, top: 123, width: 324, height: 231 } },
  { src: "/images/about/hero-2.png", style: { right: -73, top: 354, width: 345, height: 259 } },
  { src: "/images/about/hero-3.png", style: { left: 31, top: 591, width: 362, height: 237 } },
];

export function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
        <div className="relative mx-auto h-full max-w-[1440px]">
          {FLOATS.map(({ src, style }) => (
            <div key={src} className="absolute overflow-hidden rounded-[24px] bg-white" style={style}>
              <Image src={src} alt="" fill sizes="362px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <Container className="relative flex flex-col items-center gap-8 px-6 pt-40 pb-25 text-center xl:px-18 xl:pt-50">
        <div className="flex w-full flex-col items-center gap-6 text-espresso">
          <h1 className="type-h1 w-full xl:w-[921px]">
            Healthcare has a specialist gap. We built the system that closes it.
          </h1>
          <p className="type-body-lg w-full xl:w-[783px]">
            Blair Health is a clinical infrastructure company. We encode
            specialist judgment into intelligent software, so every woman gets
            specialist-level care without the specialist waitlist.
          </p>
        </div>
        <Button href="/intro-call" variant="espresso">
          Book a free intro call
        </Button>
      </Container>
    </section>
  );
}
