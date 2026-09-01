"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, Chevron } from "../icons";
import { Container } from "../ui/Container";

export type CareQuote = { quote: string; name: string };

const STEP = 551; // card 520 + gap 31
const REVIEWS_URL = "/reviews";

/**
 * Care-page testimonials (node 3224:4338): copy on the left, a wide card
 * carousel on the right where only the active card is at full opacity.
 */
export function CareTestimonials({
  title,
  rating,
  quotes,
}: {
  title: string;
  rating: string;
  quotes: CareQuote[];
}) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  function go(delta: number) {
    const next = Math.min(quotes.length - 1, Math.max(0, index + delta));
    setIndex(next);
    track.current?.scrollTo({ left: next * STEP, behavior: "smooth" });
  }

  return (
    <section className="w-full bg-cream">
      <Container className="flex flex-col items-start gap-10 px-6 py-20 xl:flex-row xl:gap-16 xl:px-18 xl:py-25">
        <div className="flex w-full flex-col items-center gap-[15px] xl:w-[604px] xl:shrink-0">
          <h2 className="type-h2 w-full text-espresso">{title}</h2>
          <p className="type-body w-full text-charcoal">{rating}</p>
        </div>

        <div className="flex w-full min-w-0 flex-col items-start gap-6 xl:w-[700px] xl:shrink-0">
          <div
            ref={track}
            className="flex w-full gap-[31px] overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {quotes.map(({ quote, name }, i) => (
              <article
                key={name}
                className={`flex h-[260px] w-[520px] shrink-0 flex-col justify-between rounded-medium bg-primrose-pale px-10 py-8 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                  i === index ? "opacity-100" : "opacity-20"
                }`}
              >
                <div className="flex w-full flex-col gap-3 text-espresso">
                  <p className="type-body w-full">★★★★★</p>
                  <p className="type-body-lg w-full">{quote}</p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="type-caps text-espresso">{name}</p>
                  <a
                    href={REVIEWS_URL}
                    aria-label={`Read more reviews — ${name}`}
                    className="flex size-12 items-center justify-center rounded-circle bg-cream text-espresso transition-colors duration-200 hover:bg-espresso hover:text-cream"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-start gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              disabled={index === 0}
              className="flex size-12 cursor-pointer items-center justify-center rounded-circle border border-border-taupe text-espresso transition-colors duration-200 hover:bg-espresso hover:text-cream disabled:opacity-40"
            >
              <Chevron className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              disabled={index === quotes.length - 1}
              className="flex size-12 cursor-pointer items-center justify-center rounded-circle border border-border-taupe text-espresso transition-colors duration-200 hover:bg-espresso hover:text-cream disabled:opacity-40"
            >
              <Chevron className="size-5 rotate-180" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
