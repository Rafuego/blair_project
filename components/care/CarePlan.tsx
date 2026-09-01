import { Container } from "../ui/Container";

/**
 * "A plan built for you" — centred title, a three-step row divided by short
 * vertical rules, and a four-up strip of treatment options (node 3224:4274).
 */
export function CarePlan({
  title,
  intro,
  steps,
  options,
}: {
  title: string;
  intro: string;
  steps: string[];
  options: string[];
}) {
  return (
    <section className="w-full bg-white">
      <Container className="flex flex-col items-center gap-12 px-4 py-20 xl:gap-18 xl:px-8 xl:py-25">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 whitespace-pre-line text-espresso">{title}</h2>
          <p className="type-body-lg max-w-[954px] text-secondary">{intro}</p>
        </div>

        <div className="flex flex-col items-center gap-6 xl:flex-row xl:gap-20">
          {steps.map((step, i) => (
            <div key={step} className="contents">
              {i > 0 && (
                <div
                  aria-hidden
                  className="h-[0.5px] w-full bg-border-taupe xl:h-22 xl:w-[0.5px]"
                />
              )}
              <div className="flex w-full items-start gap-3 xl:w-[275px]">
                <p className="type-h4 leading-[var(--leading-display-auto)] text-taupe">
                  {i + 1}.
                </p>
                <p className="type-h4 leading-[var(--leading-display-auto)] whitespace-nowrap text-espresso">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col items-stretch gap-1 overflow-clip rounded-[24px] xl:flex-row xl:items-start">
          {options.map((option) => (
            <div
              key={option}
              className="flex min-w-px flex-1 flex-col items-center justify-center self-stretch bg-cream p-10"
            >
              <p className="type-h5 w-full text-center text-espresso">
                {option}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
