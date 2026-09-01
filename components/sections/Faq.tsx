"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/faq";
import { Minus, Plus } from "../icons";
import { Container } from "../ui/Container";

export function Faq({ items, title }: { items: FaqItem[]; title: string }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full py-18">
      <Container className="flex flex-col gap-10 px-6 xl:flex-row xl:gap-[80px] xl:px-18">
        <h2 className="type-h2 w-full text-espresso xl:w-[360px] xl:shrink-0">
          {title}
        </h2>

        <div className="flex w-full flex-col xl:max-w-[856.5px]">
          {items.map(({ question, answer }, i) => {
            const isOpen = open === i && answer !== null;
            const Icon = isOpen ? Minus : Plus;
            const row = (
              <div className="flex w-full items-center gap-6">
                <p className="type-body-medium min-w-px flex-1 text-left text-espresso">
                  {question}
                </p>
                <Icon className="size-4 shrink-0 text-espresso" />
              </div>
            );

            return (
              <div
                key={question}
                className="flex w-full flex-col gap-4 border-b border-border-taupe py-4"
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
                {isOpen && (
                  <p className="type-body w-full pr-8 text-left text-secondary">
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
