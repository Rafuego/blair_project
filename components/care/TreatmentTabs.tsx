"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export type TreatmentTab = { label: string; body: string | null };

/**
 * "Treatment that fits the diagnosis" (node 3224:6310) — a five-tab glass menu
 * over a blurred plate. Only the first tab has copy in the design; the rest are
 * data fields in lib/urology.ts so they can be filled in without touching this
 * component.
 */
export function TreatmentTabs({
  title,
  intro,
  tabs,
  cta,
}: {
  title: string;
  intro: string;
  tabs: TreatmentTab[];
  cta: { text: string; label: string; href: string };
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full">
      <Container className="px-4 xl:px-8">
        <div className="relative flex w-full flex-col items-center justify-center gap-8 overflow-clip rounded-large px-6 pt-12 pb-10 xl:px-10 xl:pt-18">
          <div aria-hidden className="absolute inset-0">
            <Image
              src="/images/urology/treatment-plate.png"
              alt=""
              fill
              sizes="1376px"
              className="scale-125 object-cover object-bottom blur-[21px]"
            />
          </div>

          <div className="relative flex w-full flex-col items-center gap-6 text-center text-white">
            <h2 className="type-h2 xl:w-[792px]">{title}</h2>
            <p className="type-body-lg">{intro}</p>
          </div>

          <div className="relative flex w-full flex-col items-center">
            <div
              role="tablist"
              className="flex w-full flex-col content-center items-stretch gap-2 rounded-large bg-glass-light-15 p-1 backdrop-blur-[20px] xl:w-[1126px] xl:flex-row xl:flex-wrap xl:items-center xl:rounded-circle"
            >
              {tabs.map(({ label }, i) => (
                <button
                  key={label}
                  role="tab"
                  type="button"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={`type-button flex min-w-px flex-1 cursor-pointer items-center justify-center rounded-circle px-4 py-4 text-center transition-colors duration-200 ${
                    i === active
                      ? "bg-white text-espresso"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex w-full items-center justify-center px-6 py-14 xl:px-18 xl:py-20">
              <p className="type-h5 text-center text-white xl:w-[604px]">
                {tabs[active].body}
              </p>
            </div>
          </div>

          <div className="relative flex w-full flex-col items-center justify-between gap-4 rounded-medium bg-primrose-pale p-6 xl:flex-row">
            <p className="type-h5 text-charcoal">{cta.text}</p>
            <Button href={cta.href} variant="espresso">
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
