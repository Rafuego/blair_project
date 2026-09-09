"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Container } from "../../ui/Container";
import { CA_TESTIMONIALS } from "@/lib/employers-ca";

/**
 * "From women who stopped putting up with it." (node 3224:5712) — pilot
 * quote cards with prev/next arrows; the off-card sits at 40% opacity.
 */
export function CaTestimonials() {
  const [idx, setIdx] = useState(0);
  const n = CA_TESTIMONIALS.length;

  return (
    <section className="w-full py-16 xl:py-25">
      <Container className="flex flex-col items-start gap-10 px-6 xl:flex-row xl:gap-16 xl:px-18">
        <div className="flex w-full flex-col gap-4 xl:w-[604px] xl:shrink-0">
          <h2 className="type-h2 text-espresso">From women who stopped putting up with it.</h2>
          <p className="type-body text-charcoal">Rated 5.0 on Google reviews.</p>
        </div>
        <div className="flex min-w-px flex-1 flex-col items-start gap-6 overflow-hidden">
          <div
            className="flex items-stretch gap-8 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(${-idx} * (520px + 32px)))` }}
          >
            {CA_TESTIMONIALS.map((quote, i) => (
              <blockquote
                key={quote}
                className={`flex h-[310px] w-[85vw] max-w-[520px] shrink-0 flex-col justify-between rounded-medium bg-primrose-pale px-6 py-8 transition-opacity duration-500 xl:w-[520px] xl:px-10 ${
                  i === idx ? "opacity-100" : "opacity-40"
                }`}
              >
                <img src="/images/employers-ca/quote-mark.svg" alt="" className="h-12 w-13" />
                <p className="type-body-lg text-espresso">{quote}</p>
              </blockquote>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIdx((idx - 1 + n) % n)}
              className="flex size-12 cursor-pointer items-center justify-center rounded-circle border border-taupe text-espresso transition-colors hover:bg-white"
            >
              <svg viewBox="0 0 16 16" className="size-4">
                <path d="M10 3L5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIdx((idx + 1) % n)}
              className="flex size-12 cursor-pointer items-center justify-center rounded-circle border border-taupe text-espresso transition-colors hover:bg-white"
            >
              <svg viewBox="0 0 16 16" className="size-4">
                <path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
