/**
 * ROI calculator model — ported verbatim from rafay's HTML source
 * (Blair Health — Employer Cost Savings Calculator). This model is the
 * design's own source: at the defaults it reproduces the Figma worked
 * example to the dollar ($265,016 exposure, $0.62 per $1).
 *
 * Note from the source: the health-plan-cost input is collected but does not
 * enter any formula — kept on the page because the design shows it, but it
 * changes nothing until the model says otherwise.
 */
export type EstimateMode = "cons" | "typ";

export type RoiInputs = {
  employees: number;
  pctWomen: number; // 20–80 slider
  salary: number;
  planCost: number; // unused by the model (see note)
  mode: EstimateMode;
};

export const DEFAULT_INPUTS: RoiInputs = {
  employees: 2000,
  pctWomen: 50,
  salary: 75000,
  planCost: 17500,
  mode: "cons",
};

export const INPUT_RULES = {
  employees: { min: 10, step: 10 },
  pctWomen: { min: 20, max: 80 },
  salary: { min: 30000, step: 5000 },
  planCost: { min: 5000, step: 500 },
} as const;

/** Assumption sets, verbatim from the source. */
const A = {
  cons: { agePct: 0.35, symptomatic: 0.5, seekCare: 0.45, churn: 900,  absentDays: 2.5, presentShare: 0.2,  presentLoss: 0.04, attrPer1000: 1.2, mitig: 0.35, pepm: 25, scope: 0.5 },
  typ:  { agePct: 0.4,  symptomatic: 0.6, seekCare: 0.55, churn: 1200, absentDays: 3.5, presentShare: 0.28, presentLoss: 0.06, attrPer1000: 2.0, mitig: 0.45, pepm: 25, scope: 0.5 },
};

export function roi(i: RoiInputs) {
  const a = A[i.mode];
  const emp = i.employees || 0;
  const sal = i.salary || 0;

  const women = emp * (i.pctWomen / 100);
  const inScope = women * a.agePct; // women 40-60
  const affected = inScope * a.symptomatic; // symptomatic
  const seekers = affected * a.seekCare; // filing claims

  const redundant = seekers * a.churn;
  const daily = sal / 240;
  const absenteeism = inScope * 0.11 * a.absentDays * daily;
  const presenteeism = affected * a.presentShare * a.presentLoss * sal;
  const attrition = (inScope / 1000) * a.attrPer1000 * 1.5 * sal * 1.25; // senior salary premium
  const exposure = redundant + absenteeism + presenteeism + attrition;

  // Blair: scoped rollout to women in benefits-eligible population
  const investment = women * a.scope * a.pepm * 12;
  const returnPerDollar = investment > 0 ? (exposure * a.mitig) / investment : 0;

  return {
    scope: Math.round(inScope),
    redundant,
    absenteeism,
    presenteeism,
    attrition,
    exposure,
    investment,
    returnPerDollar,
    mitigation: a.mitig,
  };
}

export const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
