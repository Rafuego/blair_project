import type { ComingSoonFeature } from "@/components/care/ComingSoon";
import type { NutritionStep } from "@/components/care/NutritionSteps";
import type { Program } from "@/components/care/NutritionPrograms";

export const NUTRI_HERO = {
  title: "Nutrition that fits the body you have now.",
  body: "Your body uses food differently than it used to. Energy, muscle, blood sugar, body composition. The good news: nutrition is one of the most powerful levers you have, and you do not have to figure it out alone. Nutrition was the number one thing women told us they wanted next, so we built it properly: one-on-one, personalized, and practical from day one. Two programs, both available today.",
  image: "/images/nutrition/hero.png",
  padBottom: true,
  primary: { label: "Book a nutrition visit", href: "/nutrition-visit" },
  secondary: { label: "See the two programs", href: "#programs" },
};

export const NUTRI_PROGRAMS_COPY = {
  title: "Two programs.\nPick the one that matches your goal.",
  intro:
    "Both are open now, both are one-on-one, and both are fully personalized. The difference is what we optimize for.",
  footTitle: "Not sure which one?",
  footBody:
    "Start with either. You will choose together in your first visit, and you can switch as your goals change.",
};

export const NUTRI_PROGRAMS: Program[] = [
  {
    title: "Fat Loss and Improved Body Composition",
    body: "For women navigating changes in body composition, including increased abdominal weight gain. Less fat, more muscle, more energy.",
    fit: "Your body has changed even though your habits have not.",
    image: "/images/nutrition/program-fatloss.png",
  },
  {
    title: "Longevity and Healthy Aging",
    body: "For women looking to optimize nutrition to support healthy aging and long-term health. Muscle and bone, heart health, blood sugar, and steady energy.",
    fit: "You feel well and want to stay that way, or you have numbers you would like to move.",
    image: "/images/nutrition/program-longevity.png",
    imagePosition: "center 44%",
  },
];

export const NUTRI_STEPS = {
  title: "Simple to start. Built to stick.",
  intro: "Three steps, and you are eating with a plan instead of a rulebook.",
  steps: [
    {
      title: "Tell us your goal",
      body: "A short intake covers your health history, your routine, your symptoms, and what you want to change first.",
    },
    {
      title: "Meet your nutritionist",
      body: "A one-on-one video visit. You leave with a personalized plan you can start that week, not a printout",
    },
    {
      title: "Keep going, with support",
      body: "Follow-ups to review what is working, plus messaging and tracking in the Blair app between visits.",
    },
  ] satisfies NutritionStep[],
  credit:
    "Your plan is built by a certified nutrition professional, Kira Volenecz, CNP, or Melissa Ieraci, RHN, and coordinated with your Blair care team.",
};

export const NUTRI_COMING_SOON = {
  titleLead: "Something big is coming:",
  titleAccent: "Medical Weight Management",
  body: "In Fall 2026 we are launching a medically supervised weight management program. Clinical care, provider oversight, and expert nutrition support working together in one plan. If weight has felt like the thing you cannot solve on your own, this is being built for you.",
  features: [
    {
      icon: "/icons/nutrition/supervised.svg",
      title: "Clinically supervised",
      body: "A Blair provider oversees your plan, not an app.",
    },
    {
      icon: "/icons/nutrition/nutrition-builtin.svg",
      title: "Nutrition built in",
      body: "The nutrition support on this page comes with it, not as a separate purchase.",
    },
    {
      icon: "/icons/nutrition/specialist.svg",
      title: "Designed by a specialist",
      body: "Built by a leading Obesity Medicine Specialist.",
    },
  ] satisfies ComingSoonFeature[],
  form: {
    title:
      "Join our mailing list for exciting updates about this program in Fall 2026",
    buttonLabel: "Join the list",
    footnote:
      "No spam, no pressure. Just the launch news and a few things worth reading in the meantime.",
  },
};

export const NUTRI_SPECIALIST = {
  title: "Care designed by one of North America's leading Obesity Medicine specialists.",
  titleWidth: 912,
  intro:
    "Blair's Medical Weight Management program is designed by Dr. Pooja Singhal, MD, FACG, DABOM",
  image: "/images/nutrition/specialist-singhal.png",
  lead: "",
  leadName: "Dr. Singhal",
  leadRest:
    " is a board-certified gastroenterologist and obesity medicine physician who was selected as both Chief Resident and Chief Fellow at Georgetown University Hospital.",
  closing:
    "Over more than 13 years in practice and 14,000 endoscopic procedures, she founded and leads Oklahoma Gastro Health and Wellness, where she pioneered an integrated gastrometabolic practice bringing gastroenterology, obesity medicine, metabolic liver disease, nutrition, and preventive care together in one model of care.",
  assurance:
    "Every Blair provider, NP or MD, is licensed, specialist-trained, and held to the same clinical standard.",
};

/** Only the first question has answer copy in the design. */
export const NUTRI_FAQ = [
  {
    question: "Is this a diet?",
    answer:
      "No. There is no meal plan everyone gets, no forbidden foods, and no counting for the sake of counting. Your plan is built around your goals, your health history, and the food you actually enjoy, then adjusted as your life and your body change.",
  },
  { question: "Which program should I choose?", answer: null },
  {
    question: "Can nutrition help if I am already on hormone therapy?",
    answer: null,
  },
  {
    question: "How is this different from Medical Weight Management?",
    answer: null,
  },
];

export const NUTRI_FINAL_CTA = {
  title: "Pick your goal. Get your plan. Feel the difference.",
  body: "One-on-one nutrition support, open now and coordinated with your care team, with Medical Weight Management arriving in Fall 2026.",
  image: "/images/urology/final-cta.png",
  panelHeight: 578,
  primaryLabel: "Book a nutrition visit",
  primaryHref: "/nutrition-visit",
  bodyLarge: true,
};
