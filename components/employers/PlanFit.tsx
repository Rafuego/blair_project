/* eslint-disable @next/next/no-img-element */
import { Container } from "../ui/Container";
import { PLAN_CARDS, PLAN_MINIS } from "@/lib/employers-us";

/** "Works with your plan, not around it" (node 3224:5234). */
export function PlanFit() {
  return (
    <section className="w-full py-16 xl:py-25">
      <Container className="flex flex-col gap-12 px-6 xl:px-18">
        <h2 className="type-h2 text-center text-espresso">Works with your plan, not around it</h2>
        <div className="flex w-full flex-col items-stretch gap-8 xl:flex-row xl:gap-6">
          {PLAN_CARDS.map((card, i) => (
            <div key={card.icon} className="contents">
              {i > 0 && <div aria-hidden className="hidden w-px self-stretch bg-taupe/60 xl:block" />}
              <div className="flex min-w-px flex-1 flex-col items-center gap-6 rounded-medium py-6">
                <span className="flex size-12 items-center justify-center rounded-small bg-primrose-pale">
                  <img src={card.icon} alt="" className="size-8 object-contain" />
                </span>
                <div className="flex flex-col gap-2 text-center">
                  <p className="type-h5 text-espresso">
                    {card.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="type-body text-secondary">{card.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-stretch gap-8 xl:flex-row">
          {PLAN_MINIS.map((card, i) => (
            <div key={card.icon} className="contents">
              {i > 0 && <div aria-hidden className="hidden w-px self-stretch bg-taupe/60 xl:block" />}
              <div className="flex min-w-px flex-1 flex-col items-center gap-8">
                <span className="flex size-12 items-center justify-center rounded-small bg-primrose-pale">
                  <img src={card.icon} alt="" className="size-8 object-contain" />
                </span>
                <div className="flex flex-col gap-3 text-center">
                  <p className="type-h5 text-espresso">{card.title}</p>
                  <p className="type-body text-secondary">{card.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="type-body-lg text-center text-charcoal">
          Blair is a specialist clinical platform: diagnosis, prescribing, and longitudinal care
          across women&rsquo;s specialty health — in one benefit.
        </p>
      </Container>
    </section>
  );
}
