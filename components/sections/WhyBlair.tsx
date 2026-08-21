"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";

const TABS = [
  {
    id: "specialist-led",
    label: "Specialist-led, start to finish",
    heading: "Specialist-designed care.",
    body: "Diagnosis and treatment built by leading specialists in women's health, without the wait or the referral.",
    headingWidth: 401,
    bodyWidth: 401,
  },
  {
    id: "your-data",
    label: "Built on your data",
    heading: "Technology that makes care personal.",
    body: "Assessments, tracking, and insights, so your plan is built on your data, not guesswork.",
    headingWidth: 488,
    bodyWidth: 365,
  },
  {
    id: "follows-you",
    label: "Care that follows you",
    heading: "Care that follows you.",
    body: "Ongoing follow-ups and unlimited messaging with your provider, across every stage.",
    headingWidth: 488,
    bodyWidth: 365,
  },
  {
    id: "community",
    label: "A community behind you",
    heading: "A community behind you.",
    body: "A moderated community and expert-backed resources between visits.",
    headingWidth: 488,
    bodyWidth: 365,
  },
];

export function WhyBlair() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section id="what-is-blair" className="w-full">
      <Container className="px-6 xl:px-18">
      <h2 className="type-h2 w-full text-center text-espresso">
        Why women choose Blair
      </h2>

      <div className="relative mt-[54px] flex min-h-[693.52px] w-full flex-col items-center justify-center gap-8 overflow-clip rounded-large p-6 xl:p-10">
        {/* Blurred plate, oversized so the blur never feathers at the edges. */}
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 h-[1229px] w-[1331px] -translate-x-1/2 -translate-y-1/2 blur-[10px]"
        >
          <Image
            src="/images/why-blair.png"
            alt=""
            fill
            sizes="1331px"
            className="rounded-large object-cover"
          />
        </div>

        <div
          role="tablist"
          className="relative flex shrink-0 flex-wrap content-center items-center gap-2 rounded-circle bg-glass-light-15 p-1 backdrop-blur-[20px]"
        >
          {TABS.map(({ id, label }, i) => (
            <button
              key={id}
              role="tab"
              type="button"
              aria-selected={i === active}
              aria-controls="why-blair-panel"
              onClick={() => setActive(i)}
              className={`type-button flex shrink-0 cursor-pointer items-center justify-center gap-1 rounded-circle px-7 py-3 ${
                i === active ? "bg-white text-espresso" : "text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div
          id="why-blair-panel"
          role="tabpanel"
          className="relative flex w-full shrink-0 items-center justify-center gap-8"
        >
          <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-6 text-white">
            <h3
              style={{ maxWidth: tab.headingWidth }}
              className="type-h2 w-full"
            >
              {tab.heading}
            </h3>
            <p className="type-body w-full" style={{ maxWidth: tab.bodyWidth }}>
              {tab.body}
            </p>
          </div>

          {/* Identity card is still empty in the Figma — kept as the bare plate. */}
          <div className="h-[531.52px] w-full max-w-[396px] shrink rounded-medium bg-cream p-6" />
        </div>
      </div>
      </Container>
    </section>
  );
}
