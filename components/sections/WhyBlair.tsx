"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/Container";

const TABS = [
  {
    id: "specialist-led",
    label: "Specialist-led, from start to finish",
    heading: "Specialist-designed care.",
    body: "Diagnosis and treatment built by leading specialists in women's health, without the wait or the referral.",
    screen: "/images/mockup/screen-period.png",
  },
  {
    id: "your-data",
    label: "Built on your data",
    heading: "Technology that makes care personal.",
    body: "Assessments, tracking, and insights, so your plan is built on your data, not guesswork.",
    screen: "/images/mockup/screen-period.png",
  },
  {
    id: "follows-you",
    label: "Care that follows you",
    heading: "Care that follows you.",
    body: "Ongoing follow-ups and unlimited messaging with your provider, across every stage.",
    screen: "/images/mockup/screen-period.png",
  },
  {
    id: "community",
    label: "A community behind you",
    heading: "A community behind you.",
    body: "A moderated community and expert-backed resources between visits.",
    screen: "/images/mockup/screen-period.png",
  },
];

/**
 * Device mockup (Figma node 3323:11325). The frame PNG is opaque, so the app
 * screen composites on top of it, then the dynamic island is re-stamped over
 * the screen from the frame artwork — the same stacking Figma uses.
 */
function PhoneMockup({ screen, alt }: { screen: string; alt: string }) {
  return (
    <div className="relative aspect-[340.79/706.1] w-full xl:h-[706.1px] xl:w-[340.79px] xl:shrink-0">
      <Image
        src="/images/mockup/phone-frame.png"
        alt=""
        fill
        sizes="341px"
        className="object-contain"
      />
      <div className="absolute inset-[1.55%_3.98%_1.62%_3.92%] overflow-hidden rounded-[68px]">
        <Image src={screen} alt={alt} fill sizes="341px" className="object-cover" />
      </div>
      {/* Home indicator */}
      <div className="absolute inset-[96.96%_34.27%_2.49%_34.06%] overflow-hidden rounded-[68px]">
        <img
          src={screen}
          alt=""
          className="absolute max-w-none"
          style={{ height: "17767.38%", width: "292.76%", left: "-96.13%", top: "-17507.15%" }}
        />
      </div>
      {/* Dynamic island */}
      <div className="absolute inset-[3.11%_35.7%_92.91%_35.74%] overflow-hidden rounded-[19.68px]">
        <img
          src="/images/mockup/phone-frame.png"
          alt=""
          className="absolute max-w-none"
          style={{ height: "2510.28%", width: "350.17%", left: "-125.05%", top: "-78.1%" }}
        />
      </div>
    </div>
  );
}

export function WhyBlair() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section id="what-is-blair" className="w-full">
      <Container className="px-4 xl:px-18">
        <h2 className="type-h2 w-full text-left text-espresso xl:text-center">
          Why women choose Blair
        </h2>

        <div className="relative mt-[54px] flex w-full flex-col items-center gap-8 overflow-clip rounded-large p-4 xl:min-h-[936.1px] xl:gap-15 xl:px-10 xl:py-15">
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
            className="relative grid w-full shrink-0 grid-cols-2 gap-2 rounded-large bg-glass-light-15 p-1 backdrop-blur-[20px] xl:flex xl:w-auto xl:flex-wrap xl:content-center xl:items-center xl:rounded-circle"
          >
            {TABS.map(({ id, label }, i) => (
              <button
                key={id}
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls="why-blair-panel"
                onClick={() => setActive(i)}
                className={`type-button flex h-14 cursor-pointer items-center justify-center gap-1 rounded-medium px-3 text-center text-[14px] xl:h-auto xl:shrink-0 xl:rounded-circle xl:px-7 xl:py-3 xl:text-[16px] xl:whitespace-nowrap ${
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
            className="relative flex w-full flex-1 flex-col items-center gap-8 px-0 xl:flex-row xl:justify-between xl:px-50"
          >
            <div className="flex w-full flex-col gap-6 text-white xl:max-w-[370px]">
              <h3 className="type-h3 w-full">{tab.heading}</h3>
              <p className="type-body w-full">{tab.body}</p>
            </div>
            <div className="w-[191px] shrink-0 xl:w-auto">
              <PhoneMockup screen={tab.screen} alt={`${tab.heading} app screen`} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
