import { Button, UnderlineLink } from "../ui/Button";
import { Container } from "../ui/Container";

const STEPS = [
  {
    // Figma labels this fourth step "3." as well — a duplicate in the design.
    // Numbering is derived here so the rendered sequence is correct.
    title: "Take your free assessment",
    body: ["See where you are right away.", "No bloodwork needed."],
  },
  {
    title: "Meet your provider",
    body: ["They review your assessment and build a plan made for you."],
  },
  {
    title: "Start your plan",
    body: [
      "Prescriptions, lifestyle, and follow-ups, with your provider a message away.",
    ],
  },
  {
    title: "Track your progress",
    body: [
      "Log how you feel in the Blair app. Your care team sees the trends and your plan adjusts as you do.",
    ],
  },
];

/** Zero-width rule between steps, so the 36px gaps sit either side of it. */
function StepDivider() {
  return (
    <div aria-hidden className="relative h-[166px] w-0 shrink-0">
      <div className="absolute inset-y-0 left-0 w-[0.5px] bg-border-taupe" />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full py-25"
    >
      <Container className="flex flex-col items-center gap-18 px-6 xl:px-40">
      <h2 className="type-h2 w-full text-center text-espresso">
        Getting started is simple
      </h2>

      <div className="flex w-full items-center gap-4 xl:gap-9">
        {STEPS.map(({ title, body }, i) => (
          <div key={title} className="contents">
            {i > 0 && <StepDivider />}
            <div className="flex min-w-px flex-1 flex-col items-start gap-3">
              <p className="type-h4 w-full leading-[var(--leading-display-auto)] text-taupe">{i + 1}.</p>
              <h3 className="type-h4 w-full leading-[var(--leading-display-auto)] text-espresso">
                {title}
              </h3>
              <p className="type-body w-full text-charcoal">
                {body.map((line, j) => (
                  <span key={line}>
                    {line}
                    {j < body.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <Button href="/signup" variant="espresso">
          Sign up
        </Button>
        <div className="flex items-center justify-center gap-2">
          <p className="type-body text-charcoal">Not sure yet?</p>
          <UnderlineLink href="/intro-call" className="text-espresso">
            Book a free intro call
          </UnderlineLink>
        </div>
      </div>
      </Container>
    </section>
  );
}
