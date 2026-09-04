"use client";

import { useState } from "react";
import { DEFAULT_INPUTS, roi, usd, type EstimateMode, type RoiInputs } from "@/lib/roi";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

function Field({
  label,
  value,
  onChange,
  note,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  note?: string;
  prefix?: string;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="type-body text-charcoal">{label}</label>
      <div className="flex h-11 w-full items-center gap-1 rounded-small border border-border-taupe bg-white px-6">
        {prefix && <span className="type-body text-secondary">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={0}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
          className="type-body w-full bg-transparent text-espresso focus:outline-none"
        />
      </div>
      {note && <p className="type-body-sm text-secondary">{note}</p>}
    </div>
  );
}

const ROWS = [
  { key: "redundant", label: "Redundant diagnostic claims", note: "extra E/M visits, repeat specialist workups, duplicate labs" },
  { key: "absenteeism", label: "Absenteeism", note: "Mayo Clinic: ~11% miss ≥1 workday/yr from symptoms" },
  { key: "presenteeism", label: "Presenteeism", note: "reduced productivity while at work (modeled)" },
  { key: "attrition", label: "Attrition", note: "replacement at 1.5x salary (modeled)" },
] as const;

export function RoiCalculator() {
  const [inputs, setInputs] = useState<RoiInputs>(DEFAULT_INPUTS);
  const set = (patch: Partial<RoiInputs>) => setInputs((v) => ({ ...v, ...patch }));
  const r = roi(inputs);

  return (
    <section className="w-full pt-40 pb-20 xl:pt-50">
      <Container className="flex flex-col gap-18 px-6 xl:px-18">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h1 className="type-h2 text-espresso xl:w-[1057px]">
            What is the long road to an answer costing you?
          </h1>
          <p className="type-body-lg text-secondary xl:w-[772px]">
            In the US, women&rsquo;s specialty care is billed as a journey —
            multiple visits, repeat workups, top-tier billing codes — before
            anyone gets an answer. Estimate what that costs your organization,
            and what a direct path looks like.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-6 xl:flex-row">
          {/* Inputs */}
          <div className="flex w-full flex-col gap-6 rounded-medium bg-white p-6 xl:w-[540px] xl:shrink-0">
            <p className="type-caps text-secondary">Your organization</p>
            <Field label="Total Employees" value={inputs.employees} onChange={(n) => set({ employees: n })} />
            <div className="flex w-full flex-col gap-2">
              <label className="type-body text-charcoal">% women</label>
              <div className="flex w-full items-center gap-3">
                <span className="type-body flex h-11 w-11 shrink-0 items-center justify-center rounded-small border border-border-taupe bg-white text-espresso">
                  {inputs.pctWomen}
                </span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={inputs.pctWomen}
                  onChange={(e) => set({ pctWomen: Number(e.target.value) })}
                  className="h-0.5 w-full cursor-pointer appearance-none rounded-full bg-border-taupe accent-espresso"
                />
              </div>
            </div>
            <Field label="Average fully-loaded salary" value={inputs.salary} onChange={(n) => set({ salary: n })} prefix="$" />
            <Field
              label="Average health plan cost / employee / year"
              value={inputs.planCost}
              onChange={(n) => set({ planCost: n })}
              prefix="$"
              note="US average: $17,496 (Mercer, 2025)"
            />
            <div className="flex w-full flex-col gap-2">
              <p className="type-body text-charcoal">Estimate mode</p>
              <div className="flex items-center gap-2">
                {(["conservative", "standard"] as EstimateMode[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={inputs.mode === m}
                    onClick={() => set({ mode: m })}
                    className={`type-button cursor-pointer rounded-circle px-7 py-3 capitalize transition-colors ${
                      inputs.mode === m ? "bg-espresso text-white" : "bg-primrose-pale text-espresso hover:bg-primrose"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <p className="type-body-sm text-secondary xl:w-[372px]">
                Conservative uses lower symptom-prevalence, care-seeking, and
                productivity assumptions.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="flex min-w-px flex-1 flex-col gap-px">
            <div className="flex w-full flex-col gap-4 rounded-t-medium bg-white p-6">
              <p className="type-caps text-secondary">Your estimated annual exposure</p>
              <div className="flex flex-col gap-2">
                <p className="font-[family-name:var(--font-display)] text-[80px] leading-none text-espresso [font-feature-settings:'lnum'_1,'tnum'_1]">
                  {usd(r.exposure)}
                </p>
                <p className="type-body text-secondary">
                  across {r.scope.toLocaleString()} women aged 40–60 in your workforce
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col rounded-b-medium bg-white p-6">
              {ROWS.map(({ key, label, note }) => (
                <div key={key} className="flex w-full items-start justify-between gap-4 border-b border-border-taupe/60 py-4 first:pt-0">
                  <div className="flex min-w-px flex-col">
                    <p className="type-h5 text-espresso">{label}</p>
                    <p className="type-body text-secondary">{note}</p>
                  </div>
                  <p className="type-h4 shrink-0 leading-[var(--leading-display-auto)] text-espresso">
                    {usd(r[key])}
                  </p>
                </div>
              ))}

              <div className="flex w-full flex-col gap-3 py-6">
                <div className="flex w-full items-center justify-between">
                  <p className="type-h5 text-espresso">Status quo exposure</p>
                  <p className="type-h4 leading-[var(--leading-display-auto)] text-espresso">{usd(r.exposure)}</p>
                </div>
                <div className="h-0.5 w-full rounded-full bg-espresso" />
              </div>
              <div className="flex w-full flex-col gap-3 pb-6">
                <div className="flex w-full items-center justify-between">
                  <p className="type-h5 text-espresso">Blair investment (scoped rollout)</p>
                  <p className="type-h4 leading-[var(--leading-display-auto)] text-espresso">{usd(r.investment)}</p>
                </div>
                <div
                  className="h-0.5 rounded-full bg-primrose transition-[width] duration-500"
                  style={{ width: `${Math.min(100, (r.investment / Math.max(r.exposure, 1)) * 100)}%` }}
                />
              </div>

              <div className="flex w-full flex-col gap-2 rounded-medium bg-cream p-6">
                <p className="type-caps text-secondary">Estimated return:</p>
                <div className="flex flex-col items-start gap-2 xl:flex-row xl:items-center xl:gap-6">
                  <p className="font-[family-name:var(--font-display)] text-[64px] leading-none text-espresso [font-feature-settings:'lnum'_1,'tnum'_1]">
                    ${r.returnPerDollar.toFixed(2)}
                  </p>
                  <p className="type-body-lg text-secondary xl:w-[450px]">
                    for every $1 invested, assuming Blair mitigates{" "}
                    {Math.round(r.mitigation * 100)}% of exposure in year one.
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-center border-t border-border-taupe/60 pt-6">
                <Button href="/for-teams/demo" variant="espresso">
                  Book a demo to scope your rollout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
