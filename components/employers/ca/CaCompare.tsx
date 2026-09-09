/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Container } from "../../ui/Container";
import { CA_COMPARE_BLAIR, CA_COMPARE_CARDS } from "@/lib/employers-ca";

/**
 * "Other benefits help her cope with the system. Blair replaces the wait."
 * (node 3224:5562): two thumbs-down category cards over white/40, the Blair
 * primrose-pale card with the brand mark, and the closing statement.
 */
export function CaCompare() {
  return (
    <section className="w-full py-16 xl:py-25">
      <Container className="flex flex-col items-center gap-10 px-6 xl:gap-[54px] xl:px-18">
        <div className="flex w-full flex-col gap-6 text-center">
          <h2 className="type-h2 text-espresso">
            Other benefits help her cope with the system.{" "}
            <span className="block">Blair replaces the wait.</span>
          </h2>
          <p className="type-body-lg text-secondary">
            Specialist-led care, built around where you are right now. Choose your area to explore.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4 xl:w-[1044px]">
          <div className="flex w-full flex-col items-stretch gap-4 xl:flex-row">
            {CA_COMPARE_CARDS.map((card) => (
              <div
                key={card.title}
                className="flex min-w-px flex-1 flex-col gap-3 rounded-medium bg-white/40 px-6 py-6 xl:px-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-small bg-white">
                    <img src="/images/employers-ca/icon-thumbsdown.svg" alt="" className="size-8" />
                  </span>
                  <p className="type-h5 text-espresso">{card.title}</p>
                </div>
                <p className="type-body text-secondary">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col items-start gap-6 rounded-medium bg-primrose-pale px-6 py-8 xl:flex-row xl:items-center xl:gap-12 xl:pr-8 xl:pl-10">
            <span className="flex shrink-0 items-center gap-4">
              <Image src="/brand/blair-logomark-dark.svg" alt="" width={44} height={54} />
              <Image src="/brand/blair-wordmark-dark.svg" alt="Blair" width={163} height={48} />
            </span>
            <div className="flex min-w-px flex-1 flex-col justify-center gap-2 text-espresso">
              <p className="type-h5">{CA_COMPARE_BLAIR.title}</p>
              <p className="type-body">{CA_COMPARE_BLAIR.body}</p>
            </div>
          </div>
        </div>
        <p className="type-h2 w-full text-center text-espresso xl:w-[1050px]">
          That&rsquo;s the difference between managing a gap and closing one.
        </p>
      </Container>
    </section>
  );
}
