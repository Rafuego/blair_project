import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "../icons";
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
                className="object-cover"
              />
            </div>
            <div className="flex min-h-px min-w-px flex-1 flex-col justify-between gap-3 rounded-r-medium bg-white p-4 xl:rounded-r-none xl:rounded-b-medium xl:p-6">
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
              {/* Hover (node 3464:31858): the pill grows to fill the row,
                  its right corners square to 12px, and the primrose arrow
                  chip slides in — all tweened, nothing swaps. */}
              <div className="flex w-full items-center gap-1">
                <Link
                  href={href}
                  className="type-button flex h-[42px] grow-0 items-center justify-center overflow-hidden rounded-[100px] bg-espresso px-7 text-[14px] whitespace-nowrap text-white transition-[flex-grow,border-radius,background-color] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-espresso/88 xl:text-[16px] xl:group-hover:grow xl:group-hover:rounded-tr-[12px] xl:group-hover:rounded-br-[12px]"
                >
                  Explore care
                </Link>
                <Link
                  href={href}
                  tabIndex={-1}
                  aria-hidden
                  className="hidden h-[42px] w-0 items-center justify-center overflow-hidden rounded-tl-[12px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[12px] bg-primrose text-espresso opacity-0 transition-[width,opacity] duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] xl:flex xl:group-hover:w-[42px] xl:group-hover:opacity-100"
                >
                  <ArrowRight className="size-5 shrink-0" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      </Container>
    </section>
  );
}
