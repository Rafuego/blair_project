import { Container } from "../ui/Container";

export type NutritionStep = { title: string; body: string };

/** "Simple to start. Built to stick." (node 3291:2890) — three described steps
 *  with vertical rules and a practitioner credit underneath. */
export function NutritionSteps({
  title,
  intro,
  steps,
  credit,
}: {
  title: string;
  intro: string;
  steps: NutritionStep[];
  credit: string;
}) {
  return (
    <section className="w-full">
      <Container className="flex flex-col gap-12 px-6 py-20 xl:px-18 xl:py-25">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 text-espresso xl:w-[633px]">{title}</h2>
          <p className="type-body-lg text-secondary xl:w-[542px]">{intro}</p>
        </div>

        <div className="flex w-full flex-col gap-10">
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
          <p className="type-body-sm w-full text-center text-secondary">
            {credit}
          </p>
        </div>
      </Container>
    </section>
  );
}
