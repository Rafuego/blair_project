import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export type Symptom = { icon: string; title: string; body: string };

/**
 * "If this sounds familiar" — copy on the left, a wrapping grid of symptom
 * cards on the right, with a footnote card underneath (node 3224:4222).
 */
export function SymptomGrid({
  title,
  intro,
  symptoms,
  footnoteTitle,
  footnoteBody,
  cta,
}: {
  title: string;
  intro: string;
  symptoms: Symptom[];
  footnoteTitle?: string;
  footnoteBody?: string;
  /** Urology closes the grid with a primrose CTA row instead of a footnote. */
  cta?: { text: string; label: string; href: string };
}) {
  return (
    <section className="w-full overflow-hidden py-20 xl:py-25">
      <Container className="relative flex flex-col items-start justify-between gap-12 px-6 xl:flex-row xl:gap-8 xl:px-18">
        {/* Primrose glow, rotated as in Figma and sitting behind the cards. */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[1304.58px] w-[1808.97px] -translate-x-1/2 -translate-y-1/2 xl:flex xl:items-center xl:justify-center"
        >
          <div className="rotate-[94.83deg]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/decor/ellipse-care.svg"
              alt=""
              className="h-[1717.04px] w-[1164.12px]"
            />
          </div>
        </div>

        <div className="relative flex w-full flex-col items-start gap-6 xl:w-[450px] xl:shrink-0">
          <h2 className="type-h2 w-full text-espresso">{title}</h2>
          <p className="type-body-lg w-full text-secondary">{intro}</p>
        </div>

        <div className="relative flex w-full flex-col items-start gap-2 xl:w-[720px] xl:shrink-0">
          <div className="flex w-full flex-wrap content-start items-start gap-2">
            {symptoms.map(({ icon, title: name, body }) => (
              <div
                key={name}
                className="flex w-full flex-col items-start gap-4 rounded-medium bg-white-40 p-6 xl:w-[356px]"
              >
                <div className="flex h-10 w-full items-center gap-4">
                  <span className="relative size-10 shrink-0 rounded-small bg-primrose-pale">
                    <Image
                      src={icon}
                      alt=""
                      width={24}
                      height={24}
                      className="absolute top-2 left-2"
                    />
                  </span>
                  <p className="type-body-lg-medium text-espresso">{name}</p>
                </div>
                <p className="type-body w-full text-secondary">{body}</p>
              </div>
            ))}
          </div>

          {cta ? (
            <div className="flex w-full flex-col items-center justify-between gap-4 rounded-medium bg-primrose-pale p-6 xl:flex-row">
              <p className="type-h5 text-charcoal xl:w-[353px]">{cta.text}</p>
              <Button href={cta.href} variant="espresso">
                {cta.label}
              </Button>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center justify-center gap-2 rounded-medium px-6 py-4 text-center">
              <p className="type-h5 text-espresso">{footnoteTitle}</p>
              <p className="type-body text-secondary">{footnoteBody}</p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
