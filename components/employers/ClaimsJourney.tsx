"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Container } from "../ui/Container";
import { INVOICE_ROWS, INVOICE_TOTAL, JOURNEY_STEPS } from "@/lib/employers-us";

/**
 * "She doesn't file one claim. She files a journey." (node 3235:16806).
 * Clicking a journey step reveals the invoice rows accrued up to that point;
 * the receipt sits on a primrose clipboard bar with a torn top edge, exactly
 * as the Figma artwork stacks it.
 */
export function ClaimsJourney() {
  const [step, setStep] = useState(0);
  const visibleRows = Math.min(step + 1, INVOICE_ROWS.length);

  return (
    <section className="w-full bg-espresso py-6">
      <Container className="flex flex-col items-stretch gap-10 px-6 py-10 xl:flex-row xl:gap-0 xl:px-0 xl:py-0">
        <div className="flex min-w-px flex-1 flex-col justify-between gap-12 xl:p-18">
          <div className="flex flex-col gap-6 text-white">
            <h2 className="type-h2">
              She doesn&rsquo;t file one claim.{" "}
              <span className="block text-primrose-pale">She files a journey.</span>
            </h2>
            <p className="type-body">
              Specialist care is one of the biggest cost drivers in your plan — not because
              specialists are wrong for the job, but because the road to the{" "}
              <span className="font-medium">right</span> one is unmanaged. Here&rsquo;s the journey
              your claims data can&rsquo;t show you:
            </p>
          </div>
          <div className="flex w-full max-w-[596px] flex-col gap-6">
            {JOURNEY_STEPS.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setStep(i)}
                className={`flex w-full cursor-pointer items-center gap-4 text-left transition-opacity duration-300 ${
                  i === step ? "opacity-100" : "opacity-30 hover:opacity-60"
                }`}
              >
                <span className="w-8 shrink-0 text-center font-display text-[32px] leading-[normal] text-taupe">
                  {i + 1}.
                </span>
                <span className="flex min-w-px flex-1 flex-col gap-1 text-white">
                  <span className="type-h5">
                    {s.title}
                    {s.note ? <span className="text-taupe"> {s.note}</span> : null}
                  </span>
                  {s.body ? (
                    <span
                      className={`type-body grid transition-[grid-template-rows,opacity] duration-300 ${
                        i === step ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="overflow-hidden">{s.body}</span>
                    </span>
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex min-w-px flex-1 flex-col items-center justify-end xl:p-18">
          <div className="relative w-full max-w-[616px]">
            {/* clipboard bar behind the receipt's bottom edge */}
            <div
              aria-hidden
              className="absolute -bottom-3 left-0 h-[41px] w-full rounded-small border-[12px] border-primrose"
            />
            <div className="relative mx-3">
              <img
                src="/images/employers/invoice-torn.svg"
                alt=""
                className="relative z-10 -mb-px w-full"
              />
              <div className="flex flex-col gap-6 bg-white px-8 py-9 shadow-[inset_0px_-4px_8px_0px_rgba(0,0,0,0.15)]">
                <div className="flex w-full items-center justify-between">
                  <img src="/images/employers/invoice-icon.svg" alt="" className="size-6" />
                  <p className="type-h5 text-charcoal">Patient Invoice</p>
                </div>
                <div className="flex flex-col gap-5 border-y border-dashed border-taupe py-5">
                  <div className="flex w-full items-center type-body-lg-medium font-medium text-charcoal">
                    <p className="w-[80px] xl:w-[100px]">Item</p>
                    <p className="min-w-px flex-1">Description</p>
                    <p className="min-w-px flex-1 text-right">Cost</p>
                  </div>
                </div>
                {INVOICE_ROWS.map((row, i) => (
                  <div
                    key={row.item}
                    className={`flex w-full items-center justify-between text-[18px] leading-[1.4] text-charcoal transition-opacity duration-300 xl:text-[20px] ${
                      i < visibleRows ? "opacity-100" : "opacity-20"
                    }`}
                  >
                    <p className="w-[80px] shrink-0 xl:w-[100px]">{row.item}</p>
                    <p className="min-w-px flex-1">{row.desc}</p>
                    <p className="shrink-0 whitespace-nowrap">{row.cost}</p>
                  </div>
                ))}
                <div className="border-t border-dashed border-taupe" />
                <div className="flex w-full items-center justify-between">
                  <p className="type-body-lg-medium font-medium text-charcoal">Total</p>
                  <p className="font-display text-[32px] leading-none text-[#9b334a] xl:text-[40px]">
                    {INVOICE_TOTAL}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
