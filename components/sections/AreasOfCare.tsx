import Image from "next/image";
import { ArrowUpRight } from "../icons";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const CARDS = [
  {
    title: "Perimenopause",
    body: "Support for changing hormones, cycles, mood, sleep, and energy.",
    image: "/images/care/perimenopause.png",
    href: "/care/perimenopause",
  },
  {
    title: "Menopause",
    body: "Evidence-based treatment for symptoms and long-term health.",
    image: "/images/care/menopause.png",
    href: "/care/menopause",
  },
  {
    title: ["Urology &", "Pelvic Health"],
    body: "Care for bladder, pelvic, and intimate health concerns that deserve better answers.",
    image: "/images/care/urology-pelvic.png",
    href: "/care/urology-pelvic-health",
  },
  {
    title: ["Nutrition &", "Healthy Aging"],
    body: "Personalized clinical nutrition for strength, energy, metabolism, and longevity.",
    image: "/images/care/nutrition-aging.png",
    href: "/care/nutrition-healthy-aging",
  },
];

export function AreasOfCare() {
  return (
    <section id="areas-of-care" className="w-full overflow-hidden py-20 xl:py-25">
      <Container className="relative px-4 xl:px-18">
      {/* Primrose glow (Ellipse 5) — sits mostly off the right edge. */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{ left: 1588.49, top: -2.92, width: 1808.97, height: 1304.57 }}
      >
        <img src="/decor/ellipse-care.svg" alt="" className="size-full" />
      </div>

      <div className="relative flex flex-col gap-6 text-center">
        <h2 className="type-h2 w-full text-espresso">
          Care for every stage of your life
        </h2>
        <p className="type-body-lg w-full text-charcoal">
          Specialist-led care, built around where you are right now. Choose your
          area to explore.
        </p>
      </div>

      {/* Figma pins the fourth card to an explicit 498.386 height, so the row
          is design-sized rather than content-sized. */}
      <div className="relative mt-[54px] flex flex-col gap-2 xl:mt-[54px] xl:min-h-[498.39px] xl:flex-row xl:items-stretch xl:gap-6">
        {CARDS.map(({ title, body, image, href }) => (
          <article
            key={Array.isArray(title) ? title.join(" ") : title}
            className="group flex min-w-px flex-1 flex-row overflow-clip rounded-[8px] xl:flex-col"
          >
            <div className="relative w-25 shrink-0 self-stretch overflow-hidden xl:aspect-[259/195] xl:w-full">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 1440px) 25vw, 306px"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span
                aria-hidden
                className="absolute top-4 right-4 flex size-10 translate-y-1 items-center justify-center rounded-circle bg-cream text-espresso opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <div className="flex min-h-px min-w-px flex-1 flex-col justify-between gap-3 rounded-r-medium bg-white p-4 xl:rounded-r-none xl:rounded-b-medium xl:py-6 xl:pr-15 xl:pl-6">
              <div className="flex w-full flex-col gap-2 xl:gap-3">
                <h3 className="type-h4 w-full leading-[var(--leading-display-auto)] text-espresso">
                  {Array.isArray(title)
                    ? title.map((line, i) => (
                        <span key={line}>
                          {line}
                          {i === 0 && <br />}
                        </span>
                      ))
                    : title}
                </h3>
                <p className="type-body w-full text-secondary xl:text-charcoal">{body}</p>
              </div>
              <Button href={href} variant="espresso" className="self-start text-[14px] xl:text-[16px]">
                Explore care
              </Button>
            </div>
          </article>
        ))}
      </div>
      </Container>
    </section>
  );
}
