import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export type Program = {
  title: string;
  body: string;
  fit: string;
  image: string;
  /** Figma's second card anchors its crop lower in the photo. */
  imagePosition?: string;
};

/**
 * "Two programs. Pick the one that matches your goal." (node 3293:6444).
 * Two photographic cards with a scrim, a "good fit if" chip, and a primrose
 * CTA each, closed by a "Not sure which one?" strip.
 */
export function NutritionPrograms({
  title,
  intro,
  programs,
  footTitle,
  footBody,
}: {
  title: string;
  intro: string;
  programs: Program[];
  footTitle: string;
  footBody: string;
}) {
  return (
    <section id="programs" className="w-full overflow-hidden">
      <Container className="relative flex flex-col items-center gap-[54px] px-6 py-20 xl:px-18 xl:py-25">
        {/* Primrose glow off the right edge, as on the symptom sections. */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-[1553px] hidden h-[1304.57px] w-[1808.97px] xl:block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/decor/ellipse-care.svg" alt="" className="size-full" />
        </div>

        <div className="relative flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 whitespace-pre-line text-espresso xl:w-[928px]">
            {title}
          </h2>
          <p className="type-body-lg text-secondary xl:w-[630px]">{intro}</p>
        </div>

        <div className="relative flex w-full flex-col items-center gap-2">
          <div className="flex w-full flex-col items-stretch gap-2 xl:flex-row xl:items-start">
            {programs.map(({ title: name, body, fit, image, imagePosition }) => (
              <div
                key={name}
                className="relative flex min-w-px flex-1 flex-col items-start justify-end overflow-hidden rounded-medium p-6 xl:h-[420px]"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 100vw, 644px"
                  className="object-cover"
                  style={imagePosition ? { objectPosition: imagePosition } : undefined}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-b from-black/10 from-[29%] to-black/60 to-[77%]"
                />
                <div className="relative flex w-full flex-col items-start gap-6 pt-40 xl:pt-0">
                  <div className="flex w-full flex-col items-start gap-4">
                    <div className="flex w-full flex-col gap-2 text-white">
                      <h3 className="type-h3 w-full">{name}</h3>
                      <p className="type-body-medium w-full">{body}</p>
                    </div>
                    <div className="flex items-center rounded-small bg-white/20 px-4 py-2.5">
                      <p className="type-body-sm text-white">
                        <span className="font-medium">Good fit if:</span> {fit}
                      </p>
                    </div>
                  </div>
                  <Button href="/nutrition-visit" variant="primrose">
                    Book a nutrition visit
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col items-start gap-2 rounded-medium bg-primrose-pale px-6 py-6 xl:w-[1051px] xl:flex-row xl:items-center xl:justify-between xl:px-10">
            <p className="font-[family-name:var(--font-display)] text-[36px] leading-[var(--leading-display-auto)] text-espresso">
              {footTitle}
            </p>
            <p className="type-body-medium text-espresso">{footBody}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
