import { Container } from "../ui/Container";

const VALUES = [
  {
    title: "High ownership",
    body: "We do work that matters and we are obsessed with the customer. Everyone owns outcomes, not tasks.",
  },
  {
    title: "Bias to action",
    body: "We move quickly and we aim high. Our culture is highly iterative: ship, learn, improve.",
  },
  {
    title: "Collaboration and respect",
    body: "We blend clinical expertise with exceptional product. The best answer wins, whoever it comes from.",
  },
];

/** "The Blair Way" (node 3333:9845). The founder quote beneath it exists in
 *  the design as t-quote placeholders — wired here as data when copy lands. */
export function AboutValues() {
  return (
    <section className="w-full py-20 xl:py-25">
      <Container className="flex flex-col gap-12 px-6 xl:px-[104px]">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <h2 className="type-h2 text-espresso">The Blair Way</h2>
          <p className="type-body-lg text-secondary">
            Three values shape everything we ship, prescribe, and promise.
          </p>
        </div>
        <div className="flex w-full flex-col items-start gap-6 xl:flex-row xl:gap-0">
          {VALUES.map(({ title, body }, i) => (
            <div key={title} className="contents">
              {i > 0 && (
                <div aria-hidden className="h-[0.5px] w-full shrink-0 bg-border-taupe xl:mx-9 xl:h-[166px] xl:w-[0.5px] xl:self-center" />
              )}
              <div className="flex min-w-px flex-1 flex-col items-start gap-3">
                <p className="type-h4 leading-[var(--leading-display-auto)] text-taupe">{i + 1}.</p>
                <h3 className="type-h4 leading-[var(--leading-display-auto)] text-espresso">{title}</h3>
                <p className="type-body w-full text-charcoal">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
