"use client";

import { useState } from "react";
import { Container } from "../ui/Container";

export type TreatmentOption = { title: string; body: string };

/**
 * "A plan built for you" (node 3224:4274).
 *
 * Hovering a treatment option expands it into a 500px espresso panel with its
 * description, per the frames to the right of the section (3224:4443, 4469,
 * 4495, 4521). Expansion is driven by flex-basis rather than a width swap so
 * it can actually animate, and the option also responds to click/focus so the
 * same content is reachable without a pointer.
 */
export function CarePlan({
  title,
  intro,
  steps,
  options,
}: {
  title: string;
  intro: string;
  steps: string[];
  options: TreatmentOption[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-white">
      <Container className="flex flex-col items-center gap-10 px-4 py-16 xl:gap-18 xl:py-25 xl:px-8">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h2 className="type-h2 whitespace-pre-line text-espresso">{title}</h2>
          <p className="type-body-lg max-w-[954px] text-secondary">{intro}</p>
        </div>

        <div className="flex flex-col items-center gap-6 xl:flex-row xl:gap-20">
          {steps.map((step, i) => (
            <div key={step} className="contents">
              {i > 0 && (
                <div
                  aria-hidden
                  className="h-[0.5px] w-full bg-border-taupe xl:h-22 xl:w-[0.5px]"
                />
              )}
              <div className="flex w-full items-start gap-3 xl:w-[275px]">
                <p className="type-h4 leading-[var(--leading-display-auto)] text-taupe">
                  {i + 1}.
                </p>
                <p className="type-h4 leading-[var(--leading-display-auto)] whitespace-nowrap text-espresso">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Widths animate via explicit flex-basis percentages — flex-grow does
            not interpolate linearly in width, so growing 1 -> 500 snaps almost
            immediately. The row also holds a fixed height, so expanding a card
            never reflows the page or shifts the other cards under the pointer.
            Percentages sum to 99.13%, leaving the three 4px gaps. */}
        <div
          className="flex w-full flex-col items-stretch gap-1 overflow-clip rounded-[24px] xl:h-[232px] xl:flex-row xl:items-center"
          onMouseLeave={() => setOpen(null)}
        >
          {options.map(({ title: name, body }, i) => {
            const isOpen = open === i;
            const basis =
              open === null ? "24.78%" : isOpen ? "36.34%" : "20.93%";
            return (
              <button
                key={name}
                type="button"
                aria-expanded={isOpen}
                onMouseEnter={() => setOpen(i)}
                onFocus={() => setOpen(i)}
                onClick={() => setOpen(isOpen ? null : i)}
                style={{ flexBasis: basis }}
                className={`flex grow-0 cursor-pointer flex-col justify-center overflow-hidden p-10 text-left transition-[flex-basis,background-color,color,height] duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[flex-basis] motion-reduce:transition-none xl:shrink-0 ${
                  isOpen
                    ? "bg-espresso text-white xl:h-full xl:rounded-[24px]"
                    : "bg-cream text-espresso xl:h-[144px]"
                }`}
              >
                <span
                  className={`type-h5 ${isOpen ? "text-left xl:w-[420px] xl:shrink-0 xl:whitespace-nowrap" : "w-full text-center"}`}
                >
                  {name}
                </span>
                <span
                  className={`w-full overflow-hidden transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "opacity-100 delay-150" : "h-0 opacity-0"
                  }`}
                >
                  <span className="type-body block w-full pt-4 text-secondary-on-dark xl:w-[420px]">
                    {body}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
