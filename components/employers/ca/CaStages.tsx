/* eslint-disable @next/next/no-img-element */
import { Container } from "../../ui/Container";
import { CA_STAGES } from "@/lib/employers-ca";

/** "Made for the stages your current plan misses" (node 3224:5640). */
export function CaStages() {
  return (
    <section className="w-full py-16 xl:py-25">
      <Container className="flex flex-col gap-10 px-6 xl:gap-[54px] xl:px-18">
        <div className="flex w-full flex-col gap-6 text-center">
          <h2 className="type-h2 text-espresso">
            Made for the stages your <span className="block">current plan misses</span>
          </h2>
          <p className="type-body-lg text-secondary">
            All areas included in one subscription — no per-service add-ons.
          </p>
        </div>
        <div className="flex w-full flex-col items-stretch gap-6 xl:flex-row">
          {CA_STAGES.map((card) => (
            <div
              key={card.title}
              className="flex min-w-px flex-1 flex-col overflow-hidden rounded-[8px]"
            >
              <div className="relative aspect-[259/195] w-full">
                <img src={card.image} alt="" className="absolute inset-0 size-full object-cover" />
              </div>
              <div className="flex min-h-px flex-1 flex-col gap-3 rounded-b-medium bg-white p-6">
                <p className="font-display text-[28px] leading-[normal] text-espresso xl:text-[32px]">
                  {card.title}
                </p>
                <p className="type-body text-secondary">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
