import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export type DiagnosisStep = { title: string; body: string };

/**
 * "From 'what is this?' to a diagnosis, fast." (node 3224:6276).
 * Three numbered steps, then a laptop mockup beside a primrose action card.
 */
export function DiagnosisFlow({
  title,
  intro,
  steps,
  panel,
}: {
  title: string;
  intro: string;
  steps: DiagnosisStep[];
  panel: { eyebrow: string; body: string; label: string; href: string };
}) {
  return (
    <section className="w-full">
      <Container className="flex flex-col gap-12 px-6 py-20 xl:gap-[48px] xl:px-18 xl:py-25">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 text-espresso xl:w-[889px]">{title}</h2>
          <p className="type-body-lg text-secondary xl:w-[604px]">{intro}</p>
        </div>

        <div className="flex w-full flex-col items-start gap-6 xl:flex-row xl:gap-0">
          {steps.map(({ title: name, body }, i) => (
            <div key={name} className="contents">
              {i > 0 && (
                <div
                  aria-hidden
                  className="h-[0.5px] w-full shrink-0 bg-border-taupe xl:mx-[54px] xl:h-[166px] xl:w-[0.5px] xl:self-center"
                />
              )}
              <div className="flex min-w-px flex-1 flex-col items-start gap-3">
                <p className="type-h4 leading-[var(--leading-display-auto)] text-taupe">
                  {i + 1}.
                </p>
                <h3 className="type-h4 leading-[var(--leading-display-auto)] text-espresso">
                  {name}
                </h3>
                <p className="type-body text-charcoal">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-stretch justify-center gap-2 xl:flex-row xl:items-start">
          <div className="relative h-[280px] w-full overflow-clip rounded-large bg-cream xl:h-[500px] xl:w-[930px] xl:shrink-0">
            <div aria-hidden className="absolute inset-0">
              <Image
                src="/images/pocket/plate.jpg"
                alt=""
                fill
                sizes="930px"
                className="scale-125 object-cover blur-[10px]"
              />
            </div>
            {/* Laptop mockup — this page shows the desktop app, not the phone */}
            <div className="absolute inset-x-0 top-[21px] bottom-0">
              <Image
                src="/images/urology/macbook.png"
                alt="Blair on desktop"
                fill
                sizes="1023px"
                className="scale-110 object-contain object-top"
              />
            </div>
          </div>

          <div className="flex min-w-px flex-1 flex-col justify-center gap-8 self-stretch rounded-medium bg-primrose-pale px-10 py-6">
            <div className="flex w-full flex-col items-start gap-4 text-charcoal">
              <p className="type-caps w-full">{panel.eyebrow}</p>
              <p className="type-body-lg-medium w-full">{panel.body}</p>
            </div>
            <Button href={panel.href} variant="espresso" className="self-start">
              {panel.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
