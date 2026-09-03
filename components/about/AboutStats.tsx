"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

type Stat = { metric: string; body: string; source: string };

const CA_STATS: Stat[] = [
  {
    metric: "5.9 million",
    body: "Adults in Canada with no regular doctor or nurse practitioner.",
    source: "(OurCare / CMA, 2025)",
  },
  {
    metric: "28.6 weeks",
    body: "The median wait from referral to treatment, up 208 percent since 1993.",
    source: "(Fraser Institute, 2025)",
  },
  {
    metric: "40.6 weeks",
    body: "The median wait for gynecology, one of the longest of any specialty.",
    source: "(Fraser Institute, 2025)",
  },
];

/** US stats are not in the design yet — the tab renders and keeps Canada's
 *  numbers until that copy exists. Swap here when it does. */
const REGIONS = [
  { label: "Canada", stats: CA_STATS },
  { label: "United States", stats: CA_STATS },
];

export function AboutStats() {
  const [region, setRegion] = useState(0);
  const stats = REGIONS[region].stats;

  return (
    <section className="w-full">
      <div className="flex w-full flex-col items-center gap-12 rounded-b-large bg-espresso-dark px-6 py-20 xl:gap-18 xl:px-10 xl:py-30">
        <Container className="flex flex-col items-center gap-10">
          <h2 className="type-h2 w-full text-center text-white">
            The system is failing across North America.
          </h2>
          <div role="tablist" className="flex flex-wrap content-center items-center gap-2 rounded-circle bg-glass-light-15 p-1 backdrop-blur-[20px]">
            {REGIONS.map(({ label }, i) => (
              <button
                key={label}
                role="tab"
                type="button"
                aria-selected={i === region}
                onClick={() => setRegion(i)}
                className={`type-button flex cursor-pointer items-center justify-center rounded-circle px-7 py-3 whitespace-nowrap transition-colors ${
                  i === region ? "bg-white text-espresso" : "text-white hover:bg-white/15"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex w-full flex-col items-center gap-10 text-center">
            <div className="flex w-full flex-col items-start gap-10 xl:w-[1200px] xl:flex-row">
              {stats.map(({ metric, body, source }) => (
                <div key={metric} className="flex min-w-px flex-1 flex-col items-center gap-3">
                  <p className="font-[family-name:var(--font-display)] text-[40px] leading-none text-primrose [font-feature-settings:'lnum'_1,'tnum'_1]">
                    {metric}
                  </p>
                  <p className="type-body max-w-[291px] text-white">{body}</p>
                  <p className="type-caps text-taupe">{source}</p>
                </div>
              ))}
            </div>
            <p className="type-body-lg max-w-[783px] text-white">
              The system is broken across North America. It fails women hardest.
              We are rebuilding it.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button href="/for-teams" variant="primrose">
              Partner with us
            </Button>
            <Button href="#open-roles" variant="glass">
              Explore careers
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
