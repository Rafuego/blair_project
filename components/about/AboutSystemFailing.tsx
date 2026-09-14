"use client";

import { Button } from "../ui/Button";

/**
 * "The system is failing across North America." (node 3322:6540) —
 * espresso-dark band with a Canada/US toggle, three sourced stats, the
 * closing line, and Partner/Careers CTAs. Only the Canadian stats are
 * designed; the US tab holds the CA set until US data ships (same
 * limitation the old stats band had).
 */
import { useState } from "react";

const STATS = [
  {
    stat: "5.9 million",
    body: "Adults in Canada with no regular doctor or nurse practitioner.",
    source: "(OurCare and CMA, 2025)",
    width: 256,
  },
  {
    stat: "28.6 weeks",
    body: "The median wait from referral to treatment, up 208 percent since 1993.",
    source: "(Fraser Institute, 2025)",
    width: 291,
  },
  {
    stat: "40.6 weeks",
    body: "The median wait for gynecology, one of the longest of any specialty.",
    source: "(Fraser Institute, 2025)",
    width: 262,
  },
];

const REGIONS = ["Canada", "United States"] as const;

export function AboutSystemFailing() {
  const [region, setRegion] = useState(0);

  return (
    <section className="w-full">
      <div className="w-full rounded-b-large bg-espresso-dark px-6 py-16 xl:px-10 xl:py-30">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 xl:gap-18">
          <div className="flex w-full flex-col items-center gap-10">
            <h2 className="type-h2 text-center text-white">
              The system is failing across North America.
            </h2>
            <div className="flex items-center gap-2 rounded-circle bg-glass-light-15 p-1 backdrop-blur-[20px]">
              {REGIONS.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setRegion(i)}
                  className={`type-button cursor-pointer rounded-circle px-7 py-3 whitespace-nowrap transition-colors duration-300 ${
                    region === i ? "bg-white text-espresso" : "text-white hover:bg-white/15"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-10 text-center">
            <div className="flex w-full flex-col items-start gap-10 xl:w-[1200px] xl:flex-row xl:gap-0">
              {STATS.map((s) => (
                <div key={s.stat} className="flex w-full min-w-px flex-1 flex-col items-center gap-3">
                  <p className="font-display text-[32px] leading-none text-primrose xl:text-[40px]">
                    {s.stat}
                  </p>
                  <p className="type-body text-white" style={{ maxWidth: s.width }}>
                    {s.body}
                  </p>
                  <p className="type-caps text-taupe">{s.source}</p>
                </div>
              ))}
            </div>
            <p className="type-body-lg w-full text-white xl:w-[783px]">
              There&rsquo;s an opportunity to transform care across North America.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button href="/for-teams#demo" variant="primrose">
              Partner with us
            </Button>
            <Button href="#open-roles" variant="glass">
              Explore careers
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
