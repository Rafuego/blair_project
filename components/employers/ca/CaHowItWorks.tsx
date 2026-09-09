import { Container } from "../../ui/Container";
import { CA_HOW_IT_WORKS } from "@/lib/employers-ca";

/** "How It Works" — white card with four numbered steps (node 3224:5649). */
export function CaHowItWorks() {
  return (
    <section className="w-full px-4 xl:px-8">
      <div className="mx-auto w-full max-w-[1376px] rounded-large bg-white px-6 py-16 xl:px-18 xl:py-25">
        <Container className="flex flex-col gap-12 xl:gap-18">
          <h2 className="type-h2 text-center text-espresso">How It Works</h2>
          <div className="flex w-full flex-col items-stretch gap-10 xl:flex-row xl:gap-[54px]">
            {CA_HOW_IT_WORKS.map((step, i) => (
              <div key={step.title} className="contents">
                {i > 0 && <div aria-hidden className="hidden w-px self-stretch bg-taupe/60 xl:block" />}
                <div className="flex min-w-px flex-1 flex-col gap-3">
                  <p className="font-display text-[32px] leading-[normal] text-taupe">{i + 1}.</p>
                  <p className="font-display text-[32px] leading-[normal] text-espresso">
                    {step.title}
                  </p>
                  <p className="type-body text-secondary">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
