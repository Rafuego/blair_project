/**
 * For Employers (USA) page data — Figma frame 3224:5039.
 * Copy is verbatim from the frame. Items marked `draft: true` have no copy
 * in the design yet (collapsed accordion / inactive tab states) and carry
 * drafted text pending final copy from the design team.
 */

export const EMP_HERO = {
  title: "The health benefit your retention numbers are asking for",
  body: "Menopause, pelvic health, and weight management - including clinically managed GLP-1 support - are where women's care and your benefits stack quietly fall short. Blair delivers specialist-led diagnosis, treatment, and ongoing care that keeps your most experienced people healthy, productive, and here.",
};

export const TRUSTED_LOGOS = [
  "/images/employers/trusted-1.svg",
  "/images/employers/trusted-2.svg",
  "/images/employers/trusted-3.svg",
  "/images/employers/trusted-4.svg",
];

export const PRESS_LOGOS = [
  "/images/employers/press-1.svg",
  "/images/employers/press-2.svg",
  "/images/employers/press-3.svg",
  "/images/employers/press-4.svg",
];

/** Steps 2–5 show title-only in the design (dimmed states). */
export const JOURNEY_STEPS = [
  { title: "PCP visit", body: "Symptoms raised; attributed to stress or age" },
  { title: "PCP follow-up", body: null },
  { title: "Specialist #1", note: "(often wrong specialty)", body: null },
  { title: "Specialist #2", body: null },
  { title: "Still no answer", body: null },
];

export const INVOICE_ROWS = [
  { item: "1", desc: "Office visit + labs", cost: "+$150–300" },
  { item: "2", desc: "Visit + Rx", cost: "+$130–300" },
  { item: "3", desc: "99204/99205 + labs/imaging", cost: "+$400–800" },
  { item: "4", desc: "99204/99205 + repeat labs", cost: "+$400–800" },
];

export const INVOICE_TOTAL = "$1,080–2150";

export const PATH_STEPS = [
  "Specialist-designed assessment",
  "Specialist-informed diagnosis",
  "Treatment plan + prescription",
  "Ongoing management, on-platform",
];

export const WELLNESS_CARDS = [
  {
    icon: "/images/employers/icon-education.svg",
    title: ["Education and", "navigation platforms"],
    body: "raise awareness — then hand your employee back to a system with no one to treat her.",
    width: 312,
  },
  {
    icon: "/images/employers/icon-nurse.svg",
    title: ["Telehealth generalists"],
    body: "can see her fast, but menopause, pelvic health, and weight management are specialist domains — misdiagnosis and trial-and-error are the norm.",
    width: 348,
  },
  {
    icon: "/images/employers/icon-hospital.svg",
    title: ["Single-condition", "menopause clinics"],
    body: "treat one condition, and leave the rest of her care fragmented.",
    width: 262,
  },
];

export const SCALE_ACCORDIONS = [
  {
    title: "Specialist-led, clinically governed",
    body: "Care pathways built and overseen by women's health specialists, delivered by licensed providers in your employees' states.",
    draft: false,
  },
  {
    title: "Treatment, not triage",
    body: "Every employee gets diagnosis, prescriptions, and a real treatment plan — not a referral list and a pamphlet.",
    draft: true,
  },
  {
    title: "Longitudinal by design",
    body: "Follow-up, dose adjustments, and symptom tracking continue on-platform, so care doesn't end at the first visit.",
    draft: true,
  },
  {
    title: "Measurable from day one",
    body: "Aggregate utilization and outcomes reporting shows engagement and impact from launch.",
    draft: true,
  },
];

export const CATEGORY_TABS = [
  {
    label: "Perimenopause & Menopause",
    title: "Perimenopause & Menopause",
    body: "The most misdiagnosed stretch of women's healthcare — years of wrong-turn claims before an answer. Blair delivers evidence-based diagnosis, hormone and non-hormone treatment, and ongoing management from the first visit.",
    draft: false,
  },
  {
    label: "Urology & Pelvic Health",
    title: "Urology & Pelvic Health",
    body: "Bladder, pelvic floor, and intimate health — conditions women manage silently for years while the claims add up. Blair diagnoses and treats them properly from the first assessment.",
    draft: true,
  },
  {
    label: "Weight Management",
    title: "Weight Management",
    body: "Clinically managed weight care, including GLP-1 support — right candidates, right doses, and real follow-through instead of an unmanaged pharmacy line item.",
    draft: true,
  },
];

export const MATH_POINTS = [
  {
    n: "1.",
    title: "Diagnostic churn comes off your plan",
    body: "The assessment→diagnosis→treatment journey happens inside Blair's flat fee. The wrong-specialty referrals, repeat new-patient specialist visits, and duplicate labs from Section 2b simply never get billed as claims.",
  },
  {
    n: "2.",
    title: "GLP-1 spend gets clinical management",
    body: "Right candidate, right dose, real follow-through — instead of an unmanaged pharmacy line item growing 30%+ a year.",
  },
  {
    n: "3.",
    title: "The human costs shrink",
    body: "Fewer symptom-driven absences, less presenteeism, fewer resignations from your most experienced cohort — the costs that never show up in claims but dwarf them.",
  },
];

export const PLAN_CARDS = [
  {
    icon: "/images/employers/icon-arrowbend.svg",
    title: ["Integrates with your", "insurance provider"],
    body: "Blair fits how you already pay for care, not another disconnected point solution.",
  },
  {
    icon: "/images/employers/icon-arrowsquare.svg",
    title: ["A fixed line item instead", "of diagnostic churn"],
    body: "Flat PEPM replaces the unpredictable E/M visits, repeat workups, and duplicate labs of the long road to diagnosis.",
  },
  {
    icon: "/images/employers/icon-star.svg",
    title: ["One accurate referral,", "not three exploratory ones"],
    body: "When in-person care is needed, employees arrive diagnosed and documented.",
  },
];

export const PLAN_MINIS = [
  {
    icon: "/images/employers/icon-fastforward.svg",
    title: "Fast rollout",
    body: "Launch in weeks: employer-controlled activation and seat management, communications kit included.",
  },
  {
    icon: "/images/employers/icon-shield.svg",
    title: "Private and secure",
    body: "HIPAA-compliant; employer reporting is aggregate-only, never individual.",
  },
  {
    icon: "/images/employers/icon-mappin.svg",
    title: "Licensed where she lives",
    body: "Care delivered by providers licensed in the employee's state.",
  },
  {
    icon: "/images/employers/icon-listchecks.svg",
    title: "Works with your stack",
    body: "Complements existing medical plans and point solutions; clinical summaries to her PCP on request.",
  },
];
