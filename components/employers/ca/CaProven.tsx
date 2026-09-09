/* eslint-disable @next/next/no-img-element */
import { Container } from "../../ui/Container";
import { CA_PROVEN } from "@/lib/employers-ca";

/** "Proven with Canadian employers" — heading + 2×2 proof cards (node 3224:5672). */
export function CaProven() {
  return (
    <section className="w-full py-16 xl:py-25">
      <Container className="flex flex-col items-start gap-10 px-6 xl:flex-row xl:gap-12 xl:px-18">
        <h2 className="type-h2 w-full shrink-0 text-espresso xl:w-[450px]">
          Proven with Canadian employers
        </h2>
        <div className="grid w-full min-w-px flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
          {CA_PROVEN.map((card) => (
            <div key={card.title} className="flex flex-col gap-4 rounded-medium bg-white/40 p-6">
              <span className="flex size-12 items-center justify-center rounded-small bg-primrose-pale">
                <img src={card.icon} alt="" className="size-8" />
              </span>
              <div className="flex flex-col gap-2">
                <p className="type-h5 text-espresso">{card.title}</p>
                <p className="type-body text-secondary">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
