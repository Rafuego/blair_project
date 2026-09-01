import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const COLUMNS = [
  {
    body: "Take the free assessment and see where you are right away.",
    cta: "Start the free assessment",
    href: "/assessment",
    bodyClass: "xl:w-[300px]",
  },
  {
    body: "Prefer to talk it through first? Book a free call with one of our nurse practitioners.",
    cta: "Book a free NP call",
    href: "/intro-call",
    bodyClass: "xl:w-[360px]",
  },
];

export function LeadCapture() {
  return (
    <section className="w-full pt-18 pb-4">
      <Container className="px-4 xl:px-8">
        <div className="relative flex min-h-[528px] flex-col items-center justify-center gap-10 overflow-hidden rounded-large px-6 py-10 xl:min-h-[386px] xl:gap-16 xl:px-[47px]">
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
          <div className="relative flex flex-col items-center gap-8 xl:flex-row xl:gap-16">
            {COLUMNS.map(({ body, cta, href, bodyClass }, i) => (
              <div key={cta} className="contents">
                {i > 0 && (
                  <div
                    aria-hidden
                    className="h-px w-full bg-espresso/15 xl:h-auto xl:w-px xl:self-stretch"
                  />
                )}
                <div className="flex w-full max-w-[320px] flex-col items-center gap-4 xl:w-[300px]">
                  <p className={`type-body-lg w-full text-center text-charcoal ${bodyClass}`}>
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
