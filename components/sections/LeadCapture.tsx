import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const COLUMNS = [
  {
    body: "Take the free assessment and see where you are right away.",
    cta: "Start the free assessment",
    href: "/assessment",
    bodyWidth: 300,
  },
  {
    body: "Prefer to talk it through first? Book a free call with one of our nurse practitioners.",
    cta: "Book a free NP call",
    href: "/intro-call",
    bodyWidth: 360,
  },
];

export function LeadCapture() {
  return (
    <section className="w-full pt-18 pb-4">
      <Container className="px-6 xl:px-8">
        <div className="relative flex min-h-[386px] flex-col items-center justify-center gap-16 overflow-hidden rounded-large px-6 py-10 xl:px-[47px]">
          <Image
            src="/images/bands/lead-capture.png"
            alt=""
            fill
            sizes="1376px"
            className="pointer-events-none rounded-large object-cover"
          />
          <h2 className="type-h2 relative w-full max-w-[541px] text-center text-espresso">
            Not sure where to start? Start free.
          </h2>
          <div className="relative flex items-center gap-8 xl:gap-16">
            {COLUMNS.map(({ body, cta, href, bodyWidth }, i) => (
              <div key={cta} className="contents">
                {i > 0 && (
                  <div
                    aria-hidden
                    className="w-px self-stretch bg-espresso/15"
                  />
                )}
                <div className="flex w-[300px] flex-col items-center gap-4">
                  <p
                    className="type-body-lg text-center text-charcoal"
                    style={{ width: bodyWidth }}
                  >
                    {body}
                  </p>
                  <Button href={href} variant="white">
                    {cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
