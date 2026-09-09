export type FaqItem = { question: string; answer: string | null };

/**
 * Homepage FAQ — regional. Canada from FAQ_CA (3460:8601), US from
 * FAQ_US-opened (3461:8465), rendered verbatim — including the design's
 * "[CONFIRM: ...]" placeholders, per rafay: the page shows exactly what the
 * frames show until the copy is updated there.
 */
export const FAQ_CA: FaqItem[] = [
  {
    question: "Who is Blair for?",
    answer:
      "Women across life stages: perimenopause, menopause, urology and pelvic health, and nutrition. Anyone can create an account, take an assessment, and explore. If in-person care is safer for you, we'll tell you. Medical safety is a guiding principle at Blair.",
  },
  {
    question: "Is Blair entirely virtual?",
    answer:
      "Yes. Every visit happens online, so you can access specialist-level care from the comfort of your own home. No travel, no waiting rooms, no referral needed.",
  },
  {
    question: "Can I get ongoing care after my first visit?",
    answer:
      "Absolutely. Blair is built for ongoing care, not one-off appointments. You can book a visit anytime, whether it's a follow-up, a new concern, or a check-in on how your plan is working.",
  },
  {
    question: "Is Blair covered by my Healthcare Spending Account (HSA)?",
    answer:
      "Yes. Blair Health appointments are covered by Healthcare Spending Accounts. Check with your plan provider to confirm the details of your coverage.",
  },
  {
    // Verbatim from frame 3460:8601, marker included — the frame is the
    // source of truth for this copy. (Note: $59/mo does not match the
    // pricing band's plans.)
    question: "What does it cost?",
    answer:
      "Pay as you go from $100 per visit, or get every care area with the monthly subscription at $59/mo. Full details in the pricing section above. [CONFIRM: update if pricing decision changes.]",
  },
  {
    question: "Where is Blair available?",
    answer: "Blair is available in all Canadian provinces.",
  },
  {
    question: "Will my doctor be updated about my care if I request this?",
    answer:
      "Yes, absolutely. With your consent, we'll share updates about your visits and care plan with your other care providers, so everyone supporting your health stays on the same page.",
  },
  {
    question: "Can I get a work note?",
    answer:
      "We aren't able to provide notes for time away from work or modified work accommodations. Those requests are best supported by a clinician who can see you in person. We're here for everything else on your care journey.",
  },
];

export const FAQ_US: FaqItem[] = [
  {
    question: "Who is Blair for?",
    answer:
      "Women across life stages: perimenopause, menopause, urology and pelvic health, and nutrition. Anyone can create an account, take an assessment, and explore. If in-person care is safer for you, we'll tell you. Medical safety is a guiding principle at Blair.",
  },
  {
    question: "Is Blair entirely virtual?",
    answer:
      "Yes. Every visit happens online, so you can access specialist-level care from the comfort of your own home. No travel, no waiting rooms, no referral needed.",
  },
  {
    question: "Is Blair covered by insurance, HSA, or FSA?",
    answer: "[CONFIRM: US insurance, HSA/FSA positioning with Madge and Lindsay.]",
  },
  { question: "What does it cost?", answer: "[CONFIRM: US pricing.]" },
  { question: "Where is Blair available?", answer: "[CONFIRM: US state list at launch.]" },
];
