import Image from "next/image";
import { Button } from "../ui/Button";

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
    <section id="areas-of-care" className="relative w-full overflow-hidden px-18 py-25">
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

      <div className="relative mt-[54px] flex items-stretch gap-6">
        {CARDS.map(({ title, body, image, href }) => (
          <article
            key={Array.isArray(title) ? title.join(" ") : title}
            className="flex min-w-px flex-1 flex-col overflow-clip rounded-[8px]"
          >
            <div className="relative aspect-[259/195] w-full shrink-0">
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 1440px) 25vw, 306px"
                className="object-cover"
              />
            </div>
            <div className="flex min-h-px flex-1 flex-col justify-between rounded-b-medium bg-white py-6 pr-15 pl-6">
              <div className="flex w-full flex-col gap-3">
                <h3 className="type-h4 w-full leading-normal text-espresso">
                  {Array.isArray(title)
                    ? title.map((line, i) => (
                        <span key={line}>
                          {line}
                          {i === 0 && <br />}
                        </span>
                      ))
                    : title}
                </h3>
                <p className="type-body w-full text-charcoal">{body}</p>
              </div>
              <Button href={href} variant="espresso" className="self-start">
                Explore care
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
