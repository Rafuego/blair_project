export type FaqItem = { question: string; answer: string | null };

/**
 * Order matches the Figma stack. Only the first item has answer copy in the
 * design — the rest are drawn collapsed, so their answers do not exist yet.
 * Items with a null answer render as plain rows rather than opening empty.
 */
export const FAQ_CA: FaqItem[] = [
  {
    question: "Who is Blair for?",
    answer:
      "Women across life stages: perimenopause, menopause, urology and pelvic health, and nutrition. Anyone can create an account, take an assessment, and explore. If in-person care is safer for you, we'll tell you. Medical safety is a guiding principle at Blair.",
  },
  { question: "Is Blair entirely virtual?", answer: null },
  { question: "Can I get ongoing care after my first visit?", answer: null },
  {
    question: "Is Blair covered by my Healthcare Spending Account (HSA)?",
    answer: null,
  },
  { question: "What does it cost?", answer: null },
  { question: "How do the included appointments work?", answer: null },
  { question: "Where is Blair available?", answer: null },
  {
    question: "Will my doctor be updated about my care if I request this?",
    answer: null,
  },
  { question: "Can I get a work note?", answer: null },
  { question: "What if I want to stop?", answer: null },
];
