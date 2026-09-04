/**
 * ROI calculator model — PLACEHOLDER MATH.
 *
 * Every constant below was reverse-derived so the calculator reproduces the
 * design's worked example exactly (2,000 employees, 50% women, $75k salary,
 * $17.5k plan cost → $265,016 exposure, $0.62 return). Rafay will supply the
 * real calculations; replace the constants (or the functions) here and the
 * page updates — no component changes needed.
 */
export type EstimateMode = "conservative" | "standard";

export type RoiInputs = {
  employees: number;
  pctWomen: number; // 0–100
  salary: number;
  planCost: number;
  mode: EstimateMode;
};

export const DEFAULT_INPUTS: RoiInputs = {
  employees: 2000,
  pctWomen: 50,
  salary: 75000,
  planCost: 17500,
  mode: "conservative",
};

const M = {
  aged40to60: 0.35, // share of women in scope
  careSeeking: 0.45, // share generating redundant claims
  redundantPctOfPlan: 0.025714, // $450 at the $17,496 US average
  absenteeismPrevalence: 0.11, // Mayo: miss >=1 workday/yr
  absenteeismDays: 2.5,
  workDaysPerYear: 240,
  presenteeismPctOfSalary: 0.004,
  attritionRate: 0.0015,
  attritionCostX: 1.5,
  investmentPerWoman: 428.5714, // $150k at 350 women — scoped rollout stub
  mitigation: 0.35,
  standardUplift: 1.6, // "standard" mode raises prevalence/productivity terms
};

export function roi(i: RoiInputs) {
  const up = i.mode === "standard" ? M.standardUplift : 1;
  const women = (i.employees * i.pctWomen) / 100;
  const scope = Math.round(women * M.aged40to60);

  const redundant = scope * M.careSeeking * up * (i.planCost * M.redundantPctOfPlan);
  const absenteeism =
    scope * M.absenteeismPrevalence * up * M.absenteeismDays * (i.salary / M.workDaysPerYear);
  const presenteeism = scope * i.salary * M.presenteeismPctOfSalary * up;
  const attrition = scope * M.attritionRate * up * i.salary * M.attritionCostX;

  const exposure = redundant + absenteeism + presenteeism + attrition;
  const investment = scope * M.investmentPerWoman;
  const returnPerDollar = investment > 0 ? (exposure * M.mitigation) / investment : 0;

  return { scope, redundant, absenteeism, presenteeism, attrition, exposure, investment, returnPerDollar, mitigation: M.mitigation };
}

export const usd = (n: number) =>
  "$" + Math.round(n).toLocaleString("en-US");
