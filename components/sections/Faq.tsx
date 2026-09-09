"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";
import { Container } from "../ui/Container";

/**
 * FAQ accordion. Answers stay mounted and ease open/closed via grid-rows so
 * both directions animate; the plus morphs into a minus (vertical bar
 * collapses while the glyph quarter-turns), matching the specialist toggle's
 * motion language. Rows without answer copy render as plain rows.
 */
export function Faq({ items, title }: { items: FaqItem[]; title: string }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="w-full py-10 xl:py-18">
      <Container className="flex flex-col gap-10 px-6 xl:flex-row xl:gap-[80px] xl:px-18">
        <h2 className="type-h2 w-full text-espresso xl:w-[360px] xl:shrink-0">
          {title}
        </h2>

        <div className="flex w-full flex-col xl:max-w-[856.5px]">
          {items.map(({ question, answer }, i) => {
            const isOpen = open === i && answer !== null;
            const row = (
              <div className="flex w-full items-center gap-6">
                <p className="type-body-medium min-w-px flex-1 text-left text-espresso">
                  {question}
                </p>
                <span
                  className={`relative block size-4 shrink-0 text-espresso transition-transform duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden
                >
                  <span className="absolute top-1/2 left-1/2 h-[1.5px] w-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
                  <span
                    className={`absolute top-1/2 left-1/2 h-[13px] w-[1.5px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </div>
            );

            return (
              <div
                key={question}
                className="flex w-full flex-col border-b border-border-taupe py-4"
              >
                {answer === null ? (
                  row
                ) : (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full cursor-pointer"
                  >
                    {row}
                  </button>
                )}
                {answer !== null && (
                  <div
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out motion-reduce:transition-none ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="type-body w-full pt-4 pr-8 text-left text-secondary">
                        {answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
