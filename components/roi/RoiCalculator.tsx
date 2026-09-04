"use client";

import { useState } from "react";
import { DEFAULT_INPUTS, INPUT_RULES, roi, usd, type EstimateMode, type RoiInputs } from "@/lib/roi";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

/** Dark-page calculator per the frame (3224:6428): espresso ground, dark
 *  inputs card, white results card with primrose exposure and return bands. */
function Field({
  label,
  value,
  onChange,
  note,
  min,
  step,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  note?: string;
  min?: number;
  step?: number;
}) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="type-body text-white">{label}</label>
      <input
        type="number"
        value={value}
        min={min}
        step={step}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
        className="type-body h-11 w-[89%] rounded-circle bg-white/10 px-6 text-white focus:ring-1 focus:ring-primrose focus:outline-none"
      />
      {note && <p className="type-body-sm text-taupe">{note}</p>}
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
    <section className="w-full pt-40 pb-16 xl:pt-50">
      <Container className="flex flex-col gap-14 px-6 xl:px-18">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <h1 className="type-h2 text-white xl:w-[1057px]">
            What is the long road to an answer costing you?
          </h1>
          <p className="type-body text-taupe xl:w-[600px]">
            In the US, women&rsquo;s specialty care is billed as a journey —
            multiple visits, repeat workups, top-tier billing codes — before
            anyone gets an answer. Estimate what that costs your organization,
            and what a direct path looks like.
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-6 xl:flex-row">
          {/* Inputs — dark card */}
          <div className="flex w-full flex-col gap-6 rounded-large bg-white/5 p-6 xl:w-[418px] xl:shrink-0">
            <p className="type-caps text-taupe">Your organization</p>
            <Field
              label="Total Employees"
              value={inputs.employees}
              onChange={(n) => set({ employees: n })}
              min={INPUT_RULES.employees.min}
              step={INPUT_RULES.employees.step}
            />
            <div className="flex w-full flex-col gap-3">
              <label className="type-body text-white">% women</label>
              <div className="flex w-full items-center gap-3">
                <span className="type-body flex h-10 w-12 shrink-0 items-center justify-center rounded-circle bg-white/10 text-white">
                  {inputs.pctWomen}
                </span>
                <input
                  type="range"
                  min={INPUT_RULES.pctWomen.min}
                  max={INPUT_RULES.pctWomen.max}
                  value={inputs.pctWomen}
                  onChange={(e) => set({ pctWomen: Number(e.target.value) })}
                  className="h-0.5 w-full cursor-pointer appearance-none rounded-full bg-white/30 accent-primrose"
                />
              </div>
            </div>
            <Field
              label="Average fully-loaded salary"
              value={inputs.salary}
              onChange={(n) => set({ salary: n })}
              min={INPUT_RULES.salary.min}
              step={INPUT_RULES.salary.step}
            />
            <Field
              label="Average health plan cost / employee / year"
              value={inputs.planCost}
              onChange={(n) => set({ planCost: n })}
              min={INPUT_RULES.planCost.min}
              step={INPUT_RULES.planCost.step}
              note="US average: $17,496 (Mercer, 2025)"
            />
            <div className="flex w-full flex-col gap-3">
              <p className="type-body text-white">Estimate mode</p>
              <div className="flex items-center gap-2">
                {([["cons", "Conservative"], ["typ", "Typical"]] as [EstimateMode, string][]).map(([m, lbl]) => (
                  <button
                    key={m}
                    type="button"
                    aria-pressed={inputs.mode === m}
                    onClick={() => set({ mode: m })}
                    className={`type-button cursor-pointer rounded-circle px-6 py-2.5 transition-colors ${
                      inputs.mode === m
                        ? "bg-primrose text-espresso"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {lbl}
                  </button>
                ))}
              </div>
              <p className="type-body-sm text-taupe xl:w-[300px]">
                Conservative uses lower symptom-prevalence, care-seeking, and
                productivity assumptions.
              </p>
            </div>
          </div>

          {/* Results — white card, primrose bands */}
          <div className="flex min-w-px flex-1 flex-col overflow-hidden rounded-large bg-white">
            <div className="flex w-full flex-col gap-3 bg-primrose px-6 py-6 text-espresso">
              <p className="type-caps">Your estimated annual exposure</p>
              <div className="flex flex-col gap-1">
                <p className="font-[family-name:var(--font-display)] text-[56px] leading-none [font-feature-settings:'lnum'_1,'tnum'_1] xl:text-[64px]">
                  {usd(r.exposure)}
                </p>
                <p className="type-body-sm">
                  across {r.scope.toLocaleString()} women aged 40–60 in your workforce
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col px-6 pb-6">
              {ROWS.map(({ key, label, note }) => (
                <div key={key} className="flex w-full items-center justify-between gap-4 border-b border-border-taupe/50 py-4">
                  <div className="flex min-w-px flex-col">
                    <p className="type-body-medium text-espresso">{label}</p>
                    <p className="type-body-sm text-secondary">{note}</p>
                  </div>
                  <p className="shrink-0 font-[family-name:var(--font-display)] text-[28px] leading-none text-espresso [font-feature-settings:'lnum'_1,'tnum'_1]">
                    {usd(r[key])}
                  </p>
                </div>
              ))}

              <div className="flex w-full items-center justify-between gap-4 py-4">
                <p className="type-body-medium text-espresso">Status quo exposure</p>
                <p className="font-[family-name:var(--font-display)] text-[28px] leading-none text-espresso [font-feature-settings:'lnum'_1,'tnum'_1]">
                  {usd(r.exposure)}
                </p>
              </div>
              <div className="h-[26px] w-full rounded-[8px] bg-espresso" />

              <div className="flex w-full items-center justify-between gap-4 pt-5 pb-4">
                <p className="type-body-medium text-espresso">Blair investment (scoped rollout)</p>
                <p className="font-[family-name:var(--font-display)] text-[28px] leading-none text-espresso [font-feature-settings:'lnum'_1,'tnum'_1]">
                  {usd(r.investment)}
                </p>
              </div>
              <div className="h-[26px] w-full rounded-[8px] bg-cream">
                <div
                  className="h-full rounded-[8px] bg-primrose-pale transition-[width] duration-500"
                  style={{ width: `${Math.min(100, (r.investment / Math.max(r.exposure, 1)) * 100)}%` }}
                />
              </div>

              <div className="mt-6 flex w-full flex-col gap-2 rounded-medium bg-primrose-pale p-6 text-espresso">
                <p className="type-caps">Estimated return</p>
                <div className="flex flex-col items-start gap-2 xl:flex-row xl:items-center xl:gap-6">
                  <p className="font-[family-name:var(--font-display)] text-[56px] leading-none [font-feature-settings:'lnum'_1,'tnum'_1]">
                    ${r.returnPerDollar.toFixed(2)}
                  </p>
                  <p className="type-body xl:w-[420px]">
                    for every $1 invested, assuming Blair mitigates{" "}
                    <span className="font-medium">{Math.round(r.mitigation * 100)}%</span>{" "}
                    of exposure in year one.
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-center pt-6">
                <Button href="/for-teams/demo" variant="primrose">
                  Book a demo — see your model live →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
