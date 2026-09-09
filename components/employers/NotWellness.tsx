"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Container } from "../ui/Container";
import { SCALE_ACCORDIONS, WELLNESS_CARDS } from "@/lib/employers-us";

/**
 * Dark stack (node 3323:9311): "You've bought wellness apps before" cards,
 * the specialist-platform statement, and "Specialist care, engineered to
 * scale" with its accordion column.
 */
export function NotWellness() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="w-full overflow-hidden rounded-b-large">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="rounded-t-large rounded-b-[40px] bg-espresso-dark px-6 py-16 xl:rounded-b-[64px] xl:px-10 xl:py-30">
          <div className="flex flex-col gap-12 xl:gap-18">
            <h2 className="type-h2 text-center text-white">
              You&rsquo;ve bought wellness apps before. <span className="block">This isn&rsquo;t one.</span>
            </h2>
            <div className="flex w-full flex-col items-start gap-10 xl:flex-row xl:gap-0">
              {WELLNESS_CARDS.map((card) => (
                <div key={card.icon} className="flex min-w-px flex-1 flex-col items-center gap-3">
                  <span className="flex size-[50px] items-center justify-center rounded-medium">
                    <img src={card.icon} alt="" className="size-6" />
                  </span>
                  <p className="text-center font-display text-[28px] leading-[normal] text-white xl:text-[32px]">
                    {card.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                  <p className="type-body text-center text-white" style={{ maxWidth: card.width }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden bg-espresso py-20 xl:py-30">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[320px] w-[1112px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-white/6 blur-[80px]"
          />
          <Container className="relative flex justify-center px-6">
            <p className="w-full max-w-[777px] text-center font-display text-[28px] leading-[1.1] text-white xl:text-[40px] xl:leading-[44px]">
              <span className="text-primrose">Blair is a specialist clinical platform: </span>
              <span className="block">
                diagnosis, prescribing, and longitudinal care across women&rsquo;s specialty health —
                in one benefit.
              </span>
            </p>
          </Container>
        </div>
        <div className="bg-espresso">
          <Container className="flex flex-col items-start justify-between gap-12 px-6 py-16 xl:flex-row xl:px-18 xl:py-20">
            <div className="flex flex-col gap-6 pt-6 xl:w-[500px]">
              <h2 className="type-h2 text-white">
                Specialist care, <span className="block">engineered to scale</span>
              </h2>
              <p className="type-body-lg text-white">
                Blair pairs licensed clinicians with proprietary clinical intelligence - specialist
                expertise encoded into every assessment, treatment plan, and follow-up.
              </p>
            </div>
            <div className="flex w-full flex-col gap-1 xl:w-[570px]">
              {SCALE_ACCORDIONS.map((acc, i) => {
                const active = openIdx === i;
                return (
                  <button
                    key={acc.title}
                    type="button"
                    onClick={() => setOpenIdx(active ? -1 : i)}
                    aria-expanded={active}
                    className={`flex w-full cursor-pointer flex-col items-start justify-center rounded-medium p-6 text-left transition-colors duration-300 xl:p-10 ${
                      active ? "gap-2 bg-primrose" : "bg-white/10"
                    }`}
                  >
                    <span className="flex w-full items-center justify-between gap-4">
                      <span
                        className={`type-h5 transition-colors duration-300 ${
                          active ? "text-espresso" : "text-white"
                        }`}
                      >
                        {acc.title}
                      </span>
                      <span
                        className={`relative flex size-11 shrink-0 items-center justify-center rounded-circle transition-colors duration-300 ${
                          active ? "bg-white" : "bg-white/10"
                        }`}
                      >
                        <span
                          className={`relative block size-4 transition-transform duration-300 ${
                            active ? "rotate-180" : ""
                          }`}
                        >
                          <span
                            className={`absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 ${
                              active ? "bg-espresso" : "bg-white"
                            }`}
                          />
                          <span
                            className={`absolute top-0 left-1/2 h-full w-[1.5px] -translate-x-1/2 transition-[scale,opacity] duration-300 ${
                              active ? "scale-y-0 opacity-0 bg-espresso" : "bg-white"
                            }`}
                          />
                        </span>
                      </span>
                    </span>
                    <span
                      className={`type-body grid w-full text-secondary transition-[grid-template-rows,opacity] duration-400 ${
                        active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">{acc.body}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
